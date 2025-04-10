package qrcode

import qrcode.QRCode.Companion.DEFAULT_QRCODE_SIZE
import qrcode.QRCode.Companion.DEFAULT_SQUARE_SIZE
import qrcode.QRCode.Companion.EMPTY_FN
import qrcode.QRCode.Companion.ofCircles
import qrcode.QRCode.Companion.ofRoundedSquares
import qrcode.QRCode.Companion.ofSquares
import qrcode.QRCodeShapesEnum.CIRCLE
import qrcode.QRCodeShapesEnum.CUSTOM
import qrcode.QRCodeShapesEnum.ROUNDED_SQUARE
import qrcode.QRCodeShapesEnum.SQUARE
import qrcode.color.DefaultColorFunction
import qrcode.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquareType.POSITION_ADJUST
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.raw.ErrorCorrectionLevel
import qrcode.raw.MaskPattern
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
import kotlin.math.floor
import kotlin.math.min

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
    /** Data that will be encoded. */
    val data: String,
    /** Size in pixels of each square of the QR Code - Defaults to [DEFAULT_SQUARE_SIZE] (25px) */
    squareSize: Int = DEFAULT_SQUARE_SIZE,
    /** Size in pixels of the whole QR Code canvas - Defaults to [DEFAULT_QRCODE_SIZE] (0 = compute size automatically) */
    canvasSize: Int = DEFAULT_QRCODE_SIZE,
    /** Offset drawing the QRCode by this amount on the X axis (horizontal) - Defaults to `0` (zero) */
    val xOffset: Int = DEFAULT_X_OFFSET,
    /** Offset drawing the QRCode by this amount on the Y axis (vertical) - Defaults to `0` (zero) */
    val yOffset: Int = DEFAULT_Y_OFFSET,
    /** Function that will handle color processing (which color is "light" and which is "dark") - Defaults to [DefaultColorFunction]. */
    val colorFn: QRCodeColorFunction = DefaultColorFunction(),
    /** Function that will handle drawing the shapes of each square - Defaults to [DefaultShapeFunction] with `innerSpace = 0`. */
    val shapeFn: QRCodeShapeFunction = DefaultShapeFunction(squareSize, innerSpace = 0),
    /** Factory of [QRCodeGraphics] instances - Defaults to [QRCodeGraphicsFactory]. */
    var graphicsFactory: QRCodeGraphicsFactory = QRCodeGraphicsFactory(),
    /** Error Correction Level to add to embed in the QRCode. The higher the ErrorCorrectionLevel is, the higher will be the QRCode tolerance to damage - Defaults to [ErrorCorrectionLevel.LOW]. */
    val errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.LOW,
    /** Information Density (formerly known as `typeNum`). A number that represents how much data this QRCode can hold - Defaults to a value computed by [QRCodeProcessor.infoDensityForDataAndECL]. */
    val informationDensity: Int = QRCodeProcessor.infoDensityForDataAndECL(data, errorCorrectionLevel),
    /** Which mask pattern to apply to the QRCode. Slightly change the squares. Mostly for aesthetics. */
    val maskPattern: MaskPattern = MaskPattern.PATTERN000,
    /** Code to run BEFORE rendering the whole QRCode - Defaults to [EMPTY_FN] */
    private val doBefore: QRCode.(QRCodeGraphics, Int, Int) -> Unit = EMPTY_FN,
    /** Code to run AFTER rendering the whole QRCode - Defaults to [EMPTY_FN] */
    private val doAfter: QRCode.(QRCodeGraphics, Int, Int) -> Unit = EMPTY_FN,
) {
    companion object {
        /** Used to have an empty `doBefore` and `doAfter` function */
        internal val EMPTY_FN: QRCode.(QRCodeGraphics, Int, Int) -> Unit = { _, _, _ -> }

        /** Default value of [squareSize]. Same value as [DEFAULT_CELL_SIZE] (value = 25) */
        const val DEFAULT_SQUARE_SIZE = DEFAULT_CELL_SIZE

        /** Default value of [canvasSize]. If <= 0, the size will be computed automatically. */
        const val DEFAULT_QRCODE_SIZE = 0

        /** Default value of [xOffset] (value = 0) */
        const val DEFAULT_X_OFFSET = 0

        /** Default value of [yOffset] (value = 0) */
        const val DEFAULT_Y_OFFSET = 0

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
        fun ofCustomShape(customShapeFunction: QRCodeShapeFunction): QRCodeBuilder =
            QRCodeBuilder(CUSTOM, customShapeFunction)
    }

    var squareSize: Int = squareSize
        private set

    /** The underlying [QRCodeProcessor] object that will do all calculations */
    val qrCodeProcessor: QRCodeProcessor =
        QRCodeProcessor(data, errorCorrectionLevel, graphicsFactory = graphicsFactory)

    /** Computed type number for the given [data] parameter. Renamed/replaced with [informationDensity]. */
    @Deprecated("Please use informationDensity instead.")
    val typeNum: Int
        get() = informationDensity

    /** Raw QRCode data computed by [QRCodeProcessor] */
    val rawData: QRCodeRawData = qrCodeProcessor.encode(informationDensity, maskPattern)

    /**
     * Size of the canvas where the QRCode will be drawn into (the final image will be a square of `canvasSize` by `canvasSize`)
     *
     *
     *
     */
    var canvasSize: Int =
        when (canvasSize > DEFAULT_QRCODE_SIZE) {
            true -> canvasSize
            else -> qrCodeProcessor.computeImageSize(squareSize, rawData)
        }
        private set

    /** Size of the canvas where the QRCode will be drawn into. */
    @Deprecated("Please use canvasSize instead.")
    val computedSize: Int
        get() = canvasSize

    /** The [QRCodeGraphics] (aka "canvas") where all the drawing will happen */
    var graphics: QRCodeGraphics = graphicsFactory.newGraphicsSquare(this.canvasSize)
        private set

    private fun draw(
        xOffset: Int,
        yOffset: Int,
        rawData: QRCodeRawData,
        canvas: QRCodeGraphics,
    ): QRCodeGraphics =
        qrCodeProcessor.renderShaded(
            cellSize = squareSize,
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

                    else -> shapeFn.renderSquare(
                        xOffset + x,
                        yOffset + y,
                        colorFn,
                        currentSquare,
                        canvas,
                        this,
                    )
                }

                actualSquare.rendered = true
            }
        }

    /**
     * Computes a [squareSize] to make sure the QRCode can fit into an area of width by height pixels
     */
    fun resize(size: Int): QRCode =
        fitIntoArea(size, size)

    /**
     * Computes a [squareSize] to make sure the QRCode can fit into an area of width by height pixels
     */
    fun fitIntoArea(width: Int, height: Int): QRCode {
        val reference = min(width, height)
        squareSize = floor(reference / rawData.size.toDouble()).toInt()
        shapeFn.resize(squareSize)
        canvasSize = reference
        graphics = graphicsFactory.newGraphicsSquare(squareSize)

        return this
    }

    /** Executes all the drawing of the QRCode and returns the [QRCodeGraphics] of the complete QRCode. */
    @JvmOverloads
    fun render(
        qrCodeGraphics: QRCodeGraphics = graphics,
        xOffset: Int = 0,
        yOffset: Int = 0,
    ): QRCodeGraphics {
        colorFn.beforeRender(this, qrCodeGraphics)
        shapeFn.beforeRender(this, qrCodeGraphics)
        doBefore(qrCodeGraphics, xOffset, yOffset)
        return draw(xOffset, yOffset, rawData, qrCodeGraphics)
            .also { doAfter(it, xOffset, yOffset) }
    }

    /** Calls [render] and then returns the bytes of a [format] (default = PNG) render of the QRCode. */
    @JvmOverloads
    fun renderToBytes(
        qrCodeGraphics: QRCodeGraphics = graphics,
        xOffset: Int = 0,
        yOffset: Int = 0,
        format: String = "PNG",
    ): ByteArray {
        return render(qrCodeGraphics, xOffset, yOffset).getBytes(format)
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
