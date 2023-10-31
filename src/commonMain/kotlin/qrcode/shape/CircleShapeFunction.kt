package qrcode.shape

import qrcode.raw.QRCodeProcessor.Companion.DEFAULT_CELL_SIZE
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads
import kotlin.math.roundToInt

/**
 * Creates circles instead of squares while drawing the QRCode. By default, the circles will keep `8% of the squareSize`
 * pixels away from each other, to have a more pleasing aesthetics.
 *
 * @param squareSize How big each "square" will be, in pixels (defaults to [DEFAULT_CELL_SIZE])
 * @param innerSpace How much space inside each "square" will be left empty (1 = 1px of the inner area won't be drawn)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
open class CircleShapeFunction @JvmOverloads constructor(
    squareSize: Int = DEFAULT_CELL_SIZE,
    innerSpace: Int = defaultInnerSpace(squareSize)
) : RoundSquaresShapeFunction(squareSize, radius = squareSize, innerSpace) {
    companion object {
        fun defaultInnerSpace(squareSize: Int) = (squareSize * 0.05).roundToInt()
    }
}
