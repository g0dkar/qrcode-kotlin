package io.github.g0dkar.qrcode.render

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import java.awt.Color

class ColorsTest : FunSpec({

    context("CSS") {
        test("red") {
            val colorCode = "#cc0000"
            val expected = awtColor(colorCode).rgb

            val color = Colors.css(colorCode)

            color shouldBe expected
        }

        test("green") {
            val colorCode = "#00cc00"
            val expected = awtColor(colorCode).rgb

            val color = Colors.css(colorCode)

            color shouldBe expected
        }

        test("blue") {
            val colorCode = "#0000cc"
            val expected = awtColor(colorCode).rgb

            val color = Colors.css(colorCode)

            color shouldBe expected
        }

        test("rgb") {
            val colorCode = "#aabbcc"
            val expected = awtColor(colorCode).rgb

            val color = Colors.css(colorCode)

            color shouldBe expected
        }
    }

    context("RGBA") {
        test("without alpha") {
            val colorCode = "#010203"
            val expected = awtColor(colorCode).rgb

            val color = Colors.rgba(1, 2, 3)

            color shouldBe expected
        }

        test("with alpha") {
            val colorCode = "#010203"
            val expected = awtColor(colorCode, 50).rgb

            val color = Colors.rgba(1, 2, 3, 50)

            color shouldBe expected
        }
    }

    context("getRGBA") {
        test("without alpha") {
            val colorCode = "#010203"
            val color = Colors.css(colorCode)
            val expected = awtColor(colorCode)
            val expectedRed = expected.red
            val expectedGreen = expected.green
            val expectedBlue = expected.blue

            val (red, green, blue) = Colors.getRGBA(color)

            red shouldBe expectedRed
            green shouldBe expectedGreen
            blue shouldBe expectedBlue
        }

        test("with alpha") {
            val colorCode = "#010203"
            val color = Colors.withAlpha(Colors.css(colorCode), 50)
            val expected = awtColor(colorCode, 50)
            val expectedRed = expected.red
            val expectedGreen = expected.green
            val expectedBlue = expected.blue
            val expectedAlpha = expected.alpha

            val (red, green, blue, alpha) = Colors.getRGBA(color)

            red shouldBe expectedRed
            green shouldBe expectedGreen
            blue shouldBe expectedBlue
            alpha shouldBe expectedAlpha
        }
    }

    test("withAlpha - set alpha to color") {
        val colorCode = "#010203"
        val color = Colors.css(colorCode)
        val expected = awtColor(colorCode, 50).rgb

        val result = Colors.withAlpha(color, 50)

        result shouldNotBe color
        result shouldBe expected
    }
})

private fun awtColor(string: String, alpha: Int? = null): Color =
    Color.decode("0x${string.substring(1)}")
        .let {
            if (alpha != null) {
                Color(it.red, it.green, it.blue, alpha)
            } else {
                it
            }
        }
