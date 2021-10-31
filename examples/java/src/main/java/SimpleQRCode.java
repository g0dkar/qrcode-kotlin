import io.github.g0dkar.qrcode.QRCode;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class SimpleQRCode {
    public void createQRCode(String content) throws IOException {
        BufferedImage imageData = new QRCode(content).render();
        ImageIO.write(imageData, "PNG", new File("java-simple.png"));
    }

    public static void main(String[] args) throws Exception {
        new SimpleQRCode()
            .createQRCode("Hello, world!");
    }
}
