package qrcode.color

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Default function for the QRCode cell color. Returns a color for the foreground ("dark") and another for the
 * background and margin.
 *
 * The default colors is [Colors.BLACK] for the foreground and [Colors.WHITE] for the background.
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
class DefaultColorFunction(
    private val foreground: Int = Colors.BLACK,
    private val background: Int = Colors.WHITE,
) : QRCodeColorFunction {
    override fun fg(row: Int, col: Int): Int = foreground

    override fun bg(row: Int, col: Int): Int = background

    override fun margin(row: Int, col: Int): Int = background
}
