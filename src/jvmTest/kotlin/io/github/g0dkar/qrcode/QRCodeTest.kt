package io.github.g0dkar.qrcode

import com.d_project.qrcode.Mode
import io.github.g0dkar.qrcode.render.Colors
import io.kotest.core.spec.style.FunSpec
import java.awt.image.BufferedImage
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource

class QRCodeTest : FunSpec({

    @Test
    fun `render - numbers - as numbers`() {
        val input = "123456"
        val javaQRCode = generateJavaQRCode(input)
        val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, Colors.RED)

        val underTest = QRCode(input)

        val result = assertDoesNotThrow {
            underTest.render(darkColor = Colors.RED)
        }

        val resultImage = result.nativeImage() as BufferedImage

        resultImage shouldHaveSameDimensionsAs expectedImage
        resultImage shouldBeSameImageAs expectedImage
    }

    @Test
    fun `render - numbers - as string`() {
        val input = "123456"
        val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
        val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, Colors.RED)

        val underTest = QRCode(input, dataType = QRCodeDataType.DEFAULT)

        val result = assertDoesNotThrow {
            underTest.render(darkColor = Colors.RED)
        }

        val resultImage = result.nativeImage() as BufferedImage

        resultImage shouldHaveSameDimensionsAs expectedImage
        resultImage shouldBeSameImageAs expectedImage
    }

    @Test
    fun `render - strings - as string`() {
        val input = "Test!"
        val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
        val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, Colors.RED)

        val underTest = QRCode(input)

        val result = assertDoesNotThrow {
            underTest.render(darkColor = Colors.RED)
        }

        val resultImage = result.nativeImage() as BufferedImage

        resultImage shouldHaveSameDimensionsAs expectedImage
        resultImage shouldBeSameImageAs expectedImage
    }

    @ParameterizedTest
    @ValueSource(
        ints = [
            Colors.ALICE_BLUE,
            Colors.ANTIQUE_WHITE,
            Colors.AQUA,
            Colors.AQUAMARINE,
            Colors.AZURE,
            Colors.BEIGE,
            Colors.BISQUE,
            Colors.BLACK,
            Colors.BLANCHED_ALMOND,
            Colors.BLUE,
            Colors.BLUE_VIOLET,
            Colors.BROWN,
            Colors.BURLY_WOOD,
            Colors.CADET_BLUE,
            Colors.CHARTREUSE,
            Colors.CHOCOLATE,
            Colors.CORAL,
            Colors.CORNFLOWER_BLUE,
            Colors.CORNSILK,
            Colors.CRIMSON,
            Colors.CYAN,
            Colors.DARK_BLUE,
            Colors.DARK_CYAN,
            Colors.DARK_GOLDEN_ROD,
            Colors.DARK_GRAY,
            Colors.DARK_GREY,
            Colors.DARK_GREEN,
            Colors.DARK_KHAKI,
            Colors.DARK_MAGENTA,
            Colors.DARK_OLIVE_GREEN,
            Colors.DARK_ORANGE,
            Colors.DARK_ORCHID,
            Colors.DARK_RED,
            Colors.DARK_SALMON,
            Colors.DARK_SEA_GREEN,
            Colors.DARK_SLATE_BLUE,
            Colors.DARK_SLATE_GRAY,
            Colors.DARK_SLATE_GREY,
            Colors.DARK_TURQUOISE,
            Colors.DARK_VIOLET,
            Colors.DEEP_PINK,
            Colors.DEEP_SKY_BLUE,
            Colors.DIM_GRAY,
            Colors.DIM_GREY,
            Colors.DODGER_BLUE,
            Colors.FIRE_BRICK,
            Colors.FLORAL_WHITE,
            Colors.FOREST_GREEN,
            Colors.FUCHSIA,
            Colors.GAINSBORO,
            Colors.GHOST_WHITE,
            Colors.GOLD,
            Colors.GOLDEN_ROD,
            Colors.GRAY,
            Colors.GREY,
            Colors.GREEN,
            Colors.GREEN_YELLOW,
            Colors.HONEY_DEW,
            Colors.HOT_PINK,
            Colors.INDIAN_RED,
            Colors.INDIGO,
            Colors.IVORY,
            Colors.KHAKI,
            Colors.LAVENDER,
            Colors.LAVENDER_BLUSH,
            Colors.LAWN_GREEN,
            Colors.LEMON_CHIFFON,
            Colors.LIGHT_BLUE,
            Colors.LIGHT_CORAL,
            Colors.LIGHT_CYAN,
            Colors.LIGHT_GOLDEN_ROD_YELLOW,
            Colors.LIGHT_GRAY,
            Colors.LIGHT_GREY,
            Colors.LIGHT_GREEN,
            Colors.LIGHT_PINK,
            Colors.LIGHT_SALMON,
            Colors.LIGHT_SEA_GREEN,
            Colors.LIGHT_SKY_BLUE,
            Colors.LIGHT_SLATE_GRAY,
            Colors.LIGHT_SLATE_GREY,
            Colors.LIGHT_STEEL_BLUE,
            Colors.LIGHT_YELLOW,
            Colors.LIME,
            Colors.LIME_GREEN,
            Colors.LINEN,
            Colors.MAGENTA,
            Colors.MAROON,
            Colors.MEDIUM_AQUA_MARINE,
            Colors.MEDIUM_BLUE,
            Colors.MEDIUM_ORCHID,
            Colors.MEDIUM_PURPLE,
            Colors.MEDIUM_SEA_GREEN,
            Colors.MEDIUM_SLATE_BLUE,
            Colors.MEDIUM_SPRING_GREEN,
            Colors.MEDIUM_TURQUOISE,
            Colors.MEDIUM_VIOLET_RED,
            Colors.MIDNIGHT_BLUE,
            Colors.MINT_CREAM,
            Colors.MISTY_ROSE,
            Colors.MOCCASIN,
            Colors.NAVAJO_WHITE,
            Colors.NAVY,
            Colors.OLD_LACE,
            Colors.OLIVE,
            Colors.OLIVE_DRAB,
            Colors.ORANGE,
            Colors.ORANGE_RED,
            Colors.ORCHID,
            Colors.PALE_GOLDEN_ROD,
            Colors.PALE_GREEN,
            Colors.PALE_TURQUOISE,
            Colors.PALE_VIOLET_RED,
            Colors.PAPAYA_WHIP,
            Colors.PEACH_PUFF,
            Colors.PERU,
            Colors.PINK,
            Colors.PLUM,
            Colors.POWDER_BLUE,
            Colors.PURPLE,
            Colors.REBECCA_PURPLE,
            Colors.RED,
            Colors.ROSY_BROWN,
            Colors.ROYAL_BLUE,
            Colors.SADDLE_BROWN,
            Colors.SALMON,
            Colors.SANDY_BROWN,
            Colors.SEA_GREEN,
            Colors.SEA_SHELL,
            Colors.SIENNA,
            Colors.SILVER,
            Colors.SKY_BLUE,
            Colors.SLATE_BLUE,
            Colors.SLATE_GRAY,
            Colors.SLATE_GREY,
            Colors.SNOW,
            Colors.SPRING_GREEN,
            Colors.STEEL_BLUE,
            Colors.TAN,
            Colors.TEAL,
            Colors.THISTLE,
            Colors.TOMATO,
            Colors.TURQUOISE,
            Colors.VIOLET,
            Colors.WHEAT,
            Colors.WHITE,
            Colors.WHITE_SMOKE,
            Colors.YELLOW,
            Colors.YELLOW_GREEN
        ]
    )
    fun `render - colors - foreground`(color: Int) {
        val input = "Test!"
        val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
        val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, color)

        val underTest = QRCode(input)

        val result = assertDoesNotThrow {
            underTest.render(darkColor = color)
        }

        val resultImage = result.nativeImage() as BufferedImage

        resultImage shouldHaveSameDimensionsAs expectedImage
        resultImage shouldBeSameImageAs expectedImage
    }

    @ParameterizedTest
    @ValueSource(
        ints = [
            Colors.ALICE_BLUE,
            Colors.ANTIQUE_WHITE,
            Colors.AQUA,
            Colors.AQUAMARINE,
            Colors.AZURE,
            Colors.BEIGE,
            Colors.BISQUE,
            Colors.BLACK,
            Colors.BLANCHED_ALMOND,
            Colors.BLUE,
            Colors.BLUE_VIOLET,
            Colors.BROWN,
            Colors.BURLY_WOOD,
            Colors.CADET_BLUE,
            Colors.CHARTREUSE,
            Colors.CHOCOLATE,
            Colors.CORAL,
            Colors.CORNFLOWER_BLUE,
            Colors.CORNSILK,
            Colors.CRIMSON,
            Colors.CYAN,
            Colors.DARK_BLUE,
            Colors.DARK_CYAN,
            Colors.DARK_GOLDEN_ROD,
            Colors.DARK_GRAY,
            Colors.DARK_GREY,
            Colors.DARK_GREEN,
            Colors.DARK_KHAKI,
            Colors.DARK_MAGENTA,
            Colors.DARK_OLIVE_GREEN,
            Colors.DARK_ORANGE,
            Colors.DARK_ORCHID,
            Colors.DARK_RED,
            Colors.DARK_SALMON,
            Colors.DARK_SEA_GREEN,
            Colors.DARK_SLATE_BLUE,
            Colors.DARK_SLATE_GRAY,
            Colors.DARK_SLATE_GREY,
            Colors.DARK_TURQUOISE,
            Colors.DARK_VIOLET,
            Colors.DEEP_PINK,
            Colors.DEEP_SKY_BLUE,
            Colors.DIM_GRAY,
            Colors.DIM_GREY,
            Colors.DODGER_BLUE,
            Colors.FIRE_BRICK,
            Colors.FLORAL_WHITE,
            Colors.FOREST_GREEN,
            Colors.FUCHSIA,
            Colors.GAINSBORO,
            Colors.GHOST_WHITE,
            Colors.GOLD,
            Colors.GOLDEN_ROD,
            Colors.GRAY,
            Colors.GREY,
            Colors.GREEN,
            Colors.GREEN_YELLOW,
            Colors.HONEY_DEW,
            Colors.HOT_PINK,
            Colors.INDIAN_RED,
            Colors.INDIGO,
            Colors.IVORY,
            Colors.KHAKI,
            Colors.LAVENDER,
            Colors.LAVENDER_BLUSH,
            Colors.LAWN_GREEN,
            Colors.LEMON_CHIFFON,
            Colors.LIGHT_BLUE,
            Colors.LIGHT_CORAL,
            Colors.LIGHT_CYAN,
            Colors.LIGHT_GOLDEN_ROD_YELLOW,
            Colors.LIGHT_GRAY,
            Colors.LIGHT_GREY,
            Colors.LIGHT_GREEN,
            Colors.LIGHT_PINK,
            Colors.LIGHT_SALMON,
            Colors.LIGHT_SEA_GREEN,
            Colors.LIGHT_SKY_BLUE,
            Colors.LIGHT_SLATE_GRAY,
            Colors.LIGHT_SLATE_GREY,
            Colors.LIGHT_STEEL_BLUE,
            Colors.LIGHT_YELLOW,
            Colors.LIME,
            Colors.LIME_GREEN,
            Colors.LINEN,
            Colors.MAGENTA,
            Colors.MAROON,
            Colors.MEDIUM_AQUA_MARINE,
            Colors.MEDIUM_BLUE,
            Colors.MEDIUM_ORCHID,
            Colors.MEDIUM_PURPLE,
            Colors.MEDIUM_SEA_GREEN,
            Colors.MEDIUM_SLATE_BLUE,
            Colors.MEDIUM_SPRING_GREEN,
            Colors.MEDIUM_TURQUOISE,
            Colors.MEDIUM_VIOLET_RED,
            Colors.MIDNIGHT_BLUE,
            Colors.MINT_CREAM,
            Colors.MISTY_ROSE,
            Colors.MOCCASIN,
            Colors.NAVAJO_WHITE,
            Colors.NAVY,
            Colors.OLD_LACE,
            Colors.OLIVE,
            Colors.OLIVE_DRAB,
            Colors.ORANGE,
            Colors.ORANGE_RED,
            Colors.ORCHID,
            Colors.PALE_GOLDEN_ROD,
            Colors.PALE_GREEN,
            Colors.PALE_TURQUOISE,
            Colors.PALE_VIOLET_RED,
            Colors.PAPAYA_WHIP,
            Colors.PEACH_PUFF,
            Colors.PERU,
            Colors.PINK,
            Colors.PLUM,
            Colors.POWDER_BLUE,
            Colors.PURPLE,
            Colors.REBECCA_PURPLE,
            Colors.RED,
            Colors.ROSY_BROWN,
            Colors.ROYAL_BLUE,
            Colors.SADDLE_BROWN,
            Colors.SALMON,
            Colors.SANDY_BROWN,
            Colors.SEA_GREEN,
            Colors.SEA_SHELL,
            Colors.SIENNA,
            Colors.SILVER,
            Colors.SKY_BLUE,
            Colors.SLATE_BLUE,
            Colors.SLATE_GRAY,
            Colors.SLATE_GREY,
            Colors.SNOW,
            Colors.SPRING_GREEN,
            Colors.STEEL_BLUE,
            Colors.TAN,
            Colors.TEAL,
            Colors.THISTLE,
            Colors.TOMATO,
            Colors.TURQUOISE,
            Colors.VIOLET,
            Colors.WHEAT,
            Colors.WHITE,
            Colors.WHITE_SMOKE,
            Colors.YELLOW,
            Colors.YELLOW_GREEN
        ]
    )
    fun `render - colors - background`(color: Int) {
        val input = "Test!"
        val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
        val expectedImage = javaQRCode.createImage(25, 0, color, Colors.RED)

        val underTest = QRCode(input)

        val result = assertDoesNotThrow {
            underTest.render(brightColor = color, darkColor = Colors.RED)
        }

        val resultImage = result.nativeImage() as BufferedImage

        resultImage shouldHaveSameDimensionsAs expectedImage
        resultImage shouldBeSameImageAs expectedImage
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
