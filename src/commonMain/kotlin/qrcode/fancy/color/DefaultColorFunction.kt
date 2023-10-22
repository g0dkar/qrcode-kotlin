package io.github.g0dkar.qrcode.fancy.color

import io.github.g0dkar.qrcode.internals.QRCodeSquare
import io.github.g0dkar.qrcode.render.Colors
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
@OptIn(ExperimentalJsExport::class)
class DefaultColorFunction(
    private val foreground: Int = Colors.BLACK,
    private val background: Int = Colors.WHITE,
) : QRCodeColorFunction {
    override fun colorFn(square: QRCodeSquare) =
        when (square.dark) {
            true -> foreground
            else -> background
        }
}
