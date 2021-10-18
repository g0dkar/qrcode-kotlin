package min.immo.qrcode

/**
 * Rewritten in Kotlin :)
 *
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/BitBuffer.java)
 *
 * @author Kazuhiko Arase
 * @author Rafael Lins
 */
internal class BitBuffer {
    var buffer: IntArray
        private set
    var lengthInBits: Int
        private set
    private val increments = 32

    private operator fun get(index: Int): Boolean =
        buffer[index / 8] ushr 7 - index % 8 and 1 == 1

    fun put(num: Int, length: Int) {
        for (i in 0 until length) {
            put(num ushr length - i - 1 and 1 == 1)
        }
    }

    fun put(bit: Boolean) {
        if (lengthInBits == buffer.size * 8) {
            buffer = buffer.copyOf(buffer.size + increments)
        }
        if (bit) {
            buffer[lengthInBits / 8] = buffer[lengthInBits / 8] or (0x80 ushr lengthInBits % 8)
        }
        lengthInBits++
    }

    init {
        buffer = IntArray(increments)
        lengthInBits = 0
    }
}
