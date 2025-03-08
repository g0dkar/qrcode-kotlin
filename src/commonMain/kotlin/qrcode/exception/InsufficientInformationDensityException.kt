package qrcode.exception

class InsufficientInformationDensityException(
    val informationDensity: Int,
    val neededBytes: Int,
    val maximumBytesSupported: Int,
    override val cause: Throwable? = null,
) : IllegalArgumentException(
    message = "Insufficient Information Density Parameter: $informationDensity [neededBytes=$neededBytes, maximumBytesSupported=$maximumBytesSupported] - Try increasing the parameter value or use 0 (zero) to automatically compute the least amount needed to fit the QRCode data being encoded.",
    cause,
)
