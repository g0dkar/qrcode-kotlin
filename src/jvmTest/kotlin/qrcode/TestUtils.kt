@file:JvmName("TestUtils")
package qrcode

import io.kotest.matchers.Matcher
import io.kotest.matchers.MatcherResult
import io.kotest.matchers.should
import java.awt.Color
import java.awt.Point
import java.awt.image.BufferedImage
import java.io.File
import java.nio.file.Paths
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import javax.imageio.ImageIO

private var testNum = 1

/**
 * Check if two [BufferedImage] have the same width and height.
 */
fun haveSameDimensions(otherImage: BufferedImage) = object : Matcher<BufferedImage> {
    override fun test(value: BufferedImage) = MatcherResult(
        value.width == otherImage.width && value.height == otherImage.height,
        { "Image should be ${value.width}x${value.height}" },
        { "Image should not be ${value.width}x${value.height}" }
    )
}

infix fun BufferedImage.shouldHaveSameDimensionsAs(otherImage: BufferedImage) =
    this should haveSameDimensions(otherImage)

/**
 * Check if two [BufferedImage] are pixel-equal to each other. They are expected to be of same width and height.
 */
fun haveSamePixelsAs(otherImage: BufferedImage) = object : Matcher<BufferedImage> {
    private fun printRGBA(rgb: Int): String = Color(rgb).let { "rgba(${it.red}, ${it.green}, ${it.blue}, ${it.alpha})" }

    private fun saveImages(image1: BufferedImage, image2: BufferedImage): File {
        try {
            val gap = 25
            val now = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"))
            val file = Paths.get(System.getProperty("user.home"), "imageCompare-${testNum++}-$now.png").toFile()
            val compareImage = BufferedImage(
                image1.width + image2.width + gap,
                image1.height.coerceAtLeast(image2.height),
                image1.type
            )
            val graphics = compareImage.createGraphics()

            graphics.color = Color.YELLOW
            graphics.background = Color.YELLOW
            graphics.fillRect(image1.width, 0, gap, compareImage.height)
            graphics.drawImage(image1, 0, 0, null)
            graphics.drawImage(image2, image1.width + gap, 0, null)
            graphics.dispose()

            ImageIO.write(compareImage, "PNG", file)

            return file
        } catch (e: Exception) {
            return File("ERROR_WHILE_SAVING_DIFF_IMAGE")
        }
    }

    private fun comparePixels(image1: BufferedImage, image2: BufferedImage): Triple<Boolean, Point?, Pair<Int, Int>?> {
        for (x in 0 until image1.width) {
            for (y in 0 until image1.height) {
                if (image1.getRGB(x, y) != image2.getRGB(x, y)) {
                    return Triple(false, Point(x, y), Pair(image1.getRGB(x, y), image2.getRGB(x, y)))
                }
            }
        }

        return Triple(true, null, null)
    }

    override fun test(value: BufferedImage) =
        comparePixels(value, otherImage)
            .let { (result, differentPixel, colorPair) ->
                MatcherResult(
                    result,
                    {
                        val file = saveImages(value, otherImage)
                        "Pixel at (${differentPixel!!.x}, ${differentPixel.y}) is different." +
                            " Expected: ${printRGBA(colorPair!!.first)}, Got: ${printRGBA(colorPair.second)}!" +
                            " Saved images at: $file"
                    },
                    {
                        val file = saveImages(value, otherImage)
                        "Images should not be pixel-equal but all pixels are the same RGB color!" +
                            " Saved images at: $file"
                    }
                )
            }
}

infix fun BufferedImage.shouldBeSameImageAs(otherImage: BufferedImage) = this should haveSamePixelsAs(otherImage)
