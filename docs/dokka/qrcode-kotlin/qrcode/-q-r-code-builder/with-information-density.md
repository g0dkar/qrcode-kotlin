//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)/[withInformationDensity](with-information-density.md)

# withInformationDensity

[common]\
fun [withInformationDensity](with-information-density.md)(minTypeNum: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-int/index.html)): [QRCodeBuilder](index.md)

The level of &quot;information density&quot; this QRCode will maintain. **Defaults to 6.**

This is complex to explain, but basically the lower this value the fewer squares the QR Code ***might*** have.

This is simply a way to make sure QR Codes for very few characters are readable :)

**IMPORTANT:** Setting this also sets `forceInformationDensity` to `true`! By default, the code will compute a value automatically given the data to be encoded and the Error Correction Level. We take that if you are setting this manually, you probably know what you're doing.

In short:

- 
   Lots of data: You can keep this as close to 1 as possible. Be aware that the QRCode might be a bit hard to     read if this is too low.
- 
   Smaller data: Try to keep this a big higher, just in case.

#### See also

| |
|---|
| [QRCodeBuilder.forceInformationDensity](force-information-density.md) |
