const consoleCSS = "background: #222; color: #bada55"

module.exports = {
    startConsole: () => {
        console.clear()
        console.info("Pump Dedector Çalışıyor")
    },
    viewer: (pumpedCoins) => {
        var pumped = []
        console.log("%c------------------------------------------", consoleCSS)
        console.log("%cPump Sinyal:", consoleCSS)
        for (let i = 0; i < pumpedCoins.length; i++)
            pumped.push({ Hacim: "" + pumpedCoins[i][0], Coin: "" + pumpedCoins[i][1] })
        console.table(pumped)
        console.log("%c------------------------------------------", consoleCSS)
    }
}