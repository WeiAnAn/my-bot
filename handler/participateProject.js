const participateProjectArr = [
  {
    title: '宿舍網路機器異常通知機器人',
    subtitle: '使用技術 : Node.js',
    payload: 'PARTICIPATE_PROJECT_CNA_ALERT_BOT',
    detail: `
Ver 1. 當宿舍網路機器異常時，能即時發送訊息到 Facebook 中的網管群組(第三方 API)

source code: https://github.com/WeiAnAn/ccu-dormnet-alertfacebook

Ver 2. 因第一版機器人未進行 Facebook 相關驗證，因而被封鎖，目前轉用 Facebook 官方 Messenger API 以確保運作正常，日後亦可增加更多功能。

Source code: https://github.com/WeiAnAn/cna_chat_bot
`
  }, {
    title: '中正大學國際化調查系統',
    subtitle: '使用技術 : PHP, Laravel',
    payload: 'PARTICIPATE_PROJECT_CIAE_INQUIRE',
    detail: `
更新原有舊系統，提昇易用度及安全性，並加入批次上傳等功能，目前有 7000 筆以上資料

website: http://140.123.241.103/inquire/
source code: https://github.com/WeiAnAn/ciae_inquire
`
  }, {
    title: '中正大學資管系 教室借用系統',
    subtitle: '使用技術 : PHP, Laravel',
    payload: 'PARTICIPATE_PROJECT_CCU_MIS_BOOKING',
    detail: `
將原有借用流程電子化，提升借用速度，以及減少紙張使用。
目前第一階段以開發完成，現在欲開發學生證嗶卡登入功能。

website: https://booking.mis.ccu.edu.tw
         https://140.123.174.61
source code: https://github.com/WeiAnAn/ccumis_booking
`
  }, {
    title: '豐喜食品公司 品管簽核系統',
    subtitle: '使用技術 : PHP, Laravel',
    payload: 'PARTICIPATE_PROJECT_QUALITY_CONTROL',
    detail: `
總共 20 張以上表單，每張表單皆提供簽核以及資料匯出功能。
`
  }, {
    title: 'BBS 自動回信應用',
    subtitle: '使用技術 : Node.js',
    payload: 'PARTICIPATE_PROJECT_AUTO_REPLY_MAIL',
    detail: `
解決自己在宿網辦公室工作時、常忘記回值班信以及其他重要信件因而被罰錢的情形。

source code: https://github.com/WeiAnAn/auto_send_cna_mail
`
  }, {
    title: '中正大學紫荊書院網頁',
    subtitle: '使用技術 : React',
    payload: 'PARTICIPATE_PROJECT_CCU_ELITE',
    detail: `
更新目前過舊且以不敷使用的網頁，目前正在開發前端部分

Demo : https://WeiAnAn.github.io/ccuelite_frontend
測試帳號 : abc/abc
`
  }, {
    title: '宿舍網路首頁',
    subtitle: '使用技術 : React',
    payload: 'PARTICIPATE_PROJECT_DORM_NET',
    detail: `
宿網首頁更新的計畫，先寫出一個雛形供其他人員做參考，並依照此繼續開發。

Website: http://project.dorm.ccu.edu.tw/home (測試中，未完成)
source code: https://github.com/WeiAnAn/dormnet-react-example
`
  }
];

async function solveParticipateProject(context) {
  let indexArr = [];
  let buttons = [];

  if (context.state.index.length) {
    indexArr = context.state.index;
    context.setState({
      index: []
    });
  } else {
    context.setState({
      index: randomIndex()
    });
    indexArr = context.state.index;
  }

  const items = participateProjectArr.map(item => {
    return {
      title: item.title,
      subtitle: item.subtitle,
      buttons: [{
        type: 'postback',
        title: '詳細內容',
        payload: item.payload
      }]
    }
  }).filter((item, index) => {
    if (context.state.index.length)
      return indexArr.includes(index);
    else
      return !indexArr.includes(index);
  });

  if (context.state.index.length)
    buttons = [{
      type: 'postback',
      title: 'more',
      payload: 'PARTICIPATE_PROJECT'
    }];

  await context.sendListTemplate(items, buttons, { top_element_style: 'compact' });
}

async function solveParticipateProjectDetail(context, payload) {
  let item = participateProjectArr.find(item => {
    return item.payload === payload
  });

  let text = `
${item.title}
${item.subtitle}
${item.detail}
  `;
  await context.sendText(text);
}

function randomIndex() {
  const arr = makeArr();
  const indexArr = [];
  let i = 0;
  while (i++ < 4) {
    indexArr.push(arr.splice(random(arr.length), 1)[0]);
  }
  return indexArr;
}

function random(length) {
  return Math.floor(Math.random() * length);
}

function makeArr() {
  const arr = [];
  let i = 0;
  for (i = 0; i < participateProjectArr.length; i++)
    arr.push(i);
  return arr;
}

module.exports = {
  solveParticipateProject: solveParticipateProject,
  solveParticipateProjectDetail: solveParticipateProjectDetail
}