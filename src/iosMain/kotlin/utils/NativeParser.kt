package utils

import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.usePinned
import platform.Foundation.NSData
import platform.posix.memcpy

/**
 * Converts a [NSData] object to a [ByteArray].
 * This function is useful when working in Kotlin/Native where data may be represented as [ByteArray]
 */
@OptIn(ExperimentalForeignApi::class)
internal fun NSData.toByteArray(): ByteArray {
    val arrayLen = length.toInt().coerceAtLeast(0)

    return ByteArray(arrayLen).apply {
        if (arrayLen > 0) {
            this.usePinned { memcpy(it.addressOf(0), bytes, length) }
        }
    }
}
