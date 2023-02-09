//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode](../index.md)/[ErrorCorrectionLevel](index.md)

# ErrorCorrectionLevel

[common]\
enum [ErrorCorrectionLevel](index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[ErrorCorrectionLevel](index.md)&gt; 

The level of Error Correction to apply to the QR Code image. The Higher the Error Correction, the lower quality **print** the QRCode can be (think of &quot;wow, even with the paper a bit crumpled, it still read the QR Code!&quot; - that is likely a [Q](-q/index.md) or [H](-h/index.md) error correction).

The trade-off is the amount of data you can encode. The higher the error correction level, the less amount of data you'll be able to encode.

Please consult [Kazuhiko's Online Demo](https://kazuhikoarase.github.io/qrcode-generator/js/demo/) where at the time of writing a handy table showed how many bytes can be encoded given a data type ([QRCodeDataType](../-q-r-code-data-type/index.md)) and Error Correction Level.

This library automatically tries to fit ~2048 bytes into the QR Code regardless of error correction level. That is the reason and meaning of [maxTypeNum](max-type-num.md).

Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/ErrorCorrectionLevel.java)

#### Author

Rafael Lins - g0dkar

Kazuhiko Arase - kazuhikoarase

#### Parameters

common

| | |
|---|---|
| value | Value associated with this error correction level |
| maxTypeNum | Maximum `type` value which can fit 2048 bytes. Used to automatically calculate the `type` value. |

## Entries

| | |
|---|---|
| [L](-l/index.md) | [common]<br>[L](-l/index.md) |
| [M](-m/index.md) | [common]<br>[M](-m/index.md) |
| [Q](-q/index.md) | [common]<br>[Q](-q/index.md) |
| [H](-h/index.md) | [common]<br>[H](-h/index.md) |

## Functions

| Name | Summary |
|---|---|
| [valueOf](value-of.md) | [common]<br>fun [valueOf](value-of.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [ErrorCorrectionLevel](index.md)<br>Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) |
| [values](values.md) | [common]<br>fun [values](values.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[ErrorCorrectionLevel](index.md)&gt;<br>Returns an array containing the constants of this enum type, in the order they're declared. |

## Properties

| Name | Summary |
|---|---|
| [maxTypeNum](max-type-num.md) | [common]<br>val [maxTypeNum](max-type-num.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [name](../../io.github.g0dkar.qrcode.internals/-q-r-code-region/-u-n-k-n-o-w-n/index.md#-372974862%2FProperties%2F345188675) | [common]<br>val [name](../../io.github.g0dkar.qrcode.internals/-q-r-code-region/-u-n-k-n-o-w-n/index.md#-372974862%2FProperties%2F345188675): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [ordinal](../../io.github.g0dkar.qrcode.internals/-q-r-code-region/-u-n-k-n-o-w-n/index.md#-739389684%2FProperties%2F345188675) | [common]<br>val [ordinal](../../io.github.g0dkar.qrcode.internals/-q-r-code-region/-u-n-k-n-o-w-n/index.md#-739389684%2FProperties%2F345188675): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [value](value.md) | [common]<br>val [value](value.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
