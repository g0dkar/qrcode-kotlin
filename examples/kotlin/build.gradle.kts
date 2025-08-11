plugins {
    kotlin("jvm")
}

repositories {
    mavenLocal()
    mavenCentral()
}

dependencies {
    implementation(project(":"))
//    implementation("io.github.g0dkar:qrcode-kotlin:4.6.0")
    implementation("org.jfree:org.jfree.svg:5.0.7")
}
