package io.github.g0dkar.qrcode.render

import org.khronos.webgl.Uint8Array
import org.w3c.dom.CanvasImageSource
import org.w3c.dom.CanvasRenderingContext2D

@JsModule("Canvas")
@JsNonModule
external class Canvas(width: Int, height: Int) : CanvasImageSource {
    fun getContext(contextId: String): CanvasRenderingContext2D
    fun toBuffer(mimeType: String): Uint8Array
}
