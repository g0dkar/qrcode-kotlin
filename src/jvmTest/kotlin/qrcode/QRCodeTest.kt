package qrcode

import com.d_project.qrcode.Mode
import io.kotest.core.spec.style.FunSpec
import qrcode.color.Colors
import qrcode.raw.ErrorCorrectionLevel
import qrcode.raw.QRCodeBuilder
import qrcode.raw.QRCodeDataType
import java.awt.image.BufferedImage

class QRCodeTest : FunSpec({
    context("QRCode Rendering") {
        context("data is numbers") {
            test("default params") {
                val input = "123456"
                val javaQRCode = generateJavaQRCode(input)
                val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, Colors.RED)

                val underTest = QRCodeBuilder(input)

                val result = underTest.render(darkColor = Colors.RED)

                val resultImage = result.nativeImage() as BufferedImage

                resultImage shouldHaveSameDimensionsAs expectedImage
                resultImage shouldBeSameImageAs expectedImage
            }

            test("explicitly as string") {
                val input = "123456"
                val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
                val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, Colors.RED)

                val underTest = QRCodeBuilder(input, dataType = QRCodeDataType.DEFAULT)

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

            val underTest = QRCodeBuilder(input)

            val result = underTest.render(darkColor = Colors.RED)

            val resultImage = result.nativeImage() as BufferedImage

            resultImage shouldHaveSameDimensionsAs expectedImage
            resultImage shouldBeSameImageAs expectedImage
        }
    }

    context("Colors") {
        context("foreground") {
            allColors.forEach { (name, color) ->
                test(name) {
                    val input = "Test!"
                    val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
                    val expectedImage = javaQRCode.createImage(25, 0, Colors.WHITE, color)

                    val underTest = QRCodeBuilder(input)

                    val result = underTest.render(darkColor = color)

                    val resultImage = result.nativeImage() as BufferedImage

                    resultImage shouldHaveSameDimensionsAs expectedImage
                    resultImage shouldBeSameImageAs expectedImage
                }
            }
        }

        context("background") {
            allColors.forEach { (name, color) ->
                test(name) {
                    val input = "Test!"
                    val javaQRCode = generateJavaQRCode(input, mode = Mode.MODE_8BIT_BYTE)
                    val expectedImage = javaQRCode.createImage(25, 0, color, Colors.RED)

                    val underTest = QRCodeBuilder(input)

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
    mode: Int = QRCodeBuilder.typeForDataAndECL(data, ErrorCorrectionLevel.values().first { it.value == ecl })
): com.d_project.qrcode.QRCode =
    com.d_project.qrcode.QRCode().apply {
        errorCorrectionLevel = ecl
        typeNumber = type
        addData(data, mode)
        make(false, 0)
    }

private val allColors = mapOf(
    "ALICE_BLUE" to Colors.ALICE_BLUE,
    "ANTIQUE_WHITE" to Colors.ANTIQUE_WHITE,
    "AQUA" to Colors.AQUA,
    "AQUAMARINE" to Colors.AQUAMARINE,
    "AZURE" to Colors.AZURE,
    "BEIGE" to Colors.BEIGE,
    "BISQUE" to Colors.BISQUE,
    "BLACK" to Colors.BLACK,
    "BLANCHED_ALMOND" to Colors.BLANCHED_ALMOND,
    "BLUE" to Colors.BLUE,
    "BLUE_VIOLET" to Colors.BLUE_VIOLET,
    "BROWN" to Colors.BROWN,
    "BURLY_WOOD" to Colors.BURLY_WOOD,
    "CADET_BLUE" to Colors.CADET_BLUE,
    "CHARTREUSE" to Colors.CHARTREUSE,
    "CHOCOLATE" to Colors.CHOCOLATE,
    "CORAL" to Colors.CORAL,
    "CORNFLOWER_BLUE" to Colors.CORNFLOWER_BLUE,
    "CORNSILK" to Colors.CORNSILK,
    "CRIMSON" to Colors.CRIMSON,
    "CYAN" to Colors.CYAN,
    "DARK_BLUE" to Colors.DARK_BLUE,
    "DARK_CYAN" to Colors.DARK_CYAN,
    "DARK_GOLDEN_ROD" to Colors.DARK_GOLDEN_ROD,
    "DARK_GRAY" to Colors.DARK_GRAY,
    "DARK_GREY" to Colors.DARK_GREY,
    "DARK_GREEN" to Colors.DARK_GREEN,
    "DARK_KHAKI" to Colors.DARK_KHAKI,
    "DARK_MAGENTA" to Colors.DARK_MAGENTA,
    "DARK_OLIVE_GREEN" to Colors.DARK_OLIVE_GREEN,
    "DARK_ORANGE" to Colors.DARK_ORANGE,
    "DARK_ORCHID" to Colors.DARK_ORCHID,
    "DARK_RED" to Colors.DARK_RED,
    "DARK_SALMON" to Colors.DARK_SALMON,
    "DARK_SEA_GREEN" to Colors.DARK_SEA_GREEN,
    "DARK_SLATE_BLUE" to Colors.DARK_SLATE_BLUE,
    "DARK_SLATE_GRAY" to Colors.DARK_SLATE_GRAY,
    "DARK_SLATE_GREY" to Colors.DARK_SLATE_GREY,
    "DARK_TURQUOISE" to Colors.DARK_TURQUOISE,
    "DARK_VIOLET" to Colors.DARK_VIOLET,
    "DEEP_PINK" to Colors.DEEP_PINK,
    "DEEP_SKY_BLUE" to Colors.DEEP_SKY_BLUE,
    "DIM_GRAY" to Colors.DIM_GRAY,
    "DIM_GREY" to Colors.DIM_GREY,
    "DODGER_BLUE" to Colors.DODGER_BLUE,
    "FIRE_BRICK" to Colors.FIRE_BRICK,
    "FLORAL_WHITE" to Colors.FLORAL_WHITE,
    "FOREST_GREEN" to Colors.FOREST_GREEN,
    "FUCHSIA" to Colors.FUCHSIA,
    "GAINSBORO" to Colors.GAINSBORO,
    "GHOST_WHITE" to Colors.GHOST_WHITE,
    "GOLD" to Colors.GOLD,
    "GOLDEN_ROD" to Colors.GOLDEN_ROD,
    "GRAY" to Colors.GRAY,
    "GREY" to Colors.GREY,
    "GREEN" to Colors.GREEN,
    "GREEN_YELLOW" to Colors.GREEN_YELLOW,
    "HONEY_DEW" to Colors.HONEY_DEW,
    "HOT_PINK" to Colors.HOT_PINK,
    "INDIAN_RED" to Colors.INDIAN_RED,
    "INDIGO" to Colors.INDIGO,
    "IVORY" to Colors.IVORY,
    "KHAKI" to Colors.KHAKI,
    "LAVENDER" to Colors.LAVENDER,
    "LAVENDER_BLUSH" to Colors.LAVENDER_BLUSH,
    "LAWN_GREEN" to Colors.LAWN_GREEN,
    "LEMON_CHIFFON" to Colors.LEMON_CHIFFON,
    "LIGHT_BLUE" to Colors.LIGHT_BLUE,
    "LIGHT_CORAL" to Colors.LIGHT_CORAL,
    "LIGHT_CYAN" to Colors.LIGHT_CYAN,
    "LIGHT_GOLDEN_ROD_YELLOW" to Colors.LIGHT_GOLDEN_ROD_YELLOW,
    "LIGHT_GRAY" to Colors.LIGHT_GRAY,
    "LIGHT_GREY" to Colors.LIGHT_GREY,
    "LIGHT_GREEN" to Colors.LIGHT_GREEN,
    "LIGHT_PINK" to Colors.LIGHT_PINK,
    "LIGHT_SALMON" to Colors.LIGHT_SALMON,
    "LIGHT_SEA_GREEN" to Colors.LIGHT_SEA_GREEN,
    "LIGHT_SKY_BLUE" to Colors.LIGHT_SKY_BLUE,
    "LIGHT_SLATE_GRAY" to Colors.LIGHT_SLATE_GRAY,
    "LIGHT_SLATE_GREY" to Colors.LIGHT_SLATE_GREY,
    "LIGHT_STEEL_BLUE" to Colors.LIGHT_STEEL_BLUE,
    "LIGHT_YELLOW" to Colors.LIGHT_YELLOW,
    "LIME" to Colors.LIME,
    "LIME_GREEN" to Colors.LIME_GREEN,
    "LINEN" to Colors.LINEN,
    "MAGENTA" to Colors.MAGENTA,
    "MAROON" to Colors.MAROON,
    "MEDIUM_AQUA_MARINE" to Colors.MEDIUM_AQUA_MARINE,
    "MEDIUM_BLUE" to Colors.MEDIUM_BLUE,
    "MEDIUM_ORCHID" to Colors.MEDIUM_ORCHID,
    "MEDIUM_PURPLE" to Colors.MEDIUM_PURPLE,
    "MEDIUM_SEA_GREEN" to Colors.MEDIUM_SEA_GREEN,
    "MEDIUM_SLATE_BLUE" to Colors.MEDIUM_SLATE_BLUE,
    "MEDIUM_SPRING_GREEN" to Colors.MEDIUM_SPRING_GREEN,
    "MEDIUM_TURQUOISE" to Colors.MEDIUM_TURQUOISE,
    "MEDIUM_VIOLET_RED" to Colors.MEDIUM_VIOLET_RED,
    "MIDNIGHT_BLUE" to Colors.MIDNIGHT_BLUE,
    "MINT_CREAM" to Colors.MINT_CREAM,
    "MISTY_ROSE" to Colors.MISTY_ROSE,
    "MOCCASIN" to Colors.MOCCASIN,
    "NAVAJO_WHITE" to Colors.NAVAJO_WHITE,
    "NAVY" to Colors.NAVY,
    "OLD_LACE" to Colors.OLD_LACE,
    "OLIVE" to Colors.OLIVE,
    "OLIVE_DRAB" to Colors.OLIVE_DRAB,
    "ORANGE" to Colors.ORANGE,
    "ORANGE_RED" to Colors.ORANGE_RED,
    "ORCHID" to Colors.ORCHID,
    "PALE_GOLDEN_ROD" to Colors.PALE_GOLDEN_ROD,
    "PALE_GREEN" to Colors.PALE_GREEN,
    "PALE_TURQUOISE" to Colors.PALE_TURQUOISE,
    "PALE_VIOLET_RED" to Colors.PALE_VIOLET_RED,
    "PAPAYA_WHIP" to Colors.PAPAYA_WHIP,
    "PEACH_PUFF" to Colors.PEACH_PUFF,
    "PERU" to Colors.PERU,
    "PINK" to Colors.PINK,
    "PLUM" to Colors.PLUM,
    "POWDER_BLUE" to Colors.POWDER_BLUE,
    "PURPLE" to Colors.PURPLE,
    "REBECCA_PURPLE" to Colors.REBECCA_PURPLE,
    "RED" to Colors.RED,
    "ROSY_BROWN" to Colors.ROSY_BROWN,
    "ROYAL_BLUE" to Colors.ROYAL_BLUE,
    "SADDLE_BROWN" to Colors.SADDLE_BROWN,
    "SALMON" to Colors.SALMON,
    "SANDY_BROWN" to Colors.SANDY_BROWN,
    "SEA_GREEN" to Colors.SEA_GREEN,
    "SEA_SHELL" to Colors.SEA_SHELL,
    "SIENNA" to Colors.SIENNA,
    "SILVER" to Colors.SILVER,
    "SKY_BLUE" to Colors.SKY_BLUE,
    "SLATE_BLUE" to Colors.SLATE_BLUE,
    "SLATE_GRAY" to Colors.SLATE_GRAY,
    "SLATE_GREY" to Colors.SLATE_GREY,
    "SNOW" to Colors.SNOW,
    "SPRING_GREEN" to Colors.SPRING_GREEN,
    "STEEL_BLUE" to Colors.STEEL_BLUE,
    "TAN" to Colors.TAN,
    "TEAL" to Colors.TEAL,
    "THISTLE" to Colors.THISTLE,
    "TOMATO" to Colors.TOMATO,
    "TURQUOISE" to Colors.TURQUOISE,
    "VIOLET" to Colors.VIOLET,
    "WHEAT" to Colors.WHEAT,
    "WHITE" to Colors.WHITE,
    "WHITE_SMOKE" to Colors.WHITE_SMOKE,
    "YELLOW" to Colors.YELLOW,
    "YELLOW_GREEN" to Colors.YELLOW_GREEN
)
