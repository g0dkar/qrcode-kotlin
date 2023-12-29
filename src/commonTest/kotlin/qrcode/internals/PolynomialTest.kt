package qrcode.internals

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.collections.shouldContainExactly
import io.kotest.matchers.types.shouldNotBeSameInstanceAs

class PolynomialTest : FunSpec(
    {
        context("Creation") {
            test("Simple") {
                val input = intArrayOf(1, 2, 3)
                val expected = listOf(1, 2, 3)

                val result = Polynomial(input)

                result.toList() shouldContainExactly expected
            }

            test("Simple with 0") {
                val input = intArrayOf(0, 1, 2)
                val expected = listOf(1, 2)

                val result = Polynomial(input)

                result.toList() shouldContainExactly expected
            }

            test("Only 0s") {
                val input = intArrayOf(0, 0, 0)
                val expected = listOf(0, 0, 0)

                val result = Polynomial(input)

                result.toList() shouldContainExactly expected
            }

            test("Shifted 1") {
                val input = intArrayOf(1, 2, 3)
                val shift = 1
                val expected = listOf(1, 2, 3, 0)

                val result = Polynomial(input, shift)

                result.toList() shouldContainExactly expected
            }

            test("Shifted 3") {
                val input = intArrayOf(1, 2, 3)
                val shift = 3
                val expected = listOf(1, 2, 3, 0, 0, 0)

                val result = Polynomial(input, shift)

                result.toList() shouldContainExactly expected
            }

            test("Shifted 1, With 0") {
                val input = intArrayOf(0, 1, 2)
                val shift = 1
                val expected = listOf(1, 2, 0)

                val result = Polynomial(input, shift)

                result.toList() shouldContainExactly expected
            }

            test("Shifted 5, With 0") {
                val input = intArrayOf(0, 1, 2)
                val shift = 5
                val expected = listOf(1, 2, 0, 0, 0, 0, 0)

                val result = Polynomial(input, shift)

                result.toList() shouldContainExactly expected
            }

            test("Shifted 2, With 2 zeroes") {
                val input = intArrayOf(0, 0, 1)
                val shift = 2
                val expected = listOf(1, 0, 0)

                val result = Polynomial(input, shift)

                result.toList() shouldContainExactly expected
            }
        }

        context("Operations") {
            test("mod") {
                val input = inputArray(0, 43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136)
                val inputPolynomial = Polynomial(input)

                val data = intArrayOf(32, 65, 205, 69, 41, 220, 46, 128, 236)
                val dataPolynomial = Polynomial(data, input.size - 1)
                val expected = listOf(42, 159, 74, 221, 244, 169, 239, 150, 138, 70, 237, 85, 224, 96, 74, 219, 61)

                val result = dataPolynomial.mod(inputPolynomial)

                result shouldNotBeSameInstanceAs dataPolynomial
                result shouldNotBeSameInstanceAs inputPolynomial
                result.toList() shouldContainExactly expected
            }

            test("multiply") {
                val expected = listOf(1, 127, 122, 154, 164, 11, 68, 117)
                var result = Polynomial(intArrayOf(1))

                for (i in 0..6) {
                    result = result.multiply(Polynomial(intArrayOf(1, QRMath.gexp(i))))
                }

                result.toList() shouldContainExactly expected
            }
        }
    },
)

private fun Polynomial.toList(): List<Int> = this.data.toList()

private fun inputArray(vararg values: Int): IntArray =
    IntArray(values.size) { QRMath.gexp(values[it]) }
