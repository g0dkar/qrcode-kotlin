package io.github.g0dkar.qrcode.render

/**
 * Just a lot of colors to use when drawing :)
 *
 * The constants are all the CSS colors, taken from https://www.w3schools.com/colors/colors_names.asp
 *
 * @author Rafael Lins - g0dkar
 * @see css
 * @see withAlpha
 * @see allColors
 */
object Colors {
    /** Very simple function to turn "#cc0000" into a color. */
    fun css(str: String): Int =
        str.substring(1..6).toInt(16) or 0xFF000000.toInt()

    /** Builds an RGBA color value from its numerical components. All values must be between `0..255`. */
    fun rgba(r: Int, g: Int, b: Int, a: Int = 255): Int =
        a.coerceIn(0..255) and 0xFF shl 24 or
            (r.coerceIn(0..255) and 0xFF shl 16) or
            (g.coerceIn(0..255) and 0xFF shl 8) or
            (b.coerceIn(0..255) and 0xFF shl 0)

    /** Compute the R, G, B and Alpha components of a color. All values between `0..255`. */
    fun getRGBA(color: Int): List<Int> =
        listOf(
            (color shr 16) and 0xFF,
            (color shr 8) and 0xFF,
            (color shr 0) and 0xFF,
            (color shr 24) and 0xFF
        )

    /**
     * Returns the especified color with an added alpha channel. That means a transparent/opaque color.
     *
     * `alpha` ranges from 0 (completely transparent) to 255 (completely visible). Values outside this
     * range are [coerced][coerceIn] into it.
     */
    fun withAlpha(color: Int, alpha: Int): Int =
        (alpha.coerceIn(0..255) shl 24) + (color and 0xFFFFFF)

