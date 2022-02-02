import io.github.g0dkar.qrcode.QRCode
import io.github.g0dkar.qrcode.internals.QRCodeSquareType
import io.github.g0dkar.qrcode.render.Colors
import java.io.FileOutputStream

class RandomColoredQRCode {
    fun createQRCode(
        content: String,
        colors: Collection<Int>,
        backgroundColor: Int
    ) {
        val fileOut = FileOutputStream("kotlin-random-colored.png")
        val typeColorMap = mutableMapOf<QRCodeSquareType, Int>()

        val qrCodeCanvas = QRCode(content).renderShaded { cellData, cellCanvas ->
            if (cellData.dark) {
                if (cellData.type != QRCodeSquareType.DEFAULT) {
                    typeColorMap.putIfAbsent(cellData.type, colors.random())
                }

                cellCanvas.fill(typeColorMap[cellData.type] ?: colors.random())
            } else {
                cellCanvas.fill(backgroundColor)
            }
        }

        qrCodeCanvas.writeImage(fileOut)
    }
}

fun main() {
    RandomColoredQRCode()
        .createQRCode("Hello, world!", Colors.allColors().values, Colors.WHITE)
}
