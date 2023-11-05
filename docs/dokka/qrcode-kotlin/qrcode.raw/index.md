//[qrcode-kotlin](../../index.md)/[qrcode.raw](index.md)

# Package-level declarations

## Types

| Name | Summary |
|---|---|
| [ErrorCorrectionLevel](-error-correction-level/index.md) | [common]<br>enum [ErrorCorrectionLevel](-error-correction-level/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[ErrorCorrectionLevel](-error-correction-level/index.md)&gt; <br>The level of Error Correction to apply to the QR Code image. The Higher the Error Correction, the lower quality **print** the QRCode can be (think of &quot;wow, even with the paper a bit crumpled, it still read the QR Code!&quot; - that is likely a [Q](-error-correction-level/-q/index.md) or [H](-error-correction-level/-h/index.md) error correction). |
| [MaskPattern](-mask-pattern/index.md) | [common]<br>enum [MaskPattern](-mask-pattern/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[MaskPattern](-mask-pattern/index.md)&gt; <br>Patterns to apply to the QRCode. They change how the QRCode looks in the end. |
| [QRCodeDataType](-q-r-code-data-type/index.md) | [common]<br>enum [QRCodeDataType](-q-r-code-data-type/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[QRCodeDataType](-q-r-code-data-type/index.md)&gt; <br>QRCode Modes. Basically represents which kind of data is being encoded. |
| [QRCodeProcessor](-q-r-code-processor/index.md) | [common]<br>class [QRCodeProcessor](-q-r-code-processor/index.md)@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)constructor(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), errorCorrectionLevel: [ErrorCorrectionLevel](-error-correction-level/index.md) = ErrorCorrectionLevel.M, dataType: [QRCodeDataType](-q-r-code-data-type/index.md) = QRUtil.getDataType(data), val graphicsFactory: [QRCodeGraphicsFactory](../qrcode.render/-q-r-code-graphics-factory/index.md) = QRCodeGraphicsFactory())<br>A Class/Library that helps encode data as QR Code images without any external dependencies. |
| [QRCodeRawData](-q-r-code-raw-data/index.md) | [common]<br>typealias [QRCodeRawData](-q-r-code-raw-data/index.md) = [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquare](../qrcode.internals/-q-r-code-square/index.md)&gt;&gt;<br>Alias for a matrix of [QRCodeSquare](../qrcode.internals/-q-r-code-square/index.md) |
