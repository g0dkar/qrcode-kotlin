package io.github.g0dkar.qrcode.springWebExample

import org.springframework.core.io.ByteArrayResource
import org.springframework.http.HttpHeaders
import org.springframework.http.MediaType.IMAGE_PNG_VALUE
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import qrcode.QRCodeShapesEnum
import qrcode.raw.ErrorCorrectionLevel

/**
 * A sample controller to create QRCodes with QRCode-Kotlin.
 *
 * @author Rafael Lins - https://github.com/g0dkar
 */
@RestController
class QRCodeController(
    private val qrCodeService: QRCodeService,
) {
    /**
     * A simple GET to create QRCodes with QRCode-Kotlin.
     *
     * @param data What will be encoded as a QRCode. **REQUIRED.**
     * @param shape Shape of each element of the QRCode. Default: `square`. See [QRCodeShapesEnum].
     * @param spacing How many pixels between each cell. Default: 1 for `square`, 5% of the radius for the others.
     * @param ecl Error Correction Level. Default: `medium`. See [ErrorCorrectionLevel].
     * @param informationDensity **GET param: `id`** - Information Density. Higher values means you can encode more data. Default: 0 (meaning the actual value is computed from data + ecl by the library itself).
     * @param fileName File name to use for the downloaded file (applicable only for Web Browsers). Default: `qrcode` (which means the file will be called `qrcode.png`)
     */
    @GetMapping("/qrcode", produces = [IMAGE_PNG_VALUE])
    fun generateQRCode(
        @RequestParam(required = true) data: String,
        @RequestParam(required = false, defaultValue = "SQUARE") shape: String,
        @RequestParam(required = false) spacing: Int?,
        @RequestParam(required = false, defaultValue = "LOW") ecl: String,
        @RequestParam(required = false, defaultValue = "0") informationDensity: Int,
        @RequestParam(required = false, defaultValue = "qrcode") fileName: String,
    ): ResponseEntity<ByteArrayResource> {
        val shapeEnum = try {
            QRCodeShapesEnum.valueOf(shape.uppercase())
        } catch (_: Exception) {
            QRCodeShapesEnum.SQUARE
        }
        val eclEnum = try {
            ErrorCorrectionLevel.valueOf(ecl.uppercase())
        } catch (_: Exception) {
            ErrorCorrectionLevel.LOW
        }

        val pngData =
            qrCodeService.qrCode(data, spacing, shapeEnum, eclEnum, informationDensity)
        val resource = ByteArrayResource(pngData, IMAGE_PNG_VALUE)

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"$fileName.png\"")
            .body(resource)
    }
}
