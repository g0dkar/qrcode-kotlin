import qrcode.QRCode
import java.io.FileOutputStream

fun main() {
    val qrCode = QRCode.ofCircles()
        .build("Hello, circles!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-circles.png").write(pngData)
}
