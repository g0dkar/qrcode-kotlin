import qrcode.QRCode
import qrcode.color.Colors
import qrcode.color.Colors.css
import java.awt.Color
import java.awt.MultipleGradientPaint.CycleMethod.NO_CYCLE
import java.awt.RadialGradientPaint
import java.awt.geom.Point2D
import java.io.FileOutputStream

fun main() {
    // Get the Kotlin Logo
    val logoBytes = ClassLoader.getSystemResourceAsStream("kotlin-logo.png")?.readBytes() ?: ByteArray(0)

    // Generate the QRCode
    val qrCode = QRCode.ofCircles()
        .withSize(13)
        .withColor(Colors.rgba(255, 255, 255, 180))
        .withBackgroundColor(Colors.TRANSPARENT)
        .withLogo(logoBytes, 150, 150)
        .build("https://qrcodekotlin.com")

    // Get a rendering of it with a transparent background (to add on the banner)
    val qrCodePngData = qrCode.render()

    // Reset all that was drawn so far
    qrCode.reset()
    // Draw our gradient as the background
    qrCode.graphics.directDraw {
        it.paint = kotlinGradient(qrCode.computedSize)
        it.fillRect(0, 0, qrCode.computedSize, qrCode.computedSize)
    }
    // Render the QRCode on top of the Gradient :)
    val qrCodeLogoPngData = qrCode.render()

    // Banner
    val w = 1280
    val h = 640
    val wholeImage = qrCode.graphicsFactory.newGraphics(w, h)
    wholeImage.directDraw {
        it.paint = kotlinGradient(w)
        it.fillRect(0, 0, w, h)
    }
    wholeImage.drawImage(qrCodePngData, (w - qrCode.computedSize) / 2, (h - qrCode.computedSize) / 2)
    val pngData = wholeImage.getBytes()

    // -----------------------
    // JVM-only code (saves the PNG Bytes to a file)
    FileOutputStream("examples/kotlin/project-banner.png").use { it.write(pngData) }
    FileOutputStream("examples/kotlin/project-logo.png").use { it.write(qrCodeLogoPngData) }
}

private fun kotlinGradient(width: Int): RadialGradientPaint {
    val gradientCenter = Point2D.Float(-0.0f, width.toFloat())
    // Distances and colors taken from the official Kotlin website
    val dist = floatArrayOf(0.0f, 0.1758f, 0.5031f, 0.9703f)
    val colors = arrayOf(Color(css("#ef4857")), Color(css("#de4970")), Color(css("#b44db0")), Color(css("#7f52ff")))
    return RadialGradientPaint(
        gradientCenter, width.toFloat(), gradientCenter,
        dist, colors,
        NO_CYCLE,
    )
}
