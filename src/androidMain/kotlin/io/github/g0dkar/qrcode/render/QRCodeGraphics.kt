package io.github.g0dkar.qrcode.render

import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.Paint.Style.FILL
import android.graphics.Paint.Style.STROKE
import android.graphics.Rect

actual class QRCodeGraphics actual constructor(
    private val width: Int,
    private val height: Int
) {
    private val image: Bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
    private val canvas: Canvas = Canvas(image)
    private val paintCache = mutableMapOf<Int, Paint>()

    private fun paint(color: Int): Paint {
        if (!paintCache.containsKey(color)) {
            paintCache[color] = Paint().apply { setColor(color) }
        }

        return paintCache[color]!!
    }

    /** Returns this image as a [ByteArray] encoded as PNG. */
    actual fun getBytes(): ByteArray = getBytes("PNG")

    /** Returns this image as a [ByteArray] encoded as the specified format (e.g. `PNG`, `JPG`, `BMP`, ...). */
    actual fun getBytes(format: String): ByteArray =
        ByteArray(0)

    /** Returns the available formats to be passed as parameters to [getBytes]. */
    actual fun availableFormats(): List<String> = listOf("png", "jpeg")

    /** Returns the native image object this QRCodeGraphics is working upon. */
    actual fun nativeImage(): Any = image

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    actual fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int) {
        canvas.drawLine(x1.toFloat(), y1.toFloat(), x2.toFloat(), y2.toFloat(), paint(color))
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawRect(Rect(x, y, width, height), paint(color).apply { style = STROKE })
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawRect(Rect(x, y, width, height), paint(color).apply { style = FILL })
    }

    /** Fill the whole area of this canvas with the especified [color]. */
    actual fun fill(color: Int) {
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
     * **Note:** you can't especify different sizes for different edges. This is just an example :)
     *
     */
    actual fun drawRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        canvas.drawRoundRect(
            x.toFloat(),
            y.toFloat(),
            width.toFloat(),
            height.toFloat(),
            borderRadius.toFloat(),
            borderRadius.toFloat(),
            paint(color).apply { style = STROKE }
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
     * **Note:** you can't especify different sizes for different edges. This is just an example :)
     *
     */
    actual fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        canvas.drawRoundRect(
            x.toFloat(),
            y.toFloat(),
            width.toFloat(),
            height.toFloat(),
            borderRadius.toFloat(),
            borderRadius.toFloat(),
            paint(color).apply { style = FILL }
        )
    }

    /** Draw an image inside another. Mostly used to merge squares into the main QRCode. */
    actual fun drawImage(img: QRCodeGraphics, x: Int, y: Int) {
        canvas.drawBitmap(img.image, x.toFloat(), y.toFloat(), null)
    }
}
