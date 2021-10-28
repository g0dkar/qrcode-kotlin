import picocli.CommandLine
import picocli.CommandLine.Command
import picocli.CommandLine.Model.CommandSpec
import picocli.CommandLine.ParameterException
import picocli.CommandLine.Spec
import util.PrintFormats
import kotlin.system.exitProcess

@Command(
    name = "qrcode",
    version = ["1.0.1 (Kotlin)"],
    mixinStandardHelpOptions = true,
    description = [
        "@|bold QRCode-Kotlin Library Examples|@ @|underline v1.0.1|@ (Kotlin)",
        "More Info: https://github.com/g0dkar/qrcode-kotlin"
    ],
    subcommands = [
        SimpleQRCode::class,
        PrintFormats::class
    ]
)
internal class QRCodeCommand : Runnable {
    @Spec
    var spec: CommandSpec? = null

    override fun run() {
        throw ParameterException(spec?.commandLine(), "Please, specify a command (example).")
    }
}

fun main(args: Array<String>): Unit = exitProcess(CommandLine(QRCodeCommand()).execute(*args))
