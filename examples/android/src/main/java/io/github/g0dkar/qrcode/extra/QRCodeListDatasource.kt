package io.github.g0dkar.qrcode.extra

import android.content.Context
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity.MODE_PRIVATE
import androidx.lifecycle.MutableLiveData
import io.github.g0dkar.qrcode.QRCodeData
import io.github.g0dkar.qrcode.QRCodeData.Companion.SEPARATOR
import io.github.g0dkar.qrcode.QRCodeData.Companion.STYLE_DEFAULT
import java.time.Instant
import java.time.ZoneOffset

object QRCodeListDatasource {
    private const val ERROR = "ERROR"
    private const val PREFERENCE_FILE = "qrCodeKotlinAndroidExample"

    private lateinit var sharedPreferences: SharedPreferences

    val liveData: MutableLiveData<List<QRCodeData>> = MutableLiveData(mutableListOf())

    fun fromContext(context: Context) {
        val currentList = liveData.value ?: listOf()
        sharedPreferences = context.getSharedPreferences(PREFERENCE_FILE, MODE_PRIVATE)

        val newList = currentList.toMutableList().apply {
            sharedPreferences.all
                .filterValues { it != null && it.toString().isNotBlank() }
                .mapTo(this) { (key, value) ->
                    val dataParts = value?.toString()?.split(SEPARATOR)

                    QRCodeData(
                        dataParts?.getOrNull(0)?.toString() ?: ERROR,
                        dataParts?.getOrNull(1)?.toIntOrNull() ?: 0,
                        Instant.ofEpochSecond(key.toLong()).atOffset(ZoneOffset.UTC),
                    )
                }

            if (isEmpty()) {
                add(QRCodeData("QRCode Kotlin", STYLE_DEFAULT))
            }

            sortDescending()
        }

        liveData.postValue(newList)
    }

    fun add(data: String, style: Int) {
        val currentList = liveData.value ?: listOf()
        val qrCodeData = QRCodeData(data, style)

        val editor = sharedPreferences.edit()
        qrCodeData.persist(editor)
        editor.apply()

        val newList = currentList.toMutableList()
            .apply { add(0, qrCodeData) }
        liveData.postValue(newList)
    }

    fun remove(timestamp: Long) {
        val currentList = liveData.value ?: listOf()
        val newList = currentList.toMutableList()

        sharedPreferences.edit()
            .remove(timestamp.toString())
            .apply()

        liveData.postValue(newList)
    }
}
