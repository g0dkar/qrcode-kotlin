package io.github.g0dkar.qrcode.internals

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Helps generates error messages.
 *
 * @author Rafael Lins - g0dkar
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
internal object ErrorMessage {
    private const val BUG_REPORT_URL =
        "https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title="

    /** Generates an error message with a "Please report" appended to it. */
    fun error(string: String) =
        "$string - Please, report this error via this URL: $BUG_REPORT_URL"
}
