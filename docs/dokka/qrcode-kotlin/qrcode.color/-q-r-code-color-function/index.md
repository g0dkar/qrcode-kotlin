//[qrcode-kotlin](../../../index.md)/[qrcode.color](../index.md)/[QRCodeColorFunction](index.md)

# QRCodeColorFunction

interface [QRCodeColorFunction](index.md)

A function that selects a color for a give square. The default implementation chooses between [fg](fg.md), [bg](bg.md) and [margin](margin.md) given what should be rendered.

#### Inheritors

| |
|---|
| [DefaultColorFunction](../-default-color-function/index.md) |
| [LinearGradientColorFunction](../-linear-gradient-color-function/index.md) |

## Functions

| Name | Summary |
|---|---|
| [beforeRender](before-render.md) | [common]<br>open fun [beforeRender](before-render.md)(qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>Called before rendering starts, to setup something if needed |
| [bg](bg.md) | [common]<br>abstract fun [bg](bg.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the background color |
| [colorFn](color-fn.md) | [common]<br>open fun [colorFn](color-fn.md)(square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [fg](fg.md) | [common]<br>abstract fun [fg](fg.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the foreground color |
| [margin](margin.md) | [common]<br>open fun [margin](margin.md)(row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>What is the margin color. Defaults to [bg](bg.md) |
