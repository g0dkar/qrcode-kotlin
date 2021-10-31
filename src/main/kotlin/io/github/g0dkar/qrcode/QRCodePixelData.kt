package io.github.g0dkar.qrcode

import java.awt.image.BufferedImage

/**
 * Class that keeps track of which pixel is being rendered.
 *
 * Writes to this class are always ignored, they are handled internally.
 */
class QRCodePixelData(
    val image: BufferedImage,
    var x: Int,
    var y: Int,
    var row: Int,
    var col: Int,
    var isDark: Boolean,
    var isMargin: Boolean,
)
