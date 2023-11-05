//[qrcode-kotlin](../../../index.md)/[qrcode.raw](../index.md)/[QRCodeProcessor](index.md)/[QRCodeProcessor](-q-r-code-processor.md)

# QRCodeProcessor

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

constructor(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), errorCorrectionLevel: [ErrorCorrectionLevel](../-error-correction-level/index.md) = ErrorCorrectionLevel.M, dataType: [QRCodeDataType](../-q-r-code-data-type/index.md) = QRUtil.getDataType(data), graphicsFactory: [QRCodeGraphicsFactory](../../qrcode.render/-q-r-code-graphics-factory/index.md) = QRCodeGraphicsFactory())

#### Parameters

common

| | |
|---|---|
| data | String that will be encoded in the QR Code. |
| errorCorrectionLevel | The level of Error Correction that should be applied to the QR Code. Defaults to [ErrorCorrectionLevel.M](../-error-correction-level/-m/index.md). |
| dataType | One of the available [QRCodeDataType](../-q-r-code-data-type/index.md). By default, the code tries to guess which one is the best fitting one from your input data. |
