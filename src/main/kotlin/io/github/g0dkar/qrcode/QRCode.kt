package io.github.g0dkar.qrcode

import java.awt.Color
import java.awt.image.BufferedImage
import javax.imageio.ImageIO

/**
 * A Class/Library that helps encode data as QR Code images without any external dependencies.
 *
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRCode.java).
 *
 * To create a QR Code you can simply do the following:
 *
 * ```kotlin
 * val dataToEncode = "Hello QRCode, from Kotlin with love!"
 * val eachQRCodeSquareSize = 10 // In Pixels!
 * val imageData = QRCode(dataToEncode).render(eachQRCodeSquareSize)
 * ```
 *
 * You can now encode `imageData` however you want using Java's [ImageIO] API.
 *
 * For example, to save it as a PNG file:
 *
 * ```kotlin
 * val fileName = "qrcode.png"
 * val imageBytes = ByteArrayOutputStream().also { ImageIO.write(imageData, "PNG", it) }.toByteArray()
 * File(fileName).writeBytes(imageBytes)
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
    companion object {
        private const val PAD0 = 0xEC
        private const val PAD1 = 0x11
    }

    private val qrCodeData: QRData
    private val type: Int

    init {
        val mode = QRUtil.getMode(data)

        qrCodeData = when (mode) {
            Mode.MODE_NUMBER -> QRNumber(data)
            Mode.MODE_ALPHA_NUM -> QRAlphaNum(data)
            Mode.MODE_8BIT_BYTE -> QR8BitByte(data)
            Mode.MODE_KANJI -> QRKanji(data)
        }

        val dataLength = qrCodeData.length()
        var typeNumber: Int = errorCorrectionLevel.maxTypeNum

        for (typeNum in 1 until errorCorrectionLevel.maxTypeNum) {
            if (dataLength <= QRUtil.getMaxLength(typeNum, mode, errorCorrectionLevel)) {
                typeNumber = typeNum
                break
            }
        }

        type = typeNumber
    }

    /**
     * asd
     */
    fun encode(maskPattern: MaskPattern = MaskPattern.PATTERN000): Pair<Int, Array<Array<Boolean?>>> {
        val moduleCount = type * 4 + 17
        val modules: Array<Array<Boolean?>> = Array(moduleCount) { Array(moduleCount) { null } }

        setupPositionProbePattern(0, 0, moduleCount, modules)
        setupPositionProbePattern(moduleCount - 7, 0, moduleCount, modules)
        setupPositionProbePattern(0, moduleCount - 7, moduleCount, modules)

        setupPositionAdjustPattern(modules)
        setupTimingPattern(moduleCount, modules)
        setupTypeInfo(maskPattern, moduleCount, modules)

        if (type >= 7) {
            setupTypeNumber(moduleCount, modules)
        }

        val data = createData()
        applyMaskPattern(data, maskPattern, moduleCount, modules)

        return Pair(moduleCount, modules)
    }

    /**
     * asd
     */
    fun render(
        cellSize: Int,
        margin: Int = 0,
        data: Pair<Int, Array<Array<Boolean?>>> = encode(),
        brightColor: Int = Color.WHITE.rgb,
        darkColor: Int = Color.BLACK.rgb,
        marginColor: Int = Color.WHITE.rgb,
    ): BufferedImage =
        data.let { (moduleCount, modules) ->
            createImage(cellSize, margin, moduleCount, modules, brightColor, darkColor, marginColor)
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

    private fun setupPositionAdjustPattern(modules: Array<Array<Boolean?>>) {
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

    private fun setupTypeNumber(moduleCount: Int, modules: Array<Array<Boolean?>>) {
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

    private fun createData(): IntArray {
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
        val dcData = Array(rsBlocks.size) { emptyArray<Int>() }
        val ecData = Array(rsBlocks.size) { emptyArray<Int>() }

        rsBlocks.forEachIndexed { i, it ->
            val dcCount = it.dataCount
            val ecCount = it.totalCount - dcCount

            totalCodeCount += it.totalCount
            maxDcCount = maxDcCount.coerceAtLeast(dcCount)
            maxEcCount = maxEcCount.coerceAtLeast(ecCount)

            // Init dcData[i]
            dcData[i] = Array(dcCount) { idx -> 0xff and buffer.buffer[idx + offset] }
            offset += dcCount

            // Init ecData[i]
            val rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount)
            val rawPoly = Polynomial(dcData[i], rsPoly.len() - 1)
            val modPoly = rawPoly.mod(rsPoly)
            val ecDataSize = rsPoly.len() - 1

            ecData[i] = Array(ecDataSize) { idx ->
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

    private fun createImage(
        cellSize: Int,
        margin: Int,
        moduleCount: Int,
        modules: Array<Array<Boolean?>>,
        brightColor: Int = Color.WHITE.rgb,
        darkColor: Int = Color.BLACK.rgb,
        marginColor: Int = Color(255, 255, 255, 0).rgb,
    ): BufferedImage {
        val imageSize: Int = moduleCount * cellSize + margin * 2
        val image = BufferedImage(imageSize, imageSize, BufferedImage.TYPE_INT_ARGB)

        for (y in 0 until imageSize) {
            for (x in 0 until imageSize) {
                if (margin <= x && x < imageSize - margin && margin <= y && y < imageSize - margin) {
                    val col = (x - margin) / cellSize
                    val row = (y - margin) / cellSize
                    if (isDark(row, col, modules)) {
                        image.setRGB(x, y, darkColor)
                    } else {
                        image.setRGB(x, y, brightColor)
                    }
                } else {
                    image.setRGB(x, y, marginColor)
                }
            }
        }

        return image
    }

    private fun isDark(row: Int, col: Int, modules: Array<Array<Boolean?>>): Boolean =
        modules[row][col] ?: false
}
