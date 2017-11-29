const { MessengerBot, MemorySessionStore } = require('bottender');
const { createServer } = require('bottender/express');
const handler = require('./handler/messengerHandler');
const path = require('path');

const config = require('./bottender.config.js').messenger;

const bot = new MessengerBot({
  accessToken: config.accessToken,
  appSecret: config.appSecret,
  sessionStore: new MemorySessionStore(300)
});

bot.onEvent(handler);
bot.setInitialState({
  index: []
});

const server = createServer(bot);

server.get('/resume', (req, res) => {
  return res.sendFile(path.resolve('./履歷.pdf'));
});

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
