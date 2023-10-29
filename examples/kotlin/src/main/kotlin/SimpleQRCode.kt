import qrcode.raw.QRCodeBuilder
import java.io.FileOutputStream

class SimpleQRCode {
    fun createQRCode(content: String) {
        FileOutputStream("kotlin-simple.png").use {
            QRCodeBuilder(content).render().writeImage(it)
        }
    }
}

fun main() {
    SimpleQRCode()
        .createQRCode("Hello, world!")
}
