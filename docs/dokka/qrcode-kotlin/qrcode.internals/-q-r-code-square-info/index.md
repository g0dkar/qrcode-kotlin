//[qrcode-kotlin](../../../index.md)/[qrcode.internals](../index.md)/[QRCodeSquareInfo](index.md)

# QRCodeSquareInfo

[common]\
data class [QRCodeSquareInfo](index.md)(val type: [QRCodeSquareType](../-q-r-code-square-type/index.md), val region: [QRCodeRegion](../-q-r-code-region/index.md))

Returns information on the square itself. It has the [type](type.md) of square and its [region](region.md) within its relative type.

For example, if `type = POSITION_PROBE` then [region](region.md) will represent where within the Position Probe this square is positioned. A [region](region.md) of [QRCodeRegion.TOP_LEFT_CORNER](../-q-r-code-region/-t-o-p_-l-e-f-t_-c-o-r-n-e-r/index.md) for example represents the top left corner of the position probe this particular square is part of (a QRCode have 3 position probes).

## Constructors

| | |
|---|---|
| [QRCodeSquareInfo](-q-r-code-square-info.md) | [common]<br>constructor(type: [QRCodeSquareType](../-q-r-code-square-type/index.md), region: [QRCodeRegion](../-q-r-code-region/index.md)) |

## Types

| Name | Summary |
|---|---|
| [Companion](-companion/index.md) | [common]<br>object [Companion](-companion/index.md) |

## Properties

| Name | Summary |
|---|---|
| [region](region.md) | [common]<br>val [region](region.md): [QRCodeRegion](../-q-r-code-region/index.md) |
| [type](type.md) | [common]<br>val [type](type.md): [QRCodeSquareType](../-q-r-code-square-type/index.md) |
