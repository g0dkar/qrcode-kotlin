import qrcode.QRCode
import java.io.FileOutputStream

fun main() {
    // Examples written around the time of the 2023 Halloween. So why not have some fun?
    // -----------------------
    // JVM-only code: For our platform-independent code we just need a ByteArray of the PNG logo :)
    val logoBytes = ClassLoader.getSystemResourceAsStream("ghost.png")?.readBytes() ?: ByteArray(0)

    // All supported platforms
    // -----------------------
    // Simply add a logo image
    val logoQRCode = QRCode.ofCircles()
        .withLogo(logoBytes, 150, 150) // <- See Here --- Default: Will hide cells behind logo
        .build("BOO!!! Happy Halloween!")
    val logoQRCodePngData = logoQRCode.renderToBytes()

    // Simply add a logo image
    val transparentQRCode = QRCode.ofCircles()
        .withLogo(logoBytes, 150, 150, clearLogoArea = false) // <- See Here --- Keep cells behind logo
        .build("BOO!!! Happy Halloween!")
    val transparentQRCodePngData = transparentQRCode.renderToBytes()

    // ---------------------------
    // JVM-only code (saves the PNG Bytes to a file)
    FileOutputStream("examples/kotlin/examples-results/example03-logo.png").use { it.write(logoQRCodePngData) }
    FileOutputStream("examples/kotlin/examples-results/example03-logo-with-cells.png").use { it.write(transparentQRCodePngData) }
}
