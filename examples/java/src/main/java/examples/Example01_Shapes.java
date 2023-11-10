package examples;

import examples.customClasses.JVMTriangleShapeFunction;
import examples.customClasses.TriangleShapeFunction;
import qrcode.QRCode;

/**
 * Examples written for Java 17+
 */
public class Example01_Shapes { // NOSONAR
    public static void main(String[] args) {
        // All supported platforms
        // -----------------------
        // Squares (default)
        QRCode squareQRCode = QRCode.ofSquares() // <- See Here
                .build("Hello, Squares!");
        byte[] squarePngData = squareQRCode.renderToBytes();

        // Circles
        QRCode circleQRCode = QRCode.ofCircles() // <- See Here
                .build("Hello, Circles!");
        byte[] circlePngData = circleQRCode.renderToBytes();

        // Rounded Squares
        QRCode roundedSquareQRCode = QRCode.ofRoundedSquares() // <- See Here
                .build("Hello, Rounded Squares!");
        byte[] roundedSquarePngData = roundedSquareQRCode.renderToBytes();

        // Custom Shape
        // WARNING: For demonstration purposes only. My phone camera couldn't read it.
        QRCode customShapeQRCode = QRCode.ofCustomShape(new TriangleShapeFunction()) // <- See Here
                .build("Hello, Triangles!");
        byte[] customShapePngData = customShapeQRCode.renderToBytes();

        // Custom Shape - JVM-specific implementation
        // WARNING: For demonstration purposes only. My phone camera couldn't read it.
        QRCode customShapeQRCodeJVM = QRCode.ofCustomShape(new JVMTriangleShapeFunction()) // <- See Here
                .build("Hello, Triangles... from the JVM!");
        byte[] customShapePngDataJVM = customShapeQRCodeJVM.renderToBytes();

        // -----------------------
        // JVM-only code (saves the PNG Bytes to a file)
        Util.saveFile("examples/java/example01-squares.png", squarePngData);
        Util.saveFile("examples/java/example01-circles.png", circlePngData);
        Util.saveFile("examples/java/example01-rounded-squares.png", roundedSquarePngData);
        Util.saveFile("examples/java/example01-custom.png", customShapePngData);
        Util.saveFile("examples/java/example01-custom-jvm.png", customShapePngDataJVM);
    }
}
