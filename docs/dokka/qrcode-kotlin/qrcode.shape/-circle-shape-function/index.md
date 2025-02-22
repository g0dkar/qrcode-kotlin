//[qrcode-kotlin](../../../index.md)/[qrcode.shape](../index.md)/[CircleShapeFunction](index.md)

# CircleShapeFunction

open class [CircleShapeFunction](index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(val squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = defaultInnerSpace(squareSize)) : [RoundSquaresShapeFunction](../-round-squares-shape-function/index.md)

Creates circles instead of squares while drawing the QRCode. By default, the circles will keep `8% of the squareSize` pixels away from each other, to have a more pleasing aesthetics.

#### Parameters

common

| | |
|---|---|
| squareSize | How big each &quot;square&quot; will be, in pixels (defaults to [DEFAULT_CELL_SIZE](../../qrcode.raw/-q-r-code-processor/-companion/-d-e-f-a-u-l-t_-c-e-l-l_-s-i-z-e.md)) |
| innerSpace | How much space inside each &quot;square&quot; will be left empty (1 = 1px of the inner area won't be drawn) |

## Constructors

| | |
|---|---|
| [CircleShapeFunction](-circle-shape-function.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>constructor(squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = defaultInnerSpace(squareSize)) |

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
| [drawRect](../-round-squares-shape-function/draw-rect.md) | [common]<br>open override fun [drawRect](../-round-squares-shape-function/draw-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), thickness: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-double/index.html), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>The function to actually draw the outline of a cell. Extend this to easily create your own shape :) |
| [fillRect](../-round-squares-shape-function/fill-rect.md) | [common]<br>open override fun [fillRect](../-round-squares-shape-function/fill-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))<br>The function to actually draw a filled cell. Extend this to easily create your own shape :) |
| [renderControlSquare](../-default-shape-function/render-control-square.md) | [common]<br>open override fun [renderControlSquare](../-default-shape-function/render-control-square.md)(xOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), yOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md), square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md))<br>Renders a control square (those bigger ones on the edges). |
| [renderSquare](../-default-shape-function/render-square.md) | [common]<br>open override fun [renderSquare](../-default-shape-function/render-square.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md), square: [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), qrCode: [QRCode](../../qrcode/-q-r-code/index.md))<br>Renders a single square. |
