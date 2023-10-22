//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode.internals](../index.md)/[QRCodeSquareType](index.md)

# QRCodeSquareType

[common]\
enum [QRCodeSquareType](index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[QRCodeSquareType](index.md)&gt; 

The types available for squares in a QRCode.

#### Author

Rafael Lins - g0dkar

## Entries

| | |
|---|---|
| [POSITION_PROBE](-p-o-s-i-t-i-o-n_-p-r-o-b-e/index.md) | [common]<br>[POSITION_PROBE](-p-o-s-i-t-i-o-n_-p-r-o-b-e/index.md)<br>Part of a position probe: one of those big squares at the extremities of the QRCode. |
| [POSITION_ADJUST](-p-o-s-i-t-i-o-n_-a-d-j-u-s-t/index.md) | [common]<br>[POSITION_ADJUST](-p-o-s-i-t-i-o-n_-a-d-j-u-s-t/index.md)<br>Part of a position adjustment pattern: just like a position probe, but much smaller. |
| [TIMING_PATTERN](-t-i-m-i-n-g_-p-a-t-t-e-r-n/index.md) | [common]<br>[TIMING_PATTERN](-t-i-m-i-n-g_-p-a-t-t-e-r-n/index.md)<br>Part of the timing pattern. Make it a square like any other :) |
| [DEFAULT](-d-e-f-a-u-l-t/index.md) | [common]<br>[DEFAULT](-d-e-f-a-u-l-t/index.md)<br>Anything special. Just a square. |
| [MARGIN](-m-a-r-g-i-n/index.md) | [common]<br>[MARGIN](-m-a-r-g-i-n/index.md)<br>Used to point out that this is part of the margin. |

## Properties

| Name | Summary |
|---|---|
| [entries](entries.md) | [common]<br>val [entries](entries.md): [EnumEntries](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.enums/-enum-entries/index.html)&lt;[QRCodeSquareType](index.md)&gt;<br>Returns a representation of an immutable list of all enum entries, in the order they're declared. |
| [name](../-q-r-code-region/-u-n-k-n-o-w-n/index.md#-372974862%2FProperties%2F345188675) | [common]<br>val [name](../-q-r-code-region/-u-n-k-n-o-w-n/index.md#-372974862%2FProperties%2F345188675): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [ordinal](../-q-r-code-region/-u-n-k-n-o-w-n/index.md#-739389684%2FProperties%2F345188675) | [common]<br>val [ordinal](../-q-r-code-region/-u-n-k-n-o-w-n/index.md#-739389684%2FProperties%2F345188675): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

## Functions

| Name | Summary |
|---|---|
| [valueOf](value-of.md) | [common]<br>fun [valueOf](value-of.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [QRCodeSquareType](index.md)<br>Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) |
| [values](values.md) | [common]<br>fun [values](values.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeSquareType](index.md)&gt;<br>Returns an array containing the constants of this enum type, in the order they're declared. |
