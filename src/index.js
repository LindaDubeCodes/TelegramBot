const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();


const token = process.env.TOKEN;


const bot = new TelegramBot(token, { polling: true });


bot.on('message', (msg) => {

    let chat_id = msg.from.id || msg.from.first_name;

    bot.sendMessage(chat_id, "guns and condoms");
});

bot.command('start', (ctx) => {

})