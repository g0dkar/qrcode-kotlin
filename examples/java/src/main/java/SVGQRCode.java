import io.github.g0dkar.qrcode.QRCode;
import io.github.g0dkar.qrcode.internals.QRCodeSquare;
import io.github.g0dkar.qrcode.render.Colors;
import qrcode.QRCode;
import qrcode.internals.QRCodeSquare;

import java.io.FileOutputStream;
import java.io.IOException;

public class SVGQRCode {

    public void createQRCode(String content) throws IOException {
        FileOutputStream fileOut = new FileOutputStream("java-svg.svg");

        QRCode qrCode = new QRCode(content);
        qrCode.setQrCodeGraphicsFactory(new SVGQRCodeGraphics.Factory());
        QRCodeSquare[][] computedQRCode = qrCode.encode();

        int computedSize = qrCode.computeImageSize(QRCode.DEFAULT_CELL_SIZE, QRCode.DEFAULT_MARGIN, computedQRCode);

        SVGQRCodeGraphics svgGraphics = new SVGQRCodeGraphics(computedSize, computedSize);

        qrCode.renderShadedIntoGraphics(QRCode.DEFAULT_CELL_SIZE, QRCode.DEFAULT_MARGIN, computedQRCode, svgGraphics, (qrCodeSquare, qrCodeGraphics) -> {
            if (qrCodeSquare.getDark()) {
                svgGraphics.fillRect(qrCodeSquare.absoluteX(), qrCodeSquare.absoluteY(), qrCodeGraphics.getWidth(), qrCodeGraphics.getHeight(), Colors.BLACK);
            }

            return null;
        });

        svgGraphics.writeImage(fileOut);
    }

    public static void main(String[] args) throws Exception {
        new SVGQRCode()
                .createQRCode("Hello, SVG!");
    }
}
