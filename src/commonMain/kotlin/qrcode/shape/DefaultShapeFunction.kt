package qrcode.shape

import qrcode.QRCode
import qrcode.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquare
import qrcode.internals.QRCodeSquareType.MARGIN
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.raw.QRCodeProcessor.Companion.DEFAULT_CELL_SIZE
import qrcode.render.QRCodeGraphics
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 *
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
open class DefaultShapeFunction(
    squareSize: Int = DEFAULT_CELL_SIZE,
    val innerSpace: Int = 1,
) : QRCodeShapeFunction {
    private var innerSpacing = innerSpace.coerceIn(0..(squareSize / 2))
    var squareSize: Int = squareSize
        set(value) {
            resize(value)
        }

    override fun resize(newSquareSize: Int) {
        innerSpacing = innerSpace.coerceIn(0..(squareSize / 2))
    }

    override fun renderSquare(
        x: Int,
        y: Int,
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        canvas: QRCodeGraphics,
        qrCode: QRCode,
    ) {
        val bg = colorFn.bg(square.row, square.col, qrCode, canvas)
        val fg = colorFn.fg(square.row, square.col, qrCode, canvas)

        if (square.squareInfo.type == MARGIN) {
            val margin = colorFn.margin(square.row, square.col, qrCode, canvas)
            canvas.fill(margin)
        } else {
            val color = if (square.dark) fg else bg

            fillRect(
                x + innerSpacing,
                y + innerSpacing,
                squareSize - innerSpacing * 2,
                squareSize - innerSpacing * 2,
                color,
                canvas,
            )
        }
    }

    override fun renderControlSquare(
        xOffset: Int,
        yOffset: Int,
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        canvas: QRCodeGraphics,
        qrCode: QRCode,
    ) {
        val actualSquare = square.parent ?: square
        val bg = colorFn.bg(actualSquare.row, actualSquare.col, qrCode, canvas)
        val fg = colorFn.fg(actualSquare.row, actualSquare.col, qrCode, canvas)
        val size = squareSize * actualSquare.rowSize
        val startX = xOffset + actualSquare.absoluteX(squareSize)
        val startY = yOffset + actualSquare.absoluteY(squareSize)

        when (actualSquare.squareInfo.type) {
            POSITION_PROBE -> {
                val margin = colorFn.margin(actualSquare.row, actualSquare.col, qrCode, canvas)

                // Fill the area of the whole square
                canvas.fillRect(startX, startY, size + squareSize * 2, size + squareSize * 2, margin)

                // Draw outer square
                drawRect(
                    startX + innerSpacing,
                    startY + innerSpacing,
                    size - innerSpacing * 2,
                    size - innerSpacing * 2,
                    fg,
                    squareSize.toDouble(),
                    canvas,
                )

                // Draw inner square
                fillRect(
                    startX + squareSize * 2,
                    startY + squareSize * 2,
                    size - squareSize * 4,
                    size - squareSize * 4,
                    fg,
                    canvas,
                )
            }

            else -> {
                // Always a 5x5 square at (x, y)
                canvas.fillRect(startX, startY, size, size, bg)

                // 1st line
                drawSquaresLine(startX, startY, 5, 1, fg, canvas)

                // 2nd line
                drawSquaresLine(startX, startY + squareSize, 5, 4, fg, canvas)

                // 3rd line
                drawSquaresLine(startX, startY + squareSize * 2, 5, 2, fg, canvas)

                // 4th line
                drawSquaresLine(startX, startY + squareSize * 3, 5, 4, fg, canvas)

                // 5th line
                drawSquaresLine(startX, startY + squareSize * 4, 5, 1, fg, canvas)
            }
        }
    }

    private fun drawSquaresLine(x: Int, y: Int, amount: Int, skip: Int, color: Int, canvas: QRCodeGraphics) {
        for (i in 0 until amount step skip) {
            fillRect(
                x + (squareSize * i) + innerSpacing,
                y + innerSpacing,
                squareSize - innerSpacing * 2,
                squareSize - innerSpacing * 2,
                color,
                canvas,
            )
        }
    }

    /**
     * The function to actually draw a filled cell. Extend this to easily create your own shape :)
     *
     * Used to draw ALL cells of the QRCode except the outline of the larger ones on the edges.
     */
    open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int, canvas: QRCodeGraphics) {
        canvas.fillRect(x, y, width, height, color)
    }

    /**
     * The function to actually draw the outline of a cell. Extend this to easily create your own shape :)
     *
     * ONLY used to draw those larger squares on the edges of the QRCode.
     */
    open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double, canvas: QRCodeGraphics) {
        canvas.drawRect(x, y, width, height, color, thickness)
    }
}
