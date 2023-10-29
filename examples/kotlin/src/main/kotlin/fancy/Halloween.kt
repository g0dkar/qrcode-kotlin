package fancy

import java.io.FileOutputStream
import javax.imageio.ImageIO
import qrcode.Colors
import qrcode.fancy.FancyQRCode

fun main() {
    /*
     * Built near halloween, so why not? :)
     */
    val logoBytes = ClassLoader.getSystemResourceAsStream("happy-halloween.png")?.readBytes() ?: ByteArray(0)
    val logo = ImageIO.read(logoBytes.inputStream())

    val qrCode = FancyQRCode.newCircleBuilder()
        .withLogo(logoBytes, logo.width, logo.height)
        .withColor(Colors.ORANGE)
        .withBackgroundColor(Colors.TRANSPARENT)
        .build("Boo!")

    val pngData = qrCode.render()

    FileOutputStream("examples/kotlin/fancy-halloween.png").write(pngData)
}
