import io.github.g0dkar.qrcode.render.QRCodeGraphics
import java.awt.Graphics2D
import java.io.OutputStream
import java.io.OutputStreamWriter
import org.apache.batik.dom.GenericDOMImplementation
import org.apache.batik.svggen.SVGGraphics2D

class SVGQRCodeGraphics(width: Int, height: Int, var useCSS: Boolean = true) :
    QRCodeGraphics(width, height) {
    companion object {
        private const val SVG_NS = "http://www.w3.org/2000/svg"
        private const val SVG_QN = "svg"
        private const val SVG_CHARSET = "UTF-8"
    }

    private val svg = GenericDOMImplementation
        .getDOMImplementation()
        .createDocument(SVG_NS, SVG_QN, null)

    private val svgGenerator = SVGGraphics2D(svg)

    override fun createGraphics(): Graphics2D = svgGenerator

    override fun nativeImage(): Any = svg

    override fun writeImage(destination: OutputStream, format: String) {
        val writer = OutputStreamWriter(destination, SVG_CHARSET)
        svgGenerator.stream(writer, useCSS)
    }
}
