package qrcode

import qrcode.QRCode.Builder
import qrcode.QRCode.Builder.QRCodeShapesEnum.CIRCLE
import qrcode.QRCode.Builder.QRCodeShapesEnum.ROUNDED_SQUARE
import qrcode.QRCode.Builder.QRCodeShapesEnum.SQUARE
import qrcode.QRCode.Companion.ofSquares
import qrcode.color.Colors
import qrcode.color.DefaultColorFunction
import qrcode.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquareType.POSITION_ADJUST
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.internals.QRMath.rectsIntersect
import qrcode.raw.ErrorCorrectionLevel
import qrcode.raw.QRCodeBuilder
import qrcode.raw.QRCodeBuilder.Companion.DEFAULT_CELL_SIZE
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
 * It gets a [QRCodeBuilder] on the constructor and builds a render function on top of it.
 *
 * It includes things like:
 *
 * - A QR Code with a logo at the center
 * - A QR Code with dots instead of squares
 * - Colorful QR Codes
 *
 * If you have a suggestion for a nice QR Code style, feel free to open a PR, or an Issue with your suggestion :)
 *
 * @see Builder
 * @see ofSquares
 *
 * @author Rafael Lins - g0dkar
 *
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE", "MemberVisibilityCanBePrivate")
class QRCode @JvmOverloads constructor(
    val data: String,
    val squareSize: Int = DEFAULT_CELL_SIZE,
    val colorFn: QRCodeColorFunction = DefaultColorFunction(),
    val shapeFn: QRCodeShapeFunction = DefaultShapeFunction(squareSize),
    var graphicsFactory: QRCodeGraphicsFactory = QRCodeGraphicsFactory(),
    private val doBefore: QRCode.(QRCodeGraphics) -> Unit = EMPTY_FN,
    private val doAfter: QRCode.(QRCodeGraphics) -> Unit = EMPTY_FN,
) {
    companion object {
        private val EMPTY_FN: QRCode.(QRCodeGraphics) -> Unit = { }

        /**
         * Creates a new [Builder] to build a Fancy QRCode which uses squares as the base shape (this is the default)
         *
         * @see DefaultShapeFunction
         */
        @JvmStatic
        fun ofSquares(): Builder = Builder(SQUARE)

        /**
         * Creates a new [Builder] to build a Fancy QRCode which uses circles as the base shape.
         *
         * This one was based on an Apple Music QRCode.
         *
         * @see CircleShapeFunction
         */
        @JvmStatic
        fun ofCircles(): Builder = Builder(CIRCLE)

        /**
         * Creates a new [Builder] to build a Fancy QRCode which uses rounded squares as the base shape.
         *
         * @see RoundSquaresShapeFunction
         */
        @JvmStatic
        fun ofRoundedSquares(): Builder = Builder(ROUNDED_SQUARE)
    }

    /** The underlying [QRCodeBuilder] object that'll do all calculations */
    val qrCodeBuilder: QRCodeBuilder = QRCodeBuilder(data, ErrorCorrectionLevel.H, graphicsFactory = graphicsFactory)

    /** Computed type number for the given [data] parameter */
    val typeNum = QRCodeBuilder.typeForDataAndECL(data, ErrorCorrectionLevel.H).coerceAtLeast(6)

    /** Raw QRCode data computed by [QRCodeBuilder] */
    val rawData = qrCodeBuilder.encode(typeNum)

    /** Calculated size of the whole QRCode (the final image will be a square of `computedSize` by `computedSize`) */
    val computedSize = qrCodeBuilder.computeImageSize(squareSize, squareSize, rawData)

    private fun draw(rawData: QRCodeRawData, canvas: QRCodeGraphics): QRCodeGraphics =
        qrCodeBuilder.renderShaded(
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
                    )

                    else -> shapeFn.renderSquare(colorFn, currentSquare, currentCanvas, canvas)
                }

                actualSquare.rendered = true
            }
        }

    fun renderToGraphics(): QRCodeGraphics {
        val qrCodeGraphics = graphicsFactory.newGraphicsSquare(computedSize)
        doBefore(qrCodeGraphics)
        return draw(rawData, qrCodeGraphics).also { doAfter(it) }
    }

    fun render(format: String = "PNG"): ByteArray {
        return renderToGraphics().getBytes(format)
    }

    class Builder(private val shape: QRCodeShapesEnum) {
        private var squareSize: Int = DEFAULT_CELL_SIZE
        private var color: Int = Colors.BLACK
        private var background: Int = Colors.WHITE
        private var innerSpace: Int = innerSpace()
        private var radiusInPixels: Int = RoundSquaresShapeFunction.defaultRadius(squareSize)
        private var drawLogoAction: QRCode.(QRCodeGraphics) -> Unit = EMPTY_FN
        private var drawLogoBeforeAction: QRCode.(QRCodeGraphics) -> Unit = EMPTY_FN
        private var userDoAfter: QRCode.(QRCodeGraphics) -> Unit = EMPTY_FN
        private var userDoBefore: QRCode.(QRCodeGraphics) -> Unit = EMPTY_FN
        private var graphicsFactory: QRCodeGraphicsFactory = QRCodeGraphicsFactory()

        enum class QRCodeShapesEnum {
            SQUARE,
            CIRCLE,
            ROUNDED_SQUARE,
        }

        private fun innerSpace() =
            when (shape) {
                SQUARE -> 1
                CIRCLE -> CircleShapeFunction.defaultInnerSpace(squareSize)
                ROUNDED_SQUARE -> RoundSquaresShapeFunction.defaultInnerSpace(squareSize)
            }

        /** Size of each individual space in the QRCode (each cell). */
        fun withSize(size: Int): Builder {
            squareSize = size
            return withInnerSpacing(innerSpace())
        }

        /**
         * Color of the cells of the QRCode.
         *
         * _Expected to be the Integer that represents an RGBA color. In short, use the [Colors] helpers ;)_
         *
         * @see Colors
         */
        fun withColor(color: Int): Builder {
            this.color = color
            return this
        }

        /**
         * Background color of the QRCode.
         *
         * _Expected to be the Integer that represents an RGBA color. In short, use the [Colors] helpers ;)_
         *
         * @see Colors
         */
        fun withBackgroundColor(bgColor: Int): Builder {
            background = bgColor
            return this
        }

        /**
         * Radius of the edges of the Rounded Squares. Only applies for Rounded Squares. If set to a negative number,
         * the default radius will be used.
         */
        fun withRadius(radius: Int): Builder {
            radiusInPixels = radius.takeIf { it >= 0 } ?: RoundSquaresShapeFunction.defaultRadius(squareSize)
            return this
        }

        /** How much space there should be around each QRCode Cell. Defaults to 1 pixel. */
        @JvmOverloads
        fun withInnerSpacing(innerSpacing: Int? = null): Builder {
            innerSpace = innerSpacing?.takeIf { it >= 0 } ?: innerSpace()
            return this
        }

        /** Adds an image on top of the QRCode, at the center of it. */
        fun withLogo(logo: ByteArray, width: Int, height: Int): Builder {
            drawLogoBeforeAction = {
                val logoX = (computedSize - width) / 2
                val logoY = (computedSize - height) / 2

                rawData.forEach { row ->
                    row.forEach { cell ->
                        val cellX = cell.absoluteX(squareSize) + squareSize
                        val cellY = cell.absoluteY(squareSize) + squareSize

                        cell.rendered = !rectsIntersect(logoX, logoY, width, height, cellX, cellY, squareSize, squareSize)
                    }
                }
            }

            drawLogoAction = { canvas ->
                val logoX = (computedSize - width) / 2
                val logoY = (computedSize - height) / 2

                canvas.drawImage(logo, logoX, logoY)
            }

            return this
        }

        /** Run a piece of code after the rendering is done. */
        fun withAfterRenderAction(action: QRCode.(QRCodeGraphics) -> Unit): Builder {
            userDoAfter = action
            return this
        }

        /** Run a piece of code before the rendering is done. */
        fun withBeforeRenderAction(action: QRCode.(QRCodeGraphics) -> Unit): Builder {
            userDoBefore = action
            return this
        }

        /** Use a custom [QRCodeGraphicsFactory] instead of the default. */
        fun withGraphicsFactory(factory: QRCodeGraphicsFactory): Builder {
            graphicsFactory = factory
            return this
        }

        private val beforeFn: QRCode.(QRCodeGraphics) -> Unit
            get() = { canvas ->
                drawLogoBeforeAction(canvas)
                userDoBefore(canvas)
            }

        private val afterFn: QRCode.(QRCodeGraphics) -> Unit
            get() = { canvas ->
                drawLogoAction(canvas)
                userDoAfter(canvas)
            }

        /**
         * Builds a [QRCode] instance ready to use.
         *
         * @see render
         * @see renderToGraphics
         */
        fun build(data: String) =
            when (shape) {
                SQUARE -> QRCode(
                    data,
                    squareSize,
                    DefaultColorFunction(foreground = color, background),
                    DefaultShapeFunction(squareSize, innerSpace = innerSpace),
                    graphicsFactory,
                    beforeFn,
                    afterFn,
                )

                CIRCLE -> QRCode(
                    data,
                    squareSize,
                    DefaultColorFunction(foreground = color, background),
                    CircleShapeFunction(squareSize, innerSpace = innerSpace),
                    graphicsFactory,
                    beforeFn,
                    afterFn,
                )

                ROUNDED_SQUARE -> QRCode(
                    data,
                    squareSize,
                    DefaultColorFunction(foreground = color, background),
                    RoundSquaresShapeFunction(squareSize, radiusInPixels, innerSpace = innerSpace),
                    graphicsFactory,
                    beforeFn,
                    afterFn,
                )
            }
    }
}
