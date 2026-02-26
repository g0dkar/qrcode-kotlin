package org.springframework.boot.logging.logback

import ch.qos.logback.classic.Level
import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.pattern.CompositeConverter
import org.springframework.boot.ansi.AnsiColor
import org.springframework.boot.ansi.AnsiElement
import org.springframework.boot.ansi.AnsiStyle


/**
 * Manually rewritten in Kotlin from the same package/Class on Spring Boot v3.5.5, original Javadoc kept below:
 *
 * Logback {@link CompositeConverter} to color output using the {@link AnsiOutput} class.
 * A single 'color' option can be provided to the converter, or if not specified color
 * will be picked based on the logging level.
 *
 * @author Phillip Webb
 * @since 1.0.0
 */
class ColorConverter : CompositeConverter<ILoggingEvent>() {
    companion object {
        private const val ENCODE_JOIN = ";"
        private const val ENCODE_START = "\u001B["
        private const val ENCODE_END = "m"
        private val RESET = "0;${AnsiColor.DEFAULT}"
    }

    private val elements: Map<String, AnsiElement> = mutableMapOf<String, AnsiElement>()
        .apply {
            AnsiColor.entries.forEach {
                if (it != AnsiColor.DEFAULT) {
                    this[it.name.lowercase()] = it
                }
            }
            this["faint"] = AnsiStyle.FAINT
        }

    private val levels = mapOf(
        Level.ERROR_INTEGER to AnsiColor.RED,
        Level.WARN_INTEGER to AnsiColor.YELLOW,
    )

    override fun transform(event: ILoggingEvent?, input: String?): String {
        val color = elements[firstOption] ?: event?.let { levels[it.level.toInteger()] } ?: AnsiColor.GREEN
        return toAnsiString(color, input)
    }

    private fun toAnsiString(vararg elements: Any?): String {
        val builder = StringBuilder()
        var writingAnsi = false
        var containsEncoding = false

        for (element in elements) {
            if (element is AnsiElement) {
                containsEncoding = true

                if (!writingAnsi) {
                    builder.append(ENCODE_START)
                    writingAnsi = true
                } else {
                    builder.append(ENCODE_JOIN)
                }
            } else {
                if (writingAnsi) {
                    builder.append(ENCODE_END)
                    writingAnsi = false
                }
            }

            builder.append(element)
        }

        if (containsEncoding) {
            if (writingAnsi) {
                builder.append(ENCODE_JOIN)
            } else {
                builder.append(ENCODE_START)
            }

            builder.append(RESET)
            builder.append(ENCODE_END)
        }

        return builder.toString()
    }
}
