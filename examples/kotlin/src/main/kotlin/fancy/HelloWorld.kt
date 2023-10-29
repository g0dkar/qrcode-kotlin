package fancy

import qrcode.QRCode
import java.io.FileOutputStream

fun main() {
    val qrCode = QRCode.ofSquares()
        .withInnerSpacing(1)
        .build("Hello, world!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-hello-world.png").write(pngData)
}
