package io.github.g0dkar.qrcode.internals

import io.github.g0dkar.qrcode.QRCode

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
    /** Is this a painted square? */
    var dark: Boolean,
    /** The row (top-to-bottom) that this square represents. */
    val row: Int,
    /** The column (left-to-right) that this square represents. */
    val col: Int,
    /** How big is the whole QRCode matrix? (e.g. if this is "16" then this is part of a 16x16 matrix) */
    val moduleSize: Int,
    /** What does this square represent within the QRCode? */
    val type: QRCodeSquareType = QRCodeSquareType.DEFAULT,
) {
    /** Calculates where is the X position where this square will be in the main QRCode image given a [cellSize]. */
    @JvmOverloads
    fun absoluteX(cellSize: Int = QRCode.DEFAULT_CELL_SIZE): Int = col * cellSize

    /** Calculates where is the Y position where this square will be in the main QRCode image given a [cellSize]. */
    @JvmOverloads
    fun absoluteY(cellSize: Int = QRCode.DEFAULT_CELL_SIZE): Int = row * cellSize
}

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
    DEFAULT,
    /** Used to point out that this is part of the margin. */
    MARGIN
}
