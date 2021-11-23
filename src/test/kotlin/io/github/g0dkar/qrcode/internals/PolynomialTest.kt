package io.github.g0dkar.qrcode.internals

import io.kotest.matchers.collections.shouldContainExactly
import org.junit.jupiter.api.Test

internal class PolynomialTest {
    @Test
    fun `write - negative numbers - multiple digits 2`() {
    }

    @Test
    fun `polynomial - creation - simple`() {
        val input = inputArray(0, 43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136)
        val expected = listOf(1, 119, 66, 83, 120, 119, 22, 197, 83, 249, 41, 143, 134, 85, 53, 125, 99, 79)

        val result = Polynomial(input)

        result.toList() shouldContainExactly expected
    }

    @Test
    fun `polynomial - creation - shifted 1`() {
        val input = inputArray(0, 43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136)
        val expected = MutableList(25) { 0 }
        val data = intArrayOf(32, 65, 205, 69, 41, 220, 46, 128, 236)
            .also { it.forEachIndexed { i, value -> expected[i] = value } }
        val polynomial = Polynomial(input)

        val result = Polynomial(data, polynomial.len() - 1)
        val wtf = com.d_project.qrcode.Polynomial(data, polynomial.len() - 1)

        wtf.num.toList() shouldContainExactly expected
        result.toList() shouldContainExactly expected

        // val rs = intArrayOf(0, 43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136)
        // for (i in rs.indices) {
        //     rs[i] = QRMath.gexp(rs[i])
        // }
        //
        // val data = intArrayOf(32, 65, 205, 69, 41, 220, 46, 128, 236)
        // val e = Polynomial(rs)
        // val e2 = Polynomial(data, e.getLength() - 1)
        // assertEquals(
        //     intArrayOf(
        //         32,
        //         65,
        //         205,
        //         69,
        //         41,
        //         220,
        //         46,
        //         128,
        //         236,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0,
        //         0
        //     ), e2
        // )
        // assertEquals(intArrayOf(1, 119, 66, 83, 120, 119, 22, 197, 83, 249, 41, 143, 134, 85, 53, 125, 99, 79), e)
        // assertEquals(
        //     intArrayOf(42, 159, 74, 221, 244, 169, 239, 150, 138, 70, 237, 85, 224, 96, 74, 219, 61),
        //     e2.mod(e)
        // )
    }

    @Test
    fun test2() {
        // var a = com.d_project.qrcode.Polynomial(intArrayOf(1), 0)
        // for (i in 0..6) {
        //     a = a.multiply(com.d_project.qrcode.Polynomial(intArrayOf(1, QRMath.gexp(i)), 0))
        // }
        // val log = intArrayOf(0, 87, 229, 146, 149, 238, 102, 21)
        // Assert.assertEquals(log.size, a.getLength())
        // for (i in 0 until a.getLength()) {
        //     Assert.assertEquals(log[i], QRMath.glog(a.get(i)))
        // }
    }

    private fun inputArray(vararg values: Int): IntArray =
        intArrayOf(*values).also {
            for (i in it.indices) {
                it[i] = QRMath.gexp(it[i])
            }
        }
}
