import io.github.g0dkar.qrcode.QRCode;
import io.github.g0dkar.qrcode.internals.QRCodeSquareType;
import java.awt.Color;
import java.io.FileOutputStream;
import java.io.IOException;

public class RoundQRCode {

    public void createQRCode(String content, int radius) throws IOException {
        FileOutputStream fileOut = new FileOutputStream("java-round.png");
        new QRCode(content).renderShaded((cellData, canvas) -> {
                               canvas.fill(Color.WHITE.getRGB());
                               if (cellData.getDark()) {
                                   if (cellData.getType() == QRCodeSquareType.POSITION_PROBE) {
                                       canvas.fill(Color.BLACK.getRGB());
                                   } else {
                                       canvas.fillRoundRect(0, 0, canvas.getWidth(), canvas.getHeight(), radius,
                                           Color.BLACK.getRGB());
                                   }
                               }
                           })
                           .writeImage(fileOut);
    }

    public static void main(String[] args) throws Exception {
        new RoundQRCode()
            .createQRCode("Hello, world!", 15);
    }
}
