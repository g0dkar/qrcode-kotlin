package qrcode.exception

/**
 * Thrown when the Information Density parameter is not enough to hold all the data that needs to be encoded in the
 * QRCode.
 */
class InsufficientInformationDensityException(
    override val message: String? = null,
    override val cause: Throwable? = null,
) : IllegalArgumentException(message, cause)
