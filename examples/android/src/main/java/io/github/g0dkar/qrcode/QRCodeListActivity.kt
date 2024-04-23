package io.github.g0dkar.qrcode

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts.StartActivityForResult
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import io.github.g0dkar.qrcode.NewQRCodeActivity.Companion.QRCODE_DATA
import io.github.g0dkar.qrcode.NewQRCodeActivity.Companion.QRCODE_STYLE
import io.github.g0dkar.qrcode.extra.QRCodeListAdapter
import io.github.g0dkar.qrcode.extra.QRCodeListDatasource

class QRCodeListActivity : AppCompatActivity() {
    private val listAdapter = QRCodeListAdapter {
        val intent = Intent(this@QRCodeListActivity, QRCodeDetailActivity::class.java)
        intent.putExtra(QRCodeDetailActivity.QRCODE_DATA, it.data)
        intent.putExtra(QRCodeDetailActivity.QRCODE_STYLE, it.style)
        intent.putExtra(QRCodeDetailActivity.QRCODE_TIMESTAMP, it.timestamp.toEpochSecond())
        startActivity(intent)
    }

    private lateinit var recyclerView: RecyclerView
    private lateinit var fab: View
    private lateinit var newQRCodeActivity: ActivityResultLauncher<Intent>

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        fab = findViewById(R.id.fab)
        recyclerView = findViewById(R.id.recycler_view)

        QRCodeListDatasource.fromContext(this)

        recyclerView.adapter = listAdapter

        fab.setOnClickListener {
            startNewQRCodeActivity()
        }

        newQRCodeActivity = registerForActivityResult(StartActivityForResult()) {
            if (it.data != null) {
                val result = it.resultCode

                if (result == RESULT_OK) {
                    val qrCodeData = it.data?.getStringExtra(QRCODE_DATA)
                    val qrCodeStyle = it.data?.getIntExtra(QRCODE_STYLE, 0)

                    if (qrCodeData != null && qrCodeStyle != null) {
                        QRCodeListDatasource.add(qrCodeData, qrCodeStyle)
                    } else {
                        Toast.makeText(
                            this@QRCodeListActivity,
                            R.string.new_qrcode_error,
                            Toast.LENGTH_LONG
                        ).show()
                    }
                } else {
                    Toast.makeText(
                        this@QRCodeListActivity,
                        R.string.new_qrcode_error,
                        Toast.LENGTH_LONG
                    ).show()
                }
            }
        }
    }

    override fun onResume() {
        super.onResume()

        QRCodeListDatasource.liveData.observe(this) {
            if (it != null) {
                listAdapter.submitList(it)
            }
        }
    }

    override fun onStop() {
        super.onStop()

        QRCodeListDatasource.liveData.removeObservers(this)
    }

    private fun startNewQRCodeActivity() {
        val intent = Intent(this, NewQRCodeActivity::class.java)
        newQRCodeActivity.launch(intent)
    }
}
