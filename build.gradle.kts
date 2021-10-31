import org.jetbrains.dokka.gradle.DokkaTask

plugins {
    signing
    `java-library`
    `maven-publish`
    kotlin("jvm") version "1.5.31"
    id("org.jetbrains.dokka") version "1.5.31"
    id("org.jlleitschuh.gradle.ktlint") version "10.0.0"
    id("io.github.gradle-nexus.publish-plugin") version "1.1.0"
}

group = "io.github.g0dkar"
version = "1.1.0"
java.sourceCompatibility = JavaVersion.VERSION_1_8
java.targetCompatibility = JavaVersion.VERSION_1_8

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    testImplementation("org.junit.jupiter:junit-jupiter-api:5.8.1")
    testImplementation("org.junit.jupiter:junit-jupiter-engine:5.8.1")
}

tasks {
    test { useJUnitPlatform() }

    compileKotlin {
        kotlinOptions {
            freeCompilerArgs = listOf("-Xjsr305=strict")
            jvmTarget = "1.8"
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

            val ossrhUsername: String? by properties
            val ossrhPassword: String? by properties

            username.set(ossrhUsername ?: System.getenv("OSSRH_USER") ?: return@sonatype)
            password.set(ossrhPassword ?: System.getenv("OSSRH_PASSWORD") ?: return@sonatype)
        }
    }
}

publishing {
    val ossrhUsername: String? by properties
    val ossrhPassword: String? by properties

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
                        url.set("https://github.com/g0dkar/qrcode-kotlin/blob/main/LICENSE")
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
    val signingKey: String? by properties
    val signingPassword: String? by properties
    val key = signingKey ?: System.getenv("SIGNING_KEY") ?: return@signing
    val password = signingPassword ?: System.getenv("SIGNING_PASSWORD") ?: return@signing
    useInMemoryPgpKeys(key, password)
    sign(publishing.publications)
}
