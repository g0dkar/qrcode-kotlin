//[qrcode-kotlin](../../../index.md)/[qrcode.shape](../index.md)/[RoundSquaresShapeFunction](index.md)/[fillRect](fill-rect.md)

# fillRect

[common]\
open override fun [fillRect](fill-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), canvas: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md))

The function to actually draw a filled cell. Extend this to easily create your own shape :)

Used to draw ALL cells of the QRCode except the outline of the larger ones on the edges.
