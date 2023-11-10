# QRCode-Kotlin

[![License](https://img.shields.io/github/license/g0dkar/qrcode-kotlin)](LICENSE)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.g0dkar/qrcode-kotlin.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22io.github.g0dkar%22%20AND%20a:%22qrcode-kotlin%22)

💚 [_**Disponível em Português (Brasil)**_](README.pt-br.md) 💛

![QRCode Kotlin Logo](examples/kotlin/project-banner.png)

Creating QRCodes in Kotlin (and Java) is harder than it should be. **QRCode-Kotlin aims to bring a simple,
straightforward and customizable way to create QRCodes**, especially in the backend.

It is with this mission in mind that we keep doing our best to learn how developers use this library and their goals so
that we can provide a better library/API for them. Please, feel free to share if and how you're using this project ^^

* **Pure Kotlin:** Rewritten on pure Kotlin from a reference implementation of the QRCode spec
  by [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Lightweight:** No dependencies, `~115KB` and it does what it says on the tin.
* **Easy to use:** Quickly and easily implement QRCodes with few lines of code.
* **Good-looking:** Many developers don't have time and sometimes knowledge to implement the perfect QRCode,
  so this library tries to generate good-looking QRCodes by default.
* **Server friendly:** The JVM version is mainly focused on a personal use-case where I needed to generate QRCodes on
  the backend, but all libraries I found were either complex or huge, usually both.
* **Multiplatform:** This is a KMP library with support to Java, JavaScript, Android, iOS and tvOS.

## Table of Contents

<!-- TOC -->

* [Installation](#installation)
* [Usage](#usage)
    * [Spring Framework and/or Spring Boot](#spring-framework-andor-spring-boot)
* [License](#license)
* [Thanks and Acknowledgements](#thanks-and-acknowledgements)
* [Support and Links](#support-and-links)

<!-- TOC -->

## Installation

The library is available
from [Maven Central](https://search.maven.org/artifact/io.github.g0dkar/qrcode-kotlin/4.0.5/qrcode-kotlin)
and [NPM JS](https://www.npmjs.com/package/qrcode-kotlin), so you can add it to your project as a dependency like any
other:

**Gradle:**

```groovy
implementation("io.github.g0dkar:qrcode-kotlin:4.0.5")
```

**Maven:**

```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-jvm</artifactId> <!-- or qrcode-kotlin-android -->
    <version>4.0.5</version>
</dependency>
```

**NodeJS:**

```shell
npm install qrcode-kotlin@4.0.5
```

**Browser:**

```html
<script src="https://cdn.jsdelivr.net/gh/g0dkar/qrcode-kotlin@main/release/qrcode-kotlin.min.js" type="application/javascript"></script>
```

## Usage

To create QRCodes, the main class that should be used is the `qrcode.render.QRCode` class. It has static methods to help
you create a QRCode the way you want:

```kotlin
// Use one of these:

val squares = QRCode.ofSquares()

val circles = QRCode.ofCircles()

val roundedSquares = QRCode.ofRoundedSquares()
```

With that, you'll have a [QRCodeBuilder](src/commonMain/kotlin/qrcode/QRCodeBuilder.kt) instance. It has methods to
adjust colors, size, spacing, add a logo and more! Also, make sure to check
the [Colors](src/commonMain/kotlin/qrcode/color/Colors.kt) class as well.

Here's a code to get you started:

```kotlin
val helloWorld = QRCode.ofSquares()
    .withColor(Colors.DEEP_SKY_BLUE) // Default is Colors.BLACK
    .withSize(10) // Default is 25
    .build("Hello world!")

// By default, QRCodes are rendered as PNGs.
val pngBytes = helloWorld.render()

FileOutputStream("hello-world.png").use { it.write(pngBytes) }
```

We highly recommend that you check out some examples:

* [All sorts of shapes](examples/kotlin/src/main/kotlin/Example01-Shapes.kt): Squares, Circles, Rounded Squares and
  Custom shapes
* [All about colors](examples/kotlin/src/main/kotlin/Example02-Colors.kt): Foreground, Background, Transparent
  backgrounds, Linear Gradient colors
* [Adding a Logo](examples/kotlin/src/main/kotlin/Example03-Logo.kt): Add a logo and remove the cells behind it, or
  don't :)
* [SVG QRCodes](examples/kotlin/src/main/kotlin/Example04-SVG.kt): How to extend the renderer to render SVG (uses [JFree SVG](https://github.com/jfree/jfreesvg))
* [The banner on the top of this README](examples/kotlin/src/main/kotlin/ProjectLogo.kt): Yup, all done with the
  library ^^

The examples show pretty much all that can be done with the library! Even how to extend it so that it can create SVG
QRCodes ;)

You can mix and match all those together. Try generating the library logo and banner with gradients and all in SVG ;)

### Spring Framework and/or Spring Boot

As said earlier, one of the main reasons I developed this library was to use it on a backend application. So it is only
natural to show how to do that :)

This Spring Framework/Boot controller method can generate QRCodes of a given content:

```kotlin
import org.springframework.core.io.ByteArrayResource
import org.springframework.http.HttpHeaders.CONTENT_DISPOSITION
import org.springframework.http.MediaType.IMAGE_PNG_VALUE

@GetMapping("/qrcode")
fun generateQrCode(content: String): ResponseEntity<ByteArrayResource> {
    val pngData = QRCode().ofSquares()
        .build(content)
        .render()
    val resource = ByteArrayResource(pngData, IMAGE_PNG_VALUE)

    return ResponseEntity.ok()
        .header(CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(resource)
}
```

## Changes from v3

The main changes coming from `v3.3.0` are:

1. The main package of the classes was changed from `io.github.g0dkar.qrcode` to simply `qrcode`
    * The old name doesn't help languages that don't have the "package" concept, and other Kotlin libraries already name
      their main package this way.
2. The old `QRCode` class was rewritten to be easier to create better looking QRCodes . The previous `QRCode` class was
   renamed to [QRCodeProcessor](src/commonMain/kotlin/qrcode/raw/QRCodeProcessor.kt), with very minor API changes.
    * **For most of the simple cases, the new `QRCode` class is compatible with the old one!**
3. A bunch of optimizations on how the QRCode is drawn. Previously, we'd had a canvas for each square, which would then
   be copied into the QRCode. This was changed to have just one large canvas where each square will be individually
   drawn directly.
4. ![Experimental](https://img.shields.io/badge/Experimental-critical) iOS and tvOS Support: Starting from `v4.0.5` an
   initial implementation of the `QRCodeGraphics` so that iOS and tvOS are now supported. **Any and
   all [feedback](https://github.com/g0dkar/qrcode-kotlin/issues/85) are very welcome!**

## License

Copyright since 2021 Rafael M. Lins, Licensed under the [MIT License](https://rafaellins.mit-license.org/2021/).

QR Code is trademarked by Denso Wave, Inc.

## Thanks and Acknowledgements

* [Kazuhiko Arase](https://github.com/kazuhikoarase): For his reference implementation!
* [Paul Varry](https://github.com/pvarry): for opening the first few issues on the repo and helping to make the library
  even better for everyone! :grin:
* [Renan Lukas](https://github.com/RenanLukas): For his friendship, patience and help with Android, Gradle and a bunch
  of other stuff during the development of v2.0.0 and v3.0.0!
* [Doomsdayrs](https://github.com/Doomsdayrs): For pointing out how the library could be improved using Kotlin
  Multiplatform, and helping out implementing it into the project.
* An awesome, furry friend for all the support through all these years :)

## Support and Links

* If you found any bugs,
  please [open an Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=)
  😁
* Have any suggestions? You
  can [make them](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=)
  as well!

If you enjoyed the library and want to get me some coffee, use the buttons below :love_you_gesture:

[<img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Buy me a coffee over at Ko-fi!" width="200"/>](https://ko-fi.com/g0dkar)

[<img src="https://raw.githubusercontent.com/andreostrovsky/donate-with-paypal/master/blue.svg" alt="Buy me a coffee over at PayPal!" width="200"/>](https://www.paypal.com/donate/?business=EFVC68BFJQWSC&no_recurring=0&item_name=Rafael+is+working+on+Open+Source+software+in+his+free+time.+This+helps+him+keep+this+up+for+longer%2C+and+with+higher+quality%21&currency_code=BRL)
