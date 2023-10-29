package fancy

import java.io.FileOutputStream
import qrcode.fancy.FancyQRCode

fun main() {
    val qrCode = FancyQRCode.newRoundedSquareBuilder()
        .build("Hello, rounded squares!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-rounded-squares.png").write(pngData)
}
