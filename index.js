const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Sheet = require('./sheet')

async function getPrice(url) {
    const res = await fetch(url);
    const text = await res.text();
    const $ = cheerio.load(text);
    const price = $('#quotes_summary_current_data span').first().text();
    return price;
}

(async function() {
   const sheet = new Sheet();
   await sheet.load();
   const stocks = await sheet.getRows(0);
})()
//contribution test
