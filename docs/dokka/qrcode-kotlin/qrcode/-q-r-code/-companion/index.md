//[qrcode-kotlin](../../../../index.md)/[qrcode](../../index.md)/[QRCode](../index.md)/[Companion](index.md)

# Companion

[common]\
object [Companion](index.md)

## Properties

| Name | Summary |
|---|---|
| [DEFAULT_SQUARE_SIZE](-d-e-f-a-u-l-t_-s-q-u-a-r-e_-s-i-z-e.md) | [common]<br>const val [DEFAULT_SQUARE_SIZE](-d-e-f-a-u-l-t_-s-q-u-a-r-e_-s-i-z-e.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)<br>Default value of [squareSize](../square-size.md). |

## Functions

| Name | Summary |
|---|---|
| [ofCircles](of-circles.md) | [common]<br>@[JvmStatic](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-static/index.html)<br>fun [ofCircles](of-circles.md)(): [QRCodeBuilder](../../-q-r-code-builder/index.md)<br>Creates a new [QRCodeBuilder](../../-q-r-code-builder/index.md) to build a Fancy QRCode which uses circles as the base shape. |
| [ofCustomShape](of-custom-shape.md) | [common]<br>@[JvmStatic](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-static/index.html)<br>fun [ofCustomShape](of-custom-shape.md)(customShapeFunction: [QRCodeShapeFunction](../../../qrcode.shape/-q-r-code-shape-function/index.md)): [QRCodeBuilder](../../-q-r-code-builder/index.md)<br>Creates a new [QRCodeBuilder](../../-q-r-code-builder/index.md) to build a QRCode which uses a custom shape function. |
| [ofRoundedSquares](of-rounded-squares.md) | [common]<br>@[JvmStatic](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-static/index.html)<br>fun [ofRoundedSquares](of-rounded-squares.md)(): [QRCodeBuilder](../../-q-r-code-builder/index.md)<br>Creates a new [QRCodeBuilder](../../-q-r-code-builder/index.md) to build a Fancy QRCode which uses rounded squares as the base shape. |
| [ofSquares](of-squares.md) | [common]<br>@[JvmStatic](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-static/index.html)<br>fun [ofSquares](of-squares.md)(): [QRCodeBuilder](../../-q-r-code-builder/index.md)<br>Creates a new [QRCodeBuilder](../../-q-r-code-builder/index.md) to build a Fancy QRCode which uses squares as the base shape (this is the default) |
