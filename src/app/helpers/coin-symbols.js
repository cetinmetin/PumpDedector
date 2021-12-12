const connection = require('../api/connection')

var symbols = []
module.exports = coin_symbols = (callback) => {
    connection.GETBinanceSymbols("https://api.binance.com/api/v1/exchangeInfo", (res) => {
        res["data"]["symbols"].map((item) => {
            if (item.symbol.slice(-1) == 'T')
                symbols.push(item.symbol)
        })
        if (symbols.length > 0) {
            callback(symbols)
        }
    })
}
// deneyici = (symbols) => {
//     console.log("geldim agam")
//     connection.requestLoop(symbols)
// }
