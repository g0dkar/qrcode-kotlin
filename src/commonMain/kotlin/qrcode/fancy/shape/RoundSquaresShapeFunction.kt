package qrcode.fancy.shape

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.fancy.FancyQRCode
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquare
import qrcode.render.QRCodeGraphics

/**
 *
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
class RoundSquaresShapeFunction(
    private val radius: Int
) : QRCodeShapeFunction {
    override fun renderFn(
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        graphics: QRCodeGraphics,
        fancyQRCode: FancyQRCode
    ) {
        val color = colorFn.colorFn(square)
        val (w, h) = graphics.dimensions()
        graphics.fillEllipse(0, 0, w, h, color)
    }
}
