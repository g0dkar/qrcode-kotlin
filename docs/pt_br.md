---
layout: default
title: QRCode-Kotlin
sidebar: pt
feature_image: /assets/img/logo.png
feature_text: QRCode-Kotlin é uma biblioteca para criação de QRCodes em Kotlin e Java
---
Criar QRCodes em Kotlin e Java é mais difícil do que deveria. O QRCode-Kotlin tenta trazer uma forma simples, direta e
personalizável de se criar QRCodes para o domínio da JVM, especialmente no backend.

## Sumário

<!-- toc -->

- [Vantagens do QRCode-Kotlin](#vantagens-do-qrcode-kotlin)
- [Instalação](#instalacao)
- [Usos](#usos)
  * [Um QRCode simples](#um-qrcode-simples)
  * [Ajustando o tamanho](#ajustando-o-tamanho)
  * [QRCodes coloridos](#qrcodes-coloridos)
  * [Server-side: Spring Framework/Boot](#server-side-spring-frameworkboot)
- [Licença](#licenca)
- [Agradecimentos e Reconhecimentos](#agradecimentos-e-reconhecimentos)
- [Suporte e Links](#suporte-e-links)

<!-- tocstop -->

## Vantagens do QRCode-Kotlin

* **Kotlin Puro:** Reimplementação em puro Kotlin a partir da implementação de referência da especificação do QRCode
  por [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Leve:** Sem dependencias*, `~65KB` e faz exatamente o que promete fazer.
* **Fácil de usar:** Instancie um objeto, chame um método e pronto :)
* **Compacta:** Não adiciona nenhum "inchaço" como quando se usa bibliotecas como a Google ZXing (que fazem bem mais que
  gerar QRCodes)
* **Saída Personalizada:** Quer um QRCode colorido? Nós temos! Um arredondado? Claro! [Nosso logo](/assets/img/logo.png){:target="_blank"}
  foi construído com a [própria biblioteca](https://github.com/g0dkar/qrcode-kotlin/blob/main/examples/kotlin/src/main/kotlin/QRCodeKotlinLogo.kt) 😉
* **Amigável aos Servidores:** Esta não é uma biblioteca para aplicações Mobile. Esta biblioteca foi pensada por devs
  backend para devs backend.
* **Android é Suportado:** Agora que a biblioteca utiliza Kotlin Multiplatforma, Android é suportado nativamente!

>\* Bom, exceto talvez a `org.jetbrains.kotlin:kotlin-stdlib-jdk8` se você estiver usando Java...

## Instalação

Esta biblioteca está disponível a partir da [Central Maven](https://search.maven.org/artifact/io.github.g0dkar/qrcode-kotlin/3.1.0/qrcode-kotlin),
então basta adicionar o `QRCode-Kotlin` a seu projeto como qualquer outra dependência:

{% tabs deps %}
{% tab deps Gradle (JVM) %}
```groovy
implementation("io.github.g0dkar:qrcode-kotlin-jvm:3.1.0")
```
{% endtab %}
{% tab deps Gradle (Android) %}
```groovy
implementation("io.github.g0dkar:qrcode-kotlin-android:3.1.0")
```
{% endtab %}
{% tab deps Maven (JVM) %}
```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-jvm</artifactId>
    <version>3.1.0</version>
</dependency>
```
{% endtab %}
{% tab deps Maven (Android) %}
```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-android</artifactId>
    <version>3.1.0</version>
</dependency>
```
{% endtab %}
{% endtabs %}

## Usos

Aqui estão alguns exemplos de como utilizar a biblioteca. Se tiver interesse em usos mais avançados ou QRCodes mais
sofisticados, por favor veja os [Exemplos](/exemplos)! Também há vários [exemplos no GitHub](https://github.com/g0dkar/qrcode-kotlin/tree/main/examples).

### Um QRCode simples

Para gerar um QRCode simples:

{% tabs exemplo01 %}
{% tab exemplo01 Kotlin %}
```kotlin
// By default, the writeImage() method outputs PNGs
FileOutputStream("exemplo01.png").use {
    QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render()
        .writeImage(it)
}
```
{% endtab %}
{% tab exemplo01 Java %}
```java
// By default, the writeImage() method outputs PNGs
try (FileOutputStream fileOut = new FileOutputStream("exemplo01.png")) {
    new QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render()
        .writeImage(fileOut);
}
```
{% endtab %}
{% endtabs %}

### Ajustando o tamanho

A função `render()` pode receber o parâmetro `cellSize` para ajustar o tamanho do QRCode resultante. Este parâmetro
representa o tamanho em pixels de cada quadrado no QRCode resultante. Seu valor padrão é `25`.

Ela também aceita o parâmetro `margin` (margem) o qual é um espaço, em pixels, que será deixado ao redor do QRCode.
Seu valor padrão é `0`:

{% tabs exemplo02 %}
{% tab exemplo02 Kotlin %}
```kotlin
FileOutputStream("exemplo02.png").use {
    QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render(cellSize = 50, margin = 25)
        .writeImage(it)
}
```
{% endtab %}
{% tab exemplo02 Java %}
```java
try (FileOutputStream fileOut = new FileOutputStream("exemplo02.png")) {
    new QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render(50, 25)
        .writeImage(fileOut);
}
```
{% endtab %}
{% endtabs %}

### QRCodes coloridos

Quer um QRCode colorido? Fácil, fácil! A Função `render()` também tem os parâmetros `brightColor`, `darkColor` e
`marginColor` para isso. Os seus valores padrão são para quadrados Preto-e-Branco com uma margem Branca.

A partir da **v2.0.0** estes valores são simplesmente `Int` no espaço RGBA. Esses valores podem ser criados
facilmente se utilizando a nova classe utilitária [`Colors`](https://github.com/g0dkar/qrcode-kotlin/blob/main/src/commonMain/kotlin/io/github/g0dkar/qrcode/render/Colors.kt)
ou, se estiver na JRE, utilizando as simples e _(bastante)_ velhas classes `java.awt.Color` :)

Por diversão, este código cria um QRCode com as cores do Modo Escuro do GitHub:

{% tabs exemplo03 %}
{% tab exemplo03 Kotlin %}
```kotlin
import io.github.g0dkar.qrcode.render.Colors

val background = Colors.css("#8b949e")
val foreground = Colors.css("#0d1117")

FileOutputStream("exemplo03.png").use {
    QRCode("https://github.com/g0dkar/qrcode-kotlin").render(
        brightColor = background, // Background (fundo)
        darkColor = foreground    // Foreground (os quadrados)
    ).writeImage(it)
}
```
{% endtab %}
{% tab exemplo03 Java (JRE) %}
```java
import java.awt.Color;

Color background = new Color(13, 17, 23);
Color foreground = new Color(139, 148, 158);

try (FileOutputStream fileOut = new FileOutputStream("exemplo03.png")){
    new QRCode("https://github.com/g0dkar/qrcode-kotlin")
        .render(25, 0, background.getRGB(), foreground.getRGB())
        .writeImage(fileOut);
}
```
{% endtab %}
{% endtabs %}

### Server-side: Spring Framework/Boot

Uma das razões principais que desenvolvi essa biblioteca foi para utilizá-la numa API Spring Boot que necessitava
gerar QRCodes, então é apenas natural mostrar como se fazer isso :)

{% tabs exemplo04 %}
{% tab exemplo04 Kotlin %}
```kotlin
import org.springframework.core.io.ByteArrayResource
import org.springframework.http.HttpHeaders.CONTENT_DISPOSITION
import org.springframework.http.MediaType.IMAGE_PNG_VALUE

@GetMapping("/qrcode")
fun gerarQrCode(conteudoQrCode: String): ResponseEntity<ByteArrayResource> {
    val dadosImagem = ByteArrayOutputStream()

    QRCode(conteudoQrCode).render().writeImage(dadosImagem)

    val bytesImagem = dadosImagem.toByteArray()
    val corpoResposta = ByteArrayResource(bytesImagem, IMAGE_PNG_VALUE)

    return ResponseEntity.ok()
        .header(CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(corpoResposta)
}
```
{% endtab %}
{% tab exemplo04 Java %}
```java
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders.CONTENT_DISPOSITION;
import org.springframework.http.MediaType.IMAGE_PNG_VALUE;

@GetMapping("/qrcode")
public ResponseEntity<ByteArrayResource> gerarQrCode(String conteudoQrCode) {
    ByteArrayOutputStream dadosImagem = new ByteArrayOutputStream();

    new QRCode(conteudoQrCode).render().writeImage(dadosImagem);

    return ResponseEntity.ok()
        .header(CONTENT_DISPOSITION, "attachment; filename=\"qrcode.png\"")
        .body(new ByteArrayResource(dadosImagem.toByteArray(), IMAGE_PNG_VALUE))
}
```
{% endtab %}
{% endtabs %}

## Licença

Direito Autoral desde 2021 Rafael M. Lins, Licenciado pela [Licença MIT (texto em inglês)](https://rafaellins.mit-license.org/2021/).

QR Code é marca registrada de Denso Wave, inc.

## Agradecimentos e Reconhecimentos

* [Kazuhiko Arase](https://github.com/kazuhikoarase): Autor da implementação de referência!
* [Paul Varry](https://github.com/pvarry): Por abrir as primeiras issues no repositório e ajudar a fazer a biblioteca
  melhor para todo o mundo! 😁
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

Se curtiu a biblioteca e quiser pagar-me um café, utilize um dos botões abaixo ✌️
