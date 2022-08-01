package io.github.g0dkar.qrcode

import android.content.Intent
import android.graphics.Bitmap
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.os.postDelayed
import androidx.core.widget.doOnTextChanged

class NewQRCodeActivity : AppCompatActivity() {
    private lateinit var qrCodeData: EditText
    private lateinit var qrCodeImageView: ImageView
    private lateinit var saveButton: Button
    private var qrCodeIsValid = false

    private val handler = Handler(Looper.getMainLooper())

    companion object {
        const val QRCODE_DATA = "qrCodeData"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_new_qrcode)

        qrCodeData = findViewById(R.id.newQRCodeData)
        qrCodeImageView = findViewById(R.id.newQRCodePreviewImage)
        saveButton = findViewById(R.id.newQRCodeBtn)

        qrCodeData.doOnTextChanged { text, _, _, _ ->
            val string = text?.toString()?.trim()

            qrCodeIsValid = if (string.isNullOrBlank()) {
                qrCodeImageView.setImageBitmap(null)

                false
            } else {
                try {
                    handler.removeCallbacksAndMessages(null)
                    handler.postDelayed(250) {
                        val qrCodeBitmap = QRCode(string).render().nativeImage() as Bitmap
                        qrCodeImageView.setImageBitmap(qrCodeBitmap)
                    }

                    true
                } catch (t: Throwable) {
                    Toast.makeText(
                        this@NewQRCodeActivity,
                        R.string.new_qrcode_error_preview,
                        Toast.LENGTH_LONG
                    ).show()

                    qrCodeImageView.setImageBitmap(null)

                    false
                }
            }
        }

        saveButton.setOnClickListener {
            save()
        }
    }

    private fun save() {
        val resultIntent = Intent()
        val qrCodeDataText = qrCodeData.text.toString()

        if (qrCodeDataText.isBlank() || !qrCodeIsValid) {
            setResult(RESULT_CANCELED, resultIntent)
        } else {
            resultIntent.putExtra(QRCODE_DATA, qrCodeDataText)
            setResult(RESULT_OK, resultIntent)
        }

        finish()
    }
}
