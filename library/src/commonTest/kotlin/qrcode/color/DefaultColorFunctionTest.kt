package qrcode.color

import io.github.oshai.kotlinlogging.KotlinLogging
import io.kotest.matchers.shouldBe
import qrcode.QRCode
import qrcode.assertDoesNotThrow
import qrcode.randomInt
import qrcode.randomOneOf
import qrcode.toColorHex
import kotlin.test.BeforeTest
import kotlin.test.Test

class DefaultColorFunctionTest {
    companion object {
        private val TEST_FOREGROUND: Int = randomOneOf(Colors.BLACK, Colors.RED, Colors.GREEN, Colors.BLUE)
        private val TEST_BACKGROUND: Int = randomOneOf(Colors.WHITE, Colors.CRIMSON, Colors.FOREST_GREEN, Colors.AQUA)
    }

    private val logger = KotlinLogging.logger {}

    private lateinit var underTest: DefaultColorFunction

    @BeforeTest
    fun setup() {
        underTest = DefaultColorFunction(foreground = TEST_FOREGROUND, background = TEST_BACKGROUND)
    }

    @Test
    fun `GIVEN any space on any QRCode WHEN fg is called THEN foreground color is returned`() {
        // GIVEN
        val testQRCode = QRCode("Test")
        val testRow = randomInt(until = 100)
        val testCol = randomInt(until = 100)

        logger.info { "Testing fg() with row=$testRow, col=$testCol - Expected to be $TEST_FOREGROUND (${TEST_FOREGROUND.toColorHex()})" }

        // WHEN
        val result = assertDoesNotThrow {
            underTest.fg(testRow, testCol, qrCode = testQRCode, qrCodeGraphics = testQRCode.graphics)
        }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe TEST_FOREGROUND
    }

    @Test
    fun `GIVEN any space on any QRCode WHEN bg is called THEN background color is returned`() {
        // GIVEN
        val testQRCode = QRCode("Test")
        val testRow = randomInt(until = 100)
        val testCol = randomInt(until = 100)

        logger.info { "Testing bg() with row=$testRow, col=$testCol - Expected to be $TEST_BACKGROUND (${TEST_BACKGROUND.toColorHex()})" }

        // WHEN
        val result = assertDoesNotThrow {
            underTest.bg(testRow, testCol, qrCode = testQRCode, qrCodeGraphics = testQRCode.graphics)
        }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe TEST_BACKGROUND
    }
}
