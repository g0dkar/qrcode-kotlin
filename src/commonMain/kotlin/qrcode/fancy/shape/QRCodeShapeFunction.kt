package io.github.g0dkar.qrcode.fancy.shape

import io.github.g0dkar.qrcode.fancy.FancyQRCode
import io.github.g0dkar.qrcode.fancy.color.QRCodeColorFunction
import io.github.g0dkar.qrcode.internals.QRCodeSquare
import io.github.g0dkar.qrcode.render.QRCodeGraphics
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
@OptIn(ExperimentalJsExport::class)
interface QRCodeShapeFunction {
    fun renderFn(colorFn: QRCodeColorFunction, square: QRCodeSquare, graphics: QRCodeGraphics, fancyQRCode: FancyQRCode)
}
