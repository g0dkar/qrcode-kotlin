import qrcode.QRCode
import qrcode.color.Colors
import qrcode.raw.QRCodeProcessor
import qrcode.render.QRCodeGraphics
import qrcode.shape.DefaultShapeFunction
import qrcode.shape.QRCodeShapeFunction
import java.awt.Color
import java.awt.Polygon
import java.io.FileOutputStream

fun main() {
    // All supported platforms
    // -----------------------
    // Squares (default)
    val squareQRCode = QRCode.ofSquares() // <- See Here
        .build("Hello, Squares!")
    val squarePngData = squareQRCode.renderToBytes()

    // Circles
    val circleQRCode = QRCode.ofCircles() // <- See Here
        .build("Hello, Circles!")
    val circlePngData = circleQRCode.renderToBytes()

    // Rounded Squares
    val roundedSquareQRCode = QRCode.ofRoundedSquares() // <- See Here
        .build("Hello, Rounded Squares!")
    val roundedSquarePngData = roundedSquareQRCode.renderToBytes()

    // Custom Shape
    // WARNING: For demonstration purposes only. My phone camera couldn't read it.
    val customShapeQRCode = QRCode.ofCustomShape(TriangleShapeFunction()) // <- See Here
        .build("Hello, Triangles!")
    val customShapePngData = customShapeQRCode.renderToBytes()

    // Custom Shape - JVM-specific implementation
    // WARNING: For demonstration purposes only. My phone camera couldn't read it.
    val customShapeQRCodeJVM = QRCode.ofCustomShape(JVMTriangleShapeFunction()) // <- See Here
        .build("Hello, Triangles... from the JVM!")
    val customShapePngDataJVM = customShapeQRCodeJVM.renderToBytes()

    // -----------------------
    // JVM-only code (saves the PNG Bytes to a file)
    FileOutputStream("examples/kotlin/examples-results/example01-squares.png").use { it.write(squarePngData) }
    FileOutputStream("examples/kotlin/examples-results/example01-circles.png").use { it.write(circlePngData) }
    FileOutputStream("examples/kotlin/examples-results/example01-rounded-squares.png").use { it.write(roundedSquarePngData) }
    FileOutputStream("examples/kotlin/examples-results/example01-custom.png").use { it.write(customShapePngData) }
    FileOutputStream("examples/kotlin/examples-results/example01-custom-jvm.png").use { it.write(customShapePngDataJVM) }
}

class TriangleShapeFunction(
    squareSize: Int = QRCodeProcessor.DEFAULT_CELL_SIZE,
    innerSpace: Int = 1,
) : DefaultShapeFunction(squareSize, innerSpace) {
    override fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int, canvas: QRCodeGraphics) {
        val topCenterX = x + width / 2
        val topCenterY = y
        val bottomLeftX = x
        val bottomLeftY = y + height
        val bottomRightX = x + width
        val bottomRightY = y + height

        // Line from top-center to bottom-left
        canvas.drawLine(topCenterX, topCenterY, bottomLeftX, bottomLeftY, color, 1.0)
        // Line from top-center to bottom-right
        canvas.drawLine(topCenterX, topCenterY, bottomRightX, bottomRightY, color, 1.0)
        // Line from bottom-left to bottom-right
        canvas.drawLine(bottomLeftX, bottomLeftY, bottomRightX, bottomRightY, color, 1.0)
    }
}

/**
 * Simple [QRCodeShapeFunction] that draws filled triangles instead of squares using AWT's Polygon + Graphics2D fill().
 */
class JVMTriangleShapeFunction(
    squareSize: Int = QRCodeProcessor.DEFAULT_CELL_SIZE,
    innerSpace: Int = 1,
) : DefaultShapeFunction(squareSize, innerSpace) {
    override fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int, canvas: QRCodeGraphics) {
        val topCenterX = x + width / 2
        val topCenterY = y
        val bottomLeftX = x
        val bottomLeftY = y + height
        val bottomRightX = x + width
        val bottomRightY = y + height

        canvas.directDraw { // JVM only. We'll receive a raw Graphics2D object to draw on.
            val triangle = Polygon()
            triangle.addPoint(topCenterX, topCenterY)
            triangle.addPoint(bottomLeftX, bottomLeftY)
            triangle.addPoint(bottomRightX, bottomRightY)
            triangle.addPoint(topCenterX, topCenterY)

            val (r, g, b, a) = Colors.getRGBA(color)

            it.paint = Color(r, g, b, a)

            it.fill(triangle)
        }
    }
}
