import qrcode.QRCode
import svg.SVGGraphicsFactory
import java.io.FileOutputStream

fun main() {
    // This example needs an external library to work, the awesome JFree SVG (check the build.gradle.kts)
    // Check it out: https://github.com/jfree/jfreesvg (highly recommended if you need SVGs)
    //
    // All examples here are the same of the Example01-Shapes.kt file
    // -----------------------
    // Squares (default)
    val squareQRCode = QRCode.ofSquares()
        .withGraphicsFactory(SVGGraphicsFactory()) // <- See Here --- Feel free to copy/paste and use these classes ^^
        .build("Hello, Squares!")
    val squarePngData = squareQRCode.render()

    // Circles
    val circleQRCode = QRCode.ofCircles()
        .withGraphicsFactory(SVGGraphicsFactory()) // <- See Here --- Feel free to copy/paste and use these classes ^^
        .build("Hello, Circles!")
    val circlePngData = circleQRCode.render()

    // Rounded Squares
    val roundedSquareQRCode = QRCode.ofRoundedSquares()
        .withGraphicsFactory(SVGGraphicsFactory()) // <- See Here --- Feel free to copy/paste and use these classes ^^
        .build("Hello, Rounded Squares!")
    val roundedSquarePngData = roundedSquareQRCode.render()

    // -----------------------
    // JVM-only code (saves the PNG Bytes to a file)
    FileOutputStream("examples/kotlin/example04-squares.svg").write(squarePngData)
    FileOutputStream("examples/kotlin/example04-circles.svg").write(circlePngData)
    FileOutputStream("examples/kotlin/example04-rounded-squares.svg").write(roundedSquarePngData)
}
