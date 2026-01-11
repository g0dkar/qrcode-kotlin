package qrcode.render.graphics

import android.graphics.Bitmap

interface AndroidDrawingInterface {
    fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int, thickness: Double)
    fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double)
    fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int)
    fun fill(color: Int)
    fun drawRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
        thickness: Double,
    )

    fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int)
    fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double)
    fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int)
    fun drawImage(rawData: ByteArray?, x: Int, y: Int)
    fun drawBitmap(img: Bitmap, x: Int, y: Int)
    fun nativeImage(): Any
    fun getBytes(format: String = "PNG", quality: Int = 100): ByteArray
}
