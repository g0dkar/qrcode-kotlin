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

rootProject.name = "qrcode-kotlin-examples"

// Kotlin Examples
include("kotlin")

// Java 1.8+ Examples
include("java")

// Android Example
include("android")
