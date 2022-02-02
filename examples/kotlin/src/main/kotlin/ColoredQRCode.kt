import io.github.g0dkar.qrcode.QRCode
import io.github.g0dkar.qrcode.render.Colors
import java.io.FileOutputStream

class ColoredQRCode {
    fun createQRCode(
        content: String,
        squareColor: Int,
        backgroundColor: Int,
        filename: String = "kotlin-colored.png"
    ) {
        val fileOut = FileOutputStream(filename)
        val qrCodeCanvas = QRCode(content).render(darkColor = squareColor, brightColor = backgroundColor)

        qrCodeCanvas.writeImage(fileOut)
    }
}

fun main() {
    val colors = Colors.allColors()
    val randomColor = colors[colors.keys.random()]!!

    ColoredQRCode()
        .createQRCode("Hello, world!", randomColor, Colors.WHITE)
}
