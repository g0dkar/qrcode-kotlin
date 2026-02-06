package qrcode.internals

import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.types.shouldNotBeSameInstanceAs
import qrcode.assertDoesNotThrow
import kotlin.test.Test

class PolynomialTest {
    @Test
    fun `GIVEN creating a simple Polynomial WHEN Polynomial is instantiated THEN expected values are present`() {
        // GIVEN
        val testInput = intArrayOf(1, 2, 3)
        val expected = listOf(1, 2, 3)

        // WHEN
        val result = assertDoesNotThrow { Polynomial(testInput) }

        // THEN
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN creating a simple Polynomial starting with 0 WHEN Polynomial is instantiated THEN 0 is not present`() {
        // GIVEN
        val testInput = intArrayOf(0, 1, 2)
        val expected = listOf(1, 2)

        // WHEN
        val result = assertDoesNotThrow { Polynomial(testInput) }

        // THEN
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN 0s Polynomial WHEN Polynomial is instantiated THEN 0s are not removed`() {
        // GIVEN
        val testInput = intArrayOf(0, 0, 0)
        val expected = listOf(0, 0, 0)

        // WHEN
        val result = assertDoesNotThrow { Polynomial(testInput) }

        // THEN
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN 1-shifted Polynomial WHEN Polynomial is instantiated THEN shift is added`() {
        // GIVEN
        val testInput = intArrayOf(1, 2, 3)
        val testShift = 1
        val expected = listOf(1, 2, 3, 0)

        // WHEN
        val result = assertDoesNotThrow { Polynomial(testInput, testShift) }

        // THEN
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN 3-shifted Polynomial WHEN Polynomial is instantiated THEN shift is added`() {
        // GIVEN
        val testInput = intArrayOf(1, 2, 3)
        val testShift = 3
        val expected = listOf(1, 2, 3, 0, 0, 0)

        // WHEN
        val result = assertDoesNotThrow { Polynomial(testInput, testShift) }

        // THEN
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN 1-shifted Polynomial starting with 0 WHEN Polynomial is instantiated THEN 0 is skipped and shift is added`() {
        // GIVEN
        val testInput = intArrayOf(0, 1, 2)
        val testShift = 1
        val expected = listOf(1, 2, 0)

        // WHEN
        val result = assertDoesNotThrow { Polynomial(testInput, testShift) }

        // THEN
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN 5-shifted Polynomial starting with 0 WHEN Polynomial is instantiated THEN 0 is skipped and shift is added`() {
        // GIVEN
        val testInput = intArrayOf(0, 1, 2)
        val testShift = 5
        val expected = listOf(1, 2, 0, 0, 0, 0, 0)

        // WHEN
        val result = assertDoesNotThrow { Polynomial(testInput, testShift) }

        // THEN
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN 2-shifted Polynomial starting with multiple 0s WHEN Polynomial is instantiated THEN 0s are skipped and shift is added`() {
        // GIVEN
        val testInput = intArrayOf(0, 0, 1)
        val testShift = 2
        val expected = listOf(1, 0, 0)

        // WHEN
        val result = assertDoesNotThrow { Polynomial(testInput, testShift) }

        // THEN
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN two different Polynomials WHEN mod operation THEN resulting Polynomial must have values transformed`() {
        // GIVEN
        val testInput1 = inputArray(0, 43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136)
        val testPolynomial1 = Polynomial(testInput1)

        val testInput2 = intArrayOf(32, 65, 205, 69, 41, 220, 46, 128, 236)
        val testPolynomial2 = Polynomial(testInput2, testInput1.size - 1)

        val expected = listOf(42, 159, 74, 221, 244, 169, 239, 150, 138, 70, 237, 85, 224, 96, 74, 219, 61)

        // WHEN
        val result = assertDoesNotThrow { testPolynomial2.mod(testPolynomial1) }

        // THEN
        result shouldNotBeSameInstanceAs testPolynomial2
        result shouldNotBeSameInstanceAs testPolynomial1
        result.toList() shouldContainExactly expected
    }

    @Test
    fun `GIVEN two different Polynomials WHEN multiply operation THEN resulting Polynomial must have values transformed`() {
        // GIVEN
        val expected = listOf(1, 127, 122, 154, 164, 11, 68, 117)

        // WHEN
        var result = Polynomial(intArrayOf(1))

        for (i in 0..6) {
            result = result.multiply(Polynomial(intArrayOf(1, QRMath.gexp(i))))
        }

        // THEN
        result.toList() shouldContainExactly expected
    }

    private fun Polynomial.toList(): List<Int> = this.data.toList()

    private fun inputArray(vararg values: Int): IntArray =
        IntArray(values.size) { QRMath.gexp(values[it]) }
}
