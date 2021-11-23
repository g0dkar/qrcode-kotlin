package io.github.g0dkar.qrcode.internals

import java.awt.Color
import java.awt.image.BufferedImage
import java.nio.file.Paths
import javax.imageio.ImageIO

object Helper {
    @JvmStatic
    fun saveState(name: String, data: Array<Array<Boolean?>>, cellSize: Int = 0) {
        val TRANSPARENT = Color(0, 0, 0, 0)

        val rows = data.size
        val columns = data[0].size
        val cs = 5

        val width = columns * cs
        val height = rows * cs

        val image = BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB)
        val graphics = image.createGraphics()

        data.forEachIndexed { row, rowData ->
            rowData.forEachIndexed { column, data ->
                val color = when (data) {
                    true -> Color.black
                    false -> Color.white
                    null -> TRANSPARENT
                }

                graphics.color = color
                graphics.fillRect(column * cs, row * cs, cs, cs)
            }
        }

        ImageIO.write(image, "PNG", Paths.get(System.getProperty("user.home"), "test", "$name.png").toFile())
    }
}
