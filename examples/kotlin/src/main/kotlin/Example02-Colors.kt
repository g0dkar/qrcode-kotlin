import qrcode.QRCode
import qrcode.color.Colors
import java.io.FileOutputStream

fun main() {
    // All supported platforms
    // -----------------------
    // Plain color
    val orangeQRCode = QRCode.ofSquares()
        .withColor(Colors.ORANGE) // <- See Here
        .build("Orange")
    val orangePngData = orangeQRCode.render()

    // Changing both background and foreground
    val darkModeQRCode = QRCode.ofSquares()
        .withColor(Colors.css("#43454a"))           // <- See Here
        .withBackgroundColor(Colors.css("#1e1f22")) // <- See Here
        .build("Dark Mode QRCode")
    val darkModePngData = darkModeQRCode.render()

    // Have the squares be a linear gradient from a color to another
    val gradientQRCode = QRCode.ofSquares()
        .withGradientColor(Colors.BISQUE, Colors.BLUE) // <- See Here
        .build("Weird gradient colors, but I think it's nice")
    val gradientPngData = gradientQRCode.render()

    // Use "transparent" as a background color (meaning basically no background)
    val transparentQRCode = QRCode.ofSquares()
        .withBackgroundColor(Colors.TRANSPARENT)
        .build("You can put this on top of pretty much anything :)")
    val transparentPngData = transparentQRCode.render()

    // -----------------------
    // JVM-only code (saves the PNG Bytes to a file)
    FileOutputStream("examples/kotlin/example02-color.png").use { it.write(orangePngData) }
    FileOutputStream("examples/kotlin/example02-dark-mode.png").use { it.write(darkModePngData) }
    FileOutputStream("examples/kotlin/example02-gradient.png").use { it.write(gradientPngData) }
    FileOutputStream("examples/kotlin/example02-transparent.png").use { it.write(transparentPngData) }
}
