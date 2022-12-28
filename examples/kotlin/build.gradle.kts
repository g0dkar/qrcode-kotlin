plugins {
    kotlin("jvm") version "1.7.22"
}

repositories {
    mavenCentral()
    mavenLocal()
}

dependencies {
    implementation("io.github.g0dkar:qrcode-kotlin-jvm:3.3.1")
    implementation("org.jfree:org.jfree.svg:5.0.3")
}
