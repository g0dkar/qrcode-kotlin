package qrcode.render

import android.graphics.Canvas

/**
 * A platform-specific implementation of [QRCodeGraphicsFactory]. It makes it so that all [QRCodeGraphics] instances
 * created by the factory use the specified [canvas] and start drawing at the ([offsetX], [offsetY]) point.
 *
 * @see QRCodeGraphicsFactory
 * @see QRCodeGraphics.useCustomCanvas
 */
class AndroidQRCodeGraphicsFactory(
    var canvas: Canvas,
    val offsetX: Int = 0,
    val offsetY: Int = 0,
) : QRCodeGraphicsFactory() {
    override fun newGraphics(width: Int, height: Int): QRCodeGraphics =
        super.newGraphics(width, height)
            .apply { useCustomCanvas(canvas, offsetX, offsetY) }
}
