require("dotenv").config();
const axios = require("axios");
const express = require("express");
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const { logError, getText } = require("./controllers");

const app = express();
const port = process.env.PORT;
const url = process.env.URL;
const botToken = process.env.BOT_TOKEN;
const apiEndpoint = process.env.API;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(bot.webhookCallback("/webhook"));
bot.telegram.setWebhook(url + "/webhook");
bot.startWebhook("/webhook");

const startMessage =
  "<b>Please tell me the name of the country:</b>\n\ne.g: <code>USA</code>";

bot.start((ctx) => {
  ctx.replyWithHTML(startMessage);
});

bot.on(message("text"), async (ctx) => {
  try {
    if (ctx.message.text.startsWith("/")) {
      ctx.reply("Bad attempt");
    } else {
      const response = await axios.get(apiEndpoint + ctx.message.text);
      const responseData = response.data;
      ctx.replyWithHTML(getText(responseData));
    }
  } catch (error) {
    logError(error.message);
    ctx.reply("Country not found");
  }
});

bot.launch();
