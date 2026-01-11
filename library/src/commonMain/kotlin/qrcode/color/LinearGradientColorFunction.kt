package qrcode.color

import qrcode.QRCode
import qrcode.render.QRCodeGraphics
import kotlin.jvm.JvmOverloads
import kotlin.math.roundToInt

@Suppress("MemberVisibilityCanBePrivate")
class LinearGradientColorFunction @JvmOverloads constructor(
    val startForegroundColor: Int,
    val endForegroundColor: Int,
    val backgroundColor: Int = Colors.WHITE,
    var vertical: Boolean = true,
) : QRCodeColorFunction {
    private val startComponents = Colors.getRGBA(startForegroundColor)
    private val endComponents = Colors.getRGBA(endForegroundColor)

    override fun fg(row: Int, col: Int, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int {
        val pct: Double = if (vertical) {
            row
        } else {
            col
        } / qrCode.rawData.size.toDouble()

        val r = startComponents[0] * (1 - pct) + endComponents[0] * pct
        val g = startComponents[1] * (1 - pct) + endComponents[1] * pct
        val b = startComponents[2] * (1 - pct) + endComponents[2] * pct

        return Colors.rgba(
            r.roundToInt().coerceIn(0..255),
            g.roundToInt().coerceIn(0..255),
            b.roundToInt().coerceIn(0..255),
            255,
        )
    }

    override fun bg(row: Int, col: Int, qrCode: QRCode, qrCodeGraphics: QRCodeGraphics): Int = backgroundColor
}
