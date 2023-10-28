import java.io.FileOutputStream
import qrcode.Colors
import qrcode.QRCode

class SVGQRCode {
    fun createQRCode(content: String) {
        FileOutputStream("kotlin-svg.svg").use {
            val qrCode = QRCode(content)
            val computedSize = qrCode.computeImageSize()
            val graphics = SVGQRCodeGraphics(computedSize, computedSize)

            qrCode.renderShaded(qrCodeGraphics = graphics) { qrCodeSquare, cellGraphics ->
                if (qrCodeSquare.dark) {
                    graphics.fillRect(
                        qrCodeSquare.absoluteX(),
                        qrCodeSquare.absoluteY(),
                        cellGraphics.width,
                        cellGraphics.height,
                        Colors.BLACK
                    )
                }
            }

            graphics.writeImage(it)
        }
    }
}

fun main() {
    SVGQRCode()
        .createQRCode("Hello, SVG!")
}
