import java.io.FileOutputStream
import qrcode.QRCode

class ExactSizeQRCode {
    fun createQRCode(content: String, size: Int) {
        FileOutputStream("kotlin-exact-$size.png").use {
            val qrCode = QRCode(content)
            val qrCodeData = qrCode.encode()

            // qrCodeData[0].size = How many columns (X axis) the finished QRCode will have
            // qrCodeData.size = How many rows (Y axis) the finished QRCode will have
            // QRCodes are square so rows = columns ;)
            val sizePerCell: Int = size / qrCodeData.size

            val renderedImage = qrCode.render(cellSize = sizePerCell, margin = 0, rawData = qrCodeData)

            val finishedResult = if (renderedImage.width != size) {
                // Many times the image will be a bit smaller or a bit bigger because sizePerCell is an Int
                // This adds a few TRANSPARENT pixels of border around it (if smaller)
                // Or reduces the image by however many pixels needed, so it'll be the exact size
                val adjustedImage = qrCode.qrCodeGraphicsFactory.newGraphics(size, size)
                val adjustedX = (size / 2) - (renderedImage.width / 2)
                val adjustedY = (size / 2) - (renderedImage.width / 2)

                println("Adjusting image with x=$adjustedX, y=$adjustedY pixels...")

                adjustedImage.apply { drawImage(renderedImage, adjustedX, adjustedY) }
            } else {
                // Exact size image already! Yay!
                renderedImage
            }

            finishedResult.writeImage(it)
        }
    }
}

fun main() {
    ExactSizeQRCode()
        .createQRCode("Hello, 320px!", 320)
}
