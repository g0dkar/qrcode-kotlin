package examples.customClasses;

import qrcode.QRCode;
import qrcode.render.QRCodeGraphics;
import qrcode.shape.DefaultShapeFunction;

import java.awt.*;

public class JVMTriangleShapeFunction extends DefaultShapeFunction {
    public JVMTriangleShapeFunction() {
        super(QRCode.DEFAULT_SQUARE_SIZE, 1);
    }

    public void fillRect(int x, int y, int width, int height, int color, QRCodeGraphics canvas) {
        int topCenterX = x + width / 2;
        int topCenterY = y;
        int bottomLeftX = x;
        int bottomLeftY = y + height;
        int bottomRightX = x + width;
        int bottomRightY = y + height;

        canvas.directDraw(it -> {
            Polygon triangle = new Polygon();
            triangle.addPoint(topCenterX, topCenterY);
            triangle.addPoint(bottomLeftX, bottomLeftY);
            triangle.addPoint(bottomRightX, bottomRightY);
            triangle.addPoint(topCenterX, topCenterY);

            it.setPaint(new Color(color));

            it.fill(triangle);
        });
    }
}
