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

        val (result, encoding) = assertDoesNotThrow {
            val encode = underTest.encode()
            Pair(underTest.render(), encode)
        }

        // println("-[ Our Matrix ]----------------")
        // printMatrix(encoding)
        // println("-[ Ref Matrix ]----------------")
        // printMatrix(javaQRCode.modules)

        println("------------------------------------------------------------------")

        println(javaQRCode.qrDataList)

        println("------------------------------------------------------------------")
        println(javaQRCode)
        println(underTest)

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

    private fun printMatrix(matrix: Array<Array<Boolean?>>) {
        matrix.forEach { rowArray ->
            rowArray.forEach {
                when (it) {
                    true -> print("1")
                    false -> print("0")
                    null -> print(" ")
                }
            }

            println()
        }
    }
}
