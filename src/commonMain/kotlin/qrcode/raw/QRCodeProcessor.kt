package qrcode.raw

import qrcode.QRCode
import qrcode.color.Colors
import qrcode.exception.InsufficientInformationDensityException
import qrcode.internals.BitBuffer
import qrcode.internals.Polynomial
import qrcode.internals.QR8BitByte
import qrcode.internals.QRAlphaNum
import qrcode.internals.QRCodeSetup.applyMaskPattern
import qrcode.internals.QRCodeSetup.setupBottomLeftPositionProbePattern
import qrcode.internals.QRCodeSetup.setupPositionAdjustPattern
import qrcode.internals.QRCodeSetup.setupTimingPattern
import qrcode.internals.QRCodeSetup.setupTopLeftPositionProbePattern
import qrcode.internals.QRCodeSetup.setupTopRightPositionProbePattern
import qrcode.internals.QRCodeSetup.setupTypeInfo
import qrcode.internals.QRCodeSetup.setupTypeNumber
import qrcode.internals.QRCodeSquare
import qrcode.internals.QRData
import qrcode.internals.QRNumber
import qrcode.internals.QRUtil
import qrcode.internals.RSBlock
import qrcode.raw.QRCodeDataType.DEFAULT
import qrcode.raw.QRCodeDataType.NUMBERS
import qrcode.raw.QRCodeDataType.UPPER_ALPHA_NUM
import qrcode.raw.QRCodeProcessor.Companion.MAXIMUM_INFO_DENSITY
import qrcode.raw.QRCodeProcessor.Companion.infoDensityForDataAndECL
import qrcode.render.QRCodeGraphics
import qrcode.render.QRCodeGraphicsFactory
import kotlin.js.JsName
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic

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
 * val qrCodeRenderer = QRCode(dataToEncode).render(eachQRCodeSquareSize)
 * ```
 *
 * You can now use `qrCodeRenderer` to render your QRCode into any `OutputStream` (as a PNG by default)
 *
 * For example, to simply save it on the disk:
 *
 * ```kotlin
 * val qrCodeFile = File("qrcode.png")
 * qrCodeFile.outputStream().use { qrCodeRenderer.writeImage(it) }
 * ```
 *
 * Or maybe have it as a byte array, to be sent as a response to a server request:
 *
 * ```kotlin
 * val imageBytes = ByteArrayOutputStream()
 *     .also { qrCodeRenderer.writeImage(it) }
 *     .toByteArray()
 * ```
 *
 * @param data String that will be encoded in the QR Code.
 * @param errorCorrectionLevel The level of Error Correction that should be applied to the QR Code. Defaults to [ErrorCorrectionLevel.MEDIUM].
 * @param dataType One of the available [QRCodeDataType]. By default, the code tries to guess which one is the best fitting one from your input data.
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 *
 * @see ErrorCorrectionLevel
 * @see QRUtil.getDataType
 */
@Suppress("NON_EXPORTABLE_TYPE", "MemberVisibilityCanBePrivate")
class QRCodeProcessor @JvmOverloads constructor(
    private val data: String,
    private val errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.MEDIUM,
    private val dataType: QRCodeDataType = QRUtil.getDataType(data),
    val graphicsFactory: QRCodeGraphicsFactory = QRCodeGraphicsFactory(),
) {
    private val qrCodeData: QRData = when (dataType) {
        NUMBERS -> QRNumber(data)
        UPPER_ALPHA_NUM -> QRAlphaNum(data)
        DEFAULT -> QR8BitByte(data)
    }

    companion object {
        const val DEFAULT_CELL_SIZE = 25
        private const val PAD0 = 0xEC
        private const val PAD1 = 0x11
        const val MAXIMUM_INFO_DENSITY = 40

        /**
         * Infer what is the least amount of the [QRCode.informationDensity] parameter to fit the specified [data]
         * at the given [errorCorrectionLevel].
         *
         * If it cannot determine the value, the maximum value for it will be returned: `40`.
         *
         * @see QRCode.informationDensity
         * @see MAXIMUM_INFO_DENSITY
         */
        @JvmStatic
        @JvmOverloads
        fun infoDensityForDataAndECL(
            data: String,
            errorCorrectionLevel: ErrorCorrectionLevel,
            dataType: QRCodeDataType = QRUtil.getDataType(data),
        ): Int {
            val qrCodeData = when (dataType) {
                NUMBERS -> QRNumber(data)
                UPPER_ALPHA_NUM -> QRAlphaNum(data)
                DEFAULT -> QR8BitByte(data)
            }
            val dataLength = qrCodeData.length()

            for (typeNum in 1 until errorCorrectionLevel.maxTypeNum) {
                if (dataLength <= QRUtil.getMaxLength(typeNum, dataType, errorCorrectionLevel)) {
                    return typeNum
                }
            }

            return MAXIMUM_INFO_DENSITY
        }
    }

    /**
     * Compute the final size of the image of this QRCode based on the given a `cellSize`.
     *
     * This means this QRCode will be `<size> x <size>` pixels. For example, if this method returns 100, the resulting
     * image will be 100x100 pixels.
     */
    @JsName("computeImageSizeFromRawData")
    fun computeImageSize(
        cellSize: Int = DEFAULT_CELL_SIZE,
        rawData: QRCodeRawData = encode(),
    ): Int = computeImageSize(cellSize, rawData.size)

    /**
     * Compute the final size of the image of this QRCode based on the given a `cellSize`.
     *
     * This means this QRCode will be `<size> x <size>` pixels. For example, if this method returns 100, the resulting
     * image will be 100x100 pixels.
     */
    fun computeImageSize(
        cellSize: Int = DEFAULT_CELL_SIZE,
        size: Int,
    ): Int = size * cellSize

    /**
     * Renders a QR Code image based on its [computed data][encode]. This function exists to ease the interop with
     * Java :)
     *
     * @param cellSize The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`.
     * @param brightColor Color to be used for the "bright" parts of the QR Code. In RGBA space. Defaults to [white][Colors.WHITE].
     * @param darkColor Color to be used for the "dark" parts of the QR Code. In RGBA space. Defaults to [black][Colors.BLACK].
     *
     * @return A [QRCodeGraphics] with the QR Code rendered on it. It can then be saved or manipulated as desired.
     *
     * @see renderShaded
     * @see QRCodeSquare
     * @see QRCodeGraphics
     * @see Colors
     */
    fun render(
        cellSize: Int = DEFAULT_CELL_SIZE,
        brightColor: Int = Colors.WHITE,
        darkColor: Int = Colors.BLACK,
    ) =
        render(
            cellSize = cellSize,
            rawData = encode(),
            brightColor = brightColor,
            darkColor = darkColor,
        )

    /**
     * Renders a QR Code image based on its [computed data][encode].
     *
     * @param cellSize The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`.
     * @param rawData The data matrix of the QR Code. Defaults to [this.encode()][encode].
     * @param qrCodeGraphics The [QRCodeGraphics] where the QRCode will be painted into.
     * @param brightColor Color to be used for the "bright" parts of the QR Code. In RGBA space. Defaults to [white][Colors.WHITE].
     * @param darkColor Color to be used for the "dark" parts of the QR Code. In RGBA space. Defaults to [black][Colors.BLACK].
     *
     * @return A [QRCodeGraphics] with the QR Code rendered on it. It can then be saved or manipulated as desired.
     *
     * @see renderShaded
     * @see QRCodeSquare
     * @see QRCodeGraphics
     * @see Colors
     */
    @JvmOverloads
    @JsName("renderComputed")
    fun render(
        cellSize: Int = DEFAULT_CELL_SIZE,
        rawData: QRCodeRawData = encode(),
        qrCodeGraphics: QRCodeGraphics = graphicsFactory.newGraphicsSquare(computeImageSize(cellSize, rawData)),
        brightColor: Int = Colors.WHITE,
        darkColor: Int = Colors.BLACK,
    ) =
        renderShaded(
            cellSize,
            rawData,
            qrCodeGraphics,
        ) { x, y, cellData, graphics ->
            if (cellData.dark) {
                graphics.fillRect(x, y, cellSize, cellSize, darkColor)
            } else {
                graphics.fillRect(x, y, cellSize, cellSize, brightColor)
            }
        }

    /**
     * Renders a QR Code image based on its [computed data][encode].
     *
     * This function provides a way to implement more artistic QRCodes. The [renderer] is a function that draws a single
     * square of the QRCode. It receives 4 parameters: the `(x, y)` coordinates where the square is, the
     * [cellData][QRCodeSquare] and the [QRCodeGraphics] for it to freely draw.
     *
     * _Tip: for better looking QR Codes, try using [QRCode] instead ;)_
     *
     * @param cellSize The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`.
     * @param rawData The data matrix of the QR Code. Defaults to [this.encode()][encode].
     * @param qrCodeGraphics The [QRCodeGraphics] where the QRCode will be painted into.
     * @param renderer Lambda that draws a single QRCode square. It receives as parameters the `(x, y)` of the cell,
     * the [QRCodeSquare] (aka "cell") being drawn and a [QRCodeGraphics] for it to draw the square.
     *
     * @return A [QRCodeGraphics] with the QR Code rendered on it. It can then be saved or manipulated as desired.
     *
     * @see QRCode
     * @see QRCode.ofSquares
     * @see QRCode.ofCircles
     * @see QRCode.ofRoundedSquares
     * @see QRCodeSquare
     * @see QRCodeGraphics
     * @see Colors
     */
    @JvmOverloads
    fun renderShaded(
        cellSize: Int = DEFAULT_CELL_SIZE,
        rawData: QRCodeRawData = encode(),
        qrCodeGraphics: QRCodeGraphics = graphicsFactory.newGraphicsSquare(computeImageSize(cellSize, rawData)),
        renderer: (Int, Int, QRCodeSquare, QRCodeGraphics) -> Unit,
    ): QRCodeGraphics {
        rawData.forEach { rowData ->
            rowData.forEach { cell ->
                if (!cell.rendered) {
                    renderer(cell.absoluteX(cellSize), cell.absoluteY(cellSize), cell, qrCodeGraphics)
                    cell.rendered = true
                }
            }
        }

        return qrCodeGraphics
    }

    /**
     * Computes and encodes the [data] of this object into a QR Code. This method returns the raw data of the QR Code.
     *
     * If you just want to render (create) a QR Code image, you are probably looking for the [renderShaded] method.
     *
     * @param type `type` value for the QRCode computation. Between 0 and 40. Read more about it [here][ErrorCorrectionLevel].
     * Defaults to an [automatically calculated value][infoDensityForDataAndECL] based on [data] and the [errorCorrectionLevel].
     * @param maskPattern Mask Pattern to apply to the final QR Code. Basically changes how the QR Code looks at the end.
     * Read more about it [here][MaskPattern]. Defaults to [MaskPattern.PATTERN000].
     *
     * @return The byte matrix of the encoded QRCode.
     *
     * @see infoDensityForDataAndECL
     * @see ErrorCorrectionLevel
     * @see MaskPattern
     * @see renderShaded
     */
    @JvmOverloads
    fun encode(
        type: Int = infoDensityForDataAndECL(data, errorCorrectionLevel),
        maskPattern: MaskPattern = MaskPattern.PATTERN000,
    ): QRCodeRawData {
        val moduleCount = type * 4 + 17
        val modules: Array<Array<QRCodeSquare?>> =
            Array(moduleCount) { Array(moduleCount) { null } }

        setupTopLeftPositionProbePattern(modules)
        setupTopRightPositionProbePattern(modules)
        setupBottomLeftPositionProbePattern(modules)

        setupPositionAdjustPattern(type, modules)
        setupTimingPattern(moduleCount, modules)
        setupTypeInfo(errorCorrectionLevel, maskPattern, moduleCount, modules)

        if (type >= 7) {
            setupTypeNumber(type, moduleCount, modules)
        }

        val data = createData(type)

        applyMaskPattern(data, maskPattern, moduleCount, modules)

        return Array(moduleCount) { row ->
            Array(moduleCount) { column ->
                modules[row][column] ?: QRCodeSquare(false, row, column, moduleCount)
            }
        }
    }

    private fun createData(type: Int): IntArray {
        val rsBlocks = RSBlock.getRSBlocks(type, errorCorrectionLevel)
        val buffer = BitBuffer()

        buffer.put(qrCodeData.dataType.value, 4)
        buffer.put(qrCodeData.length(), qrCodeData.getLengthInBits(type))
        qrCodeData.write(buffer)

        val totalDataCount = rsBlocks.sumOf { it.dataCount } * 8

        if (buffer.lengthInBits > totalDataCount) {
            val errorMessage =
                "Insufficient Information Density Parameter: $type [neededBits=${buffer.lengthInBits}, maximumBitsForDensityLevel=$totalDataCount] - Try increasing the Information Density parameter value or use 0 (zero) to automatically compute the least amount needed to fit the QRCode data being encoded."
            throw InsufficientInformationDensityException(errorMessage)
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

    private fun createBytes(buffer: BitBuffer, rsBlocks: Array<RSBlock>): IntArray {
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

    override fun toString(): String =
        "QRCode(data=$data" +
            ", errorCorrectionLevel=$errorCorrectionLevel" +
            ", dataType=$dataType" +
            ", qrCodeData=${qrCodeData::class.simpleName}" +
            ")"
}
