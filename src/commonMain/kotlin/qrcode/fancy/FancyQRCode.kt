package qrcode.fancy

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads
import qrcode.ErrorCorrectionLevel
import qrcode.QRCode
import qrcode.QRCodeRawData
import qrcode.fancy.color.DefaultColorFunction
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.fancy.shape.DefaultShapeFunction
import qrcode.fancy.shape.QRCodeShapeFunction
import qrcode.internals.QRCodeSquareType.POSITION_ADJUST
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.internals.QRCodeSquareType.TIMING_PATTERN
import qrcode.render.QRCodeGraphics

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
    val data: String,
    val squareSize: Int = QRCode.DEFAULT_CELL_SIZE,
    val colorFn: QRCodeColorFunction = DefaultColorFunction(),
    val shapeFn: QRCodeShapeFunction = DefaultShapeFunction(),
) {
    val qrCode: QRCode = QRCode(data, ErrorCorrectionLevel.H)

    fun draw(rawData: QRCodeRawData, canvas: QRCodeGraphics): QRCodeGraphics =
        qrCode.renderShaded(
            cellSize = squareSize,
            margin = squareSize,
            rawData = rawData,
            qrCodeGraphics = canvas,
        ) { currentSquare, currentCanvas ->
            when (currentSquare.squareInfo.type) {
                POSITION_PROBE -> shapeFn.renderControlSquare(colorFn, canvas, canvas)
                POSITION_ADJUST -> shapeFn.renderControlSquare(colorFn, canvas, canvas)
                TIMING_PATTERN -> shapeFn.renderControlSquare(colorFn, canvas, canvas)
                else -> shapeFn.renderSquare(colorFn, currentSquare, currentCanvas, canvas)
            }
            shapeFn.renderSquare(colorFn, currentSquare, currentCanvas, canvas)
        }

    fun render(): ByteArray {
        // We need this a bit higher than usual to deal with the loss of data due to "fancyness" (circles are not squares)
        val typeNum = (QRCode.typeForDataAndECL(data, ErrorCorrectionLevel.H) * 2).coerceAtMost(40)
        val rawData = qrCode.encode(typeNum)
        val computedSize = qrCode.computeImageSize(squareSize, squareSize, rawData)
        val qrCodeGraphics = qrCode.qrCodeGraphicsFactory.newGraphicsSquare(computedSize)
        val renderedQRCode = draw(rawData, qrCodeGraphics)

        return renderedQRCode.getBytes()
    }
}
