package qrcode.shape

import qrcode.raw.QRCodeProcessor.Companion.DEFAULT_CELL_SIZE
import qrcode.render.QRCodeGraphics
import kotlin.jvm.JvmOverloads
import kotlin.math.roundToInt

/**
 * Creates "rounded squares" as the shapes on the QRCode.
 *
 * By default, the value is set to `squareSize / 4`
 */
@Suppress("NON_EXPORTABLE_TYPE")
open class RoundSquaresShapeFunction @JvmOverloads constructor(
    squareSize: Int = DEFAULT_CELL_SIZE,
    private val radius: Int = defaultRadius(squareSize),
    innerSpace: Int = defaultInnerSpace(squareSize)
) : DefaultShapeFunction(squareSize, innerSpace) {
    companion object {
        fun defaultRadius(squareSize: Int) = (squareSize / 1.75).roundToInt()
        fun defaultInnerSpace(squareSize: Int) = (squareSize * 0.05).roundToInt()
    }

    override fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int, canvas: QRCodeGraphics) {
        canvas.fillRoundRect(x, y, width, height, radius, color)
    }

    override fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double, canvas: QRCodeGraphics) {
        canvas.drawRoundRect(x, y, width, height, radius, color, thickness)
    }
}
