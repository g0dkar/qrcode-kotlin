package io.github.g0dkar.qrcode.render

expect class QRCodeGraphics(width: Int, height: Int) {
    /** Returns this image as a [ByteArray] encoded as PNG. */
    fun getBytes(): ByteArray

    /** Returns this image as a [ByteArray] encoded as the specified format (e.g. `PNG`, `JPG`, `BMP`, ...). */
    fun getBytes(format: String): ByteArray

    /** Returns the available formats to be passed as parameters to [getBytes]. */
    fun availableFormats(): List<String>

    /** Returns the native image object this QRCodeGraphics is working upon. */
    fun nativeImage(): Any

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int)

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int)

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int)

    /** Fill the whole area of this canvas with the especified [color]. */
    fun fill(color: Int)

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
    fun drawRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int)

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
    fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int)

    /** Draw an image inside another. Mostly used to merge squares into the main QRCode. */
    fun drawImage(img: QRCodeGraphics, x: Int, y: Int)
}
