//[qrcode-kotlin](../../../index.md)/[qrcode.raw](../index.md)/[QRCodeProcessor](index.md)/[computeImageSize](compute-image-size.md)

# computeImageSize

[common]\
fun [computeImageSize](compute-image-size.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = 0, rawData: [QRCodeRawData](../-q-r-code-raw-data/index.md) = encode()): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

fun [computeImageSize](compute-image-size.md)(cellSize: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_CELL_SIZE, margin: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) = DEFAULT_MARGIN, size: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

Compute the final size of the image of this QRCode based on the given `cellSize` and `margin`.

This means this QRCode will be `<size> x <size>` pixels. For example, if this method returns 100, the resulting image will be 100x100 pixels.
