package qrcode.internals

private fun Polynomial.toList(): List<Int> = this.data.toList()

private fun inputArray(vararg values: Int): IntArray =
    IntArray(values.size) { QRMath.gexp(values[it]) }
