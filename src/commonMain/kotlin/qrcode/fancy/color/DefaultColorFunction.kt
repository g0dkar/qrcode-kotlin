package qrcode.fancy.color

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.Colors

@JsExport
@OptIn(ExperimentalJsExport::class)
class DefaultColorFunction(
    private val foreground: Int = Colors.BLACK,
    private val background: Int = Colors.WHITE,
) : QRCodeColorFunction {
    override fun fg(): Int = foreground

    override fun bg(): Int = background

    override fun margin(): Int = background
}
