package qrcode.fancy.color

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.internals.QRCodeSquare
import qrcode.internals.QRCodeSquareType.MARGIN

/**
 * A function that selects a color for a give square. The default implementation chooses between [fg], [bg] and [margin]
 * given what should be rendered.
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
interface QRCodeColorFunction {
    fun colorFn(square: QRCodeSquare): Int =
        when (square.squareInfo.type) {
            MARGIN -> margin(square.row, square.col)
            else -> when (square.dark) {
                true -> fg(square.row, square.col)
                else -> bg(square.row, square.col)
            }
        }

    /**
     * What is the foreground color
     */
    fun fg(row: Int, col: Int): Int

    /**
     * What is the background color
     */
    fun bg(row: Int, col: Int): Int

    /**
     * What is the margin color. Defaults to [bg]
     */
    fun margin(row: Int, col: Int): Int = bg(row, col)
}
