package io.github.g0dkar.qrcode.render

import io.github.g0dkar.qrcode.internals.ErrorMessage.error
import java.awt.Color
import java.awt.Graphics2D
import java.awt.image.BufferedImage
import java.io.OutputStream
import javax.imageio.ImageIO

/**
 * Renders images using a JDK [BufferedImage].
 *
 * Suitable for creating QRCodes in a Server or Desktop environment.
 *
 * When calling [writeImage], this class will produce images of the [fileType] type (defaults to `PNG`). The
 * available file types can be fetched via [ImageIO.getWriterFormatNames].
 *
 * @author Rafael Lins - g0dkar
 *
 * @see writeImage
 * @see BufferedImage
 * @see ImageIO.write
 * @see ImageIO.getWriterFormatNames
 */
class BufferedImageCanvas(
    width: Int,
    height: Int,
    var fileType: String = "PNG"
) : QRCodeCanvas<BufferedImage>(width, height) {
    companion object {
        const val IMAGE_CLASS = "java.awt.image.BufferedImage"
    }

    override val image = BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB)

    /** Convenient setter for [fileType]. */
    fun withFileType(fileType: String): BufferedImageCanvas {
        this.fileType = fileType
        return this
    }

    /** Writes the image data to the especified [OutputStream] in the especified [fileType] (defaults to `PNG`). */
    override fun writeImage(outputStream: OutputStream) {
        ImageIO.write(image, fileType, outputStream)
    }

    private fun draw(color: Int, action: (Graphics2D) -> Unit) {
        val graphics = image.createGraphics()
        val jdkColor = Color(color, true)

        graphics.color = jdkColor
        graphics.background = jdkColor

        action(graphics)

        graphics.dispose()
    }

    override fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int) {
        draw(color) {
            it.drawLine(x1, y1, x2, y2)
        }
    }

    override fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) {
            it.drawRect(x, y, width, height)
        }
    }

    override fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) {
            it.fillRect(x, y, width, height)
        }
    }

    override fun drawRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        draw(color) {
            it.drawRoundRect(x, y, width, height, borderRadius, borderRadius)
        }
    }

    override fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        draw(color) {
            it.fillRoundRect(x, y, width, height, borderRadius, borderRadius)
        }
    }

    override fun drawImage(img: QRCodeCanvas<*>, x: Int, y: Int) {
        if (img is BufferedImageCanvas) {
            draw(0) {
                it.drawImage(img.image, x, y, null)
            }
        } else {
            throw UnsupportedOperationException(error("Invalid image type."))
        }
    }
}
