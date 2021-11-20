package io.github.g0dkar.qrcode

import io.kotest.matchers.Matcher
import io.kotest.matchers.MatcherResult
import io.kotest.matchers.should
import java.awt.Color
import java.awt.Point
import java.awt.image.BufferedImage
import java.io.File
import java.nio.file.Paths
import java.util.Random
import java.util.UUID
import javax.imageio.ImageIO

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

    private fun saveImages(image1: BufferedImage, image2: BufferedImage): Pair<File, File> {
        val files = Pair(
            Paths.get(System.getProperty("user.home"), "image1_${UUID.randomUUID()}.png").toFile(),
            Paths.get(System.getProperty("user.home"), "image2_${UUID.randomUUID()}.png").toFile(),
        )

        ImageIO.write(image1, "PNG", files.first)
        ImageIO.write(image2, "PNG", files.second)

        return files
    }

    private fun comparePixels(image1: BufferedImage, image2: BufferedImage): Triple<Boolean, Point?, Pair<Int, Int>?> {
        for (x in 0..image1.width) {
            for (y in 0..image1.height) {
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
                        val (file1, file2) = saveImages(value, otherImage)
                        "Pixel at (${differentPixel!!.x}, ${differentPixel.y}) is different." +
                            " Expected: ${printRGBA(colorPair!!.first)}, Got: ${printRGBA(colorPair.second)}!" +
                            " Saved images at: $file1 | $file2"
                    },
                    {
                        val (file1, file2) = saveImages(value, otherImage)
                        "Images should not be pixel-equal but all pixels are the same RGB color!" +
                            " Saved images at: $file1 | $file2"
                    }
                )
            }
}

infix fun BufferedImage.shouldBeSameImageAs(otherImage: BufferedImage) = this should haveSamePixelsAs(otherImage)
