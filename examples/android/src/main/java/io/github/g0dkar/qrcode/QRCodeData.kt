package io.github.g0dkar.qrcode

import android.content.SharedPreferences
import android.graphics.Bitmap
import qrcode.QRCode
import java.time.OffsetDateTime
import java.time.ZoneOffset

data class QRCodeData(
    val data: String,
    val timestamp: OffsetDateTime = OffsetDateTime.now(ZoneOffset.UTC),
    val bitmap: Bitmap = QRCode(data).render().nativeImage() as Bitmap,
) : Comparable<QRCodeData> {
    fun persist(sharedPreferencesEditor: SharedPreferences.Editor) {
        val key = timestamp.toEpochSecond().toString()
        sharedPreferencesEditor.putString(key, data)
    }

    override fun compareTo(other: QRCodeData): Int = timestamp.compareTo(other.timestamp)
}
