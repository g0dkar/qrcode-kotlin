import io.github.g0dkar.qrcode.QRCode
import java.io.File
import javax.imageio.ImageIO

class SimpleQRCode {
    fun createQRCode(content: String) {
        val imageData = QRCode(content).render()
        ImageIO.write(imageData, "PNG", File("kotlin-simple.png"))
    }
}

fun main() {
    SimpleQRCode()
        .createQRCode("Hello, world!")
}
