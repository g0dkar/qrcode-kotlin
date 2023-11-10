package io.github.g0dkar.qrcode.extra

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.DiffUtil
import androidx.recyclerview.widget.ListAdapter
import androidx.recyclerview.widget.RecyclerView
import io.github.g0dkar.qrcode.QRCodeData
import io.github.g0dkar.qrcode.R

class QRCodeListAdapter(
    private val onClick: (QRCodeData) -> Unit
) : ListAdapter<QRCodeData, QRCodeListViewHolder>(QRCodeListDiffCallback) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): QRCodeListViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.qrcode_list_item, parent, false)
        return QRCodeListViewHolder(view, onClick)
    }

    override fun onBindViewHolder(holder: QRCodeListViewHolder, position: Int) {
        val qrCodeData = getItem(position)
        holder.bind(qrCodeData)
    }

}

class QRCodeListViewHolder(
    itemView: View,
    val onClick: (QRCodeData) -> Unit
) : RecyclerView.ViewHolder(itemView) {
    private val qrCodeListItemTextView: TextView = itemView.findViewById(R.id.qrcode_data)
    private val qrCodeListItemImageView: ImageView = itemView.findViewById(R.id.qrcode_image)
    private var currentQrCodeData: QRCodeData? = null

    init {
        itemView.setOnClickListener {
            currentQrCodeData?.let {
                onClick(it)
            }
        }
    }

    fun bind(qrCodeData: QRCodeData) {
        currentQrCodeData = qrCodeData

        qrCodeListItemTextView.text = qrCodeData.data
        qrCodeListItemImageView.setImageBitmap(qrCodeData.bitmap)
    }
}

object QRCodeListDiffCallback : DiffUtil.ItemCallback<QRCodeData>() {
    override fun areItemsTheSame(oldItem: QRCodeData, newItem: QRCodeData): Boolean {
        return oldItem == newItem
    }

    override fun areContentsTheSame(oldItem: QRCodeData, newItem: QRCodeData): Boolean {
        return oldItem.data == newItem.data
    }
}
