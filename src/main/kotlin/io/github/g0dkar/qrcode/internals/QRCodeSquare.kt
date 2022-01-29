package io.github.g0dkar.qrcode.internals

/**
 * Represents a single QRCode square unit. It has information about its "color" (either dark or bright),
 * its position (row and column) and what it represents.
 *
 * It can be part of a position probe (aka those big squares at the extermities), part of a position
 * ajustment square, part of a timing pattern or just another square as any other :)
 *
 * @author Rafael Lins - g0dkar
 */
data class QRCodeSquare(
    var dark: Boolean,
    val row: Int,
    val col: Int,
    val type: QRCodeSquareType = QRCodeSquareType.DEFAULT,
    val size: Int,
)

/**
 * The types available for squares in a QRCode.
 *
 * @author Rafael Lins - g0dkar
 */
enum class QRCodeSquareType {
    /** Part of a position probe: one of those big squares at the extremities of the QRCode. */
    POSITION_PROBE,
    /** Part of a position ajustment pattern: just like a position probe, but much smaller. */
    POSITION_ADJUST,
    /** Part of the timing pattern. Make it a square like any other :) */
    TIMING_PATTERN,
    /** Anything special. Just a square. */
    DEFAULT
}
