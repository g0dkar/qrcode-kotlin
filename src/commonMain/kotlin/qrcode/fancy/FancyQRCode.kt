package io.github.g0dkar.qrcode.fancy

import io.github.g0dkar.qrcode.QRCode
import io.github.g0dkar.qrcode.QRCodeRawData
import io.github.g0dkar.qrcode.fancy.color.DefaultColorFunction
import io.github.g0dkar.qrcode.fancy.color.QRCodeColorFunction
import io.github.g0dkar.qrcode.render.Colors
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

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
class FancyQRCode(
    private val qrCode: QRCode,
    var cellSize: Int = QRCode.DEFAULT_CELL_SIZE,
    var margin: Int = QRCode.DEFAULT_MARGIN,
    var colorFunction: QRCodeColorFunction = DefaultColorFunction(Colors.BLACK),
) {
    private val rawData: QRCodeRawData = qrCode.encode()
}
