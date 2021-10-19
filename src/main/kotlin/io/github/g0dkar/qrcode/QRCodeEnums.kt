package io.github.g0dkar.qrcode

/**
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/ErrorCorrectionLevel.java)
 *
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
enum class ErrorCorrectionLevel(val value: Int, val maxTypeNum: Int) {
    L(1, 21),
    M(0, 25),
    Q(3, 30),
    H(2, 34)
}

/**
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/MaskPattern.java)
 *
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
enum class MaskPattern {
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
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/Mode.java)
 *
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
enum class Mode(val value: Int) {
    MODE_NUMBER(1 shl 0),
    MODE_ALPHA_NUM(1 shl 1),
    MODE_8BIT_BYTE(1 shl 2),
    MODE_KANJI(1 shl 3),
}
