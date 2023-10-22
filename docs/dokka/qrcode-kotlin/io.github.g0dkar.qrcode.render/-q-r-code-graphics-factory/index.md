//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode.render](../index.md)/[QRCodeGraphicsFactory](index.md)

# QRCodeGraphicsFactory

[common]\
open class [QRCodeGraphicsFactory](index.md)

A class used by [QRCode](../../io.github.g0dkar.qrcode/-q-r-code/index.md) to build instances of [QRCodeGraphics](../-q-r-code-graphics/index.md).

It builds the default [QRCodeGraphics](../-q-r-code-graphics/index.md) available for the platform.

You might extend it to generate customized [QRCodeGraphics](../-q-r-code-graphics/index.md) instances.

#### Author

Rafael Lins - g0dkar

## Constructors

| | |
|---|---|
| [QRCodeGraphicsFactory](-q-r-code-graphics-factory.md) | [common]<br>constructor() |

## Functions

| Name | Summary |
|---|---|
| [newGraphics](new-graphics.md) | [common]<br>fun [newGraphics](new-graphics.md)(width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [QRCodeGraphics](../-q-r-code-graphics/index.md)<br>Creates a new [QRCodeGraphics](../-q-r-code-graphics/index.md) instance. |
| [newGraphicsSquare](new-graphics-square.md) | [common]<br>fun [newGraphicsSquare](new-graphics-square.md)(size: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [QRCodeGraphics](../-q-r-code-graphics/index.md)<br>Creates a `size` by `size` square [QRCodeGraphics](../-q-r-code-graphics/index.md) instance. |
