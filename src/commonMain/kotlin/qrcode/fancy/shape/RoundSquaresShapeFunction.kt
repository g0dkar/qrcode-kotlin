package qrcode.fancy.shape

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads
import kotlin.math.round
import kotlin.math.roundToInt
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquare
import qrcode.render.QRCodeGraphics

/**
 * Creates "rounded squares" (aka squircles or squares with rounded edges) as the shapes on the QRCode.
 *
 * The [round] value can be absolute or relative. If it is absolute, we'll use it as-is. If it is relative,
 * it'll be considered as a 0-100% of the square size. (0 = no roundness, 100 = a circle)
 *
 * By default, the value is considered absolute (meaning "radius = 5" is 5 pixels, not 5% round)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
open class RoundSquaresShapeFunction @JvmOverloads constructor(
    private val radius: Int,
    private val absolute: Boolean = true,
) : QRCodeShapeFunction {
    override fun renderSquare(
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics,
    ) {
        val color = colorFn.colorFn(square)
        val (w, h) = squareCanvas.dimensions()

        val radiusValue = when (absolute) {
            true -> radius.coerceAtLeast(0)
            else -> (w * (radius / 100.0).coerceIn(0.0..1.0)).roundToInt()
        }

        squareCanvas.fillRoundRect(0, 0, w, h, radiusValue, color)
    }

    override fun renderControlSquare(
        colorFn: QRCodeColorFunction,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics
    ) {
        TODO("Not yet implemented")
    }

    override fun renderTimingSquare(
        colorFn: QRCodeColorFunction,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics
    ) {
        TODO("Not yet implemented")
    }
}
