//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)

# QRCodeBuilder

[common]\
class [QRCodeBuilder](index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(shape: [QRCodeBuilder.QRCodeShapesEnum](-q-r-code-shapes-enum/index.md), customShapeFunction: [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md)? = null)

## Constructors

| | |
|---|---|
| [QRCodeBuilder](-q-r-code-builder.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>constructor(shape: [QRCodeBuilder.QRCodeShapesEnum](-q-r-code-shapes-enum/index.md), customShapeFunction: [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md)? = null) |

## Types

| Name | Summary |
|---|---|
| [QRCodeShapesEnum](-q-r-code-shapes-enum/index.md) | [common]<br>enum [QRCodeShapesEnum](-q-r-code-shapes-enum/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[QRCodeBuilder.QRCodeShapesEnum](-q-r-code-shapes-enum/index.md)&gt; |

## Functions

| Name | Summary |
|---|---|
| [build](build.md) | [common]<br>fun [build](build.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [QRCode](../-q-r-code/index.md)<br>Builds a [QRCode](../-q-r-code/index.md) instance ready to use. |
| [withAfterRenderAction](with-after-render-action.md) | [common]<br>fun [withAfterRenderAction](with-after-render-action.md)(action: [QRCode](../-q-r-code/index.md).([QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)): [QRCodeBuilder](index.md)<br>Run a piece of code after the rendering is done. |
| [withBackgroundColor](with-background-color.md) | [common]<br>fun [withBackgroundColor](with-background-color.md)(bgColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [QRCodeBuilder](index.md)<br>Background color of the QRCode. |
| [withBeforeRenderAction](with-before-render-action.md) | [common]<br>fun [withBeforeRenderAction](with-before-render-action.md)(action: [QRCode](../-q-r-code/index.md).([QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)): [QRCodeBuilder](index.md)<br>Run a piece of code before the rendering is done. |
| [withColor](with-color.md) | [common]<br>fun [withColor](with-color.md)(color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [QRCodeBuilder](index.md)<br>Color of the cells of the QRCode. |
| [withCustomColorFunction](with-custom-color-function.md) | [common]<br>fun [withCustomColorFunction](with-custom-color-function.md)(colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md)?): [QRCodeBuilder](index.md)<br>Sets the [QRCode.colorFn](../-q-r-code/color-fn.md) value to a custom one. If set, the builder will ignore color and background. |
| [withCustomShapeFunction](with-custom-shape-function.md) | [common]<br>fun [withCustomShapeFunction](with-custom-shape-function.md)(shapeFn: [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md)?): [QRCodeBuilder](index.md)<br>Sets the [QRCode.shapeFn](../-q-r-code/shape-fn.md) value to a custom one. If set, the builder will ignore the shape parameter. |
| [withGradientColor](with-gradient-color.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [withGradientColor](with-gradient-color.md)(startColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), endColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)?, vertical: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = true): [QRCodeBuilder](index.md)<br>Uses a [LinearGradientColorFunction](../../qrcode.color/-linear-gradient-color-function/index.md) to choose colors for the QRCode. |
| [withGraphicsFactory](with-graphics-factory.md) | [common]<br>fun [withGraphicsFactory](with-graphics-factory.md)(factory: [QRCodeGraphicsFactory](../../qrcode.render/-q-r-code-graphics-factory/index.md)): [QRCodeBuilder](index.md)<br>Use a custom [QRCodeGraphicsFactory](../../qrcode.render/-q-r-code-graphics-factory/index.md) instead of the default. |
| [withInnerSpacing](with-inner-spacing.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [withInnerSpacing](with-inner-spacing.md)(innerSpacing: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null): [QRCodeBuilder](index.md)<br>How much space there should be around each QRCode Cell. Defaults to 1 pixel, or 0 if a custom shape function is being used. |
| [withLogo](with-logo.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [withLogo](with-logo.md)(logo: [ByteArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)?, width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), clearLogoArea: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = true): [QRCodeBuilder](index.md)<br>Adds an image on top of the QRCode, at the center of it. |
| [withRadius](with-radius.md) | [common]<br>fun [withRadius](with-radius.md)(radius: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [QRCodeBuilder](index.md)<br>Radius of the edges of the Rounded Squares. Only applies for Rounded Squares. If set to a negative number, the default radius will be used. |
| [withSize](with-size.md) | [common]<br>fun [withSize](with-size.md)(size: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [QRCodeBuilder](index.md)<br>Size of each individual space in the QRCode (each cell). |