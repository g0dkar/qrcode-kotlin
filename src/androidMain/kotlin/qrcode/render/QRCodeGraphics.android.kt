package qrcode.render

import android.graphics.Bitmap
import android.graphics.Bitmap.CompressFormat
import android.graphics.Bitmap.CompressFormat.JPEG
import android.graphics.Bitmap.CompressFormat.PNG
import android.graphics.BitmapFactory
import androidx.compose.ui.graphics.drawscope.DrawScope
import qrcode.render.extensions.drawQRCode
import qrcode.render.graphics.AndroidDrawingInterface
import qrcode.render.graphics.BitmapGraphics
import java.io.ByteArrayOutputStream
import java.io.OutputStream

@Suppress("MemberVisibilityCanBePrivate")
actual open class QRCodeGraphics actual constructor(
    val width: Int,
    val height: Int,
) {
    companion object {
        val AVAILABLE_FORMATS: Array<String> = CompressFormat.entries.map { it.name }.toTypedArray()
    }

    /**
     * Which [qrcode.render.graphics.AndroidDrawingInterface] will handle the actual drawing. By default, a [android.graphics.Bitmap] and
     * [android.graphics.Canvas] will be used for compatibility reasons.
     *
     * If you're in a modern Android app using Jetpack Compose, please see the [drawQRCode] extension function.
     */
    var drawingInterface: AndroidDrawingInterface? = null

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
    private fun useCanvas(): AndroidDrawingInterface {
        if (drawingInterface == null) {
            drawingInterface = BitmapGraphics(width, height)
        }

        return drawingInterface!!
    }

    /** Return the dimensions of this Graphics object as a pair of `width, height` */
    actual open fun dimensions() = arrayOf(width, height)

    /**
     * Returns this image as a [ByteArray] encoded as PNG. Recommended to use [writeImage].
     *
     * @see writeImage
     */
    actual open fun getBytes(): ByteArray = getBytes("PNG")

    /**
     * Returns this image as a [ByteArray] encoded as the specified format. Recommended to use [writeImage].
     *
     * @see writeImage
     * @see availableFormats
     */
    actual open fun getBytes(format: String): ByteArray =
        ByteArrayOutputStream().let {
            writeImage(it, format)
            it.toByteArray()
        }

    /**
     * Writes the QRCode image in the specified [format] and [quality] into the destination [OutputStream].
     *
     * For app stability reasons if the specified [format] doesn't exist it'll be defaulted to [PNG].
     *
     * >**Note:** Please note that `JPG` is supported via the [JPEG] value, with an `E`.
     *
     * @see Bitmap.compress
     * @see availableFormats
     */
    open fun writeImage(destination: OutputStream, format: String = "PNG", quality: Int = 100) {
        val byteArray = drawingInterface?.getBytes(format, quality) ?: byteArrayOf()
        destination.write(byteArray)
    }

    /**
     * Returns the available formats to be passed as parameters to [getBytes].
     *
     * @see CompressFormat
     * @see CompressFormat.PNG
     * @see CompressFormat.JPEG
     */
    actual open fun availableFormats(): Array<String> = AVAILABLE_FORMATS

    /** Returns the [Bitmap] or [DrawScope] (if Jetpack Compose is available) object being worked upon. */
    actual open fun nativeImage(): Any = drawingInterface?.nativeImage() ?: throw NotImplementedError("Native image not supported")

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
    actual open fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
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
     * Reads the specified image from [rawData] and draws it at `(x,y)`
     */
    actual fun drawImage(rawData: ByteArray?, x: Int, y: Int) {
        if (rawData != null && rawData.isNotEmpty()) { // NOSONAR
            val imgBitmap = BitmapFactory.decodeByteArray(rawData, 0, rawData.size)
            drawImage(imgBitmap, x, y)
        }
    }

    /**
     * Draws a [Bitmap] at the specified `(x,y)`
     */
    open fun drawImage(img: Bitmap, x: Int, y: Int) {
        changed = true
        useCanvas().drawBitmap(img, x, y)
    }
}
