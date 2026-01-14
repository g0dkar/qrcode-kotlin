package org.springframework.boot.logging.logback

import ch.qos.logback.classic.pattern.ExtendedThrowableProxyConverter
import ch.qos.logback.classic.spi.IThrowableProxy

/**
 * Manually rewritten in Kotlin from the same package/Class on Spring Boot v3.5.5, original Javadoc kept below:
 *
 * {@link ExtendedThrowableProxyConverter} that adds some additional whitespace around the
 * stack trace.
 *
 * @author Phillip Webb
 * @since 1.3.0
 */
class ExtendedWhitespaceThrowableProxyConverter : ExtendedThrowableProxyConverter() {
    override fun throwableProxyToString(tp: IThrowableProxy?): String =
        "${System.lineSeparator()}${super.throwableProxyToString(tp)}${System.lineSeparator()}"
}
