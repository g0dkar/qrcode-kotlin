package qrcode

import qrcode.QRCode.Companion.EMPTY_FN
import qrcode.QRCodeShapesEnum.CIRCLE
import qrcode.QRCodeShapesEnum.CUSTOM
import qrcode.QRCodeShapesEnum.ROUNDED_SQUARE
import qrcode.QRCodeShapesEnum.SQUARE
import qrcode.color.Colors
import qrcode.color.DefaultColorFunction
import qrcode.color.LinearGradientColorFunction
import qrcode.color.QRCodeColorFunction
import qrcode.internals.QRMath
import qrcode.raw.ErrorCorrectionLevel
import qrcode.raw.MaskPattern
import qrcode.raw.QRCodeProcessor
import qrcode.raw.QRCodeProcessor.Companion.MAXIMUM_INFO_DENSITY
import qrcode.render.QRCodeGraphics
import qrcode.render.QRCodeGraphicsFactory
import qrcode.shape.CircleShapeFunction
import qrcode.shape.DefaultShapeFunction
import qrcode.shape.QRCodeShapeFunction
import qrcode.shape.RoundSquaresShapeFunction
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads

@JsExport
@OptIn(ExperimentalJsExport::class)
class QRCodeBuilder @JvmOverloads constructor(
    private var shape: QRCodeShapesEnum,
    private var customShapeFunction: QRCodeShapeFunction? = null,
) {
    private var customColorFunction: QRCodeColorFunction? = null

    private var squareSize: Int = QRCodeProcessor.DEFAULT_CELL_SIZE
    private var color: Int = Colors.BLACK
    private var endColor: Int? = null
    private var vertical: Boolean = true
    private var background: Int = Colors.TRANSPARENT
    private var innerSpace: Int = innerSpace()
    private var radiusInPixels: Int = RoundSquaresShapeFunction.defaultRadius(squareSize)
    private var drawLogoAction: QRCode.(QRCodeGraphics, Int, Int) -> Unit = EMPTY_FN
    private var drawLogoBeforeAction: QRCode.(QRCodeGraphics, Int, Int) -> Unit = EMPTY_FN
    private var userDoAfter: QRCode.(QRCodeGraphics, Int, Int) -> Unit = EMPTY_FN
    private var userDoBefore: QRCode.(QRCodeGraphics, Int, Int) -> Unit = EMPTY_FN
    private var graphicsFactory: QRCodeGraphicsFactory = QRCodeGraphicsFactory()
    private var errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.LOW
    private var informationDensity: Int = 0
    private var maskPattern: MaskPattern = MaskPattern.PATTERN000
    private var canvasSize: Int = QRCode.DEFAULT_QRCODE_SIZE
    private var xOffset: Int = 0
    private var yOffset: Int = 0

    private fun innerSpace() =
        when (shape) {
            SQUARE -> 1
            CIRCLE -> CircleShapeFunction.defaultInnerSpace(squareSize)
            ROUNDED_SQUARE -> RoundSquaresShapeFunction.defaultInnerSpace(squareSize)
            CUSTOM -> 0
        }.takeIf { it < squareSize } ?: 0

    /**
     * Changes the Shape of the QRCode.
     *
     * @see QRCodeShapesEnum
     */
    fun withShape(shape: QRCodeShapesEnum): QRCodeBuilder {
        this.shape = shape
        return withInnerSpacing(innerSpace())
    }

    /** Size of each individual space in the QRCode (each cell). */
    fun withSize(size: Int): QRCodeBuilder {
        squareSize = size.coerceAtLeast(1)
        return withInnerSpacing(innerSpace())
    }

    /**
     * Color of the cells of the QRCode.
     *
     * Expected to be the Integer that represents an RGBA color. In short, use the [Colors] helpers ;)
     *
     * @see Colors
     * @see Colors.css
     * @see Colors.rgba
     * @see Colors.withAlpha
     */
    fun withColor(color: Int): QRCodeBuilder {
        this.color = color
        return this
    }

    /**
     * Background color of the QRCode.
     *
     * Expected to be the Integer that represents an RGBA color. In short, use the [Colors] helpers ;)
     *
     * @see Colors
     */
    fun withBackgroundColor(bgColor: Int): QRCodeBuilder {
        background = bgColor
        return this
    }

    /**
     * Uses a [LinearGradientColorFunction] to choose colors for the QRCode.
     *
     * By default, the gradient will be a vertical one (top-to-bottom)
     *
     * If [endColor] is `null`, a [DefaultColorFunction] will be used instead.
     *
     * @see Colors
     */
    @JvmOverloads
    fun withGradientColor(startColor: Int, endColor: Int?, vertical: Boolean = true): QRCodeBuilder {
        color = startColor
        this.endColor = endColor
        this.vertical = vertical
        return this
    }

    /**
     * Radius of the edges of the Rounded Squares. Only applies for Rounded Squares. If set to a negative number,
     * the default radius will be used.
     */
    fun withRadius(radius: Int): QRCodeBuilder {
        radiusInPixels = radius.takeIf { it >= 0 } ?: RoundSquaresShapeFunction.defaultRadius(squareSize)
        return this
    }

    /** How much space there should be around each QRCode Cell. Defaults to 1 pixel, or 0 if a custom shape function is being used. */
    @JvmOverloads
    fun withInnerSpacing(innerSpacing: Int? = null): QRCodeBuilder {
        innerSpace = innerSpacing?.takeIf { it >= 0 } ?: innerSpace()
        return this
    }

    /**
     * Adds an image on top of the QRCode, at the center of it.
     *
     * If [clearLogoArea] is `false` the cells behind the logo will be drawn as normal.
     *
     */
    @JvmOverloads
    fun withLogo(logo: ByteArray?, width: Int, height: Int, clearLogoArea: Boolean = true): QRCodeBuilder {
        if (logo != null) {
            if (clearLogoArea) {
                drawLogoBeforeAction = { _, _, _ ->
                    val logoX = (canvasSize - width) / 2
                    val logoY = (canvasSize - height) / 2

                    rawData.forEach { row ->
                        row.forEach { cell ->
                            val cellX = cell.absoluteX(squareSize) + squareSize
                            val cellY = cell.absoluteY(squareSize) + squareSize

                            cell.rendered = !QRMath.rectsIntersect(
                                logoX,
                                logoY,
                                width,
                                height,
                                cellX,
                                cellY,
                                squareSize,
                                squareSize,
                            )
                        }
                    }
                }
            } else {
                drawLogoBeforeAction = EMPTY_FN
            }

            drawLogoAction = { canvas, xOffset, yOffset ->
                val logoX = xOffset + (canvasSize - width) / 2
                val logoY = yOffset + (canvasSize - height) / 2

                canvas.drawImage(logo, logoX, logoY)
            }
        }

        return this
    }

    /** Run a piece of code after the rendering is done. */
    fun withAfterRenderAction(action: QRCode.(QRCodeGraphics) -> Unit): QRCodeBuilder {
        userDoAfter = { it, _, _ -> action(it) }
        return this
    }

    /** Run a piece of code before the rendering is done. */
    fun withBeforeRenderAction(action: QRCode.(QRCodeGraphics) -> Unit): QRCodeBuilder {
        userDoBefore = { it, _, _ -> action(it) }
        return this
    }

    /**
     * Use a custom [QRCodeGraphicsFactory] instead of the default. Use this to have a way to better control how and
     * where the QRCode drawing will occur.
     *
     * The currently available implementations on this library are:
     *
     * - **Android:**`qrcode.render.AndroidQRCodeGraphicsFactory`
     * - **JVM:** `qrcode.render.JvmQRCodeGraphicsFactory`
     */
    fun withGraphicsFactory(factory: QRCodeGraphicsFactory): QRCodeBuilder {
        graphicsFactory = factory
        return this
    }

    /**
     * Sets the [QRCode.colorFn] value to a custom one. If set, the builder will ignore [color] and [background].
     *
     * Default is `null`, meaning a [DefaultColorFunction] will be created from the [color] and [background] values.
     *
     * @see QRCodeColorFunction
     * @see DefaultColorFunction
     */
    fun withCustomColorFunction(colorFn: QRCodeColorFunction?): QRCodeBuilder {
        this.customColorFunction = colorFn
        return this
    }

    /**
     * Sets the [QRCode.shapeFn] value to a custom one. If set, the builder will ignore the [shape] parameter.
     *
     * Default is `null`, meaning a [QRCodeShapeFunction] will be created for the selected [shape].
     *
     * If [shape] is [CUSTOM] but [customShapeFunction] is not set, a [DefaultShapeFunction] will be used.
     *
     * @see QRCodeShapeFunction
     * @see DefaultShapeFunction
     * @see RoundSquaresShapeFunction
     * @see CircleShapeFunction
     */
    fun withCustomShapeFunction(shapeFn: QRCodeShapeFunction?): QRCodeBuilder {
        this.customShapeFunction = shapeFn
        return this
    }

    /**
     * The level of error correction to apply to the QR Code. Defaults to [ErrorCorrectionLevel.LOW].
     *
     * In short, this configures how much data loss we can tolerate. Higher error correction = Readable QR Codes even
     * with large parts hidden/crumpled/deformed.
     *
     * @see ErrorCorrectionLevel
     */
    fun withErrorCorrectionLevel(ecl: ErrorCorrectionLevel): QRCodeBuilder {
        this.errorCorrectionLevel = ecl
        return this
    }

    /**
     * The level of "information density" this QRCode will support.
     *
     * **Defaults to `0`. Meaning the minimum possible value will be computed and used.**
     *
     * Must be a value between `1` and `40`. **If this value is `0` (zero), the minimum possible value for it will be
     * computed and used instead.**
     *
     * This is complex to explain, but basically the lower this value the fewer squares the QRCode have. The catch is:
     * the fewer squares the QRCode have, the harder it'll be to read damaged/obstructed versions of it.
     *
     * In short:
     *
     * - Ease of reading: Bump it as high as you want. Up to `6` is enough for a LOT of cases, even with logos.
     * - Smaller size: Go with the computed value =)
     *
     * @see QRCodeProcessor.infoDensityForDataAndECL
     *
     */
    fun withInformationDensity(informationDensity: Int): QRCodeBuilder {
        this.informationDensity = informationDensity.coerceIn(0..MAXIMUM_INFO_DENSITY)
        return this
    }

    /**
     * Which [MaskPattern] to apply on the QRCode. Mostly for aesthetics. Defaults to [MaskPattern.PATTERN000].
     *
     * @see MaskPattern
     */
    fun withMaskPattern(maskPattern: MaskPattern): QRCodeBuilder {
        this.maskPattern = maskPattern
        return this
    }

    /**
     * Size, in pixels, of the canvas the QRCode will be drawn into.
     * The resulting image will be a square of [size] by [size].
     *
     * If this value is `<= 0` than the size will be computed from the data.
     *
     * Defaults to `0` (meaning the code will compute it from the data to be encoded)
     *
     * @param size Size, in pixels, of the canvas where to draw the QRCode. Defaults to `0` meaning it'll be computed from the data to be encoded.
     */
    fun withCanvasSize(size: Int): QRCodeBuilder {
        this.canvasSize = size
        return this
    }

    /**
     * Offset drawing the QRCode on the X-axis (horizontal) by this many pixels.
     *
     * @param xOffset X-axis offset
     */
    fun withXOffset(xOffset: Int): QRCodeBuilder {
        this.xOffset = xOffset
        return this
    }

    /**
     * Offset drawing the QRCode on the Y-axis (vertical) by this many pixels.
     *
     * @param yOffset Y-axis offset
     */
    fun withYOffset(yOffset: Int): QRCodeBuilder {
        this.yOffset = yOffset
        return this
    }

    private val beforeFn: QRCode.(QRCodeGraphics, Int, Int) -> Unit
        get() = { canvas, xOffset, yOffset ->
            drawLogoBeforeAction(canvas, xOffset, yOffset)
            userDoBefore(canvas, xOffset, yOffset)
        }

    private val afterFn: QRCode.(QRCodeGraphics, Int, Int) -> Unit
        get() = { canvas, xOffset, yOffset ->
            drawLogoAction(canvas, xOffset, yOffset)
            userDoAfter(canvas, xOffset, yOffset)
        }

    private val colorFunction: QRCodeColorFunction
        get() = when (endColor) {
            null -> customColorFunction ?: DefaultColorFunction(foreground = color, background)
            else -> customColorFunction ?: LinearGradientColorFunction(
                startForegroundColor = color,
                endForegroundColor = endColor!!,
                background,
            )
        }

    /**
     * Builds a [QRCode] instance ready to use.
     *
     * **Important:** if you want to use your own drawing instrument (for example an Android `Canvas` or a JVM
     * `BufferedImage`) call `freshlyBuiltQrCode.graphics
     *
     * @see QRCode.renderToBytes
     * @see QRCode.render
     */
    fun build(data: String) =
        QRCode(
            data = data,
            squareSize = squareSize,
            canvasSize = canvasSize,
            xOffset = xOffset,
            yOffset = yOffset,
            colorFn = colorFunction,
            shapeFn = customShapeFunction ?: when (shape) {
                SQUARE, CUSTOM -> DefaultShapeFunction(squareSize, innerSpace = innerSpace)
                CIRCLE -> CircleShapeFunction(squareSize, innerSpace = innerSpace)
                ROUNDED_SQUARE -> RoundSquaresShapeFunction(squareSize, radiusInPixels, innerSpace = innerSpace)
            },
            graphicsFactory = graphicsFactory,
            errorCorrectionLevel = errorCorrectionLevel,
            informationDensity = when (informationDensity) {
                0 -> QRCodeProcessor.infoDensityForDataAndECL(data, errorCorrectionLevel)
                else -> informationDensity
            },
            maskPattern = maskPattern,
            doBefore = beforeFn,
            doAfter = afterFn,
        )
}
