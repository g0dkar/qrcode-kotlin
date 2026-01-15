package qrcode.color

import qrcode.QRCode
import qrcode.annotation.VisibleForTesting
import qrcode.render.QRCodeGraphics
import kotlin.jvm.JvmOverloads
import kotlin.math.roundToInt

/**
 * Renders a linear gradient from [startForegroundColor] to [endForegroundColor] as colors for the squares and
 * [background] as the background color. By default, it'll be a [vertical] (top-to-bottom) gradient.
 */
class LinearGradientColorFunction @JvmOverloads constructor(
    val startForegroundColor: Int,
    val endForegroundColor: Int,
    val background: Int = Colors.WHITE,
    var vertical: Boolean = true,
) : QRCodeColorFunction {
    private val startComponents = Colors.getRGBA(startForegroundColor)
    private val endComponents = Colors.getRGBA(endForegroundColor)

    @VisibleForTesting
    internal fun gradientColor(positionPercent: Double): Int {
        require(positionPercent in 0.0..1.0) { "positionPercent must be between 0.0 and 1.0 but was $positionPercent" }

        val r = startComponents[0] * (1.0 - positionPercent) + endComponents[0] * positionPercent
        val g = startComponents[1] * (1.0 - positionPercent) + endComponents[1] * positionPercent
        val b = startComponents[2] * (1.0 - positionPercent) + endComponents[2] * positionPercent

        return Colors.rgba(
            r.roundToInt().coerceIn(0..255),
            g.roundToInt().coerceIn(0..255),
            b.roundToInt().coerceIn(0..255),
            255,
        )
    }

    override fun fg(row: Int, col: Int, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int {
        val pct: Double = if (vertical) {
            row
        } else {
            col
        } / qrCode.rawData.size.toDouble()

        return gradientColor(pct)
    }

    override fun bg(row: Int, col: Int, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int = background
}