    const val ALICE_BLUE = 0xF0F8FF
    const val ANTIQUE_WHITE = 0xFAEBD7
    const val AQUA = 0x00FFFF
    const val AQUAMARINE = 0x7FFFD4
    const val AZURE = 0xF0FFFF
    const val BEIGE = 0xF5F5DC
    const val BISQUE = 0xFFE4C4
    const val BLACK = 0x000000
    const val BLANCHED_ALMOND = 0xFFEBCD
    const val BLUE = 0x0000FF
    const val BLUE_VIOLET = 0x8A2BE2
    const val BROWN = 0xA52A2A
    const val BURLY_WOOD = 0xDEB887
    const val CADET_BLUE = 0x5F9EA0
    const val CHARTREUSE = 0x7FFF00
    const val CHOCOLATE = 0xD2691E
    const val CORAL = 0xFF7F50
    const val CORNFLOWER_BLUE = 0x6495ED
    const val CORNSILK = 0xFFF8DC
    const val CRIMSON = 0xDC143C
    const val CYAN = 0x00FFFF
    const val DARK_BLUE = 0x00008B
    const val DARK_CYAN = 0x008B8B
    const val DARK_GOLDEN_ROD = 0xB8860B
    const val DARK_GRAY = 0xA9A9A9
    const val DARK_GREY = 0xA9A9A9
    const val DARK_GREEN = 0x006400
    const val DARK_KHAKI = 0xBDB76B
    const val DARK_MAGENTA = 0x8B008B
    const val DARK_OLIVE_GREEN = 0x556B2F
    const val DARK_ORANGE = 0xFF8C00
    const val DARK_ORCHID = 0x9932CC
    const val DARK_RED = 0x8B0000
    const val DARK_SALMON = 0xE9967A
    const val DARK_SEA_GREEN = 0x8FBC8F
    const val DARK_SLATE_BLUE = 0x483D8B
    const val DARK_SLATE_GRAY = 0x2F4F4F
    const val DARK_SLATE_GREY = 0x2F4F4F
    const val DARK_TURQUOISE = 0x00CED1
    const val DARK_VIOLET = 0x9400D3
    const val DEEP_PINK = 0xFF1493
    const val DEEP_SKY_BLUE = 0x00BFFF
    const val DIM_GRAY = 0x696969
    const val DIM_GREY = 0x696969
    const val DODGER_BLUE = 0x1E90FF
    const val FIRE_BRICK = 0xB22222
    const val FLORAL_WHITE = 0xFFFAF0
    const val FOREST_GREEN = 0x228B22
    const val FUCHSIA = 0xFF00FF
    const val GAINSBORO = 0xDCDCDC
    const val GHOST_WHITE = 0xF8F8FF
    const val GOLD = 0xFFD700
    const val GOLDEN_ROD = 0xDAA520
    const val GRAY = 0x808080
    const val GREY = 0x808080
    const val GREEN = 0x008000
    const val GREEN_YELLOW = 0xADFF2F
    const val HONEY_DEW = 0xF0FFF0
    const val HOT_PINK = 0xFF69B4
    const val INDIAN_RED = 0xCD5C5C
    const val INDIGO = 0x4B0082
    const val IVORY = 0xFFFFF0
    const val KHAKI = 0xF0E68C
    const val LAVENDER = 0xE6E6FA
    const val LAVENDER_BLUSH = 0xFFF0F5
    const val LAWN_GREEN = 0x7CFC00
    const val LEMON_CHIFFON = 0xFFFACD
    const val LIGHT_BLUE = 0xADD8E6
    const val LIGHT_CORAL = 0xF08080
    const val LIGHT_CYAN = 0xE0FFFF
    const val LIGHT_GOLDEN_ROD_YELLOW = 0xFAFAD2
    const val LIGHT_GRAY = 0xD3D3D3
    const val LIGHT_GREY = 0xD3D3D3
    const val LIGHT_GREEN = 0x90EE90
    const val LIGHT_PINK = 0xFFB6C1
    const val LIGHT_SALMON = 0xFFA07A
    const val LIGHT_SEA_GREEN = 0x20B2AA
    const val LIGHT_SKY_BLUE = 0x87CEFA
    const val LIGHT_SLATE_GRAY = 0x778899
    const val LIGHT_SLATE_GREY = 0x778899
    const val LIGHT_STEEL_BLUE = 0xB0C4DE
    const val LIGHT_YELLOW = 0xFFFFE0
    const val LIME = 0x00FF00
    const val LIME_GREEN = 0x32CD32
    const val LINEN = 0xFAF0E6
    const val MAGENTA = 0xFF00FF
    const val MAROON = 0x800000
    const val MEDIUM_AQUA_MARINE = 0x66CDAA
    const val MEDIUM_BLUE = 0x0000CD
    const val MEDIUM_ORCHID = 0xBA55D3
    const val MEDIUM_PURPLE = 0x9370DB
    const val MEDIUM_SEA_GREEN = 0x3CB371
    const val MEDIUM_SLATE_BLUE = 0x7B68EE
    const val MEDIUM_SPRING_GREEN = 0x00FA9A
    const val MEDIUM_TURQUOISE = 0x48D1CC
    const val MEDIUM_VIOLET_RED = 0xC71585
    const val MIDNIGHT_BLUE = 0x191970
    const val MINT_CREAM = 0xF5FFFA
    const val MISTY_ROSE = 0xFFE4E1
    const val MOCCASIN = 0xFFE4B5
    const val NAVAJO_WHITE = 0xFFDEAD
    const val NAVY = 0x000080
    const val OLD_LACE = 0xFDF5E6
    const val OLIVE = 0x808000
    const val OLIVE_DRAB = 0x6B8E23
    const val ORANGE = 0xFFA500
    const val ORANGE_RED = 0xFF4500
    const val ORCHID = 0xDA70D6
    const val PALE_GOLDEN_ROD = 0xEEE8AA
    const val PALE_GREEN = 0x98FB98
    const val PALE_TURQUOISE = 0xAFEEEE
    const val PALE_VIOLET_RED = 0xDB7093
    const val PAPAYA_WHIP = 0xFFEFD5
    const val PEACH_PUFF = 0xFFDAB9
    const val PERU = 0xCD853F
    const val PINK = 0xFFC0CB
    const val PLUM = 0xDDA0DD
    const val POWDER_BLUE = 0xB0E0E6
    const val PURPLE = 0x800080
    const val REBECCA_PURPLE = 0x663399
    const val RED = 0xFF0000
    const val ROSY_BROWN = 0xBC8F8F
    const val ROYAL_BLUE = 0x4169E1
    const val SADDLE_BROWN = 0x8B4513
    const val SALMON = 0xFA8072
    const val SANDY_BROWN = 0xF4A460
    const val SEA_GREEN = 0x2E8B57
    const val SEA_SHELL = 0xFFF5EE
    const val SIENNA = 0xA0522D
    const val SILVER = 0xC0C0C0
    const val SKY_BLUE = 0x87CEEB
    const val SLATE_BLUE = 0x6A5ACD
    const val SLATE_GRAY = 0x708090
    const val SLATE_GREY = 0x708090
    const val SNOW = 0xFFFAFA
    const val SPRING_GREEN = 0x00FF7F
    const val STEEL_BLUE = 0x4682B4
    const val TAN = 0xD2B48C
    const val TEAL = 0x008080
    const val THISTLE = 0xD8BFD8
    const val TOMATO = 0xFF6347
    const val TURQUOISE = 0x40E0D0
    const val VIOLET = 0xEE82EE
    const val WHEAT = 0xF5DEB3
    const val WHITE = 0xFFFFFF
    const val WHITE_SMOKE = 0xF5F5F5
    const val YELLOW = 0xFFFF00
    const val YELLOW_GREEN = 0x9ACD32

