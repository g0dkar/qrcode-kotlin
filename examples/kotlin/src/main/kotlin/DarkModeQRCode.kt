import qrcode.color.Colors

fun main() {
    val darkColor = Colors.css("#0D1117")
    val lightColor = Colors.css("#8B949E")

    // Dark Mode 01: Dark foreground with Bright background
    ColoredQRCode()
        .createQRCode("Hello, world!", darkColor, lightColor, "kotlin-darkmode.png")

    // Dark Mode 02: Bright foreground with Dark background
    ColoredQRCode()
        .createQRCode("Hello, world!", lightColor, darkColor, "kotlin-darkmode-reversed.png")
}
