package qrcode.render.extensions

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Canvas
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.translate
import qrcode.QRCode
import qrcode.render.graphics.DrawScopeGraphics

/**
 * Extension function to make it easier to draw a [QRCode] into a modern Jetpack Compose [Canvas].
 *
 * Usage example:
 *
 * ```kotlin
 * import qrcode.render.extensions.drawQRCode
 *
 * @Composable
 * fun QRCodeKotlinQRCode(
 *     text: String,
 *     modifier: Modifier = Modifier,
 * ) {
 *     val qrCode = remember(text) {
 *         QRCode.ofRoundedSquares()
 *             .build(text)
 *     }
 *
 *     Canvas(
 *         modifier = modifier
 *             .aspectRatio(1f)
 *     ) {
 *         drawQRCode(qrCode) // Draw the QRCode at (0, 0)
 *     }
 * }
 * ```
 *
 * **Code sample by @dgmltn at GitHub**, used with authors' permission and lightly modified :)
 *
 * Original code: https://github.com/g0dkar/qrcode-kotlin/issues/141#issuecomment-2722041216
 *
 * @param qrCode The [QRCode] that will be drawn into the [DrawScope].
 * @param offsetTopLeft The [Offset] of the top-left corner where the QRCode will be drawn. Defaults to [Offset.Zero].
 * @param sizeToFitInto The area in which to fit the QRCode. Defaults to the `size` of the [DrawScope].
 *
 */
fun DrawScope.drawQRCode(
    qrCode: QRCode,
    offsetTopLeft: Offset = Offset.Zero,
    sizeToFitInto: Size = this.size,
) {
    val width = sizeToFitInto.width.toInt()
    val height = sizeToFitInto.height.toInt()

    qrCode.fitIntoArea(width, height)

    val qrCodeGraphics = qrCode.graphics
    val previousDrawingInterface = qrCodeGraphics.drawingInterface

    val drawScopeGraphics = DrawScopeGraphics(this, qrCodeGraphics.width, qrCodeGraphics.height)
    qrCodeGraphics.drawingInterface = drawScopeGraphics

    translate(offsetTopLeft.x, offsetTopLeft.y) {
        qrCode.render()
    }

    qrCodeGraphics.drawingInterface = previousDrawingInterface
}
