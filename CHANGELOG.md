[![License](https://img.shields.io/github/license/g0dkar/qrcode-kotlin)](LICENSE)
[![Maven Central](https://img.shields.io/maven-central/v/io.github.g0dkar/qrcode-kotlin.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22io.github.g0dkar%22%20AND%20a:%22qrcode-kotlin%22)

# Change Log

> Mostly notable changes from version to version. Some stuff might go undocumented. If you find something that you think
> should be documented, please open an [issue](https://github.com/g0dkar/qrcode-kotlin/issues) :)

## 4.3.0 - Latest

- Fixed an issue with `4.2.1` and iOS/macOS targets (thanks [Manuel149Br](https://github.com/Manuel149Br)!)
- Added options to fine tune the Information Density parameter:
    - `withMinimumInformationDensity()` is now `withInformationDensity()`: Manually setting the Information Density
      parameter will **force the use of the Information Density specified**.
    - **NEW** `forceInformationDensity()`: Force the use of the current Information Density value. Default is `false`.
      If this is `false`, an adequate information density will be computed from the amount of data to be encoded and the
      Error Correction Level to apply.\
      :warning: **Calling `withInformationDensity()` automatically sets this to `true`!** To replicate the old behaviour
      of using the specified Information Density as the minimum density allowed, first call
      `withInformationDensity(...)` followed by `forceInformationDensity(false)`.
    - :sirene: **If the data is too large for the information density value you chose, an `IllegalArgumentException`
      will be thrown.**
- Moved `QRCodeShapesEnum` to be its own `enum` instead of being an inner element of `QRCodeBuilder`.

## 4.2.1

- Fixed issue with the Error Correction being ignored (thanks [slaha](https://github.com/slaha)!)
- Updated libs versions
- **Only for project devs:** fixed the pipeline issues with running tests for PRs.
- **Investigating:** Issues with very large payloads being encoded

## 4.1.0

- Another round of improvements and fixes (special thanks to [ruicanas](https://github.com/ruicanas)
  and [chphmh](https://github.com/chphmh)!)
- Changed the minimal requirements for the library:
    - Reduced the minSdk API Version of the Android implementation to `7` (down from `23`)
        - In theory, it can go down to `1` but all API Versions below 7 are considered deprecated.
    - Reduced the Java compilation target to `11` (down from `17`)

## 4.0.7

- A bunch of improvements and optimizations (minor changes from the rework)
- MAJOR thanks to [ruicanas](https://github.com/ruicanas) for fixing and improving the iOS implementation!

## 4.0.0

- A major rework of the `QRCode` class to allow for easy creation of nice looking QRCodes
- Added the first version of the iOS Support
- Changed the base package of the classes from `io.github.g0dkar.qrcode` to `qrcode`
    - This was done to better support JavaScript
      ß- And because I don't really see much use in those Java-ish package names 😅

## 3.3.0

- Started doing the Changelog 🥲
- Added plain release files to the [release](release) directory (only the latest version will be there)
- Added JavaScript (Browser) into Multiplatform support
    - Added Browser JS QRCode Generation example ([link](examples/js/qrcode-example.html))
    - **Still needs some improvements** on how people use it, but it is a step in the right direction
    - **Help in this regard is much appreciated!** If interested, this is in the domain of Developer Experience, aka
      DevX/DX
- Changed uses of `Collection`s to `Array`s instead to try and be more performant and have a smaller library as a result
- **WIP:** Started work on Native targets (Windows, Linux, macOS, iOS)
