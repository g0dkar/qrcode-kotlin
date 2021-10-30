import io.github.g0dkar.qrcode.QRCode
import java.awt.Color
import java.io.File
import java.util.*
import javax.imageio.ImageIO

class ColoredQRCode {
    fun createQRCode(
        content: String,
        squareColor: Color,
        backgroundColor: Color,
        filename: String = "qrcode-colored.png"
    ) {
        val imageData = QRCode(content).render(darkColor = squareColor, brightColor = backgroundColor)
        ImageIO.write(imageData, "PNG", File(filename))
    }
}

fun main() {
    val colors = listOf(
        Color.gray,
        Color.darkGray,
        Color.red,
        Color.pink,
        Color.orange,
        Color.yellow,
        Color.green,
        Color.magenta,
        Color.cyan,
        Color.blue,
    )

    val randomColor = colors[Random().nextInt(colors.size)]

    ColoredQRCode()
        .createQRCode("Hello, world!", randomColor, Color.white)
}
