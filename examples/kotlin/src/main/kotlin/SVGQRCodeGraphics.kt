import io.github.g0dkar.qrcode.render.QRCodeGraphics
import java.awt.Graphics2D
import java.io.OutputStream
import java.io.OutputStreamWriter
import java.nio.charset.StandardCharsets
import org.apache.batik.dom.GenericDOMImplementation
import org.apache.batik.svggen.SVGGraphics2D

class SVGQRCodeGraphics(width: Int, height: Int) : QRCodeGraphics(width, height) {
    private val svgGraphics2D = SVGGraphics2D(width, height)

    override fun createGraphics(): Graphics2D = svgGraphics2D

    override fun nativeImage(): Any = svgGraphics2D

    override fun writeImage(destination: OutputStream, format: String) {
        val writer = OutputStreamWriter(destination, StandardCharsets.UTF_8)
        writer.use {
            it.write(svgGraphics2D.getSVGDocument())
        }
    }
}
