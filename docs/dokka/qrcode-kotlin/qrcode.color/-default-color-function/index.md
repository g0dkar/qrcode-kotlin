//[qrcode-kotlin](../../../index.md)/[qrcode.color](../index.md)/[DefaultColorFunction](index.md)

# DefaultColorFunction

[common]\
open class [DefaultColorFunction](index.md)(foreground: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.BLACK, background: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE) : [QRCodeColorFunction](../-q-r-code-color-function/index.md)

Default function for the QRCode cell color. Returns a color for the foreground (&quot;dark&quot;) and another for the background and margin.

The default colors is [Colors.BLACK](../-colors/-b-l-a-c-k.md) for the foreground and [Colors.WHITE](../-colors/-w-h-i-t-e.md) for the background.

## Constructors

| | |
|---|---|
| [DefaultColorFunction](-default-color-function.md) | [common]<br>constructor(foreground: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.BLACK, background: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE) |

## Functions

| Name | Summary |
|---|---|
| [beforeRender](../-q-r-code-color-function/before-render.md) | [common]<br>open fun [beforeRender](../-q-r-code-color-function/before-render.md)(qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>Called before rendering starts, to setup something if needed |
| [bg](bg.md) | [common]<br>open override fun [bg](bg.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the background color |
| [colorFn](../-q-r-code-color-function/color-fn.md) | [common]<br>open fun [colorFn](../-q-r-code-color-function/color-fn.md)(square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [fg](fg.md) | [common]<br>open override fun [fg](fg.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the foreground color |
| [margin](margin.md) | [common]<br>open override fun [margin](margin.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the margin color. Defaults to [bg](bg.md) |
