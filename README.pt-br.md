# QRCode-Kotlin

[![License](https://img.shields.io/github/license/g0dkar/qrcode-kotlin)](LICENSE)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.g0dkar/qrcode-kotlin.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22io.github.g0dkar%22%20AND%20a:%22qrcode-kotlin%22)

:uk: [_**Also available in English**_](README.pt-br.md) :uk:

![QRCode Kotlin Logo](examples/kotlin/project-banner.png)

Criar QRCodes em Kotlin (e Java) é mais difícil do que deveria ser. **A QRCode-Kotlin tenta trazer uma forma
personalizável, simples e direta de se criar QRCodes**, especialmente no backend.

É com esta missão em mente que continuamos a fazer o nosso melhor para aprender como pessoas desenvolvedoras utilizam
essa biblioteca nos seus projetos e quais os seus objetivos, para podermos prover uma ferramenta/API melhor para todos.
Por favor, sinta-se livre para compartilhar se e como você utiliza este projeto ^^

* **Puro Kotlin:** Reescrita em puro Kotlin de uma implementação de referência da spec QRCode
  por [Kazuhiko Arase](https://github.com/kazuhikoarase/qrcode-generator)
* **Leve:** Sem dependencias, `~115KB` e faz o que promete no rótulo.
* **Fácil de usar:** Rápida e facilmente tenha QRCodes com pouquíssimas linhas de código.
* **Bonito:** Muitas pessoas desenvolvedoras não têm tempo e às vezes conhecimento para implementar o QRCode perfeito,
  por isso esta biblioteca tenta gerar códigos bonitos por padrão.
* **Amigável aos servidores:** A versão da JVM é fortemente focada em um caso de uso pessoal onde eu precisei criar
  QRCodes no backend, mas todas as bibliotecas que encontrei eram complexas ou enormes, normalmente os dois.
* **Multiplatforma:** Esta é uma bilioteca KMP com suporte a Java, JavaScript, Android, iOS e tvOS.

## Sumário

<!-- TOC -->
* [Instalação](#instalação)
* [Uso](#uso)
  * [Spring Framework e/ou Spring Boot](#spring-framework-eou-spring-boot)
* [Mudanças da v3](#mudanças-da-v3)
* [Licença](#licença)
* [Agradecimentos e Reconhecimentos](#agradecimentos-e-reconhecimentos)
* [Suporte e Links](#suporte-e-links)
<!-- TOC -->

## Instalação

A biblioteca está disponível através
da [Maven Central](https://search.maven.org/artifact/io.github.g0dkar/qrcode-kotlin/4.4.1/qrcode-kotlin) e
do [NPM JS](https://www.npmjs.com/package/qrcode-kotlin), portanto basta adicioná-la a seu projeto como qualquer outra:

**Gradle:**

```groovy
// Use esse tanto para Android quanto para a JVM
implementation("io.github.g0dkar:qrcode-kotlin:4.2.1")
```

**Maven - JVM:**

```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-jvm</artifactId>
    <version>4.2.1</version>
</dependency>
```

**Maven - Android:**

```xml
<dependency>
    <groupId>io.github.g0dkar</groupId>
    <artifactId>qrcode-kotlin-android</artifactId>
    <version>4.2.1</version>
</dependency>
```

**NodeJS:**

```shell
npm install qrcode-kotlin@4.2.1
```

**Browser:**

```html
<script src="https://cdn.jsdelivr.net/gh/g0dkar/qrcode-kotlin@main/release/qrcode-kotlin.min.js" type="application/javascript"></script>
```

## Uso

Para criar QRCodes, a principal classe que deve ser usada é a `qrcode.render.QRCode`. Ela tem métodos estáticos para
ajudar na criação de um QRCode da forma que você quiser:

```kotlin
// Use qualquer um desses:

val quadrados = QRCode.ofSquares()

val circulos = QRCode.ofCircles()

val quadradosArredondados = QRCode.ofRoundedSquares()
```

Com isso, você terá uma instância de [QRCodeBuilder](src/commonMain/kotlin/qrcode/QRCodeBuilder.kt). Esta classe tem
métodos para ajustar cores, tamanho, espaçamento, adicionar um logo e mais! Certifique-se de ver também a
classe [Colors](src/commonMain/kotlin/qrcode/color/Colors.kt).

Aqui tem um código para ajudar você a começar:

```kotlin
val helloWorld = QRCode.ofSquares()
    .withColor(Colors.DEEP_SKY_BLUE) // Padrão é Colors.BLACK
    .withSize(10) // Padrão é 25px
    .build("Hello world!")

// Por padrão, os QRCodes serão gerados como PNG
val pngBytes = helloWorld.render()

FileOutputStream("hello-world.png").use { it.write(pngBytes) }
```

Recomendamos fortemente que você veja os exemplos disponíveis:

* [Todas as formas](examples/kotlin/src/main/kotlin/Example01-Shapes.kt): Quadrados, Círculos, Quadrados Arredondados e
  formas personalizadas
* [Tudo sobre cores](examples/kotlin/src/main/kotlin/Example02-Colors.kt): Frente, Fundo, Fundos transparentes, cores em
  Gradiente Linear
* [Adicionando um Logo](examples/kotlin/src/main/kotlin/Example03-Logo.kt): Adicione um logo e remova as células atrás
  dele, ou não :)
* [QRCodes em SVG](examples/kotlin/src/main/kotlin/Example04-SVG.kt): Como estender o renderizador para criar SVG (utilizando [JFree SVG](https://github.com/jfree/jfreesvg))
* [O banner no topo deste README](examples/kotlin/src/main/kotlin/ProjectLogo.kt): Sim, feito com essa biblioteca ^^

Os exemplos mostram praticamente tudo que pode ser feito com a biblioteca! Até mesmo como estender a mesma para criar
QRCodes em SVG ;)

Você pode utilizar todas essas funcionalidades juntas e misturadas. Tente gerar o logo e banner com gradientes e tudo
mais em SVG ;)

### Spring Framework e/ou Spring Boot

Como dito anteriormente, uma das razões principais para o desenvolvimento dessa biblioteca foi para ser usada em
aplicações backend. Portanto, é natural mostrar como fazer exatamente isso :)

Este método de um controller do Spring Framework/Boot mostra como gerar QRCodes dado o conteúdo do mesmo:

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

## Mudanças da v3

As principais mudanças vindo da versão `v3.3.0` são:

1. O pacote principal das classes foi mudado de `io.github.g0dkar.qrcode` para simplesmente `qrcode`
    * O nome anterior não ajuda linguagens que não têm esse conceito de "pacote", e outras bibliotecas Kotlin já nomeiam
      os seus pacotes principais dessa forma.
2. A antiga classe `QRCode` foi reescrita para ser mais fácil de se criar QRCodes mais bonitos. A antiga classe `QRCode`
   foi renomeada para [QRCodeProcessor](src/commonMain/kotlin/qrcode/raw/QRCodeProcessor.kt), com pouquíssimas mudanças na API.
    * **Para a maioria dos casos de uso simples, a nova `QRCode` é compatível com a antiga!**
3. Uma grande quantidade de otimizações em como o QRCode é desenhado. Anteriormente, tínhamos um canvas (ecrã) para cada
   quadrado, o qual era copiado no canvas do QRCode principal. Isto foi mudado para termos apenas um grande canvas onde
   cada quadrado individual será desenhado diretamente.
4. Suporte a iOS e tvOS: A partir da versão `v4.0.7`, uma implementação experimental inicial da classe `QRCodeGraphics`
   foi criada para que o iOS e tvOS sejam suportados. **Todo e
   qualquer [feedback](https://github.com/g0dkar/qrcode-kotlin/issues/85) é muito bem-vindo!** (pode comentar em
   português mesmo) - Um imenso agradecimento a [ruicanas](https://github.com/ruicanas) por suas contribuições a essa
   feature :D

## Licença

Copyright desde 2021 Rafael M. Lins, Licenciado sob a [Licença MIT](https://rafaellins.mit-license.org/2021/).

QR Code é marca registrada de Denso Wave, Inc.

## Agradecimentos e Reconhecimentos

* [Kazuhiko Arase](https://github.com/kazuhikoarase): Por sua implementação de referência!
* [Paul Varry](https://github.com/pvarry): Por abrir as primeiras _issues_ do repositório e ajudar a fazer a biblioteca melhor para todo mundo! :grin:
* [Renan Lukas](https://github.com/RenanLukas): Por sua amizade, paciência e ajuda com Android, Gradle e várias outras coisas mais durante o desenvolvimento das versões v2.0.0 e v3.0.0!
* [Doomsdayrs](https://github.com/Doomsdayrs): Por apontar como a biblioteca podería melhorar se tornando um projeto KMP, entre outras contribuições.
* Um incrível e peludo amigo por todo o suporte através dos anos :)
* [ruicanas](https://github.com/ruicanas): Por não apenas apontar problemas com a implementação iOS, mas resolvê-los
  também! Muito obrigado ^^

## Suporte e Links

* Se você encontrar algum bug, sinta-se livre
  para [abrir uma Issue](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=g0dkar&labels=bug&template=bug_report.md&title=)
* Tem sugestões? Você
  pode [fazê-las](https://github.com/g0dkar/qrcode-kotlin/issues/new?assignees=&labels=&template=feature_request.md&title=)
  também!

Se você gostou da biblioteca e quiser ajudar pagando um cafézinho, use os botões abaixo :love_you_gesture:

[<img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Me pague um cafézinho via Ko-fi!" width="200"/>](https://ko-fi.com/g0dkar)

[<img src="https://raw.githubusercontent.com/andreostrovsky/donate-with-paypal/master/blue.svg" alt="Me pague um cafézinho via PayPal!" width="200"/>](https://www.paypal.com/donate/?business=EFVC68BFJQWSC&no_recurring=0&item_name=Rafael+is+working+on+Open+Source+software+in+his+free+time.+This+helps+him+keep+this+up+for+longer%2C+and+with+higher+quality%21&currency_code=BRL)
