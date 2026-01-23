package qrcode.internals.square

/**
 * Returns information on the square itself. It has the [type] of square and its [region] within its relative type.
 *
 * For example, if `type = POSITION_PROBE` then [region] will represent where within the Position Probe this square
 * is positioned. A [region] of [QRCodeRegion.TOP_LEFT_CORNER] for example represents the top left corner of the
 * position probe this particular square is part of (a QRCode have 3 position probes).
 */
data class QRCodeSquareInfo(
    val type: QRCodeSquareType,
    val region: QRCodeRegion,
)
