# qrcode-kotlin

[![License](https://img.shields.io/github/license/g0dkar/qrcode-kotlin)](LICENSE)
![Travis (.com)](https://img.shields.io/travis/com/g0dkar/qrcode-kotlin)
[![Coverage Status](https://coveralls.io/repos/github/g0dkar/qrcode-kotlin/badge.svg?branch=main)](https://coveralls.io/github/g0dkar/qrcode-kotlin?branch=main)

[_:brazil: **Disponível em Português (Brasil)**_](#documentação-em-português-brasil)

Creating QRCodes in Kotlin and Java is harder than it should be. QRCode-Kotlin aims to bring a simple, straightforward
and customizable way to create QRCodes into the JVM domain, especially in the backend.

## Advantages of QRCode-Kotlin

* **Pure Kotlin:** Reimplemented on pure Kotlin from a reference implementation of the QRCode spec by [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Lightweight:** No dependencies, `~42KB` and it does what it says on the tin.
* **Easy to use:** Instantiate an object, invoke a method, and you're done :)
* **Compact:** Doesn't add any bloat like when using libraries like Google's ZXing
* **Customizable output:** Want to make a colorful QRCode? We got you!

## Installation

This library is available from [Maven Central](#) so you can add QRCode-Kotlin to your project as a dependency like any other:

**If you're using Maven - pom.xml:**

```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin</artifactId>
    <version>1.0.0</version>
</dependency>
```

**If you're using Gradle:**

```
// Kotlin ❤️
implementation("io.github.g0dkar:qrcode-kotlin:1.0.0")

// Groovy
implementation 'io.github.g0dkar:qrcode-kotlin:1.0.0'
```

## Examples and Usage

Here are a few examples of how to use the library to achieve some nice results. If you are interested in more advanced
uses and/or fancier QRCodes, please read the documentation :)

### Just a plain, simple QRCode, nothing fancy:

To generate a simple QRCode:

```kotlin
val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin").render()

// Save it as a PNG File:
ImageIO.write(imageData, "PNG", File("example01.png"))
```

Same code as above, but in Java:

```java
BufferedImage imageData = new QRCode("https://github.com/g0dkar/qrcode-kotlin").render();

// Save it as a PNG File:
ImageIO.write(imageData, "PNG", new File("example01-java.png"));
```

### A QRCode, but bigger

The `render()` function can receive a `cellSize` to adjust the size of the resulting QRCode. This parameter represents
the size in pixels of each square of the resulting QRCode. Its default value is `25`:

```kotlin
val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin").render(cellSize = 50)

ImageIO.write(imageData, "PNG", File("example02.png"))
```

In Java:

```java
BufferedImage imageData = new QRCode("https://github.com/g0dkar/qrcode-kotlin").render(50);

ImageIO.write(imageData, "PNG", new File("example02-java.png"));
```

### Just like Google's ZXing one!

As of the time of writing, [Google's ZXing library](https://github.com/zxing/zxing) is widely used to render QRCodes.
Its rendering of QRCodes usually adds a "border" _(aka "margin")_ around the QRCode, usually equal to 1 cell. The
`render()` function can receive a `margin` parameter as well, which is how many pixels we want to have as a margin
around our QRCode. **By default, the `margin` parameter is equal to `0`.**

To have one of these nice looking and spaced QRCode, try doing this:

```kotlin
val cellSize = 30 // pixels
val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin").render(cellSize, margin = cellSize)

ImageIO.write(imageData, "PNG", File("example03.png"))
```

In Java:

```java
int cellSize = 30; // pixels
BufferedImage imageData = new QRCode("https://github.com/g0dkar/qrcode-kotlin").render(cellSize, cellSize);

ImageIO.write(imageData, "PNG", new File("example03-java.png"));
```

### A splash of Color

Want to have a colorful QRCode? Easy-peasy! The `render()` function also have the `brightColor`, `darkColor` and
`marginColor` parameters just for that. Their default values are Black-and-White squares with a White margin. These are
plain, (very) old `java.awt.Color` values in the RGBA space.

For fun, this will make a QRCode with GitHub's Dark Mode colors:

```kotlin
val background = Color(13, 17, 23)
val foreground = Color(139, 148, 158)

val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin").render(
    brightColor = background, // Background
    darkColor = foreground,   // Foreground (aka the "black squares")
    marginColor = background  // Margin (ignored since margin = 0)
)

ImageIO.write(imageData, "PNG", File("example04.png"))
```

In Java:

```java
Color background = new Color(13, 17, 23);
Color foreground = new Color(139, 148, 158);

QRCode qrCode = new QRCode("https://github.com/g0dkar/qrcode-kotlin");
BufferedImage imageData = qrCode.render(25, 0, qrCode.encode(), background, foreground, background);

ImageIO.write(imageData, "PNG", File("example04-java.png"));
```

### Spring Framework and/or Spring Boot

One of the main reasons I developed this library was to use it on a Spring Boot API that needed to generate QRCodes. So
it is only natural to show how to do that :)

```kotlin
@GetMapping("/qrcode")
fun generateQrCode(content: String): ResponseEntity<org.springframework.core.io.ByteArrayResource> {
    val imageData = QRCode(content).render()
    val imageBytes = ByteArrayOutputStream().also { ImageIO.write(imageData, "PNG", it) }.toByteArray()
    val resource = ByteArrayResource(imageBytes, org.springframework.http.MediaType.IMAGE_PNG_VALUE)

    return ResponseEntity.ok()
        .header(org.springframework.http.HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(resource)
}
```

## License

Copyright 2021 Rafael M. Lins, Licensed under the [MIT License](LICENSE).

## Support and Links

* If you found any bugs, please [open an Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=) 😁
* Have any suggestions? You can [make them](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=) as well!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg "Buy me a coffee over at Ko-fi!")](https://ko-fi.com/g0dkar)

------------

### Documentação em Português (Brasil)

[_:us: **Available in English**_](#)

Criar QRCodes em Kotlin e Java é mais difícil do que deveria. O QRCode-Kotlin tenta trazer uma forma simples, direta e
personalizável de se criar QRCodes para o domínio da JVM, especialmente no backend.

## Vantagens do QRCode-Kotlin

* **Kotlin Puro:** Reimplementação em puro Kotlin a partir da implementação de referência da especificação do QRCode por [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Leve:** Sem dependencias, `~42KB` e faz exatamente o que promete fazer.
* **Fácil de usar:** Instancie um objeto, chame um método e pronto :)
* **Compacta:** Não adiciona nenhum "inchaço" como quando se usa bibliotecas como a ZXing do Google
* **Saída Personalizada:** Quer um QRCode colorido? Nós temos!

## Instalação

Esta biblioteca está disponível a partir da [Central Maven](#), então basta adicionar o `QRCode-Kotlin` a seu projeto
como qualquer outra dependência:

**Se você utiliza Maven - pom.xml:**

```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin</artifactId>
    <version>1.0.0</version>
</dependency>
```

**Se você utiliza Gradle:**

```
// Kotlin ❤️
implementation("io.github.g0dkar:qrcode-kotlin:1.0.0")

// Groovy
implementation 'io.github.g0dkar:qrcode-kotlin:1.0.0'
```

_[Translation is WIP]_

## Examples and Usage

Here are a few examples of how to use the library to achieve some nice results. If you are interested in more advanced
uses and/or fancier QRCodes, please read the documentation :)

### Just a plain, simple QRCode, nothing fancy:

To generate a simple QRCode:

```kotlin
val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin").render()

// Save it as a PNG File:
ImageIO.write(imageData, "PNG", File("example01.png"))
```

Same code as above, but in Java:

```java
BufferedImage imageData = new QRCode("https://github.com/g0dkar/qrcode-kotlin").render();

// Save it as a PNG File:
ImageIO.write(imageData, "PNG", new File("example01-java.png"));
```

### A QRCode, but bigger

The `render()` function can receive a `cellSize` to adjust the size of the resulting QRCode. This parameter represents
the size in pixels of each square of the resulting QRCode. Its default value is `25`:

```kotlin
val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin").render(cellSize = 50)

ImageIO.write(imageData, "PNG", File("example02.png"))
```

In Java:

```java
BufferedImage imageData = new QRCode("https://github.com/g0dkar/qrcode-kotlin").render(50);

ImageIO.write(imageData, "PNG", new File("example02-java.png"));
```

### Just like Google's ZXing one!

As of the time of writing, [Google's ZXing library](https://github.com/zxing/zxing) is widely used to render QRCodes.
Its rendering of QRCodes usually adds a "border" _(aka "margin")_ around the QRCode, usually equal to 1 cell. The
`render()` function can receive a `margin` parameter as well, which is how many pixels we want to have as a margin
around our QRCode. **By default, the `margin` parameter is equal to `0`.**

To have one of these nice looking and spaced QRCode, try doing this:

```kotlin
val cellSize = 30 // pixels
val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin").render(cellSize, margin = cellSize)

ImageIO.write(imageData, "PNG", File("example03.png"))
```

In Java:

```java
int cellSize = 30; // pixels
BufferedImage imageData = new QRCode("https://github.com/g0dkar/qrcode-kotlin").render(cellSize, cellSize);

ImageIO.write(imageData, "PNG", new File("example03-java.png"));
```

### A splash of Color

Want to have a colorful QRCode? Easy-peasy! The `render()` function also have the `brightColor`, `darkColor` and
`marginColor` parameters just for that. Their default values are Black-and-White squares with a White margin. These are
plain, (very) old `java.awt.Color` values in the RGBA space.

For fun, this will make a QRCode with GitHub's Dark Mode colors:

```kotlin
val background = Color(13, 17, 23)
val foreground = Color(139, 148, 158)

val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin").render(
    brightColor = background, // Background
    darkColor = foreground,   // Foreground (aka the "black squares")
    marginColor = background  // Margin (ignored since margin = 0)
)

ImageIO.write(imageData, "PNG", File("example04.png"))
```

In Java:

```java
Color background = new Color(13, 17, 23);
Color foreground = new Color(139, 148, 158);

QRCode qrCode = new QRCode("https://github.com/g0dkar/qrcode-kotlin");
BufferedImage imageData = qrCode.render(25, 0, qrCode.encode(), background, foreground, background);

ImageIO.write(imageData, "PNG", File("example04-java.png"));
```

### Spring Framework and/or Spring Boot

One of the main reasons I developed this library was to use it on a Spring Boot API that needed to generate QRCodes. So
it is only natural to show how to do that :)

```kotlin
@GetMapping("/qrcode")
fun generateQrCode(content: String): ResponseEntity<org.springframework.core.io.ByteArrayResource> {
    val imageData = QRCode(content).render()
    val imageBytes = ByteArrayOutputStream().also { ImageIO.write(imageData, "PNG", it) }.toByteArray()
    val resource = ByteArrayResource(imageBytes, org.springframework.http.MediaType.IMAGE_PNG_VALUE)

    return ResponseEntity.ok()
        .header(org.springframework.http.HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(resource)
}
```

## License

Copyright 2021 Rafael M. Lins, Licensed under the [MIT License](LICENSE).

## Support and Links

* If you found any bugs, please [open an Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=) 😁
* Have any suggestions? You can [make them](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=) as well!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg "Buy me a coffee over at Ko-fi!")](https://ko-fi.com/g0dkar)
