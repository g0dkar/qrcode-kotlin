import static java.util.Optional.ofNullable;

import io.github.g0dkar.qrcode.QRCode;
import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import javax.imageio.ImageIO;

public class ColoredQRCode {

    private static final String DEFAULT_FILENAME = "java-colored.png";

    public void createQRCode(
        String content,
        Color squareColor,
        Color backgroundColor,
        String filename
    ) throws IOException {
        String destination = ofNullable(filename).orElse(DEFAULT_FILENAME);
        QRCode qrCode = new QRCode(content);
        BufferedImage imageData = qrCode.render(25, 0, qrCode.encode(), backgroundColor, squareColor);
        ImageIO.write(imageData, "PNG", new File(destination));
    }

    public static void main(String[] args) throws Exception {
        List<Color> colors = Arrays.asList(
            Color.gray,
            Color.darkGray,
            Color.red,
            Color.pink,
            Color.orange,
            Color.yellow,
            Color.green,
            Color.magenta,
            Color.cyan,
            Color.blue
        );

        Color randomColor = colors.get(new Random().nextInt(colors.size()));

        new ColoredQRCode()
            .createQRCode("Hello, world!", randomColor, Color.white, null);
    }
}
