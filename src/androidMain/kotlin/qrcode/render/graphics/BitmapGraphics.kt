package qrcode.render.graphics

import android.graphics.Bitmap
import android.graphics.Bitmap.CompressFormat
import android.graphics.Bitmap.CompressFormat.PNG
import android.graphics.Bitmap.Config.ARGB_8888
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.Paint.Style
import android.graphics.Paint.Style.FILL
import android.graphics.Paint.Style.STROKE
import android.graphics.Rect
import android.graphics.RectF
import qrcode.render.AndroidDrawingInterface
import java.io.ByteArrayOutputStream
import kotlin.math.roundToInt

/**
 * An [AndroidDrawingInterface] that uses a [Canvas] (here referred to as "Classic Canvas") to draw into a [Bitmap].
 *
 * For a modern Canvas, see [DrawScopeGraphics] which uses Jetpack Compose.
 */
open class BitmapGraphics(
    val width: Int,
    val height: Int,
    val image: Bitmap = Bitmap.createBitmap(width, height, ARGB_8888),
) : AndroidDrawingInterface {
    val canvas: Canvas = Canvas(image)

    /** Cache of [Paint] objects being used. Just to try and use the least amount of CPU/memory possible. */
    private val paintCache = mutableMapOf<Int, Paint>()

    /**
     * Keeps a simple color cache. The default style is [FILL].
     */
    protected fun paintFromCache(color: Int, paintStyle: Style = FILL, thickness: Double = 0.0): Paint {
        return paintCache.getOrPut(color) {
            Paint().apply { setColor(color) }
        }.apply {
            if (style != paintStyle) {
                style = paintStyle
            }
            this.strokeWidth = thickness.toFloat()
        }
    }

    private fun rectF(x: Int, y: Int, width: Int, height: Int): RectF =
        RectF(x.toFloat(), y.toFloat(), (x + width).toFloat(), (y + height).toFloat())

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
        val halfThickness = (thickness / 2.0).roundToInt()

        canvas.drawRoundRect(
            rectF(
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
        val rectF = rectF(x, y, width, height)
        val paint = paintFromCache(color)

        canvas.drawRoundRect(
            rectF,
            floatRadius,
            floatRadius,
            paint,
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
            rectF(x, y, width, height),
            paintFromCache(color, STROKE, thickness),
        )
    }

    override fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawOval(
            rectF(x, y, width, height),
            paintFromCache(color),
        )
    }

    override fun drawImage(rawData: ByteArray?, x: Int, y: Int) {
        if (rawData != null && rawData.isNotEmpty()) { // NOSONAR
            val imgBitmap = BitmapFactory.decodeByteArray(rawData, 0, rawData.size)
            drawBitmap(imgBitmap, x, y)
        }
    }

    override fun drawBitmap(img: Bitmap, x: Int, y: Int) {
        canvas.drawBitmap(img, x.toFloat(), y.toFloat(), null)
    }

    override fun nativeImage() = image

    override fun getBytes(format: String, quality: Int): ByteArray {
        val compressFormat = toCompressFormat(format)
        val byteArrayOutputStream = ByteArrayOutputStream()

        image.compress(compressFormat, quality.coerceIn(0, 100), byteArrayOutputStream)

        return byteArrayOutputStream.toByteArray()
    }

    /**
     * Tries to convert a [String] into a [CompressFormat] returning [PNG] if it fails to do so.
     */
    private fun toCompressFormat(format: String) =
        try {
            CompressFormat.valueOf(format.uppercase())
        } catch (_: Throwable) {
            PNG
        }
}
