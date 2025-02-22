package io.github.g0dkar.qrcode

import android.os.Bundle
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import java.time.Instant
import java.time.OffsetDateTime
import java.time.ZoneOffset

class QRCodeDetailActivity : AppCompatActivity() {
    companion object {
        const val QRCODE_DATA = "qrCodeData"
        const val QRCODE_STYLE = "qrCodeStyle"
        const val QRCODE_TIMESTAMP = "qrCodeTimestamp"
    }

    private lateinit var qrCodeDetailText: TextView
    private lateinit var qrCodeDetailImage: ImageView
    private lateinit var qrCodeDetailFab: View

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_qrcode_detail)

        qrCodeDetailText = findViewById(R.id.qrCodeDetailText)
        qrCodeDetailImage = findViewById(R.id.qrCodeDetailImage)
        qrCodeDetailFab = findViewById(R.id.qrCodeDetailFab)

        setBrightness() // Needed for readability if using this app on an actual phone

        val qrCodeData = intent.getStringExtra(QRCODE_DATA) ?: "ERROR"
        val qrCodeStyle = intent.getIntExtra(QRCODE_STYLE, 0)
        val qrCodeTimestamp = intent.getLongExtra(QRCODE_TIMESTAMP, Instant.now().epochSecond)
        val qrCode = QRCodeData(qrCodeData, qrCodeStyle, OffsetDateTime.ofInstant(Instant.ofEpochSecond(qrCodeTimestamp), ZoneOffset.UTC))

        qrCodeDetailText.text = qrCode.data
        qrCodeDetailImage.setImageBitmap(qrCode.bitmap)
    }

    private fun setBrightness() {
        try {
            val layout = window.attributes
            layout.screenBrightness = 1.0f
            window.attributes = layout
        } catch (_: Exception) {
            // NOOP
        }
    }
}
