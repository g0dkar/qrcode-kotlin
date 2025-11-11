package qrcode

/**
 * QRCode alignment inside the Canvas. Used to place the QRCode after calling [QRCode.fitIntoArea].
 */
enum class QRCodeAlignment {
    TOP_LEFT,
    TOP_CENTER,
    TOP_RIGHT,

    BOTTOM_LEFT,
    BOTTOM_CENTER,
    BOTTOM_RIGHT,

    MIDDLE_LEFT,
    MIDDLE_CENTER,
    MIDDLE_RIGHT,
}
