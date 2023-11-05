//[qrcode-kotlin](../../../index.md)/[qrcode.raw](../index.md)/[QRCodeProcessor](index.md)/[renderShaded](render-shaded.md)

# renderShaded

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [renderShaded](render-shaded.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, rawData: [QRCodeRawData](../-q-r-code-raw-data/index.md) = encode(), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) = graphicsFactory.newGraphicsSquare(
            computeImageSize(
                cellSize,
                margin,
                rawData,
            ),
        ), renderer: ([Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)

Renders a QR Code image based on its [computed data](encode.md).

This function provides a way to implement more artistic QRCodes. The [renderer](render-shaded.md) is a function that draws a single square of the QRCode. It receives 4 parameters: the `(x, y)` coordinates where the square is, the [cellData](../../qrcode.internals/-q-r-code-square/index.md) and the [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) for it to freely draw.

*Tip: for better looking QR Codes, try using* [*QRCode*](../../qrcode/-q-r-code/index.md) *instead ;)*

#### Return

A [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) with the QR Code rendered on it. It can then be saved or manipulated as desired.

#### Parameters

common

| | |
|---|---|
| cellSize | The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`. |
| margin | Amount of space **in pixels** to add as a margin around the rendered QR Code. Defaults to `0`. |
| rawData | The data matrix of the QR Code. Defaults to [this.encode()](encode.md). |
| qrCodeGraphics | The [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) where the QRCode will be painted into. |
| renderer | Lambda that draws a single QRCode square. It receives as parameters the `(x, y)` of the cell, the [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md) (aka &quot;cell&quot;) being drawn and a [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) for it to draw the square. |

#### See also

| |
|---|
| [QRCode](../../qrcode/-q-r-code/index.md) |
| [QRCode.Companion.ofSquares](../../qrcode/-q-r-code/-companion/of-squares.md) |
| [QRCode.Companion.ofCircles](../../qrcode/-q-r-code/-companion/of-circles.md) |
| [QRCode.Companion.ofRoundedSquares](../../qrcode/-q-r-code/-companion/of-rounded-squares.md) |
| [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md) |
| [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) |
| [Colors](../../qrcode.color/-colors/index.md) |
