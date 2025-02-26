//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCode](index.md)

# QRCode

class [QRCode](index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(val data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html), val squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = DEFAULT_SQUARE_SIZE, val colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md) = DefaultColorFunction(), val shapeFn: [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md) = DefaultShapeFunction(squareSize, innerSpace = 0), var graphicsFactory: [QRCodeGraphicsFactory](../../qrcode.render/-q-r-code-graphics-factory/index.md) = QRCodeGraphicsFactory(), errorCorrectionLevel: [ErrorCorrectionLevel](../../qrcode.raw/-error-correction-level/index.md) = ErrorCorrectionLevel.VERY_HIGH, minTypeNum: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = 6, forceMinTypeNum: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html) = false, doBefore: [QRCode](index.md).([QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-unit/index.html) = EMPTY_FN, doAfter: [QRCode](index.md).([QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-unit/index.html) = EMPTY_FN)

A simple class to create easily create aesthetic pleasing QRCodes.

It'll create a [QRCodeProcessor](../../qrcode.raw/-q-r-code-processor/index.md) and build a custom render function on top of it.

It includes things like:

- 
   QR Codes with a logo at the center
- 
   QR Codes with dots instead of squares
- 
   Colorful QR Codes (including linear gradient colors)

If you have a suggestion for a nice QR Code style, feel free to open a PR, or an Issue with your suggestion :)

#### Author

Rafael Lins - g0dkar

#### See also

| |
|---|
| [QRCodeBuilder](../-q-r-code-builder/index.md) |
| [QRCode.Companion.ofSquares](-companion/of-squares.md) |
| [QRCode.Companion.ofCircles](-companion/of-circles.md) |
| [QRCode.Companion.ofRoundedSquares](-companion/of-rounded-squares.md) |

## Constructors

| | |
|---|---|
| [QRCode](-q-r-code.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>constructor(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html), squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = DEFAULT_SQUARE_SIZE, colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md) = DefaultColorFunction(), shapeFn: [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md) = DefaultShapeFunction(squareSize, innerSpace = 0), graphicsFactory: [QRCodeGraphicsFactory](../../qrcode.render/-q-r-code-graphics-factory/index.md) = QRCodeGraphicsFactory(), errorCorrectionLevel: [ErrorCorrectionLevel](../../qrcode.raw/-error-correction-level/index.md) = ErrorCorrectionLevel.VERY_HIGH, minTypeNum: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = 6, forceMinTypeNum: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html) = false, doBefore: [QRCode](index.md).([QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-unit/index.html) = EMPTY_FN, doAfter: [QRCode](index.md).([QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-unit/index.html) = EMPTY_FN) |

## Types

| Name | Summary |
|---|---|
| [Companion](-companion/index.md) | [common]<br>object [Companion](-companion/index.md) |

## Properties

| Name | Summary |
|---|---|
| [colorFn](color-fn.md) | [common]<br>val [colorFn](color-fn.md): [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md) |
| [computedSize](computed-size.md) | [common]<br>val [computedSize](computed-size.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)<br>Calculated size of the whole QRCode (the final image will be a square of `computedSize` by `computedSize`) |
| [data](data.md) | [common]<br>val [data](data.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html) |
| [graphics](graphics.md) | [common]<br>val [graphics](graphics.md): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)<br>The [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) (aka &quot;canvas&quot;) where all the drawing will happen |
| [graphicsFactory](graphics-factory.md) | [common]<br>var [graphicsFactory](graphics-factory.md): [QRCodeGraphicsFactory](../../qrcode.render/-q-r-code-graphics-factory/index.md) |
| [qrCodeProcessor](qr-code-processor.md) | [common]<br>val [qrCodeProcessor](qr-code-processor.md): [QRCodeProcessor](../../qrcode.raw/-q-r-code-processor/index.md)<br>The underlying [QRCodeProcessor](../../qrcode.raw/-q-r-code-processor/index.md) object that'll do all calculations |
| [rawData](raw-data.md) | [common]<br>val [rawData](raw-data.md): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md)&gt;&gt;<br>Raw QRCode data computed by [QRCodeProcessor](../../qrcode.raw/-q-r-code-processor/index.md) |
| [shapeFn](shape-fn.md) | [common]<br>val [shapeFn](shape-fn.md): [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md) |
| [squareSize](square-size.md) | [common]<br>val [squareSize](square-size.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) |
| [typeNum](type-num.md) | [common]<br>val [typeNum](type-num.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)<br>Computed type number for the given [data](data.md) parameter |

## Functions

| Name | Summary |
|---|---|
| [render](render.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [render](render.md)(qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) = graphics, xOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = 0, yOffset: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = 0): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)<br>Executes all the drawing of the QRCode and returns the [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) of the complete QRCode. |
| [renderToBytes](render-to-bytes.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [renderToBytes](render-to-bytes.md)(format: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-string/index.html) = &quot;PNG&quot;): [ByteArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-byte-array/index.html)<br>Calls [render](render.md) and then returns the bytes of a [format](render-to-bytes.md) (default = PNG) render of the QRCode. |
| [reset](reset.md) | [common]<br>fun [reset](reset.md)()<br>Completely resets the QRCode drawing. After this, you can call [renderToBytes](render-to-bytes.md) or [render](render.md) to redraw the whole QRCode. Useful when you want, for example, a transparent background QRCode to add to a larger image and then the same QRCode drawn on top of a custom background. |
