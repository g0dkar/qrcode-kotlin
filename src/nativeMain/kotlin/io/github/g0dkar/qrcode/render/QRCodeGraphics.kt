package io.github.g0dkar.qrcode.render

actual open class QRCodeGraphics actual constructor(
    val width: Int,
    val height: Int
) {
    /** Returns this image as a [ByteArray] encoded as PNG. */
    actual open fun getBytes(): ByteArray {
        return ByteArray(0)
    }

    /** Returns this image as a [ByteArray] encoded as the specified format (e.g. `PNG`, `JPG`, `BMP`, ...). */
    actual open fun getBytes(format: String): ByteArray {
        TODO("Not yet implemented")
    }

    /** Returns the available formats to be passed as parameters to [getBytes]. */
    actual open fun availableFormats(): Array<String> = arrayOf("PNG")

    /** Returns the native image object this QRCodeGraphics is working upon. */
    actual open fun nativeImage(): Any = 1

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    actual open fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int) {
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
    }

    /** Fill the whole area of this canvas with the specified [color]. */
    actual open fun fill(color: Int) {
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
        color: Int
    ) {
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
    }

    /** Draw an image inside another. Mostly used to merge squares into the main QRCode. */
    actual open fun drawImage(img: QRCodeGraphics, x: Int, y: Int) {
    }
}
