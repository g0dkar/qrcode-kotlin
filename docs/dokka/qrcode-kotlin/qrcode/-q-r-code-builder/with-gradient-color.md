//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)/[withGradientColor](with-gradient-color.md)

# withGradientColor

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [withGradientColor](with-gradient-color.md)(startColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), endColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, vertical: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = true): [QRCodeBuilder](index.md)

Uses a [LinearGradientColorFunction](../../qrcode.color/-linear-gradient-color-function/index.md) to choose colors for the QRCode.

By default, the gradient will be a vertical one (top-to-bottom)

If [endColor](with-gradient-color.md) is `null`, a [DefaultColorFunction](../../qrcode.color/-default-color-function/index.md) will be used instead.

#### See also

| |
|---|
| [Colors](../../qrcode.color/-colors/index.md) |
