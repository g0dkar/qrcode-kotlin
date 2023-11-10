//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCode](index.md)/[QRCode](-q-r-code.md)

# QRCode

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

constructor(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_SQUARE_SIZE, colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md) = DefaultColorFunction(), shapeFn: [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md) = DefaultShapeFunction(squareSize, innerSpace = 0), graphicsFactory: [QRCodeGraphicsFactory](../../qrcode.render/-q-r-code-graphics-factory/index.md) = QRCodeGraphicsFactory(), doBefore: [QRCode](index.md).([QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) = EMPTY_FN, doAfter: [QRCode](index.md).([QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) = EMPTY_FN)
