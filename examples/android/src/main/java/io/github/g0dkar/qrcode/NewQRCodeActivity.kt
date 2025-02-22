package io.github.g0dkar.qrcode

import android.content.Intent
import android.graphics.Bitmap
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.view.View
import android.widget.AdapterView
import android.widget.AdapterView.OnItemSelectedListener
import android.widget.Button
import android.widget.EditText
import android.widget.ImageView
import android.widget.Spinner
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.os.postDelayed
import androidx.core.widget.doOnTextChanged
import io.github.g0dkar.qrcode.QRCodeData.Companion.STYLE_DEFAULT
import io.github.g0dkar.qrcode.QRCodeData.Companion.qrCodeForStyle

class NewQRCodeActivity : AppCompatActivity() {
    private lateinit var qrCodeData: EditText
    private lateinit var qrCodeImageView: ImageView
    private lateinit var saveButton: Button
    private lateinit var styleSelect: Spinner
    private var qrCodeIsValid = false

    private val handler = Handler(Looper.getMainLooper())

    companion object {
        const val QRCODE_DATA = "qrCodeData"
        const val QRCODE_STYLE = "qrCodeStyle"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_new_qrcode)

        qrCodeData = findViewById(R.id.newQRCodeData)
        qrCodeImageView = findViewById(R.id.newQRCodePreviewImage)
        saveButton = findViewById(R.id.newQRCodeBtn)
        styleSelect = findViewById(R.id.newQRCodeStyle)

        qrCodeData.doOnTextChanged { text, _, _, _ ->
            val string = text?.toString()?.trim()
            val qrCodeStyle = styleSelect.selectedItemPosition
            updateAction(string, qrCodeStyle)
        }

        styleSelect.onItemSelectedListener = ItemSelectAction(this)

        saveButton.setOnClickListener {
            save()
        }
    }

    private fun updateAction(qrCodeData: String?, qrCodeStyle: Int) {
        qrCodeIsValid = if (qrCodeData.isNullOrBlank()) {
            qrCodeImageView.setImageBitmap(null)

            false
        } else {
            try {
                handler.removeCallbacksAndMessages(null)
                handler.postDelayed(250) {
                    val qrCodeBitmap = qrCodeForStyle(qrCodeStyle)
                        .build(qrCodeData)
                        .render()
                        .nativeImage() as Bitmap

                    qrCodeImageView.setImageBitmap(qrCodeBitmap)
                }

                true
            } catch (t: Throwable) {
                Toast.makeText(
                    this@NewQRCodeActivity,
                    R.string.new_qrcode_error_preview,
                    Toast.LENGTH_LONG,
                ).show()

                qrCodeImageView.setImageBitmap(null)

                false
            }
        }
    }

    private fun save() {
        val resultIntent = Intent()
        val qrCodeDataText = qrCodeData.text?.toString()?.trim()
        val qrCodeDataStyle = styleSelect.selectedItemPosition

        if (qrCodeDataText.isNullOrBlank() || !qrCodeIsValid) {
            setResult(RESULT_CANCELED, resultIntent)
        } else {
            resultIntent.putExtra(QRCODE_DATA, qrCodeDataText)
            resultIntent.putExtra(QRCODE_STYLE, qrCodeDataStyle)
            setResult(RESULT_OK, resultIntent)
        }

        finish()
    }

    class ItemSelectAction(val codeActivity: NewQRCodeActivity) : OnItemSelectedListener {
        override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
            val string = codeActivity.qrCodeData.text.toString().trim()
            codeActivity.updateAction(string, position)
        }

        override fun onNothingSelected(parent: AdapterView<*>?) {
            val string = codeActivity.qrCodeData.text.toString().trim()
            codeActivity.updateAction(string, STYLE_DEFAULT)
        }
    }
}
