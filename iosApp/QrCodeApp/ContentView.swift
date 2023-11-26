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
        .build(data: "testing")
        .renderToBytes(format: "PNG")
    
    var body: some View {
        let image = UIImage(data: qrCode.toNSData())
        
        VStack {
            HStack {
                Image(uiImage: image ?? .init())
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
