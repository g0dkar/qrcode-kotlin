import io.github.g0dkar.qrcode.QRCode
import picocli.CommandLine.Command
import util.QRCodeGeneratorCommand
import java.awt.image.BufferedImage

@Command(
    name = "simple",
    version = ["1.0.1 (Kotlin)"],
    mixinStandardHelpOptions = true,
    description = ["Create a QRCode for the input String."]
)
internal class SimpleQRCode : QRCodeGeneratorCommand() {
    override fun createQRCode(content: String): BufferedImage =
        QRCode(content, ecl).render(cellSize, margin)
}
