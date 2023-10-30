//import qrcode.QRCode;
//
//import java.awt.*;
//import java.io.FileOutputStream;
//import java.io.IOException;
//import java.util.Arrays;
//import java.util.List;
//import java.util.Random;
//
//import static java.util.Optional.ofNullable;
//
//public class ColoredQRCode {
//
//    private static final String DEFAULT_FILENAME = "java-colored.png";
//
//    public void createQRCode(
//            String content,
//            Color squareColor,
//            Color backgroundColor,
//            String filename
//    ) throws IOException {
//        String destination = ofNullable(filename).orElse(DEFAULT_FILENAME);
//        FileOutputStream fileOut = new FileOutputStream(destination);
//        QRCode qrCode = new QRCode(content);
//
//        qrCode.render(
//                        QRCode.DEFAULT_CELL_SIZE,
//                        QRCode.DEFAULT_MARGIN,
//                        backgroundColor.getRGB(),
//                        squareColor.getRGB()
//                )
//                .writeImage(fileOut);
//    }
//
//    public static void main(String[] args) throws Exception {
//        List<Color> colors = Arrays.asList(
//                Color.gray,
//                Color.darkGray,
//                Color.red,
//                Color.pink,
//                Color.orange,
//                Color.yellow,
//                Color.green,
//                Color.magenta,
//                Color.cyan,
//                Color.blue
//        );
//
//        Color randomColor = colors.get(new Random().nextInt(colors.size()));
//
//        new ColoredQRCode()
//                .createQRCode("Hello, world!", randomColor, Color.white, null);
//    }
//}
