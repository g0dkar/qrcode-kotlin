package qrcode.raw

import qrcode.raw.ErrorCorrectionLevel.HIGH
import qrcode.raw.ErrorCorrectionLevel.VERY_HIGH

/**
 * The level of Error Correction to apply to the QR Code image. The Higher the Error Correction, the lower quality
 * **print** the QRCode can be (think of "wow, even with the paper a bit crumpled, it still read the QR Code!" - that
 * is likely a [HIGH] or [VERY_HIGH] error correction).
 *
 * The trade-off is the amount of data you can encode. The higher the error correction level, the less amount of data
 * you'll be able to encode.
 *
 * Please consult [Kazuhiko's Online Demo](https://kazuhikoarase.github.io/qrcode-generator/js/demo/) where at the time
 * of writing a handy table showed how many bytes can be encoded given a data type ([QRCodeDataType]) and Error Correction Level.
 *
 * This library automatically tries to fit ~2048 bytes into the QR Code regardless of error correction level. That is
 * the reason and meaning of [maxTypeNum].
 *
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/ErrorCorrectionLevel.java)
 *
 * @param value Value associated with this error correction level
 * @param maxTypeNum Maximum `type` value which can fit 2048 bytes. Used to automatically calculate the `type` value.
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
enum class ErrorCorrectionLevel(val value: Int, val maxTypeNum: Int) {
    LOW(1, 21),
    MEDIUM(0, 25),
    HIGH(3, 30),
    VERY_HIGH(2, 34),
}

/**
 * Patterns to apply to the QRCode. They change how the QRCode looks in the end.
 *
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/MaskPattern.java)
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
enum class MaskPattern {
    /** This is the default pattern (no pattern is applied) */
    PATTERN000,
    PATTERN001,
    PATTERN010,
    PATTERN011,
    PATTERN100,
    PATTERN101,
    PATTERN110,
    PATTERN111
}

/**
 * QRCode Modes. Basically represents which kind of data is being encoded.
 *
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/Mode.java)
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
enum class QRCodeDataType(val value: Int) {
    /** Strictly numerical data. Like huge integers. These can be way bigger than [Long.MAX_VALUE]. */
    NUMBERS(1 shl 0),

    /** Represents Uppercase Alphanumerical data. Allowed characters: `[0-9A-Z $%*+\-./:]`. */
    UPPER_ALPHA_NUM(1 shl 1),

    /** This can be any kind of data. With this you can encode Strings, URLs, images, files, anything. */
    DEFAULT(1 shl 2)
}
