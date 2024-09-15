const { Telegraf } = require("telegraf")

const token = "6890067099:AAFXVraWTLKVXs5zHEEHdzfv-RfrMr0KPv0"

const bot = new Telegraf(token)

const specificUserId = 340979978;

bot.on("message", async ctx => {
    // Проверяем, что сообщение содержит текст
    if (ctx.message && ctx.message.text) {
        const msg = ctx.message.text;
        const senderId = ctx.message.from.id;  // Получаем ID отправителя

        // Регулярное выражение для любого текста (любой длины и языка)
        const regex = /.+/;

        // Проверяем, что сообщение от нужного пользователя и сообщение соответствует регулярному выражению
        if (senderId === specificUserId && regex.test(msg)) {
            ctx.reply("Нахуй ты это сюда пишешь уебище?");
        }
    }
});

bot.launch()

console.log("hi");
