package fancy

import java.io.FileOutputStream
import qrcode.fancy.FancyQRCode

fun main() {
    val qrCode = FancyQRCode.newCircleBuilder()
        .build("Hello, circles!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-circles.png").write(pngData)
}
