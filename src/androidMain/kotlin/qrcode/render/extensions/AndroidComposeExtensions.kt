package qrcode.render.extensions

import androidx.compose.ui.geometry.Offset
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
 */
fun DrawScope.drawQRCode(
    qrCode: QRCode,
    offsetTopLeft: Offset = Offset.Zero,
) {
    val qrCodeGraphics = qrCode.graphics
    val previousDrawingInterface = qrCodeGraphics.drawingInterface

    val drawScopeGraphics = DrawScopeGraphics(this, qrCodeGraphics.width, qrCodeGraphics.height)
    qrCodeGraphics.drawingInterface = drawScopeGraphics

    translate(offsetTopLeft.x, offsetTopLeft.y) {
        qrCode.render()
    }

    qrCodeGraphics.drawingInterface = previousDrawingInterface
}
