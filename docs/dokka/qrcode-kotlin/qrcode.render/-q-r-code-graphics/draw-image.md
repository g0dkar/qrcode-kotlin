//[qrcode-kotlin](../../../index.md)/[qrcode.render](../index.md)/[QRCodeGraphics](index.md)/[drawImage](draw-image.md)

# drawImage

[android, jvm]\
[android]\
open fun [drawImage](draw-image.md)(img: [Bitmap](https://developer.android.com/reference/kotlin/android/graphics/Bitmap.html), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

[jvm]\
open fun [drawImage](draw-image.md)(image: [BufferedImage](https://docs.oracle.com/javase/8/docs/api/java/awt/image/BufferedImage.html), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

[common, android, js, jvm]\
[common]\
expect fun [drawImage](draw-image.md)(img: [QRCodeGraphics](index.md), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

[android, js, jvm]\
actual open fun [drawImage](draw-image.md)(img: [QRCodeGraphics](index.md), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Draw an image inside another. Mostly used to merge squares into the main QRCode.

[common, android, jvm]\
[common]\
expect fun [drawImage](draw-image.md)(rawData: [ByteArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

[android]\
actual fun [drawImage](draw-image.md)(rawData: [ByteArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

[jvm]\
actual open fun [drawImage](draw-image.md)(rawData: [ByteArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Reads the specified image from [rawData](draw-image.md) and draws it at `(x,y)`

[js]\
actual fun [drawImage](draw-image.md)(rawData: [ByteArray](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html), x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Reads the specified image from [rawData](draw-image.md) and draws it at `(x,y)`.

On JS this has a limitation that the [rawData](draw-image.md) image will be loaded considering it has the same [width]([js]width.md) as this object.
