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
        val imageData = QRCode(content).renderShaded { pixelData ->
            if (!pixelData.isMargin) {
                if (pixelData.isDark) {
                    val topBottomPct = pct(pixelData.x, pixelData.y, pixelData.image.width, pixelData.image.height)
                    val bottomTopPct = 1 - topBottomPct
                    Color(
                        (startColor.red * topBottomPct + endColor.red * bottomTopPct).toInt(),
                        (startColor.green * topBottomPct + endColor.green * bottomTopPct).toInt(),
                        (startColor.blue * topBottomPct + endColor.blue * bottomTopPct).toInt()
                    )
                } else {
                    Color.white
                }
            } else {
                Color.white
            }
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
