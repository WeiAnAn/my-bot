const { MessengerHandler } = require('bottender');
const quickReplies = require('./defaultQuickReplies');
const replyHandler = require('./replyHandler');

let payload = null;

const handler = new MessengerHandler()
  .onEvent(async context => {
    payload = null;
    if (context.event.isQuickReply)
      payload = context.event.quickReply.payload
    else if(context.event.isPostback)
      payload = context.event.postback.payload  

    if(payload)
      await replyHandler(context, payload);

    await context.sendText('想瞭解我的什麼呢？', quickReplies);
  });

module.exports = handler;