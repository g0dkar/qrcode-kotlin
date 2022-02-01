import io.github.g0dkar.qrcode.QRCode
import java.io.FileOutputStream

class SimpleQRCode {
    fun createQRCode(content: String) {
        val fileOut = FileOutputStream("kotlin-simple.png")
        QRCode(content).render().writeImage(fileOut)
    }
}

fun main() {
    SimpleQRCode()
        .createQRCode("Hello, world!")
}
