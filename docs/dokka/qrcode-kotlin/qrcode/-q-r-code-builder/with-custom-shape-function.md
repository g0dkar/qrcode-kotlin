//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)/[withCustomShapeFunction](with-custom-shape-function.md)

# withCustomShapeFunction

[common]\
fun [withCustomShapeFunction](with-custom-shape-function.md)(shapeFn: [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md)?): [QRCodeBuilder](index.md)

Sets the [QRCode.shapeFn](../-q-r-code/shape-fn.md) value to a custom one. If set, the builder will ignore the shape parameter.

Default is `null`, meaning a [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md) will be created for the selected shape.

If shape is [CUSTOM](../-q-r-code-shapes-enum/-c-u-s-t-o-m/index.md) but customShapeFunction is not set, a [DefaultShapeFunction](../../qrcode.shape/-default-shape-function/index.md) will be used.

#### See also

| |
|---|
| [QRCodeShapeFunction](../../qrcode.shape/-q-r-code-shape-function/index.md) |
| [DefaultShapeFunction](../../qrcode.shape/-default-shape-function/index.md) |
| [RoundSquaresShapeFunction](../../qrcode.shape/-round-squares-shape-function/index.md) |
| [CircleShapeFunction](../../qrcode.shape/-circle-shape-function/index.md) |
