//[qrcode-kotlin](../../../../index.md)/[io.github.g0dkar.qrcode](../../index.md)/[QRCode](../index.md)/[Companion](index.md)/[typeForDataAndECL](type-for-data-and-e-c-l.md)

# typeForDataAndECL

[common]\

@[JvmStatic](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-static/index.html)

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [typeForDataAndECL](type-for-data-and-e-c-l.md)(data: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), errorCorrectionLevel: [ErrorCorrectionLevel](../../-error-correction-level/index.md), dataType: [QRCodeDataType](../../-q-r-code-data-type/index.md) = QRUtil.getDataType(data)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

Calculates a suitable value for the [dataType](type-for-data-and-e-c-l.md) field for you.
