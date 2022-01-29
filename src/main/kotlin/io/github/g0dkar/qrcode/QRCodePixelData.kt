package io.github.g0dkar.qrcode

/**
 * Class that keeps track of which pixel is being rendered.
 *
 * Writes to this class are always ignored, they are handled internally.
 *
 * @author Rafael Lins - g0dkar
 */
class QRCodePixelData(
    var x: Int,
    var y: Int,
    var row: Int,
    var col: Int,
    var isDark: Boolean,
    var isMargin: Boolean,
)
