package qrcode.fancy

import io.github.g0dkar.qrcode.QRCodeRawData
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads
import qrcode.QRCode
import qrcode.fancy.color.DefaultColorFunction
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.fancy.shape.DefaultShapeFunction
import qrcode.fancy.shape.QRCodeShapeFunction

/**
 * A fun class to easily create some of the more fancy QRCodes people come up with these days.
 *
 * It gets a [QRCode] on the constructor and builds a render function on top of it.
 *
 * It includes things like:
 *
 * - A QR Code with a logo at the center
 * - A QR Code with dots instead of squares
 * - Colorful QR Codes
 *
 * If you have a suggestion for a nice QR Code style, feel free to open a PR, or an Issue with your suggestion :)
 *
 * @author Rafael Lins - g0dkar
 *
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
class FancyQRCode @JvmOverloads constructor(
    private val qrCode: QRCode,
    var cellSize: Int = QRCode.DEFAULT_CELL_SIZE,
    var margin: Int = QRCode.DEFAULT_MARGIN,
    var colorFn: QRCodeColorFunction = DefaultColorFunction(),
    var shapeFn: QRCodeShapeFunction = DefaultShapeFunction(),
) {
    private val rawData: QRCodeRawData = qrCode.encode()
}
