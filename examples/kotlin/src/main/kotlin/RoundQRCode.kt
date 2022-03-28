import io.github.g0dkar.qrcode.QRCode
import io.github.g0dkar.qrcode.internals.QRCodeSquareType.MARGIN
import io.github.g0dkar.qrcode.internals.QRCodeSquareType.POSITION_PROBE
import io.github.g0dkar.qrcode.render.Colors
import java.io.FileOutputStream

class RoundQRCode {
    fun createQRCode(content: String, radius: Int = 15) {
        FileOutputStream("kotlin-round.png").use {
            QRCode(content).renderShaded { cellData, canvas ->
                println("wtf?")
                // Always paint it white to make sure there are no transparent pixels
                canvas.fill(Colors.WHITE)

                if (cellData.dark) {
                    when (cellData.type) {
                        POSITION_PROBE -> canvas.fill(Colors.BLACK)
                        MARGIN -> canvas.fill(Colors.WHITE)
                        else -> canvas.fillRoundRect(0, 0, canvas.width, canvas.height, radius, Colors.BLACK)
                    }
                }
            }.writeImage(it)
        }
    }
}

fun main() {
    RoundQRCode()
        .createQRCode("Hello, world!")
}
