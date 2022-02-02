package io.github.g0dkar.qrcode.render

import io.github.g0dkar.qrcode.internals.ErrorMessage.error
import java.lang.ClassLoader.getSystemClassLoader
import java.util.function.BiFunction

/**
 * Builds platform-correct instances of QRCode. It tries to detect available implementations of
 * image builders and creates a respective [QRCodeCanvas] instance.
 *
 * @author Rafael Lins - g0dkar
 *
 * @see AVAILABLE_IMPLEMENTATIONS
 */
object QRCodeCanvasFactory {
    /**
     * Holds a map of available implementations of QRCodeCanvas. The keys on this map are the FQCN of a class that
     * must exist in the Classpath in order for this QRCodeCanvas implementation to be available.
     *
     * The values are [BiFunction]s which receive the `width` and `height` of the canvas and returns an instance.
     *
     * By default, [BufferedImageCanvas] (which needs `java.awt.image.BufferedImage`) is always added in the following
     * manner:
     *
     * ```kotlin
     * AVAILABLE_IMPLEMENTATIONS[BufferedImageCanvas.IMAGE_CLASS] =
     *     BiFunction { width, height -> BufferedImageCanvas(width, height) }
     * ```
     */
    val AVAILABLE_IMPLEMENTATIONS = LinkedHashMap<String, BiFunction<Int, Int, QRCodeCanvas<*>>>()
        .apply {
            this[BufferedImageCanvas.IMAGE_CLASS] =
                BiFunction { width, height -> BufferedImageCanvas(width, height) }
        }

    /**
     * Try to create a platform appropriate [QRCodeCanvas] implementation.
     *
     * Classes can register themselves but adding their info to the [AVAILABLE_IMPLEMENTATIONS] map.
     *
     * @param size The size in pixels of the square to be created (for example, if size = 50 then a 50x50 canvas will be created)
     *
     * @throws UnsupportedOperationException No implementation could be found for this platform!
     * @see AVAILABLE_IMPLEMENTATIONS
     */
    fun newCanvas(size: Int): QRCodeCanvas<*> =
        newCanvas(size, size)

    /**
     * Try to create a platform appropriate [QRCodeCanvas] implementation.
     *
     * Classes can register themselves but adding their info to the [AVAILABLE_IMPLEMENTATIONS] map.
     *
     * @param width The width in pixels of the canvas
     * @param height The height in pixels of the canvas
     *
     * @throws UnsupportedOperationException No implementation could be found for this platform!
     * @see AVAILABLE_IMPLEMENTATIONS
     */
    fun newCanvas(width: Int, height: Int): QRCodeCanvas<*> =
        if (AVAILABLE_IMPLEMENTATIONS.isNotEmpty()) {
            try {
                AVAILABLE_IMPLEMENTATIONS.firstNotNullOf {
                    if (detectClass(it.key)) {
                        it.value
                    } else {
                        null
                    }
                }.apply(width, height)
            } catch (e: NoSuchElementException) {
                throw UnsupportedOperationException(error("No available image classes were found!"))
            }
        } else {
            throw UnsupportedOperationException(error("No available image classes were found!"))
        }

    private fun detectClass(className: String, classLoader: ClassLoader = getSystemClassLoader()): Boolean =
        try {
            Class.forName(className, false, classLoader)
            true
        } catch (t: ClassNotFoundException) {
            false
        }
}
