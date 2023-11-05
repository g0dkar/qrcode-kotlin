//[qrcode-kotlin](../../index.md)/[qrcode.shape](index.md)

# Package-level declarations

## Types

| Name | Summary |
|---|---|
| [CircleShapeFunction](-circle-shape-function/index.md) | [common]<br>open class [CircleShapeFunction](-circle-shape-function/index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(val squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = defaultInnerSpace(squareSize)) : [RoundSquaresShapeFunction](-round-squares-shape-function/index.md)<br>Creates circles instead of squares while drawing the QRCode. By default, the circles will keep `8% of the squareSize` pixels away from each other, to have a more pleasing aesthetics. |
| [DefaultShapeFunction](-default-shape-function/index.md) | [common]<br>open class [DefaultShapeFunction](-default-shape-function/index.md)(val squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 1) : [QRCodeShapeFunction](-q-r-code-shape-function/index.md) |
| [QRCodeShapeFunction](-q-r-code-shape-function/index.md) | [common]<br>interface [QRCodeShapeFunction](-q-r-code-shape-function/index.md)<br>Function to render (draw) a single square. |
| [RoundSquaresShapeFunction](-round-squares-shape-function/index.md) | [common]<br>open class [RoundSquaresShapeFunction](-round-squares-shape-function/index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(val squareSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, radius: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = defaultRadius(squareSize), innerSpace: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = defaultInnerSpace(squareSize)) : [DefaultShapeFunction](-default-shape-function/index.md)<br>Creates &quot;rounded squares&quot; as the shapes on the QRCode. |
