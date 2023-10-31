package qrcode.shape

import qrcode.QRCode
import qrcode.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquare
import qrcode.render.QRCodeGraphics
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Function to render (draw) a single square.
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
interface QRCodeShapeFunction {
    /**
     * Called before rendering starts, to setup something if needed
     */
    fun beforeRender(qrCode: QRCode, qrCodeGraphics: QRCodeGraphics) {
        // Do nothing
    }

    /**
     * Renders a single square.
     */
    fun renderSquare(
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics,
    )

    /**
     * Renders a control square (those bigger ones on the edges).
     */
    fun renderControlSquare(
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics,
    )
}
