package io.github.g0dkar.qrcode.internals

import io.github.g0dkar.qrcode.QRCodeDataType
import io.github.g0dkar.qrcode.QRCodeDataType.DEFAULT
import io.github.g0dkar.qrcode.QRCodeDataType.KANJI
import io.github.g0dkar.qrcode.QRCodeDataType.NUMBERS
import io.github.g0dkar.qrcode.QRCodeDataType.UPPER_ALPHA_NUM
import java.lang.Integer.parseInt
import java.lang.Integer.toHexString

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRData.java)
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
internal abstract class QRData(val dataType: QRCodeDataType, val data: String) {
    abstract fun length(): Int

    abstract fun write(buffer: BitBuffer)

    fun getLengthInBits(type: Int): Int =
        when (type) {
            in 1..9 -> {
                when (dataType) {
                    NUMBERS -> 10
                    UPPER_ALPHA_NUM -> 9
                    DEFAULT -> 8
                    KANJI -> 8
                }
            }
            in 1..26 -> {
                when (dataType) {
                    NUMBERS -> 12
                    UPPER_ALPHA_NUM -> 11
                    DEFAULT -> 16
                    KANJI -> 10
                }
            }
            in 1..40 -> {
                when (dataType) {
                    NUMBERS -> 14
                    UPPER_ALPHA_NUM -> 13
                    DEFAULT -> 16
                    KANJI -> 12
                }
            }
            else -> {
                throw IllegalArgumentException("'type' must be greater than 0 and cannot be greater than 40: $type")
            }
        }
}

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QR8BitByte.java)
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
internal class QR8BitByte(data: String) : QRData(DEFAULT, data) {
    private val dataBytes = data.toByteArray(Charsets.UTF_8)

    override fun write(buffer: BitBuffer) {
        for (i in dataBytes.indices) {
            buffer.put(dataBytes[i].toInt(), 8)
        }
    }

    override fun length(): Int =
        dataBytes.size
}

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRAlphaNum.java)
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
internal class QRAlphaNum(data: String) : QRData(UPPER_ALPHA_NUM, data) {
    override fun write(buffer: BitBuffer) {
        var i = 0
        val dataLength = data.length
        while (i + 1 < dataLength) {
            buffer.put(charCode(data[i]) * 45 + charCode(data[i + 1]), 11)
            i += 2
        }
        if (i < dataLength) {
            buffer.put(charCode(data[i]), 6)
        }
    }

    override fun length(): Int = data.length

    private fun charCode(c: Char): Int =
        when (c) {
            in '0'..'9' -> c - '0'
            in 'A'..'Z' -> c - 'A' + 10
            else -> {
                when (c) {
                    ' ' -> 36
                    '$' -> 37
                    '%' -> 38
                    '*' -> 39
                    '+' -> 40
                    '-' -> 41
                    '.' -> 42
                    '/' -> 43
                    ':' -> 44
                    else -> throw IllegalArgumentException("Illegal character: $c")
                }
            }
        }
}

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRKanji.java)
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
internal class QRKanji(data: String) : QRData(KANJI, data) {
    private val dataBytes = data.toByteArray(charset(QRUtil.jISEncoding))

    override fun write(buffer: BitBuffer) {
        var i = 0
        while (i + 1 < dataBytes.size) {
            var c = 0xff and dataBytes[i].toInt() shl 8 or (0xff and dataBytes[i + 1].toInt())

            c -= when (c) {
                in 0x8140..0x9FFC -> 0x8140
                in 0xE040..0xEBBF -> 0xC140
                else -> throw IllegalArgumentException("Illegal char at ${(i + 1)}/${toHexString(c)}")
            }

            c = (c ushr 8 and 0xff) * 0xC0 + (c and 0xff)
            buffer.put(c, 13)
            i += 2
        }

        require(i >= dataBytes.size) { "Illegal char at ${(i + 1)}" }
    }

    override fun length(): Int =
        dataBytes.size / 2
}

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRNumber.java)
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
internal class QRNumber(data: String) : QRData(NUMBERS, data) {
    override fun write(buffer: BitBuffer) {
        var i = 0
        val len = length()

        while (i + 2 < len) {
            val num = parseInt(data.substring(i, i + 3))
            buffer.put(num, 10)
            i += 3
        }

        if (i < len) {
            if (len - i == 1) {
                val num = parseInt(data.substring(i, i + 1))
                buffer.put(num, 4)
            } else if (len - i == 2) {
                val num = parseInt(data.substring(i, i + 2))
                buffer.put(num, 7)
            }
        }
    }

    override fun length(): Int = data.length
}
