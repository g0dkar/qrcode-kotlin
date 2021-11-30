package io.github.g0dkar.qrcode

import com.d_project.qrcode.Mode
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow

internal class QRCodeTest {

    @Test
    fun `render - numbers - as numbers`() {
        val input = "123456"
        val javaQRCode = generateJavaQRCode(input)
        val expectedImage = javaQRCode.createImage(25, 0)

        val underTest = QRCode(input)

        val result = assertDoesNotThrow {
            underTest.render()
        }

        result shouldHaveSameDimensionsAs expectedImage
        result shouldBeSameImageAs expectedImage
    }

    @Test
    fun `render - numbers - as string`() {
        val input = "123456"
        val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
        val expectedImage = javaQRCode.createImage(25, 0)

        val underTest = QRCode(input, dataType = QRCodeDataType.DEFAULT)

        val result = assertDoesNotThrow {
            underTest.render()
        }

        result shouldHaveSameDimensionsAs expectedImage
        result shouldBeSameImageAs expectedImage
    }

    @Test
    fun `render - strings - as string`() {
        val input = "Test!"
        val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
        val expectedImage = javaQRCode.createImage(25, 0)

        val underTest = QRCode(input)

        val result = assertDoesNotThrow {
            underTest.render()
        }

        result shouldHaveSameDimensionsAs expectedImage
        result shouldBeSameImageAs expectedImage
    }

    private fun generateJavaQRCode(
        data: String,
        ecl: Int = com.d_project.qrcode.ErrorCorrectionLevel.M,
        type: Int = 1,
        mode: Int = QRCode.typeForDataAndECL(data, ErrorCorrectionLevel.values().first { it.value == ecl }),
    ): com.d_project.qrcode.QRCode =
        com.d_project.qrcode.QRCode().apply {
            errorCorrectionLevel = ecl
            typeNumber = type
            addData(data, mode)
            make(false, 0)
        }
}
