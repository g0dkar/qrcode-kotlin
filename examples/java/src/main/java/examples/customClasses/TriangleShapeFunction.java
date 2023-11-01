package examples.customClasses;

import qrcode.QRCode;
import qrcode.render.QRCodeGraphics;
import qrcode.shape.DefaultShapeFunction;

public class TriangleShapeFunction extends DefaultShapeFunction {
    public TriangleShapeFunction() {
        super(QRCode.DEFAULT_SQUARE_SIZE, 1);
    }

    public void fillRect(int x, int y, int width, int height, int color, QRCodeGraphics canvas) {
        int topCenterX = x + width / 2;
        int topCenterY = y;
        int bottomLeftX = x;
        int bottomLeftY = y + height;
        int bottomRightX = x + width;
        int bottomRightY = y + height;

        // Line from top-center to bottom-left
        canvas.drawLine(topCenterX, topCenterY, bottomLeftX, bottomLeftY, color, 1.0);
        // Line from top-center to bottom-right
        canvas.drawLine(topCenterX, topCenterY, bottomRightX, bottomRightY, color, 1.0);
        // Line from bottom-left to bottom-right
        canvas.drawLine(bottomLeftX, bottomLeftY, bottomRightX, bottomRightY, color, 1.0);
    }
}
