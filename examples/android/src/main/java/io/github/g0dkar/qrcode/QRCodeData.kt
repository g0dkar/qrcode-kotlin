package io.github.g0dkar.qrcode

import android.content.SharedPreferences
import android.graphics.Bitmap
import qrcode.QRCode
import java.time.OffsetDateTime
import java.time.ZoneOffset

data class QRCodeData(
    val data: String,
    val style: Int = STYLE_DEFAULT,
    val timestamp: OffsetDateTime = OffsetDateTime.now(ZoneOffset.UTC),
    val bitmap: Bitmap = qrCodeForStyle(style).build(data).render().nativeImage() as Bitmap,
) : Comparable<QRCodeData> {
    companion object {
        const val STYLE_DEFAULT = 0
        const val STYLE_SQUARE = 1
        const val STYLE_CIRCLE = 2
        const val STYLE_ROUNDED_SQUARE = 3
        const val SEPARATOR = "___STYLE___"

        fun qrCodeForStyle(style: Int = STYLE_DEFAULT) =
            when (style) {
                STYLE_SQUARE -> QRCode.ofSquares().withInnerSpacing(0)
                STYLE_CIRCLE -> QRCode.ofCircles()
                STYLE_ROUNDED_SQUARE -> QRCode.ofRoundedSquares()
                else -> QRCode.ofSquares()
            }
    }

    fun persist(sharedPreferencesEditor: SharedPreferences.Editor) {
        val key = timestamp.toEpochSecond().toString()
        sharedPreferencesEditor.putString(key, "$data$SEPARATOR$style")
    }

    override fun compareTo(other: QRCodeData): Int = timestamp.compareTo(other.timestamp)
}
