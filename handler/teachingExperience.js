const teachingExperienceArr = [
  {
    'title': '宿舍網路說明會',
    'subtitle': '講師 2015.09',
    'payload': 'TEACHING_EXPERIENCE_DORM_NET',
    'detail': `
與新生宣傳宿舍網路相關資訊，如架構、規範等等。    
`
  }, {
    'title': '電腦硬體介紹與作業系統安裝',
    'subtitle': '講師 2016.12',
    'payload': 'TEACHING_EXPERIENCE_COMPUTER_OS',
    'detail': `
介紹電腦相關硬體，以及作業系統安裝流程。
簡報 : http://www.cna.ccu.edu.tw/~cnaftp/2016Lesson_Fall/Hardware%20x%20AP%20x%20chromeOS.pptx
`
  }, {
    'title': '網管甄選課程',
    'subtitle': '講師 2017.04',
    'payload': 'TEACHING_EXPERIENCE_NET_ADMIN',
    'detail': `
介紹宿舍網路所使用的機器、相關防禦機制、以及指令設定的部分。
簡報：https://cna.ccu.edu.tw/~cnaftp/2017NA_Spring/Admin.pdf
`
  }, {
    'title': 'Node.js 搭建後端網頁伺服器',
    'subtitle': '講師 2017.09',
    'payload': 'TEACHING_EXPERIENCE_NODE_JS',
    'detail': `
介紹如何以 node.js 建立網頁伺服器，以及基本的伺服器安全概念。
簡報：https://hackmd.io/p/BJrBgpotb#/
Demo：https://express-example-full.herokuapp.com/
Source code: https://github.com/WeiAnAn/express-example-full
`
  }
];

async function solveTeachingExperience(context) {
  const items = teachingExperienceArr.map(item => {
    return {
      title: item.title,
      subtitle: item.subtitle,
      buttons: [{
        type: 'postback',
        title: '詳細內容',
        payload: item.payload
      }]
    }
  })

  await context.sendListTemplate(items, [], { top_element_style: 'compact' });
}

async function solveTeachingExperienceDetail(context, payload) {
  let item = teachingExperienceArr.find(item => {
    return item.payload === payload
  });

  let text = `
${item.title}
${item.subtitle}
${item.detail}
 `;
  await context.sendText(text);
}

module.exports = {
  solveTeachingExperience: solveTeachingExperience,
  solveTeachingExperienceDetail: solveTeachingExperienceDetail
}