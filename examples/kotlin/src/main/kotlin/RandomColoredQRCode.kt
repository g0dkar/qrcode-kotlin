import io.github.g0dkar.qrcode.QRCode
import java.awt.Color
import java.awt.Point
import java.io.File
import java.util.*
import javax.imageio.ImageIO

class RandomColoredQRCode {
    fun createQRCode(
        content: String,
        colors: List<Color>,
        backgroundColor: Color
    ) {
        val colorMap = mutableMapOf<Point, Color>()
        val imageData = QRCode(content).renderShaded { pixelData ->
            if (pixelData.isMargin) {
                if (pixelData.isDark) {
                    colorMap.computeIfAbsent(
                        Point(
                            pixelData.row,
                            pixelData.col
                        )
                    ) { colors[Random().nextInt(colors.size)] }
                } else {
                    backgroundColor
                }
            } else {
                backgroundColor
            }
        }
        ImageIO.write(imageData, "PNG", File("kotlin-random-colored.png"))
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

    RandomColoredQRCode()
        .createQRCode("Hello, world!", colors, Color.white)
}
