//[qrcode-kotlin](../../../index.md)/[qrcode.raw](../index.md)/[QRCodeDataType](index.md)

# QRCodeDataType

[common]\
enum [QRCodeDataType](index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[QRCodeDataType](index.md)&gt; 

QRCode Modes. Basically represents which kind of data is being encoded.

Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/Mode.java)

#### Author

Rafael Lins - g0dkar

Kazuhiko Arase - kazuhikoarase

## Entries

| | |
|---|---|
| [NUMBERS](-n-u-m-b-e-r-s/index.md) | [common]<br>[NUMBERS](-n-u-m-b-e-r-s/index.md)<br>Strictly numerical data. Like huge integers. These can be way bigger than [Long.MAX_VALUE](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/-m-a-x_-v-a-l-u-e.html). |
| [UPPER_ALPHA_NUM](-u-p-p-e-r_-a-l-p-h-a_-n-u-m/index.md) | [common]<br>[UPPER_ALPHA_NUM](-u-p-p-e-r_-a-l-p-h-a_-n-u-m/index.md)<br>Represents Uppercase Alphanumerical data. Allowed characters: `[0-9A-Z $%*+\-./:]`. |
| [DEFAULT](-d-e-f-a-u-l-t/index.md) | [common]<br>[DEFAULT](-d-e-f-a-u-l-t/index.md)<br>This can be any kind of data. With this you can encode Strings, URLs, images, files, anything. |

## Properties

| Name | Summary |
|---|---|
| [entries](entries.md) | [common]<br>val [entries](entries.md): [EnumEntries](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.enums/-enum-entries/index.html)&lt;[QRCodeDataType](index.md)&gt;<br>Returns a representation of an immutable list of all enum entries, in the order they're declared. |
| [name](-d-e-f-a-u-l-t/index.md#-372974862%2FProperties%2F345188675) | [common]<br>val [name](-d-e-f-a-u-l-t/index.md#-372974862%2FProperties%2F345188675): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [ordinal](-d-e-f-a-u-l-t/index.md#-739389684%2FProperties%2F345188675) | [common]<br>val [ordinal](-d-e-f-a-u-l-t/index.md#-739389684%2FProperties%2F345188675): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [value](value.md) | [common]<br>val [value](value.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

## Functions

| Name | Summary |
|---|---|
| [valueOf](value-of.md) | [common]<br>fun [valueOf](value-of.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [QRCodeDataType](index.md)<br>Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) |
| [values](values.md) | [common]<br>fun [values](values.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeDataType](index.md)&gt;<br>Returns an array containing the constants of this enum type, in the order they're declared. |
