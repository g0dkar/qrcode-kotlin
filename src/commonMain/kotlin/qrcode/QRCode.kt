package qrcode

import qrcode.QRCode.Companion.ofCircles
import qrcode.QRCode.Companion.ofRoundedSquares
import qrcode.QRCode.Companion.ofSquares
import qrcode.QRCodeBuilder.QRCodeShapesEnum.CIRCLE
import qrcode.QRCodeBuilder.QRCodeShapesEnum.CUSTOM
import qrcode.QRCodeBuilder.QRCodeShapesEnum.ROUNDED_SQUARE
import qrcode.QRCodeBuilder.QRCodeShapesEnum.SQUARE
import qrcode.color.DefaultColorFunction
import qrcode.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquareType.POSITION_ADJUST
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.raw.ErrorCorrectionLevel
import qrcode.raw.QRCodeProcessor
import qrcode.raw.QRCodeProcessor.Companion.DEFAULT_CELL_SIZE
import qrcode.raw.QRCodeRawData
import qrcode.render.QRCodeGraphics
import qrcode.render.QRCodeGraphicsFactory
import qrcode.shape.CircleShapeFunction
import qrcode.shape.DefaultShapeFunction
import qrcode.shape.QRCodeShapeFunction
import qrcode.shape.RoundSquaresShapeFunction
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic

/**
 * A simple class to create easily create aesthetic pleasing QRCodes.
 *
 * It'll create a [QRCodeProcessor] and build a custom render function on top of it.
 *
 * It includes things like:
 *
 * - QR Codes with a logo at the center
 * - QR Codes with dots instead of squares
 * - Colorful QR Codes (including linear gradient colors)
 *
 * If you have a suggestion for a nice QR Code style, feel free to open a PR, or an Issue with your suggestion :)
 *
 * @see QRCodeBuilder
 * @see ofSquares
 * @see ofCircles
 * @see ofRoundedSquares
 *
 * @author Rafael Lins - g0dkar
 *
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE", "MemberVisibilityCanBePrivate")
class QRCode @JvmOverloads constructor(
    val data: String,
    val squareSize: Int = DEFAULT_SQUARE_SIZE,
    val colorFn: QRCodeColorFunction = DefaultColorFunction(),
    val shapeFn: QRCodeShapeFunction = DefaultShapeFunction(squareSize, innerSpace = 0),
    var graphicsFactory: QRCodeGraphicsFactory = QRCodeGraphicsFactory(),
    errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.VERY_HIGH,
    minTypeNum: Int = 6,
    private val doBefore: QRCode.(QRCodeGraphics, Int, Int) -> Unit = EMPTY_FN,
    private val doAfter: QRCode.(QRCodeGraphics, Int, Int) -> Unit = EMPTY_FN,
) {
    companion object {
        internal val EMPTY_FN: QRCode.(QRCodeGraphics, Int, Int) -> Unit = { _, _, _ -> }

        /** Default value of [squareSize]. */
        const val DEFAULT_SQUARE_SIZE = DEFAULT_CELL_SIZE

        /**
         * Creates a new [QRCodeBuilder] to build a Fancy QRCode which uses squares as the base shape (this is the default)
         *
         * @see DefaultShapeFunction
         */
        @JvmStatic
        fun ofSquares(): QRCodeBuilder = QRCodeBuilder(SQUARE)

        /**
         * Creates a new [QRCodeBuilder] to build a Fancy QRCode which uses circles as the base shape.
         *
         * This one was based on an Apple Music QRCode.
         *
         * @see CircleShapeFunction
         */
        @JvmStatic
        fun ofCircles(): QRCodeBuilder = QRCodeBuilder(CIRCLE)

        /**
         * Creates a new [QRCodeBuilder] to build a Fancy QRCode which uses rounded squares as the base shape.
         *
         * @see RoundSquaresShapeFunction
         */
        @JvmStatic
        fun ofRoundedSquares(): QRCodeBuilder = QRCodeBuilder(ROUNDED_SQUARE)

        /**
         * Creates a new [QRCodeBuilder] to build a QRCode which uses a custom shape function.
         *
         * @see QRCodeShapeFunction
         * @see DefaultShapeFunction
         */
        @JvmStatic
        fun ofCustomShape(customShapeFunction: QRCodeShapeFunction): QRCodeBuilder = QRCodeBuilder(CUSTOM, customShapeFunction)
    }

    /** The underlying [QRCodeProcessor] object that'll do all calculations */
    val qrCodeProcessor: QRCodeProcessor =
        QRCodeProcessor(data, ErrorCorrectionLevel.VERY_HIGH, graphicsFactory = graphicsFactory)

    /** Computed type number for the given [data] parameter */
    val typeNum = QRCodeProcessor.typeForDataAndECL(data, errorCorrectionLevel).coerceAtLeast(minTypeNum)

    /** Raw QRCode data computed by [QRCodeProcessor] */
    val rawData = qrCodeProcessor.encode(typeNum)

    /** Calculated size of the whole QRCode (the final image will be a square of `computedSize` by `computedSize`) */
    val computedSize = qrCodeProcessor.computeImageSize(squareSize, squareSize, rawData)

    /** The [QRCodeGraphics] (aka "canvas") where all the drawing will happen */
    val graphics = graphicsFactory.newGraphicsSquare(computedSize)

    private fun draw(xOffset: Int, yOffset: Int, rawData: QRCodeRawData, canvas: QRCodeGraphics): QRCodeGraphics =
        qrCodeProcessor.renderShaded(
            cellSize = squareSize,
            margin = squareSize,
            rawData = rawData,
            qrCodeGraphics = canvas,
        ) { x, y, currentSquare, _ ->
            val actualSquare = currentSquare.parent ?: currentSquare

            if (!actualSquare.rendered) {
                when (currentSquare.squareInfo.type) {
                    POSITION_PROBE, POSITION_ADJUST -> shapeFn.renderControlSquare(
                        xOffset,
                        yOffset,
                        colorFn,
                        actualSquare,
                        canvas,
                        this,
                    )

                    else -> shapeFn.renderSquare(xOffset + x, yOffset + y, colorFn, currentSquare, canvas, this)
                }

                actualSquare.rendered = true
            }
        }

    /** Executes all the drawing of the QRCode and returns the [QRCodeGraphics] of the complete QRCode. */
    @JvmOverloads
    fun render(qrCodeGraphics: QRCodeGraphics = graphics, xOffset: Int = 0, yOffset: Int = 0): QRCodeGraphics {
        colorFn.beforeRender(this, qrCodeGraphics)
        shapeFn.beforeRender(this, qrCodeGraphics)
        doBefore(qrCodeGraphics, xOffset, yOffset)
        return draw(xOffset, yOffset, rawData, qrCodeGraphics).also { doAfter(it, xOffset, yOffset) }
    }

    /** Calls [render] and then returns the bytes of a [format] (default = PNG) render of the QRCode. */
    @JvmOverloads
    fun renderToBytes(format: String = "PNG"): ByteArray {
        return render().getBytes(format)
    }

    /**
     * Completely resets the QRCode drawing. After this, you can call [renderToBytes] or [render] to redraw the
     * whole QRCode. Useful when you want, for example, a transparent background QRCode to add to a larger image and
     * then the same QRCode drawn on top of a custom background.
     */
    fun reset() {
        rawData.forEach { row ->
            row.forEach { cell ->
                cell.rendered = false
                cell.parent?.rendered = false
            }
        }
        graphics.reset()
    }
}
