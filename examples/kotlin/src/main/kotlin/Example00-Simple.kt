import qrcode.QRCode
import java.io.FileOutputStream

fun main() {
    val simpleQRCode = QRCode.ofSquares()
        .build("https://qrcodekotlin.com")
    val simplePngData = simpleQRCode.renderToBytes()

    FileOutputStream("examples/kotlin/examples-results/example00-simple.png").use { it.write(simplePngData) }
}
