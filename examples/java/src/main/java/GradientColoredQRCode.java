import io.github.g0dkar.qrcode.QRCode;
import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

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
        BufferedImage imageData = new QRCode(content).renderShaded((image, x, y, cellData) -> {
            if (cellData != null) {
                if (Boolean.TRUE.equals(cellData.getFirst())) {
                    double topBottomPct = pct(x, y, image.getWidth(), image.getHeight());
                    double bottomTopPct = 1 - topBottomPct;
                    return new Color(
                        (int) (startColor.getRed() * topBottomPct + endColor.getRed() * bottomTopPct),
                        (int) (startColor.getGreen() * topBottomPct + endColor.getGreen() * bottomTopPct),
                        (int) (startColor.getBlue() * topBottomPct + endColor.getBlue() * bottomTopPct)
                    ).getRGB();
                } else {
                    return Color.white.getRGB();
                }
            } else {
                return Color.white.getRGB();
            }
        });
        ImageIO.write(imageData, "PNG", new File("java-gradient.png"));
    }

    public static void main(String[] args) throws Exception {
        Color startColor = new Color(0, 135, 220); // Light Blue
        Color endColor = new Color(0, 55, 120); // Dark Blue

        new GradientColoredQRCode()
            .createQRCode("Hello, world!", startColor, endColor);
    }
}
