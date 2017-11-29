const { MessengerBot, MemorySessionStore } = require('bottender');
const { createServer } = require('bottender/express');
const handler = require('./handler/messengerHandler');

const bot = new MessengerBot({
  accessToken: process.env.accessToken,
  appSecret: process.env.appSecret,
  sessionStore: new MemorySessionStore(300)
});

bot.onEvent(handler);
bot.setInitialState({
  index: []
});

const server = createServer(bot);

server.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on ${process.env.PORT || 5000} port...`);
});
