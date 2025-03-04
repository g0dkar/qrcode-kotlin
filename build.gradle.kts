import org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
import org.gradle.api.tasks.testing.logging.TestLogEvent.FAILED
import org.gradle.api.tasks.testing.logging.TestLogEvent.PASSED
import org.jetbrains.dokka.gradle.engine.parameters.VisibilityModifier
import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig.Mode.PRODUCTION
import java.time.LocalDateTime

buildscript {
    dependencies {
        classpath(libs.kotlin.gradle.plugin)
    }
}

plugins {
    // Dev Plugins
    id("idea")

    // Base Plugins
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.android.library)

    // Kotest
    alias(libs.plugins.kotest.multiplatform)

    // Publishing Plugins
    signing
    `maven-publish`
    alias(libs.plugins.nexus)
    alias(libs.plugins.npmPublish)

    // Docs Plugins
    alias(libs.plugins.dokka)

    // Here because of the Android Examples
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.kotlin.android) apply false
}

repositories {
    mavenCentral()
    google()
}

group = "io.github.g0dkar"
val javaVersion = JavaVersion.VERSION_1_8
val javaVersionNumber = javaVersion.majorVersion.toInt()

kotlin {
    applyDefaultHierarchyTemplate()

    jvmToolchain(javaVersionNumber)

    compilerOptions {
        freeCompilerArgs.add("-Xexpect-actual-classes")
    }

    jvm()

    androidTarget {
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
            generateTypeScriptDefinitions()
        }
    }

    // This is in place just because my main development machine is NOT a macOS :)
    // iOS Family of targets... since you can't just "ios()" anymore.
    val currentPlatform = System.getProperty("os.name")
    if (currentPlatform.lowercase() == "mac os x") {
        listOf(
            iosX64(),
            iosArm64(),
            iosSimulatorArm64(),
//          watchosX64() <- Still have to figure out how to do it for watchOS x_x
//          watchosArm64()
            tvosX64(),
            tvosArm64(),
            tvosSimulatorArm64(),
        ).forEach {
            it.binaries.framework {
                baseName = "qrcode_kotlin"
                isStatic = true
            }
        }
    }

    sourceSets {
        commonTest {
            dependencies {
                implementation(kotlin("test"))
                implementation(libs.kotest.assertions.core)
                implementation(libs.kotest.framework.engine)
            }
        }

        jvmTest {
            dependencies {
                implementation(libs.kotest.runner.junit5)
            }
        }
    }
}

android {
    namespace = "io.github.g0dkar.qrcode"
    compileSdk = 7
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")

    defaultConfig {
        minSdk = 7
    }

    compileOptions {
        sourceCompatibility = javaVersion
        targetCompatibility = javaVersion
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
    /** Copies release files into /release dir */
    register<Copy>("copyToReleaseDir") {
        dependsOn(build)

        doFirst {
            layout.projectDirectory.dir("release").asFile.deleteRecursively()
        }

        from(layout.buildDirectory.file("libs/qrcode-kotlin-jvm-$version.jar"))
        from(layout.buildDirectory.file("dist/js/productionLibrary/qrcode-kotlin.js"))
        from(layout.buildDirectory.file("dist/js/productionLibrary/qrcode-kotlin.js.map"))
        from(layout.buildDirectory.file("dist/js/productionLibrary/qrcode-kotlin.d.ts"))
        into(layout.projectDirectory.dir("release"))
    }
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
dokka {
    moduleName.set("QRCode-Kotlin")
    basePublicationsDirectory = layout.buildDirectory.dir("javadoc")

    dokkaSourceSets {
        configureEach {
            skipDeprecated = true
            reportUndocumented = true
            skipEmptyPackages = true
            suppressGeneratedFiles = true

            documentedVisibilities = setOf(VisibilityModifier.Public)

            sourceLink {
                remoteUrl("https://github.com/g0dkar/qrcode-kotlin/tree/main")
            }
        }
    }

    pluginsConfiguration.html {
        footerMessage.set("&copy; 2021-${LocalDateTime.now().year} Rafael M. Lins - MIT License")
    }
}

val dokkaJar by tasks.registering(Jar::class) {
    group = JavaBasePlugin.DOCUMENTATION_GROUP
    description = "Assembles Kotlin docs with Dokka"
    archiveClassifier.set("javadoc")
    from(tasks.dokkaGenerate)
}

val dokkaCopyToFolder by tasks.registering(Copy::class) {
    doFirst { layout.projectDirectory.dir("docs/dokka").asFile.deleteRecursively() }

    from(layout.buildDirectory.dir("javadoc/html"))
    into(layout.projectDirectory.dir("docs/dokka"))
}

tasks {
    dokkaGenerate {
        finalizedBy(dokkaCopyToFolder)
    }
}

/* **************** */
/* Publishing       */
/* **************** */
val ossrhUsername = properties.getOrDefault("ossrhUsername", System.getenv("OSSRH_USER"))?.toString()
val ossrhPassword = properties.getOrDefault("ossrhPassword", System.getenv("OSSRH_PASSWORD"))?.toString()
val npmAccessKey = properties.getOrDefault("npmAccessKey", System.getenv("NPM_ACCESSKEY"))?.toString()

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
    sign(publishing.publications)
}

// https://github.com/gradle/gradle/issues/26091
tasks.withType<AbstractPublishToMaven>().configureEach {
    val signingTasks = tasks.withType<Sign>()
    mustRunAfter(signingTasks)
}

npmPublish {
    readme.set(rootDir.resolve("README.md"))

    registries {
        register("npmjs") {
            uri.set(uri("https://registry.npmjs.org"))
            authToken.set(npmAccessKey)
        }
    }
}
