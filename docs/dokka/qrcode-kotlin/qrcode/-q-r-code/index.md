//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCode](index.md)

# QRCode

class [QRCode](index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), errorCorrectionLevel: [ErrorCorrectionLevel](../-error-correction-level/index.md) = ErrorCorrectionLevel.M, dataType: [QRCodeDataType](../-q-r-code-data-type/index.md) = QRUtil.getDataType(data))

A Class/Library that helps encode data as QR Code images without any external dependencies.

Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRCode.java).

To create a QR Code you can simply do the following:

```kotlin
val dataToEncode = "Hello QRCode!"
val eachQRCodeSquareSize = 10 // In Pixels!
val qrCodeRenderer = QRCode(dataToEncode).render(eachQRCodeSquareSize)
```

You can now use `qrCodeRenderer` to render your QRCode into any `OutputStream` (as a PNG by default)

For example, to simply save it on the disk:

```kotlin
val qrCodeFile = File("qrcode.png")
qrCodeFile.outputStream().use { qrCodeRenderer.writeImage(it) }
```

Or maybe have it as a byte array, to be sent as a response to a server request:

```kotlin
val imageBytes = ByteArrayOutputStream()
    .also { qrCodeRenderer.writeImage(it) }
    .toByteArray()
```

#### Author

Rafael Lins - g0dkar

Kazuhiko Arase - kazuhikoarase

#### Parameters

common

| | |
|---|---|
| data | String that will be encoded in the QR Code. |
| errorCorrectionLevel | The level of Error Correction that should be applied to the QR Code. Defaults to [ErrorCorrectionLevel.M](../-error-correction-level/-m/index.md). |
| dataType | One of the available [QRCodeDataType](../-q-r-code-data-type/index.md). By default, the code tries to guess which one is the best fitting one from your input data. |

#### See also

| |
|---|
| [ErrorCorrectionLevel](../-error-correction-level/index.md) |
| QRUtil.getDataType |

## Constructors

| | |
|---|---|
| [QRCode](-q-r-code.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>constructor(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), errorCorrectionLevel: [ErrorCorrectionLevel](../-error-correction-level/index.md) = ErrorCorrectionLevel.M, dataType: [QRCodeDataType](../-q-r-code-data-type/index.md) = QRUtil.getDataType(data)) |

## Types

| Name | Summary |
|---|---|
| [Companion](-companion/index.md) | [common]<br>object [Companion](-companion/index.md) |

## Properties

| Name | Summary |
|---|---|
| [qrCodeGraphicsFactory](qr-code-graphics-factory.md) | [common]<br>var [qrCodeGraphicsFactory](qr-code-graphics-factory.md): [QRCodeGraphicsFactory](../../qrcode.render/-q-r-code-graphics-factory/index.md) |

## Functions

| Name | Summary |
|---|---|
| [computeImageSize](compute-image-size.md) | [common]<br>fun [computeImageSize](compute-image-size.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 0, rawData: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md)?&gt;&gt; = encode()): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>fun [computeImageSize](compute-image-size.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, size: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Compute the final size of the image of this QRCode based on the given `cellSize` and `margin`. |
| [encode](encode.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [encode](encode.md)(type: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = typeForDataAndECL(data, errorCorrectionLevel), maskPattern: [MaskPattern](../-mask-pattern/index.md) = MaskPattern.PATTERN000): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md)?&gt;&gt;<br>Computes and encodes the data of this object into a QR Code. This method returns the raw data of the QR Code. |
| [render](render.md) | [common]<br>fun [render](render.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, brightColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE, darkColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.BLACK, marginColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)<br>Renders a QR Code image based on its [computed data](encode.md). This function exists to ease the interop with Java :)<br>[common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [render](render.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, rawData: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md)?&gt;&gt; = encode(), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) = qrCodeGraphicsFactory.newGraphicsSquare(             computeImageSize(                 cellSize,                 margin,                 rawData             )         ), brightColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE, darkColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.BLACK, marginColor: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = Colors.WHITE): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)<br>Renders a QR Code image based on its [computed data](encode.md). |
| [renderShaded](render-shaded.md) | [common]<br>@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)<br>fun [renderShaded](render-shaded.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, rawData: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md)?&gt;&gt; = encode(), qrCodeGraphics: [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md) = qrCodeGraphicsFactory.newGraphicsSquare(             computeImageSize(                 cellSize,                 margin,                 rawData             )         ), renderer: ([QRCodeSquare](../../qrcode.internals/-q-r-code-square/index.md), [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)): [QRCodeGraphics](../../qrcode.render/-q-r-code-graphics/index.md)<br>Renders a QR Code image based on its [computed data](encode.md). |
| [toString](to-string.md) | [common]<br>open override fun [toString](to-string.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
