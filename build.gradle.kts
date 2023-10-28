import com.github.gradle.node.npm.task.NpxTask
import org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
import org.gradle.api.tasks.testing.logging.TestLogEvent.FAILED
import org.gradle.api.tasks.testing.logging.TestLogEvent.PASSED
import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig.Mode.PRODUCTION

buildscript {
    dependencies {
        classpath(libs.kotlin.gradle.plugin)
    }
}

plugins {
    // Dev Plugins
    id("idea")
    alias(libs.plugins.spotless)

    // Base Plugins
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.android.library)

    // Kotest
    alias(libs.plugins.kotest.multiplatform)

    // Publishing Plugins
    signing
    `maven-publish`
    alias(libs.plugins.nexus)
    alias(libs.plugins.nodejs)

    // Docs Plugins
    alias(libs.plugins.dokka)
}

repositories {
    mavenCentral()
    google()
}

group = "io.github.g0dkar"
version = "3.4.0"
val javaVersion = 11

kotlin {
    jvm {
        jvmToolchain(javaVersion)
        testRuns.named("test") {
            executionTask.configure {
                useJUnitPlatform()
            }
        }
    }

    androidTarget {
        jvmToolchain(javaVersion)
        publishLibraryVariants("release")
    }

    js {
        compilations.all {
            kotlinOptions {
                main = "noCall"
            }
        }

        browser {
            commonWebpackConfig {
                mode = PRODUCTION
                sourceMaps = true
            }

            testTask {
                enabled = false
            }

            binaries.library()
        }
    }

    // ios()

    sourceSets {
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
                implementation(libs.kotest.assertions.core)
                implementation(libs.kotest.framework.engine)
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation(libs.kotest.runner.junit5)
            }
        }
    }
}

android {
    namespace = "io.github.g0dkar.qrcode"
    compileSdk = 32
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")

    defaultConfig {
        minSdk = 24
        targetSdk = 32
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

/**
 * Kotest Configuration
 */
tasks {
    named<Test>("jvmTest") {
        useJUnitPlatform()
        filter {
            isFailOnNoMatchingTests = false
        }

        testLogging {
            showExceptions = true
            showStandardStreams = true
            events = setOf(FAILED, PASSED)
            exceptionFormat = FULL
        }
    }
}

/* *********************** */
/* After Build Publishing  */
/* *********************** */
tasks {
    register<NpxTask>("minifyReleaseJS") {
        val baseFile = layout.buildDirectory.file("productionLibrary/qrcode-kotlin.js").get().asFile.path
        val minFile = layout.buildDirectory.file("productionLibrary/qrcode-kotlin.min.js").get().asFile.path
        val cmdArgs = listOf(
            baseFile,
            "--compress",
            "--mangle",
            "--timings",
            "--keep-classnames",
            "--keep-fnames",
            "--source-map",
            "--output",
            minFile
        )

        command.set("terser")
        args.set(cmdArgs)
    }

    /** Copies release files into /release dir */
    register<Copy>("copyToReleaseDir") {
        doFirst {
            layout.projectDirectory.dir("release").asFile.deleteRecursively()
        }

        from(layout.buildDirectory.file("libs/qrcode-kotlin-jvm-$version.jar"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.d.ts"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.js"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.js.map"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.min.js"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.min.js.map"))
        into(layout.projectDirectory.dir("release"))
    }
}

node {
    val nodejsVersion = libs.versions.nodejs.getOrElse("16.14.0")

    download.set(true)
    version.set(nodejsVersion)
    allowInsecureProtocol.set(false)
    nodeProjectDir.set(layout.buildDirectory.dir("tmp"))
}

/* **************** */
/* Dev Environment  */
/* **************** */
idea {
    module {
        isDownloadJavadoc = false
        isDownloadSources = true
    }
}

/* **************** */
/* Docs             */
/* **************** */
tasks {
    dokkaHtml {
        outputDirectory.set(buildDir.resolve("javadoc"))

        dokkaSourceSets {
            configureEach {
                includeNonPublic.set(false)
                skipDeprecated.set(true)
                reportUndocumented.set(true)
                skipEmptyPackages.set(true)
            }
        }
    }
}

val dokkaJar by tasks.creating(Jar::class) {
    group = JavaBasePlugin.DOCUMENTATION_GROUP
    description = "Assembles Kotlin docs with Dokka"
    archiveClassifier.set("javadoc")
    from(tasks.dokkaHtml)
}

/* **************** */
/* Lint             */
/* **************** */
spotless {
    val ktlintVersion = libs.versions.ktlint.getOrElse("0.47.1")

    kotlin {
        ktlint(ktlintVersion)
    }
    kotlinGradle {
        ktlint(ktlintVersion)
    }
}

/* **************** */
/* Publishing       */
/* **************** */
val ossrhUsername = properties.getOrDefault("ossrhUsername", System.getenv("OSSRH_USER"))?.toString()
val ossrhPassword = properties.getOrDefault("ossrhPassword", System.getenv("OSSRH_PASSWORD"))?.toString()

nexusPublishing {
    // Workaround from https://github.com/gradle-nexus/publish-plugin/issues/220
    this.repositories {
        sonatype {
            nexusUrl.set(uri("https://s01.oss.sonatype.org/service/local/"))
            snapshotRepositoryUrl.set(uri("https://s01.oss.sonatype.org/content/repositories/snapshots/"))

            username.set(ossrhUsername ?: return@sonatype)
            password.set(ossrhPassword ?: return@sonatype)
        }
    }
}

publishing {
    publications {
        withType<MavenPublication> {
            artifact(dokkaJar)

            pom {
                val projectGitUrl = "github.com/g0dkar/qrcode-kotlin"

                name.set(rootProject.name)
                description.set("A Kotlin Library to generate QR Codes without any other dependencies.")
                url.set("https://$projectGitUrl")
                inceptionYear.set("2021")
                licenses {
                    license {
                        name.set("MIT")
                        url.set("https://rafaellins.mit-license.org/2021/")
                    }
                }
                developers {
                    developer {
                        id.set("g0dkar")
                        name.set("Rafael Lins")
                        email.set("rafael@lins.net.br")
                        url.set("https://github.com/g0dkar")
                    }
                }
                issueManagement {
                    system.set("GitHub")
                    url.set("https://$projectGitUrl/issues")
                }
                scm {
                    connection.set("scm:git://$projectGitUrl.git")
                    developerConnection.set("scm:git://$projectGitUrl.git")
                    url.set("https://$projectGitUrl")
                }
            }
        }
    }

    repositories {
        maven {
            name = "sonatype"
            url = uri("https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/")
            credentials {
                username = ossrhUsername
                password = ossrhPassword
            }
        }
    }
}

signing {
    val key = properties.getOrDefault("signing.key", System.getenv("SIGNING_KEY"))?.toString() ?: return@signing
    val password =
        properties.getOrDefault("signing.password", System.getenv("SIGNING_PASSWORD"))?.toString() ?: return@signing

    useInMemoryPgpKeys(key, password)
    // sign(publishing.publications)
}
