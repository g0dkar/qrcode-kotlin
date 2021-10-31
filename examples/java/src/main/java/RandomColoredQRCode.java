import io.github.g0dkar.qrcode.QRCode;
import java.awt.Color;
import java.awt.Point;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Random;
import javax.imageio.ImageIO;

public class RandomColoredQRCode {

    public void createQRCode(
        String content,
        List<Color> colors,
        Color backgroundColor
    ) throws IOException {
        HashMap<Point, Color> colorMap = new HashMap<>();
        BufferedImage imageData = new QRCode(content).renderShaded(pixelData -> {
            if (!pixelData.isMargin()) {
                Point point = new Point(pixelData.getRow(), pixelData.getCol());

                if (pixelData.isDark()) {
                    return colorMap.computeIfAbsent(point, p -> colors.get(new Random().nextInt(colors.size())));
                }
                else {
                    return backgroundColor;
                }
            }
            else {
                return backgroundColor;
            }
        });
        ImageIO.write(imageData, "PNG", new File("java-random-colored.png"));
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

        new RandomColoredQRCode()
            .createQRCode("Hello, world!", colors, Color.white);
    }
}
