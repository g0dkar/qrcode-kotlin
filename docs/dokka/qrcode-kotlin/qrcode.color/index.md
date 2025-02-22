//[qrcode-kotlin](../../index.md)/[qrcode.color](index.md)

# Package-level declarations

## Types

| Name | Summary |
|---|---|
| [Colors](-colors/index.md) | [common]<br>object [Colors](-colors/index.md)<br>Just a lot of colors to use when drawing :) |
| [ColorType](-color-type/index.md) | [common]<br>typealias [ColorType](-color-type/index.md) = [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) |
| [DefaultColorFunction](-default-color-function/index.md) | [common]<br>open class [DefaultColorFunction](-default-color-function/index.md)(foreground: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = Colors.BLACK, background: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = Colors.WHITE) : [QRCodeColorFunction](-q-r-code-color-function/index.md)<br>Default function for the QRCode cell color. Returns a color for the foreground (&quot;dark&quot;) and another for the background and margin. |
| [LinearGradientColorFunction](-linear-gradient-color-function/index.md) | [common]<br>class [LinearGradientColorFunction](-linear-gradient-color-function/index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(val startForegroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), val endForegroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), val backgroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = Colors.WHITE, var vertical: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html) = true) : [QRCodeColorFunction](-q-r-code-color-function/index.md) |
| [QRCodeColorFunction](-q-r-code-color-function/index.md) | [common]<br>interface [QRCodeColorFunction](-q-r-code-color-function/index.md)<br>A function that selects a color for a give square. The default implementation chooses between [fg](-q-r-code-color-function/fg.md), [bg](-q-r-code-color-function/bg.md) and [margin](-q-r-code-color-function/margin.md) given what should be rendered. |
