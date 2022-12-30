package io.github.g0dkar.qrcode.internals

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.shouldBe

class QRNumberTest : FunSpec({
    context("Edge Cases") {
        test("Empty String") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
            val expectedLengthInBits = 0

            val underTest = QRNumber("")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }
    }

    context("Positive Numbers") {
        test("0") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
            val expectedLengthInBits = 4

            val underTest = QRNumber("0")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }

        test("1") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
                .apply {
                    this[0] = 16
                }
            val expectedLengthInBits = 4

            val underTest = QRNumber("1")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }

        test("Multiple Digits 01") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
                .apply {
                    this[0] = 30
                    this[1] = 192
                }
            val expectedLengthInBits = 10

            val underTest = QRNumber("123")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }

        test("Multiple Digits 02") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
                .apply {
                    this[0] = 30
                    this[1] = 220
                    this[2] = 135
                }
            val expectedLengthInBits = 24

            val underTest = QRNumber("1234567")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }

        test("Multiple Digits 03") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
                .apply {
                    this[0] = 230
                    this[1] = 149
                    this[2] = 19
                    this[3] = 46
                    this[4] = 173
                    this[5] = 119
                    this[6] = 100
                    this[7] = 71
                }
            val expectedLengthInBits = 64

            val underTest = QRNumber("9223372036854775807")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }
    }

    context("Negative Numbers") {
        test("-1") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
                .apply {
                    this[0] = 254
                }
            val expectedLengthInBits = 7

            val underTest = QRNumber("-1")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }

        test("Multiple Digits 01") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
                .apply {
                    this[0] = 253
                    this[1] = 12
                }

            val expectedLengthInBits = 14

            val underTest = QRNumber("-123")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }

        test("Multiple Digits 02") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
                .apply {
                    this[0] = 253
                    this[1] = 21
                    this[2] = 152
                    this[3] = 96
                }
            val expectedLengthInBits = 27

            val underTest = QRNumber("-1234567")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }

        test("Multiple Digits 03") {
            val testBuffer = BitBuffer()
            val expectedBufferData = MutableList(32) { 0 }
                .apply {
                    this[0] = 233
                    this[1] = 14
                    this[2] = 155
                    this[3] = 65
                    this[4] = 112
                    this[5] = 136
                    this[6] = 239
                    this[7] = 96
                    this[8] = 224
                }
            val expectedLengthInBits = 67

            val underTest = QRNumber("-9223372036854775807")

            underTest.write(testBuffer)

            testBuffer.buffer.asList() shouldContainExactly expectedBufferData
            testBuffer.lengthInBits shouldBe expectedLengthInBits
        }
    }
})
