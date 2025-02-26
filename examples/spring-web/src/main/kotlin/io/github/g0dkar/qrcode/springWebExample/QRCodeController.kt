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

@RestController
class QRCodeController(
    private val qrCodeService: QRCodeService,
) {
    @GetMapping("/qrcode", produces = [IMAGE_PNG_VALUE])
    fun generateQRCode(
        @RequestParam(required = true) data: String,
        @RequestParam(required = false, defaultValue = "SQUARE") shape: String,
        @RequestParam(required = false) spacing: Int?,
        @RequestParam(name = "ecl", required = false, defaultValue = "MEDIUM") ecl: String,
        @RequestParam(name = "id", required = false) informationDensity: Int = 6,
        @RequestParam(name = "fid", required = false) forceInformationDensity: Boolean = false,
    ): ResponseEntity<ByteArrayResource> {
        val shapeEnum = try {
            QRCodeShapesEnum.valueOf(shape.uppercase())
        } catch (_: Exception) {
            QRCodeShapesEnum.SQUARE
        }
        val eclEnum = try {
            ErrorCorrectionLevel.valueOf(ecl.uppercase())
        } catch (_: Exception) {
            ErrorCorrectionLevel.MEDIUM
        }

        val pngData =
            qrCodeService.qrCode(data, spacing, shapeEnum, eclEnum, informationDensity, forceInformationDensity)
        val resource = ByteArrayResource(pngData, IMAGE_PNG_VALUE)

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
            .body(resource)
    }
}
