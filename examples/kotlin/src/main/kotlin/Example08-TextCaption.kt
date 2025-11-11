import qrcode.QRCode
import java.awt.Color
import java.awt.Font
import java.awt.Graphics2D
import java.awt.RenderingHints
import java.awt.geom.Rectangle2D
import java.awt.image.BufferedImage
import java.io.FileOutputStream
import javax.imageio.ImageIO
import kotlin.math.floor
import kotlin.math.max

fun main() {
    val canvasCaption = createQRCodeWithCaption("QRCode with Caption")

    FileOutputStream("examples/kotlin/examples-results/example08-caption.png")
        .use { ImageIO.write(canvasCaption, "PNG", it) }

    // ----------------------------------

    val customFont = loadFont("MozillaHeadline-Regular.ttf")
    val canvasCaptionWithCustomFont = createQRCodeWithCaption("Custom Font: Mozilla Headline", customFont)

    FileOutputStream("examples/kotlin/examples-results/example08-caption-customFont.png")
        .use { ImageIO.write(canvasCaptionWithCustomFont, "PNG", it) }
}

fun createQRCodeWithCaption(caption: String, customFont: Font? = null): BufferedImage {
    val qrCode = QRCode.ofSquares().build(caption)
    val qrCodeCanvas = qrCode.render().nativeImage() as BufferedImage
    val qrCodeWidth = qrCodeCanvas.width
    val qrCodeHeight = qrCodeCanvas.height
    val captionTextGraphics2d = qrCodeCanvas.createGraphics()
        .apply {
            if (customFont != null) {
                font = customFont
            }
        }
    val (captionTextWidth, captionTextHeight) = fitText(qrCode.data, qrCodeWidth, captionTextGraphics2d)

    // Generate the QRCode + Caption into a BufferedImage and return it
    return BufferedImage(
        max(qrCodeWidth, captionTextWidth),
        qrCodeHeight + captionTextHeight * 2,
        BufferedImage.TYPE_INT_ARGB,
    ).also {
        it.createGraphics().apply {
            drawImage(qrCodeCanvas, 0, 0, null)

            font = captionTextGraphics2d.font
            paint = Color.BLACK
            background = Color.BLACK
            setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON)
            drawString(
                caption,
                qrCodeWidth / 2 - captionTextWidth / 2,
                qrCodeHeight + captionTextHeight / 2 + fontMetrics.ascent,
            )
        }
    }
}

fun loadFont(fontFile: String): Font =
    ClassLoader.getSystemResourceAsStream(fontFile)
        .use { Font.createFont(Font.TRUETYPE_FONT, it) }

fun fitText(text: String, width: Int, graphics: Graphics2D, fontSizeIncrease: Float = 1.0f): Pair<Int, Int> {
    val targetWidth = floor(width * 0.9)
    var textSize = graphics.font.size.toFloat()
    var textBounds: Rectangle2D

    do {
        graphics.font = graphics.font.deriveFont(textSize)
        textBounds = graphics.fontMetrics.getStringBounds(text, graphics)
        textSize += fontSizeIncrease
    } while (textBounds.width <= targetWidth)

    return textBounds.width.toInt() to textBounds.height.toInt()
}
