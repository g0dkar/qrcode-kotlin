package qrcode

import qrcode.QRCode.Companion.DEFAULT_QRCODE_SIZE
import qrcode.QRCode.Companion.DEFAULT_SQUARE_SIZE
import qrcode.QRCode.Companion.EMPTY_FN
import qrcode.QRCode.Companion.ofCircles
import qrcode.QRCode.Companion.ofRoundedSquares
import qrcode.QRCode.Companion.ofSquares
import qrcode.QRCodeAlignment.BOTTOM_CENTER
import qrcode.QRCodeAlignment.BOTTOM_LEFT
import qrcode.QRCodeAlignment.BOTTOM_RIGHT
import qrcode.QRCodeAlignment.MIDDLE_CENTER
import qrcode.QRCodeAlignment.MIDDLE_LEFT
import qrcode.QRCodeAlignment.MIDDLE_RIGHT
import qrcode.QRCodeAlignment.TOP_CENTER
import qrcode.QRCodeAlignment.TOP_LEFT
import qrcode.QRCodeAlignment.TOP_RIGHT
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
@Suppress("NON_EXPORTABLE_TYPE", "MemberVisibilityCanBePrivate")
class QRCode @JvmOverloads constructor(
    /** Data that will be encoded. */
    val data: String,
    /** Size in pixels of each square of the QR Code - Defaults to [DEFAULT_SQUARE_SIZE] (25px) */
    squareSize: Int = DEFAULT_SQUARE_SIZE,
    /** Size in pixels of the whole QR Code canvas - Defaults to [DEFAULT_QRCODE_SIZE] (0 = compute size automatically) */
    canvasSize: Int = DEFAULT_QRCODE_SIZE,
    /** Offset drawing the QRCode by this amount on the X axis (horizontal) - Defaults to `0` (zero) */
    var xOffset: Int = DEFAULT_X_OFFSET,
    /** Offset drawing the QRCode by this amount on the Y axis (vertical) - Defaults to `0` (zero) */
    var yOffset: Int = DEFAULT_Y_OFFSET,
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

    private var internalYOffset: Int = 0
    private var internalXOffset: Int = 0

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
     */
    var canvasSize: Int =
        if (canvasSize > DEFAULT_QRCODE_SIZE) canvasSize else qrCodeProcessor.computeImageSize(squareSize, rawData)
        private set

    /**
     * Width of the canvas where the QRCode will be drawn into
     *
     * @see canvasSize
     */
    val width: Int = this.canvasSize

    /**
     * Height of the canvas where the QRCode will be drawn into
     *
     * @see canvasSize
     */
    val height: Int = this.canvasSize

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
                        xOffset + internalXOffset,
                        yOffset + internalYOffset,
                        colorFn,
                        actualSquare,
                        canvas,
                        this,
                    )

                    else -> shapeFn.renderSquare(
                        xOffset + internalXOffset + x,
                        yOffset + internalYOffset + y,
                        colorFn,
                        currentSquare,
                        canvas,
                        this,
                    )
                }

                actualSquare.rendered = true
            }
        }

    @Deprecated("Please use resizeCanvas or fitIntoArea instead.")
    fun resize(size: Int): QRCode {
        return resizeCanvas(
            width = size,
            height = size,
            resizeCanvasOnly = true,
            qrCodeAlignmentAfterResize = MIDDLE_CENTER,
        )
    }

    /**
     * Resizes _**the Canvas**_ where the QRCode will be drawn.
     *
     * By default, it resizes the Canvas to a square of [width] by [width] size.
     *
     * If the [height] parameter is specified, resizes the canvas to [width] by [height].
     *
     * Optionally also resize the QRCode as well, making it as big as possible while
     * fitting into the new Canvas Size **(default is `true`, resizing only the canvas)**.
     *
     * Calling this function with [resizeCanvasOnly] = `false` is the same as calling [fitIntoArea].
     *
     * Lastly, [qrCodeAlignmentAfterResize] decides where the QRCode will be placed on the resized canvas.
     * Defaults to [MIDDLE_CENTER] (aka "centered").
     *
     * You probably want to use [fitIntoArea] instead.
     *
     * > _Context on why have both: Sometimes you want to resize only the canvas so you'll draw something else
     * > there before drawing the QRCode. This isn't the most common use-case. The most common one is resizing
     * > the QRCode so it fits into a given area, thus the [fitIntoArea]. Because of the naming confusion and
     * > bad documentation (my bad, sorry!) this function was expanded into what it is today (v4.6.0)_
     *
     * @param width Width, in pixels, of the canvas
     * @param height Height, in pixels, of the canvas (default: same as [width], making it a square)
     * @param resizeCanvasOnly If `true` resize ONLY the canvas, leaving the QRCode size intact (default: `true`)
     * @param qrCodeAlignmentAfterResize Where will the QRCode be placed after resizing? (default: [MIDDLE_CENTER])
     *
     * @see fitIntoArea You likely want this one ;)
     */
    fun resizeCanvas(
        width: Int,
        height: Int = width,
        resizeCanvasOnly: Boolean = true,
        qrCodeAlignmentAfterResize: QRCodeAlignment = MIDDLE_CENTER,
    ): QRCode =
        if (resizeCanvasOnly) {
            canvasSize = min(width, height)
            graphics = graphicsFactory.newGraphics(width, height)
            alignQRCode(width, height, qrCodeAlignmentAfterResize)
        } else {
            fitIntoArea(width, height, qrCodeAlignmentAfterResize)
        }

    /**
     * Resizes the Canvas **AND** the QRCode accordingly.
     *
     * The QRCode will be resized as best as possible to fit into the new Canvas.
     *
     * After resizing, the QRCode might have to be realigned. The realignment can
     * be customized via the optional [qrCodeAlignmentAfterFit] parameter.
     *
     * By default, the QRCode will be drawn at the middle-center (aka "centered")
     * of the Canvas.
     */
    @JvmOverloads
    fun fitIntoArea(width: Int, height: Int, qrCodeAlignmentAfterFit: QRCodeAlignment = MIDDLE_CENTER): QRCode {
        val reference = min(width, height)
        squareSize = floor(reference / rawData.size.toDouble()).toInt()
        shapeFn.resize(squareSize)
        canvasSize = reference
        graphics = graphicsFactory.newGraphics(width, height)

        return alignQRCode(width, height, qrCodeAlignmentAfterFit)
    }

    private fun alignQRCode(width: Int, height: Int, qrCodeAlignment: QRCodeAlignment = MIDDLE_CENTER): QRCode {
        val qrcodeSize = squareSize * rawData.size

        when (qrCodeAlignment) {
            TOP_LEFT -> {
                internalXOffset = 0
                internalYOffset = 0
            }

            TOP_RIGHT -> {
                internalXOffset = width - qrcodeSize
                internalYOffset = 0
            }

            TOP_CENTER -> {
                internalXOffset = ((width / 2.0) - (qrcodeSize / 2.0)).toInt()
                internalYOffset = 0
            }

            MIDDLE_LEFT -> {
                internalXOffset = 0
                internalYOffset = ((height / 2.0) - (qrcodeSize / 2.0)).toInt()
            }

            MIDDLE_RIGHT -> {
                internalXOffset = width - qrcodeSize
                internalYOffset = ((height / 2.0) - (qrcodeSize / 2.0)).toInt()
            }

            MIDDLE_CENTER -> {
                internalXOffset = ((width / 2.0) - (qrcodeSize / 2.0)).toInt()
                internalYOffset = ((height / 2.0) - (qrcodeSize / 2.0)).toInt()
            }

            BOTTOM_LEFT -> {
                internalXOffset = 0
                internalYOffset = height - qrcodeSize
            }

            BOTTOM_RIGHT -> {
                internalXOffset = width - qrcodeSize
                internalYOffset = height - qrcodeSize
            }

            BOTTOM_CENTER -> {
                internalXOffset = ((width / 2.0) - (qrcodeSize / 2.0)).toInt()
                internalYOffset = height - qrcodeSize
            }
        }

        return this
    }

    /** Executes all the drawing of the QRCode and returns the [QRCodeGraphics] of the complete QRCode. */
    @JvmOverloads
    fun render(
        qrCodeGraphics: QRCodeGraphics = graphics,
        xOffset: Int = this.xOffset,
        yOffset: Int = this.yOffset,
    ): QRCodeGraphics {
        colorFn.beforeRender(this, qrCodeGraphics)
        shapeFn.beforeRender(this, qrCodeGraphics)

        // Fill the whole area with the Background Color.
        graphics.fill(colorFn.bg(0, 0, this, graphics))

        doBefore(qrCodeGraphics, xOffset, yOffset)
        return draw(xOffset, yOffset, rawData, qrCodeGraphics)
            .also { doAfter(it, xOffset, yOffset) }
    }

    /** Calls [render] and then returns the bytes of a [format] (default = PNG) render of the QRCode. */
    @JvmOverloads
    fun renderToBytes(
        qrCodeGraphics: QRCodeGraphics = graphics,
        xOffset: Int = this.xOffset,
        yOffset: Int = this.yOffset,
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

    override fun toString(): String =
        "QRCode(data=$data, squareSize=$squareSize, canvasSize=$canvasSize, xOffset=$xOffset, yOffset=$yOffset" +
            ", errorCorrectionLevel=$errorCorrectionLevel, informationDensity=$informationDensity" +
            ", maskPattern=$maskPattern)"
}
