const workLeaderExperienceArr = [
  {
    title: '中正大學宿舍網路',
    subtitle: '網管 2015.4 ~ now',
    payload: 'WORK_LEADER_EXPERIENCE_IN_CNA',
    detail: `
提供使用者諮詢宿網相關問題，並提供疑難排解維護宿舍網路設備，保持宿舍網路運作正常。
並在擔任網管的期間，參與研發部的相關專案開發，開發了新的宿網首頁，以及設備下線通知機器人。(詳細請參考參與過專案)
      `
  }, {
    title: '中正大學資訊管理系系學會',
    subtitle: '會長 2015.6 ~ 2016.5',
    payload: 'WORK_LEADER_EXPERIENCE_IN_CCU_MIS',
    detail: `
領導約 15 名系學會成員一同經營系學會，協助處理系上事物定期舉辦活動，包括娛樂性及學術性。
  `
  }, {
    title: '中正大學紫荊書院',
    subtitle: '網頁維護 2016.7 ~ now',
    payload: 'WORK_LEADER_EXPERIENCE_IN_CCU_ELITE',
    detail: `
修復當時 SQL injection, Code injection 等漏洞，目前正進行更新頁面及後端系統計畫。(詳細請參考參與過專案)
`
  }
];

async function solveWorkLeaderExperience(context) {

  const items = workLeaderExperienceArr.map(item => {
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

async function solveWorkLeaderExperienceDetail(context, payload) {
  let item = workLeaderExperienceArr.find(item => {
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
  solveWorkLeaderExperience: solveWorkLeaderExperience,
  solveWorkLeaderExperienceDetail: solveWorkLeaderExperienceDetail
}