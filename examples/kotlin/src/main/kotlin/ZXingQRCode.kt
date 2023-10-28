import java.io.FileOutputStream
import qrcode.ErrorCorrectionLevel
import qrcode.MaskPattern
import qrcode.QRCode

/**
 * Tries to generate a QRCode as close as possible to the one generated by the following URL:
 *
 * [https://zxing.org/w/chart?cht=qr&chs=350x350&chld=M&choe=UTF-8&chl=Hello%2C+world!](https://zxing.org/w/chart?cht=qr&chs=350x350&chld=M&choe=UTF-8&chl=Hello%2C+world!)
 *
 * Which is a 350x350, Medium ECL, UTF-8 QRCode which encodes the string "Hello, world!"
 *
 * >**Disclaimer:** The resulting QRCode will likely be visually different, but contain the same data. You can check it
 * >by using a QRCode reader, or even Google's ZXing Own Online Decoder, available at
 * >[https://zxing.org/w/decode.jspx](https://zxing.org/w/decode.jspx)
 */
class ZXingQRCode {
    /**
     * The same result would be achieved by calling `QRCode(content).render(cellSize, margin)`, but we do it explicitly
     * to show all the steps of how you can fine-tune your QRCode.
     */
    fun createQRCode(content: String) {
        val cellSize = 12
        val margin = 49
        val qrCode = QRCode(content, ErrorCorrectionLevel.M)
        val qrCodeData = qrCode.encode(type = 1, maskPattern = MaskPattern.PATTERN000)

        val fileOut = FileOutputStream("kotlin-zxing-hello-world.png")

        qrCode.render(cellSize, margin, qrCodeData).writeImage(fileOut)
    }
}

fun main() {
    ZXingQRCode()
        .createQRCode("Hello, world!")
}
