package qrcode.render

import android.graphics.Bitmap
import android.graphics.Bitmap.CompressFormat
import android.graphics.Bitmap.CompressFormat.JPEG
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
import java.io.ByteArrayOutputStream
import java.io.OutputStream
import kotlin.math.roundToInt

@Suppress("MemberVisibilityCanBePrivate")
actual open class QRCodeGraphics actual constructor(
    val width: Int,
    val height: Int,
) {
    companion object {
        val AVAILABLE_FORMATS: Array<String> = CompressFormat.entries.map { it.name }.toTypedArray()
    }

    protected fun createCanvas(image: Bitmap) = Canvas(image)

    /** [Bitmap] being used for the drawing operations. */
    private var image: Bitmap = Bitmap.createBitmap(width, height, ARGB_8888)

    /** [Canvas] that handles the presenting. */
    private var canvas: Canvas = createCanvas(image)

    /** Cache of [Paint] objects being used. Just to try and use the least amount of CPU/memory possible. */
    private val paintCache = mutableMapOf<Int, Paint>()

    /** Whether any drawing operations were done or not. */
    private var changed: Boolean = false

    /** Whether the user set the value of [canvas]. */
    private var customCanvas = false
    private var customCanvasOffsetX: Int = 0
    private var customCanvasOffsetY: Int = 0

    /**
     * Allows this object to draw directly to a user specified [Canvas].
     *
     * It'll invoke [Canvas.setBitmap] with the [Bitmap] being used to draw.
     *
     * @see image
     */
    fun useCustomCanvas(canvas: Canvas, offsetX: Int = 0, offsetY: Int = 0): QRCodeGraphics {
        customCanvas = true
        this.canvas = canvas
        this.canvas.setBitmap(image)
        customCanvasOffsetX = offsetX
        customCanvasOffsetY = offsetY

        return this
    }

    /**
     * Keeps a simple color cache. The default style is [FILL].
     */
    protected fun paintFromCache(color: Int, paintStyle: Style = FILL, thickness: Double = 0.0): Paint {
        changed = true
        return paintCache.getOrPut(color) {
            Paint().apply { setColor(color) }
        }.apply {
            if (style != paintStyle) {
                style = paintStyle
            }
            this.strokeWidth = thickness.toFloat()
        }
    }

    protected fun buildRectF(x: Int, y: Int, w: Int, h: Int): RectF =
        RectF(
            (x + customCanvasOffsetX).toFloat(),
            (y + customCanvasOffsetY).toFloat(),
            (x + w + customCanvasOffsetX).toFloat(),
            (y + h + customCanvasOffsetY).toFloat(),
        )

    /** Returns `true` if **any** drawing was performed */
    actual open fun changed() = changed

    /** Simply changes the `changed` flag to true without doing anything else */
    actual fun reset() {
        if (changed) {
            changed = false
            image = Bitmap.createBitmap(width, height, ARGB_8888)

            if (!customCanvas) {
                canvas = createCanvas(image)
            } else {
                this.canvas.setBitmap(image)
            }
        }
    }

    /** Return the dimensions of this Graphics object as a pair of `width, height` */
    actual open fun dimensions() = arrayOf(width, height)

    /**
     * Returns this image as a [ByteArray] encoded as PNG. Recommended to use [writeImage].
     *
     * @see writeImage
     */
    actual open fun getBytes(): ByteArray = getBytes("PNG")

    /**
     * Returns this image as a [ByteArray] encoded as the specified format. Recommended to use [writeImage].
     *
     * @see writeImage
     * @see availableFormats
     */
    actual open fun getBytes(format: String): ByteArray =
        ByteArrayOutputStream().let {
            writeImage(it, format)
            it.toByteArray()
        }

    /**
     * Writes the QRCode image in the specified [format] and [quality] into the destination [OutputStream].
     *
     * For app stability reasons if the specified [format] doesn't exist it'll be defaulted to [PNG].
     *
     * >**Note:** Please note that `JPG` is supported via the [JPEG] value, with an `E`.
     *
     * @see Bitmap.compress
     * @see availableFormats
     */
    open fun writeImage(destination: OutputStream, format: String = "PNG", quality: Int = 100) {
        val compressFormat = toCompressFormat(format)
        image.compress(compressFormat, quality.coerceIn(0, 100), destination)
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

    /**
     * Returns the available formats to be passed as parameters to [getBytes].
     *
     * @see CompressFormat
     * @see CompressFormat.PNG
     * @see CompressFormat.JPEG
     */
    actual open fun availableFormats(): Array<String> = AVAILABLE_FORMATS

    /** Returns the [Bitmap] object being worked upon. */
    actual open fun nativeImage(): Any = image

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    actual open fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int, thickness: Double) {
        canvas.drawLine(
            (x1 + customCanvasOffsetX).toFloat(),
            (y1 + customCanvasOffsetY).toFloat(),
            (x2 + customCanvasOffsetX).toFloat(),
            (y2 + customCanvasOffsetY).toFloat(),
            paintFromCache(color, STROKE, thickness),
        )
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        val halfThickness = (thickness / 2.0).roundToInt()
        val rect = Rect(
            x + halfThickness + customCanvasOffsetX,
            y + halfThickness + customCanvasOffsetY,
            x + width - halfThickness + customCanvasOffsetX,
            y + height - halfThickness + customCanvasOffsetY,
        )
        canvas.drawRect(rect, paintFromCache(color, STROKE, thickness))
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawRect(
            Rect(
                x + customCanvasOffsetX,
                y + customCanvasOffsetY,
                x + width + customCanvasOffsetX,
                y + height + customCanvasOffsetY,
            ),
            paintFromCache(color),
        )
    }

    /** Fill the whole area of this canvas with the specified [color]. */
    actual open fun fill(color: Int) {
        fillRect(0, 0, width, height, color)
    }

    /**
     * Draw the edges of a round rectangle starting at point `(x,y)` and having `width` by `height`
     * with edges that are `borderRadius` pixels round (almost like CSS).
     *
     * If it helps, these would _in theory_ draw the same thing:
     *
     * ```
     * // CSS
     * .roundRect {
     *     width: 100px;
     *     height: 100px;
     *     border-radius: 5px;
     * }
     *
     * // Kotlin
     * drawRoundRect(0, 0, 100, 100, 5)
     * ```
     *
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    actual open fun drawRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
        thickness: Double,
    ) {
        val halfThickness = (thickness / 2.0).roundToInt()

        canvas.drawRoundRect(
            buildRectF(x + halfThickness, y + halfThickness, width - halfThickness * 2, height - halfThickness * 2),
            borderRadius.toFloat(),
            borderRadius.toFloat(),
            paintFromCache(color, STROKE, thickness),
        )
    }

    /**
     * Fills the round rectangle starting at point `(x,y)` and having `width` by `height`
     * with edges that are `borderRadius` pixels round (almost like CSS).
     *
     * If it helps, these would _in theory_ draw the same thing:
     *
     * ```
     * // CSS
     * .roundRect {
     *     width: 100px;
     *     height: 100px;
     *     border-radius: 5px;
     * }
     *
     * // Kotlin
     * drawRoundRect(0, 0, 100, 100, 5)
     * ```
     *
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    actual open fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        canvas.drawRoundRect(
            buildRectF(x, y, width, height),
            borderRadius.toFloat(),
            borderRadius.toFloat(),
            paintFromCache(color),
        )
    }

    /**
     * Draw the edges of an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     */
    actual fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        canvas.drawOval(
            buildRectF(x, y, width, height),
            paintFromCache(color, STROKE, thickness),
        )
    }

    /**
     * Fills an ellipse (aka "a circle") which occupies the area `(x,y,width,height)`
     *
     */
    actual fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        canvas.drawOval(
            buildRectF(x, y, width, height),
            paintFromCache(color),
        )
    }

    /**
     * Reads the specified image from [rawData] and draws it at `(x,y)`
     */
    actual fun drawImage(rawData: ByteArray?, x: Int, y: Int) {
        if (rawData != null && rawData.isNotEmpty()) { // NOSONAR
            val imgBitmap = BitmapFactory.decodeByteArray(rawData, 0, rawData.size)
            drawImage(imgBitmap, x, y)
        }
    }

    /**
     * Draws a [Bitmap] at the specified `(x,y)`
     */
    open fun drawImage(img: Bitmap, x: Int, y: Int) {
        changed = true
        canvas.drawBitmap(img, x.toFloat(), y.toFloat(), null)
    }
}
