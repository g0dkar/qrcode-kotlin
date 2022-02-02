import org.jetbrains.dokka.gradle.DokkaTask

buildscript {
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.6.10")
    }
}

plugins {
    id("idea")
    signing
    `java-library`
    `maven-publish`
    kotlin("jvm") version "1.6.0"
    id("org.jetbrains.dokka") version "1.5.31"
    id("org.jlleitschuh.gradle.ktlint") version "10.0.0"
    id("io.github.gradle-nexus.publish-plugin") version "1.1.0"
    id("org.sonarqube") version "3.3"
}

group = "io.github.g0dkar"
version = "2.0.0"

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

idea {
    module {
        isDownloadJavadoc = false
        isDownloadSources = true
    }
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    testImplementation("org.junit.jupiter:junit-jupiter:5.8.2")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.8.2")
    testImplementation("org.junit.jupiter:junit-jupiter-engine:5.8.2")
    testImplementation("io.kotest:kotest-assertions-core-jvm:5.1.0")
}

tasks {
    test { useJUnitPlatform() }

    compileTestJava {
        options.encoding = "UTF-8"
    }

    compileKotlin {
        kotlinOptions {
            jvmTarget = "1.8"
            freeCompilerArgs = listOf("-Xjsr305=strict")
        }
    }

    jar {
        manifest {
            attributes(
                mapOf(
                    "Implementation-Title" to project.name,
                    "Implementation-Version" to project.version
                )
            )
        }
    }
}

ktlint {
    coloredOutput.set(true)
    outputToConsole.set(true)
    additionalEditorconfigFile.set(file("${project.projectDir}/../.editorconfig"))

    filter {
        exclude("**.gradle.kts")
    }
}



/* **************** */
/* Publishing       */
/* **************** */
val ossrhUsername = properties.getOrDefault("ossrhUsername", System.getenv("OSSRH_USER"))?.toString()
val ossrhPassword = properties.getOrDefault("ossrhPassword", System.getenv("OSSRH_PASSWORD"))?.toString()

val dokkaHtml by tasks.getting(DokkaTask::class)
val javadocJar: TaskProvider<Jar> by tasks.registering(Jar::class) {
    dependsOn(dokkaHtml)
    archiveClassifier.set("javadoc")
    from(dokkaHtml.outputDirectory)
}

java {
    withSourcesJar()
    withJavadocJar()
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

publishing {
    publications {
        create<MavenPublication>("main") {
            from(components["java"])
            pom {
                val projectGitUrl = "https://github.com/g0dkar/qrcode-kotlin"

                name.set(rootProject.name)
                description.set("A JVM Kotlin Library to generate QR Codes without any other dependencies.")
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

signing {
    val key = properties.getOrDefault("signingKey", System.getenv("SIGNING_KEY"))?.toString() ?: return@signing
    val password =
        properties.getOrDefault("signingPassword", System.getenv("SIGNING_PASSWORD"))?.toString() ?: return@signing

    useInMemoryPgpKeys(key, password)
    sign(publishing.publications)
}



/* *************************** */
/* SonarQube Quality Reporting */
/* *************************** */
sonarqube {
    properties {
        property("sonar.projectKey", "qrcode-kotlin")
        property("sonar.organization", "minimmo")
        property("sonar.host.url", "https://sonarcloud.io")
    }
}