    /**
     * Just a convenience for developers to go through all colors and see which is nicer :)
     *
     * Try something like this:
     *
     * ```kotlin
     * Colors.allColors().forEach { (color, value) ->
     *     val file = FileOutputStream("qrcode_$color.png")
     *     QRCode(color).render(darkColor = value).writeImage(file)
     * }
     * ```
     *
     */
    fun allColors(): Map<String, Int> =
        mapOf(
            "ALICE_BLUE" to ALICE_BLUE,
            "ANTIQUE_WHITE" to ANTIQUE_WHITE,
            "AQUA" to AQUA,
            "AQUAMARINE" to AQUAMARINE,
            "AZURE" to AZURE,
            "BEIGE" to BEIGE,
            "BISQUE" to BISQUE,
            "BLACK" to BLACK,
            "BLANCHED_ALMOND" to BLANCHED_ALMOND,
            "BLUE" to BLUE,
            "BLUE_VIOLET" to BLUE_VIOLET,
            "BROWN" to BROWN,
            "BURLY_WOOD" to BURLY_WOOD,
            "CADET_BLUE" to CADET_BLUE,
            "CHARTREUSE" to CHARTREUSE,
            "CHOCOLATE" to CHOCOLATE,
            "CORAL" to CORAL,
            "CORNFLOWER_BLUE" to CORNFLOWER_BLUE,
            "CORNSILK" to CORNSILK,
            "CRIMSON" to CRIMSON,
            "CYAN" to CYAN,
            "DARK_BLUE" to DARK_BLUE,
            "DARK_CYAN" to DARK_CYAN,
            "DARK_GOLDEN_ROD" to DARK_GOLDEN_ROD,
            "DARK_GRAY" to DARK_GRAY,
            "DARK_GREY" to DARK_GREY,
            "DARK_GREEN" to DARK_GREEN,
            "DARK_KHAKI" to DARK_KHAKI,
            "DARK_MAGENTA" to DARK_MAGENTA,
            "DARK_OLIVE_GREEN" to DARK_OLIVE_GREEN,
            "DARK_ORANGE" to DARK_ORANGE,
            "DARK_ORCHID" to DARK_ORCHID,
            "DARK_RED" to DARK_RED,
            "DARK_SALMON" to DARK_SALMON,
            "DARK_SEA_GREEN" to DARK_SEA_GREEN,
            "DARK_SLATE_BLUE" to DARK_SLATE_BLUE,
            "DARK_SLATE_GRAY" to DARK_SLATE_GRAY,
            "DARK_SLATE_GREY" to DARK_SLATE_GREY,
            "DARK_TURQUOISE" to DARK_TURQUOISE,
            "DARK_VIOLET" to DARK_VIOLET,
            "DEEP_PINK" to DEEP_PINK,
            "DEEP_SKY_BLUE" to DEEP_SKY_BLUE,
            "DIM_GRAY" to DIM_GRAY,
            "DIM_GREY" to DIM_GREY,
            "DODGER_BLUE" to DODGER_BLUE,
            "FIRE_BRICK" to FIRE_BRICK,
            "FLORAL_WHITE" to FLORAL_WHITE,
            "FOREST_GREEN" to FOREST_GREEN,
            "FUCHSIA" to FUCHSIA,
            "GAINSBORO" to GAINSBORO,
            "GHOST_WHITE" to GHOST_WHITE,
            "GOLD" to GOLD,
            "GOLDEN_ROD" to GOLDEN_ROD,
            "GRAY" to GRAY,
            "GREY" to GREY,
            "GREEN" to GREEN,
            "GREEN_YELLOW" to GREEN_YELLOW,
            "HONEY_DEW" to HONEY_DEW,
            "HOT_PINK" to HOT_PINK,
            "INDIAN_RED" to INDIAN_RED,
            "INDIGO" to INDIGO,
            "IVORY" to IVORY,
            "KHAKI" to KHAKI,
            "LAVENDER" to LAVENDER,
            "LAVENDER_BLUSH" to LAVENDER_BLUSH,
            "LAWN_GREEN" to LAWN_GREEN,
            "LEMON_CHIFFON" to LEMON_CHIFFON,
            "LIGHT_BLUE" to LIGHT_BLUE,
            "LIGHT_CORAL" to LIGHT_CORAL,
            "LIGHT_CYAN" to LIGHT_CYAN,
            "LIGHT_GOLDEN_ROD_YELLOW" to LIGHT_GOLDEN_ROD_YELLOW,
            "LIGHT_GRAY" to LIGHT_GRAY,
            "LIGHT_GREY" to LIGHT_GREY,
            "LIGHT_GREEN" to LIGHT_GREEN,
            "LIGHT_PINK" to LIGHT_PINK,
            "LIGHT_SALMON" to LIGHT_SALMON,
            "LIGHT_SEA_GREEN" to LIGHT_SEA_GREEN,
            "LIGHT_SKY_BLUE" to LIGHT_SKY_BLUE,
            "LIGHT_SLATE_GRAY" to LIGHT_SLATE_GRAY,
            "LIGHT_SLATE_GREY" to LIGHT_SLATE_GREY,
            "LIGHT_STEEL_BLUE" to LIGHT_STEEL_BLUE,
            "LIGHT_YELLOW" to LIGHT_YELLOW,
            "LIME" to LIME,
            "LIME_GREEN" to LIME_GREEN,
            "LINEN" to LINEN,
            "MAGENTA" to MAGENTA,
            "MAROON" to MAROON,
            "MEDIUM_AQUA_MARINE" to MEDIUM_AQUA_MARINE,
            "MEDIUM_BLUE" to MEDIUM_BLUE,
            "MEDIUM_ORCHID" to MEDIUM_ORCHID,
            "MEDIUM_PURPLE" to MEDIUM_PURPLE,
            "MEDIUM_SEA_GREEN" to MEDIUM_SEA_GREEN,
            "MEDIUM_SLATE_BLUE" to MEDIUM_SLATE_BLUE,
            "MEDIUM_SPRING_GREEN" to MEDIUM_SPRING_GREEN,
            "MEDIUM_TURQUOISE" to MEDIUM_TURQUOISE,
            "MEDIUM_VIOLET_RED" to MEDIUM_VIOLET_RED,
            "MIDNIGHT_BLUE" to MIDNIGHT_BLUE,
            "MINT_CREAM" to MINT_CREAM,
            "MISTY_ROSE" to MISTY_ROSE,
            "MOCCASIN" to MOCCASIN,
            "NAVAJO_WHITE" to NAVAJO_WHITE,
            "NAVY" to NAVY,
            "OLD_LACE" to OLD_LACE,
            "OLIVE" to OLIVE,
            "OLIVE_DRAB" to OLIVE_DRAB,
            "ORANGE" to ORANGE,
            "ORANGE_RED" to ORANGE_RED,
            "ORCHID" to ORCHID,
            "PALE_GOLDEN_ROD" to PALE_GOLDEN_ROD,
            "PALE_GREEN" to PALE_GREEN,
            "PALE_TURQUOISE" to PALE_TURQUOISE,
            "PALE_VIOLET_RED" to PALE_VIOLET_RED,
            "PAPAYA_WHIP" to PAPAYA_WHIP,
            "PEACH_PUFF" to PEACH_PUFF,
            "PERU" to PERU,
            "PINK" to PINK,
            "PLUM" to PLUM,
            "POWDER_BLUE" to POWDER_BLUE,
            "PURPLE" to PURPLE,
            "REBECCA_PURPLE" to REBECCA_PURPLE,
            "RED" to RED,
            "ROSY_BROWN" to ROSY_BROWN,
            "ROYAL_BLUE" to ROYAL_BLUE,
            "SADDLE_BROWN" to SADDLE_BROWN,
            "SALMON" to SALMON,
            "SANDY_BROWN" to SANDY_BROWN,
            "SEA_GREEN" to SEA_GREEN,
            "SEA_SHELL" to SEA_SHELL,
            "SIENNA" to SIENNA,
            "SILVER" to SILVER,
            "SKY_BLUE" to SKY_BLUE,
            "SLATE_BLUE" to SLATE_BLUE,
            "SLATE_GRAY" to SLATE_GRAY,
            "SLATE_GREY" to SLATE_GREY,
            "SNOW" to SNOW,
            "SPRING_GREEN" to SPRING_GREEN,
            "STEEL_BLUE" to STEEL_BLUE,
            "TAN" to TAN,
            "TEAL" to TEAL,
            "THISTLE" to THISTLE,
            "TOMATO" to TOMATO,
            "TURQUOISE" to TURQUOISE,
            "VIOLET" to VIOLET,
            "WHEAT" to WHEAT,
            "WHITE" to WHITE,
            "WHITE_SMOKE" to WHITE_SMOKE,
            "YELLOW" to YELLOW,
            "YELLOW_GREEN" to YELLOW_GREEN,
        )
}
