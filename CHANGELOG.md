[![License](https://img.shields.io/github/license/g0dkar/qrcode-kotlin)](LICENSE)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.g0dkar/qrcode-kotlin.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22io.github.g0dkar%22%20AND%20a:%22qrcode-kotlin%22)
[![ktlint](https://img.shields.io/badge/code%20style-%E2%9D%A4-FF4081.svg)](https://ktlint.github.io/)

# Change Log

> Mostly notable changes from version to version. Some stuff might go undocumented. If you find something that you think
> should be documented, please open an [issue](https://github.com/g0dkar/qrcode-kotlin/issues) :)

## 3.3.0 - Latest

- Started doing the Changelog 🥲
- Added plain release files to the [release](release) directory (only the latest version will be there)
- Added JavaScript (Browser) into Multiplatform support
    - Added Browser JS QRCode Generation example ([link](examples/js/qrcode-example.html))
    - **Still needs some improvements** on how people use it, but it is a step in the right direction
    - **Help in this regard is much appreciated!** If interested, this is in the domain of Developer Experience, aka
      DevX/DX
- Changed uses of `Collection`s to `Array`s instead to try and be more performant and have a smaller library as a result
- **WIP:** Started work on Native targets (Windows, Linux, macOS, iOS)