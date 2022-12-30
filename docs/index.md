---
layout: default
title: QRCode-Kotlin
sidebar: en
feature_image: /assets/img/logo.png
feature_text: QRCode-Kotlin is a library for creating QRCodes in Kotlin and Java
---

Creating QRCodes in Kotlin and Java is harder than it should be. QRCode-Kotlin aims to bring a simple, straightforward
and customizable way to create QRCodes into the JVM domain, especially in the backend.

## Table of Contents

<!-- toc -->

- [Advantages of QRCode-Kotlin](#advantages-of-qrcode-kotlin)
- [Installation](#installation)
- [Usage](#usage)
  * [Just a plain, simple QRCode](#just-a-plain-simple-qrcode)
  * [Adjusting the size](#adjusting-the-size)
  * [Colorful QRCodes](#colorful-qrcodes)
  * [Server-side: Spring Framework/Boot](#server-side-spring-frameworkboot)
- [License](#license)
- [Thanks and Acknowledgements](#thanks-and-acknowledgements)
- [Support and Links](#support-and-links)

<!-- tocstop -->

## Advantages of QRCode-Kotlin

* **Pure Kotlin:** Reimplemented on pure Kotlin from a reference implementation of the QRCode spec
  by [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator){:target="_blank"}
* **Lightweight:** No dependencies*, `~65KB` and it does only what it says on the tin.
* **Easy to use:** Instantiate an object, invoke a method, and you're done :)
* **Compact:** Doesn't add any bloat like when using libraries like Google's ZXing (which do way more than generate
  QRCodes)
* **Customizable output:** Want to make a colorful QRCode? We got you! A round one? Sure! Maybe use a drawing library?
  All good as well! [Our logo](/assets/img/logo.png){:target="_blank"} is built with the
  [library itself](https://github.com/g0dkar/qrcode-kotlin/blob/main/examples/kotlin/src/main/kotlin/QRCodeKotlinLogo.kt) 😉
* **Server friendly:** This isn't a library for Mobile applications, but it is extensible. This is a library thought by
  backend developers for backend developers.
* **Android is Supported:** Since this library is a Kotlin Multiplatform one, Android is natively supported as well!
* **JavaScript is Supported:** Since version 3.3.0, Browser JavaScript is also supported!

>\* Well, except maybe the `org.jetbrains.kotlin:kotlin-stdlib-jdk8` one if you use Java...

## Installation

This library is available from [Maven Central](https://search.maven.org/artifact/io.github.g0dkar/qrcode-kotlin/3.2.0/qrcode-kotlin),
so you can add `QRCode-Kotlin` to your project as a dependency like any other:

<ul class="tab" data-tab="736c69e9-16ec-4d21-b16b-0f2ed22bcfcf" data-name="deps">
    <li class="active"><a href="#">Gradle (JVM)</a></li>
    <li><a href="#">Gradle (Android)</a></li>
    <li><a href="#">Maven (JVM)</a></li>
    <li><a href="#">Maven (Android)</a></li>
    <li><a href="#">JavaScript</a></li>
</ul>
<ul class="tab-content" id="736c69e9-16ec-4d21-b16b-0f2ed22bcfcf" data-name="deps">
<li class="active" markdown="block">
```groovy
implementation("io.github.g0dkar:qrcode-kotlin-jvm:3.2.0")
```
</li>
<li markdown="block">
```groovy
implementation("io.github.g0dkar:qrcode-kotlin-android:3.2.0")
```
</li>
<li markdown="block">
```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-jvm</artifactId>
    <version>3.2.0</version>
</dependency>
```
</li>
<li markdown="block">
```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-android</artifactId>
    <version>3.2.0</version>
</dependency>
```
</li>
<li markdown="block">
```html
<!-- Step 1: Import the library -->
<script src="qrcode-kotlin.min.js"></script>

<!-- Step 2: Recommended to do this to make it easier to use -->
<script>
    const QRCode = window['qrcode-kotlin'].io.github.g0dkar.qrcode.QRCode
</script>
```
</li>
</ul>

## Usage

Here are a few examples of how to use the library. If you are interested in more advanced uses and/or fancier
QRCodes, please check our [Examples](/examples) page! Also, we have a bunch of
[examples over at GitHub](https://github.com/g0dkar/qrcode-kotlin/tree/main/examples).

### Just a plain, simple QRCode

To generate a simple QRCode:

<ul class="tab" data-tab="900b518b-69c9-470b-80ca-8573b8396a41" data-name="example01">
    <li class="active"><a href="#">Kotlin</a></li>
    <li><a href="#">Java</a></li>
    <li><a href="#">JavaScript</a></li>
</ul>
<ul class="tab-content" id="900b518b-69c9-470b-80ca-8573b8396a41" data-name="example01">
<li class="active" markdown="block">
```kotlin
// By default, the writeImage() method outputs PNGs
FileOutputStream("example01.png").use {
    QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render()
        .writeImage(it)
}
```
</li>
<li markdown="block">
```java
// By default, the writeImage() method outputs PNGs
try (FileOutputStream fileOut = new FileOutputStream("example01.png")) {
    new QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render()
        .writeImage(fileOut);
}
```
</li>
<li markdown="block">
```js
// Assuming "const QRCode = window[...]" as suggested:
const dataURL = new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render()
    .toDataURL()

// Show it on an <img> tag
document.getElementById("someImg").src = dataURL
```
</li>
</ul>

### Adjusting the size

The `render()` function can receive a `cellSize` to adjust the size of the resulting QRCode. This parameter represents
the size in pixels of each square of the resulting QRCode. Its default value is `25`.

It also accepts a `margin` which is a space, in pixels, that will be left around the QRCode. Its default value is `0`:

<ul class="tab" data-tab="2ca78d92-b6cd-40dd-8b1c-ec031b180a8b" data-name="example02">
    <li class="active"><a href="#">Kotlin</a></li>
    <li><a href="#">Java</a></li>
    <li><a href="#">JavaScript</a></li>
</ul>
<ul class="tab-content" id="2ca78d92-b6cd-40dd-8b1c-ec031b180a8b" data-name="example02">
<li class="active" markdown="block">
```kotlin
FileOutputStream("example02.png").use {
    QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render(cellSize = 50, margin = 25)
        .writeImage(it)
}
```
</li>
<li markdown="block">
```java
try (FileOutputStream fileOut = new FileOutputStream("example02.png")) {
    new QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render(50, 25)
        .writeImage(fileOut);
}
```
</li>
<li markdown="block">
```js
// Assuming "const QRCode = window[...]" as suggested:
const dataURL = new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(50, 25)
    .toDataURL()

// Show it on an <img> tag
document.getElementById("someImg").src = dataURL
```
</li>
</ul>

### Colorful QRCodes

Want to have a colorful QRCode? Easy-peasy! The `render()` function also have the `brightColor`, `darkColor` and
`marginColor` parameters just for that. Their default values are Black-and-White squares with a White margin.

Starting from **v2.0.0** these are simply `Int` values in the RGBA space. These can be created with either the new
[Colors](https://github.com/g0dkar/qrcode-kotlin/blob/main/src/commonMain/kotlin/io/github/g0dkar/qrcode/render/Colors.kt){:target="_blank"}
helper class or if you are running in the JRE with plain, _(very)_ old `java.awt.Color` classes :)

For fun, this will make a QRCode with GitHub's Dark Mode colors:

<ul class="tab" data-tab="7c04714b-8dd3-47ed-90cb-0baaf44d8daa" data-name="example03">
    <li class="active"><a href="#">Kotlin</a></li>
    <li><a href="#">Java</a></li>
    <li><a href="#">JavaScript</a></li>
</ul>
<ul class="tab-content" id="7c04714b-8dd3-47ed-90cb-0baaf44d8daa" data-name="example03">
<li class="active" markdown="block">
```kotlin
import io.github.g0dkar.qrcode.render.Colors

val background = Colors.css("#8b949e")
val foreground = Colors.css("#0d1117")

FileOutputStream("example03.png").use {
    QRCode("https://github.com/g0dkar/qrcode-kotlin").render(
        brightColor = background, // Background
        darkColor = foreground    // Foreground (the squares)
    ).writeImage(it)
}
```
</li>
<li markdown="block">
```java
import java.awt.Color;

Color background = new Color(13, 17, 23);
Color foreground = new Color(139, 148, 158);

try (FileOutputStream fileOut = new FileOutputStream("example03.png")){
    new QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render(25, 0, background.getRGB(), foreground.getRGB())
        .writeImage(fileOut);
}
```
</li>
<li markdown="block">
```js
// Assuming "const QRCode = window[...]" as suggested:
const bg = 0xff8b949e // ARGB
const fg = 0xff0d1117 // ARGB

const dataURL = new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(25, 0, bg, fg)
    .toDataURL()

// Show it on an <img> tag
document.getElementById("someImg").src = dataURL
```
</li>
</ul>

### Server-side: Spring Framework/Boot

One of the main reasons I developed this library was to use it on a Spring Boot API that needed to generate QRCodes. So
it is only natural to show how to do that :)

<ul class="tab" data-tab="013583aa-c7bd-48a8-9d9f-d463669ac699" data-name="example04">
    <li class="active"><a href="#">Kotlin</a></li>
    <li><a href="#">Java</a></li>
</ul>
<ul class="tab-content" id="013583aa-c7bd-48a8-9d9f-d463669ac699" data-name="example04">
<li class="active" markdown="block">
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
</li>
<li markdown="block">
```java
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders.CONTENT_DISPOSITION;
import org.springframework.http.MediaType.IMAGE_PNG_VALUE;

@GetMapping("/qrcode")
public ResponseEntity<ByteArrayResource> generateQrCode(String content) {
    ByteArrayOutputStream imageOut = new ByteArrayOutputStream();

    new QRCode(content).render().writeImage(imageOut);

    return ResponseEntity.ok()
        .header(CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(new ByteArrayResource(imageOut.toByteArray(), IMAGE_PNG_VALUE))
}
```
</li>
</ul>

## License

Copyright since 2021 Rafael M. Lins, Licensed under the [MIT License](https://rafaellins.mit-license.org/2021/){:target="_blank"}.

QR Code is trademarked by Denso Wave, inc.

## Thanks and Acknowledgements

* [Kazuhiko Arase](https://github.com/kazuhikoarase){:target="_blank"}: For his reference implementation!
* [Paul Varry](https://github.com/pvarry){:target="_blank"}: for opening the first few issues on the repo and helping to make the library
  even better for everyone! 😁
* [Renan Lukas](https://github.com/RenanLukas){:target="_blank"}: For his friendship, patience and help with Android, Gradle and a bunch
  of other stuff during the development of v2.0.0 and v3.0.0!
* [Doomsdayrs](https://github.com/Doomsdayrs){:target="_blank"}: For pointing out how the library could be improved using Kotlin
  Multiplatform, and helping out implementing it into the project.

## Support and Links

* If you found any bugs,
  please [open an Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=)
  😁
* Have any suggestions? You
  can [make them](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=)
  as well!

If you enjoyed the library and want to get me some coffee, use a button below ✌️

[<img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Buy me a coffee over at Ko-fi!" width="200"/>](https://ko-fi.com/g0dkar){:target="_blank"}

[<img src="https://raw.githubusercontent.com/andreostrovsky/donate-with-paypal/master/blue.svg" alt="Buy me a coffee over at PayPal!" width="200"/>](https://www.paypal.com/donate/?business=EFVC68BFJQWSC&no_recurring=0&item_name=Rafael+is+working+on+Open+Source+software+in+his+free+time.+This+helps+him+keep+this+up+for+longer%2C+and+with+higher+quality%21&currency_code=BRL){:target="_blank"}
