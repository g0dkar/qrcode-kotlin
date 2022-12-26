package io.github.g0dkar.qrcode

import io.github.g0dkar.qrcode.QRCodeDataType.DEFAULT
import io.github.g0dkar.qrcode.QRCodeDataType.NUMBERS
import io.github.g0dkar.qrcode.QRCodeDataType.UPPER_ALPHA_NUM
import io.github.g0dkar.qrcode.internals.BitBuffer
import io.github.g0dkar.qrcode.internals.Polynomial
import io.github.g0dkar.qrcode.internals.QR8BitByte
import io.github.g0dkar.qrcode.internals.QRAlphaNum
import io.github.g0dkar.qrcode.internals.QRCodeSetup.applyMaskPattern
import io.github.g0dkar.qrcode.internals.QRCodeSetup.setupBottomLeftPositionProbePattern
import io.github.g0dkar.qrcode.internals.QRCodeSetup.setupPositionAdjustPattern
import io.github.g0dkar.qrcode.internals.QRCodeSetup.setupTimingPattern
import io.github.g0dkar.qrcode.internals.QRCodeSetup.setupTopLeftPositionProbePattern
import io.github.g0dkar.qrcode.internals.QRCodeSetup.setupTopRightPositionProbePattern
import io.github.g0dkar.qrcode.internals.QRCodeSetup.setupTypeInfo
import io.github.g0dkar.qrcode.internals.QRCodeSetup.setupTypeNumber
import io.github.g0dkar.qrcode.internals.QRCodeSquare
import io.github.g0dkar.qrcode.internals.QRCodeSquareInfo
import io.github.g0dkar.qrcode.internals.QRCodeSquareType
import io.github.g0dkar.qrcode.internals.QRData
import io.github.g0dkar.qrcode.internals.QRNumber
import io.github.g0dkar.qrcode.internals.QRUtil
import io.github.g0dkar.qrcode.internals.RSBlock
import io.github.g0dkar.qrcode.render.Colors
import io.github.g0dkar.qrcode.render.DefaultQRCodeGraphicsFactory
import io.github.g0dkar.qrcode.render.QRCodeGraphics
import io.github.g0dkar.qrcode.render.QRCodeGraphicsFactory
import kotlin.js.JsExport
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
 * @param errorCorrectionLevel The level of Error Correction that should be applied to the QR Code. Defaults to [ErrorCorrectionLevel.M].
 * @param dataType One of the available [QRCodeDataType]. By default, the code tries to guess which one is the best fitting one from your input data.
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 *
 * @see ErrorCorrectionLevel
 * @see QRUtil.getDataType
 */
