package io.github.g0dkar.qrcode.render

import io.github.g0dkar.qrcode.QRCode

/**
 * A class used by [QRCode] to build instances of [QRCodeGraphics].
 *
 * @author Rafael Lins - g0dkar
 */
abstract class QRCodeGraphicsFactory<out T : QRCodeGraphics> {
    /**
     * Creates a `size` by `size` square [QRCodeGraphics] instance.
     */
    open fun newGraphics(size: Int) = newGraphics(size, size)

    /**
     * Creates a new [QRCodeGraphics] instance.
     */
    abstract fun newGraphics(width: Int, height: Int): T
}

/**
 * The default implementation of [QRCodeGraphicsFactory]. It builds the default [QRCodeGraphics] available for the platform.
 *
 * @author Rafael Lins - g0dkar
 */
class DefaultQRCodeGraphicsFactory : QRCodeGraphicsFactory<QRCodeGraphics>() {
    override fun newGraphics(width: Int, height: Int): QRCodeGraphics = QRCodeGraphics(width, height)
}
