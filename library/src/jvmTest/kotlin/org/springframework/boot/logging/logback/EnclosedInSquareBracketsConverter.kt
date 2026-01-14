package org.springframework.boot.logging.logback

import ch.qos.logback.classic.spi.ILoggingEvent
import ch.qos.logback.core.pattern.CompositeConverter

/**
 * Manually rewritten in Kotlin from the same package/Class on Spring Boot v3.5.5, original Javadoc kept below:
 *
 * Logback {@link CompositeConverter} used to help format optional values that should be
 * shown enclosed in square brackets.
 *
 * @author Phillip Webb
 * @since 3.4.0
 */
class EnclosedInSquareBracketsConverter : CompositeConverter<ILoggingEvent>() {
    private fun String?.hasLength() = !isNullOrEmpty()

    override fun transform(event: ILoggingEvent, input: String?): String =
        when (input.hasLength()) {
            true -> "[$input] "
            else -> resolveFromFirstOption(event)
        }

    private fun resolveFromFirstOption(event: ILoggingEvent): String =
        firstOption?.let { event.loggerContextVO?.propertyMap?.get(it) } ?: ""
}
