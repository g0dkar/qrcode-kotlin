plugins {
    kotlin("jvm") version "1.6.10"
}

repositories {
    mavenCentral()
    mavenLocal()
}

dependencies {
    implementation("io.github.g0dkar:qrcode-kotlin-jvm:3.2.0")
    implementation("org.jfree:org.jfree.svg:5.0.3")
    // implementation("org.apache.xmlgraphics:batik-svggen:1.14")
    // implementation("org.apache.xmlgraphics:batik-dom:1.14")
}
