package io.github.g0dkar.qrcode

import kotlin.test.fail

fun <T> assertDoesNotThrow(assertion: () -> T): T =
    try {
        assertion()
    } catch (t: Throwable) {
        fail("Expected to now throw an exception!", t)
    }
