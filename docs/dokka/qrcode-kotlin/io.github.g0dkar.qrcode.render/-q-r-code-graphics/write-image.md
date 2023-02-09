//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode.render](../index.md)/[QRCodeGraphics](index.md)/[writeImage](write-image.md)

# writeImage

[android]\
open fun [writeImage](write-image.md)(destination: [OutputStream](https://developer.android.com/reference/kotlin/java/io/OutputStream.html), format: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) = &quot;PNG&quot;, quality: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 100)

Writes the QRCode image in the specified [format](write-image.md) and [quality](write-image.md) into the destination [OutputStream](https://developer.android.com/reference/kotlin/java/io/OutputStream.html).

For app stability reasons if the specified [format](write-image.md) doesn't exist it'll be defaulted to [PNG](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.CompressFormat.html#PNG).

**Note:** Please note that `JPG` is supported via the [JPEG](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.CompressFormat.html#JPEG) value, with an `E`.

#### See also

android

| |
|---|
| [Bitmap.compress](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.html#compress) |
| [QRCodeGraphics.availableFormats](available-formats.md) |

[jvm]\

@[JvmOverloads](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.jvm/-jvm-overloads/index.html)

open fun [writeImage](write-image.md)(destination: [OutputStream](https://developer.android.com/reference/kotlin/java/io/OutputStream.html), format: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) = &quot;PNG&quot;)

Writes the QRCode image in the specified [format](write-image.md) into the destination [OutputStream](https://developer.android.com/reference/kotlin/java/io/OutputStream.html).

#### See also

jvm

| |
|---|
| [ImageIO.write](https://docs.oracle.com/javase/8/docs/api/javax/imageio/ImageIO.html#write-java.awt.image.RenderedImage-kotlin.String-javax.imageio.stream.ImageOutputStream-) |

#### Throws

| | |
|---|---|
| [UnsupportedOperationException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unsupported-operation-exception/index.html) | No suitable Image Writer was found for the specified format. |
