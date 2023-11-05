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
     * Called before rendering starts, to set up something if needed
     */
    fun beforeRender(qrCode: QRCode, qrCodeGraphics: QRCodeGraphics) {
        // Do nothing
    }

    /**
     * Renders a single square.
     */
    fun renderSquare(
        x: Int,
        y: Int,
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        canvas: QRCodeGraphics,
        qrCode: QRCode,
    )

    /**
     * Renders a control square (those bigger ones on the edges).
     */
    fun renderControlSquare(
        xOffset: Int,
        yOffset: Int,
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        canvas: QRCodeGraphics,
        qrCode: QRCode,
    )
}
