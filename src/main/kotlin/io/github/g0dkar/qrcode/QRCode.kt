package io.github.g0dkar.qrcode

import io.github.g0dkar.qrcode.internals.BitBuffer
import io.github.g0dkar.qrcode.internals.Polynomial
import io.github.g0dkar.qrcode.internals.QR8BitByte
import io.github.g0dkar.qrcode.internals.QRAlphaNum
import io.github.g0dkar.qrcode.internals.QRData
import io.github.g0dkar.qrcode.internals.QRKanji
import io.github.g0dkar.qrcode.internals.QRNumber
import io.github.g0dkar.qrcode.internals.QRUtil
import io.github.g0dkar.qrcode.internals.RSBlock
import java.awt.Color
import java.awt.image.BufferedImage
import java.io.File
import javax.imageio.ImageIO

/**
 * A Class/Library that helps encode data as QR Code images without any external dependencies.
 *
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRCode.java).
 *
 * To create a QR Code you can simply do the following:
 *
 * ```kotlin
 * val dataToEncode = "Hello QRCode!"
 * val eachQRCodeSquareSize = 10 // In Pixels!
 * val imageData = QRCode(dataToEncode).render(eachQRCodeSquareSize)
 * ```
 *
 * You can now encode `imageData` however you want using Java's [ImageIO] API!
 *
 * For example, to save it as a PNG file:
 *
 * ```kotlin
 * val qrCodeFile = File("qrcode.png")
 * ImageIO.write(imageData, "PNG", qrCodeFile)
 * ```
 *
 * Or maybe have it as a byte array, to be sent as a response to a server request:
 *
 * ```kotlin
 * val imageBytes = ByteArrayOutputStream()
 *     .also { ImageIO.write(imageData, "PNG", it) }
 *     .toByteArray()
 * ```
 *
 * @param data String that will be encoded in the QR Code.
 * @param errorCorrectionLevel The level of Error Correction that should be applied to the QR Code. Defaults to [ErrorCorrectionLevel.M].
 *
 * @author Rafael Lins
 * @author Kazuhiko Arase
 *
 * @see ErrorCorrectionLevel
 */
