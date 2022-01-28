package io.github.g0dkar.qrcode.render

import io.github.g0dkar.qrcode.internals.QRCodeSquare
import java.util.function.BiConsumer

@FunctionalInterface
interface QRCodeRenderer : BiConsumer<QRCodeSquare, QRCodeCanvas>
