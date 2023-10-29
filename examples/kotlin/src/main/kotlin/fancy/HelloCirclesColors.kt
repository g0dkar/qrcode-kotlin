package fancy

import java.io.FileOutputStream
import qrcode.Colors
import qrcode.fancy.FancyQRCode

fun main() {
    val qrCode = FancyQRCode.newCircleBuilder()
        .withColor(Colors.DODGER_BLUE)
        .build("Hello, circles... with color!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-circles-color.png").write(pngData)
}
