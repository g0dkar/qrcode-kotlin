//[qrcode-kotlin](../../../index.md)/[qrcode.shape](../index.md)/[DefaultShapeFunction](index.md)

# DefaultShapeFunction

open class [DefaultShapeFunction](index.md)(val squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 1) : [QRCodeShapeFunction](../-q-r-code-shape-function/index.md)

#### Inheritors

| |
|---|
| [RoundSquaresShapeFunction](../-round-squares-shape-function/index.md) |

## Constructors

| | |
|---|---|
| [DefaultShapeFunction](-default-shape-function.md) | [common]<br>constructor(squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 1) |

## Properties

| Name | Summary |
|---|---|
| [squareSize](square-size.md) | [common]<br>val [squareSize](square-size.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

## Functions

| Name | Summary |
|---|---|
| [beforeRender](../-q-r-code-shape-function/before-render.md) | [common]<br>open fun [beforeRender](../-q-r-code-shape-function/before-render.md)(qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>Called before rendering starts, to set up something if needed |
| [drawRect](draw-rect.md) | [common]<br>open fun [drawRect](draw-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), thickness: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>The function to actually draw the outline of a cell. Extend this to easily create your own shape :) |
| [fillRect](fill-rect.md) | [common]<br>open fun [fillRect](fill-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>The function to actually draw a filled cell. Extend this to easily create your own shape :) |
| [renderControlSquare](render-control-square.md) | [common]<br>open override fun [renderControlSquare](render-control-square.md)(xOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), yOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md), square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md))<br>Renders a control square (those bigger ones on the edges). |
| [renderSquare](render-square.md) | [common]<br>open override fun [renderSquare](render-square.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md), square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md))<br>Renders a single square. |
