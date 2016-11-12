'use strict';
var TelegramBot = require('node-telegram-bot-api');
var token = process.env.TOKEN;
var bot = new TelegramBot(token, { polling: false });
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var translate = require('node-google-translate-skidz');

// Matches /echo [whatever]
bot.onText(/\/repite (.+)/, function (msg, match) {
    var chatId = msg.chat.id;
    var resp = match[1];
    bot.sendMessage(chatId, resp);
});

/* bot.onText(/\/dolar/, function (msg) {
    return bot.sendMessage(msg.chat.id, 'Pérate unos segundos mientras lo busco...');
});*/
bot.onText(/\/dolar/, function (msg) {
    request('https://twitter.com/DolarToday', function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var loadedHTML = cheerio.load(html);
            var contentContainer = loadedHTML('p.ProfileHeaderCard-bio').text();
            var soughtContent = contentContainer.substring(contentContainer.search("Bs."), contentContainer.search(" y el"));
            return bot.sendMessage(msg.chat.id, soughtContent);
        } else {
            console.log(error);
        }
    });
    console.log('Sent dollar value');
});

bot.onText(/\/dq1 (.+)/, function (msg, match) {
    var resp = match[1];
    bot.sendMessage('-1001055742276', resp);
});

bot.onText(/\/qlq/, function (msg) {
    var chatId = msg.chat.id;
    var photo = 'AgADAQAD3qcxGxrvBBB-awk0sDD9Xe6a5y8ABI9yasUBQPX8AAHxAQABAg';
    return bot.sendPhoto(chatId, photo, { caption: 'qlq menol' });
});

bot.onText(/\/pajuo/, function (msg) {
    var chatId = msg.chat.id;
    var photo = 'AgADAQADK74xG8WGLA4Qaex4hp-Lt-OR5y8ABKd4zcJq3RFSjuwBAAEC';
    bot.sendPhoto(chatId, photo, { caption: 'qlq menol' });
});

bot.onText(/\/doge1/, function (msg) {bot.sendSticker(msg.chat.id, 'BQADAQADmwIAAmczbQpYL0n24ELb8wI');});
bot.onText(/\/doge2/, function (msg) {bot.sendSticker(msg.chat.id, 'BQADBAADiwEAAljp-gOQagmTpQABMr8C');});
bot.onText(/\/doge3/, function (msg) {bot.sendSticker(msg.chat.id, 'BQADAgADTwADNraOCO6Evpsh_B78Ag');});

bot.onText(/^\/doge$/, function (msg){

    var cualDoge = [
        'BQADAQADmwIAAmczbQpYL0n24ELb8wI',
        'BQADBAADiwEAAljp-gOQagmTpQABMr8C',
        'BQADAgADTwADNraOCO6Evpsh_B78Ag',
        'BQADBAADeQEAAljp-gMfLjGh0UcsqgI',
        'BQADBAADrwEAAljp-gOUGQERkzLDSAI',
        'BQADBAADpwEA Aljp-gMZqYA2TcCQigI',
        'BQADAgADKAADNraOCCqXlVqUKd4SAg',
        'BQADAgADHAADNraOCLBipsm-lf2XAg',
        'BQADAgADCgADNraOCEl_Jsv8JOo9Ag',
        'BQADBAADlQEAAljp-gNqbe1l60dGtAI',
        'BQADBAADmQEAAljp-gMzkzYmzu3eyAI',
        'BQADBAADfQEAAljp-gORGeHcXUkb-wI'
    ];
    var elDoge = cualDoge[Math.floor(Math.random() * 12)];
    bot.sendSticker(msg.chat.id, elDoge);
});

bot.onText(/\/doge@QlqMenolBot/, function (msg){

    var cualDoge = [
        'BQADAQADmwIAAmczbQpYL0n24ELb8wI',
        'BQADBAADiwEAAljp-gOQagmTpQABMr8C',
        'BQADAgADTwADNraOCO6Evpsh_B78Ag',
        'BQADBAADeQEAAljp-gMfLjGh0UcsqgI',
        'BQADBAADrwEAAljp-gOUGQERkzLDSAI',
        'BQADBAADpwEA Aljp-gMZqYA2TcCQigI',
        'BQADAgADKAADNraOCCqXlVqUKd4SAg',
        'BQADAgADHAADNraOCLBipsm-lf2XAg',
        'BQADAgADCgADNraOCEl_Jsv8JOo9Ag',
        'BQADBAADlQEAAljp-gNqbe1l60dGtAI',
        'BQADBAADmQEAAljp-gMzkzYmzu3eyAI',
        'BQADBAADfQEAAljp-gORGeHcXUkb-wI'
    ];
    var elDoge = cualDoge[Math.floor(Math.random() * 12)];
    bot.sendSticker(msg.chat.id, elDoge);
});

