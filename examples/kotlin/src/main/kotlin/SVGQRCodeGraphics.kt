import io.github.g0dkar.qrcode.render.QRCodeGraphics
import java.awt.Graphics2D
import java.io.OutputStream
import java.io.OutputStreamWriter
import java.nio.charset.StandardCharsets
import org.jfree.svg.SVGGraphics2D

class SVGQRCodeGraphics(width: Int, height: Int) : QRCodeGraphics(width, height) {
    private val svgGraphics2D = SVGGraphics2D(width.toDouble(), height.toDouble())

    override fun createGraphics(): Graphics2D = svgGraphics2D

    override fun nativeImage(): Any = svgGraphics2D

    override fun writeImage(destination: OutputStream, format: String) {
        OutputStreamWriter(destination, StandardCharsets.UTF_8).use {
            it.write(svgGraphics2D.svgDocument)
        }
    }

    override fun drawImage(img: QRCodeGraphics, x: Int, y: Int) {
        // Do nothing
    }
}
