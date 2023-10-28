import qrcode.QRCode;

import java.io.FileOutputStream;
import java.io.IOException;

public class SimpleQRCode {

    public void createQRCode(String content) throws IOException {
        FileOutputStream fileOut = new FileOutputStream("java-simple.png");
        new QRCode(content).render().writeImage(fileOut);
    }

    public static void main(String[] args) throws Exception {
        new SimpleQRCode().createQRCode("Hello, world!");
    }
}
