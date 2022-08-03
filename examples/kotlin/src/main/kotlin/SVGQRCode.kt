import io.github.g0dkar.qrcode.QRCode
import java.io.FileOutputStream

class SVGQRCode {
    fun createQRCode(content: String) {
        FileOutputStream("kotlin-simple.png").use {
            QRCode(content).render().writeImage(it)
        }
    }
}

fun main() {
    SimpleQRCode()
        .createQRCode("Hello, world!")
}
