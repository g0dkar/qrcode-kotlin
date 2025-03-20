plugins {
    kotlin("jvm")
    kotlin("plugin.spring") version "1.9.25"
    id("org.springframework.boot") version "3.4.3"
    id("io.spring.dependency-management") version "1.1.7"
}

group = "io.github.g0dkar.qrcode"
version = "1.0"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    implementation(kotlin("reflect"))

    // Spring Web
    implementation("org.springframework.boot:spring-boot-starter-web")

    // Jackson Kotlin Support
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

    // o11y
    implementation("org.springframework.boot:spring-boot-starter-actuator")

    // QRCode-Kotlin
    implementation("io.github.g0dkar:qrcode-kotlin:4.4.0")

    // Tests
    // testImplementation("org.springframework.boot:spring-boot-starter-test")
}

kotlin {
    compilerOptions {
        freeCompilerArgs.addAll("-Xjsr305=strict")
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
