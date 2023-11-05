package svg

import qrcode.render.QRCodeGraphics
import qrcode.render.QRCodeGraphicsFactory

/**
 * Class that'll create the [SVGQRCodeGraphics] instances that'll be used to draw the QRCode
 */
class SVGGraphicsFactory : QRCodeGraphicsFactory() {
    override fun newGraphics(width: Int, height: Int): QRCodeGraphics =
        SVGQRCodeGraphics(width, height)
}
