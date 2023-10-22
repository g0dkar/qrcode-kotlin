package qrcode.fancy.shape

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.fancy.FancyQRCode
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquare
import qrcode.render.QRCodeGraphics

@JsExport
@OptIn(ExperimentalJsExport::class)
interface QRCodeShapeFunction {
    fun renderFn(colorFn: QRCodeColorFunction, square: QRCodeSquare, graphics: QRCodeGraphics, fancyQRCode: FancyQRCode)
}
