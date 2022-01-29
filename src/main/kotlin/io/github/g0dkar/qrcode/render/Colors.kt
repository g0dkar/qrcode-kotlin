package io.github.g0dkar.qrcode.render

/**
 * Just a lot of colors to use when drawing :)
 *
 * The constants are all the CSS colors, taken from https://www.w3schools.com/colors/colors_names.asp
 *
 * @author Rafael Lins - g0dkar
 */
object Colors {
    /** Very simple function to turn "#cc0000" into a color. */
    fun css(str: String): Int =
        str.substring(1..6).toInt(16)

    /**
     * Returns the especified color with an added alpha channel. That means a transparent/opaque color.
     *
     * `alpha` ranges from 0 (completely transparent) to 255 (completely visible). Values outside this
     * range are [coerced][coerceIn] into it.
     */
    fun withAlpha(color: Int, alpha: Int): Int =
        alpha.coerceIn(0..255).shl(6) or color

    const val ALICE_BLUE = 0xFFF8F0
    const val ANTIQUE_WHITE = 0xD7EBFA
    const val AQUA = 0xFFFF00
    const val AQUAMARINE = 0xD4FF7F
    const val AZURE = 0xFFFFF0
    const val BEIGE = 0xDCF5F5
    const val BISQUE = 0xC4E4FF
    const val BLACK = 0x000000
    const val BLANCHED_ALMOND = 0xCDEBFF
    const val BLUE = 0xFF0000
    const val BLUE_VIOLET = 0xE22B8A
    const val BROWN = 0x2A2AA5
    const val BURLY_WOOD = 0x87B8DE
    const val CADET_BLUE = 0xA09E5F
    const val CHARTREUSE = 0x00FF7F
    const val CHOCOLATE = 0x1E69D2
    const val CORAL = 0x507FFF
    const val CORNFLOWER_BLUE = 0xED9564
    const val CORNSILK = 0xDCF8FF
    const val CRIMSON = 0x3C14DC
    const val CYAN = 0xFFFF00
    const val DARK_BLUE = 0x8B0000
    const val DARK_CYAN = 0x8B8B00
    const val DARK_GOLDEN_ROD = 0x0B86B8
    const val DARK_GRAY = 0xA9A9A9
    const val DARK_GREY = 0xA9A9A9
    const val DARK_GREEN = 0x006400
    const val DARK_KHAKI = 0x6BB7BD
    const val DARK_MAGENTA = 0x8B008B
    const val DARK_OLIVE_GREEN = 0x2F6B55
    const val DARK_ORANGE = 0x008CFF
    const val DARK_ORCHID = 0xCC3299
    const val DARK_RED = 0x00008B
    const val DARK_SALMON = 0x7A96E9
    const val DARK_SEA_GREEN = 0x8FBC8F
    const val DARK_SLATE_BLUE = 0x8B3D48
    const val DARK_SLATE_GRAY = 0x4F4F2F
    const val DARK_SLATE_GREY = 0x4F4F2F
    const val DARK_TURQUOISE = 0xD1CE00
    const val DARK_VIOLET = 0xD30094
    const val DEEP_PINK = 0x9314FF
    const val DEEP_SKY_BLUE = 0xFFBF00
    const val DIM_GRAY = 0x696969
    const val DIM_GREY = 0x696969
    const val DODGER_BLUE = 0xFF901E
    const val FIRE_BRICK = 0x2222B2
    const val FLORAL_WHITE = 0xF0FAFF
    const val FOREST_GREEN = 0x228B22
    const val FUCHSIA = 0xFF00FF
    const val GAINSBORO = 0xDCDCDC
    const val GHOST_WHITE = 0xFFF8F8
    const val GOLD = 0x00D7FF
    const val GOLDEN_ROD = 0x20A5DA
    const val GRAY = 0x808080
    const val GREY = 0x808080
    const val GREEN = 0x008000
    const val GREEN_YELLOW = 0x2FFFAD
    const val HONEY_DEW = 0xF0FFF0
    const val HOT_PINK = 0xB469FF
    const val INDIAN_RED = 0x5C5CCD
    const val INDIGO = 0x82004B
    const val IVORY = 0xF0FFFF
    const val KHAKI = 0x8CE6F0
    const val LAVENDER = 0xFAE6E6
    const val LAVENDER_BLUSH = 0xF5F0FF
    const val LAWN_GREEN = 0x00FC7C
    const val LEMON_CHIFFON = 0xCDFAFF
    const val LIGHT_BLUE = 0xE6D8AD
    const val LIGHT_CORAL = 0x8080F0
    const val LIGHT_CYAN = 0xFFFFE0
    const val LIGHT_GOLDEN_ROD_YELLOW = 0xD2FAFA
    const val LIGHT_GRAY = 0xD3D3D3
    const val LIGHT_GREY = 0xD3D3D3
    const val LIGHT_GREEN = 0x90EE90
    const val LIGHT_PINK = 0xC1B6FF
    const val LIGHT_SALMON = 0x7AA0FF
    const val LIGHT_SEA_GREEN = 0xAAB220
    const val LIGHT_SKY_BLUE = 0xFACE87
    const val LIGHT_SLATE_GRAY = 0x998877
    const val LIGHT_SLATE_GREY = 0x998877
    const val LIGHT_STEEL_BLUE = 0xDEC4B0
    const val LIGHT_YELLOW = 0xE0FFFF
    const val LIME = 0x00FF00
    const val LIME_GREEN = 0x32CD32
    const val LINEN = 0xE6F0FA
    const val MAGENTA = 0xFF00FF
    const val MAROON = 0x000080
    const val MEDIUM_AQUA_MARINE = 0xAACD66
    const val MEDIUM_BLUE = 0xCD0000
    const val MEDIUM_ORCHID = 0xD355BA
    const val MEDIUM_PURPLE = 0xDB7093
    const val MEDIUM_SEA_GREEN = 0x71B33C
    const val MEDIUM_SLATE_BLUE = 0xEE687B
    const val MEDIUM_SPRING_GREEN = 0x9AFA00
    const val MEDIUM_TURQUOISE = 0xCCD148
    const val MEDIUM_VIOLET_RED = 0x8515C7
    const val MIDNIGHT_BLUE = 0x701919
    const val MINT_CREAM = 0xFAFFF5
    const val MISTY_ROSE = 0xE1E4FF
    const val MOCCASIN = 0xB5E4FF
    const val NAVAJO_WHITE = 0xADDEFF
    const val NAVY = 0x800000
    const val OLD_LACE = 0xE6F5FD
    const val OLIVE = 0x008080
    const val OLIVE_DRAB = 0x238E6B
    const val ORANGE = 0x00A5FF
    const val ORANGE_RED = 0x0045FF
    const val ORCHID = 0xD670DA
    const val PALE_GOLDEN_ROD = 0xAAE8EE
    const val PALE_GREEN = 0x98FB98
    const val PALE_TURQUOISE = 0xEEEEAF
    const val PALE_VIOLET_RED = 0x9370DB
    const val PAPAYA_WHIP = 0xD5EFFF
    const val PEACH_PUFF = 0xB9DAFF
    const val PERU = 0x3F85CD
    const val PINK = 0xCBC0FF
    const val PLUM = 0xDDA0DD
    const val POWDER_BLUE = 0xE6E0B0
    const val PURPLE = 0x800080
    const val REBECCA_PURPLE = 0x993366
    const val RED = 0x0000FF
    const val ROSY_BROWN = 0x8F8FBC
    const val ROYAL_BLUE = 0xE16941
    const val SADDLE_BROWN = 0x13458B
    const val SALMON = 0x7280FA
    const val SANDY_BROWN = 0x60A4F4
    const val SEA_GREEN = 0x578B2E
    const val SEA_SHELL = 0xEEF5FF
    const val SIENNA = 0x2D52A0
    const val SILVER = 0xC0C0C0
    const val SKY_BLUE = 0xEBCE87
    const val SLATE_BLUE = 0xCD5A6A
    const val SLATE_GRAY = 0x908070
    const val SLATE_GREY = 0x908070
    const val SNOW = 0xFAFAFF
    const val SPRING_GREEN = 0x7FFF00
    const val STEEL_BLUE = 0xB48246
    const val TAN = 0x8CB4D2
    const val TEAL = 0x808000
    const val THISTLE = 0xD8BFD8
    const val TOMATO = 0x4763FF
    const val TURQUOISE = 0xD0E040
    const val VIOLET = 0xEE82EE
    const val WHEAT = 0xB3DEF5
    const val WHITE = 0xFFFFFF
    const val WHITE_SMOKE = 0xF5F5F5
    const val YELLOW = 0x00FFFF
    const val YELLOW_GREEN = 0x32CD9A
}
