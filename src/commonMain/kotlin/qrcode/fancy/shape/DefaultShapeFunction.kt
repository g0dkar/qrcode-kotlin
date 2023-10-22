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
class DefaultShapeFunction : QRCodeShapeFunction {
    override fun renderFn(
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        graphics: QRCodeGraphics,
        fancyQRCode: FancyQRCode
    ) {
        val color = colorFn.colorFn(square)
        graphics.fill(color)
    }
}
