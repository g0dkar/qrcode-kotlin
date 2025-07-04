package io.github.g0dkar.qrcode.springWebExample

import org.springframework.stereotype.Service
import qrcode.QRCodeBuilder
import qrcode.QRCodeShapesEnum
import qrcode.QRCodeShapesEnum.SQUARE
import qrcode.raw.ErrorCorrectionLevel
import qrcode.raw.ErrorCorrectionLevel.MEDIUM

@Service
class QRCodeService {
    fun qrCode(
        data: String,
        spacing: Int? = null,
        shape: QRCodeShapesEnum = SQUARE,
        ecl: ErrorCorrectionLevel = MEDIUM,
        informationDensity: Int = 0,
    ): ByteArray =
        QRCodeBuilder(shape)
            .withErrorCorrectionLevel(ecl)
            .withInformationDensity(informationDensity)
            .also {
                if (spacing != null && spacing >= 0) {
                    it.withInnerSpacing(spacing)
                }
            }
            .build(data)
            .render()
            .getBytes()
}
