import io.github.g0dkar.qrcode.QRCode;
import io.github.g0dkar.qrcode.internals.QRCodeSquare;
import io.github.g0dkar.qrcode.internals.QRCodeSquareType;
import java.awt.Color;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * This code creates a QRCode where it is colored as a Gradient from top to bottom.
 * <p>
 * It uses the {@code java.awt} package classes on purpose to show how they can interop with the library :)
 *
 * @author Rafael Lins - g0dkar
 */
public class GradientColoredQRCode {

    private final boolean topToBottom;

    public GradientColoredQRCode() {
        this(false);
    }

    public GradientColoredQRCode(boolean topToBottom) {
        this.topToBottom = topToBottom;
    }

    private Double pct(int x, int y, int width, int height) {
        if (topToBottom) {
            return x / (double) height;
        } else {
            return y / (double) width;
        }
    }

    public void createQRCode(
        String content,
        Color startColor,
        Color endColor
    ) throws IOException {
        FileOutputStream fileOut = new FileOutputStream("java-gradient.png");
        QRCode qrCode = new QRCode(content);
        QRCodeSquare[][] rawData = qrCode.encode();
        int qrCodeSize = qrCode.computeImageSize(QRCode.DEFAULT_CELL_SIZE, QRCode.DEFAULT_MARGIN, rawData);

        new QRCode(content).renderShaded((cellData, canvas) -> {
                               if (cellData.getType() != QRCodeSquareType.MARGIN) {
                                   if (cellData.getDark()) {
                                       int x = cellData.absoluteX();
                                       int y = cellData.absoluteY();

                                       for (int currY = 0; currY < canvas.getHeight(); currY++) {
                                           double topBottomPct = pct(x, y + currY, qrCodeSize, qrCodeSize);
                                           double bottomTopPct = 1 - topBottomPct;

                                           Color lineColor = new Color(
                                               (int) (startColor.getRed() * bottomTopPct + endColor.getRed() * topBottomPct),
                                               (int) (startColor.getGreen() * bottomTopPct + endColor.getGreen() * topBottomPct),
                                               (int) (startColor.getBlue() * bottomTopPct + endColor.getBlue() * topBottomPct)
                                           );

                                           canvas.drawLine(0, currY, canvas.getWidth(), currY, lineColor.getRGB());
                                       }
                                   } else {
                                       canvas.fill(Color.white.getRGB());
                                   }
                               } else {
                                   canvas.fill(Color.white.getRGB());
                               }
                               return null;
                           })
                           .writeImage(fileOut);
    }

    public static void main(String[] args) throws Exception {
        Color startColor = new Color(0, 135, 220); // Light Blue
        Color endColor = new Color(0, 55, 120); // Dark Blue

        new GradientColoredQRCode()
            .createQRCode("Hello, world!", startColor, endColor);
    }
}
