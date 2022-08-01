// beforeSettings {
//     pluginManagement {
//         val artifactory_user: String? by settings
//         val artifactory_password: String? by settings
//         val artifactory_key: String? by settings
//
//         repositories {
//             mavenCentral()
//             google()
//
//             maven {
//                 url = uri("https://artifactory.glovoint.com/artifactory/gradle-release")
//                 credentials {
//                     username = artifactory_user
//                     password = artifactory_password ?: artifactory_key
//                 }
//             }
//
//             gradlePluginPortal()
//         }
//     }
// }
