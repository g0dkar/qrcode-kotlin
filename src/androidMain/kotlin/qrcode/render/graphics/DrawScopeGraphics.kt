package qrcode.render.graphics

import android.graphics.Bitmap
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import qrcode.color.Colors

class DrawScopeGraphics(
    val drawScope: DrawScope, val width: Int, val height: Int,
) : AndroidDrawingInterface {
    private val paintCache = mutableMapOf<Int, Color>()

    private fun composeColor(color: Int): Color {
        return paintCache.getOrPut(color) {
            val (r, g, b, a) = Colors.getRGBA(color)
            Color(r, g, b, a)
        }
    }

    private fun offset(x: Int, y: Int) = Offset(x.toFloat(), y.toFloat())

    private fun offsetSize(x: Int, y: Int, width: Int, height: Int): Pair<Offset, Size> =
        Pair(offset(x, y), Size(width.toFloat(), height.toFloat()))

    private fun stroke(thickness: Double) = Stroke(width = thickness.toFloat())

    override fun drawLine(
        x1: Int,
        y1: Int,
        x2: Int,
        y2: Int,
        color: Int,
        thickness: Double,
    ) {
        val startXY = offset(x1, y1)
        val endXY = offset(x2, y2)
        drawScope.drawLine(
            color = composeColor(color),
            start = startXY,
            end = endXY,
            strokeWidth = thickness.toFloat(),
        )
    }

    override fun drawRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        color: Int,
        thickness: Double,
    ) {
        val (topLeft, size) = offsetSize(x, y, width, height)

        drawScope.drawRect(
            color = composeColor(color),
            topLeft = topLeft,
            size = size,
            style = stroke(thickness),
        )
    }

    override fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        val (topLeft, size) = offsetSize(x, y, width, height)

        drawScope.drawRect(
            color = composeColor(color),
            topLeft = topLeft,
            size = size,
            style = Fill,
        )
    }

    override fun fill(color: Int) {
        fillRect(0, 0, width, height, color)
    }

    override fun drawRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
        thickness: Double,
    ) {
        val (topLeft, size) = offsetSize(x, y, width, height)

        drawScope.drawRoundRect(
            color = composeColor(color),
            topLeft = topLeft,
            size = size,
            cornerRadius = CornerRadius(borderRadius.toFloat(), borderRadius.toFloat()),
            style = stroke(thickness),
        )
    }

    override fun fillRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
    ) {
        val (topLeft, size) = offsetSize(x, y, width, height)

        drawScope.drawRoundRect(
            color = composeColor(color),
            topLeft = topLeft,
            size = size,
            cornerRadius = CornerRadius(borderRadius.toFloat(), borderRadius.toFloat()),
            style = Fill,
        )
    }

    override fun drawEllipse(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        color: Int,
        thickness: Double,
    ) {
        val (topLeft, size) = offsetSize(x, y, width, height)

        drawScope.drawOval(
            color = composeColor(color),
            topLeft = topLeft,
            size = size,
            style = stroke(thickness),
        )
    }

    override fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        val (topLeft, size) = offsetSize(x, y, width, height)

        drawScope.drawOval(
            color = composeColor(color),
            topLeft = topLeft,
            size = size,
            style = Fill,
        )
    }

    override fun drawImage(rawData: ByteArray?, x: Int, y: Int) {
        TODO("Unsupported operation")
    }

    override fun drawBitmap(img: Bitmap, x: Int, y: Int) {
        TODO("Unsupported operation")
    }

    override fun nativeImage(): Any = drawScope

    override fun getBytes(format: String, quality: Int): ByteArray {
        TODO("Unsupported operation")
    }

}
