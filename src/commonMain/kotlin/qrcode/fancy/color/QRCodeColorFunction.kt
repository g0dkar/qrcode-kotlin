package qrcode.fancy.color

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.internals.QRCodeSquare

@JsExport
@OptIn(ExperimentalJsExport::class)
interface QRCodeColorFunction {
    fun colorFn(square: QRCodeSquare): Int
}
