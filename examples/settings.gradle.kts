pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }
}

dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
    }
}

// buildscript {
//     repositories {
//         google()
//         mavenCentral()
//     }
//
//     dependencies {
//         classpath("com.android.tools.build:gradle:7.2.1")
//     }
// }

rootProject.name = "qrcode-kotlin-examples"

// Kotlin Examples
include("kotlin")

// Java 1.8+ Examples
include("java")

// Android Example
//include("android")
