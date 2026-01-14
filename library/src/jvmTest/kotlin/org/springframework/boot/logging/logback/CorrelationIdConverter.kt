package org.springframework.boot.logging.logback

import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.pattern.DynamicConverter


/**
 * Manually rewritten in Kotlin from the same package/Class on Spring Boot v3.5.5, original Javadoc kept below:
 *
 * Logback {@link DynamicConverter} to convert a {@link CorrelationIdFormatter} pattern
 * into formatted output using data from the {@link ILoggingEvent#getMDCPropertyMap() MDC}
 * and {@link Environment}.
 *
 * @author Phillip Webb
 * @since 3.2.0
 */
class CorrelationIdConverter : DynamicConverter<ILoggingEvent>() {
    private var formatter: CorrelationIdFormatter? = null

    override fun start() {
        formatter = CorrelationIdFormatter(optionList)
        super.start()
    }

    override fun stop() {
        formatter = null
        super.stop()
    }

    override fun convert(event: ILoggingEvent): String =
        formatter?.format(event.mdcPropertyMap::get) ?: ""

    private data class Part(val name: String, val length: Int) {
        companion object {
            private val REGEX = Regex("^(.+?)\\((\\d+)\\)$")

            fun of(spec: String?): Part? {
                if (spec.isNullOrBlank()) return null
                val match = REGEX.matchEntire(spec) ?: return null
                return Part(match.groupValues[1], match.groupValues[2].toInt())
            }
        }

        fun blank() = " ".repeat(length)
        fun resolve(fn: (String?) -> String?) =
            fn(name)?.let {
                val padding = length - it.length
                if (padding > 0) {
                    "$it${" ".repeat(padding)}"
                } else {
                    it
                }
            } ?: blank()
    }

    private class CorrelationIdFormatter(spec: List<String?>) {
        val parts: List<Part> = spec.mapNotNull { Part.of(it) }

        fun format(resolver: (String?) -> String?): String =
            parts.joinToString(prefix = "[", separator = "-", postfix = "]") { it.resolve(resolver) }
    }
}
