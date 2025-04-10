package qrcode.color

import qrcode.QRCode
import qrcode.render.QRCodeGraphics
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
open class DefaultColorFunction(
    private val foreground: Int = Colors.BLACK,
    private val background: Int = Colors.TRANSPARENT,
) : QRCodeColorFunction {
    override fun fg(row: Int, col: Int, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int = foreground
    override fun bg(row: Int, col: Int, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int = background
}
