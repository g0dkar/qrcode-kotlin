package old

import qrcode.color.Colors
import qrcode.internals.QRCodeRegion.BOTTOM_LEFT_CORNER
import qrcode.internals.QRCodeRegion.BOTTOM_RIGHT_CORNER
import qrcode.internals.QRCodeRegion.TOP_LEFT_CORNER
import qrcode.internals.QRCodeRegion.TOP_RIGHT_CORNER
import qrcode.internals.QRCodeSquareType.MARGIN
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.raw.QRCodeProcessor
import qrcode.render.QRCodeGraphics
import java.io.FileOutputStream

class RoundQRCode {
    fun createQRCode(content: String, radius: Int = 15) {
        FileOutputStream("kotlin-round.png").use {
            QRCodeProcessor(content).renderShaded { cellData, canvas ->
                // Always paint it white to make sure there are no transparent pixels
                canvas.fill(Colors.WHITE)

                if (cellData.dark) {
                    when (cellData.squareInfo.type) {
                        POSITION_PROBE -> when (cellData.squareInfo.region) {
                            TOP_LEFT_CORNER -> drawTopLeftCorner(canvas)
                            TOP_RIGHT_CORNER -> drawTopRightCorner(canvas)
                            BOTTOM_LEFT_CORNER -> drawBottomLeftCorner(canvas)
                            BOTTOM_RIGHT_CORNER -> drawBottomRightCorner(canvas)
                            else -> canvas.fill(Colors.BLACK)
                        }

                        MARGIN -> canvas.fill(Colors.WHITE)
                        else -> canvas.fillRoundRect(0, 0, canvas.width, canvas.height, radius, Colors.BLACK)
                    }
                }
            }.writeImage(it)
        }
    }

    private fun size(canvas: QRCodeGraphics) = canvas.width * 4
    private fun circleSize(canvas: QRCodeGraphics): Int = (canvas.width * 1.8).toInt()

    private fun drawTopLeftCorner(canvas: QRCodeGraphics) {
        val size = size(canvas)
        val circleSize = circleSize(canvas)
        canvas.fillRoundRect(0, 0, size, size, circleSize, Colors.BLACK)
    }

    private fun drawTopRightCorner(canvas: QRCodeGraphics) {
        val size = size(canvas)
        val circleSize = circleSize(canvas)
        canvas.fillRoundRect(-size + canvas.width, 0, size, size, circleSize, Colors.BLACK)
    }

    private fun drawBottomLeftCorner(canvas: QRCodeGraphics) {
        val size = size(canvas)
        val circleSize = circleSize(canvas)
        canvas.fillRoundRect(0, -size + canvas.width, size, size, circleSize, Colors.BLACK)
    }

    private fun drawBottomRightCorner(canvas: QRCodeGraphics) {
        val size = size(canvas)
        val circleSize = circleSize(canvas)
        canvas.fillRoundRect(-size + canvas.width, -size + canvas.width, size, size, circleSize, Colors.BLACK)
    }
}

fun main() {
    RoundQRCode()
        .createQRCode("Hello, world!", 25)
}
