package qrcode.render

import android.graphics.*
import android.graphics.Bitmap.CompressFormat.PNG
import android.graphics.Bitmap.Config.ARGB_8888
import android.graphics.Paint.Style.FILL
import android.graphics.Paint.Style.STROKE
import java.io.ByteArrayOutputStream
import java.io.OutputStream

@Suppress("MemberVisibilityCanBePrivate")
actual open class QRCodeGraphics actual constructor(
    val width: Int,
    val height: Int
) {
    companion object {
        val AVAILABLE_FORMATS: Array<String> = Bitmap.CompressFormat.values().map { it.name }.toTypedArray()
    }

    protected fun createCanvas(image: Bitmap) = Canvas(image)

    private val image: Bitmap = Bitmap.createBitmap(width, height, ARGB_8888)
    private val canvas: Canvas = createCanvas(image)
    private val paintCache = mutableMapOf<Int, Paint>()

    /**
     * Keeps a simple color cache. The default style is [STROKE]. Use [FILL] if you intend to fill an area of the image.
     */
    protected fun paintFromCache(color: Int, paintStyle: Paint.Style = STROKE): Paint {
        val paint = paintCache.computeIfAbsent(color) { Paint().apply { setColor(color) } }

        return paint.apply {
            if (style != paintStyle) {
                style = paintStyle
            }
        }
    }

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
        val compressFormat = toCompressFormat(format)
        image.compress(compressFormat, quality.coerceIn(0, 100), destination)
    }

    /**
     * Tries to convert a [String] into a [CompressFormat] returning [PNG] if it fails to do so.
     */
    private fun toCompressFormat(format: String) =
        try {
            Bitmap.CompressFormat.valueOf(format.uppercase())
        } catch (e: Throwable) {
            PNG
        }

    /**
     * Returns the available formats to be passed as parameters to [getBytes].
     *
     * @see CompressFormat
     * @see CompressFormat.PNG
     * @see CompressFormat.JPEG
     * @see CompressFormat.WEBP
     */
    actual open fun availableFormats(): Array<String> = AVAILABLE_FORMATS

    /** Returns the [Bitmap] object being worked upon. */
    actual open fun nativeImage(): Any = image

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    actual open fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int) {
        canvas.drawLine(x1.toFloat(), y1.toFloat(), x2.toFloat(), y2.toFloat(), paintFromCache(color))
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawRect(Rect(x, y, width, height), paintFromCache(color))
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawRect(Rect(x, y, width, height), paintFromCache(color, FILL))
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
    actual open fun drawRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        canvas.drawRoundRect(
            x.toFloat(),
            y.toFloat(),
            width.toFloat(),
            height.toFloat(),
            borderRadius.toFloat(),
            borderRadius.toFloat(),
            paintFromCache(color)
        )
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
        canvas.drawRoundRect(
            x.toFloat(),
            y.toFloat(),
            width.toFloat(),
            height.toFloat(),
            borderRadius.toFloat(),
            borderRadius.toFloat(),
            paintFromCache(color, FILL)
        )
    }

    /** Draw an image inside another. Mostly used to merge squares into the main QRCode. */
    actual open fun drawImage(img: QRCodeGraphics, x: Int, y: Int) {
        drawImage(img.image, x, y)
    }

    /**
     * Draw the edges of an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     */
    actual fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawOval(
            x.toFloat(),
            y.toFloat(),
            width.toFloat(),
            height.toFloat(),
            paintFromCache(color)
        )
    }

    /**
     * Fills an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     *
     */
    actual fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawOval(
            x.toFloat(),
            y.toFloat(),
            width.toFloat(),
            height.toFloat(),
            paintFromCache(color, FILL)
        )
    }

    /**
     * Reads the specified image from [rawData] and draws it at `(x,y)`
     */
    actual fun drawImage(rawData: ByteArray, x: Int, y: Int) {
        val imgBitmap = BitmapFactory.decodeByteArray(rawData, 0, rawData.size)
        drawImage(imgBitmap, x, y)
    }

    open fun drawImage(img: Bitmap, x: Int, y: Int) {
        canvas.drawBitmap(img, x.toFloat(), y.toFloat(), null)
    }
}
