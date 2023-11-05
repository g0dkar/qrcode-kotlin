//[qrcode-kotlin](../../../index.md)/[qrcode.color](../index.md)/[Colors](index.md)/[withAlpha](with-alpha.md)

# withAlpha

[common]\

@[JvmStatic](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-static/index.html)

fun [withAlpha](with-alpha.md)(color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), alpha: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

Returns the specified color with an added alpha channel. That means a transparent/opaque color.

`alpha` ranges from 0 (completely transparent) to 255 (completely visible). Values outside this range are [coerced](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/index.html) into it.
