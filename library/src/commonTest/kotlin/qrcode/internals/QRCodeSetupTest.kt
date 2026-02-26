package qrcode.internals

import io.github.oshai.kotlinlogging.KotlinLogging
import io.kotest.matchers.shouldNotBe
import qrcode.assertDoesNotThrow
import kotlin.test.Test

class QRCodeSetupTest {
    private val logger = KotlinLogging.logger {}

    @Test
    fun `GIVEN x WHEN y THEN z`() {
        // GIVEN
        val testArray = emptyQrCode()

        // WHEN
        val result = assertDoesNotThrow { QRCodeSetup.setupTopLeftPositionProbePattern(testArray) }

        logger.info { "Result:\n${toString(testArray)}" }

        // THEN
        result shouldNotBe null
    }

    private fun emptyQrCode(size: Int = 24): Array<Array<QRCodeSquare?>> {
        return List(size) { arrayOfNulls<QRCodeSquare?>(size) }.toTypedArray()
    }

    private fun toString(data: Array<Array<QRCodeSquare?>>): String =
        data.joinToString("\n") { line ->
            line.joinToString("") { cell ->
                when (cell) {
                    null -> "-"
                    else -> if (cell.dark) {
                        "■"
                    } else {
                        "□"
                    }
                }
            }
        }
}
