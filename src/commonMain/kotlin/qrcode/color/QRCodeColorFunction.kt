package qrcode.color

import qrcode.QRCode
import qrcode.internals.QRCodeSquare
import qrcode.render.QRCodeGraphics
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * A function that selects a color for a give square. The default implementation chooses between [fg], [bg] and [margin]
 * given what should be rendered.
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
interface QRCodeColorFunction {
    fun colorFn(square: QRCodeSquare, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int =
        when (square.dark) {
            true -> fg(square.row, square.col, qrCode, qrCodeGraphics)
            else -> bg(square.row, square.col, qrCode, qrCodeGraphics)
        }

    /**
     * Called before rendering starts, to setup something if needed
     */
    fun beforeRender(qrCode: QRCode, qrCodeGraphics: QRCodeGraphics) {
        // Do nothing
    }

    /**
     * What is the foreground color
     */
    fun fg(row: Int, col: Int, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int

    /**
     * What is the background color
     */
    fun bg(row: Int, col: Int, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int
}
