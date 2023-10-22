package qrcode.fancy.color

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.Colors
import qrcode.internals.QRCodeSquare

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
