package fancy

import qrcode.QRCode
import qrcode.color.Colors
import java.io.FileOutputStream

fun main() {
    val qrCode = QRCode.ofCircles()
        .withColor(Colors.DODGER_BLUE)
        .build("Hello, circles... with color!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-circles-color.png").write(pngData)
}
