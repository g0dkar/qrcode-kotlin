package qrcode.color

import io.github.oshai.kotlinlogging.KotlinLogging
import io.kotest.matchers.shouldBe
import io.kotest.matchers.string.shouldContainIgnoringCase
import qrcode.assertDoesNotThrow
import qrcode.assertThrows
import qrcode.random
import qrcode.randomOneOf
import qrcode.toColorHex
import kotlin.test.BeforeTest
import kotlin.test.Test

class LinearGradientColorFunctionTest {
    companion object {
        private const val TEST_COLOR_START: Int = Colors.BLACK
        private const val TEST_COLOR_END: Int = Colors.WHITE

        // Halfway between BLACK (0) and WHITE (FFFFFF) at full alpha
        private const val TEST_COLOR_MID: Int = (0xFF808080).toInt()

        private val TEST_BACKGROUND: Int = randomOneOf(Colors.RED, Colors.GREEN, Colors.BLUE)
    }

    private val logger = KotlinLogging.logger {}

    private lateinit var underTest: LinearGradientColorFunction

    @BeforeTest
    fun setup() {
        underTest = LinearGradientColorFunction(
            startForegroundColor = TEST_COLOR_START,
            endForegroundColor = TEST_COLOR_END,
            background = TEST_BACKGROUND,
        )
    }

    @Test
    fun `GIVEN pct between 0 and 1 WHEN gradientColor is called THEN expected value between start and end is returned`() {
        // GIVEN
        val testPercentage = 0.5

        logger.info { "Testing gradient percentage: pct=$testPercentage, expected: ${TEST_COLOR_MID.toColorHex()}" }

        // WHEN
        val result = assertDoesNotThrow { underTest.gradientColor(testPercentage) }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe TEST_COLOR_MID
    }

    @Test
    fun `GIVEN pct at edge - 0 WHEN gradientColor is called THEN expected value is returned - start`() {
        // GIVEN
        val testPercentage = 0.0

        logger.info { "Testing gradient percentage: pct=$testPercentage, expected: ${TEST_COLOR_START.toColorHex()}" }

        // WHEN
        val result = assertDoesNotThrow { underTest.gradientColor(testPercentage) }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe TEST_COLOR_START
    }

    @Test
    fun `GIVEN pct at edge - 1 WHEN gradientColor is called THEN expected value is returned - end`() {
        // GIVEN
        val testPercentage = 1.0

        logger.info { "Testing gradient percentage: pct=$testPercentage, expected: ${TEST_COLOR_END.toColorHex()}" }

        // WHEN
        val result = assertDoesNotThrow { underTest.gradientColor(testPercentage) }

        // THEN
        logger.info { "Result: $result (${result.toColorHex()})" }
        result shouldBe TEST_COLOR_END
    }

    @Test
    fun `GIVEN pct out of bounds - lower WHEN gradientColor is called THEN exception is thrown`() {
        // GIVEN
        val testPercentage = 0.0 - random().nextDouble(from = 0.1, until = 2.0)

        logger.info { "Testing gradient percentage: pct=$testPercentage, expected: IllegalArgumentException" }

        // WHEN
        val result = assertThrows<IllegalArgumentException> { underTest.gradientColor(testPercentage) }

        // THEN
        logger.info { "Result: $result" }
        result.message shouldContainIgnoringCase "positionPercent must be between 0.0 and 1.0"
    }

    @Test
    fun `GIVEN pct out of bounds - upper WHEN gradientColor is called THEN exception is thrown`() {
        // GIVEN
        val testPercentage = 1.0 + random().nextDouble(from = 0.1, until = 2.0)

        logger.info { "Testing gradient percentage: pct=$testPercentage, expected: IllegalArgumentException" }

        // WHEN
        val result = assertThrows<IllegalArgumentException> { underTest.gradientColor(testPercentage) }

        // THEN
        logger.info { "Result: $result" }
        result.message shouldContainIgnoringCase "positionPercent must be between 0.0 and 1.0"
    }
}
