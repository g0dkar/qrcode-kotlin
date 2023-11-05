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

    // Let's build a transparent QRCode with Kotlin's logo and a lightly transparent white as the color
    val qrCode = QRCode.ofCircles()
        .withSize(13)
        .withColor(Colors.rgba(255, 255, 255, 180))
        .withBackgroundColor(Colors.TRANSPARENT)
        .withLogo(logoBytes, 150, 150)
        .build("https://qrcodekotlin.com")

    // Before drawing the QRCode, draw our gradient as the background
    qrCode.graphics.directDraw {
        it.paint = kotlinGradient(qrCode.computedSize)
        it.fillRect(0, 0, qrCode.computedSize, qrCode.computedSize)
    }

    // And render the QRCode on top of the Gradient :)
    val qrCodeLogoPngData = qrCode.render()

    // Now to create the Banner...
    // We reset all the rendering done so far
    qrCode.reset()

    // Create a new 1280x640 image
    val w = 1280
    val h = 640
    val banner = qrCode.graphicsFactory.newGraphics(w, h)

    banner.directDraw {
        it.paint = kotlinGradient(w)
        it.fillRect(0, 0, w, h)
    }

    // Draw the QRCode on our banner canvas
    qrCode.renderToGraphics(banner, (w - qrCode.computedSize) / 2, (h - qrCode.computedSize) / 2)

    // Get the bytes to save it to a file :)
    val pngData = banner.getBytes()

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
