import qrcode.QRCode
import java.io.FileOutputStream

fun main() {
    // Calling fitIntoArea()
    val qrCode_2xW_2xH_Size = QRCode.ofSquares()
        .build("Resizing to 2x the original size")
    val qrCode_2xW_2xH_SizeCanvasSize = qrCode_2xW_2xH_Size.canvasSize
    qrCode_2xW_2xH_Size.fitIntoArea(qrCode_2xW_2xH_SizeCanvasSize * 2, qrCode_2xW_2xH_SizeCanvasSize * 2)
    val qrCode_2xW_2xH_SizePngData = qrCode_2xW_2xH_Size.renderToBytes()

    val qrCode_3xW_2xH_Size = QRCode.ofSquares()
        .build("Resizing to 3x Width, 2x Height the original size")
    val qrCode_3xW_2xH_SizeCanvasSize = qrCode_3xW_2xH_Size.canvasSize
    qrCode_3xW_2xH_Size.fitIntoArea(qrCode_3xW_2xH_SizeCanvasSize * 3, qrCode_3xW_2xH_SizeCanvasSize * 2)
    val qrCode_3xW_2xH_SizePngData = qrCode_3xW_2xH_Size.renderToBytes()

    val qrCode_2xW_3xH_Size = QRCode.ofSquares()
        .build("Resizing to 2x Width, 3x Height the original size")
    val qrCode_2xW_3xH_SizeCanvasSize = qrCode_2xW_3xH_Size.canvasSize
    qrCode_2xW_3xH_Size.fitIntoArea(qrCode_2xW_3xH_SizeCanvasSize * 2, qrCode_2xW_3xH_SizeCanvasSize * 3)
    val qrCode_2xW_3xH_SizePngData = qrCode_2xW_3xH_Size.renderToBytes()

    FileOutputStream("examples/kotlin/examples-results/example09-2xW-2xH-fitIntoArea.png").use { it.write(qrCode_2xW_2xH_SizePngData) }
    FileOutputStream("examples/kotlin/examples-results/example09-3xW-2xH-fitIntoArea.png").use { it.write(qrCode_3xW_2xH_SizePngData) }
    FileOutputStream("examples/kotlin/examples-results/example09-2xW-3xH-fitIntoArea.png").use { it.write(qrCode_2xW_3xH_SizePngData) }

    // ------------------------------------------
    // Calling resize()
    val qrCode2xResize = QRCode.ofSquares()
        .build("Resizing to 2x the original size")
    val qrCode2xResizeCanvasSize = qrCode2xResize.canvasSize
    qrCode2xResize.resizeCanvas(qrCode2xResizeCanvasSize * 2)
    val qrCode2xResizePngData = qrCode2xResize.renderToBytes()

    FileOutputStream("examples/kotlin/examples-results/example09-2xW-2xH-resizeCanvas.png").use { it.write(qrCode2xResizePngData) }
}
