package org.springframework.boot.logging.logback

import ch.qos.logback.classic.pattern.ClassicConverter
import ch.qos.logback.classic.spi.ILoggingEvent
import org.springframework.boot.logging.LoggingSystemProperty

/**
 * Manually rewritten in Kotlin from the same package/Class on Spring Boot v3.5.5, original Javadoc kept below:
 *
 * Logback {@link ClassicConverter} to convert the
 * {@link LoggingSystemProperty#APPLICATION_NAME APPLICATION_NAME} into a value suitable
 * for logging. Similar to Logback's {@link PropertyConverter} but a non-existent property
 * is logged as an empty string rather than {@code null}.
 *
 * @author Andy Wilkinson
 * @author Phillip Webb
 * @since 3.2.4
 */
class ApplicationNameConverter : ClassicConverter() {
    companion object {
        private val ENVIRONMENT_VARIABLE_NAME = LoggingSystemProperty.APPLICATION_NAME.environmentVariableName
    }

    override fun convert(event: ILoggingEvent): String {
        val applicationName = event.loggerContextVO.getPropertyMap()[ENVIRONMENT_VARIABLE_NAME]
        return applicationName ?: System.getProperty(ENVIRONMENT_VARIABLE_NAME) ?: ""
    }
}
