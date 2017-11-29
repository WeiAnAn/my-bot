const { MessengerBot, MemorySessionStore } = require('bottender');
const { createServer } = require('bottender/express');
const handler = require('./handler/messengerHandler');
const path = require('path');

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

server.get('/privacy', (req, res) => {
  return res.sendFile(path.resolve('./privacy.html'));
});

server.get('/resume', (req, res) => {
  return res.sendFile(path.resolve('./履歷.pdf'));
});

server.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on ${process.env.PORT || 5000} port...`);
});
