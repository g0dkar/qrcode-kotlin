//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode.internals](../index.md)/[QRCodeRegion](index.md)

# QRCodeRegion

[common]\
enum [QRCodeRegion](index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[QRCodeRegion](index.md)&gt; 

Represents which part/region of a given square type a particular, single square is.

For example, a position probe is visually composed of multiple squares that form a bigger one.

For example, this is what a position probe normally looks like (squares spaced for ease of understanding):

```kotlin
A■■■■B
■ ■■ ■
■ ■■ ■
C■■■■D
```

The positions marked with `A`, `B`, `C` and `D` would be regions [TOP_LEFT_CORNER](-t-o-p_-l-e-f-t_-c-o-r-n-e-r/index.md), [TOP_RIGHT_CORNER](-t-o-p_-r-i-g-h-t_-c-o-r-n-e-r/index.md), [BOTTOM_LEFT_CORNER](-b-o-t-t-o-m_-l-e-f-t_-c-o-r-n-e-r/index.md) and [BOTTOM_RIGHT_CORNER](-b-o-t-t-o-m_-r-i-g-h-t_-c-o-r-n-e-r/index.md) respectively.

## Entries

| | |
|---|---|
| [TOP_LEFT_CORNER](-t-o-p_-l-e-f-t_-c-o-r-n-e-r/index.md) | [common]<br>[TOP_LEFT_CORNER](-t-o-p_-l-e-f-t_-c-o-r-n-e-r/index.md) |
| [TOP_RIGHT_CORNER](-t-o-p_-r-i-g-h-t_-c-o-r-n-e-r/index.md) | [common]<br>[TOP_RIGHT_CORNER](-t-o-p_-r-i-g-h-t_-c-o-r-n-e-r/index.md) |
| [TOP_MID](-t-o-p_-m-i-d/index.md) | [common]<br>[TOP_MID](-t-o-p_-m-i-d/index.md) |
| [LEFT_MID](-l-e-f-t_-m-i-d/index.md) | [common]<br>[LEFT_MID](-l-e-f-t_-m-i-d/index.md) |
| [RIGHT_MID](-r-i-g-h-t_-m-i-d/index.md) | [common]<br>[RIGHT_MID](-r-i-g-h-t_-m-i-d/index.md) |
| [CENTER](-c-e-n-t-e-r/index.md) | [common]<br>[CENTER](-c-e-n-t-e-r/index.md) |
| [BOTTOM_LEFT_CORNER](-b-o-t-t-o-m_-l-e-f-t_-c-o-r-n-e-r/index.md) | [common]<br>[BOTTOM_LEFT_CORNER](-b-o-t-t-o-m_-l-e-f-t_-c-o-r-n-e-r/index.md) |
| [BOTTOM_RIGHT_CORNER](-b-o-t-t-o-m_-r-i-g-h-t_-c-o-r-n-e-r/index.md) | [common]<br>[BOTTOM_RIGHT_CORNER](-b-o-t-t-o-m_-r-i-g-h-t_-c-o-r-n-e-r/index.md) |
| [BOTTOM_MID](-b-o-t-t-o-m_-m-i-d/index.md) | [common]<br>[BOTTOM_MID](-b-o-t-t-o-m_-m-i-d/index.md) |
| [MARGIN](-m-a-r-g-i-n/index.md) | [common]<br>[MARGIN](-m-a-r-g-i-n/index.md) |
| [UNKNOWN](-u-n-k-n-o-w-n/index.md) | [common]<br>[UNKNOWN](-u-n-k-n-o-w-n/index.md) |

## Properties

| Name | Summary |
|---|---|
| [entries](entries.md) | [common]<br>val [entries](entries.md): [EnumEntries](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.enums/-enum-entries/index.html)&lt;[QRCodeRegion](index.md)&gt;<br>Returns a representation of an immutable list of all enum entries, in the order they're declared. |
| [name](-u-n-k-n-o-w-n/index.md#-372974862%2FProperties%2F345188675) | [common]<br>val [name](-u-n-k-n-o-w-n/index.md#-372974862%2FProperties%2F345188675): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [ordinal](-u-n-k-n-o-w-n/index.md#-739389684%2FProperties%2F345188675) | [common]<br>val [ordinal](-u-n-k-n-o-w-n/index.md#-739389684%2FProperties%2F345188675): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

## Functions

| Name | Summary |
|---|---|
| [valueOf](value-of.md) | [common]<br>fun [valueOf](value-of.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [QRCodeRegion](index.md)<br>Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) |
| [values](values.md) | [common]<br>fun [values](values.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[QRCodeRegion](index.md)&gt;<br>Returns an array containing the constants of this enum type, in the order they're declared. |
