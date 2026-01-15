package qrcode.color

import io.github.oshai.kotlinlogging.KotlinLogging
import io.kotest.matchers.shouldBe
import qrcode.assertDoesNotThrow
import qrcode.random
import qrcode.randomHexDigits
import qrcode.toColorHex
import kotlin.test.Test

class ColorsTest {
    private val logger = KotlinLogging.logger {}

    @Test
    fun `GIVEN a css-style color WHEN css THEN correct Int color is returned`() {
        // GIVEN
        val randomColor = randomHexDigits(6)
        val testColor = "#$randomColor"
        val expectedColor: Int = (randomColor.toLong(16) + 0xFF_000000).toInt() // 0xFF (alpha) + <same-as-css-color>

        logger.info { "Testing CSS Color Value: $testColor - Expected: ${expectedColor.toColorHex()} (int value = $expectedColor)" }

        // WHEN
        val result = assertDoesNotThrow { Colors.css(testColor) }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe expectedColor
    }

    @Test
    fun `GIVEN only 3 ints WHEN rgba THEN correct Int color is returned`() {
        // GIVEN
        val r = random() // NOTE: Always reuse the same random number generator on a given test
        val (testR, testG, testB) = List(3) { r.nextInt(0, 0x100) }
        val colorString = "${testR.hexDigit()}${testG.hexDigit()}${testB.hexDigit()}"
        val expectedColor: Int = "ff$colorString".toLong(16).toInt()

        logger.info { "Testing RGBA Color Value: rgba($testR, $testG, $testB) - Expected: 0xff$colorString (int value = $expectedColor)" }

        // WHEN
        val result = assertDoesNotThrow { Colors.rgba(r = testR, g = testG, b = testB) }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe expectedColor
    }

    @Test
    fun `GIVEN 3 ints and an alpha value WHEN rgba THEN correct Int color is returned`() {
        // GIVEN
        val r = random() // NOTE: Always reuse the same random number generator on a given test
        val (testR, testG, testB, testA) = List(4) { r.nextInt(0, 0x100) }
        val colorString = "${testA.hexDigit()}${testR.hexDigit()}${testG.hexDigit()}${testB.hexDigit()}"
        val expectedColor: Int = colorString.toLong(16).toInt()

        logger.info { "Testing RGBA Color Value: rgba($testR, $testG, $testB, $testA) - Expected: 0x$colorString (int value = $expectedColor)" }

        // WHEN
        val result = assertDoesNotThrow { Colors.rgba(r = testR, g = testG, b = testB, a = testA) }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe expectedColor
    }

    private fun Int.hexDigit() = toString(16).padStart(2, '0')
}
