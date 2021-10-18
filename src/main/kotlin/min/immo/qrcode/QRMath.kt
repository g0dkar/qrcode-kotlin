package min.immo.qrcode

/**
 * [Original (GitHub)](https://github.com/kazuhikoarase/qrcode-generator/blob/master/java/src/main/java/com/d_project/qrcode/QRMath.java)
 *
 * @author Kazuhiko Arase
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

    init {
        for (i in 0..7) {
            EXP_TABLE[i] = 1 shl i
        }

        for (i in 8..255) {
            EXP_TABLE[i] = (EXP_TABLE[i - 4]
                xor EXP_TABLE[i - 5]
                xor EXP_TABLE[i - 6]
                xor EXP_TABLE[i - 8])
        }

        for (i in 0..254) {
            LOG_TABLE[EXP_TABLE[i]] = i
        }
    }
}
