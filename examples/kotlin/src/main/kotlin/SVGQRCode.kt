import io.github.g0dkar.qrcode.QRCode
import java.io.FileOutputStream

class SVGQRCode {
    companion object {
        private const val USE_CSS = true

        private val svgRenderer = SVGQRCodeGraphics(
            QRCode.DEFAULT_CELL_SIZE,
            QRCode.DEFAULT_CELL_SIZE,
            USE_CSS
        )
    }
    fun createQRCode(content: String) {
        FileOutputStream("kotlin-svg.svg").use {
            QRCode(content).render(qrCodeGraphics = svgRenderer).writeImage(it)
        }
    }
}

fun main() {
    SVGQRCode()
        .createQRCode("Hello, world!")
}
