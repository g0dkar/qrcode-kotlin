package qrcode.color

import qrcode.QRCode
import qrcode.internals.QRCodeSquare
import qrcode.render.QRCodeGraphics

/**
 * A function that selects a color for a given square. The default implementation chooses between [fg] and [bg]
 * given what should be rendered: [fg] for [QRCodeSquare.dark] squares, [bg] otherwise.
 */
interface QRCodeColorFunction {
    fun colorFn(square: QRCodeSquare, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int =
        when (square.dark) {
            true -> fg(square.row, square.col, qrCode, qrCodeGraphics)
            else -> bg(square.row, square.col, qrCode, qrCodeGraphics)
        }

    /**
     * Called before rendering starts, to set up something if needed
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
