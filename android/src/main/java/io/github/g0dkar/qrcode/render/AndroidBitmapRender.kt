package io.github.g0dkar.qrcode.render

import android.graphics.Bitmap
import android.graphics.Paint
import android.graphics.Paint.Style.FILL_AND_STROKE
import android.graphics.Paint.Style.STROKE
import android.graphics.RectF
import androidx.core.graphics.applyCanvas
import java.io.OutputStream
import java.util.function.BiFunction

/**
 * Renders images using an Android [Bitmap].
 *
 * Suitable for creating QRCodes in an Android environment.
 *
 * When calling [writeImage], this class will produce images of the [format] type (defaults to
 * [Bitmap.CompressFormat.PNG]).
 *
 * @author Rafael Lins - g0dkar
 *
 * @see writeImage
 * @see Bitmap
 * @see Bitmap.createBitmap
 * @see Bitmap.compress
 */
class AndroidBitmapRender @JvmOverloads constructor(
    width: Int,
    height: Int,
    var format: Bitmap.CompressFormat = Bitmap.CompressFormat.PNG,
    var quality: Int = 100
) : QRCodeCanvas<Bitmap>(width, height) {
    companion object {
        private const val IMAGE_CLASS = "android.graphics.Bitmap"

        init {
            QRCodeCanvasFactory.AVAILABLE_IMPLEMENTATIONS[IMAGE_CLASS] =
                BiFunction { width, height -> AndroidBitmapRender(width, height) }
        }
    }

    override val image: Bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)

    override fun writeImage(outputStream: OutputStream) {
        image.compress(format, quality, outputStream)
    }

    override fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int) {
        image.applyCanvas {
            this.drawLine(x1.toFloat(), y1.toFloat(), x2.toFloat(), y2.toFloat(), stroke(color))
        }
    }

    override fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        image.applyCanvas {
            drawRect(rect(x, y, width, height), stroke(color))
        }
    }

    override fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        image.applyCanvas {
            drawRect(rect(x, y, width, height), fillAndStroke(color))
        }
    }

    override fun drawRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        image.applyCanvas {
            drawRoundRect(rect(x, y, width, height), borderRadius.toFloat(), borderRadius.toFloat(), stroke(color))
        }
    }

    override fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        image.applyCanvas {
            drawRoundRect(
                rect(x, y, width, height),
                borderRadius.toFloat(),
                borderRadius.toFloat(),
                fillAndStroke(color)
            )
        }
    }

    override fun drawImage(img: QRCodeCanvas<*>, x: Int, y: Int) {
        if (img is AndroidBitmapRender) {
            image.applyCanvas {
                drawBitmap(img.image, x.toFloat(), y.toFloat(), Paint())
            }
        }
    }

    private fun rect(x: Int, y: Int, width: Int, height: Int): RectF =
        RectF(x.toFloat(), y.toFloat(), (x + width).toFloat(), (y + height).toFloat())

    private fun stroke(color: Int): Paint =
        Paint().apply {
            style = STROKE
            this.color = color
        }

    private fun fillAndStroke(color: Int): Paint =
        Paint().apply {
            style = FILL_AND_STROKE
            this.color = color
        }
}
