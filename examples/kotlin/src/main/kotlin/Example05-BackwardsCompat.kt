import qrcode.QRCode
import java.awt.image.BufferedImage
import java.io.FileOutputStream
import javax.imageio.ImageIO

fun main() {
    // All supported platforms
    // -----------------------
    // Default rendering
    val defaultRenderQRCode = QRCode("Hello, processor!").render()
    val defaultRenderPngData = defaultRenderQRCode.nativeImage() as BufferedImage

    // -----------------------
    // JVM-only code (saves the PNG Bytes to a file)
    ImageIO.write(defaultRenderPngData, "PNG", FileOutputStream("examples/kotlin/example05-defaults.png"))
}
