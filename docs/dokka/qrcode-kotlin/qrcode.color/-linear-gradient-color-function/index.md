//[qrcode-kotlin](../../../index.md)/[qrcode.color](../index.md)/[LinearGradientColorFunction](index.md)

# LinearGradientColorFunction

[common]\
class [LinearGradientColorFunction](index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(val startForegroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val endForegroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val backgroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE, var vertical: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = true) : [QRCodeColorFunction](../-q-r-code-color-function/index.md)

## Constructors

| | |
|---|---|
| [LinearGradientColorFunction](-linear-gradient-color-function.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>constructor(startForegroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), endForegroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), backgroundColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE, vertical: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = true) |

## Properties

| Name | Summary |
|---|---|
| [backgroundColor](background-color.md) | [common]<br>val [backgroundColor](background-color.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [endForegroundColor](end-foreground-color.md) | [common]<br>val [endForegroundColor](end-foreground-color.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [startForegroundColor](start-foreground-color.md) | [common]<br>val [startForegroundColor](start-foreground-color.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [vertical](vertical.md) | [common]<br>var [vertical](vertical.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

## Functions

| Name | Summary |
|---|---|
| [beforeRender](../-q-r-code-color-function/before-render.md) | [common]<br>open fun [beforeRender](../-q-r-code-color-function/before-render.md)(qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>Called before rendering starts, to setup something if needed |
| [bg](bg.md) | [common]<br>open override fun [bg](bg.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the background color |
| [colorFn](../-q-r-code-color-function/color-fn.md) | [common]<br>open fun [colorFn](../-q-r-code-color-function/color-fn.md)(square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [fg](fg.md) | [common]<br>open override fun [fg](fg.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the foreground color |
| [margin](margin.md) | [common]<br>open override fun [margin](margin.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the margin color. Defaults to [bg](bg.md) |
