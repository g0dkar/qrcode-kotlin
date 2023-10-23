//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCode](index.md)/[renderShaded](render-shaded.md)

# renderShaded

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [renderShaded](render-shaded.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, rawData: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md)?&gt;&gt; = encode(), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) = qrCodeGraphicsFactory.newGraphicsSquare(
            computeImageSize(
                cellSize,
                margin,
                rawData
            )
        ), renderer: ([QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)

Renders a QR Code image based on its [computed data](encode.md).

This function provides a way to implement more artistic QRCodes. The [renderer](render-shaded.md) is a function that draws a single square of the QRCode. It receives 2 parameters: [cellData](../../qrcode.internals/-q-r-code-square/index.md) and a [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) for it to freely draw. After finished, the canvas will be placed into the final image in its respective place.

To show this, here's a renderer that makes a QR Code that is half [blue](../-colors/-b-l-u-e.md) and half [red](../-colors/-r-e-d.md):

```kotlin
QRCode("example").renderShaded { cellData, graphics ->
    if (cellData.type != QRCodeSquareType.MARGIN && cellData.dark) {
        if (cellData.row cellData.size / 2) {
            graphics.fill(Colors.BLUE)
        }
        else {
            graphics.fill(Colors.RED)
        }
    } else {
        graphics.fill(Colors.WHITE)
    }
}
```

*Tip: for the &quot;traditional look-and-feel&quot; QR Code, try setting* [*margin*](render-shaded.md) *equal to* [*cellSize*](render-shaded.md)*.*

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
| renderer | Lambda that draws a single QRCode square. It receives as parameters the [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md) being draw and a [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) for it to draw the square. |

#### See also

| |
|---|
| [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md) |
| [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) |
| [Colors](../-colors/index.md) |
