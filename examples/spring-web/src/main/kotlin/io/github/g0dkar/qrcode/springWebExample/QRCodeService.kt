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
        shape: QRCodeShapesEnum = SQUARE,
        ecl: ErrorCorrectionLevel = MEDIUM,
        informationDensity: Int = 6,
        forceInformationDensity: Boolean = false,
    ): ByteArray =
        QRCodeBuilder(shape)
            .withErrorCorrectionLevel(ecl)
            .withInformationDensity(informationDensity)
            .forceInformationDensity(forceInformationDensity) // Must be AFTER withInformationDensity()
            .build(data)
            .render()
            .getBytes()
}
