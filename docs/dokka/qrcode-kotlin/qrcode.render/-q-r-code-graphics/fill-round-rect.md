//[qrcode-kotlin](../../../index.md)/[qrcode.render](../index.md)/[QRCodeGraphics](index.md)/[fillRoundRect](fill-round-rect.md)

# fillRoundRect

[common]\
expect fun [fillRoundRect](fill-round-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), borderRadius: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Fills the round rectangle starting at point `(x,y)` and having `width` by `height` with edges that are `borderRadius` pixels round (almost like CSS).

If it helps, these would *in theory* draw the same thing:

```kotlin
// CSS
.roundRect {
    width: 100px;
    height: 100px;
    border-radius: 5px;
}

// Kotlin
fillRoundRect(0, 0, 100, 100, 5)
```

**Note:** you can't specify different sizes for different edges. This is just an example :)

[android, js, jvm]\
[android, js, jvm]\
actual open fun [fillRoundRect](fill-round-rect.md)(x: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), y: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), width: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), height: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), borderRadius: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), color: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

Fills the round rectangle starting at point `(x,y)` and having `width` by `height` with edges that are `borderRadius` pixels round (almost like CSS).

If it helps, these would *in theory* draw the same thing:

```kotlin
// CSS
.roundRect {
    width: 100px;
    height: 100px;
    border-radius: 5px;
}

// Kotlin
drawRoundRect(0, 0, 100, 100, 5)
```

**Note:** you can't specify different sizes for different edges. This is just an example :)
