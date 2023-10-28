import org.jetbrains.annotations.NotNull;
import org.jfree.svg.SVGGraphics2D;
import qrcode.render.QRCodeGraphics;
import qrcode.render.QRCodeGraphicsFactory;

import java.awt.*;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;

public class SVGQRCodeGraphics extends QRCodeGraphics {
    private final SVGGraphics2D svgGraphics2D;

    public SVGQRCodeGraphics(int width, int height) {
        super(width, height);
        svgGraphics2D = new SVGGraphics2D(width, height);
    }

    @NotNull
    @Override
    protected Graphics2D createGraphics() {
        return svgGraphics2D;
    }

    @NotNull
    @Override
    public Object nativeImage() {
        return svgGraphics2D;
    }

    @Override
    public void drawImage(@NotNull QRCodeGraphics img, int x, int y) {
        // Do nothing
    }

    @Override
    public void writeImage(@NotNull OutputStream destination, @NotNull String format) {
        try (OutputStreamWriter writer = new OutputStreamWriter(destination, StandardCharsets.UTF_8)) {
            writer.write(svgGraphics2D.getSVGDocument());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static class Factory extends QRCodeGraphicsFactory<SVGQRCodeGraphics> {
        public SVGQRCodeGraphics newGraphics(int width, int height) {
            return new SVGQRCodeGraphics(width, height);
        }
    }
}
