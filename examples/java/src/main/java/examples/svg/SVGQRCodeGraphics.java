package examples.svg;

import org.jetbrains.annotations.NotNull;
import org.jfree.svg.SVGGraphics2D;
import qrcode.render.QRCodeGraphics;

import java.awt.*;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;

public class SVGQRCodeGraphics extends QRCodeGraphics {
    private final SVGGraphics2D graphics;

    public SVGQRCodeGraphics(int width, int height) {
        super(width, height);
        graphics = new SVGGraphics2D(width, height);
    }

    @NotNull
    @Override
    protected Graphics2D createGraphics() {
        return graphics;
    }

    @Override
    public void writeImage(@NotNull OutputStream destination, @NotNull String format) {
        try (OutputStreamWriter writer = new OutputStreamWriter(destination, StandardCharsets.UTF_8)) {
            writer.write(graphics.getSVGDocument());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
