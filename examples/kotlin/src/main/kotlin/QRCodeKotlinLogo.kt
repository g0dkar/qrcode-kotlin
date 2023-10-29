import qrcode.color.Colors
import qrcode.internals.QRCodeRegion.BOTTOM_LEFT_CORNER
import qrcode.internals.QRCodeRegion.BOTTOM_RIGHT_CORNER
import qrcode.internals.QRCodeRegion.TOP_LEFT_CORNER
import qrcode.internals.QRCodeRegion.TOP_RIGHT_CORNER
import qrcode.internals.QRCodeSquareType.MARGIN
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.raw.QRCodeBuilder
import qrcode.render.QRCodeGraphics
import java.awt.Color
import java.awt.MultipleGradientPaint.CycleMethod
import java.awt.Polygon
import java.awt.RadialGradientPaint
import java.awt.RenderingHints
import java.awt.geom.Point2D
import java.awt.image.BufferedImage
import java.io.FileOutputStream
import javax.imageio.ImageIO
import kotlin.math.roundToInt

/**
 * This is a special, very custom example. It only works on the JVM. It uses the AWT classes directly to create a very
 * special QRCode which is the logo of the library :)
 */
class QRCodeKotlinLogo {
    companion object {
        val SQUARE_COLOR: Int = Colors.withAlpha(Colors.WHITE, 200)
    }

    fun createQRCodeKotlinLogo(cellSize: Int, margin: Int = (cellSize / 1.16).roundToInt()) {
        val renderedQrCodeImage =
            QRCodeBuilder("QRCode Kotlin").renderShaded(cellSize, margin) { qrCodeSquare, qrCodeGraphics ->
                if (qrCodeSquare.dark) {
                    when (qrCodeSquare.squareInfo.type) {
                        POSITION_PROBE -> when (qrCodeSquare.squareInfo.region) {
                            TOP_LEFT_CORNER -> drawTopLeftCorner(qrCodeGraphics)
                            TOP_RIGHT_CORNER -> drawTopRightCorner(qrCodeGraphics)
                            BOTTOM_LEFT_CORNER -> drawBottomLeftCorner(qrCodeGraphics)
                            BOTTOM_RIGHT_CORNER -> drawBottomRightCorner(qrCodeGraphics)
                            else -> qrCodeGraphics.fill(SQUARE_COLOR)
                        }

                        MARGIN -> qrCodeGraphics.fill(SQUARE_COLOR)
                        else -> qrCodeGraphics.fillRoundRect(
                            0, 0, qrCodeGraphics.width, qrCodeGraphics.height,
                            (qrCodeGraphics.width / 1.16).toInt(), SQUARE_COLOR
                        )
                    }
                }
            }.nativeImage() as BufferedImage

        val background =
            BufferedImage(renderedQrCodeImage.width, renderedQrCodeImage.height, BufferedImage.TYPE_INT_ARGB)

        // This was based on a Radial Gradient found on the Kotlin official Website
        val sizeFloat = renderedQrCodeImage.width.toFloat()
        val gradientCenter = Point2D.Float(-0.0f, sizeFloat)
        val dist = floatArrayOf(0.0f, 0.1758f, 0.5031f, 0.9703f)
        val colors = arrayOf(color("#ef4857"), color("#de4970"), color("#b44db0"), color("#7f52ff"))
        val radialGradientPaint = RadialGradientPaint(
            gradientCenter, sizeFloat, gradientCenter,
            dist, colors,
            CycleMethod.NO_CYCLE
        )

        val graphics = background.createGraphics()
        graphics.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON)

        // Draw the Kotlin Background
        graphics.paint = radialGradientPaint
        graphics.fillRoundRect(0, 0, background.width, background.height, margin, margin)

        // Draw the QRCode
        graphics.drawImage(renderedQrCodeImage, 0, 0, null)

        // Draw the Kotlin Logo
        val logoSquarePosition = background.width / 2 - cellSize / 2 - cellSize
        val logoSquareSize = cellSize * 3
        val factor = 1
        val logoPosition = (logoSquarePosition + margin / factor).toInt()
        val logoSize = (logoSquareSize - (margin / factor) * 2).toInt()

        // Wipe the middle
        graphics.fillRect(logoSquarePosition, logoSquarePosition, logoSquareSize, logoSquareSize)

        // Logo Polygon
        val kShape = Polygon()
        kShape.addPoint(logoPosition, logoPosition)
        kShape.addPoint(logoPosition + logoSize, logoPosition)
        kShape.addPoint(logoPosition + logoSize / 2, logoPosition + logoSize / 2)
        kShape.addPoint(logoPosition + logoSize, logoPosition + logoSize)
        kShape.addPoint(logoPosition, logoPosition + logoSize)

        // Paint a very discreet 2px border
        graphics.paint = Color(0, 0, 0, 25)
        kShape.translate(0, 2)
        graphics.fillPolygon(kShape)

        // Paint the Logo
        graphics.paint = Color.WHITE
        kShape.translate(0, -2)
        graphics.fillPolygon(kShape)

        graphics.dispose()

        FileOutputStream("qrcode-kotlin-logo.png").use {
            ImageIO.write(background, "PNG", it)
        }
    }

    private fun color(str: String): Color = Color(Colors.css(str), true)
    private fun size(canvas: QRCodeGraphics) = canvas.width * 4
    private fun circleSize(canvas: QRCodeGraphics): Int = (canvas.width * 1.8).toInt()

    private fun drawTopLeftCorner(canvas: QRCodeGraphics) {
        val size = size(canvas)
        val circleSize = circleSize(canvas)
        canvas.fillRoundRect(0, 0, size, size, circleSize, SQUARE_COLOR)
    }

    private fun drawTopRightCorner(canvas: QRCodeGraphics) {
        val size = size(canvas)
        val circleSize = circleSize(canvas)
        canvas.fillRoundRect(-size + canvas.width, 0, size, size, circleSize, SQUARE_COLOR)
    }

    private fun drawBottomLeftCorner(canvas: QRCodeGraphics) {
        val size = size(canvas)
        val circleSize = circleSize(canvas)
        canvas.fillRoundRect(0, -size + canvas.width, size, size, circleSize, SQUARE_COLOR)
    }

    private fun drawBottomRightCorner(canvas: QRCodeGraphics) {
        val size = size(canvas)
        val circleSize = circleSize(canvas)
        canvas.fillRoundRect(-size + canvas.width, -size + canvas.width, size, size, circleSize, SQUARE_COLOR)
    }
}

fun main() {
    QRCodeKotlinLogo().createQRCodeKotlinLogo(25)
}
