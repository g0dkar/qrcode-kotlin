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
    alias(libs.plugins.kotest.multiplatform)
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.android.extensions)

    // Publishing Plugins
    signing
    `maven-publish`
    alias(libs.plugins.nexus)

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
                freeCompilerArgs = listOf("-Xjsr305=strict")
            }
        }

        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
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
                outputFileName = "qrcode-kotlin"
            }
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
        val commonMain by getting
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
                implementation(libs.kotest.assertions.core)
                implementation(libs.kotest.framework.engine)
            }
        }
        val jvmMain by getting
        val jvmTest by getting
        val jsMain by getting
        val jsTest by getting
        val nativeMain by getting
        val nativeTest by getting
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
tasks {
    wrapper {
        distributionType = Wrapper.DistributionType.ALL
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