class QRCode(
    private val data: String,
    private val errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.M
) {
    private val qrCodeData: QRData = when (QRUtil.getMode(data)) {
        Mode.MODE_NUMBER -> QRNumber(data)
        Mode.MODE_ALPHA_NUM -> QRAlphaNum(data)
        Mode.MODE_8BIT_BYTE -> QR8BitByte(data)
        Mode.MODE_KANJI -> QRKanji(data)
    }

    companion object {
        private const val PAD0 = 0xEC
        private const val PAD1 = 0x11

        /**
         * Calculates a suitable value for the [type] field for your
         */
        @JvmStatic
        fun typeForDataAndECL(
            data: String,
            errorCorrectionLevel: ErrorCorrectionLevel
        ): Int {
            val mode = QRUtil.getMode(data)
            val qrCodeData = when (mode) {
                Mode.MODE_NUMBER -> QRNumber(data)
                Mode.MODE_ALPHA_NUM -> QRAlphaNum(data)
                Mode.MODE_8BIT_BYTE -> QR8BitByte(data)
                Mode.MODE_KANJI -> QRKanji(data)
            }
            val dataLength = qrCodeData.length()

            for (typeNum in 1 until errorCorrectionLevel.maxTypeNum) {
                if (dataLength <= QRUtil.getMaxLength(typeNum, mode, errorCorrectionLevel)) {
                    return typeNum
                }
            }

            return 40
        }
    }

    /**
     * Renders a QR Code image based on its [computed data][encode].
     *
     * _Tip: for the "traditional look-and-feel" QR Code, set [margin] equal to [cellSize]._
     *
     * @param cellSize The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`.
     * @param margin Amount of space **in pixels** to add as a margin around the rendered QR Code. Defaults to `0`.
     * @param rawData The data matrix of the QR Code. Defaults to [this.encode()][encode].
     * @param brightColor [Color] to be used for the "bright" parts of the QR Code. In RGBA space. Defaults to [white][Color.WHITE].
     * @param darkColor [Color] to be used for the "dark" parts of the QR Code. In RGBA space. Defaults to [black][Color.BLACK].
     * @param marginColor [Color] to be used for the "margin" part of the QR Code. In RGBA space. Defaults to [white][Color.WHITE].
     *
     * @return A [BufferedImage] with the QR Code rendered on it. It can then be saved or manipulated as desired.
     *
     * @see [renderShaded]
     */
    fun render(
        cellSize: Int = 25,
        margin: Int = 0,
        rawData: Array<Array<Boolean?>> = encode(),
        brightColor: Color = Color.WHITE,
        darkColor: Color = Color.BLACK,
        marginColor: Color = Color.WHITE,
    ) =
        renderShaded(
            cellSize,
            margin,
            rawData,
        ) { _, _, _, cellData ->
            cellData?.let {
                if (it.first) {
                    darkColor.rgb
                } else {
                    brightColor.rgb
                }
            }
                ?: marginColor.rgb
        }

    /**
     * Renders a QR Code image based on its [computed data][encode].
     *
     * This function provides a way to implement more artistic QRCodes. The [shader] is a mapping function that maps a
     * pixel to a color. It receives 4 parameters: `image`, `x`, `y` and a nullable [Triple] with a [Boolean] and 2
     * [Int]s.
     *
     * The [Triple] holds information about the current cell being painted: the [Boolean] is whether it is a bright or
     * dark cell and the [Int]s are its `row` and `column` coordinates. **If the [Triple] is null this means this pixel
     * belongs to the margin.**
     *
     * To show this, here's a shader that makes a QR Code that is half [blue][Color.BLUE] and half [red][Color.RED]:
     *
     * ```kotlin
     * QRCode("example").renderShaded { image, x, y, cellData ->
     *     cellData?.let { (foreground, cellRow, cellCol) ->
     *         if (foreground) {
     *             if (y >= image.height / 2) { Color.RED.rgb } // Lower half is red
     *             else { Color.BLUE.rgb }                      // Upper half is blue
     *         }
     *         else { Color.WHITE.rgb } // Background is white
     *     } ?: Color.WHITE.rgb         // Margin is white
     * }
     * ```
     *
     * _Tip: for the "traditional look-and-feel" QR Code, set [margin] equal to [cellSize]._
     *
     * @param cellSize The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`.
     * @param margin Amount of space **in pixels** to add as a margin around the rendered QR Code. Defaults to `0`.
     * @param rawData The data matrix of the QR Code. Defaults to [this.encode()][encode].
     * @param shader Mapping function that maps a pixel to a color. `(image, x, y, Triple<Bright, Row, Column>?) -> pixel RGBA color`.
     *
     * @return A [BufferedImage] with the QR Code rendered on it. It can then be saved or manipulated as desired.
     */
    fun renderShaded(
        cellSize: Int = 25,
        margin: Int = 0,
        rawData: Array<Array<Boolean?>> = encode(),
        shader: (BufferedImage, Int, Int, Triple<Boolean, Int, Int>?) -> Int
    ): BufferedImage {
        val moduleCount = rawData[0].size
        val imageSize: Int = moduleCount * cellSize + margin * 2
        val image = BufferedImage(imageSize, imageSize, BufferedImage.TYPE_INT_ARGB)

        for (y in 0 until imageSize) {
            for (x in 0 until imageSize) {
                val pixelColor = if (margin <= x && x < imageSize - margin && margin <= y && y < imageSize - margin) {
                    val col = (x - margin) / cellSize
                    val row = (y - margin) / cellSize
                    shader(image, x, y, Triple(isDark(row, col, rawData), row, col))
                } else {
                    shader(image, x, y, null)
                }

                image.setRGB(x, y, pixelColor)
            }
        }

        return image
    }

    /**
     * Computes and encodes the [data] of this object into a QR Code. This method returns the raw data of the QR Code.
     *
     * If you just want to render (create) a QR Code image, you are probably looking for the [renderShaded] method.
     *
     * @param type `type` value for the QRCode computation. Between 0 and 40. Read more about it [here][ErrorCorrectionLevel].
     * Defaults to an [automatically calculated value][typeForDataAndECL] based on [data] and the [errorCorrectionLevel].
     * @param maskPattern Mask Pattern to apply to the final QR Code. Basically changes how the QR Code looks at the end.
     * Read more about it [here][MaskPattern]. Defaults to [MaskPattern.PATTERN000].
     *
     * @return The byte matrix of the encoded QRCode.
     *
     * @see typeForDataAndECL
     * @see ErrorCorrectionLevel
     * @see MaskPattern
     * @see renderShaded
     */
    fun encode(
        type: Int = typeForDataAndECL(data, errorCorrectionLevel),
        maskPattern: MaskPattern = MaskPattern.PATTERN000
    ): Array<Array<Boolean?>> {
        val moduleCount = type * 4 + 17
        val modules: Array<Array<Boolean?>> = Array(moduleCount) { Array(moduleCount) { null } }

        setupPositionProbePattern(0, 0, moduleCount, modules)
        setupPositionProbePattern(moduleCount - 7, 0, moduleCount, modules)
        setupPositionProbePattern(0, moduleCount - 7, moduleCount, modules)

        setupPositionAdjustPattern(type, modules)
        setupTimingPattern(moduleCount, modules)
        setupTypeInfo(maskPattern, moduleCount, modules)

        if (type >= 7) {
            setupTypeNumber(type, moduleCount, modules)
        }

        val data = createData(type)
        applyMaskPattern(data, maskPattern, moduleCount, modules)

        return modules
    }

    private fun setupPositionProbePattern(row: Int, col: Int, moduleCount: Int, modules: Array<Array<Boolean?>>) {
        for (r in -1..7) {
            for (c in -1..7) {
                if (row + r <= -1 || moduleCount <= row + r || col + c <= -1 || moduleCount <= col + c) {
                    continue
                }

                modules[row + r][col + c] =
                    (r in 0..6 && (c == 0 || c == 6) || c in 0..6 && (r == 0 || r == 6) || r in 2..4 && 2 <= c && c <= 4)
            }
        }
    }

    private fun setupPositionAdjustPattern(type: Int, modules: Array<Array<Boolean?>>) {
        val pos = QRUtil.getPatternPosition(type)
        for (i in pos.indices) {
            for (j in pos.indices) {
                val row = pos[i]
                val col = pos[j]
                if (modules[row][col] != null) {
                    continue
                }
                for (r in -2..2) {
                    for (c in -2..2) {
                        modules[row + r][col + c] = r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0
                    }
                }
            }
        }
    }

    private fun setupTimingPattern(moduleCount: Int, modules: Array<Array<Boolean?>>) {
        for (r in 8 until moduleCount - 8) {
            if (modules[r][6] != null) {
                continue
            }
            modules[r][6] = r % 2 == 0
        }
        for (c in 8 until moduleCount - 8) {
            if (modules[6][c] != null) {
                continue
            }
            modules[6][c] = c % 2 == 0
        }
    }

    private fun setupTypeInfo(
        maskPattern: MaskPattern,
        moduleCount: Int,
        modules: Array<Array<Boolean?>>
    ) {
        val data = errorCorrectionLevel.value shl 3 or maskPattern.ordinal
        val bits = QRUtil.getBCHTypeInfo(data)

        for (i in 0..14) {
            val mod = bits shr i and 1 == 1
            if (i < 6) {
                modules[i][8] = mod
            } else if (i < 8) {
                modules[i + 1][8] = mod
            } else {
                modules[moduleCount - 15 + i][8] = mod
            }
        }

        for (i in 0..14) {
            val mod = bits shr i and 1 == 1
            if (i < 8) {
                modules[8][moduleCount - i - 1] = mod
            } else if (i < 9) {
                modules[8][15 - i - 1 + 1] = mod
            } else {
                modules[8][15 - i - 1] = mod
            }
        }

        modules[moduleCount - 8][8] = true
    }

    private fun setupTypeNumber(type: Int, moduleCount: Int, modules: Array<Array<Boolean?>>) {
        val bits = QRUtil.getBCHTypeNumber(type)
        for (i in 0..17) {
            val mod = bits shr i and 1 == 1
            modules[i / 3][(i % 3 + moduleCount) - 8 - 3] = mod
        }
        for (i in 0..17) {
            val mod = bits shr i and 1 == 1
            modules[(i % 3 + moduleCount) - 8 - 3][i / 3] = mod
        }
    }

    private fun createData(type: Int): IntArray {
        val rsBlocks = RSBlock.getRSBlocks(type, errorCorrectionLevel)
        val buffer = BitBuffer()

        buffer.put(qrCodeData.mode.value, 4)
        buffer.put(qrCodeData.length(), qrCodeData.getLengthInBits(type))
        qrCodeData.write(buffer)

        val totalDataCount = rsBlocks.sumOf { it.dataCount } * 8

        if (buffer.lengthInBits > totalDataCount) {
            throw IllegalArgumentException("Code length overflow (${buffer.lengthInBits} > $totalDataCount)")
        }

        if (buffer.lengthInBits + 4 <= totalDataCount) {
            buffer.put(0, 4)
        }

        while (buffer.lengthInBits % 8 != 0) {
            buffer.put(false)
        }

        while (true) {
            if (buffer.lengthInBits >= totalDataCount) {
                break
            }

            buffer.put(PAD0, 8)

            if (buffer.lengthInBits >= totalDataCount) {
                break
            }

            buffer.put(PAD1, 8)
        }

        return createBytes(buffer, rsBlocks)
    }

    private fun applyMaskPattern(
        data: IntArray,
        maskPattern: MaskPattern,
        moduleCount: Int,
        modules: Array<Array<Boolean?>>
    ) {
        var inc = -1
        var bitIndex = 7
        var byteIndex = 0
        var row = moduleCount - 1
        var col = moduleCount - 1

        while (col > 0) {
            if (col == 6) {
                col--
            }

            while (true) {
                for (c in 0..1) {
                    if (modules[row][col - c] == null) {
                        var dark = false
                        if (byteIndex < data.size) {
                            dark = data[byteIndex] ushr bitIndex and 1 == 1
                        }

                        val mask = QRUtil.getMask(maskPattern, row, col - c)
                        if (mask) {
                            dark = !dark
                        }

                        modules[row][col - c] = dark
                        bitIndex--
                        if (bitIndex == -1) {
                            byteIndex++
                            bitIndex = 7
                        }
                    }
                }

                row += inc
                if (row < 0 || moduleCount <= row) {
                    row -= inc
                    inc = -inc
                    break
                }
            }

            col -= 2
        }
    }

    private fun createBytes(buffer: BitBuffer, rsBlocks: List<RSBlock>): IntArray {
        var offset = 0
        var maxDcCount = 0
        var maxEcCount = 0
        var totalCodeCount = 0
        val dcData = Array(rsBlocks.size) { IntArray(0) }
        val ecData = Array(rsBlocks.size) { IntArray(0) }

        rsBlocks.forEachIndexed { i, it ->
            val dcCount = it.dataCount
            val ecCount = it.totalCount - dcCount

            totalCodeCount += it.totalCount
            maxDcCount = maxDcCount.coerceAtLeast(dcCount)
            maxEcCount = maxEcCount.coerceAtLeast(ecCount)

            // Init dcData[i]
            dcData[i] = IntArray(dcCount) { idx -> 0xff and buffer.buffer[idx + offset] }
            offset += dcCount

            // Init ecData[i]
            val rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount)
            val rawPoly = Polynomial(dcData[i], rsPoly.len() - 1)
            val modPoly = rawPoly.mod(rsPoly)
            val ecDataSize = rsPoly.len() - 1

            ecData[i] = IntArray(ecDataSize) { idx ->
                val modIndex = idx + modPoly.len() - ecDataSize
                if ((modIndex >= 0)) modPoly[modIndex] else 0
            }
        }

        var index = 0
        val data = IntArray(totalCodeCount)

        for (i in 0 until maxDcCount) {
            for (r in rsBlocks.indices) {
                if (i < dcData[r].size) {
                    data[index++] = dcData[r][i]
                }
            }
        }

        for (i in 0 until maxEcCount) {
            for (r in rsBlocks.indices) {
                if (i < ecData[r].size) {
                    data[index++] = ecData[r][i]
                }
            }
        }

        return data
    }

    private fun isDark(row: Int, col: Int, modules: Array<Array<Boolean?>>): Boolean =
        modules[row][col] ?: false
}
