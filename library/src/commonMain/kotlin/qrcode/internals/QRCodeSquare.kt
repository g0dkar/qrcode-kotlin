package qrcode.internals

import qrcode.internals.square.QRCodeRegion.UNKNOWN
import qrcode.internals.square.QRCodeSquareInfo
import qrcode.internals.square.QRCodeSquareType
import qrcode.internals.square.QRCodeSquareType.DEFAULT
import qrcode.raw.QRCodeProcessor
import kotlin.jvm.JvmOverloads

/**
 * Represents a single QRCode square unit. It has information about its "color" (either dark or bright),
 * its position (row and column) and what it represents.
 *
 * It can be part of a position probe (aka those big squares at the extremities), part of a position
 * adjustment square, part of a timing pattern or just another square as any other :)
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
    val squareInfo: QRCodeSquareInfo = QRCodeSquareInfo(DEFAULT, UNKNOWN),
    /** How many actual QRCode squares this one take up? (1 = a single square, >1 = likely a probe) */
    val rowSize: Int = 1,
    /** How many actual QRCode squares this one take up? (1 = a single square, >1 = likely a probe) */
    val colSize: Int = 1,
    /** Filled if this square is part of a larger one (like a [QRCodeSquareType.POSITION_PROBE]) */
    val parent: QRCodeSquare? = null,
) {
    var rendered: Boolean = false

    /** Calculates where is the X position where this square will be in the main QRCode image given a [cellSize]. */
    @JvmOverloads
    fun absoluteX(cellSize: Int = QRCodeProcessor.DEFAULT_CELL_SIZE): Int = col * cellSize

    /** Calculates where is the Y position where this square will be in the main QRCode image given a [cellSize]. */
    @JvmOverloads
    fun absoluteY(cellSize: Int = QRCodeProcessor.DEFAULT_CELL_SIZE): Int = row * cellSize

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as QRCodeSquare

        if (row != other.row) return false
        if (col != other.col) return false
        if (rowSize != other.rowSize) return false
        if (colSize != other.colSize) return false

        return true
    }

    override fun hashCode(): Int {
        var result = row
        result = 31 * result + col
        result = 31 * result + rowSize
        result = 31 * result + colSize
        return result
    }
}
