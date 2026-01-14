package org.springframework.boot.ansi

/**
 * Manually rewritten in Kotlin from the same package/Class on Spring Boot v3.5.5, original Javadoc kept below:
 *
 * {@link AnsiElement Ansi} styles.
 *
 * @author Phillip Webb
 * @since 1.3.0
 */
enum class AnsiStyle(val code: String) : AnsiElement {
    NORMAL("0"),
    BOLD("1"),
    FAINT("2"),
    ITALIC("3"),
    UNDERLINE("4");

    override fun toString() = code
}
