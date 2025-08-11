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
    // ----------------------------------

    val firstQRCode = QRCode.ofSquares().build("First Example")
    val firstQRCodeCanvas = firstQRCode.render().nativeImage() as BufferedImage
    val firstQRCodeWidth = firstQRCodeCanvas.width
    firstQRCodeCanvas.height
    val captionTextGraphics2d = firstQRCodeCanvas.createGraphics()
    val (captionTextWidth, captionTextHeight) = fitText(firstQRCode.data, firstQRCodeWidth, captionTextGraphics2d)

    val canvasCaption = BufferedImage(
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
            drawString(qrCodeText, qrCodeWidth / 2 - captionTextWidth / 2, qrCodeHeight + captionTextHeight / 2 + fontMetrics.ascent)
        }
    }

    // ----------------------------------

    val customFontTextGraphics2d = qrCodeCanvas.createGraphics()
        .apply { font = loadFont("MozillaHeadline-Regular.ttf") }
    val (customFontTextWidth, customFontTextHeight) = fitText(
        qrCodeText,
        qrCodeWidth,
        customFontTextGraphics2d,
    )

    BufferedImage(
        max(qrCodeWidth, customFontTextWidth),
        qrCodeHeight + customFontTextHeight * 2,
        BufferedImage.TYPE_INT_ARGB,
    ).also {
        it.createGraphics().apply {
            drawImage(qrCodeCanvas, 0, 0, null)

            font = customFontTextGraphics2d.font
            paint = Color.BLACK
            background = Color.BLACK
            setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON)
            drawString(qrCodeText, qrCodeWidth / 2 - captionTextWidth / 2, qrCodeHeight + captionTextHeight / 2 + fontMetrics.ascent)
        }
    }

    // ----------------------------------

    val customFontTextGraphics2d = qrCodeCanvas.createGraphics()
        .apply { font = loadFont("MozillaHeadline-Regular.ttf") }
    val (customFontTextWidth, customFontTextHeight) = fitText(
        qrCodeText,
        qrCodeWidth,
        customFontTextGraphics2d,
    )

    val canvasCustomFont = BufferedImage(
        max(qrCodeWidth, customFontTextWidth),
        qrCodeHeight + customFontTextHeight * 2,
        BufferedImage.TYPE_INT_ARGB,
    ).also {
        it.createGraphics().apply {
            drawImage(qrCodeCanvas, 0, 0, null)

            font = customFontTextGraphics2d.font
            paint = Color.BLACK
            background = Color.BLACK
            setRenderingHint(RenderingHints.KEY_TEXT_ANTIALIASING, RenderingHints.VALUE_TEXT_ANTIALIAS_ON)
            drawString(qrCodeText, qrCodeWidth / 2 - captionTextWidth / 2, qrCodeHeight + captionTextHeight / 2 + fontMetrics.ascent)
        }
    }

    // ----------------------------------

    FileOutputStream("examples/kotlin/examples-results/example08-caption.png").use {
        ImageIO.write(
            canvasCaption,
            "PNG",
            it,
        )
    }
    FileOutputStream("examples/kotlin/examples-results/example08-caption-customFont.png").use {
        ImageIO.write(
            canvasCustomFont,
            "PNG",
            it,
        )
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
