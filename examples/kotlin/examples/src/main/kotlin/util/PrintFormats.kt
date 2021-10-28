package util

import picocli.CommandLine.Command
import javax.imageio.ImageIO

@Command(
    name = "formats",
    version = ["1.0.1 (Kotlin)"],
    mixinStandardHelpOptions = true,
    description = ["Prints all the available Image Writers."]
)
internal class PrintFormats : Runnable {
    override fun run() {
        println("Supported formats: ${ImageIO.getWriterFormatNames().filter { it.lowercase() == it }.toSortedSet().joinToString()}")
        println("Default format: png")
    }
}
