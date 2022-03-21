package io.github.g0dkar.qrcode.render

import org.khronos.webgl.get
import org.w3c.dom.CanvasRenderingContext2D

actual class QRCodeGraphics actual constructor(
    private val width: Int,
    private val height: Int
) {
    private val canvas: Canvas = Canvas(width, height)

    private fun draw(color: Int, action: (CanvasRenderingContext2D) -> Unit) {
        val graphics = canvas.getContext("2d")
        val (r, g, b, a) = Colors.getRGBA(color)
        val rgbaColor = "rgba($r,$g,$b,${a / 255.0})"

        graphics.fillStyle = rgbaColor
        graphics.strokeStyle = rgbaColor

        action(graphics)
    }

    /** Returns this image as a [ByteArray] encoded as PNG. */
    actual fun getBytes(): ByteArray = getBytes("png")

    /** Returns this image as a [ByteArray] encoded as the specified format (e.g. `PNG`, `JPG`, `BMP`, ...). */
    actual fun getBytes(format: String): ByteArray =
        canvas.toBuffer("image/$format").let { data ->
            ByteArray(data.length) { data[it] }
        }

    /** Returns the available formats to be passed as parameters to [getBytes]. */
    actual fun availableFormats(): List<String> = listOf("png", "jpeg")

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    actual fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int) {
        draw(color) {
            it.beginPath()
            it.moveTo(x1.toDouble(), y1.toDouble())
            it.lineTo(x2.toDouble(), y2.toDouble())
            it.closePath()
            it.stroke()
        }
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) { it.strokeRect(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble()) }
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) { it.fillRect(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble()) }
    }

    /** Fill the whole area of this canvas with the especified [color]. */
    actual fun fill(color: Int) {
        fillRect(0, 0, width, height, color)
    }

    /**
     * Currently unsupported. Same as calling [drawRect].
     */
    actual fun drawRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        drawRect(x, y, width, height, color)
    }

    /**
     * Currently unsupported. Same as calling [fillRect].
     */
    actual fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        fillRect(x, y, width, height, color)
    }

    /** Draw an image inside another. Mostly used to merge squares into the main QRCode. */
    actual fun drawImage(img: QRCodeGraphics, x: Int, y: Int) {
        draw(0) { it.drawImage(img.canvas, x.toDouble(), y.toDouble()) }
    }

    /** Returns the native image object this QRCodeGraphics is working upon. */
    actual fun nativeImage(): Any = canvas
}
