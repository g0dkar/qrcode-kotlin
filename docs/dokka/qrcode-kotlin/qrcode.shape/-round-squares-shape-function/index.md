//[qrcode-kotlin](../../../index.md)/[qrcode.shape](../index.md)/[RoundSquaresShapeFunction](index.md)

# RoundSquaresShapeFunction

open class [RoundSquaresShapeFunction](index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(val squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, radius: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = defaultRadius(squareSize), innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = defaultInnerSpace(squareSize)) : [DefaultShapeFunction](../-default-shape-function/index.md)

Creates &quot;rounded squares&quot; as the shapes on the QRCode.

By default, the value is set to `squareSize / 4`

#### Inheritors

| |
|---|
| [CircleShapeFunction](../-circle-shape-function/index.md) |

## Constructors

| | |
|---|---|
| [RoundSquaresShapeFunction](-round-squares-shape-function.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>constructor(squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, radius: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = defaultRadius(squareSize), innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = defaultInnerSpace(squareSize)) |

## Types

| Name | Summary |
|---|---|
| [Companion](-companion/index.md) | [common]<br>object [Companion](-companion/index.md) |

## Properties

| Name | Summary |
|---|---|
| [squareSize](../-default-shape-function/square-size.md) | [common]<br>val [squareSize](../-default-shape-function/square-size.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) |

## Functions

| Name | Summary |
|---|---|
| [beforeRender](../-q-r-code-shape-function/before-render.md) | [common]<br>open fun [beforeRender](../-q-r-code-shape-function/before-render.md)(qrCode: [QRCode](../../qrcode/-q-r-code/index.md), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>Called before rendering starts, to set up something if needed |
| [drawRect](draw-rect.md) | [common]<br>open override fun [drawRect](draw-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), thickness: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-double/index.html), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>The function to actually draw the outline of a cell. Extend this to easily create your own shape :) |
| [fillRect](fill-rect.md) | [common]<br>open override fun [fillRect](fill-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>The function to actually draw a filled cell. Extend this to easily create your own shape :) |
| [renderControlSquare](../-default-shape-function/render-control-square.md) | [common]<br>open override fun [renderControlSquare](../-default-shape-function/render-control-square.md)(xOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), yOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md), square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md))<br>Renders a control square (those bigger ones on the edges). |
| [renderSquare](../-default-shape-function/render-square.md) | [common]<br>open override fun [renderSquare](../-default-shape-function/render-square.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md), square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md))<br>Renders a single square. |
