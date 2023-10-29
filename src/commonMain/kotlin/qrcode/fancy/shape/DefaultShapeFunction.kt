package qrcode.fancy.shape

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import qrcode.QRCode.Companion.DEFAULT_CELL_SIZE
import qrcode.fancy.color.QRCodeColorFunction
import qrcode.internals.QRCodeSquare
import qrcode.internals.QRCodeSquareType.POSITION_PROBE
import qrcode.render.QRCodeGraphics

/**
 *
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
open class DefaultShapeFunction(val squareSize: Int = DEFAULT_CELL_SIZE, innerSpace: Int = 1) : QRCodeShapeFunction {
    private val innerSpacing = innerSpace.coerceIn(0..(squareSize / 2))

    override fun renderSquare(
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics,
    ) {
        squareCanvas.fill(colorFn.bg(square.row, square.col))

        if (square.dark) {
            fillRect(
                innerSpacing,
                innerSpacing,
                squareSize - innerSpacing * 2,
                squareSize - innerSpacing * 2,
                colorFn.fg(square.row, square.col),
                squareCanvas
            )
        }
    }

    override fun renderControlSquare(
        colorFn: QRCodeColorFunction,
        square: QRCodeSquare,
        squareCanvas: QRCodeGraphics,
        canvas: QRCodeGraphics
    ) {
        val bg = colorFn.bg(square.row, square.col)
        val fg = colorFn.fg(square.row, square.col)
        val size = squareSize * square.rowSize
        val startX = square.absoluteX(squareSize)
        val startY = square.absoluteY(squareSize)

        when (square.squareInfo.type) {
            POSITION_PROBE -> {
                val margin = colorFn.margin(square.row, square.col)

                // Fill the area of the whole square
                canvas.fillRect(startX, startY, size + squareSize * 2, size + squareSize * 2, margin)

                // Draw outer square
                drawRect(
                    startX + squareSize + innerSpacing,
                    startY + squareSize + innerSpacing,
                    size - innerSpacing * 2,
                    size - innerSpacing * 2,
                    fg,
                    squareSize.toDouble(),
                    canvas
                )

                // Draw inner square
                fillRect(
                    startX + squareSize + squareSize * 2,
                    startY + squareSize + squareSize * 2,
                    size - squareSize * 4,
                    size - squareSize * 4,
                    fg,
                    canvas
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
                canvas
            )
        }
    }

    /**
     * The function to actually draw a square. Can be extended to easily have new Shape types :)
     */
    open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int, canvas: QRCodeGraphics) {
        canvas.fillRect(x, y, width, height, color)
    }

    open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double, canvas: QRCodeGraphics) {
        canvas.drawRect(x, y, width, height, color, thickness)
    }
}
