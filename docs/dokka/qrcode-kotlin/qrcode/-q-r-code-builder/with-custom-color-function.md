//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)/[withCustomColorFunction](with-custom-color-function.md)

# withCustomColorFunction

[common]\
fun [withCustomColorFunction](with-custom-color-function.md)(colorFn: [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md)?): [QRCodeBuilder](index.md)

Sets the [QRCode.colorFn](../-q-r-code/color-fn.md) value to a custom one. If set, the builder will ignore color and background.

Default is `null`, meaning a [DefaultColorFunction](../../qrcode.color/-default-color-function/index.md) will be created from the color and background values.

#### See also

| |
|---|
| [QRCodeColorFunction](../../qrcode.color/-q-r-code-color-function/index.md) |
| [DefaultColorFunction](../../qrcode.color/-default-color-function/index.md) |
