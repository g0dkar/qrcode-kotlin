//[qrcode-kotlin](../../../index.md)/[io.github.g0dkar.qrcode.render](../index.md)/[QRCodeGraphics](index.md)/[availableFormats](available-formats.md)

# availableFormats

[common, native]\
[common]\
expect open fun [availableFormats](available-formats.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;

[native]\
actual open fun [availableFormats](available-formats.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;

Returns the available formats to be passed as parameters to [getBytes](get-bytes.md).

[android, jvm]\
[android, jvm]\
actual open fun [availableFormats](available-formats.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;

Returns the available formats to be passed as parameters to [getBytes](get-bytes.md).

#### See also

| |
|---|
| [Bitmap.CompressFormat](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.CompressFormat.html) |
| [Bitmap.CompressFormat.PNG](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.CompressFormat.html#PNG) |
| [Bitmap.CompressFormat.JPEG](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.CompressFormat.html#JPEG) |
| [Bitmap.CompressFormat.WEBP](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.CompressFormat.html#WEBP) |
| [ImageIO.getWriterFileSuffixes](https://docs.oracle.com/javase/8/docs/api/javax/imageio/ImageIO.html#getWriterFileSuffixes--) |

[js]\
actual open fun [availableFormats](available-formats.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;

Returns the available formats to be passed as parameters to [getBytes](get-bytes.md).

**Note:** The actual list of supported formats depends on the browser, so this won't be checked. PNG is always supported.