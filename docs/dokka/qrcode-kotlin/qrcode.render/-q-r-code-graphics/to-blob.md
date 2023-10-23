//[qrcode-kotlin](../../../index.md)/[qrcode.render](../index.md)/[QRCodeGraphics](index.md)/[toBlob](to-blob.md)

# toBlob

[js]\
open fun [toBlob](to-blob.md)(callback: ([Blob](https://kotlinlang.org/api/latest/jvm/stdlib/org.w3c.files/-blob/index.html)?) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html))

Direct access to the `.toBlob()` function of the underlying canvas.

Syntactic sugar for `nativeImage().toBlob(callback)`.
