package io.github.g0dkar.qrcode.internals

import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.types.shouldNotBeSameInstanceAs
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertDoesNotThrow

internal class PolynomialTest {
    @Test
    fun polynomial_creation_simple() {
        val input = intArrayOf(1, 2, 3)
        val expected = listOf(1, 2, 3)

        val result = assertDoesNotThrow { Polynomial(input) }

        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_creation_simpleWithZero() {
        val input = intArrayOf(0, 1, 2)
        val expected = listOf(1, 2)

        val result = assertDoesNotThrow { Polynomial(input) }

        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_creation_onlyZeroes() {
        val input = intArrayOf(0, 0, 0)
        val expected = listOf(0, 0, 0)

        val result = assertDoesNotThrow { Polynomial(input) }

        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_creation_shifted1() {
        val input = intArrayOf(1, 2, 3)
        val shift = 1
        val expected = listOf(1, 2, 3, 0)

        val result = assertDoesNotThrow { Polynomial(input, shift) }

        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_creation_shifted3() {
        val input = intArrayOf(1, 2, 3)
        val shift = 3
        val expected = listOf(1, 2, 3, 0, 0, 0)

        val result = assertDoesNotThrow { Polynomial(input, shift) }

        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_creation_shifted1_withZero() {
        val input = intArrayOf(0, 1, 2)
        val shift = 1
        val expected = listOf(1, 2, 0)

        val result = assertDoesNotThrow { Polynomial(input, shift) }

        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_creation_shifted5_withZero() {
        val input = intArrayOf(0, 1, 2)
        val shift = 5
        val expected = listOf(1, 2, 0, 0, 0, 0, 0)

        val result = assertDoesNotThrow { Polynomial(input, shift) }

        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_creation_shifted2_inputWithManyZeroes() {
        val input = intArrayOf(0, 0, 1)
        val shift = 2
        val expected = listOf(1, 0, 0)

        val result = assertDoesNotThrow { Polynomial(input, shift) }

        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_operations_mod() {
        val input = inputArray(0, 43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136)
        val inputPolynomial = Polynomial(input)

        val data = intArrayOf(32, 65, 205, 69, 41, 220, 46, 128, 236)
        val dataPolynomial = Polynomial(data, input.size - 1)
        val expected = listOf(42, 159, 74, 221, 244, 169, 239, 150, 138, 70, 237, 85, 224, 96, 74, 219, 61)

        val result = assertDoesNotThrow { dataPolynomial.mod(inputPolynomial) }

        result shouldNotBeSameInstanceAs dataPolynomial
        result shouldNotBeSameInstanceAs inputPolynomial
        result.toList() shouldContainExactly expected
    }

    @Test
    fun polynomial_operations_multiply() {
        val expected = listOf(1, 127, 122, 154, 164, 11, 68, 117)
        var result = assertDoesNotThrow { Polynomial(intArrayOf(1)) }

        for (i in 0..6) {
            result = assertDoesNotThrow { result.multiply(Polynomial(intArrayOf(1, QRMath.gexp(i)))) }
        }

        result.toList() shouldContainExactly expected
    }

    private fun inputArray(vararg values: Int): IntArray =
        IntArray(values.size) { QRMath.gexp(values[it]) }
}
