var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest();
var endpoint = 'https://api.telegram.org/bot%token/sendMessage?chat_id=%chatId&text=%message';

require('dotenv').config();

var endpointUrl = endpoint.replace('%token', process.env.TOKEN).replace('%chatId', process.env.CHAT_ID);
var Mssge = 'a random test messagge... happy halloween'

endpointUrl = endpointUrl.replace('%message', Mssge);
xhr.open('GET', endpointUrl);
xhr.send();