package qrcode.render

import android.graphics.Paint
import android.graphics.Paint.Style
import android.graphics.Paint.Style.FILL

abstract class AndroidGraphics<T>(x: Int, y: Int, width: Int, height: Int) {
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

    abstract fun reset()
    abstract fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int, thickness: Double)
    abstract fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double)
    abstract fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int)
    abstract fun fill(color: Int)
    abstract fun drawRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
        thickness: Double,
    )
    abstract fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int)
    abstract fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double)
    abstract fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int)
    abstract fun drawImage(rawData: ByteArray?, x: Int, y: Int)

    abstract fun getGraphics(): T
}
