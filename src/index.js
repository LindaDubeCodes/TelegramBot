const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const { Telegraf } = require('telegraf')


const token = process.env.TOKEN;

const bot = new Telegraf(token);

const helpText =
    `
Say something to me
/start - start the bot
/help - command reference
`;

bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + " " + "You have entered the start command and it is a ");
    ctx.reply(helpText);


})

bot.help((ctx) => {
    ctx.reply("You have entered the help command");
})

bot.hears("history", (ctx) => {
    ctx.reply("Ahh you want hitler huh....You dirty bastard!");
})
bot.launch()