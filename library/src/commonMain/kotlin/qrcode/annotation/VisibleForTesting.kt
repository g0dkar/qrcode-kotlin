package qrcode.annotation

/**
 * This marks classes, methods, etc. that are only visible to make it so testing is possible/easier.
 */
@MustBeDocumented
@Retention(AnnotationRetention.BINARY)
@Target(
    AnnotationTarget.CLASS,
    AnnotationTarget.FILE,
    AnnotationTarget.FUNCTION,
    AnnotationTarget.TYPE,
    AnnotationTarget.TYPEALIAS,
)
annotation class VisibleForTesting
