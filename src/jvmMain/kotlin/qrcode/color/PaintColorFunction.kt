package qrcode.color

import qrcode.QRCode
import qrcode.render.QRCodeGraphics
import java.awt.GradientPaint
import java.awt.LinearGradientPaint
import java.awt.MultipleGradientPaint
import java.awt.Paint

/**
 * A custom color function that allows a [Paint] to be used for drawing instead of plain colors.
 *
 * @see Paint
 * @see GradientPaint
 * @see LinearGradientPaint
 * @see MultipleGradientPaint
 */
open class PaintColorFunction(
    val foregroundPaint: Paint,
    val backgroundPaint: Paint,
) : DefaultColorFunction() {
    override fun beforeRender(qrCode: QRCode, qrCodeGraphics: QRCodeGraphics) {
        qrCodeGraphics.beforeRenderAction = {
            it.paint = backgroundPaint
        }

        qrCodeGraphics.fill(0)

        qrCodeGraphics.beforeRenderAction = {
            it.paint = foregroundPaint
        }
    }

    override fun fg(row: Int, col: Int): Int = 0

    override fun bg(row: Int, col: Int): Int = 0
}
