package io.github.g0dkar.qrcode.internals

import io.github.g0dkar.qrcode.internals.QRMath.gexp
import io.github.g0dkar.qrcode.internals.QRMath.glog

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/Polynomial.java)
 *
 * @author Rafael Lins
 * @author Kazuhiko Arase
 */
internal class Polynomial(num: IntArray, shift: Int = 0) {
    private val num: IntArray

    init {
        val offset = num.indexOfFirst { it == 0 } + 1
        this.num = IntArray(num.size - offset + shift)
        System.arraycopy(num, offset, this.num, 0, num.size - offset)
    }

    operator fun get(i: Int) = num[i]
    fun len(): Int = num.size

    fun multiply(other: Polynomial): Polynomial {
        val result = IntArray(len() + other.len() - 1) { 0 }

        for (i in num.indices) {
            for (j in other.num.indices) {
                result[i + j] = result[i + j] xor gexp(glog(num[i]) + glog(other.num[j]))
            }
        }

        return Polynomial(result)
    }

    fun mod(other: Polynomial): Polynomial =
        if (len() - other.len() < 0) {
            this
        } else {
            val ratio = glog(num[0]) - glog(other.num[0])
            val result = num.copyOf()

            other.num.forEachIndexed { i, it ->
                result[i] = result[i] xor gexp(glog(it) + ratio)
            }

            Polynomial(result).mod(other)
        }
}
