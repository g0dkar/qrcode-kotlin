package fancy

import java.io.FileOutputStream
import qrcode.fancy.FancyQRCode

fun main() {
    val qrCode = FancyQRCode.newBuilder()
        .withInnerSpacing(1)
        .build("Hello, world!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-hello-world.png").write(pngData)
}
