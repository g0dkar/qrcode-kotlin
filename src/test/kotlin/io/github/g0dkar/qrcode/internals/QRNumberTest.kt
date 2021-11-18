package io.github.g0dkar.qrcode.internals

import org.junit.jupiter.api.Assertions.assertArrayEquals
import org.junit.jupiter.api.Assertions.assertDoesNotThrow
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

internal class QRNumberTest {
    @Test
    fun `write - zero`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        val expectedLengthInBits = 4

        val underTest = QRNumber("0")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - one`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        val expectedLengthInBits = 4

        val underTest = QRNumber("1")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - multiple digits`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(
                30,
                192,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            )
        val expectedLengthInBits = 10

        val underTest = QRNumber("123")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - multiple digits 2`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(
                30,
                220,
                135,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            )
        val expectedLengthInBits = 24

        val underTest = QRNumber("1234567")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - multiple digits 3`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(
                230,
                149,
                19,
                46,
                173,
                119,
                100,
                71,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            )
        val expectedLengthInBits = 64

        val underTest = QRNumber("9223372036854775807")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - empty string`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        val expectedLengthInBits = 0

        val underTest = QRNumber("")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - negative numbers - minus one`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        val expectedLengthInBits = 7

        val underTest = QRNumber("-1")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - negative numbers - multiple digits`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(
                253,
                12,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            )
        val expectedLengthInBits = 14

        val underTest = QRNumber("-123")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - negative numbers - multiple digits 2`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(
                253,
                21,
                152,
                96,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            )
        val expectedLengthInBits = 27

        val underTest = QRNumber("-1234567")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        println(testBuffer.buffer.joinToString())
        println(testBuffer.lengthInBits)

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }

    @Test
    fun `write - negative numbers - multiple digits 3`() {
        val testBuffer = BitBuffer()
        val expectedBufferData =
            intArrayOf(
                233,
                14,
                155,
                65,
                112,
                136,
                239,
                96,
                224,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            )
        val expectedLengthInBits = 67

        val underTest = QRNumber("-9223372036854775807")

        assertDoesNotThrow {
            underTest.write(testBuffer)
        }

        assertArrayEquals(expectedBufferData, testBuffer.buffer, "Data is different")
        assertEquals(expectedLengthInBits, testBuffer.lengthInBits, "Length is not equals")
    }
}
