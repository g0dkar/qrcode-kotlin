import io.github.g0dkar.qrcode.QRCode
import io.github.g0dkar.qrcode.render.Colors
import java.io.FileOutputStream

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
        startColor: Int,
        endColor: Int,
    ) {
        val fileOut = FileOutputStream("kotlin-gradient.png")

        val qrCode = QRCode(content)
        val qrCodeData = qrCode.encode()
        val qrCodeSize = qrCode.computeImageSize(rawData = qrCodeData)

        val (startR, startG, startB) = Colors.getRGB(startColor)
        val (endR, endG, endB) = Colors.getRGB(endColor)

        val qrCodeCanvas = qrCode.renderShaded(rawData = qrCodeData) { cellData, cellCanvas ->
            if (cellData.dark) {
                val (x, y) = cellData.coords()

                for (currY in 0 until cellCanvas.height) {
                    val topBottomPct = pct(x, y + currY, qrCodeSize, qrCodeSize)
                    val bottomTopPct = 1 - topBottomPct

                    val currColor = Colors.rgba(
                        (startR * bottomTopPct + endR * topBottomPct).toInt(),
                        (startG * bottomTopPct + endG * topBottomPct).toInt(),
                        (startB * bottomTopPct + endB * topBottomPct).toInt()
                    )

                    cellCanvas.drawLine(0, currY, cellCanvas.width, currY, currColor)
                }
            }
            else {
                cellCanvas.fill(Colors.WHITE)
            }
        }

        qrCodeCanvas.writeImage(fileOut)
    }
}

fun main() {
    val startColor = Colors.css("#0087DC") // Light Blue
    val endColor = Colors.css("#003778") // Dark Blue

    GradientColorQRCode()
        .createQRCode("Hello, world!", startColor, endColor)
}
