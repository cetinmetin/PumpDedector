const connection = require('../api/connection')
const _console = require('../core/viewer')
const calculator = require('./calculator')

var result = [], tempResult = [], pumpedCoins = [], _symbols = []

module.exports = forecaster = (symbols) => {
    var time = 100000
    _symbols = symbols
    //setInterval(() => GETVolumes(symbols), time);
    GETVolumes(symbols)
}

function GETVolumes(symbols) {
    connection.GETVolumes(symbols, (data) => {
        result.push([parseFloat([data["data"].quoteVolume]).toFixed(2), ["Coin: " + data["data"].symbol]])
        // tempResult.push([[result[0][0]], [result[0][1]]]);
        // console.log(parseFloat(tempResult[0][0])>32)
        // console.log(result)
    }).then(() => {
        if (tempResult.length > 0) {
            // console.log(tempResult, tempResult.length)
            // console.log(tempResult, result)
            for (let i = 0; i < tempResult.length; i++) {

                if (calculator(tempResult[i][0], result[i][0])) {
                    pumpedCoins.push([[tempResult[i][0]], [tempResult[i][1]]])

                }
                else if (calculator(result[i][0], tempResult[i][0])) {
                    pumpedCoins.push([[result[i][0]], [result[i][1]]])
                }

            }
            fillTempResult()
        }
        else
            fillTempResult()

    }).then(() => {
        if (pumpedCoins.length > 0) {
            _console.viewer(pumpedCoins)
            pumpedCoins = []
        }
        else
            console.log("Pump Algılanmadı, Yeniden Deneniyor...")
        //console.log(tempResult.flat())
        GETVolumes(_symbols)
    })
}

function fillTempResult() {
    tempResult = []
    for (let i = 0; i < result.length; i++) {
        tempResult.push([[result[i][0]], [result[i][1]]]);
    }
    result = [];
}
