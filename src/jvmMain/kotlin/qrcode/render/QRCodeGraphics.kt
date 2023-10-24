package qrcode.render

import java.awt.Color
import java.awt.Graphics2D
import java.awt.RenderingHints
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.OutputStream
import javax.imageio.ImageIO

@Suppress("MemberVisibilityCanBePrivate")
actual open class QRCodeGraphics actual constructor(
    val width: Int,
    val height: Int
) {
    private lateinit var image: BufferedImage
    private val colorCache = mutableMapOf<Int, Color>()
    private var changed: Boolean = false

    protected open fun createImage(): BufferedImage {
        if (!this::image.isInitialized) {
            image = BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB)
        }

        return image
    }

    protected open fun createGraphics(): Graphics2D = createImage().createGraphics()

    /**
     * Handles the annoying parts of drawing. It sets up the specified [color] as the stroke, fill and background colors
     * and then executes the given [action] passing the [Graphics2D] as a parameter to it.
     */
    protected fun draw(color: Int, action: (Graphics2D) -> Unit) {
        changed = true
        val graphics = createGraphics()
        val jdkColor = colorCache.computeIfAbsent(color) { Color(color, true) }

        graphics.paint = jdkColor
        graphics.color = jdkColor
        graphics.background = jdkColor
        graphics.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON)

        action(graphics)

        graphics.dispose()
    }

    /** Returns `true` if **any** drawing was performed */
    actual open fun changed() = changed

    /** Return the dimensions of this Graphics object as a pair of `width, height` */
    actual open fun dimensions() = Pair(width, height)

    /**
     * Returns this image as a [ByteArray] encoded as PNG. Usually recommended to use [writeImage] instead :)
     *
     * @see writeImage
     */
    actual open fun getBytes(): ByteArray = getBytes("PNG")

    /**
     * Returns this image as a [ByteArray] encoded as the specified format. Usually recommended to use [writeImage]
     * instead :)
     *
     * @see writeImage
     */
    actual open fun getBytes(format: String): ByteArray =
        ByteArrayOutputStream().let {
            writeImage(it, format)
            it.toByteArray()
        }

    /**
     * Writes the QRCode image in the specified [format] into the destination [OutputStream].
     *
     * @see ImageIO.write
     * @throws UnsupportedOperationException No suitable Image Writer was found for the specified format.
     */
    @JvmOverloads
    open fun writeImage(destination: OutputStream, format: String = "PNG") {
        val wasImageWritten = ImageIO.write(createImage(), format, destination)

        if (!wasImageWritten) {
            throw UnsupportedOperationException("Unsupported format: $format")
        }
    }

    /**
     * Returns the available formats to be passed as parameters to [getBytes].
     *
     * @see ImageIO.getWriterFileSuffixes
     */
    actual open fun availableFormats(): Array<String> = ImageIO.getWriterFileSuffixes()

    /** Returns the [BufferedImage] object being worked upon. */
    actual open fun nativeImage(): Any = createImage()

    /** Draw a straight line from point `(x1,y1)` to `(x2,y2)`. */
    actual open fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int) {
        draw(color) { it.drawLine(x1, y1, x2, y2) }
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) { it.drawRect(x, y, width, height) }
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) { it.fillRect(x, y, width, height) }
    }

    /** Fill the whole area of this canvas with the specified [color]. */
    actual open fun fill(color: Int) {
        fillRect(0, 0, width, height, color)
    }

    /**
     * Draw the edges of a round rectangle starting at point `(x,y)` and having `width` by `height`
     * with edges that are `borderRadius` pixels round (almost like CSS).
     *
     * If it helps, these would _in theory_ draw the same thing:
     *
     * ```
     * // CSS
     * .roundRect {
     *     width: 100px;
     *     height: 100px;
     *     border-radius: 5px;
     * }
     *
     * // Kotlin
     * drawRoundRect(0, 0, 100, 100, 5)
     * ```
     *
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    actual open fun drawRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        draw(color) { it.drawRoundRect(x, y, width, height, borderRadius, borderRadius) }
    }

    /**
     * Fills the round rectangle starting at point `(x,y)` and having `width` by `height`
     * with edges that are `borderRadius` pixels round (almost like CSS).
     *
     * If it helps, these would _in theory_ draw the same thing:
     *
     * ```
     * // CSS
     * .roundRect {
     *     width: 100px;
     *     height: 100px;
     *     border-radius: 5px;
     * }
     *
     * // Kotlin
     * drawRoundRect(0, 0, 100, 100, 5)
     * ```
     *
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    actual open fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        draw(color) { it.fillRoundRect(x, y, width, height, borderRadius, borderRadius) }
    }

    /** Draw an image inside another. Mostly used to merge squares into the main QRCode. */
    actual open fun drawImage(img: QRCodeGraphics, x: Int, y: Int) {
        drawImage(img.createImage(), x, y)
    }

    /**
     * Draw the edges of an ellipsis (aka "a circle") which occupies the area `(x,y,width,height)`
     */
    actual open fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) {
            // The docs say the dimensions are width+1 and height+1... why? because f.u.
            it.drawOval(x, y, width - 1, height - 1)
        }
    }

    /**
     * Fills an ellipsis (aka "a circle") which occupies the area `(x,y,width,height)`
     *
     */
    actual open fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        draw(color) {
            it.fillOval(x, y, width, height)
        }
    }

    /**
     * Reads the specified image from [rawData] and draws it at `(x,y)`
     */
    actual open fun drawImage(rawData: ByteArray, x: Int, y: Int) {
        draw(0) {
            ByteArrayInputStream(rawData).use { inStream ->
                drawImage(ImageIO.read(inStream), x, y)
            }
        }
    }

    open fun drawImage(image: BufferedImage, x: Int, y: Int) {
        draw(0) {
            it.drawImage(image, x, y, null)
        }
    }
}
