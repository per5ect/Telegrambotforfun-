const { Telegraf } = require("telegraf")

const token = "6890067099:AAFXVraWTLKVXs5zHEEHdzfv-RfrMr0KPv0"

const bot = new Telegraf(token)

const specificUserId = 340979978;

bot.on("message", async ctx => {
    
    if (ctx.message && ctx.message.text) {
        const msg = ctx.message.text;
        const senderId = ctx.message.from.id;  

        
        const regex = /.+/;

        
        if (senderId === specificUserId && regex.test(msg)) {
            ctx.reply("Ne pishi suda bolshe");
        }
    }
});

bot.launch()
