package qrcode.render

import org.w3c.dom.HTMLCanvasElement
import org.w3c.files.Blob
import qrcode.render.graphics.HTMLCanvasGraphics
import qrcode.render.graphics.WasmJsDrawingInterface

@Suppress("MemberVisibilityCanBePrivate")
@OptIn(ExperimentalWasmJsInterop::class)
actual open class QRCodeGraphics actual constructor(
    val width: Int,
    val height: Int,
) {
    var drawingInterface: WasmJsDrawingInterface? = null

    /** Whether any drawing operations were done or not. */
    private var changed: Boolean = false

    /** Returns `true` if **any** drawing was performed */
    actual open fun changed() = changed

    /** Simply changes the `changed` flag to true without doing anything else */
    actual fun reset() {
        if (changed) {
            changed = false
        }
    }

    /**
     * Make sure we can use the [drawingInterface]. Never mind the name.
     */
    private fun useCanvas(): WasmJsDrawingInterface {
        if (drawingInterface == null) {
            drawingInterface = HTMLCanvasGraphics(width, height)
        }

        return drawingInterface!!
    }

    /** Return the dimensions of this Graphics object as a pair of `width, height` */
    actual open fun dimensions() = arrayOf(width, height)

    /**
     * Returns a Data URL to this can be shown in an `<img/>` tag.
     */
    open fun toDataURL(format: String = "png"): String =
        nativeImage().let {
            when (it) {
                is HTMLCanvasElement -> it.toDataURL(format)
                else -> throw Error("Unsupported operation")
            }
        }

    /**
     * Direct access to the `.toBlob()` function of the underlying canvas.
     *
     * Syntactic sugar for `nativeImage().toBlob(callback)`.
     */
    open fun toBlob(callback: (Blob?) -> Unit) {
        nativeImage().let {
            when (it) {
                is HTMLCanvasElement -> it.toBlob(callback)
                else -> throw Error("Unsupported operation")
            }
        }
    }

    /** Returns this image as a [ByteArray] encoded as PNG. */
    actual open fun getBytes(): ByteArray = getBytes("png")

    /** Returns this image as a [ByteArray] encoded as the specified format (e.g. `PNG`, `JPG`, `BMP`, ...). */
    @JsName("getBytesForFormat")
    actual open fun getBytes(format: String): ByteArray =
        useCanvas().getBytes(format)

    /** Returns the available formats to be passed as parameters to [getBytes].
     *
     * **Note:** The actual list of supported formats depends on the browser, so this won't be checked. PNG is always supported.
     */
    actual open fun availableFormats(): Array<String> = arrayOf("png")

    /** Returns the native image object this QRCodeGraphics is working upon. */
    actual open fun nativeImage(): Any =
        drawingInterface?.nativeImage() ?: throw NotImplementedError("Native image not supported")

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    actual open fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int, thickness: Double) {
        useCanvas().drawLine(x1, y1, x2, y2, color, thickness)
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        useCanvas().drawRect(x, y, width, height, color, thickness)
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        useCanvas().fillRect(x, y, width, height, color)
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
        thickness: Double,
    ) {
        useCanvas().drawRoundRect(x, y, width, height, borderRadius, color, thickness)
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
        color: Int,
    ) {
        useCanvas().fillRoundRect(x, y, width, height, borderRadius, color)
    }

    /**
     * Draw the edges of an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     */
    actual fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        useCanvas().drawEllipse(x, y, width, height, color, thickness)
    }

    /**
     * Fills an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     *
     */
    actual fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        useCanvas().fillEllipse(x, y, width, height, color)
    }

    /**
     * Reads the specified image from [rawData] and draws it at `(x,y)`.
     *
     * On JS this has a limitation that the [rawData] image will be loaded considering it has the same [width] as
     * this object.
     */
    @JsName("drawImageFromBytes")
    actual fun drawImage(rawData: ByteArray?, x: Int, y: Int) {
        useCanvas().drawImage(rawData, x, y)
    }
}
