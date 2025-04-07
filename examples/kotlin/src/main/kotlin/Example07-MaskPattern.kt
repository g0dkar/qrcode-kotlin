import qrcode.QRCode
import qrcode.raw.MaskPattern
import java.io.FileOutputStream

fun main() {
    // This example shows that the same data can be encoded with many different patterns.
    // The default (000) is no pattern at all :)
    // As far as I know, this is only for aesthetics.
    // For more info: https://www.thonky.com/qr-code-tutorial/mask-patterns (accessed 03/2025)

    // All supported platforms
    // -----------------------
    MaskPattern.entries.forEachIndexed { index, entry ->
        val number = index.toString(2).padStart(3, '0')
        qrcodeForMaskPattern(number, entry)
    }
}

private fun qrcodeForMaskPattern(number: String, maskPattern: MaskPattern) {
    val qrCodeData = "Hello, Mask Pattern."

    val maskPatternQRCode = QRCode.ofSquares()
        .withMaskPattern(maskPattern)
        .build(qrCodeData)
    val maskPatternPngData = maskPatternQRCode.renderToBytes()

    FileOutputStream("examples/kotlin/examples-results/example07-mask-pattern-$number.png").use { it.write(maskPatternPngData) }
}
