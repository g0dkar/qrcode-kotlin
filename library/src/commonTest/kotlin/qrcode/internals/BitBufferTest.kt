package qrcode.internals

import io.github.oshai.kotlinlogging.KotlinLogging
import io.kotest.matchers.shouldBe
import qrcode.assertDoesNotThrow
import kotlin.test.BeforeTest
import kotlin.test.Test

class BitBufferTest {
    private val logger = KotlinLogging.logger {}

    private lateinit var underTest: BitBuffer

    @BeforeTest
    fun setup() {
        underTest = BitBuffer()
    }

    @Test
    fun `GIVEN single bit - 0 WHEN put THEN buffer has expected value`() {
        // GIVEN
        val testBit = false

        logger.info { "Testing put() with data=$testBit..." }

        // WHEN
        assertDoesNotThrow { underTest.put(testBit) }

        logger.info { "Result: [bufferSize=${underTest.buffer.size}, lengthInBits=${underTest.lengthInBits}] $underTest" }

        // THEN
        underTest.toString() shouldBe "0"
        underTest.buffer.size shouldBe 32
        underTest.lengthInBits shouldBe 1
    }

    @Test
    fun `GIVEN single bit - 1 WHEN put THEN buffer has expected value`() {
        // GIVEN
        val testBit = true

        logger.info { "Testing put() with data=$testBit..." }

        // WHEN
        assertDoesNotThrow { underTest.put(testBit) }

        logger.info { "Result: [bufferSize=${underTest.buffer.size}, lengthInBits=${underTest.lengthInBits}] $underTest" }

        // THEN
        underTest.toString() shouldBe "1"
        underTest.buffer.size shouldBe 32
        underTest.lengthInBits shouldBe 1
    }

    @Test
    fun `GIVEN many bits WHEN put THEN buffer has expected value`() {
        // GIVEN
        val testBits = "110000001111111111101110" // 0xC0FFEE

        logger.info { "Testing put() with data=$testBits..." }

        // WHEN
        assertDoesNotThrow { underTest.writeString(testBits) }

        logger.info { "Result: [bufferSize=${underTest.buffer.size}, lengthInBits=${underTest.lengthInBits}] $underTest" }

        // THEN
        underTest.toString() shouldBe testBits
        underTest.buffer.size shouldBe 32
        underTest.lengthInBits shouldBe testBits.length
    }

    @Test
    fun `GIVEN huge string of bits WHEN put THEN buffer has grown to accommodate value as expected value`() {
        // GIVEN
        val testBits = "110000001111111111101110".repeat(20) // 0xC0FFEE repeated 20x

        logger.info { "Testing put() with data=$testBits..." }

        // WHEN
        assertDoesNotThrow { underTest.writeString(testBits) }

        logger.info { "Result: [bufferSize=${underTest.buffer.size}, lengthInBits=${underTest.lengthInBits}] $underTest" }

        // THEN
        underTest.toString() shouldBe testBits
        underTest.buffer.size shouldBe 64
        underTest.lengthInBits shouldBe testBits.length
    }

    private fun BitBuffer.writeString(s: String) {
        for (c in s) {
            put(c != '0')
        }
    }
}
