//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCode](index.md)/[render](render.md)

# render

[common]\
fun [render](render.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, brightColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE, darkColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.BLACK, marginColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)

Renders a QR Code image based on its [computed data](encode.md). This function exists to ease the interop with Java :)

#### Return

A [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) with the QR Code rendered on it. It can then be saved or manipulated as desired.

#### Parameters

common

| | |
|---|---|
| cellSize | The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`. |
| margin | Amount of space **in pixels** to add as a margin around the rendered QR Code. Defaults to `0`. |
| brightColor | Color to be used for the &quot;bright&quot; parts of the QR Code. In RGBA space. Defaults to [white](../-colors/-w-h-i-t-e.md). |
| darkColor | Color to be used for the &quot;dark&quot; parts of the QR Code. In RGBA space. Defaults to [black](../-colors/-b-l-a-c-k.md). |
| marginColor | Color to be used for the &quot;margin&quot; part of the QR Code. In RGBA space. Defaults to [white](../-colors/-w-h-i-t-e.md). |

#### See also

| |
|---|
| [QRCode.renderShaded](render-shaded.md) |
| [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md) |
| [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) |
| [Colors](../-colors/index.md) |

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [render](render.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, rawData: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md)?&gt;&gt; = encode(), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) = qrCodeGraphicsFactory.newGraphicsSquare(
            computeImageSize(
                cellSize,
                margin,
                rawData
            )
        ), brightColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE, darkColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.BLACK, marginColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)

Renders a QR Code image based on its [computed data](encode.md).

*Tip: for the &quot;traditional look-and-feel&quot; QR Code, set* [*margin*](render.md) *equal to* [*cellSize*](render.md)*.*

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
| brightColor | Color to be used for the &quot;bright&quot; parts of the QR Code. In RGBA space. Defaults to [white](../-colors/-w-h-i-t-e.md). |
| darkColor | Color to be used for the &quot;dark&quot; parts of the QR Code. In RGBA space. Defaults to [black](../-colors/-b-l-a-c-k.md). |
| marginColor | Color to be used for the &quot;margin&quot; part of the QR Code. In RGBA space. Defaults to [white](../-colors/-w-h-i-t-e.md). |

#### See also

| |
|---|
| [QRCode.renderShaded](render-shaded.md) |
| [QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md) |
| [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) |
| [Colors](../-colors/index.md) |
