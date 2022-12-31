const QRCode = window['qrcode-kotlin'].io.github.g0dkar.qrcode.QRCode
const qrcodeContent = document.getElementById("qrcodeContent")
const qrcodeResult = document.getElementById("qrcodeResult")

const createQRCode = (data) => {
    const result = new QRCode(data).render()
    const dataURL = result.toDataURL()
    qrcodeResult.src = dataURL
}

qrcodeContent.onkeyup = (evt) => {
    const data = evt.target.value
    const prev = evt.target.$prev

    if (data !== prev) {
        if (evt.target.$timer) {
            clearTimeout(evt.target.$timer)
        }

        evt.target.$prev = data

        evt.target.$timer = setTimeout(() => {
            createQRCode(data)
        }, 500)
    }
}
