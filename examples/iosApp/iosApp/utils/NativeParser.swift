import qrcode_kotlin

//  NativeParser.swift
//  iosApp
//
//  Created by Rui Canas on 01/12/2023.
//

extension KotlinByteArray {
    
    var toData: Data {

        var byteArray = [Int8]()
        for i in 0..<size {
            byteArray.append(self.get(index: i))
        }
        
        return Data(
            bytes: byteArray,
            count: byteArray.count
        )
    }
}
