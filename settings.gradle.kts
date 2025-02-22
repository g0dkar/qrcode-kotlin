dependencyResolutionManagement {
    repositories {
        mavenCentral()
        google()
        gradlePluginPortal()
        mavenLocal()
    }
}

pluginManagement {
    repositories {
        mavenCentral()
        google()
        gradlePluginPortal()
        mavenLocal()
    }
}

rootProject.name = "qrcode-kotlin"

// Examples
include("examples:kotlin", "examples:java", "examples:android")
