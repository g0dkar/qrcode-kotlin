package util

import io.github.g0dkar.qrcode.ErrorCorrectionLevel
import picocli.CommandLine.Help.Visibility.ALWAYS
import picocli.CommandLine.Help.Visibility.NEVER
import picocli.CommandLine.Option
import picocli.CommandLine.Parameters
import java.awt.image.BufferedImage
import java.io.ByteArrayOutputStream
import java.io.File
import java.util.Base64
import java.util.concurrent.Callable
import javax.imageio.ImageIO

/**
 * Base class for Commands that Generate QRCodes. It abstracts some processing and logic over parameters and options.
 *
 * @author Rafael Lins
 */
internal abstract class QRCodeGeneratorCommand : Callable<Int> {
    @Option(
        names = ["-r", "--read-file"],
        description = ["If present, '<data>' is a file which the contents will be encoded."],
    )
    protected var readFile: Boolean = false

    @Option(
        names = ["-v", "--verbose"],
        description = ["Print information about what the program is doing?"],
    )
    protected var verbose: Boolean = false

    @Option(
        names = ["-s", "--size"],
        paramLabel = "SIZE",
        arity = "1",
        description = ["Size of each cell (square), in pixels."],
        defaultValue = "25",
        showDefaultValue = ALWAYS,
    )
    protected var cellSize: Int = 25

    @Option(
        names = ["-m", "--margin"],
        paramLabel = "MARGIN",
        arity = "1",
        description = ["Margin around the QRCode, in pixels."],
        defaultValue = "0",
        showDefaultValue = ALWAYS,
    )
    protected var margin: Int = 0

    @Option(
        names = ["-q", "--quality"],
        paramLabel = "LMQH",
        arity = "1",
        description = [
            "Error Correction Level (aka \"Quality\").",
            "  Possible values: \${COMPLETION-CANDIDATES}"
        ],
        defaultValue = "M",
        showDefaultValue = ALWAYS,
    )
    protected var ecl: ErrorCorrectionLevel = ErrorCorrectionLevel.M

    @Option(
        names = ["-o", "--output"],
        paramLabel = "OUTPUT",
        arity = "1",
        description = ["What to output as a result. Call 'qrcode formats' to see all the available formats."],
        defaultValue = "png",
        showDefaultValue = ALWAYS,
    )
    protected var output: String = "png"

    @Option(
        names = ["-f", "--file"],
        paramLabel = "FILE",
        arity = "0..1",
        description = [
            "File to write the QRCode to.",
            "[!] Appropriate extension added automatically.",
            "[!] If omitted, a Base64 string will be printed.",
            "  Default: <print the Base64 string>"
        ],
        defaultValue = "",
        fallbackValue = "",
        showDefaultValue = NEVER,
    )
    protected var file: String = ""

    @Parameters(
        arity = "1",
        paramLabel = "<data>",
        description = ["Data/Content to be encoded as a QRCode."]
    )
    protected lateinit var data: String

    /**
     * Prints something, if [verbose] is `true`.
     */
    private fun print(vararg stuff: String) {
        if (verbose) {
            println("[QRCode] ${stuff.joinToString(" ")}")
        }
    }

    /**
     * Counts how long something takes to execute, printing it afterwards.
     */
    private fun <T> timed(op: String, func: () -> T): T {
        val startTime = System.currentTimeMillis()

        return try {
            print("$op > Starting...")
            func()
        } finally {
            val elapsedTime = System.currentTimeMillis() - startTime
            print("$op > Done in ${elapsedTime.toDouble() / 1000.0}s")
        }
    }

    private fun printParams() {
        print("Parameters:")
        print("- readFile = $readFile")
        print("- cellSize = $cellSize")
        print("- margin = $margin")
        print("- quality = $ecl")
        print("- output = $output")
        print("- file = $file")
        print("- data = $data")
    }

    private fun printImageAsBase64(bufferedImage: BufferedImage, format: String) {
        println(
            ByteArrayOutputStream()
                .also { ImageIO.write(bufferedImage, format, it) }
                .toByteArray()
                .let { bytes -> Base64.getUrlEncoder().encode(bytes).joinToString("") { "%02x".format(it) } }
        )
    }

    override fun call(): Int =
        try {
            val startTime = System.currentTimeMillis()
            printParams()

            val content = if (readFile) {
                val dataFile = File(data)
                timed("Reading contents of ${dataFile.canonicalPath}") { dataFile.readText() }
            } else {
                data
            }

            val result = timed("Creating QRCode") { createQRCode(content) }

            if (file.isBlank()) {
                printImageAsBase64(result, output.lowercase())
            } else {
                ImageIO.write(result, output.lowercase(), File("$file.${output.lowercase()}"))
            }

            val elapsedTime = System.currentTimeMillis() - startTime
            print("Done in ${elapsedTime.toDouble() / 1000.0}s")
            0
        } catch (e: Exception) {
            System.err.println("Error while generating QRCode:")
            e.printStackTrace(System.err)
            -1
        }

    abstract fun createQRCode(content: String): BufferedImage
}
