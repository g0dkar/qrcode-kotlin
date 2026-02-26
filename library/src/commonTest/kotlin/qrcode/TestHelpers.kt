package qrcode

import kotlin.random.Random
import kotlin.test.fail
import kotlin.time.Clock

/**
 * Asserts that the given code does NOT throw any exception
 *
 * @return Result of the [action].
 */
fun <T> assertDoesNotThrow(action: () -> T): T =
    try {
        action()
    } catch (t: Throwable) {
        fail(message = "Unexpected exception thrown: $t", cause = t)
    }

/**
 * Assert that the given code do throw an exception of a given type.
 *
 * @return The thrown exception
 */
inline fun <reified T : Throwable> assertThrows(action: () -> Unit): T {
    try {
        action()
        fail(message = "Exception was expected but no exception was thrown")
    } catch (t: Throwable) {
        if (t is T) {
            return t
        } else {
            fail(message = "Exception thrown is not of the expected type: $t", cause = t)
        }
    }
}

/**
 * Returns the current system time in milliseconds.
 */
fun currentTimeMillis(): Long = Clock.System.now().toEpochMilliseconds()

/**
 * Returns a [Random] instance with the given seed (default: current millisecond)
 *
 * @see currentTimeMillis
 */
fun random(seed: Long = currentTimeMillis()) = Random(seed)

/**
 * Returns a String of [digits] hexadecimal digits. Default [seed] is the current millisecond.
 *
 * @see currentTimeMillis
 */
fun randomHexDigits(digits: Int, seed: Long = currentTimeMillis()) =
    random(seed).let { rnd ->
        List(digits) {
            rnd.nextInt(16).toString(16)
        }
    }.joinToString("")

/**
 * Randomly returns one of the parameters passed to the function.
 */
fun <T> randomOneOf(vararg options: T): T =
    options[Random.nextInt(0, options.size)]

/**
 * Generates a random [Int] (defaults to "from 0 to [Int.MAX_VALUE]")
 */
fun randomInt(from: Int = 0, until: Int = Int.MAX_VALUE, seed: Long = currentTimeMillis()) =
    random(seed).nextInt(from, until)

fun Int.toColorHex() = "0x${(0xFFFFFFFF and toLong()).toString(16).padStart(8, '0')}"
