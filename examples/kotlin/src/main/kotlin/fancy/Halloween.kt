package fancy

import qrcode.QRCode
import qrcode.color.Colors
import java.io.FileOutputStream
import javax.imageio.ImageIO

fun main() {
    /*
     * Built near Halloween, so why not? :)
     */
    val logoBytes = ClassLoader.getSystemResourceAsStream("happy-halloween.png")?.readBytes() ?: ByteArray(0)
    val logo = ImageIO.read(logoBytes.inputStream())

    val qrCode = QRCode.ofCircles()
        .withLogo(logoBytes, logo.width, logo.height)
        .withColor(Colors.ORANGE)
        .withBackgroundColor(Colors.TRANSPARENT)
        .build("https://getfirefox.com")

    val pngData = qrCode.render()
    FileOutputStream("examples/kotlin/fancy-halloween.png").write(pngData)
}