@JsExport
class QRCode @JvmOverloads constructor(
    private val data: String,
    private val errorCorrectionLevel: ErrorCorrectionLevel = ErrorCorrectionLevel.M,
    private val dataType: QRCodeDataType = QRUtil.getDataType(data)
) {
    private val qrCodeData: QRData = when (dataType) {
        NUMBERS -> QRNumber(data)
        UPPER_ALPHA_NUM -> QRAlphaNum(data)
        DEFAULT -> QR8BitByte(data)
    }

    var qrCodeGraphicsFactory: QRCodeGraphicsFactory<*> = DefaultQRCodeGraphicsFactory()

    companion object {
        const val DEFAULT_CELL_SIZE = 25
        const val DEFAULT_MARGIN = 0
        private const val PAD0 = 0xEC
        private const val PAD1 = 0x11

        /**
         * Calculates a suitable value for the [dataType] field for you.
         */
        @JvmStatic
        @JvmOverloads
        fun typeForDataAndECL(
            data: String,
            errorCorrectionLevel: ErrorCorrectionLevel,
            dataType: QRCodeDataType = QRUtil.getDataType(data)
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

            return 40
        }
    }

    /**
     * Compute the final size of the image of this QRCode based on the given `cellSize` and `margin`.
     *
     * This means this QRCode will be `<size> x <size>` pixels. For example, if this method returns 100, the resulting
     * image will be 100x100 pixels.
     */
    @JsName("computeImageSizeFromRawData")
    fun computeImageSize(
        cellSize: Int = DEFAULT_CELL_SIZE,
        margin: Int = 0,
        rawData: Array<Array<QRCodeSquare?>> = encode()
    ): Int = computeImageSize(cellSize, margin, rawData.size)

    /**
     * Compute the final size of the image of this QRCode based on the given `cellSize` and `margin`.
     *
     * This means this QRCode will be `<size> x <size>` pixels. For example, if this method returns 100, the resulting
     * image will be 100x100 pixels.
     */
    fun computeImageSize(
        cellSize: Int = DEFAULT_CELL_SIZE,
        margin: Int = DEFAULT_MARGIN,
        size: Int
    ): Int = size * cellSize + margin * 2

    /**
     * Renders a QR Code image based on its [computed data][encode]. This function exists to ease the interop with
     * Java :)
     *
     * @param cellSize The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`.
     * @param margin Amount of space **in pixels** to add as a margin around the rendered QR Code. Defaults to `0`.
     * @param brightColor Color to be used for the "bright" parts of the QR Code. In RGBA space. Defaults to [white][Colors.WHITE].
     * @param darkColor Color to be used for the "dark" parts of the QR Code. In RGBA space. Defaults to [black][Colors.BLACK].
     * @param marginColor Color to be used for the "margin" part of the QR Code. In RGBA space. Defaults to [white][Colors.WHITE].
     *
     * @return A [QRCodeGraphics] with the QR Code rendered on it. It can then be saved or manipulated as desired.
     *
     * @see renderShaded
     * @see QRCodeSquare
     * @see QRCodeGraphics
     * @see Colors
     */
    @JsName("renderSimple")
    fun render(
        cellSize: Int = DEFAULT_CELL_SIZE,
        margin: Int = DEFAULT_MARGIN,
        brightColor: Int = Colors.WHITE,
        darkColor: Int = Colors.BLACK,
        marginColor: Int = Colors.WHITE
    ) =
        render(
            cellSize = cellSize,
            margin = margin,
            rawData = encode(),
            brightColor = brightColor,
            darkColor = darkColor,
            marginColor = marginColor
        )

    /**
     * Renders a QR Code image based on its [computed data][encode].
     *
     * _Tip: for the "traditional look-and-feel" QR Code, set [margin] equal to [cellSize]._
     *
     * @param cellSize The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`.
     * @param margin Amount of space **in pixels** to add as a margin around the rendered QR Code. Defaults to `0`.
     * @param rawData The data matrix of the QR Code. Defaults to [this.encode()][encode].
     * @param qrCodeGraphics The [QRCodeGraphics] where the QRCode will be painted into.
     * @param brightColor Color to be used for the "bright" parts of the QR Code. In RGBA space. Defaults to [white][Colors.WHITE].
     * @param darkColor Color to be used for the "dark" parts of the QR Code. In RGBA space. Defaults to [black][Colors.BLACK].
     * @param marginColor Color to be used for the "margin" part of the QR Code. In RGBA space. Defaults to [white][Colors.WHITE].
     *
     * @return A [QRCodeGraphics] with the QR Code rendered on it. It can then be saved or manipulated as desired.
     *
     * @see renderShaded
     * @see QRCodeSquare
     * @see QRCodeGraphics
     * @see Colors
     */
    @JvmOverloads
    fun render(
        cellSize: Int = DEFAULT_CELL_SIZE,
        margin: Int = DEFAULT_MARGIN,
        rawData: Array<Array<QRCodeSquare?>> = encode(),
        qrCodeGraphics: QRCodeGraphics = qrCodeGraphicsFactory.newGraphics(
            computeImageSize(
                cellSize,
                margin,
                rawData
            )
        ),
        brightColor: Int = Colors.WHITE,
        darkColor: Int = Colors.BLACK,
        marginColor: Int = Colors.WHITE
    ) =
        renderShaded(
            cellSize,
            margin,
            rawData,
            qrCodeGraphics
        ) { cellData, graphics ->
            if (cellData.dark) {
                graphics.fill(darkColor)
            } else {
                if (cellData.squareInfo.type != QRCodeSquareType.MARGIN) {
                    graphics.fill(brightColor)
                } else {
                    graphics.fill(marginColor)
                }
            }
        }

    /**
     * Renders a QR Code image based on its [computed data][encode].
     *
     * This function provides a way to implement more artistic QRCodes. The [renderer] is a function that draws a single
     * square of the QRCode. It receives 2 parameters: [cellData][QRCodeSquare] and a [QRCodeGraphics] for it to freely
     * draw. After finished, the canvas will be placed into the final image in its respective place.
     *
     * To show this, here's a renderer that makes a QR Code that is half [blue][Colors.BLUE] and half [red][Colors.RED]:
     *
     * ```kotlin
     * QRCode("example").renderShaded { cellData, graphics ->
     *     if (cellData.type != QRCodeSquareType.MARGIN && cellData.dark) {
     *         if (cellData.row > cellData.size / 2) {
     *             graphics.fill(Colors.BLUE)
     *         }
     *         else {
     *             graphics.fill(Colors.RED)
     *         }
     *     } else {
     *         graphics.fill(Colors.WHITE)
     *     }
     * }
     * ```
     *
     * _Tip: for the "traditional look-and-feel" QR Code, try setting [margin] equal to [cellSize]._
     *
     * @param cellSize The size **in pixels** of each square (cell) in the QR Code. Defaults to `25`.
     * @param margin Amount of space **in pixels** to add as a margin around the rendered QR Code. Defaults to `0`.
     * @param rawData The data matrix of the QR Code. Defaults to [this.encode()][encode].
     * @param qrCodeGraphics The [QRCodeGraphics] where the QRCode will be painted into.
     * @param renderer Lambda that draws a single QRCode square. It receives as parameters the [QRCodeSquare] being draw
     * and a [QRCodeGraphics] for it to draw the square.
     *
     * @return A [QRCodeGraphics] with the QR Code rendered on it. It can then be saved or manipulated as desired.
     *
     * @see QRCodeSquare
     * @see QRCodeGraphics
     * @see Colors
     */
    @JvmOverloads
    fun renderShaded(
        cellSize: Int = DEFAULT_CELL_SIZE,
        margin: Int = DEFAULT_MARGIN,
        rawData: Array<Array<QRCodeSquare?>> = encode(),
        qrCodeGraphics: QRCodeGraphics = qrCodeGraphicsFactory.newGraphics(
            computeImageSize(
                cellSize,
                margin,
                rawData
            )
        ),
        renderer: (QRCodeSquare, QRCodeGraphics) -> Unit
    ): QRCodeGraphics {
        if (margin > 0) {
            val marginSquare = QRCodeSquare(
                dark = false,
                row = 0,
                col = 0,
                moduleSize = rawData.size,
                squareInfo = QRCodeSquareInfo.margin()
            )

            renderer(marginSquare, qrCodeGraphics)
        }

        rawData.forEachIndexed { row, rowData ->
            rowData.forEachIndexed { col, cell ->
                if (cell != null) {
                    val squareCanvas = qrCodeGraphicsFactory.newGraphics(cellSize)
                    renderer(cell, squareCanvas)
                    qrCodeGraphics.drawImage(
                        squareCanvas,
                        margin + cellSize * col,
                        margin + cellSize * row
                    )
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
    @JvmOverloads
    fun encode(
        type: Int = typeForDataAndECL(data, errorCorrectionLevel),
        maskPattern: MaskPattern = MaskPattern.PATTERN000
    ): Array<Array<QRCodeSquare?>> {
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

        return modules
    }

    private fun createData(type: Int): IntArray {
        val rsBlocks = RSBlock.getRSBlocks(type, errorCorrectionLevel)
        val buffer = BitBuffer()

        buffer.put(qrCodeData.dataType.value, 4)
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

    override fun toString(): String =
        "QRCode(data=$data" +
            ", errorCorrectionLevel=$errorCorrectionLevel" +
            ", dataType=$dataType" +
            ", qrCodeData=${qrCodeData::class.simpleName}" +
            ")"
}
