package qrcode.internals

/**
 * Rewritten in Kotlin from the [original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRMath.java)
 *
 * @author Rafael Lins - g0dkar
 * @author Kazuhiko Arase - kazuhikoarase
 */
internal object QRMath {
    private val EXP_TABLE = IntArray(256)
    private val LOG_TABLE = IntArray(256)

    fun glog(n: Int): Int = LOG_TABLE[n]

    fun gexp(n: Int): Int {
        var i = n
        while (i < 0) {
            i += 255
        }
        while (i >= 256) {
            i -= 255
        }
        return EXP_TABLE[i]
    }

    /**
     * From https://math.stackexchange.com/a/3086626/874981
     */
    fun rectsIntersect(x1: Int, y1: Int, w1: Int, h1: Int, x2: Int, y2: Int, w2: Int, h2: Int): Boolean {
        val x1End = x1 + w1
        val y1End = y1 + h1
        val x2End = x2 + w2
        val y2End = y2 + h2

        return x1End < x2 || x1 > x2End || y1End < y2 || y1 > y2End
    }

    init {
        for (i in 0..7) {
            EXP_TABLE[i] = 1 shl i
        }

        for (i in 8..255) {
            EXP_TABLE[i] = (
                EXP_TABLE[i - 4]
                    xor EXP_TABLE[i - 5]
                    xor EXP_TABLE[i - 6]
                    xor EXP_TABLE[i - 8]
                )
        }

        for (i in 0..254) {
            LOG_TABLE[EXP_TABLE[i]] = i
        }
    }
}
