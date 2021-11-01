# qrcode-kotlin

[![License](https://img.shields.io/github/license/g0dkar/qrcode-kotlin)](LICENSE)
[![Build Status](https://app.travis-ci.com/g0dkar/qrcode-kotlin.svg?branch=main)](https://app.travis-ci.com/g0dkar/qrcode-kotlin)
[![Coverage Status](https://coveralls.io/repos/github/g0dkar/qrcode-kotlin/badge.svg?branch=main)](https://coveralls.io/github/g0dkar/qrcode-kotlin?branch=main)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.g0dkar/qrcode-kotlin.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22io.github.g0dkar%22%20AND%20a:%22qrcode-kotlin%22)

[_:brazil: **Disponível em Português (Brasil)**_](#documenta%C3%A7%C3%A3o-em-portugu%C3%AAs-brasil)

Creating QRCodes in Kotlin and Java is harder than it should be. QRCode-Kotlin aims to bring a simple, straightforward
and customizable way to create QRCodes into the JVM domain, especially in the backend.

## Advantages of QRCode-Kotlin

* **Pure Kotlin:** Reimplemented on pure Kotlin from a reference implementation of the QRCode spec
  by [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Lightweight:** No dependencies, `~42KB` and it does what it says on the tin.
* **Easy to use:** Instantiate an object, invoke a method, and you're done :)
* **Compact:** Doesn't add any bloat like when using libraries like Google's ZXing (which do way more than generate
  QRCodes)
* **Customizable output:** Want to make a colorful QRCode? We got you!
* **Server friendly:** This isn't a library for Mobile applications. This is a library thought by backend developers for
  backend developers.

## Installation

This library is available from [Maven Central](https://search.maven.org/artifact/io.github.g0dkar/qrcode-kotlin/1.1.0/qrcode-kotlin)
so you can add `QRCode-Kotlin` to your project as a dependency like any other:

**If you're using Maven - pom.xml:**

```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin</artifactId>
    <version>1.1.0</version>
</dependency>
```

**If you're using Gradle:**

```groovy
// Kotlin ❤️
implementation("io.github.g0dkar:qrcode-kotlin:1.1.0")

// Groovy
implementation 'io.github.g0dkar:qrcode-kotlin:1.1.0'
```

## Examples and Usage

Here are a few examples of how to use the library to achieve some nice results. If you are interested in more advanced
uses and/or fancier QRCodes, please read the documentation :)

>Also, make sure to check our [examples](examples) folder for codes in Kotlin and Java, and the resulting QRCodes!

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
val imageData = QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(cellSize, margin = cellSize)

ImageIO.write(imageData, "PNG", File("example03.png"))
```

In Java:

```java
int cellSize = 30; // pixels
BufferedImage imageData = new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(cellSize, cellSize);

ImageIO.write(imageData, "PNG", new File("example03-java.png"));
```

### A splash of Color

Want to have a colorful QRCode? Easy-peasy! The `render()` function also have the `brightColor`, `darkColor` and
`marginColor` parameters just for that. Their default values are Black-and-White squares with a White margin. These are
plain, (very) old `java.awt.Color` values in the RGBA space.

For fun, this will make a QRCode with GitHub's Dark Mode colors:

```kotlin
val background = Color(139, 148, 158)
val foreground = Color(13, 17, 23)

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

ImageIO.write(imageData, "PNG", new File("example04-java.png"));
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
    val imageData = QRCode(content).render()
    val imageBytes = ByteArrayOutputStream().also { ImageIO.write(imageData, "PNG", it) }.toByteArray()
    val resource = ByteArrayResource(imageBytes, IMAGE_PNG_VALUE)

    return ResponseEntity.ok()
        .header(CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(resource)
}
```

## License

Copyright 2021 Rafael M. Lins, Licensed under the [MIT License](LICENSE).

QR Code is trademarked by Denso Wave, inc.

## Support and Links

* If you found any bugs,
  please [open an Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=)
  😁
* Have any suggestions? You
  can [make them](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=)
  as well!

If you enjoyed the library and want to get me some coffee, use the button below :love_you_gesture:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg "Buy me a coffee over at Ko-fi!")](https://ko-fi.com/g0dkar)

--------------------

### Documentação em Português (Brasil)

[_:us: **Available in English**_](#qrcode-kotlin)

Criar QRCodes em Kotlin e Java é mais difícil do que deveria. O QRCode-Kotlin tenta trazer uma forma simples, direta e
personalizável de se criar QRCodes para o domínio da JVM, especialmente no backend.

## Vantagens do QRCode-Kotlin

* **Kotlin Puro:** Reimplementação em puro Kotlin a partir da implementação de referência da especificação do QRCode
  por [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Leve:** Sem dependencias, `~42KB` e faz exatamente o que promete fazer.
* **Fácil de usar:** Instancie um objeto, chame um método e pronto :)
* **Compacta:** Não adiciona nenhum "inchaço" como quando se usa bibliotecas como a Google ZXing (que fazem bem mais que
  gerar QRCodes)
* **Saída Personalizada:** Quer um QRCode colorido? Nós temos!
* **Amigável aos Servidores:** Esta não é uma biblioteca para aplicações Mobile. Esta biblioteca foi pensada por devs
  backend para devs backend.

## Instalação

Esta biblioteca está disponível a partir da [Central Maven](https://search.maven.org/artifact/io.github.g0dkar/qrcode-kotlin/1.1.0/qrcode-kotlin),
então basta adicionar o `QRCode-Kotlin` a seu projeto como qualquer outra dependência:

**Se você utiliza Maven - pom.xml:**

```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin</artifactId>
    <version>1.1.0</version>
</dependency>
```

**Se você utiliza Gradle:**

```groovy
// Kotlin ❤️
implementation("io.github.g0dkar:qrcode-kotlin:1.1.0")

// Groovy
implementation 'io.github.g0dkar:qrcode-kotlin:1.1.0'
```

## Exemplos e Usos

Aqui estão alguns exemplos de como utilizar a biblioteca para se ter alguns resultados bacanas. Se você tiver interesse
em usos mais avançados ou QRCodes mais sofisticados, por favor leia a documentação :)

### Apenas um QRCode simples, nada demais:

Para gerar um QRCode simples:

```kotlin
val dadosImagem = QRCode("https://github.com/g0dkar/qrcode-kotlin").render()

// Salvar como um arquivo PNG:
ImageIO.write(dadosImagem, "PNG", File("exemplo01.png"))
```

O mesmo que o código acima, em Java:

```java
BufferedImage dadosImagem = new QRCode("https://github.com/g0dkar/qrcode-kotlin").render();

// Salvar como um arquivo PNG:
ImageIO.write(dadosImagem, "PNG", new File("exemplo01-java.png"));
```

### Um QRCode, mas maior

A função `render()` pode receber o parâmetro `cellSize` para ajustar o tamanho do QRCode resultante. Este parâmetro
representa o tamanho em pixels de cada quadrado no QRCode resultante. Seu valor padrão é `25`:

```kotlin
val dadosImagem = QRCode("https://github.com/g0dkar/qrcode-kotlin").render(cellSize = 50)

ImageIO.write(dadosImagem, "PNG", File("exemplo02.png"))
```

Em Java:

```java
BufferedImage dadosImagem = new QRCode("https://github.com/g0dkar/qrcode-kotlin").render(50);

ImageIO.write(dadosImagem, "PNG", new File("exemplo02-java.png"));
```

### Igual ao Google ZXing!

No momento da escrita desta documentação, a [biblioteca Google ZXing](https://github.com/zxing/zxing) é amplamente
utilizada para se gerar QRCodes. Seus resultados normalmente incluem uma "borda" _(também chamada de "margem")_ ao redor
do QRCode, geralmente com 1 célula de tamanho. A função `render()` também pode receber um parâmetro `margin` com a
quantidade de pixels que queremos ter como margem ao redor do QRCode. **Por padrão, o parâmetro `margin` é igual a `0`
.**

Para se ter um desses QRCodes bem espaçados, tente fazer o seguinte:

```kotlin
val tamanhoCelula = 30 // pixels
val dadosImagem = QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(tamanhoCelula, margin = tamanhoCelula)

ImageIO.write(dadosImagem, "PNG", File("exemplo03.png"))
```

Em Java:

```java
int tamanhoCelula = 30; // pixels
BufferedImage dadosImagem = new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(tamanhoCelula, tamanhoCelula);

ImageIO.write(dadosImagem, "PNG", new File("exemplo03-java.png"));
```

### Um toque de Cor

Quer um QRCode colorido? Fácil, fácil! A Função `render()` também tem os parâmetros `brightColor`, `darkColor` e
`marginColor` para isso. Seus valores padrão são para quadrados Preto-e-Branco com uma margem Branca. Esses são simples
e (bem) velhos valores `java.awt.Color` no espaço RGBA.

Por diversão, este código cria um QRCode com as cores do Modo Escuro do GitHub:

```kotlin
val fundo = Color(13, 17, 23)
val principal = Color(139, 148, 158)

val dadosImagem = QRCode("https://github.com/g0dkar/qrcode-kotlin").render(
    brightColor = fundo,   // Fundo
    darkColor = principal, // Primeiro Plano (ou "os quadrados")
    marginColor = fundo    // Margem (ignorado pois margem = 0)
)

ImageIO.write(dadosImagem, "PNG", File("exemplo04.png"))
```

Em Java:

```java
Color fundo = new Color(13, 17, 23);
Color principal = new Color(139, 148, 158);

QRCode qrCode = new QRCode("https://github.com/g0dkar/qrcode-kotlin");
BufferedImage dadosImagem = qrCode.render(25, 0, qrCode.encode(), fundo, principal, fundo);

ImageIO.write(dadosImagem, "PNG", new File("exemplo04-java.png"));
```

### Spring Framework e/ou Spring Boot

Uma das razões principais que desenvolvi essa biblioteca foi para utilizá-la em uma API Spring Boot que necessitava
gerar QRCodes, então é apenas natural mostrar como se fazer isso :)

```kotlin
import org.springframework.core.io.ByteArrayResource
import org.springframework.http.HttpHeaders.CONTENT_DISPOSITION
import org.springframework.http.MediaType.IMAGE_PNG_VALUE

@GetMapping("/qrcode")
fun generateQrCode(content: String): ResponseEntity<ByteArrayResource> {
    val imageData = QRCode(content).render()
    val imageBytes = ByteArrayOutputStream().also { ImageIO.write(imageData, "PNG", it) }.toByteArray()
    val resource = ByteArrayResource(imageBytes, IMAGE_PNG_VALUE)

    return ResponseEntity.ok()
        .header(CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(resource)
}
```

## Licença

Direito Autoral 2021 Rafael M. Lins, Licenciado pela [Licença MIT (texto em inglês)](LICENSE).

QR Code é marca registrada de Denso Wave, inc.

## Suporte e Links

* Se encontrou bugs, por
  favor [abra uma Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=)
  😁
* Tem sugestões?
  Você [pode fazê-las](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=)
  também!

Se curtiu a biblioteca e quiser me pagar um café, utilize o botão abaixo :love_you_gesture:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg "Buy me a coffee over at Ko-fi!")](https://ko-fi.com/g0dkar)
