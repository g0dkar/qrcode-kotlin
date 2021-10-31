import io.github.g0dkar.qrcode.QRCode
import java.awt.Color
import java.io.File
import javax.imageio.ImageIO

class GradientColorQRCode(
    private val topToBottom: Boolean = false
) {
    private fun pct(x: Int, y: Int, width: Int, height: Int): Double =
        if (topToBottom) {
            x.toDouble() / height.toDouble()
        } else {
            y.toDouble() / width.toDouble()
        }

    fun createQRCode(
        content: String,
        startColor: Color,
        endColor: Color,
    ) {
        val imageData = QRCode(content).renderShaded { image, x, y, cellData ->
            cellData?.let { (isDark, _, _) ->
                if (isDark) {
                    val topBottomPct = pct(x, y, image.width, image.height)
                    val bottomTopPct = 1 - topBottomPct
                    Color(
                        (startColor.red * topBottomPct + endColor.red * bottomTopPct).toInt(),
                        (startColor.green * topBottomPct + endColor.green * bottomTopPct).toInt(),
                        (startColor.blue * topBottomPct + endColor.blue * bottomTopPct).toInt()
                    ).rgb
                } else {
                    Color.white.rgb
                }
            }
                ?: Color.white.rgb
        }

        ImageIO.write(imageData, "PNG", File("kotlin-gradient.png"))
    }
}

fun main() {
    val startColor = Color(0, 135, 220) // Light Blue
    val endColor = Color(0, 55, 120) // Dark Blue

    GradientColorQRCode()
        .createQRCode("Hello, world!", startColor, endColor)
}
