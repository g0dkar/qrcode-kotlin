//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)/[withMinimumInformationDensity](with-minimum-information-density.md)

# withMinimumInformationDensity

[common]\
fun [withMinimumInformationDensity](with-minimum-information-density.md)(minTypeNum: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)): [QRCodeBuilder](index.md)

The minimum level of &quot;information density&quot; this QRCode will maintain. Defaults to 6.

This is complex to explain, but basically the lower this value the fewer squares the QR Code ***might*** have.

This is simply a way to make sure QR Codes for very few characters are readable :)
