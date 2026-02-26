package org.springframework.boot.ansi

/**
 * An ANSI encodable element.
 *
 * @author Phillip Webb
 * @since 1.0.0
 */
interface AnsiElement {
    override fun toString(): String
}
