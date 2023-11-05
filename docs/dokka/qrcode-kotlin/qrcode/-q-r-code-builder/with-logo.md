//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)/[withLogo](with-logo.md)

# withLogo

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [withLogo](with-logo.md)(logo: [ByteArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)?, width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), clearLogoArea: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = true): [QRCodeBuilder](index.md)

Adds an image on top of the QRCode, at the center of it.

If [clearLogoArea](with-logo.md) is `false` the cells behind the logo will be drawn as normal.
