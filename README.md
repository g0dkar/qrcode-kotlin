[![License](https://img.shields.io/github/license/g0dkar/qrcode-kotlin)](LICENSE)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.g0dkar/qrcode-kotlin.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22io.github.g0dkar%22%20AND%20a:%22qrcode-kotlin%22)
[![ktlint](https://img.shields.io/badge/code%20style-%E2%9D%A4-FF4081.svg)](https://ktlint.github.io/)

💚 [_**Disponível em Português (Brasil)**_](https://qrcodekotlin.com/pt_br) 💛

Creating QRCodes in Kotlin and Java is harder than it should be. QRCode-Kotlin aims to bring a simple, straightforward
and customizable way to create QRCodes into the JVM domain, especially in the backend.

## Table of Contents

<!-- toc -->
- [Advantages of QRCode-Kotlin](#advantages-of-qrcode-kotlin)
- [Installation](#installation)
- [Examples and Usage](#examples-and-usage)
  - [Just a plain, simple QRCode, nothing fancy](#just-a-plain-simple-qrcode-nothing-fancy)
  - [A QRCode, but bigger](#a-qrcode-but-bigger)
  - [Just like Google's ZXing one!](#just-like-googles-zxing-one)
  - [A splash of Color](#a-splash-of-color)
  - [Specifying your own data type](#specifying-your-own-data-type)
  - [Spring Framework and/or Spring Boot](#spring-framework-andor-spring-boot)
- [License](#license)
- [Thanks and Acknowledgements](#thanks-and-acknowledgements)
- [Support and Links](#support-and-links)
<!-- /toc -->

## Advantages of QRCode-Kotlin

* **Pure Kotlin:** Reimplemented on pure Kotlin from a reference implementation of the QRCode spec
  by [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Lightweight:** No dependencies*, `~65KB` and it does what it says on the tin.
* **Easy to use:** Instantiate an object, invoke a method, and you're done :)
* **Compact:** Doesn't add any bloat like when using libraries like Google's ZXing (which do way more than generate
  QRCodes)
* **Customizable output:** Want to make a colorful QRCode? We got you! A round one? Sure! Maybe use a drawing library?
  All good as well!
* **Server friendly:** This isn't a library for Mobile applications, but it is extensible. This is a library thought by
  backend developers for backend developers.
* ![new on v3.0.0](https://img.shields.io/badge/new!-v3.0.0-critical?style=flat) **Android is Supported:** Since this library is now a Kotlin Multiplatform one, Android is now natively supported as well!

>\* Well, except maybe the `org.jetbrains.kotlin:kotlin-stdlib-jdk8` one if you use Java...

## Installation

This library is available from [Maven Central](https://search.maven.org/artifact/io.github.g0dkar/qrcode-kotlin/3.0.0/qrcode-kotlin),
so you can add `QRCode-Kotlin` to your project as a dependency like any other:

![new on v3.0.0](https://img.shields.io/badge/new!-v3.0.0-critical)
> **Now this is a Multiplatform lib:** Starting from version `3.0.0` this library became a Kotlin Multiplatform library.
> We hope that to you using the library the only change is to declare either `qrcode-kotlin-jvm` or
> `qrcode-kotlin-android` as the dependency.

**If you're using Maven - pom.xml:**

```xml
<!-- Use this one for normal applications -->
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-jvm</artifactId>
    <version>3.3.0</version>
</dependency>



<!-- Or this one for Android apps 👀 -->
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-android</artifactId>
    <version>3.3.0</version>
</dependency>
```

**If you're using Gradle:**

```groovy
// Kotlin ❤️
// Use this one for normal applications
implementation("io.github.g0dkar:qrcode-kotlin-jvm:3.3.0")
// Or this one for Android apps 👀
implementation("io.github.g0dkar:qrcode-kotlin-android:3.3.0")



// Groovy
// Use this one for normal applications
implementation 'io.github.g0dkar:qrcode-kotlin-jvm:3.3.0'
// Or this one for Android apps 👀
implementation 'io.github.g0dkar:qrcode-kotlin-android:3.3.0'
```

## Examples and Usage

Here are a few examples of how to use the library to achieve some nice results. If you are interested in more advanced
uses and/or fancier QRCodes, please read the [documentation](dokka) :)

![new on v3.2.0](https://img.shields.io/badge/new!-v3.2.0-critical)

**New:** There's a new example showing how to create an [SVG QRCode](examples/kotlin/src/main/kotlin/SVGQRCode.kt)!

>Also, make sure to check our [examples](examples) folder for codes in Kotlin and Java, and the resulting QRCodes!

### Just a plain, simple QRCode, nothing fancy

To generate a simple QRCode:

```kotlin
// By default, the writeImage() method outputs PNGs
val fileOut = FileOutputStream("example01.png")

QRCode("https://github.com/g0dkar/qrcode-kotlin").render().writeImage(fileOut)
```

Same code as above, but in Java:

```java
// By default, the writeImage() method outputs PNGs
FileOutputStream fileOut = new FileOutputStream("example01-java.png");

new QRCode("https://github.com/g0dkar/qrcode-kotlin").render().writeImage(fileOut);
```

### A QRCode, but bigger

The `render()` function can receive a `cellSize` to adjust the size of the resulting QRCode. This parameter represents
the size in pixels of each square of the resulting QRCode. Its default value is `25`:

```kotlin
val fileOut = FileOutputStream("example02.png")

QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(cellSize = 50)
    .writeImage(fileOut)
```

In Java:

```java
FileOutputStream fileOut = new FileOutputStream("example02-java.png");

new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(50)
    .writeImage(fileOut);
```

### Just like Google's ZXing one!

As of the time of writing, [Google's ZXing library](https://github.com/zxing/zxing) is widely used to render QRCodes.
Its rendering of QRCodes usually adds a "border" _(aka "margin")_ around the QRCode, usually equal to 1 cell. The
`render()` function can receive a `margin` parameter as well, which is how many pixels we want to have as a margin
around our QRCode. **By default, the `margin` parameter is equal to `0`.**

To have one of these nice looking and spaced QRCode, try doing this:

```kotlin
val fileOut = FileOutputStream("example03.png")
val cellSize = 30 // pixels

QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(cellSize, margin = cellSize)
    .writeImage(fileOut)
```

In Java:

```java
FileOutputStream fileOut = new FileOutputStream("example03-java.png");
int cellSize = 30; // pixels

new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(cellSize, cellSize);
    .writeImage(fileOut);
```

### A splash of Color

![new on v2.0.0](https://img.shields.io/badge/new!-v2.0.0-critical)

Want to have a colorful QRCode? Easy-peasy! The `render()` function also have the `brightColor`, `darkColor` and
`marginColor` parameters just for that. Their default values are Black-and-White squares with a White margin.

Starting from **v2.0.0** these are simply `Int` values in the RGBA space. These can be created with either the new
[Colors](src/main/kotlin/io/github/g0dkar/qrcode/render/Colors.kt) helper class or if you are running in the JRE
with plain, _(very)_ old `java.awt.Color` classes :)

For fun, this will make a QRCode with GitHub's Dark Mode colors:

```kotlin
import io.github.g0dkar.qrcode.render.Colors

val background = Colors.css("#8b949e")
val foreground = Colors.css("#0d1117")
val fileOut = FileOutputStream("example04.png")

QRCode("https://github.com/g0dkar/qrcode-kotlin").render(
    brightColor = background, // Background
    darkColor = foreground,   // Foreground (aka the "black squares")
    marginColor = background  // Margin (ignored since margin = 0)
).writeImage(fileOut)
```

In Java:

```java
import java.awt.Color;

Color background = new Color(13, 17, 23);
Color foreground = new Color(139, 148, 158);
FileOutputStream fileOut = new FileOutputStream("example04-java.png");

new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(25, 0, background.getRGB(), foreground.getRGB(), background.getRGB())
    .writeImage(fileOut);
```

### Specifying your own data type

If you don't want to rely on the basic data-type identification logic implemented by the library, you can specify what
is the type of data that your input string is composed of. You can pass it as the `dataType` parameter in the
constructor of the `QRCode` class like this:

```kotlin
// Create a "String" typed QRCode instead of a "Number" (which would be automatically identified)
QRCode("42", dataType = QRCodeDataType.DEFAULT)
```

### Spring Framework and/or Spring Boot

One of the main reasons I developed this library was to use it on a Spring Boot API that needed to generate QRCodes. So
it is only natural to show how to do that :)

```kotlin
import org.springframework.core.io.ByteArrayResource
import org.springframework.http.HttpHeaders.CONTENT_DISPOSITION
import org.springframework.http.MediaType.IMAGE_PNG_VALUE

@GetMapping("/qrcode")
fun generateQrCode(content: String): ResponseEntity<ByteArrayResource> {
    val imageOut = ByteArrayOutputStream()

    QRCode(content).render().writeImage(imageOut)

    val imageBytes = imageOut.toByteArray()
    val resource = ByteArrayResource(imageBytes, IMAGE_PNG_VALUE)

    return ResponseEntity.ok()
        .header(CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(resource)
}
```

## License

Copyright since 2021 Rafael M. Lins, Licensed under the [MIT License](https://rafaellins.mit-license.org/2021/).

QR Code is trademarked by Denso Wave, inc.

## Thanks and Acknowledgements

* [Kazuhiko Arase](https://github.com/kazuhikoarase): For his reference implementation!
* [Paul Varry](https://github.com/pvarry): for opening the first few issues on the repo and helping to make the library
  even better for everyone! :grin:
* [Renan Lukas](https://github.com/RenanLukas): For his friendship, patience and help with Android, Gradle and a bunch
  of other stuff during the development of v2.0.0 and v3.0.0!
* [Doomsdayrs](https://github.com/Doomsdayrs): For pointing out how the library could be improved using Kotlin
  Multiplatform, and helping out implementing it into the project.

## Support and Links

* If you found any bugs,
  please [open an Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=)
  😁
* Have any suggestions? You
  can [make them](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=)
  as well!

If you enjoyed the library and want to get me some coffee, use the button below :love_you_gesture:

[<img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Buy me a coffee over at Ko-fi!" width="200"/>](https://ko-fi.com/g0dkar)

[<img src="https://raw.githubusercontent.com/andreostrovsky/donate-with-paypal/master/blue.svg" alt="Buy me a coffee over at PayPal!" width="200"/>](https://www.paypal.com/donate/?business=EFVC68BFJQWSC&no_recurring=0&item_name=Rafael+is+working+on+Open+Source+software+in+his+free+time.+This+helps+him+keep+this+up+for+longer%2C+and+with+higher+quality%21&currency_code=BRL)
