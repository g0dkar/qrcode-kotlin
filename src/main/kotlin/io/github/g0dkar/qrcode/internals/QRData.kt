package io.github.g0dkar.qrcode.internals

import io.github.g0dkar.qrcode.QRCodeDataType
import java.lang.Integer.parseInt
import java.lang.Integer.toHexString

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRData.java)
 *
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
internal abstract class QRData(val dataType: QRCodeDataType, val data: String) {
    abstract fun length(): Int

    abstract fun write(buffer: BitBuffer)

    fun getLengthInBits(type: Int): Int =
        if (type in 1..9) {
            when (dataType) {
                QRCodeDataType.NUMBERS -> 10
                QRCodeDataType.ALPHA_NUM -> 9
                QRCodeDataType.BYTES -> 8
                QRCodeDataType.KANJI -> 8
            }
        } else if (type < 27) {
            when (dataType) {
                QRCodeDataType.NUMBERS -> 12
                QRCodeDataType.ALPHA_NUM -> 11
                QRCodeDataType.BYTES -> 16
                QRCodeDataType.KANJI -> 10
            }
        } else if (type < 41) {
            when (dataType) {
                QRCodeDataType.NUMBERS -> 14
                QRCodeDataType.ALPHA_NUM -> 13
                QRCodeDataType.BYTES -> 16
                QRCodeDataType.KANJI -> 12
            }
        } else {
            throw IllegalArgumentException("'type' must be greater than 0 and cannot be greater than 40: $type")
        }
}

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QR8BitByte.java)
 *
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
internal class QR8BitByte(data: String) : QRData(QRCodeDataType.BYTES, data) {
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
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
internal class QRAlphaNum(data: String) : QRData(QRCodeDataType.ALPHA_NUM, data) {
    override fun write(buffer: BitBuffer) {
        val c = data.toCharArray()
        var i = 0
        while (i + 1 < c.size) {
            buffer.put(c[i].code * 45 + c[i + 1].code, 11)
            i += 2
        }
        if (i < c.size) {
            buffer.put(c[i].code, 6)
        }
    }

    override fun length(): Int = data.length
}

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRKanji.java)
 *
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
internal class QRKanji(data: String) : QRData(QRCodeDataType.KANJI, data) {
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
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
internal class QRNumber(data: String) : QRData(QRCodeDataType.NUMBERS, data) {
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
