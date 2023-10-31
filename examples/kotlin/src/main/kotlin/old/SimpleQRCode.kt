package old

import qrcode.raw.QRCodeProcessor
import java.io.FileOutputStream

class SimpleQRCode {
    fun createQRCode(content: String) {
        FileOutputStream("kotlin-simple.png").use {
            QRCodeProcessor(content).render().writeImage(it)
        }
    }
}

fun main() {
    SimpleQRCode()
        .createQRCode("Hello, world!")
}
