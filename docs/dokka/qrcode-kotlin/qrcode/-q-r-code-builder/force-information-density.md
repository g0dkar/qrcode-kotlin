//[qrcode-kotlin](../../../index.md)/[qrcode](../index.md)/[QRCodeBuilder](index.md)/[forceInformationDensity](force-information-density.md)

# forceInformationDensity

[common]\
fun [forceInformationDensity](force-information-density.md)(forceInformationDensity: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin-stdlib/kotlin/-boolean/index.html)): [QRCodeBuilder](index.md)

Force the QRCode to use the value of Information Density specified. **Defaults to false.**

**IMPORTANT:** Calling [withInformationDensity](with-information-density.md) will also set this to `true`!

If this parameter is `false`, the `informationDensity` will be computed automatically given the data being encoded and the Error Correction Level.
