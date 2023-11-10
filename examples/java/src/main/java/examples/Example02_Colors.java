package examples;

import qrcode.QRCode;
import qrcode.color.Colors;

/**
 * Examples written for Java 17+
 */
public class Example02_Colors { // NOSONAR
    public static void main(String[] args) {
        // All supported platforms
        // -----------------------
        // Squares (default)
        QRCode colorQRCode = QRCode.ofSquares()
                .withColor(Colors.ORANGE) // <- See Here
                .build("Orange");
        byte[] colorPngData = colorQRCode.renderToBytes();

        // Circles
        QRCode darkModeQRCode = QRCode.ofSquares()
                .withColor(Colors.css("#43454a"))           // <- See Here
                .withBackgroundColor(Colors.css("#1e1f22")) // <- See Here
                .build("Dark Mode QRCode");
        byte[] darkModePngData = darkModeQRCode.renderToBytes();

        // Rounded Squares
        QRCode gradientQRCode = QRCode.ofSquares()
                .withGradientColor(Colors.BISQUE, Colors.BLUE) // <- See Here
                .build("Weird gradient colors, but I think it's nice");
        byte[] gradientPngData = gradientQRCode.renderToBytes();

        // Custom Shape
        // WARNING: For demonstration purposes only. My phone camera couldn't read it.
        QRCode transparentQRCode = QRCode.ofSquares()
                .withBackgroundColor(Colors.TRANSPARENT)
                .build("You can put this on top of pretty much anything :)");
        byte[] transparentPngData = transparentQRCode.renderToBytes();

        // -----------------------
        // JVM-only code (saves the PNG Bytes to a file)
        Util.saveFile("examples/java/example02-color.png", colorPngData);
        Util.saveFile("examples/java/example02-dark-mode.png", darkModePngData);
        Util.saveFile("examples/java/example02-gradient.png", gradientPngData);
        Util.saveFile("examples/java/example02-transparent.png", transparentPngData);
    }
}
