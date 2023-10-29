package qrcode.fancy

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic
import qrcode.Colors
import qrcode.ErrorCorrectionLevel
import qrcode.QRCode
import qrcode.QRCode.Companion.DEFAULT_CELL_SIZE
import qrcode.QRCodeRawData
import qrcode.fancy.FancyQRCode.Builder
import qrcode.fancy.FancyQRCode.Builder.QRCodeShapesEnum.CIRCLE
import qrcode.fancy.FancyQRCode.Builder.QRCodeShapesEnum.ROUNDED_SQUARE
import qrcode.fancy.FancyQRCode.Builder.QRCodeShapesEnum.SQUARE
import qrcode.fancy.FancyQRCode.Companion.newBuilder
import qrcode.fancy.color.DefaultColorFunction
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.fancy.shape.CircleShapeFunction
import qrcode.fancy.shape.DefaultShapeFunction
import qrcode.fancy.shape.QRCodeShapeFunction
import qrcode.fancy.shape.RoundSquaresShapeFunction
import qrcode.internals.QRCodeSquareType.POSITION_ADJUST
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.render.QRCodeGraphics

/**
 * A fun class to easily create some of the more fancy QRCodes people come up with these days.
 *
 * It gets a [QRCode] on the constructor and builds a render function on top of it.
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
 * @see newBuilder
 *
 * @author Rafael Lins - g0dkar
 *
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
class FancyQRCode @JvmOverloads constructor(
    val data: String,
    val squareSize: Int = DEFAULT_CELL_SIZE,
    val colorFn: QRCodeColorFunction = DefaultColorFunction(),
    val shapeFn: QRCodeShapeFunction = DefaultShapeFunction(squareSize),
    private val doAfter: (QRCodeGraphics) -> Unit = {}
) {
    companion object {
        /**
         * Creates a new [Builder] to build a Fancy QRCode which uses squares as the base shape (this is the default)
         *
         * @see DefaultShapeFunction
         */
        @JvmStatic
        fun newBuilder(): Builder = Builder(SQUARE)

        /**
         * Creates a new [Builder] to build a Fancy QRCode which uses circles as the base shape.
         *
         * This one was based on an Apple Music QRCode.
         *
         * @see CircleShapeFunction
         */
        @JvmStatic
        fun newCircleBuilder(): Builder = Builder(CIRCLE)

        /**
         * Creates a new [Builder] to build a Fancy QRCode which uses rounded squares as the base shape.
         *
         * @see RoundSquaresShapeFunction
         */
        @JvmStatic
        fun newRoundedSquareBuilder(): Builder =
            Builder(ROUNDED_SQUARE)
    }

    /** The underlying [QRCode] object that'll do all calculations */
    val qrCode: QRCode = QRCode(data, ErrorCorrectionLevel.H)

    fun draw(rawData: QRCodeRawData, canvas: QRCodeGraphics): QRCodeGraphics =
        qrCode.renderShaded(
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
                        canvas
                    )

                    else -> shapeFn.renderSquare(colorFn, currentSquare, currentCanvas, canvas)
                }

                actualSquare.rendered = true
            }
        }

    @JvmOverloads
    fun renderToGraphics(): QRCodeGraphics {
        // We need this a bit higher than usual to deal with the loss of data due to "fancyness" (circles are not squares)
        val typeNum = QRCode.typeForDataAndECL(data, ErrorCorrectionLevel.H).coerceAtLeast(6)
        val rawData = qrCode.encode(typeNum)
        val computedSize = qrCode.computeImageSize(squareSize, squareSize, rawData)
        val qrCodeGraphics = qrCode.qrCodeGraphicsFactory.newGraphicsSquare(computedSize)
        return draw(rawData, qrCodeGraphics).also(doAfter)
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
        private var drawLogoAction: (QRCodeGraphics) -> Unit = {}
        private var doAfter: (QRCodeGraphics) -> Unit = {}

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
            drawLogoAction = {
                val (w, h) = it.dimensions()
                it.drawImage(logo, w / 2 - width / 2, h / 2 - height / 2)
            }

            return this
        }

        /** Run a piece of code after the rendering is done. */
        fun withAfterRenderAction(action: (QRCodeGraphics) -> Unit): Builder {
            doAfter = action
            return this
        }

        private val afterFn: (QRCodeGraphics) -> Unit
            get() = {
                drawLogoAction(it)
                doAfter(it)
            }

        /**
         * Builds a [FancyQRCode] instance ready to use.
         *
         * @see render
         * @see renderToGraphics
         */
        fun build(data: String) =
            when (shape) {
                SQUARE -> FancyQRCode(
                    data,
                    squareSize,
                    DefaultColorFunction(foreground = color, background),
                    DefaultShapeFunction(squareSize, innerSpace = innerSpace),
                    afterFn
                )

                CIRCLE -> FancyQRCode(
                    data,
                    squareSize,
                    DefaultColorFunction(foreground = color, background),
                    CircleShapeFunction(
                        squareSize,
                        innerSpace = innerSpace
                    ),
                    afterFn
                )

                ROUNDED_SQUARE -> FancyQRCode(
                    data,
                    squareSize,
                    DefaultColorFunction(foreground = color, background),
                    RoundSquaresShapeFunction(
                        squareSize,
                        radiusInPixels,
                        innerSpace = innerSpace
                    ),
                    afterFn
                )
            }
    }
}
