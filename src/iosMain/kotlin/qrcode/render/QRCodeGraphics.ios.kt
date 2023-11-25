package qrcode.render

import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.usePinned
import platform.CoreGraphics.CGContextFillEllipseInRect
import platform.CoreGraphics.CGContextFillPath
import platform.CoreGraphics.CGContextStrokeEllipseInRect
import platform.CoreGraphics.CGContextStrokePath
import platform.CoreGraphics.CGPathCreateWithRoundedRect
import platform.CoreGraphics.CGPointMake
import platform.CoreGraphics.CGRectMake
import platform.CoreGraphics.CGSizeMake
import platform.Foundation.NSMutableData
import platform.Foundation.appendBytes
import platform.UIKit.UIColor
import platform.UIKit.UIGraphicsImageRenderer
import platform.UIKit.UIGraphicsImageRendererContext
import platform.UIKit.UIImage
import qrcode.color.Colors

@OptIn(ExperimentalForeignApi::class)
@Suppress("MemberVisibilityCanBePrivate")
actual open class QRCodeGraphics actual constructor(
    val width: Int,
    val height: Int,
) {
    companion object {
        private val AVAILABLE_FORMATS = arrayOf("JPEG", "PNG", "HEIC")
    }

    private var changed: Boolean = false
    private val imgSize = CGSizeMake(width = width.toDouble(), height = height.toDouble())
    private val renderer = UIGraphicsImageRenderer(imgSize)

    private val renderActions = mutableListOf<(UIGraphicsImageRendererContext) -> Unit>()

    private fun colorOf(color: Int): UIColor {
        val (r, g, b, a) = Colors.getRGBA(color)

        return UIColor(
            red = r.toDouble(),
            green = g.toDouble(),
            blue = b.toDouble(),
            alpha = a.toDouble(),
        )
    }

    /** Returns `true` if **any** drawing was performed */
    actual open fun changed() = changed

    /** Simply changes the `changed` flag to true without doing anything else */
    actual fun reset() {
        if (changed) {
            changed = false
            renderActions.clear()
        }
    }

    /** Return the dimensions of this Graphics object as a pair of `width, height` */
    actual open fun dimensions() = arrayOf(width, height)

    /** Returns this image as a [ByteArray] encoded as PNG. */
    actual open fun getBytes(): ByteArray = getBytes("PNG")

    /**
     * Returns this image as a [ByteArray] encoded as the specified format.
     *
     * @see availableFormats
     */
    actual open fun getBytes(format: String): ByteArray =
        (nativeImage() as? UIImage)?.let { image ->
            when (format) {
                "HEIC" -> UIImageHEICRepresentation(image)
                "JPEG" -> UIImageJPEGRepresentation(image, 1.0)
                "PNG" -> UIImagePNGRepresentation(image)
                else -> null
            }?.toByteArray() ?: ByteArray(0)
        } ?: ByteArray(0)

    /**
     * Returns the available formats to be passed as parameters to [getBytes].
     *
     * As implied by the iOS Documentation, only JPEG and PNG are supported.
     *
     */
    actual open fun availableFormats(): Array<String> = AVAILABLE_FORMATS

    /** Returns the [Bitmap] object being worked upon. */
    actual open fun nativeImage(): Any = renderer.imageWithActions { context ->
        if (context != null) {
            renderActions.forEach { it(context) }
        }
    }

    /**
     * Does nothing.
     *
     * **Note: I couldn't find a method for doing this on the iOS API. If you know of one, please send a message :)**
     *
     * @see fill
     * @see fillRect
     * @see drawRect
     * @see drawImage
     */
    actual open fun drawLine(x1: Int, y1: Int, x2: Int, y2: Int, color: Int, thickness: Double) {
        // Unsupported
    }

    /** Draw the edges of a rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun drawRect(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        renderActions.add {
            colorOf(color).setStroke()
            val rect = CGRectMake(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
            CGContextSetLineWidth(it.CGContext, thickness)
            it.strokeRect(rect)
        }
    }

    /** Fills the rectangle starting at point `(x,y)` and having `width` by `height`. */
    actual open fun fillRect(x: Int, y: Int, width: Int, height: Int, color: Int) {
        renderActions.add {
            colorOf(color).setFill()
            val rect = CGRectMake(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
            it.fillRect(rect)
        }
    }

    /** Fill the whole area of this canvas with the specified [color]. */
    actual open fun fill(color: Int) {
        fillRect(0, 0, width, height, color)
    }

    /**
     * Draw the edges of a round rectangle starting at point `(x,y)` and having `width` by `height`
     * with edges that are `borderRadius` round (almost like CSS).
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
    actual open fun drawRoundRect(
        x: Int,
        y: Int,
        width: Int,
        height: Int,
        borderRadius: Int,
        color: Int,
        thickness: Double,
    ) {
        renderActions.add {
            colorOf(color).setFill()

            val area = CGRectMake(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
            CGPathCreateWithRoundedRect(area, borderRadius.toDouble(), borderRadius.toDouble(), null)

            CGContextFillPath(it.CGContext)
        }
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
     * fillRoundRect(0, 0, 100, 100, 5)
     * ```
     *
     * **Note:** you can't specify different sizes for different edges. This is just an example :)
     *
     */
    actual open fun fillRoundRect(x: Int, y: Int, width: Int, height: Int, borderRadius: Int, color: Int) {
        renderActions.add {
            colorOf(color).setStroke()

            val area = CGRectMake(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
            CGPathCreateWithRoundedRect(area, borderRadius.toDouble(), borderRadius.toDouble(), null)

            CGContextStrokePath(it.CGContext)
        }
    }

    /**
     * Draw the edges of an ellipsis (aka "a circle") which occupies the area `(x,y,width,height)`
     */
    actual fun drawEllipse(x: Int, y: Int, width: Int, height: Int, color: Int, thickness: Double) {
        renderActions.add {
            colorOf(color).setStroke()
            val area = CGRectMake(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
            CGContextStrokeEllipseInRect(it.CGContext, area)
        }
    }

    /**
     * Fills an ellipsis (aka "a circle") which occupies the area `(x,y,width,height)`
     *
     */
    actual fun fillEllipse(x: Int, y: Int, width: Int, height: Int, color: Int) {
        renderActions.add {
            colorOf(color).setFill()
            val area = CGRectMake(x.toDouble(), y.toDouble(), width.toDouble(), height.toDouble())
            CGContextFillEllipseInRect(it.CGContext, area)
        }
    }

    /**
     * Reads the specified image from [rawData] and draws it at `(x,y)`
     */
    actual fun drawImage(rawData: ByteArray?, x: Int, y: Int) {
        if (rawData != null && rawData.isNotEmpty()) {
            renderActions.add {
                rawData.usePinned {
                    val imgData = NSMutableData()
                    imgData.appendBytes(it.addressOf(0), rawData.size.toULong())

                    val image = UIImage(imgData)
                    val point = CGPointMake(x = x.toDouble(), y = y.toDouble())
                    image.drawAtPoint(point)
                }
            }
        }
    }
}

/**
 * Converts an [NSData] object to a [ByteArray].
 * This function is useful when working in Kotlin/Native where data may be represented as [ByteArray]
 */
@OptIn(ExperimentalForeignApi::class)
private fun NSData.toByteArray(): ByteArray {
    val result = ByteArray(length.toInt())
    if (result.isEmpty()) return result
    result.usePinned {
        memcpy(it.addressOf(0), bytes, length)
    }
    return result
}
