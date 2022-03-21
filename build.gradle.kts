buildscript {
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.6.10")
    }
}

plugins {
    id("idea")
    kotlin("multiplatform") version "1.6.10"
    id("com.android.application")
    id("kotlin-android-extensions")

    signing
    `maven-publish`
    id("org.jetbrains.dokka") version "1.6.10"
    id("io.github.gradle-nexus.publish-plugin") version "1.1.0"
}

group = "io.github.g0dkar"
version = "3.0.0"

idea {
    module {
        isDownloadJavadoc = false
        isDownloadSources = true
    }
}

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

    js(BOTH) {
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }

    android {
        publishAllLibraryVariants()
    }

    sourceSets {
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
                implementation("io.kotest:kotest-assertions-core:5.1.0")
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation("org.junit.jupiter:junit-jupiter:5.8.2")
                implementation("org.junit.jupiter:junit-jupiter-api:5.8.2")
                implementation("org.junit.jupiter:junit-jupiter-engine:5.8.2")
            }
        }
        val jsMain by getting {
            dependencies {
                implementation(npm("buffer", "6.0.3"))
                implementation(npm("canvas", "2.9.1"))
            }
        }
        val jsTest by getting
        val androidMain by getting {
            dependencies {
                implementation("com.google.android.material:material:1.5.0")
            }
        }
        val androidTest by getting {
            dependencies {
                implementation("junit:junit:4.13.2")
            }
        }
    }
}

android {
    compileSdkVersion(29)
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")
    defaultConfig {
        applicationId = "io.github.g0dkar.qrcode"
        minSdkVersion(21)
        targetSdkVersion(29)
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
}

/* **************** */
/* Publishing       */
/* **************** */
val ossrhUsername = properties.getOrDefault("ossrhUsername", System.getenv("OSSRH_USER"))?.toString()
val ossrhPassword = properties.getOrDefault("ossrhPassword", System.getenv("OSSRH_PASSWORD"))?.toString()

val dokkaHtml by tasks.getting(org.jetbrains.dokka.gradle.DokkaTask::class)
val javadocJar: TaskProvider<Jar> by tasks.registering(Jar::class) {
    dependsOn(dokkaHtml)
    archiveClassifier.set("javadoc")
    from(dokkaHtml.outputDirectory)
}

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
