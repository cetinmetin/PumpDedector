const express = require('express')
const app = express()
const axios = require('axios');
const https = require('https')
const cheerio = require('cheerio')

const https_Options = {
    url: "https://www.binance.com/tr/trade/RAMP_USDT",
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
}
var connection = {
    GETBinanceSymbols: async (uri, callback) => {
        let url = uri
        await axios.get(url)
            .then((res) => {
                console.log('Coin Listesi Alındı')
                return callback(res);
            })
            .catch(err => {
                console.log('Error: ', err.message);
            });

    },
    // GETBinanceCoins: (uri, callback) => {
    //     let url = `https://api.binance.com/api/v1/ticker/24hr?symbol=${uri}`
    //     app.get("/", async (req, res) => {
    //         console.log("İşlem Devam Ediyor...")
    //         await axios.get(url)
    //             .then((res) => {
    //                 console.log('İşlem Tamamlandı')
    //                 return callback(res);
    //             })
    //             .catch(err => {
    //                 console.log('Error: ', err.message)
    //             })
    //     })
    // },
    GETVolumes: async (symbols, callback) => {
        console.log("Güncel Veriler Alınıyor Lütfen Bekleyin...")
        for (let i = 0; i < symbols.length; i++) {
            let url = `https://api.binance.com/api/v1/ticker/24hr?symbol=${symbols[i]}`
            await axios.get(url)
                .then((res) => {
                    return callback(res);
                })
                .catch(err => {
                    console.log('Error: ', err.message);
                });
        }
    },
    // requestLoop: (symbol, callback) => {
    //     axios.get(`https://coinmarketcap.com/currencies/${symbol}/`)
    //         .then(({ data }) => {
    //             const $ = cheerio.load(data);
    //             const links = extractDatas($);
    //             console.log(links);
    //         })
    //         .catch(err => {
    //             console.log('Error: ', err.message)
    //         })
    // }
}

// const extractDatas = $ => {
//     const statsBlock = $("body")
//         .find('#__next .bywovg-1 .main-content .sc-57oli2-0 .full-width-layout .eMxKgr .jskEGI .kjciSH .fggtJu .statsContainer .statsBlock')
//     const statsValue = $(statsBlock.get(2)).find(".statsBlockInner .statsItemRight .statsValue")
//         .text()
//     return statsValue
// }


// app.listen(5000, () => {
//     console.log('5000 nolu port aktif')
// })
module.exports = connection