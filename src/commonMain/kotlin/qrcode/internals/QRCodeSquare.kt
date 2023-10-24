package qrcode.internals

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads
import qrcode.QRCode
import qrcode.internals.QRCodeRegion.BOTTOM_LEFT_CORNER
import qrcode.internals.QRCodeRegion.BOTTOM_RIGHT_CORNER
import qrcode.internals.QRCodeRegion.TOP_LEFT_CORNER
import qrcode.internals.QRCodeRegion.TOP_RIGHT_CORNER
import qrcode.internals.QRCodeRegion.UNKNOWN
import qrcode.internals.QRCodeSquareType.DEFAULT
import qrcode.internals.QRCodeSquareType.MARGIN

/**
 * Represents a single QRCode square unit. It has information about its "color" (either dark or bright),
 * its position (row and column) and what it represents.
 *
 * It can be part of a position probe (aka those big squares at the extremities), part of a position
 * adjustment square, part of a timing pattern or just another square as any other :)
 *
 * @author Rafael Lins - g0dkar
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
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
    val parent: QRCodeSquare? = null,
) {
    var rendered: Boolean = false

    /** Calculates where is the X position where this square will be in the main QRCode image given a [cellSize]. */
    @JvmOverloads
    fun absoluteX(cellSize: Int = QRCode.DEFAULT_CELL_SIZE): Int = col * cellSize

    /** Calculates where is the Y position where this square will be in the main QRCode image given a [cellSize]. */
    @JvmOverloads
    fun absoluteY(cellSize: Int = QRCode.DEFAULT_CELL_SIZE): Int = row * cellSize
}

/**
 * Returns information on the square itself. It has the [type] of square and its [region] within its relative type.
 *
 * For example, if `type = POSITION_PROBE` then [region] will represent where within the Position Probe this square
 * is positioned. A [region] of [QRCodeRegion.TOP_LEFT_CORNER] for example represents the top left corner of the
 * position probe this particular square is part of (a QRCode have 3 position probes).
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
data class QRCodeSquareInfo(
    val type: QRCodeSquareType,
    val region: QRCodeRegion,
) {
    companion object {
        internal fun margin() = QRCodeSquareInfo(MARGIN, QRCodeRegion.MARGIN)
    }
}

/**
 * The types available for squares in a QRCode.
 *
 * @author Rafael Lins - g0dkar
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
enum class QRCodeSquareType {
    /** Part of a position probe: one of those big squares at the extremities of the QRCode. */
    POSITION_PROBE,

    /** Part of a position adjustment pattern: just like a position probe, but much smaller. */
    POSITION_ADJUST,

    /** Part of the timing pattern. Make it a square like any other :) */
    TIMING_PATTERN,

    /** Anything special. Just a square. */
    DEFAULT,

    /** Used to point out that this is part of the margin. */
    MARGIN
}

/**
 * Represents which part/region of a given square type a particular, single square is.
 *
 * For example, a position probe is visually composed of multiple squares that form a bigger one.
 *
 * For example, this is what a position probe normally looks like (squares spaced for ease of understanding):
 *
 * ```
 * A■■■■B
 * ■ ■■ ■
 * ■ ■■ ■
 * C■■■■D
 * ```
 *
 * The positions marked with `A`, `B`, `C` and `D` would be regions [TOP_LEFT_CORNER], [TOP_RIGHT_CORNER],
 * [BOTTOM_LEFT_CORNER] and [BOTTOM_RIGHT_CORNER] respectively.
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
enum class QRCodeRegion {
    TOP_LEFT_CORNER,
    TOP_RIGHT_CORNER,
    TOP_MID,
    LEFT_MID,
    RIGHT_MID,
    CENTER,
    BOTTOM_LEFT_CORNER,
    BOTTOM_RIGHT_CORNER,
    BOTTOM_MID,
    MARGIN,
    UNKNOWN
}
