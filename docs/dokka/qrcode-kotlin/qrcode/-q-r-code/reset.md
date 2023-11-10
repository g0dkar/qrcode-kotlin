//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCode](index.md)/[reset](reset.md)

# reset

[common]\
fun [reset](reset.md)()

Completely resets the QRCode drawing. After this, you can call [renderToBytes](render-to-bytes.md) or [render](render.md) to redraw the whole QRCode. Useful when you want, for example, a transparent background QRCode to add to a larger image and then the same QRCode drawn on top of a custom background.
