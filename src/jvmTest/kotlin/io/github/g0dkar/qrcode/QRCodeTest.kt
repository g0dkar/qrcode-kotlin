package io.github.g0dkar.qrcode

import com.d_project.qrcode.Mode
import io.github.g0dkar.qrcode.render.Colors
import io.kotest.core.spec.style.FunSpec
import java.awt.image.BufferedImage

class QRCodeTest : FunSpec({
    context("QRCode Rendering") {
        context("data is numbers") {
            test("default params") {
                val input = "123456"
                val javaQRCode = generateJavaQRCode(input)
                val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, Colors.RED)

                val underTest = QRCode(input)

                val result = underTest.render(darkColor = Colors.RED)

                val resultImage = result.nativeImage() as BufferedImage

                resultImage shouldHaveSameDimensionsAs expectedImage
                resultImage shouldBeSameImageAs expectedImage
            }

            test("explicitly as string") {
                val input = "123456"
                val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
                val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, Colors.RED)

                val underTest = QRCode(input, dataType = QRCodeDataType.DEFAULT)

                val result = underTest.render(darkColor = Colors.RED)

                val resultImage = result.nativeImage() as BufferedImage

                resultImage shouldHaveSameDimensionsAs expectedImage
                resultImage shouldBeSameImageAs expectedImage
            }
        }

        test("data is string") {
            val input = "Test!"
            val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
            val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, Colors.RED)

            val underTest = QRCode(input)

            val result = underTest.render(darkColor = Colors.RED)

            val resultImage = result.nativeImage() as BufferedImage

            resultImage shouldHaveSameDimensionsAs expectedImage
            resultImage shouldBeSameImageAs expectedImage
        }
    }

    context("Colors") {
        context("foreground") {
            Colors.allColors().forEach { (name, color) ->
                test(name) {
                    val input = "Test!"
                    val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
                    val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, color)

                    val underTest = QRCode(input)

                    val result = underTest.render(darkColor = color)

                    val resultImage = result.nativeImage() as BufferedImage

                    resultImage shouldHaveSameDimensionsAs expectedImage
                    resultImage shouldBeSameImageAs expectedImage
                }
            }
        }

        context("background") {
            Colors.allColors().forEach { (name, color) ->
                test(name) {
                    val input = "Test!"
                    val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
                    val expectedImage = javaQRCode.createImage(25, 0, color, Colors.RED)

                    val underTest = QRCode(input)

                    val result = underTest.render(brightColor = color, darkColor = Colors.RED)

                    val resultImage = result.nativeImage() as BufferedImage

                    resultImage shouldHaveSameDimensionsAs expectedImage
                    resultImage shouldBeSameImageAs expectedImage
                }
            }
        }
    }
})

private fun generateJavaQRCode(
    data: String,
    ecl: Int = com.d_project.qrcode.ErrorCorrectionLevel.M,
    type: Int = 1,
    mode: Int = QRCode.typeForDataAndECL(data, ErrorCorrectionLevel.values().first { it.value == ecl })
): com.d_project.qrcode.QRCode =
    com.d_project.qrcode.QRCode().apply {
        errorCorrectionLevel = ecl
        typeNumber = type
        addData(data, mode)
        make(false, 0)
    }
