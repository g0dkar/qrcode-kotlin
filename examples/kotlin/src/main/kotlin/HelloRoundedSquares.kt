import qrcode.QRCode
import java.io.FileOutputStream

fun main() {
    val qrCode = QRCode.ofRoundedSquares()
        .build("Hello, rounded squares!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-rounded-squares.png").write(pngData)
}
