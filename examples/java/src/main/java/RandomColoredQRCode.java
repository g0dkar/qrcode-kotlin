import io.github.g0dkar.qrcode.QRCode;
import io.github.g0dkar.qrcode.internals.QRCodeSquareType;
import java.awt.Color;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.EnumMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

/**
 * This code creates a QRCode where all normal squares are a random color each. The probes are all the same color.
 * <p>
 * It uses the {@code java.awt} package classes on purpose to show how they can interop with the library :)
 *
 * @author Rafael Lins - g0dkar
 */
public class RandomColoredQRCode {

    public void createQRCode(
        String content,
        List<Color> colors,
        Color backgroundColor
    ) throws IOException {
        Random rand = new Random();
        FileOutputStream fileOut = new FileOutputStream("java-random-colored.png");
        Map<QRCodeSquareType, Color> colorMap = new EnumMap<>(QRCodeSquareType.class);

        new QRCode(content).renderShaded((cellData, canvas) -> {
                               if (cellData.getDark()) {
                                   if (cellData.getType() != QRCodeSquareType.DEFAULT) {
                                       colorMap.putIfAbsent(cellData.getType(), colors.get(rand.nextInt(colors.size())));
                                   }

                                   Color cellColor = colorMap.getOrDefault(cellData.getType(), colors.get(rand.nextInt(colors.size())));
                                   canvas.fill(cellColor.getRGB());
                               } else {
                                   canvas.fill(backgroundColor.getRGB());
                               }
                           })
                           .writeImage(fileOut);
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
