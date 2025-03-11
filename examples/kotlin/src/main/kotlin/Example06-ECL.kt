import qrcode.QRCode
import qrcode.raw.ErrorCorrectionLevel
import java.io.FileOutputStream

fun main() {
    // Example inspired by this issue: https://github.com/g0dkar/qrcode-kotlin/issues/141
    // Showcase how the same QRCode looks given the same data but different ECL values
    // Thanks to @dgmltn (https://github.com/dgmltn) for the idea for the example!
    // If you're interested in know more: https://github.com/g0dkar/qrcode-kotlin/issues/141#issuecomment-2703976980

    // All supported platforms
    // -----------------------
    val qrCodeData = "Hello, world."

    val eclLowQRCode = QRCode.ofSquares()
        .withErrorCorrectionLevel(ErrorCorrectionLevel.LOW) // <- See Here
        .withInformationDensity(1) // <- Setting this to >= 1 will make the code NOT compute a value
        .build(qrCodeData)
        .also { println("[Low] ECL: ${it.errorCorrectionLevel}, Information Density: ${it.informationDensity}") }
    val eclLowPngData = eclLowQRCode.renderToBytes()

    val eclMediumQRCode = QRCode.ofSquares()
        .withErrorCorrectionLevel(ErrorCorrectionLevel.MEDIUM) // <- See Here
        .withInformationDensity(1) // <- Setting this to >= 1 will make the code NOT compute a value
        .build(qrCodeData)
        .also { println("[Medium] ECL: ${it.errorCorrectionLevel}, Information Density: ${it.informationDensity}") }
    val eclMediumPngData = eclMediumQRCode.renderToBytes()

    // ECL High: we need to add +1 to the information density because of the extra data added by the ECL
    val eclHighQRCode = QRCode.ofSquares()
        .withErrorCorrectionLevel(ErrorCorrectionLevel.HIGH) // <- See Here
        .withInformationDensity(2) // <- Setting this to >= 1 will make the code NOT compute a value
        .build(qrCodeData)
        .also { println("[High] ECL: ${it.errorCorrectionLevel}, Information Density: ${it.informationDensity}") }
    val eclHighPngData = eclHighQRCode.renderToBytes()

    // ECL Very High: we need to add +1 to the information density because of the extra data added by the ECL
    val eclVeryHighQRCode = QRCode.ofSquares()
        .withErrorCorrectionLevel(ErrorCorrectionLevel.VERY_HIGH) // <- See Here
        .withInformationDensity(2) // <- Setting this to >= 1 will make the code NOT compute a value
        .build(qrCodeData)
        .also { println("[Very High] ECL: ${it.errorCorrectionLevel}, Information Density: ${it.informationDensity}") }
    val eclVeryHighPngData = eclVeryHighQRCode.renderToBytes()

    // Default: ECL Very High + auto computed information density
    val eclDefaultQRCode = QRCode.ofSquares()
        .withErrorCorrectionLevel(ErrorCorrectionLevel.VERY_HIGH)
        .build(qrCodeData)
        .also { println("[Default] ECL: ${it.errorCorrectionLevel}, Information Density (computed): ${it.informationDensity}") }
    val eclDefaultPngData = eclDefaultQRCode.renderToBytes()

    // Default: ECL LOW + auto computed information density
    val eclDefaultLowQRCode = QRCode.ofSquares()
        .withErrorCorrectionLevel(ErrorCorrectionLevel.HIGH)
        .build(qrCodeData)
        .also { println("[Default - ECL High] ECL: ${it.errorCorrectionLevel}, Information Density (computed): ${it.informationDensity}") }
    val eclDefaultLowPngData = eclDefaultLowQRCode.renderToBytes()

    // ECL Very High + Info Density: Using the maximum values to showcase how the QRCode grows given these parameters
    val denseQRCode = QRCode.ofSquares()
        .withErrorCorrectionLevel(ErrorCorrectionLevel.VERY_HIGH) // <- See Here
        .withInformationDensity(40) // <- Maximum value
        .build(qrCodeData)
        .also { println("[Dense] ECL: ${it.errorCorrectionLevel}, Information Density: ${it.informationDensity}") }
    val densePngData = denseQRCode.renderToBytes()

    // -----------------------
    // JVM-only code (saves the PNG Bytes to a file)
    FileOutputStream("examples/kotlin/example06-ecl-low.png").use { it.write(eclLowPngData) }
    FileOutputStream("examples/kotlin/example06-ecl-medium.png").use { it.write(eclMediumPngData) }
    FileOutputStream("examples/kotlin/example06-ecl-high.png").use { it.write(eclHighPngData) }
    FileOutputStream("examples/kotlin/example06-ecl-very-high.png").use { it.write(eclVeryHighPngData) }
    FileOutputStream("examples/kotlin/example06-ecl-default.png").use { it.write(eclDefaultPngData) }
    FileOutputStream("examples/kotlin/example06-ecl-default-high.png").use { it.write(eclDefaultLowPngData) }
    FileOutputStream("examples/kotlin/example06-dense.png").use { it.write(densePngData) }
}
