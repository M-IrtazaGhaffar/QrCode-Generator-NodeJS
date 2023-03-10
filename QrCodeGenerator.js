// https://www.npmjs.com/package/jsbarcode
// npm i qrcode --save

const QrCode = require('qrcode')

const QrGenerate = async (text) => {
    try {
        // const Qr = await QrCode.toString(text, {
        //     type: 'terminal'
        // })
        // console.log(Qr)
        const Qr = await QrCode.toFile(`./GeneratedCodes/${text}.png`, text)
    } catch (error) {
        console.log(error)
    }
}

QrGenerate('bytewisecode.netlify.app')