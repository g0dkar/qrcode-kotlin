//[qrcode-kotlin](../../index.md)/[qrcode.internals](index.md)

# Package-level declarations

## Types

| Name | Summary |
|---|---|
| [QRCodeRegion](-q-r-code-region/index.md) | [common]<br>enum [QRCodeRegion](-q-r-code-region/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[QRCodeRegion](-q-r-code-region/index.md)&gt; <br>Represents which part/region of a given square type a particular, single square is. |
| [QRCodeSquare](-q-r-code-square/index.md) | [common]<br>data class [QRCodeSquare](-q-r-code-square/index.md)(var dark: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val moduleSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val squareInfo: [QRCodeSquareInfo](-q-r-code-square-info/index.md) = QRCodeSquareInfo(DEFAULT, UNKNOWN), val rowSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 1, val colSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 1, val parent: [QRCodeSquare](-q-r-code-square/index.md)? = null)<br>Represents a single QRCode square unit. It has information about its &quot;color&quot; (either dark or bright), its position (row and column) and what it represents. |
| [QRCodeSquareInfo](-q-r-code-square-info/index.md) | [common]<br>data class [QRCodeSquareInfo](-q-r-code-square-info/index.md)(val type: [QRCodeSquareType](-q-r-code-square-type/index.md), val region: [QRCodeRegion](-q-r-code-region/index.md))<br>Returns information on the square itself. It has the [type](-q-r-code-square-info/type.md) of square and its [region](-q-r-code-square-info/region.md) within its relative type. |
| [QRCodeSquareType](-q-r-code-square-type/index.md) | [common]<br>enum [QRCodeSquareType](-q-r-code-square-type/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[QRCodeSquareType](-q-r-code-square-type/index.md)&gt; <br>The types available for squares in a QRCode. |
