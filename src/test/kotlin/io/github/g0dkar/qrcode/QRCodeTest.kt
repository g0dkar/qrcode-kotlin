package io.github.g0dkar.qrcode

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

    private fun generateJavaQRCode(
        data: String,
        ecl: Int = com.d_project.qrcode.ErrorCorrectionLevel.M,
        mode: Int? = null,
        type: Int? = null,
    ): com.d_project.qrcode.QRCode =
        if (mode == null || type == null) {
            com.d_project.qrcode.QRCode.getMinimumQRCode(data, ecl)
        } else {
            com.d_project.qrcode.QRCode().apply {
                errorCorrectionLevel = ecl
                typeNumber = type
                addData(data, mode)
                make()
            }
        }
}
