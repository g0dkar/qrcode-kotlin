//[qrcode-kotlin](../../../index.md)/[qrcode.shape](../index.md)/[DefaultShapeFunction](index.md)/[drawRect](draw-rect.md)

# drawRect

[common]\
open fun [drawRect](draw-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), thickness: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))

The function to actually draw the outline of a cell. Extend this to easily create your own shape :)

ONLY used to draw those larger squares on the edges of the QRCode.
