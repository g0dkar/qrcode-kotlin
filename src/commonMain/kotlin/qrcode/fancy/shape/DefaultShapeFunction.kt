package qrcode.fancy.shape

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquare
import qrcode.render.QRCodeGraphics

/**
 *
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
open class DefaultShapeFunction : QRCodeShapeFunction {
    override fun renderSquare(
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics,
    ) {
        val color = colorFn.colorFn(square)
        squareCanvas.fill(color)
    }

    override fun renderControlSquare(
        colorFn: QRCodeColorFunction,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics
    ) {
        TODO("Not yet implemented")
    }

    override fun renderTimingSquare(
        colorFn: QRCodeColorFunction,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics
    ) {
        TODO("Not yet implemented")
    }
}
