//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode](../index.md)/[QRCode](index.md)/[QRCode](-q-r-code.md)

# QRCode

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [QRCode](-q-r-code.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), errorCorrectionLevel: [ErrorCorrectionLevel](../-error-correction-level/index.md) = ErrorCorrectionLevel.M, dataType: [QRCodeDataType](../-q-r-code-data-type/index.md) = QRUtil.getDataType(data))

#### Parameters

common

| | |
|---|---|
| data | String that will be encoded in the QR Code. |
| errorCorrectionLevel | The level of Error Correction that should be applied to the QR Code. Defaults to [ErrorCorrectionLevel.M](../-error-correction-level/-m/index.md). |
| dataType | One of the available [QRCodeDataType](../-q-r-code-data-type/index.md). By default, the code tries to guess which one is the best fitting one from your input data. |
