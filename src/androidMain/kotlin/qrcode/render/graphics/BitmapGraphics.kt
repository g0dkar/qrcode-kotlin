package qrcode.render.graphics

import android.graphics.Bitmap
import android.graphics.Bitmap.Config.ARGB_8888
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.Paint.Style.STROKE
import android.graphics.Rect
import android.graphics.RectF
import qrcode.render.AndroidGraphics
import kotlin.math.roundToInt

/**
 * An [AndroidGraphics] that uses a [Canvas] (here referred to as "Classic Canvas") to draw into a [Bitmap].
 *
 * For a modern Canvas, see [Xpto] which uses an Android Compose Canvas.
 */
open class BitmapGraphics(
    val width: Int,
    val height: Int,
) : AndroidGraphics<Bitmap>(0, 0, width, height) {
    private var image: Bitmap = Bitmap.createBitmap(width, height, ARGB_8888)
    private var canvas: Canvas = Canvas(image)

    override fun reset() {
        image = Bitmap.createBitmap(width, height, ARGB_8888)
        canvas = Canvas(image)
    }

    override fun drawLine(
        x1: Int,
        y1: Int,
        x2: Int,
        y2: Int,
        color: Int,
        thickness: Double,
    ) {
        canvas.drawLine(
            x1.toFloat(),
            y1.toFloat(),
            x2.toFloat(),
            y2.toFloat(),
            paintFromCache(color, STROKE, thickness),
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
        val halfThickness = (thickness / 2.0).roundToInt()
        val rect = Rect(
            x + halfThickness,
            y + halfThickness,
            x + width - halfThickness,
            y + height - halfThickness,
        )

        canvas.drawRect(rect, paintFromCache(color, STROKE, thickness))
    }

    override fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawRect(
            Rect(x, y, x + width, y + height),
            paintFromCache(color),
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
        val floatRadius = borderRadius.toFloat()
        val halfThickness: Float = (thickness / 2.0).toFloat()

        canvas.drawRoundRect(
            RectF(
                x + halfThickness,
                y + halfThickness,
                width - halfThickness * 2,
                height - halfThickness * 2,
            ),
            floatRadius,
            floatRadius,
            paintFromCache(color, STROKE, thickness),
        )
    }

    override fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        val floatRadius = borderRadius.toFloat()

        canvas.drawRoundRect(
            RectF(x.toFloat(), y.toFloat(), width.toFloat(), height.toFloat()),
            floatRadius,
            floatRadius,
            paintFromCache(color),
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
        canvas.drawOval(
            RectF(x.toFloat(), y.toFloat(), width.toFloat(), height.toFloat()),
            paintFromCache(color, STROKE, thickness),
        )
    }

    override fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawOval(
            RectF(x.toFloat(), y.toFloat(), width.toFloat(), height.toFloat()),
            paintFromCache(color),
        )
    }

    override fun drawImage(rawData: ByteArray?, x: Int, y: Int) {
        if (rawData != null && rawData.isNotEmpty()) { // NOSONAR
            val imgBitmap = BitmapFactory.decodeByteArray(rawData, 0, rawData.size)
            canvas.drawBitmap(imgBitmap, x.toFloat(), y.toFloat(), null)
        }
    }

    override fun getGraphics(): Bitmap = image
}
