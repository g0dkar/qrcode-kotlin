@file:OptIn(ExperimentalWasmDsl::class)

import com.android.build.api.dsl.androidLibrary
import org.jetbrains.dokka.gradle.engine.parameters.VisibilityModifier
import org.jetbrains.kotlin.gradle.ExperimentalWasmDsl
import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig.Mode.PRODUCTION
import java.time.LocalDateTime

plugins {
    // Dev Plugins
    id("idea")

    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.android.kotlin.multiplatform.library)

    // Publishing Plugins
    alias(libs.plugins.mavenPublish)
//    alias(libs.plugins.npmPublish)

    // Docs Plugins
    alias(libs.plugins.dokka)
}

val projectName: String = rootProject.name
val projectGroup = "io.github.g0dkar.qrcode"
val projectGitUrl = "github.com/g0dkar/qrcode-kotlin"

group = projectGroup

kotlin {
    compilerOptions {
        freeCompilerArgs.add("-Xexpect-actual-classes")
    }

    jvm()

    @Suppress("UnstableApiUsage")
    androidLibrary {
        namespace = projectGroup
        compileSdk = libs.versions.android.compileSdk.get().toInt()
        minSdk = libs.versions.android.minSdk.get().toInt()

        withJava() // enable java compilation support
        withHostTestBuilder {}.configure {}
        withDeviceTestBuilder {
            sourceSetTreeName = "test"
        }

        compilations.configureEach {
            compileTaskProvider.configure {
                compilerOptions {
                    jvmTarget = JvmTarget.JVM_11
                }
            }
        }
    }

    js {
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

    wasmJs {
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

    sourceSets {
        commonMain.dependencies {
            // Dependencies
        }

        commonTest.dependencies {
            implementation(kotlin("test"))
            implementation(libs.kotest.assertions.core)
            implementation(libs.kotest.framework.engine)

            // Logging
            implementation(libs.kotlin.logging)
        }

        jvmTest.dependencies {
            implementation(libs.logback)
        }

        androidMain.dependencies {
            compileOnly(libs.androidx.compose.ui)
        }

        wasmJsMain.dependencies {
            implementation(libs.kotlinx.browser)
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
                remoteUrl("https://$projectGitUrl/tree/main")
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
    dependsOn(tasks.dokkaGenerate)
    doFirst { layout.projectDirectory.dir("docs/dokka").asFile.deleteRecursively() }

    from(layout.buildDirectory.dir("javadoc/html"))
    into(layout.projectDirectory.dir("docs/dokka"))
}

/* **************** */
/* Publishing       */
/* **************** */
val npmAccessKey = properties.getOrDefault("npmAccessKey", System.getenv("NPM_ACCESSKEY"))?.toString()

mavenPublishing {
    publishToMavenCentral(automaticRelease = true)

    signAllPublications()

    coordinates(groupId = projectGroup, artifactId = projectName, version = version.toString())

    pom {
        name = projectName
        description = "A Kotlin Library to generate QR Codes without any other dependencies."
        inceptionYear = "2021"
        url = "https://$projectGitUrl"
        licenses {
            license {
                name = "MIT"
                url = "https://rafaellins.mit-license.org/2021/"
            }
        }
        developers {
            developer {
                id = "g0dkar"
                name = "Rafael Lins"
                email = "rafael@lins.net.br"
                url = "https://github.com/g0dkar"
            }
        }
        issueManagement {
            system = "GitHub"
            url = "https://$projectGitUrl/issues"
        }
        scm {
            url = "https://$projectGitUrl"
            connection = "scm:git://$projectGitUrl.git"
            developerConnection = "scm:git://$projectGitUrl.git"
        }
    }
}

//npmPublish {
//    readme.set(rootDir.resolve("README.md"))
//
//    registries {
//        register("npmjs") {
//            uri.set(uri("https://registry.npmjs.org"))
//            authToken.set(npmAccessKey)
//        }
//    }
//}
