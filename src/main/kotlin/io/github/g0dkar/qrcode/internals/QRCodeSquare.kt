package io.github.g0dkar.qrcode.internals

data class QRCodeSquare(
    var dark: Boolean,
    val row: Int,
    val col: Int,
    val type: QRCodeSquareType = QRCodeSquareType.DEFAULT,
)

enum class QRCodeSquareType {
    POSITION_PROBE,
    POSITION_ADJUST,
    TIMING_PATTERN,
    DEFAULT
}
