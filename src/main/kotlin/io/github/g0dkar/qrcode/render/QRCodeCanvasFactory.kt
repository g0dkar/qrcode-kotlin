package io.github.g0dkar.qrcode.render

import io.github.g0dkar.qrcode.internals.ErrorMessage.error
import java.lang.ClassLoader.getSystemClassLoader

/**
 * Builds platform-correct instances of QRCode. It tries to detect available implementations of
 * image builders and creates a respective [QRCodeCanvas] instance.
 *
 * @author Rafael Lins - g0dkar
 */
object QRCodeCanvasFactory {
    private val hasBufferedImage = detectClass(BufferedImageCanvas.IMAGE_CLASS)

    fun newCanvas(size: Int): QRCodeCanvas<*> =
        newCanvas(size, size)

    fun newCanvas(width: Int, height: Int): QRCodeCanvas<*> =
        if (hasBufferedImage) {
            BufferedImageCanvas(width, height)
        } else {
            throw UnsupportedOperationException(error("No available image classes were found!"))
        }

    fun detectClass(className: String, classLoader: ClassLoader = getSystemClassLoader()): Boolean =
        try {
            Class.forName(className, false, classLoader)
            true
        } catch (t: Throwable) {
            false
        }
}
