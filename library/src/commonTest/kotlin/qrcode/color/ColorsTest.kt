package qrcode.color

import io.github.oshai.kotlinlogging.KotlinLogging
import io.kotest.matchers.shouldBe
import qrcode.assertDoesNotThrow
import qrcode.random
import qrcode.randomHexDigits
import kotlin.test.Test

class ColorsTest {
    private val logger = KotlinLogging.logger {}

    @Test
    fun `GIVEN a css-style color WHEN css THEN correct Int color is returned`() {
        // GIVEN
        val randomColor = randomHexDigits(6)
        val testColor = "#$randomColor"
        val expectedColor: Int = (randomColor.toLong(16) + 0xFF_000000).toInt() // 0xFF (alpha) + <same-as-css-color>

        logger.info { "Testing CSS Color Value: $testColor..." }

        // WHEN
        val result = assertDoesNotThrow { Colors.css(testColor) }

        // THEN
        result shouldBe expectedColor
    }

    @Test
    fun `GIVEN only 3 ints WHEN rgba THEN correct Int color is returned`() {
        // GIVEN
        val r = random() // NOTE: Always reuse the same random number generator on a given test
        val (testR, testG, testB) = List(3) { r.nextInt(0, 0x100) }
        val colorString = "${testR.toString(16)}${testG.toString(16)}${testB.toString(16)}"
        val expectedColor: Int = "FF$colorString".toLong(16).toInt()

        logger.info { "Testing RGBA Color Value: rgba($testR, $testG, $testB)..." }
        logger.info { "Expected Color: 0x$colorString" }

        // WHEN
        val result = assertDoesNotThrow { Colors.rgba(r = testR, g = testG, b = testB) }

        // THEN
        result shouldBe expectedColor
    }

    @Test
    fun `GIVEN 3 ints and an alpha value WHEN rgba THEN correct Int color is returned`() {
        // GIVEN
        val r = random() // NOTE: Always reuse the same random number generator on a given test
        val (testR, testG, testB, testA) = List(4) { r.nextInt(0, 0x100) }
        val colorString = "${testA.toString(16)}${testR.toString(16)}${testG.toString(16)}${testB.toString(16)}"
        val expectedColor: Int = colorString.toLong(16).toInt()

        logger.info { "Testing RGBA Color Value: rgba($testR, $testG, $testB, $testA)..." }
        logger.info { "Expected Color: 0x$colorString" }

        // WHEN
        val result = assertDoesNotThrow { Colors.rgba(r = testR, g = testG, b = testB, a = testA) }

        // THEN
        result shouldBe expectedColor
    }
}
