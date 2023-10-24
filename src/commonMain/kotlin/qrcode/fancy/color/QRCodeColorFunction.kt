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
            MARGIN -> margin()
            else -> when (square.dark) {
                true -> fg()
                else -> bg()
            }
        }

    /**
     * What is the foreground color
     */
    fun fg(): Int

    /**
     * What is the background color
     */
    fun bg(): Int

    /**
     * What is the margin color. Defaults to [bg]
     */
    fun margin(): Int = bg()
}
