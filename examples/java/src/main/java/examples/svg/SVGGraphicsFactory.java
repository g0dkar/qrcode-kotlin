package examples.svg;

import org.jetbrains.annotations.NotNull;
import qrcode.render.QRCodeGraphics;
import qrcode.render.QRCodeGraphicsFactory;

public class SVGGraphicsFactory extends QRCodeGraphicsFactory {
    /**
     * IntelliJ might show an error on this method, but it can be ignored. Not sure what causes it.
     */
    @NotNull
    @Override
    public QRCodeGraphics newGraphics(int width, int height) {
        return new SVGQRCodeGraphics(width, height);
    }
}
