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
 * A fun class to easily create some of the more fancy QRCodes people come up with these days.
 *
 * It gets a [QRCodeProcessor] on the constructor and builds a render function on top of it.
 *
 * It includes things like:
 *
 * - A QR Code with a logo at the center
 * - A QR Code with dots instead of squares
 * - Colorful QR Codes
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
    val shapeFn: QRCodeShapeFunction = DefaultShapeFunction(squareSize),
    var graphicsFactory: QRCodeGraphicsFactory = QRCodeGraphicsFactory(),
    private val doBefore: QRCode.(QRCodeGraphics) -> Unit = EMPTY_FN,
    private val doAfter: QRCode.(QRCodeGraphics) -> Unit = EMPTY_FN,
) {
    companion object {
        internal val EMPTY_FN: QRCode.(QRCodeGraphics) -> Unit = { }

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
        QRCodeProcessor(data, ErrorCorrectionLevel.H, graphicsFactory = graphicsFactory)

    /** Computed type number for the given [data] parameter */
    val typeNum = QRCodeProcessor.typeForDataAndECL(data, ErrorCorrectionLevel.H).coerceAtLeast(6)

    /** Raw QRCode data computed by [QRCodeProcessor] */
    val rawData = qrCodeProcessor.encode(typeNum)

    /** Calculated size of the whole QRCode (the final image will be a square of `computedSize` by `computedSize`) */
    val computedSize = qrCodeProcessor.computeImageSize(squareSize, squareSize, rawData)

    private fun draw(rawData: QRCodeRawData, canvas: QRCodeGraphics): QRCodeGraphics =
        qrCodeProcessor.renderShaded(
            cellSize = squareSize,
            margin = squareSize,
            rawData = rawData,
            qrCodeGraphics = canvas,
        ) { currentSquare, currentCanvas ->
            val actualSquare = currentSquare.parent ?: currentSquare

            if (!actualSquare.rendered) {
                when (currentSquare.squareInfo.type) {
                    POSITION_PROBE, POSITION_ADJUST -> shapeFn.renderControlSquare(
                        colorFn,
                        actualSquare,
                        currentCanvas,
                        canvas,
                        this,
                    )

                    else -> shapeFn.renderSquare(colorFn, currentSquare, currentCanvas, canvas, this)
                }

                actualSquare.rendered = true
            }
        }

    fun renderToGraphics(): QRCodeGraphics {
        val qrCodeGraphics = graphicsFactory.newGraphicsSquare(computedSize)
        colorFn.beforeRender(this, qrCodeGraphics)
        shapeFn.beforeRender(this, qrCodeGraphics)
        doBefore(qrCodeGraphics)
        return draw(rawData, qrCodeGraphics).also { doAfter(it) }
    }

    fun render(format: String = "PNG"): ByteArray {
        return renderToGraphics().getBytes(format)
    }
}
