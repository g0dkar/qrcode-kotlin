//[qrcode-kotlin](../../../index.md)/[qrcode.shape](../index.md)/[QRCodeShapeFunction](index.md)

# QRCodeShapeFunction

interface [QRCodeShapeFunction](index.md)

Function to render (draw) a single square.

#### Inheritors

| |
|---|
| [DefaultShapeFunction](../-default-shape-function/index.md) |

## Functions

| Name | Summary |
|---|---|
| [beforeRender](before-render.md) | [common]<br>open fun [beforeRender](before-render.md)(qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>Called before rendering starts, to set up something if needed |
| [renderControlSquare](render-control-square.md) | [common]<br>abstract fun [renderControlSquare](render-control-square.md)(xOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), yOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md), square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md))<br>Renders a control square (those bigger ones on the edges). |
| [renderSquare](render-square.md) | [common]<br>abstract fun [renderSquare](render-square.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md), square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md))<br>Renders a single square. |
