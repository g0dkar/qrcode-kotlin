//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode.internals](../index.md)/[QRCodeSquare](index.md)

# QRCodeSquare

[common]\
data class [QRCodeSquare](index.md)(var dark: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), val row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val moduleSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val squareInfo: [QRCodeSquareInfo](../-q-r-code-square-info/index.md) = QRCodeSquareInfo(DEFAULT, UNKNOWN))

Represents a single QRCode square unit. It has information about its &quot;color&quot; (either dark or bright), its position (row and column) and what it represents.

It can be part of a position probe (aka those big squares at the extremities), part of a position adjustment square, part of a timing pattern or just another square as any other :)

#### Author

Rafael Lins - g0dkar

## Constructors

| | |
|---|---|
| [QRCodeSquare](-q-r-code-square.md) | [common]<br>constructor(dark: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), row: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), col: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), moduleSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), squareInfo: [QRCodeSquareInfo](../-q-r-code-square-info/index.md) = QRCodeSquareInfo(DEFAULT, UNKNOWN)) |

## Properties

| Name | Summary |
|---|---|
| [col](col.md) | [common]<br>val [col](col.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>The column (left-to-right) that this square represents. |
| [dark](dark.md) | [common]<br>var [dark](dark.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Is this a painted square? |
| [moduleSize](module-size.md) | [common]<br>val [moduleSize](module-size.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>How big is the whole QRCode matrix? (e.g. if this is &quot;16&quot; then this is part of a 16x16 matrix) |
| [row](row.md) | [common]<br>val [row](row.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>The row (top-to-bottom) that this square represents. |
| [squareInfo](square-info.md) | [common]<br>val [squareInfo](square-info.md): [QRCodeSquareInfo](../-q-r-code-square-info/index.md)<br>What does this square represent within the QRCode? |

## Functions

| Name | Summary |
|---|---|
| [absoluteX](absolute-x.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [absoluteX](absolute-x.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = QRCode.DEFAULT_CELL_SIZE): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Calculates where is the X position where this square will be in the main QRCode image given a [cellSize](absolute-x.md). |
| [absoluteY](absolute-y.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [absoluteY](absolute-y.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = QRCode.DEFAULT_CELL_SIZE): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Calculates where is the Y position where this square will be in the main QRCode image given a [cellSize](absolute-y.md). |
