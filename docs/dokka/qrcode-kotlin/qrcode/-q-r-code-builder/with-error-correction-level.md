//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)/[withErrorCorrectionLevel](with-error-correction-level.md)

# withErrorCorrectionLevel

[common]\
fun [withErrorCorrectionLevel](with-error-correction-level.md)(ecl: [ErrorCorrectionLevel](../../qrcode.raw/-error-correction-level/index.md)): [QRCodeBuilder](index.md)

The level of error correction to apply to the QR Code. Defaults to [ErrorCorrectionLevel.VERY_HIGH](../../qrcode.raw/-error-correction-level/-v-e-r-y_-h-i-g-h/index.md).

In short, this configures how much data loss we can tolerate. Higher error correction = Readable QR Codes even with large parts hidden/crumpled/deformed.

#### See also

| |
|---|
| [ErrorCorrectionLevel](../../qrcode.raw/-error-correction-level/index.md) |
