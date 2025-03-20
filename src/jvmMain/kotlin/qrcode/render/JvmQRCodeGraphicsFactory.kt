package qrcode.render

import java.awt.image.BufferedImage

/**
 * A platform-specific implementation of [QRCodeGraphicsFactory]. It makes it so that all [QRCodeGraphics] instances
 * created by the factory use the specified [bufferedImage] and start drawing at the ([offsetX], [offsetY]) point.
 *
 * @see QRCodeGraphicsFactory
 * @see QRCodeGraphics.useCustomBufferedImage
 */
class JvmQRCodeGraphicsFactory(
    var bufferedImage: BufferedImage,
    val offsetX: Int = 0,
    val offsetY: Int = 0,
) : QRCodeGraphicsFactory() {
    override fun newGraphics(width: Int, height: Int): QRCodeGraphics =
        super.newGraphics(width, height)
            .apply { useCustomBufferedImage(bufferedImage, offsetX, offsetY) }
}
