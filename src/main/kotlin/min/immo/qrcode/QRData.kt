package min.immo.qrcode

import java.io.UnsupportedEncodingException
import java.lang.Integer.parseInt

/**
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRData.java)
 *
 * @author Kazuhiko Arase
 */
internal abstract class QRData(val mode: Mode, val data: String) {
    abstract fun length(): Int

    abstract fun write(buffer: BitBuffer)

    fun getLengthInBits(type: Int): Int =
        if (type in 1..9) {
            when (mode) {
                Mode.MODE_NUMBER -> 10
                Mode.MODE_ALPHA_NUM -> 9
                Mode.MODE_8BIT_BYTE -> 8
                Mode.MODE_KANJI -> 8
            }
        } else if (type < 27) {
            when (mode) {
                Mode.MODE_NUMBER -> 12
                Mode.MODE_ALPHA_NUM -> 11
                Mode.MODE_8BIT_BYTE -> 16
                Mode.MODE_KANJI -> 10
            }
        } else if (type < 41) {
            when (mode) {
                Mode.MODE_NUMBER -> 14
                Mode.MODE_ALPHA_NUM -> 13
                Mode.MODE_8BIT_BYTE -> 16
                Mode.MODE_KANJI -> 12
            }
        } else {
            throw IllegalArgumentException("type:$type")
        }
}

/**
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QR8BitByte.java)
 *
 * @author Kazuhiko Arase
 */
internal class QR8BitByte(data: String) : QRData(Mode.MODE_8BIT_BYTE, data) {
    override fun write(buffer: BitBuffer) {
        try {
            val data = data.toByteArray(charset(QRUtil.jISEncoding))
            for (i in data.indices) {
                buffer.put(data[i].toInt(), 8)
            }
        } catch (e: UnsupportedEncodingException) {
            throw RuntimeException(e.message)
        }
    }

    override fun length(): Int =
        try {
            data.toByteArray(charset(QRUtil.jISEncoding)).size
        } catch (e: UnsupportedEncodingException) {
            throw RuntimeException(e.message)
        }
}

/**
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRAlphaNum.java)
 *
 * @author Kazuhiko Arase
 */
internal class QRAlphaNum(data: String) : QRData(Mode.MODE_ALPHA_NUM, data) {
    override fun write(buffer: BitBuffer) {
        val c = data.toCharArray()
        var i = 0
        while (i + 1 < c.size) {
            buffer.put(getCode(c[i]) * 45 + getCode(c[i + 1]), 11)
            i += 2
        }
        if (i < c.size) {
            buffer.put(getCode(c[i]), 6)
        }
    }

    override fun length(): Int = data.length

    private fun getCode(c: Char): Int =
        when (c) {
            in '0'..'9' -> {
                c - '0'
            }
            in 'A'..'Z' -> {
                c - 'A' + 10
            }
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
                    else -> throw java.lang.IllegalArgumentException("illegal char :$c")
                }
            }
        }
}

/**
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRKanji.java)
 *
 * @author Kazuhiko Arase
 */
internal class QRKanji(data: String) : QRData(Mode.MODE_KANJI, data) {
    override fun write(buffer: BitBuffer) {
        try {
            val data = data.toByteArray(charset(QRUtil.jISEncoding))
            var i = 0
            while (i + 1 < data.size) {
                var c = 0xff and data[i].toInt() shl 8 or (0xff and data[i + 1].toInt())
                c -= when (c) {
                    in 0x8140..0x9FFC -> 0x8140
                    in 0xE040..0xEBBF -> 0xC140
                    else -> throw java.lang.IllegalArgumentException(
                        "illegal char at " + (i + 1) + "/" + Integer.toHexString(c)
                    )
                }
                c = (c ushr 8 and 0xff) * 0xC0 + (c and 0xff)
                buffer.put(c, 13)
                i += 2
            }
            require(i >= data.size) { "illegal char at " + (i + 1) }
        } catch (e: UnsupportedEncodingException) {
            throw RuntimeException(e.message)
        }
    }

    override fun length(): Int =
        try {
            data.toByteArray(charset(QRUtil.jISEncoding)).size / 2
        } catch (e: UnsupportedEncodingException) {
            throw RuntimeException(e.message)
        }
}

/**
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRNumber.java)
 *
 * @author Kazuhiko Arase
 */
internal class QRNumber(data: String) : QRData(Mode.MODE_NUMBER, data) {
    override fun write(buffer: BitBuffer) {
        var i = 0
        while (i + 2 < data.length) {
            val num = parseInt(data.substring(i, i + 3))
            buffer.put(num, 10)
            i += 3
        }
        if (i < data.length) {
            if (data.length - i == 1) {
                val num = parseInt(data.substring(i, i + 1))
                buffer.put(num, 4)
            } else if (data.length - i == 2) {
                val num = parseInt(data.substring(i, i + 2))
                buffer.put(num, 7)
            }
        }
    }

    override fun length(): Int = data.length
}
