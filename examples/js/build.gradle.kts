plugins {
    kotlin("js") version "1.7.22"
}

repositories {
    mavenCentral()
    mavenLocal()
}

dependencies {
    implementation("io.github.g0dkar:qrcode-kotlin-js:3.3.1")
}

kotlin {
    js {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled = true
                }
            }
        }
    }
}
