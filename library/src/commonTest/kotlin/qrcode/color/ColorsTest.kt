package qrcode.color

import io.kotest.matchers.shouldBe
import qrcode.assertDoesNotThrow
import qrcode.randomHexDigits
import kotlin.test.Test

class ColorsTest {
    @Test
    fun `GIVEN a css-style color WHEN css THEN correct Int color is returned`() {
        // GIVEN
        val randomColor = randomHexDigits(6)
        val testColor = "#$randomColor"
        val expectedColor: Int = (randomColor.toLong(16) + 0xFF_000000).toInt() // 0xFF (alpha) + <same-as-css-color>

        println("[Colors.css() Test] Testing Color Value: $testColor...")

        // WHEN
        val result = assertDoesNotThrow { Colors.css(testColor) }

        // THEN
        result shouldBe expectedColor
    }
}
