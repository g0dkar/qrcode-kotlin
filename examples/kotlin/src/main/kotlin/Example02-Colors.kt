import qrcode.QRCode
import qrcode.color.Colors
import qrcode.color.LinearGradientColorFunction
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

    val gradientQRCode = QRCode.ofSquares()
        .withCustomColorFunction(
            LinearGradientColorFunction(
                startForegroundColor = Colors.BISQUE,
                endForegroundColor = Colors.BLUE,
            ),
        )
        .build("Dark Mode QRCode")
    val gradientPngData = gradientQRCode.render()

    // ---------------------------
    // JVM-only code (saves the PNG Bytes to a file)
    FileOutputStream("examples/kotlin/example02-color.png").write(orangePngData)
    FileOutputStream("examples/kotlin/example02-dark-mode.png").write(darkModePngData)
    FileOutputStream("examples/kotlin/example02-gradient.png").write(gradientPngData)
}
