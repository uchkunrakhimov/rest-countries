const { Telegraf } = require("telegraf");
const express = require("express");
const { message } = require("telegraf/filters");
const { logError } = require("./logger");
const { text } = require("./controllers/data");
const axios = require("axios");

const dotenv = require("dotenv").config();
const app = express();

const bot = new Telegraf(process.env.BOT_TOKEN);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(bot.webhookCallback("/webhook"));
bot.telegram.setWebhook(process.env.URL + "/webhook");
bot.startWebhook("/webhook");

bot.start((ctx) => {
  ctx.replyWithHTML("<b>Welcome! Send me the country name:</b>\n\ne.g: <code>USA</code>");
});

bot.on(message("text"), (ctx) => {
  if (ctx.message.text.startsWith("/")) {
    ctx.reply("Bad attempt");
  } else {
    axios
      .get(process.env.API + ctx.message.text)
      .then((response) => {
        ctx.replyWithHTML(text(response.data));
      })
      .catch((err) => {
        logError(err.message);
        ctx.reply("Country not found");
      });
  }
});

bot.launch();