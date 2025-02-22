//[qrcode-kotlin](../../../index.md)/[qrcode.raw](../index.md)/[QRCodeProcessor](index.md)/[encode](encode.md)

# encode

[common]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin.jvm/-jvm-overloads/index.html)

fun [encode](encode.md)(type: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html) = typeForDataAndECL(data, errorCorrectionLevel), maskPattern: [MaskPattern](../-mask-pattern/index.md) = MaskPattern.PATTERN000): [QRCodeRawData](../-q-r-code-raw-data/index.md)

Computes and encodes the data of this object into a QR Code. This method returns the raw data of the QR Code.

If you just want to render (create) a QR Code image, you are probably looking for the [renderShaded](render-shaded.md) method.

#### Return

The byte matrix of the encoded QRCode.

#### Parameters

common

| | |
|---|---|
| type | `type` value for the QRCode computation. Between 0 and 40. Read more about it [here](../-error-correction-level/index.md). Defaults to an [automatically calculated value](-companion/type-for-data-and-e-c-l.md) based on data and the errorCorrectionLevel. |
| maskPattern | Mask Pattern to apply to the final QR Code. Basically changes how the QR Code looks at the end. Read more about it [here](../-mask-pattern/index.md). Defaults to [MaskPattern.PATTERN000](../-mask-pattern/-p-a-t-t-e-r-n000/index.md). |

#### See also

| |
|---|
| [QRCodeProcessor.Companion.typeForDataAndECL](-companion/type-for-data-and-e-c-l.md) |
| [ErrorCorrectionLevel](../-error-correction-level/index.md) |
| [MaskPattern](../-mask-pattern/index.md) |
| [QRCodeProcessor.renderShaded](render-shaded.md) |
