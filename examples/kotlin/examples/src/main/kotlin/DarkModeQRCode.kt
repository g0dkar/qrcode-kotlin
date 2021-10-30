import java.awt.Color

fun main() {
    val darkColor = Color(13, 17, 23)
    val lightColor = Color(139, 148, 158)

    // Dark Mode 01: Dark foreground with Bright background
    ColoredQRCode()
        .createQRCode("Hello, world!", darkColor, lightColor, "qrcode-darkmode.png")

    // Dark Mode 02: Bright foreground with Dark background
    ColoredQRCode()
        .createQRCode("Hello, world!", lightColor, darkColor, "qrcode-darkmode-reversed.png")
}