bot.on('message', function (msg){
    if (msg.photo) {
            var photo = msg.photo[0].file_id;
            console.log(msg);
            console.log(photo);
            bot.sendPhoto('-1001088544359', photo, {caption: 'First name: ' + msg.from.first_name + "\n" + "Username: @" + msg.from.username});
    } else {}
});

bot.on('message', function (msg){
    if (msg.sticker) {
        var sticker = msg.sticker.file_id;
        /* console.log(msg); */
        console.log(sticker);
        bot.sendSticker('-1001083222001', sticker);
    } else {
      //  console.log('neglumarka mesaĝo');
    }
});

bot.on('message', function (msg){
console.log('FN: ' + msg.from.first_name + " " + "UN: @" + msg.from.username + ': ' + msg.text);
});

bot.onText(/\/quiensoy/ ,function (msg) {
    bot.sendMessage(msg.chat.id, 'Qlq menol tienes amnesia? Háblame cloro ' + msg.from.first_name);
});

bot.onText(/hola/ ,function (msg) {
    bot.sendMessage(msg.chat.id, 'Qlq ' + msg.from.first_name);
});

bot.onText(/I'm back/ ,function (msg) {
    bot.sendMessage(msg.chat.id, 'Back de donde mmg');
});

/*------------------------  G O O G L E   T R A N S L A T E ----------------------*/

bot.onText(/\/trans (.+)/, function (msg, match) {
    var langA = match[1].substring(0, 2);
    var langB = match[1].substring(2, 4);
    var texto = match[1].substring(match[1].lastIndexOf("\/trans")+5);
    /* bot.sendMessage(msg.chat.id, 'Conectando con Google Translate...'); */
    translate({
            text: texto,
            source: langA,
            target: langB
        }, function (result){
            var trans = result.sentences.map(function(resu){
                return resu.trans;}
            ).join('');
            bot.sendMessage(msg.chat.id, 'Traducción: ' + trans);
        }
    )
});

/*---------------------------- H E L P ------------------------------------------*/

bot.onText(/\/help/ ,function (msg) {
    bot.sendMessage(msg.chat.id, "\/help - Env\u00EDa este mensaje...\r\n\r\n\/repite <texto> - Repite la primera l\u00EDnea despu\u00E9s de \/repite (por limitaciones t\u00E9cnicas -i.e. no s\u00E9 c\u00F3mo evitarlo y me da ladilla averiguar- de la segunda l\u00EDnea en adelante no detecta nada)\r\n\r\n\/dolar - Busca el valor actual del d\u00F3lar en el Twitter de DolarToday\r\n\r\n\/doge - Env\u00EDa un sticker de doge aleatorio entre 12 (tambi\u00E9n puedes usar \/doge1 \/doge2 y \/doge3 para 3 doges espec\u00EDficos)\r\n\r\n\/trans <i1i2> <texto> - Traduce de i1 a i2 el texto en Google Translate\r\nPara traducir con \/trans debes colocar las dos letras que representan el primer idioma seguido de las letras que representan el segundo en este formato: i1i2 (por ejemplo, de espa\u00F1ol a ingl\u00E9s, esen)\r\nNOTA: S\u00F3lo traduce la primera l\u00EDnea por el mismo problema de \/repite. Simplemente pega todos los cortes de l\u00EDnea y deber\u00EDa traducir todo.\r\n\r\nEjemplos de combinaciones:\r\nende = ingl\u00E9s a alem\u00E1n\r\neozh = esperanto a chino\r\nsves = sueco a espa\u00F1ol\r\nptit = portugu\u00E9s a italiano\r\n\r\nEjemplo de uso:\r\n\/trans enes Languages are cool.\r\n\r\nBot de @Bestulo. Si ves un error o una manera de romperlo, av\u00EDsame para corregirlo.");
});
