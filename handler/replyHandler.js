const quickReplies = require('./defaultQuickReplies');
const { solveWorkLeaderExperience, solveWorkLeaderExperienceDetail } = require('./workLeaderExperience');
const { solveParticipateProject, solveParticipateProjectDetail } = require('./participateProject');
const { solveTeachingExperience, solveTeachingExperienceDetail } = require('./teachingExperience');

module.exports = async function replyHandler(context, payload) {
  switch (payload) {
    case 'PERSONAL_INFORMATION':
      await solvePersonalInformation(context);
      break;

    case 'WORK_LEADER_EXPERIENCE':
      await solveWorkLeaderExperience(context);
      break;

    case 'WORK_LEADER_EXPERIENCE_IN_CNA':
      await solveWorkLeaderExperienceDetail(context, payload);
      break;

    case 'WORK_LEADER_EXPERIENCE_IN_CCU_MIS':
      await solveWorkLeaderExperienceDetail(context, payload);
      break;

    case 'WORK_LEADER_EXPERIENCE_IN_CCU_ELITE':
      await solveWorkLeaderExperienceDetail(context, payload);
      break;

    case 'PARTICIPATE_PROJECT':
      await solveParticipateProject(context, 1);
      break;

    case 'PARTICIPATE_PROJECT_2':
      await solveParticipateProject(context, 2);
      break;

    case 'GET_STARTED':
      await solveGetStarted(context);
      break;

    case 'PARTICIPATE_PROJECT_CNA_ALERT_BOT':
      await solveParticipateProjectDetail(context, payload);
      break;

    case 'PARTICIPATE_PROJECT_CIAE_INQUIRE':
      await solveParticipateProjectDetail(context, payload);
      break;

    case 'PARTICIPATE_PROJECT_CCU_MIS_BOOKING':
      await solveParticipateProjectDetail(context, payload);
      break;

    case 'PARTICIPATE_PROJECT_QUALITY_CONTROL':
      await solveParticipateProjectDetail(context, payload);
      break;

    case 'PARTICIPATE_PROJECT_AUTO_REPLY_MAIL':
      await solveParticipateProjectDetail(context, payload);
      break;

    case 'PARTICIPATE_PROJECT_CCU_ELITE':
      await solveParticipateProjectDetail(context, payload);
      break;

    case 'PARTICIPATE_PROJECT_DORM_NET':
      await solveParticipateProjectDetail(context, payload);
      break;

    case 'TEACHING_EXPERIENCE':
      await solveTeachingExperience(context);
      break;

    case 'TEACHING_EXPERIENCE_DORM_NET':
      await solveTeachingExperienceDetail(context, payload);
      break;

    case 'TEACHING_EXPERIENCE_COMPUTER_OS':
      await solveTeachingExperienceDetail(context, payload);
      break;

    case 'TEACHING_EXPERIENCE_NET_ADMIN':
      await solveTeachingExperienceDetail(context, payload);
      break;

    case 'TEACHING_EXPERIENCE_NODE_JS':
      await solveTeachingExperienceDetail(context, payload);
      break;
  }
}

async function solvePersonalInformation(context) {
  const personalInformation = `
姓名 : 嚴偉安
Email : j22461615@gmail.com
手機 : 0905336361
學歷 : 國立中正大學資訊管理學系四年級(在學中)
專業技術 : JavaScript, Node.js, React, PHP, Laravel
GitHub : https://github.com/WeiAnAn

請優先以 Email 聯絡 =)
我現在正在找實習，如果對我有興趣，歡迎聯絡我！
  `;
  await context.sendText(personalInformation);
  await context.sendText('以下是完整履歷 歡迎參考');
  await context.sendAttachment({
    type: 'file',
    payload: {
      url: `${process.env.HOST}/resume`
    }
  });
}

async function solveGetStarted(context) {
  context.sendText(`
哈囉！
我是嚴偉安，平時喜歡寫寫程式
可以點選以下內容，更加了解我
我現在正在找實習，如果對我有興趣，歡迎聯絡我！
  `, quickReplies);
}