package qrcode.fancy.shape

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquare
import qrcode.render.QRCodeGraphics

/**
 * Function to render (draw) a single square.
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
interface QRCodeShapeFunction {
    /**
     * Renders a single square.
     */
    fun renderSquare(colorFn: QRCodeColorFunction, square: QRCodeSquare, squareCanvas: QRCodeGraphics, canvas: QRCodeGraphics)

    /**
     * Renders a control square (those bigger ones on the edges).
     */
    fun renderControlSquare(colorFn: QRCodeColorFunction, squareCanvas: QRCodeGraphics, canvas: QRCodeGraphics)

    /**
     * Renders a timing square (those smaller ones all over the QRCode)
     */
    fun renderTimingSquare(colorFn: QRCodeColorFunction, squareCanvas: QRCodeGraphics, canvas: QRCodeGraphics)
}
