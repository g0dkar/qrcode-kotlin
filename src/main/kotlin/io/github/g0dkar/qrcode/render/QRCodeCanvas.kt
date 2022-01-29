package io.github.g0dkar.qrcode.render

import java.awt.Graphics2D
import java.io.ByteArrayOutputStream
import java.io.OutputStream

/**
 * Abstracts a drawing canvas in which we'll draw the QRCode pixels to generate the image.
 *
 * This is an interface to the actual drawing implementation, which can be [Graphics2D] for
 * a JDK environment, for example. In fact, it was based on that class :)
 *
 * @author Rafael Lins - g0dkar
 */
abstract class QRCodeCanvas<T>(
    val width: Int,
    val height: Int
) {
    var color: Int = Colors.WHITE

    abstract val image: T

    /**
     * Writes the image data to the especified [OutputStream].
     *
     * Please, check the implementation for extra options such as image types (JPG, PNG, BMP, ...)
     *
     * @see BufferedImageCanvas
     */
    abstract fun writeImage(outputStream: OutputStream)

    /** Calls [writeImage] with a [ByteArrayOutputStream] and return it as a [ByteArray]. */
    fun toByteArray(): ByteArray =
        ByteArrayOutputStream().let {
            writeImage(it)
            it.toByteArray()
        }

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    abstract fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int = this.color)

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    abstract fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int = this.color)

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    abstract fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int = this.color)

    /** Fill the whole area of this canvas with the especified [color]. */
    fun fill(color: Int = this.color) {
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
    abstract fun drawRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int = this.color
    )

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
    abstract fun fillRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int = this.color
    )

    /** Draw an image inside another. Mostly used to merge squares into the main QRCode. */
    abstract fun drawImage(img: QRCodeCanvas<*>, x: Int, y: Int)
}
