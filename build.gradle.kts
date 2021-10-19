plugins {
    `java-library`
    `maven-publish`
    signing
    kotlin("jvm") version "1.5.31"
    id("org.jlleitschuh.gradle.ktlint") version "10.0.0"
}

group = "io.github.g0dkar"
version = "1.0.0"
java.sourceCompatibility = JavaVersion.VERSION_1_8

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    testImplementation("org.junit.jupiter:junit-jupiter-api:5.3.1")
    testImplementation("org.junit.jupiter:junit-jupiter-engine:5.3.1")
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

java {
    withSourcesJar()
    withJavadocJar()
}

ktlint {
    outputToConsole.set(true)
    coloredOutput.set(true)
    additionalEditorconfigFile.set(file("${project.projectDir}/../.editorconfig"))

    filter {
        exclude("**.gradle.kts")
    }
}

publishing {
    publications {
        create<MavenPublication>("mavenCentral") {
            from(components["java"])
        }
    }

    repositories {
        maven {
            name = "external"
            url = uri("https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/")
            credentials(PasswordCredentials::class)
        }
    }
}

signing {
    val signingKey: String? by project
    val signingPassword: String? by project
    useInMemoryPgpKeys(signingKey, signingPassword)
    sign(publishing.publications)
}

// uploadArchives {
//     repositories {
//         mavenDeployer {
//             beforeDeployment { MavenDeployment deployment -> signing.signPom(deployment) }
//
//             repository(url: "https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/") {
//             authentication(userName: ossrhUsername, password: ossrhPassword)
//         }
//
//             snapshotRepository(url: "https://s01.oss.sonatype.org/content/repositories/snapshots/") {
//             authentication(userName: ossrhUsername, password: ossrhPassword)
//         }
//
//             pom.project {
//                 name 'Example Application'
//                 packaging 'jar'
//                 // optionally artifactId can be defined here
//                 description 'A application used as an example on how to set up
//                 pushing  its components to the Central Repository.'
//                 url 'http://www.example.com/example-application'
//
//                 scm {
//                     connection 'scm:svn:http://foo.googlecode.com/svn/trunk/'
//                     developerConnection 'scm:svn:https://foo.googlecode.com/svn/trunk/'
//                     url 'http://foo.googlecode.com/svn/trunk/'
//                 }
//
//                 licenses {
//                     license {
//                         name 'The Apache License, Version 2.0'
//                         url 'http://www.apache.org/licenses/LICENSE-2.0.txt'
//                     }
//                 }
//
//                 developers {
//                     developer {
//                         id 'manfred'
//                         name 'Manfred Moser'
//                         email 'manfred@sonatype.com'
//                     }
//                 }
//             }
//         }
//     }
// }
