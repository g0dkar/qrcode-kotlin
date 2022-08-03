import io.github.g0dkar.qrcode.render.QRCodeGraphics
import org.apache.batik.dom.GenericDOMImplementation
import org.apache.batik.svggen.SVGGraphics2D
import java.awt.Graphics2D

class SVGQRCodeGraphics(width: Int, height: Int) : QRCodeGraphics(width, height) {
    companion object {
        private const val SVG_NS = "http://www.w3.org/2000/svg"
        private const val SVG_QN = "svg"
    }

    private val svg = GenericDOMImplementation
        .getDOMImplementation()
        .createDocument(SVG_NS, SVG_QN, null)

    override fun createGraphics(): Graphics2D = SVGGraphics2D(svg)
}
