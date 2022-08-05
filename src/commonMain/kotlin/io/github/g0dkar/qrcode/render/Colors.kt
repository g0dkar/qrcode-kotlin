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

    const val ALICE_BLUE = 0xFFF0F8FF.toInt()
    const val ANTIQUE_WHITE = 0xFFFAEBD7.toInt()
    const val AQUA = 0xFF00FFFF.toInt()
    const val AQUAMARINE = 0xFF7FFFD4.toInt()
    const val AZURE = 0xFFF0FFFF.toInt()
    const val BEIGE = 0xFFF5F5DC.toInt()
    const val BISQUE = 0xFFFFE4C4.toInt()
    const val BLACK = 0xFF000000.toInt()
    const val BLANCHED_ALMOND = 0xFFFFEBCD.toInt()
    const val BLUE = 0xFF0000FF.toInt()
    const val BLUE_VIOLET = 0xFF8A2BE2.toInt()
    const val BROWN = 0xFFA52A2A.toInt()
    const val BURLY_WOOD = 0xFFDEB887.toInt()
    const val CADET_BLUE = 0xFF5F9EA0.toInt()
    const val CHARTREUSE = 0xFF7FFF00.toInt()
    const val CHOCOLATE = 0xFFD2691E.toInt()
    const val CORAL = 0xFFFF7F50.toInt()
    const val CORNFLOWER_BLUE = 0xFF6495ED.toInt()
    const val CORNSILK = 0xFFFFF8DC.toInt()
    const val CRIMSON = 0xFFDC143C.toInt()
    const val CYAN = 0xFF00FFFF.toInt()
    const val DARK_BLUE = 0xFF00008B.toInt()
    const val DARK_CYAN = 0xFF008B8B.toInt()
    const val DARK_GOLDEN_ROD = 0xFFB8860B.toInt()
    const val DARK_GRAY = 0xFFA9A9A9.toInt()
    const val DARK_GREY = 0xFFA9A9A9.toInt()
    const val DARK_GREEN = 0xFF006400.toInt()
    const val DARK_KHAKI = 0xFFBDB76B.toInt()
    const val DARK_MAGENTA = 0xFF8B008B.toInt()
    const val DARK_OLIVE_GREEN = 0xFF556B2F.toInt()
    const val DARK_ORANGE = 0xFFFF8C00.toInt()
    const val DARK_ORCHID = 0xFF9932CC.toInt()
    const val DARK_RED = 0xFF8B0000.toInt()
    const val DARK_SALMON = 0xFFE9967A.toInt()
    const val DARK_SEA_GREEN = 0xFF8FBC8F.toInt()
    const val DARK_SLATE_BLUE = 0xFF483D8B.toInt()
    const val DARK_SLATE_GRAY = 0xFF2F4F4F.toInt()
    const val DARK_SLATE_GREY = 0xFF2F4F4F.toInt()
    const val DARK_TURQUOISE = 0xFF00CED1.toInt()
    const val DARK_VIOLET = 0xFF9400D3.toInt()
    const val DEEP_PINK = 0xFFFF1493.toInt()
    const val DEEP_SKY_BLUE = 0xFF00BFFF.toInt()
    const val DIM_GRAY = 0xFF696969.toInt()
    const val DIM_GREY = 0xFF696969.toInt()
    const val DODGER_BLUE = 0xFF1E90FF.toInt()
    const val FIRE_BRICK = 0xFFB22222.toInt()
    const val FLORAL_WHITE = 0xFFFFFAF0.toInt()
    const val FOREST_GREEN = 0xFF228B22.toInt()
    const val FUCHSIA = 0xFFFF00FF.toInt()
    const val GAINSBORO = 0xFFDCDCDC.toInt()
    const val GHOST_WHITE = 0xFFF8F8FF.toInt()
    const val GOLD = 0xFFFFD700.toInt()
    const val GOLDEN_ROD = 0xFFDAA520.toInt()
    const val GRAY = 0xFF808080.toInt()
    const val GREY = 0xFF808080.toInt()
    const val GREEN = 0xFF008000.toInt()
    const val GREEN_YELLOW = 0xFFADFF2F.toInt()
    const val HONEY_DEW = 0xFFF0FFF0.toInt()
    const val HOT_PINK = 0xFFFF69B4.toInt()
    const val INDIAN_RED = 0xFFCD5C5C.toInt()
    const val INDIGO = 0xFF4B0082.toInt()
    const val IVORY = 0xFFFFFFF0.toInt()
    const val KHAKI = 0xFFF0E68C.toInt()
    const val LAVENDER = 0xFFE6E6FA.toInt()
    const val LAVENDER_BLUSH = 0xFFFFF0F5.toInt()
    const val LAWN_GREEN = 0xFF7CFC00.toInt()
    const val LEMON_CHIFFON = 0xFFFFFACD.toInt()
    const val LIGHT_BLUE = 0xFFADD8E6.toInt()
    const val LIGHT_CORAL = 0xFFF08080.toInt()
    const val LIGHT_CYAN = 0xFFE0FFFF.toInt()
    const val LIGHT_GOLDEN_ROD_YELLOW = 0xFFFAFAD2.toInt()
    const val LIGHT_GRAY = 0xFFD3D3D3.toInt()
    const val LIGHT_GREY = 0xFFD3D3D3.toInt()
    const val LIGHT_GREEN = 0xFF90EE90.toInt()
    const val LIGHT_PINK = 0xFFFFB6C1.toInt()
    const val LIGHT_SALMON = 0xFFFFA07A.toInt()
    const val LIGHT_SEA_GREEN = 0xFF20B2AA.toInt()
    const val LIGHT_SKY_BLUE = 0xFF87CEFA.toInt()
    const val LIGHT_SLATE_GRAY = 0xFF778899.toInt()
    const val LIGHT_SLATE_GREY = 0xFF778899.toInt()
    const val LIGHT_STEEL_BLUE = 0xFFB0C4DE.toInt()
    const val LIGHT_YELLOW = 0xFFFFFFE0.toInt()
    const val LIME = 0xFF00FF00.toInt()
    const val LIME_GREEN = 0xFF32CD32.toInt()
    const val LINEN = 0xFFFAF0E6.toInt()
    const val MAGENTA = 0xFFFF00FF.toInt()
    const val MAROON = 0xFF800000.toInt()
    const val MEDIUM_AQUA_MARINE = 0xFF66CDAA.toInt()
    const val MEDIUM_BLUE = 0xFF0000CD.toInt()
    const val MEDIUM_ORCHID = 0xFFBA55D3.toInt()
    const val MEDIUM_PURPLE = 0xFF9370DB.toInt()
    const val MEDIUM_SEA_GREEN = 0xFF3CB371.toInt()
    const val MEDIUM_SLATE_BLUE = 0xFF7B68EE.toInt()
    const val MEDIUM_SPRING_GREEN = 0xFF00FA9A.toInt()
    const val MEDIUM_TURQUOISE = 0xFF48D1CC.toInt()
    const val MEDIUM_VIOLET_RED = 0xFFC71585.toInt()
    const val MIDNIGHT_BLUE = 0xFF191970.toInt()
    const val MINT_CREAM = 0xFFF5FFFA.toInt()
    const val MISTY_ROSE = 0xFFFFE4E1.toInt()
    const val MOCCASIN = 0xFFFFE4B5.toInt()
    const val NAVAJO_WHITE = 0xFFFFDEAD.toInt()
    const val NAVY = 0xFF000080.toInt()
    const val OLD_LACE = 0xFFFDF5E6.toInt()
    const val OLIVE = 0xFF808000.toInt()
    const val OLIVE_DRAB = 0xFF6B8E23.toInt()
    const val ORANGE = 0xFFFFA500.toInt()
    const val ORANGE_RED = 0xFFFF4500.toInt()
    const val ORCHID = 0xFFDA70D6.toInt()
    const val PALE_GOLDEN_ROD = 0xFFEEE8AA.toInt()
    const val PALE_GREEN = 0xFF98FB98.toInt()
    const val PALE_TURQUOISE = 0xFFAFEEEE.toInt()
    const val PALE_VIOLET_RED = 0xFFDB7093.toInt()
    const val PAPAYA_WHIP = 0xFFFFEFD5.toInt()
    const val PEACH_PUFF = 0xFFFFDAB9.toInt()
    const val PERU = 0xFFCD853F.toInt()
    const val PINK = 0xFFFFC0CB.toInt()
    const val PLUM = 0xFFDDA0DD.toInt()
    const val POWDER_BLUE = 0xFFB0E0E6.toInt()
    const val PURPLE = 0xFF800080.toInt()
    const val REBECCA_PURPLE = 0xFF663399.toInt()
    const val RED = 0xFFFF0000.toInt()
    const val ROSY_BROWN = 0xFFBC8F8F.toInt()
    const val ROYAL_BLUE = 0xFF4169E1.toInt()
    const val SADDLE_BROWN = 0xFF8B4513.toInt()
    const val SALMON = 0xFFFA8072.toInt()
    const val SANDY_BROWN = 0xFFF4A460.toInt()
    const val SEA_GREEN = 0xFF2E8B57.toInt()
    const val SEA_SHELL = 0xFFFFF5EE.toInt()
    const val SIENNA = 0xFFA0522D.toInt()
    const val SILVER = 0xFFC0C0C0.toInt()
    const val SKY_BLUE = 0xFF87CEEB.toInt()
    const val SLATE_BLUE = 0xFF6A5ACD.toInt()
    const val SLATE_GRAY = 0xFF708090.toInt()
    const val SLATE_GREY = 0xFF708090.toInt()
    const val SNOW = 0xFFFFFAFA.toInt()
    const val SPRING_GREEN = 0xFF00FF7F.toInt()
    const val STEEL_BLUE = 0xFF4682B4.toInt()
    const val TAN = 0xFFD2B48C.toInt()
    const val TEAL = 0xFF008080.toInt()
    const val THISTLE = 0xFFD8BFD8.toInt()
    const val TOMATO = 0xFFFF6347.toInt()
    const val TURQUOISE = 0xFF40E0D0.toInt()
    const val VIOLET = 0xFFEE82EE.toInt()
    const val WHEAT = 0xFFF5DEB3.toInt()
    const val WHITE = 0xFFFFFFFF.toInt()
    const val WHITE_SMOKE = 0xFFF5F5F5.toInt()
    const val YELLOW = 0xFFFFFF00.toInt()
    const val YELLOW_GREEN = 0xFF9ACD32.toInt()

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
            "YELLOW_GREEN" to YELLOW_GREEN
        )
}
