import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig.Mode.PRODUCTION

buildscript {
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.20")
    }
}

plugins {
    // Dev Plugins
    id("idea")
    id("com.diffplug.spotless") version "6.11.0"

    // Base Plugins
    kotlin("multiplatform") version "1.7.20"
    id("com.android.library") version "7.2.1"
    id("kotlin-android-extensions") version "1.7.20"

    // Publishing Plugins
    signing
    `maven-publish`
    id("io.github.gradle-nexus.publish-plugin") version "1.1.0"

    // Docs Plugins
    id("org.jetbrains.dokka") version "1.7.20"
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

    js(BOTH) {
        compilations.all {
            kotlinOptions {
                main = "noCall"
            }
        }
        browser {
            commonWebpackConfig {
                mode = PRODUCTION
                outputFileName = "qrcode-kotlin"
                outputPath = rootDir
                cssSupport {
                    enabled = true
                }
            }
        }
    }

    val hostOs = System.getProperty("os.name")
    val isMingwX64 = hostOs.startsWith("Windows")
    val nativeTarget = when {
        hostOs == "Mac OS X" -> macosX64("native")
        hostOs == "Linux" -> linuxX64("native")
        isMingwX64 -> mingwX64("native")
        else -> throw GradleException("Host OS is not supported in Kotlin/Native.")
    }

    sourceSets {
        val commonTest by getting {
            dependencies {
                implementation("io.kotest:kotest-assertions-core:5.5.3")
                implementation("org.junit.jupiter:junit-jupiter:5.9.1")
                implementation("org.junit.jupiter:junit-jupiter-api:5.9.1")
                implementation("org.junit.jupiter:junit-jupiter-engine:5.9.1")
            }
        }
    }
}

android {
    compileSdk = 32
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")
    defaultConfig {
        minSdk = 21
        targetSdk = 32
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
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
    kotlin {
        ktlint("0.47.1")
    }
    kotlinGradle {
        ktlint("0.47.1")
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
