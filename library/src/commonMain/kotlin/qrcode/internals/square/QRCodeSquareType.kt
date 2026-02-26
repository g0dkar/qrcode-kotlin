package qrcode.internals.square

/**
 * The types available for squares in a QRCode.
 *
 * @author Rafael Lins - g0dkar
 */
enum class QRCodeSquareType {
    /** Part of a position probe: one of those big squares at the extremities of the QRCode. */
    POSITION_PROBE,

    /** Part of a position adjustment pattern: just like a position probe, but much smaller. */
    POSITION_ADJUST,

    /** Part of the timing pattern. Make it a square like any other :) */
    TIMING_PATTERN,

    /** Anything special. Just a square. */
    DEFAULT,
}
