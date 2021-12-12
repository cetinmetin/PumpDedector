const coin_symbols = require('./src/app/helpers/coin-symbols')
const forecaster = require('./src/app/helpers/forecaster')
const _console = require('./src/app/core/viewer')
const index = async () => {
    _console.startConsole()
    coin_symbols((data) => {
        forecaster(data)
    })
}
index()
