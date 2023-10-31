package old

import qrcode.color.Colors
import qrcode.internals.QRCodeSquareType
import qrcode.raw.QRCodeProcessor
import java.io.FileOutputStream

class RandomColoredQRCode {
    fun createQRCode(
        content: String,
        colors: Collection<Int>,
        backgroundColor: Int
    ) {
        val fileOut = FileOutputStream("kotlin-random-colored.png")
        val typeColorMap = mutableMapOf<QRCodeSquareType, Int>()

        val qrCodeCanvas = QRCodeProcessor(content).renderShaded { cellData, cellCanvas ->
            if (cellData.dark) {
                if (cellData.squareInfo.type != QRCodeSquareType.DEFAULT) {
                    typeColorMap.putIfAbsent(cellData.squareInfo.type, colors.random())
                }

                cellCanvas.fill(typeColorMap[cellData.squareInfo.type] ?: colors.random())
            } else {
                cellCanvas.fill(backgroundColor)
            }
        }

        qrCodeCanvas.writeImage(fileOut)
    }
}

fun main() {
    // Note: Colors.allColors() is defined at ColoredQRCode.kt (another example)
    RandomColoredQRCode()
        .createQRCode("Hello, world!", Colors.allColors(), Colors.WHITE)
}
