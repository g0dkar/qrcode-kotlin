//
//  ContentView.swift
//  iosApp
//
//  Created by Rui Canas on 26/11/2023.
//

import SwiftUI
import qrcode_kotlin

struct ContentView: View {

    let qrCode = QRCode
        .companion
        .ofSquares()
        .withBackgroundColor(bgColor: Colors().TRANSPARENT)
        .withColor(color: Colors().BLACK)
        .withSize(size: 10)
        .withInnerSpacing(innerSpacing: 0)
        .build(data: "https://github.com/g0dkar/qrcode-kotlin")
        .renderToBytes(format: "PNG")

    var body: some View {
        VStack {
            HStack {
                Image(
                    uiImage: UIImage(data: qrCode.toData) ?? .init()
                )
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 200, height: 200)
                .background(Color.clear)
            }
        }
    }
}

#Preview {
    ContentView()
}
