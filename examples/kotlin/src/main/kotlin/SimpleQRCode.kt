import java.io.FileOutputStream
import qrcode.QRCode

class SimpleQRCode {
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
