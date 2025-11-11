package qrcode.render.graphics

import kotlinx.browser.document
import org.khronos.webgl.Uint8ClampedArray
import org.khronos.webgl.toInt8Array
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.ImageData

/**
 * An [WasmJsDrawingInterface] that uses a [Canvas] (here referred to as "Classic Canvas") to draw into a [Bitmap].
 *
 * For a modern Canvas, see [DrawScopeGraphics] which uses Jetpack Compose.
 */
@OptIn(ExperimentalWasmJsInterop::class)
open class HTMLCanvasGraphics(
    val width: Int,
    val height: Int,
) : WasmJsDrawingInterface {
    companion object {
        private const val CANVAS_UNSUPPORTED = "Canvas seems to not be supported :("
        private const val FULL_CIRCLE = 3.141592653589793 * 2.0 // 2 * PI = Full circle
    }

    private val canvas: HTMLCanvasElement

    init {
        val canvas = tryGet { document.createElement("canvas") as HTMLCanvasElement }

        canvas.width = width
        canvas.height = height

        this.canvas = canvas
    }

    private fun draw(color: Int, action: CanvasRenderingContext2D.() -> Unit) {
        val context = tryGet { canvas.getContext("2d") as CanvasRenderingContext2D }

        val colorString = rgba(color)
        context.fillStyle = colorString.toJsString()
        context.strokeStyle = colorString.toJsString()

        val lineWidth = context.lineWidth

        action(context)

        context.lineWidth = lineWidth
    }

    override fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int, thickness: Double) {
        draw(color) {
            moveTo(x1.toDouble(), y1.toDouble())
            lineTo(x2.toDouble(), y2.toDouble())
        }
    }

    override fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        draw(color) {
            lineWidth = thickness
            val halfThickness = thickness / 2.0
            strokeRect(
                x.toDouble() + halfThickness,
                y.toDouble() + halfThickness,
                width.toDouble() - thickness,
                height.toDouble() - thickness,
            )
        }
    }

    override fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) {
            fillRect(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
        }
    }

    override fun fill(color: Int) {
        fillRect(0, 0, width, height, color)
    }

    override fun drawRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
        thickness: Double,
    ) {
        drawRect(x, y, width, height, color, 1.0)
    }

    override fun fillRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
    ) {
        fillRect(x, y, width, height, color)
    }

    override fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        draw(color) {
            val radiusX = width.toDouble() / 2.0
            val radiusY = height.toDouble() / 2.0

            lineWidth = thickness
            beginPath()
            ellipse(
                radiusX + x.toDouble(), radiusY + y.toDouble(), radiusX, radiusY, 0.0, 0.0,
                FULL_CIRCLE, false,
            )
            stroke()
        }
    }

    override fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) {
            val radiusX = width.toDouble() / 2.0
            val radiusY = height.toDouble() / 2.0

            beginPath()
            ellipse(
                radiusX + x.toDouble(), radiusY + y.toDouble(), radiusX, radiusY, 0.0, 0.0,
                FULL_CIRCLE, false,
            )
            fill()
        }
    }

    override fun drawImage(rawData: ByteArray?, x: Int, y: Int) {
        if (rawData != null && rawData.isNotEmpty()) {
            draw(0) {
                val imageDataArray: JsArray<JsNumber> = rawData.toInt8Array().unsafeCast()
                val imageData = ImageData(Uint8ClampedArray(imageDataArray), width)
                putImageData(imageData, x.toDouble(), y.toDouble())
            }
        }
    }

    override fun nativeImage(): Any = canvas

    override fun getBytes(format: String, quality: Int): ByteArray =
        canvas.toDataURL(format).substringAfter("data:image/png;base64,").encodeToByteArray()

    private fun rgba(color: Int): String {
        val r = (color shr 16) and 0xFF
        val g = (color shr 8) and 0xFF
        val b = (color shr 0) and 0xFF
        val a = ((color shr 24) and 0xFF) / 255.0
        return "rgba($r,$g,$b,$a)"
    }

    private fun <T> tryGet(what: () -> T): T =
        try {
            what()
        } catch (t: Throwable) {
            throw Error(CANVAS_UNSUPPORTED, cause = t)
        }
}
