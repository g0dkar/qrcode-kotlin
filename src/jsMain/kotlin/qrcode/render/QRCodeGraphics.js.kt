package qrcode.render

import kotlinx.browser.document
import org.khronos.webgl.Uint8ClampedArray
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.ImageData
import org.w3c.files.Blob

@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("MemberVisibilityCanBePrivate")
actual open class QRCodeGraphics actual constructor(
    val width: Int,
    val height: Int
) {
    companion object {
        private const val CANVAS_UNSUPPORTED = "Canvas seems to not be supported :("
        private const val FULL_CIRCLE = 3.141592653589793 * 2.0 // 2 * PI = Full circle
    }

    private val canvas: HTMLCanvasElement
    private val context: CanvasRenderingContext2D
    private var changed: Boolean = false

    init {
        val canvas = tryGet { document.createElement("canvas") as HTMLCanvasElement }

        canvas.width = width
        canvas.height = height

        val context = tryGet { canvas.getContext("2d") as CanvasRenderingContext2D }

        this.canvas = canvas
        this.context = context
    }

    private fun rgba(color: Int): String {
        val r = (color shr 16) and 0xFF
        val g = (color shr 8) and 0xFF
        val b = (color shr 0) and 0xFF
        val a = ((color shr 24) and 0xFF) / 255.0
        return "rgba($r,$g,$b,$a)"
    }

    private fun draw(color: Int, action: () -> Unit) {
        changed = true
        val colorString = rgba(color)
        context.fillStyle = colorString
        context.strokeStyle = colorString
        val lineWidth = context.lineWidth

        action()

        context.lineWidth = lineWidth
    }

    /** Returns `true` if **any** drawing was performed */
    actual open fun changed() = changed

    /** Simply changes the `changed` flag to true without doing anything else */
    actual fun reset() {
        if (changed) {
            changed = false
            context.clearRect(0.0, 0.0, width.toDouble(), height.toDouble())
        }
    }

    /** Return the dimensions of this Graphics object as a pair of `width, height` */
    actual open fun dimensions() = arrayOf(width, height)

    /**
     * Returns a Data URL to this can be shown in an `<img/>` tag.
     */
    open fun toDataURL(format: String = "png"): String = canvas.toDataURL(format)

    /**
     * Direct access to the `.toBlob()` function of the underlying canvas.
     *
     * Syntactic sugar for `nativeImage().toBlob(callback)`.
     */
    open fun toBlob(callback: (Blob?) -> Unit): Unit = canvas.toBlob(callback)

    /** Returns this image as a [ByteArray] encoded as PNG. */
    actual open fun getBytes(): ByteArray = getBytes("png")

    /** Returns this image as a [ByteArray] encoded as the specified format (e.g. `PNG`, `JPG`, `BMP`, ...). */
    @JsName("getBytesForFormat")
    actual open fun getBytes(format: String): ByteArray =
        canvas.toDataURL(format).encodeToByteArray()

    /** Returns the available formats to be passed as parameters to [getBytes].
     *
     * **Note:** The actual list of supported formats depends on the browser, so this won't be checked. PNG is always supported.
     */
    actual open fun availableFormats(): Array<String> = arrayOf("png")

    /** Returns the native image object this QRCodeGraphics is working upon. */
    actual open fun nativeImage(): Any = canvas

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    actual open fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int, thickness: Double) {
        draw(color) {
            context.moveTo(x1.toDouble(), y1.toDouble())
            context.lineTo(x2.toDouble(), y2.toDouble())
        }
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        draw(color) {
            context.lineWidth = thickness
            context.strokeRect(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
        }
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) {
            context.fillRect(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
        }
    }

    /** Fill the whole area of this canvas with the specified [color]. */
    actual open fun fill(color: Int) {
        fillRect(0, 0, width, height, color)
    }

    /**
     * Draw the edges of a round rectangle starting at point `(x,y)` and having `width` by `height`
     * with edges that are `borderRadius` pixels round (almost like CSS).
     *
     * If it helps, these would _in theory_ draw the same thing:
     *
     * ```
     * // CSS
     * .roundRect {
     *     width: 100px;
     *     height: 100px;
     *     border-radius: 5px;
     * }
     *
     * // Kotlin
     * drawRoundRect(0, 0, 100, 100, 5)
     * ```
     *
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    actual open fun drawRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
        thickness: Double
    ) {
        drawRect(x, y, width, height, color, 1.0)
    }

    /**
     * Fills the round rectangle starting at point `(x,y)` and having `width` by `height`
     * with edges that are `borderRadius` pixels round (almost like CSS).
     *
     * If it helps, these would _in theory_ draw the same thing:
     *
     * ```
     * // CSS
     * .roundRect {
     *     width: 100px;
     *     height: 100px;
     *     border-radius: 5px;
     * }
     *
     * // Kotlin
     * drawRoundRect(0, 0, 100, 100, 5)
     * ```
     *
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    actual open fun fillRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int
    ) {
        fillRect(x, y, width, height, color)
    }

    /**
     * Draw the edges of an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     */
    actual fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        draw(color) {
            val radiusX = width.toDouble() / 2.0
            val radiusY = height.toDouble() / 2.0

            context.lineWidth = thickness
            context.beginPath()
            context.ellipse(radiusX + x.toDouble(), radiusY + y.toDouble(), radiusX, radiusY, 0.0, 0.0, FULL_CIRCLE, false)
            context.stroke()
        }
    }

    /**
     * Fills an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     *
     */
    actual fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) {
            val radiusX = width.toDouble() / 2.0
            val radiusY = height.toDouble() / 2.0

            context.beginPath()
            context.ellipse(radiusX + x.toDouble(), radiusY + y.toDouble(), radiusX, radiusY, 0.0, 0.0, FULL_CIRCLE, false)
            context.fill()
        }
    }

    /**
     * Reads the specified image from [rawData] and draws it at `(x,y)`.
     *
     * On JS this has a limitation that the [rawData] image will be loaded considering it has the same [width] as
     * this object.
     */
    @JsName("drawImageFromBytes")
    actual fun drawImage(rawData: ByteArray, x: Int, y: Int) {
        draw(0) {
            val imageData = ImageData(Uint8ClampedArray(rawData.toTypedArray()), width)
            context.putImageData(imageData, x.toDouble(), y.toDouble())
        }
    }

    private fun <T> tryGet(what: () -> T): T =
        try {
            what()
        } catch (t: Throwable) {
            throw Error(CANVAS_UNSUPPORTED, cause = t)
        }
}
