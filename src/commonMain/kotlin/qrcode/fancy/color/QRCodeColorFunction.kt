package io.github.g0dkar.qrcode.fancy.color

import io.github.g0dkar.qrcode.internals.QRCodeSquare
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
@OptIn(ExperimentalJsExport::class)
interface QRCodeColorFunction {
    fun colorFn(square: QRCodeSquare): Int
}
