package examples;

import examples.svg.SVGGraphicsFactory;
import qrcode.QRCode;

/**
 * Examples written for Java 17+
 */
public class Example03_SVG { // NOSONAR
    public static void main(String[] args) {
        // All supported platforms
        // -----------------------
        // Squares (default)
        QRCode squareQRCode = QRCode.ofSquares()
                .withGraphicsFactory(new SVGGraphicsFactory()) // <- See Here
                .build("Hello, Squares!");
        byte[] squarePngData = squareQRCode.render();

        // Circles
        QRCode circleQRCode = QRCode.ofCircles()
                .withGraphicsFactory(new SVGGraphicsFactory()) // <- See Here
                .build("Hello, Circles!");
        byte[] circlePngData = circleQRCode.render();

        // Rounded Squares
        QRCode roundedSquareQRCode = QRCode.ofRoundedSquares()
                .withGraphicsFactory(new SVGGraphicsFactory()) // <- See Here
                .build("Hello, Rounded Squares!");
        byte[] roundedSquarePngData = roundedSquareQRCode.render();

        // -----------------------
        // JVM-only code (saves the SVG to a file)
        Util.saveFile("examples/java/example03-squares.svg", squarePngData);
        Util.saveFile("examples/java/example03-circles.svg", circlePngData);
        Util.saveFile("examples/java/example03-rounded-squares.svg", roundedSquarePngData);
    }
}
