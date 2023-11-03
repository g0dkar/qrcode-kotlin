package svg

import org.jfree.svg.SVGGraphics2D
import qrcode.render.QRCodeGraphics
import java.awt.Graphics2D
import java.awt.image.BufferedImage
import java.io.OutputStream
import java.io.OutputStreamWriter
import java.nio.charset.StandardCharsets

class SVGQRCodeGraphics(width: Int, height: Int) : QRCodeGraphics(width, height) {
    private lateinit var svgGraphics2D: SVGGraphics2D

    override fun createImage(force: Boolean): BufferedImage {
        if (force || !this::svgGraphics2D.isInitialized) {
            svgGraphics2D = SVGGraphics2D(width.toDouble(), height.toDouble())
        }

        return super.createImage(force)
    }

    override fun createGraphics(): Graphics2D = svgGraphics2D

    override fun nativeImage(): Any = svgGraphics2D

    override fun writeImage(destination: OutputStream, format: String) {
        if (this::svgGraphics2D.isInitialized) {
            OutputStreamWriter(destination, StandardCharsets.UTF_8).use {
                it.write(svgGraphics2D.svgDocument)
            }
        }
    }
}
