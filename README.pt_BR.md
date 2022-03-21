# [QRCode-Kotlin](https://github.com/g0dkar/qrcode-kotlin)

[![Licença](https://img.shields.io/github/license/g0dkar/qrcode-kotlin)](LICENSE)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.g0dkar/qrcode-kotlin.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22io.github.g0dkar%22%20AND%20a:%22qrcode-kotlin%22)
[![Mande uma Mensagem de Agradecimento](https://img.shields.io/badge/Mande%20uma-Mensagem%20de%20Agradecimento-green)](https://saythanks.io/to/g0dkar)

❤️️ [_**Available in English**_](README.md) 💙

Criar QRCodes em Kotlin e Java é mais difícil do que deveria. O QRCode-Kotlin tenta trazer uma forma simples, direta e
personalizável de se criar QRCodes para o domínio da JVM, especialmente no backend.

## Sumário

<!-- toc -->
- [Vantagens do QRCode-Kotlin](#vantagens-do-qrcode-kotlin)
- [Instalação](#instalao)
- [Exemplos e Usos](#exemplos-e-usos)
  - [Apenas um QRCode simples, nada de mais](#apenas-um-qrcode-simples-nada-de-mais)
  - [Um QRCode, mas maior](#um-qrcode-mas-maior)
  - [Igual ao Google ZXing!](#igual-ao-google-zxing)
  - [Um toque de Cor](#um-toque-de-cor)
  - [Especificando seu próprio tipo de dados](#especificando-seu-prprio-tipo-de-dados)
  - [Spring Framework e/ou Spring Boot](#spring-framework-eou-spring-boot)
- [Licença](#licena)
- [Agradecimentos e Reconhecimentos](#agradecimentos-e-reconhecimentos)
- [Suporte e Links](#suporte-e-links)
<!-- /toc -->

## Vantagens do QRCode-Kotlin

* **Kotlin Puro:** Reimplementação em puro Kotlin a partir da implementação de referência da especificação do QRCode
  por [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Leve:** Sem dependencias*, `~65KB` e faz exatamente o que promete fazer.
* **Fácil de usar:** Instancie um objeto, chame um método e pronto :)
* **Compacta:** Não adiciona nenhum "inchaço" como quando se usa bibliotecas como a Google ZXing (que fazem bem mais que
  gerar QRCodes)
* **Saída Personalizada:** Quer um QRCode colorido? Nós temos!
* **Amigável aos Servidores:** Esta não é uma biblioteca para aplicações Mobile. Esta biblioteca foi pensada por devs
  backend para devs backend.

>\* Bom, exceto talvez a `org.jetbrains.kotlin:kotlin-stdlib-jdk8` se você estiver usando Java...

## Instalação

Esta biblioteca está disponível a partir da [Central Maven](https://search.maven.org/artifact/io.github.g0dkar/qrcode-kotlin/2.0.0/qrcode-kotlin),
então basta adicionar o `QRCode-Kotlin` a seu projeto como qualquer outra dependência:

![novo na v3.0.0](https://img.shields.io/badge/novo!-v3.0.0-critical)
>**Agora esta é uma biblioteca Multiplataforma:** A partir da versão `3.0.0` esta biblioteca tornou-se uma biblioteca
> Kotlin Multiplataforma. Para você que utiliza a biblioteca, esperamos que a única mudança notável seja que agora é
> necessário especificar `qrcode-kotlin-jvm` ou `qrcode-kotlin-android` como a dependência.

**Se você utiliza Maven - pom.xml:**

```xml
<!-- Use essa para aplicações normais -->
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-jvm</artifactId>
    <version>3.0.0</version>
</dependency>



<!-- Ou essa se for um app Android 👀 -->
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-android</artifactId>
    <version>3.0.0</version>
</dependency>
```

**Se você utiliza Gradle:**

```groovy
// Kotlin ❤️
// Use essa para aplicações normais
implementation("io.github.g0dkar:qrcode-kotlin-jvm:3.0.0")
// Ou essa se for um app Android 👀
implementation("io.github.g0dkar:qrcode-kotlin-android:3.0.0")



// Groovy
// Use essa para aplicações normais
implementation 'io.github.g0dkar:qrcode-kotlin-jvm:3.0.0'
// Ou essa se for um app Android 👀
implementation 'io.github.g0dkar:qrcode-kotlin-android:3.0.0'
```

## Exemplos e Usos

Aqui estão alguns exemplos de como utilizar a biblioteca para se ter alguns resultados bacanas. Se tiver interesse
em usos mais avançados ou QRCodes mais sofisticados, por favor leia a [documentação](docs) :)

>Também lembre de checar a pasta de [exemplos](examples) para ver códigos em Kotlin e Java, e os QRCodes resultantes!

### Apenas um QRCode simples, nada de mais

Para gerar um QRCode simples:

```kotlin
// Por padrão, o método writeImage() escreve PNGs
val fileOut = FileOutputStream("example01.png")

QRCode("https://github.com/g0dkar/qrcode-kotlin").render().writeImage(fileOut)
```

O mesmo que o código acima, em Java:

```java
// By default, the writeImage() method outputs PNGs
FileOutputStream fileOut = new FileOutputStream("example01-java.png");

new QRCode("https://github.com/g0dkar/qrcode-kotlin").render().writeImage(fileOut);
```

### Um QRCode, mas maior

A função `render()` pode receber o parâmetro `cellSize` para ajustar o tamanho do QRCode resultante. Este parâmetro
representa o tamanho em pixels de cada quadrado no QRCode resultante. Seu valor padrão é `25`:

```kotlin
val fileOut = FileOutputStream("example02.png")

QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(cellSize = 50)
    .writeImage(fileOut)
```

Em Java:

```java
FileOutputStream fileOut = new FileOutputStream("example02-java.png");

new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(50)
    .writeImage(fileOut);
```

### Igual ao Google ZXing!

No momento da escrita desta documentação, a [biblioteca Google ZXing](https://github.com/zxing/zxing) é amplamente
utilizada para se gerar QRCodes. Seus resultados normalmente incluem uma "borda" _(também chamada de "margem")_ ao redor
do QRCode, geralmente com 1 célula de tamanho. A função `render()` também pode receber um parâmetro `margin` com a
quantidade de pixels que queremos ter como margem ao redor do QRCode. **Por padrão, o parâmetro `margin` é igual a `0`
.**

Para se ter um desses QRCodes bem espaçados, tente fazer o seguinte:

```kotlin
val fileOut = FileOutputStream("example03.png")
val cellSize = 30 // pixels

QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(cellSize, margin = cellSize)
    .writeImage(fileOut)
```

Em Java:

```java
FileOutputStream fileOut = new FileOutputStream("example03-java.png");
int cellSize = 30; // pixels

new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(cellSize, cellSize);
    .writeImage(fileOut);
```

### Um toque de Cor

![novo na v2.0.0](https://img.shields.io/badge/novo!-v2.0.0-critical)

Quer um QRCode colorido? Fácil, fácil! A Função `render()` também tem os parâmetros `brightColor`, `darkColor` e
`marginColor` para isso. Seus valores padrão são para quadrados Preto-e-Branco com uma margem Branca. Esses são simples
e (bem) velhos valores `java.awt.Color` no espaço RGBA.

Por diversão, este código cria um QRCode com as cores do Modo Escuro do GitHub:

```kotlin
import io.github.g0dkar.qrcode.render.Colors

val background = Colors.css("#8b949e")
val foreground = Colors.css("#0d1117")
val fileOut = FileOutputStream("example03.png")

QRCode("https://github.com/g0dkar/qrcode-kotlin").render(
    brightColor = background, // Background
    darkColor = foreground,   // Foreground (aka the "black squares")
    marginColor = background  // Margin (ignored since margin = 0)
).writeImage(fileOut)
```

Em Java:

```java
import java.awt.Color;

Color background = new Color(13, 17, 23);
Color foreground = new Color(139, 148, 158);
FileOutputStream fileOut = new FileOutputStream("example04-java.png");

new QRCode("https://github.com/g0dkar/qrcode-kotlin")
    .render(25, 0, background.getRGB(), foreground.getRGB(), background.getRGB())
    .writeImage(fileOut);
```

### Especificando seu próprio tipo de dados

Se você não quer depender da lógica básica de identificação de tipo de dado implementada pela biblioteca, você pode
especificar qual o tipo de dado da string de entrada. Você pode passar essa informação pelo parâmetro `dataType` no
construtor da classe `QRCode` dessa forma:

```kotlin
// Cria um QRCode do tipo "String" ao invés do tipo "Número" (que seria identificado automaticamente)
QRCode("42", dataType = QRCodeDataType.DEFAULT)
```

### Spring Framework e/ou Spring Boot

Uma das razões principais que desenvolvi essa biblioteca foi para utilizá-la numa API Spring Boot que necessitava
gerar QRCodes, então é apenas natural mostrar como se fazer isso :)

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

## Licença

Direito Autoral 2021 Rafael M. Lins, Licenciado pela [Licença MIT (texto em inglês)](LICENSE).

QR Code é marca registrada de Denso Wave, inc.

## Agradecimentos e Reconhecimentos

* [Kazuhiko Arase](https://github.com/kazuhikoarase): Autor da implementação de referência!
* [Paul Varry](https://github.com/pvarry): Por abrir as primeiras issues no repositório e ajudar a fazer a biblioteca
  melhor para todo o mundo! :grin:
* [Renan Lukas](https://github.com/RenanLukas): Por sua amizade, paciência e ajuda com Android, Gradle e outras coisas
  durante o desenvolvimento da v2.0.0 e v3.0.0!
* [Doomsdayrs](https://github.com/Doomsdayrs): Por mostrar como a biblioteca poderia melhorar ao utilizar Kotlin
  Multiplataforma, e ajudar com a implementação do mesmo no projeto.

## Suporte e Links

* Se encontrou bugs, por
  favor [abra uma Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=)
  😁
* Tem sugestões?
  Você [pode fazê-las](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=)
  também!

Se curtiu a biblioteca e quiser me pagar um café, utilize o botão abaixo :love_you_gesture:

[<img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Me pague um café no Ko-fi!" width="200"/>](https://ko-fi.com/g0dkar)

[<img src="https://raw.githubusercontent.com/andreostrovsky/donate-with-paypal/master/blue.svg" alt="Me pague um café pelo PayPal!" width="200"/>](https://www.paypal.com/donate/?business=EFVC68BFJQWSC&no_recurring=0&item_name=Rafael+est%C3%A1+trabalhando+em+software+Open+Source+em+seu+tempo+livre.+Isso+o+ajuda+a+continuar+e+com+mais+qualidade%21&currency_code=BRL)
