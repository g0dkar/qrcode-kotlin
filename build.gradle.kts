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

/*
 * IntelliJ is currently (2022-12-22) bugged if you use this "alias(libs...)" here on plugins.
 *
 * Solution found here: https://youtrack.jetbrains.com/issue/KTIJ-19369/False-positive-cant-be-called-in-this-context-by-implicit-receiver-with-plugins-in-Gradle-version-catalogs-as-a-TOML-file#focus=Comments-27-5860112.0-0
 */
@Suppress("DSL_SCOPE_VIOLATION")
plugins {
    // Dev Plugins
    id("idea")
    alias(libs.plugins.spotless)

    // Base Plugins
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.android.extensions)

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
version = "3.3.0"

kotlin {
    jvm {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
                freeCompilerArgs = listOf("-Xjsr305=strict", "-opt-in=kotlin.js.ExperimentalJsExport")
            }
        }
    }

    android {
        publishLibraryVariants("release")
    }

    js(IR) {
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

    val nativeArtifactName = name.replace(Regex("-(\\w)")) { it.groupValues[1].toUpperCase() }
    val hostOS = System.getProperty("os.name")
    val isMingwX64 = hostOS.startsWith("Windows")
    val nativeTarget = when {
        hostOS == "Mac OS X" -> macosX64("native") { binaries { sharedLib { baseName = nativeArtifactName } } }
        hostOS == "Linux" -> linuxX64("native") { binaries { sharedLib { baseName = nativeArtifactName } } }
        isMingwX64 -> mingwX64("native") { binaries { sharedLib { baseName = "lib$nativeArtifactName" } } }
        else -> throw GradleException("Host OS is not supported in Kotlin/Native.")
    }

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
    compileSdk = 33
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")
    defaultConfig {
        minSdk = 21
        targetSdk = 33
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
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
    val minifyReleaseJS by register<NpxTask>("minifyReleaseJS") {
        val baseFile = layout.buildDirectory.file("productionLibrary/qrcode-kotlin.js").get().asFile.path
        val minFile = layout.buildDirectory.file("productionLibrary/qrcode-kotlin.min.js").get().asFile.path
        val sourceMap = layout.buildDirectory.file("productionLibrary/qrcode-kotlin.js.map").get().asFile.path
        val argss = listOf(
            baseFile,
            "--output",
            minFile,
            "--keep-classnames",
            "--keep-fnames"
        )

        command.set("terser")
        args.set(argss)
        inputs.files(baseFile, sourceMap)
        outputs.files(minFile)
    }

    /** Copies release files into /release dir */
    register<Copy>("copyToReleaseDir") {
        doFirst {
            layout.projectDirectory.dir("release").asFile.deleteRecursively()
        }

        from(layout.buildDirectory.file("libs/qrcode-kotlin-jvm-$version.jar"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.js"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.js.map"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.d.ts"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.min.js"))
        from(layout.buildDirectory.file("productionLibrary/qrcode-kotlin.min.js.map"))
        into(layout.projectDirectory.dir("release"))
    }
}

node {
    download.set(true)
    version.set("16.14.0")
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
    repositories {
        sonatype {
            nexusUrl.set(uri("https://s01.oss.sonatype.org/service/local/"))
            snapshotRepositoryUrl.set(uri("https://s01.oss.sonatype.org/content/repositories/snapshots/"))

            username.set(ossrhUsername ?: return@sonatype)
            password.set(ossrhPassword ?: return@sonatype)
        }
    }
}

signing {
    val key = properties.getOrDefault("signingKey", System.getenv("SIGNING_KEY"))?.toString() ?: return@signing
    val password =
        properties.getOrDefault("signingPassword", System.getenv("SIGNING_PASSWORD"))?.toString() ?: return@signing

    useInMemoryPgpKeys(key, password)
    sign(publishing.publications)
}

publishing {
    publications {
        withType<MavenPublication> {
            artifact(dokkaJar)

            pom {
                val projectGitUrl = "https://github.com/g0dkar/qrcode-kotlin"

                name.set(rootProject.name)
                description.set("A Kotlin Library to generate QR Codes without any other dependencies.")
                url.set(projectGitUrl)
                inceptionYear.set("2021")
                licenses {
                    license {
                        name.set("MIT")
                        url.set("$projectGitUrl/blob/main/LICENSE")
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
                    url.set("$projectGitUrl/issues")
                }
                scm {
                    connection.set("scm:git:$projectGitUrl")
                    developerConnection.set("scm:git:$projectGitUrl")
                    url.set(projectGitUrl)
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
