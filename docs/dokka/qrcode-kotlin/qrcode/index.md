//[qrcode-kotlin](../../index.md)/[qrcode](index.md)

# Package-level declarations

## Types

| Name | Summary |
|---|---|
| [QRCode](-q-r-code/index.md) | [common]<br>class [QRCode](-q-r-code/index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(val data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_SQUARE_SIZE, val colorFn: [QRCodeColorFunction](../qrcode.color/-q-r-code-color-function/index.md) = DefaultColorFunction(), val shapeFn: [QRCodeShapeFunction](../qrcode.shape/-q-r-code-shape-function/index.md) = DefaultShapeFunction(squareSize, innerSpace = 0), var graphicsFactory: [QRCodeGraphicsFactory](../qrcode.render/-q-r-code-graphics-factory/index.md) = QRCodeGraphicsFactory(), doBefore: [QRCode](-q-r-code/index.md).([QRCodeGraphics](../qrcode.render/-q-r-code-graphics/index.md), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) = EMPTY_FN, doAfter: [QRCode](-q-r-code/index.md).([QRCodeGraphics](../qrcode.render/-q-r-code-graphics/index.md), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) = EMPTY_FN)<br>A simple class to create easily create aesthetic pleasing QRCodes. |
| [QRCodeBuilder](-q-r-code-builder/index.md) | [common]<br>class [QRCodeBuilder](-q-r-code-builder/index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(shape: [QRCodeBuilder.QRCodeShapesEnum](-q-r-code-builder/-q-r-code-shapes-enum/index.md), customShapeFunction: [QRCodeShapeFunction](../qrcode.shape/-q-r-code-shape-function/index.md)? = null) |