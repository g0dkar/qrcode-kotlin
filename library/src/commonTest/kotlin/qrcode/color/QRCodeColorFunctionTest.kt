package qrcode.color

import io.github.oshai.kotlinlogging.KotlinLogging
import io.kotest.matchers.shouldBe
import qrcode.QRCode
import qrcode.assertDoesNotThrow
import qrcode.internals.QRCodeSquare
import qrcode.randomOneOf
import qrcode.toColorHex
import kotlin.test.BeforeTest
import kotlin.test.Test

class QRCodeColorFunctionTest {
    companion object {
        private val TEST_FOREGROUND: Int = randomOneOf(Colors.BLACK, Colors.RED, Colors.GREEN, Colors.BLUE)
        private val TEST_BACKGROUND: Int = randomOneOf(Colors.WHITE, Colors.CRIMSON, Colors.FOREST_GREEN, Colors.AQUA)
    }

    private val logger = KotlinLogging.logger {}

    private lateinit var underTest: QRCodeColorFunction

    @BeforeTest
    fun setup() {
        underTest = DefaultColorFunction(foreground = TEST_FOREGROUND, background = TEST_BACKGROUND)
    }

    @Test
    fun `GIVEN a dark square WHEN colorFn is called THEN foreground color is returned`() {
        // GIVEN
        val testQRCodeSquareDark = true
        val testQRCode = QRCode("Test")
        val testQRCodeSquare = QRCodeSquare(testQRCodeSquareDark, 1, 1, 1)

        logger.info { "Testing colorFn() with qrCodeSquare=$testQRCodeSquare - Expected: ${TEST_FOREGROUND.toColorHex()}" }

        // WHEN
        val result = assertDoesNotThrow {
            underTest.colorFn(testQRCodeSquare, testQRCode, testQRCode.graphics)
        }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe TEST_FOREGROUND
    }

    @Test
    fun `GIVEN a clear square WHEN colorFn is called THEN foreground color is returned`() {
        // GIVEN
        val testQRCodeSquareDark = false
        val testQRCode = QRCode("Test")
        val testQRCodeSquare = QRCodeSquare(testQRCodeSquareDark, 1, 1, 1)

        logger.info { "Testing colorFn() with qrCodeSquare=$testQRCodeSquare - Expected: ${TEST_BACKGROUND.toColorHex()}" }

        // WHEN
        val result = assertDoesNotThrow {
            underTest.colorFn(testQRCodeSquare, testQRCode, testQRCode.graphics)
        }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe TEST_BACKGROUND
    }
}
