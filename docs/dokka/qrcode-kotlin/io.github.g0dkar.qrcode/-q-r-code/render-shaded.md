//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode](../index.md)/[QRCode](index.md)/[renderShaded](render-shaded.md)

# renderShaded

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [renderShaded](render-shaded.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, rawData: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../../io.github.g0dkar.qrcode.internals/-q-r-code-square/index.md)?&gt;&gt; = encode(), qrCodeGraphics: [QRCodeGraphics](../../io.github.g0dkar.qrcode.render/-q-r-code-graphics/index.md) = qrCodeGraphicsFactory.newGraphicsSquare(
            computeImageSize(
                cellSize,
                margin,
                rawData
            )
        ), renderer: ([QRCodeSquare](../../io.github.g0dkar.qrcode.internals/-q-r-code-square/index.md), [QRCodeGraphics](../../io.github.g0dkar.qrcode.render/-q-r-code-graphics/index.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)): [QRCodeGraphics](../../io.github.g0dkar.qrcode.render/-q-r-code-graphics/index.md)

Renders a QR Code image based on its [computed data](encode.md).

This function provides a way to implement more artistic QRCodes. The [renderer](render-shaded.md) is a function that draws a single square of the QRCode. It receives 2 parameters: [cellData](../../io.github.g0dkar.qrcode.internals/-q-r-code-square/index.md) and a [QRCodeGraphics](../../io.github.g0dkar.qrcode.render/-q-r-code-graphics/index.md) for it to freely draw. After finished, the canvas will be placed into the final image in its respective place.

To show this, here's a renderer that makes a QR Code that is half [blue](../../io.github.g0dkar.qrcode.render/-colors/-b-l-u-e.md) and half [red](../../io.github.g0dkar.qrcode.render/-colors/-r-e-d.md):

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

A [QRCodeGraphics](../../io.github.g0dkar.qrcode.render/-q-r-code-graphics/index.md) with the QR Code rendered on it. It can then be saved or manipulated as desired.

#### See also

common

| |
|---|
| [QRCodeSquare](../../io.github.g0dkar.qrcode.internals/-q-r-code-square/index.md) |
| [QRCodeGraphics](../../io.github.g0dkar.qrcode.render/-q-r-code-graphics/index.md) |
| [Colors](../../io.github.g0dkar.qrcode.render/-colors/index.md) |

#### Parameters

common

| | |
|---|---|
| cellSize | The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`. |
| margin | Amount of space **in pixels** to add as a margin around the rendered QR Code. Defaults to `0`. |
| rawData | The data matrix of the QR Code. Defaults to [this.encode()](encode.md). |
| qrCodeGraphics | The [QRCodeGraphics](../../io.github.g0dkar.qrcode.render/-q-r-code-graphics/index.md) where the QRCode will be painted into. |
| renderer | Lambda that draws a single QRCode square. It receives as parameters the [QRCodeSquare](../../io.github.g0dkar.qrcode.internals/-q-r-code-square/index.md) being draw and a [QRCodeGraphics](../../io.github.g0dkar.qrcode.render/-q-r-code-graphics/index.md) for it to draw the square. |
