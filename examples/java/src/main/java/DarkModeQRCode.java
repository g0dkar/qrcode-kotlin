import java.awt.Color;

public class DarkModeQRCode {

    public static void main(String[] args) throws Exception {
        Color darkColor = new Color(13, 17, 23);
        Color lightColor = new Color(139, 148, 158);

        // Dark Mode 01: Dark foreground with Bright background
        new ColoredQRCode()
            .createQRCode("Hello, world!", darkColor, lightColor, "java-darkmode.png");

        // Dark Mode 02: Bright foreground with Dark background
        new ColoredQRCode()
            .createQRCode("Hello, world!", lightColor, darkColor, "java-darkmode-reversed.png");
    }
}
