package qrcode.render

expect class QRCodeGraphics(width: Int, height: Int) {
    /** Returns `true` if **any** drawing was performed */
    fun changed(): Boolean

    /** Completely reset this object. It is expected that `changed()` returns false and the canvas is completely blank after invoking this. */
    fun reset()

    /** Return the dimensions of this Graphics object as a pair of `width, height` */
    fun dimensions(): Array<Int>

    /** Returns this image as a [ByteArray] encoded as PNG. */
    fun getBytes(): ByteArray

    /** Returns this image as a [ByteArray] encoded as the specified format (e.g. `PNG`, `JPG`, `BMP`, ...). */
    fun getBytes(format: String): ByteArray

    /** Returns the available formats to be passed as parameters to [getBytes]. */
    fun availableFormats(): Array<String>

    /** Returns the native image object this QRCodeGraphics is working upon. */
    fun nativeImage(): Any

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int, thickness: Double)

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double)

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int)

    /** Fill the whole area of this canvas with the specified [color]. */
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
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    fun drawRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int, thickness: Double)

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
     * fillRoundRect(0, 0, 100, 100, 5)
     * ```
     *
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int)

    /**
     * Draw the edges of an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     */
    fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double)

    /**
     * Fills an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     *
     */
    fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int)

    /**
     * Reads the specified image from [rawData] and draws it at `(x,y)`
     */
    fun drawImage(rawData: ByteArray?, x: Int, y: Int)
}
