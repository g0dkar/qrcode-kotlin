package io.github.g0dkar.qrcode.render

import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import java.awt.Color

internal class ColorsTest {

    @Test
    fun `css - red`() {
        val colorCode = "#cc0000"
        val expected = awtColor(colorCode).rgb

        val color = assertDoesNotThrow { Colors.css(colorCode) }

        color shouldBe expected
    }

    @Test
    fun `css - green`() {
        val colorCode = "#00cc00"
        val expected = awtColor(colorCode).rgb

        val color = assertDoesNotThrow { Colors.css(colorCode) }

        color shouldBe expected
    }

    @Test
    fun `css - blue`() {
        val colorCode = "#0000cc"
        val expected = awtColor(colorCode).rgb

        val color = assertDoesNotThrow { Colors.css(colorCode) }

        color shouldBe expected
    }

    @Test
    fun `css - rgb`() {
        val colorCode = "#aabbcc"
        val expected = awtColor(colorCode).rgb

        val color = assertDoesNotThrow { Colors.css(colorCode) }

        color shouldBe expected
    }

    @Test
    fun `rgba - without alpha`() {
        val colorCode = "#010203"
        val expected = awtColor(colorCode).rgb

        val color = assertDoesNotThrow { Colors.rgba(1, 2, 3) }

        color shouldBe expected
    }

    @Test
    fun `rgba - with alpha`() {
        val colorCode = "#010203"
        val expected = awtColor(colorCode, 50).rgb

        val color = assertDoesNotThrow { Colors.rgba(1, 2, 3, 50) }

        color shouldBe expected
    }

    @Test
    fun `getRGBA - without alpha`() {
        val colorCode = "#010203"
        val color = Colors.css(colorCode)
        val expected = awtColor(colorCode)
        val expectedRed = expected.red
        val expectedGreen = expected.green
        val expectedBlue = expected.blue

        val (red, green, blue) = assertDoesNotThrow { Colors.getRGBA(color) }

        red shouldBe expectedRed
        green shouldBe expectedGreen
        blue shouldBe expectedBlue
    }

    @Test
    fun `getRGBA - with alpha`() {
        val colorCode = "#010203"
        val color = Colors.withAlpha(Colors.css(colorCode), 50)
        val expected = awtColor(colorCode, 50)
        val expectedRed = expected.red
        val expectedGreen = expected.green
        val expectedBlue = expected.blue
        val expectedAlpha = expected.alpha

        val (red, green, blue, alpha) = assertDoesNotThrow { Colors.getRGBA(color) }

        red shouldBe expectedRed
        green shouldBe expectedGreen
        blue shouldBe expectedBlue
        alpha shouldBe expectedAlpha
    }

    @Test
    fun `withAlpha - set alpha to color`() {
        val colorCode = "#010203"
        val color = Colors.css(colorCode)
        val expected = awtColor(colorCode, 50).rgb

        val result = assertDoesNotThrow { Colors.withAlpha(color, 50) }

        result shouldNotBe color
        result shouldBe expected
    }

    private fun awtColor(string: String, alpha: Int? = null): Color =
        Color.decode("0x${string.substring(1)}")
            .let {
                if (alpha != null) {
                    Color(it.red, it.green, it.blue, alpha)
                } else {
                    it
                }
            }
}
