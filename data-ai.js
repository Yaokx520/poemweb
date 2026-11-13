/* data-ai.js — AI 创作功能数据（提示词生成 + 智能体 API 预设） */

/* 诗词种类（Prompt 生成器） */
const AI_FORMS = [
  { key:'jueju', name:'绝句', subs:['五绝','七绝'], rhyme:'近体诗默认平水韵' },
  { key:'lushi', name:'律诗', subs:['五律','七律','排律'], rhyme:'近体诗默认平水韵' },
  { key:'ci', name:'词', subs:[], rhyme:'填词默认词林正韵，记录词牌与谱体' },
  { key:'guti', name:'古体诗', subs:['五古','七古','乐府 / 歌行体'], rhyme:'古体诗可换韵，按用户指定规则处理' },
  { key:'modern', name:'现代诗', subs:['现代诗','散文诗'], rhyme:'自由诗，不限韵' }
];

/* 8 种经典风格（对应 STYLE_LIBRARY） */
const AI_STYLE_KEYS = ['豪放雄浑','沉郁顿挫','飘逸浪漫','婉约缠绵','田园淡远','清丽自然','悲慨苍凉','闲适旷达'];

/* 8 种主题（可选，也可自定义输入） */
const AI_THEMES = [
  { key:'思乡怀人', desc:'游子思归、望月怀远、故园之思' },
  { key:'送别离情', desc:'长亭折柳、灞桥送客、别后相忆' },
  { key:'壮志豪情', desc:'建功立业、边塞请缨、长风破浪' },
  { key:'忧国伤时', desc:'山河破碎、忧民悯乱、黍离之悲' },
  { key:'闲适田园', desc:'田居躬耕、东篱采菊、桑麻闲话' },
  { key:'咏史怀古', desc:'故国旧迹、兴亡之叹、千古凭栏' },
  { key:'闺怨相思', desc:'妆楼凝望、锦书难寄、烛泪罗衾' },
  { key:'哲理玄思', desc:'观水悟道、梦蝶问禅、静中见理' }
];

/* 智能体 API 平台预设（OpenAI 兼容接口为主，可自定义 Base URL） */
const AI_PROVIDERS = [
  { key:'deepseek', name:'DeepSeek', baseUrl:'https://api.deepseek.com/v1', model:'deepseek-chat', note:'OpenAI 兼容接口，浏览器一般可直连' },
  { key:'qwen', name:'通义千问（DashScope）', baseUrl:'https://dashscope.aliyuncs.com/compatible-mode/v1', model:'qwen-plus', note:'OpenAI 兼容模式，需开通 DashScope' },
  { key:'zhipu', name:'智谱清言（GLM）', baseUrl:'https://open.bigmodel.cn/api/paas/v4', model:'glm-4-air', note:'OpenAI 兼容接口' },
  { key:'moonshot', name:'Kimi（月之暗面）', baseUrl:'https://api.moonshot.cn/v1', model:'moonshot-v1-8k', note:'OpenAI 兼容接口' },
  { key:'ernie', name:'文心一言（千帆）', baseUrl:'https://qianfan.baidubce.com/v2', model:'ernie-4.0-8k', note:'需 Access Token；浏览器直连可能受 CORS 限制' },
  { key:'mimo', name:'小米 MiMo', baseUrl:'https://api.xiaomimimo.com/v1', model:'mimo', note:'以官方文档为准，可自定义 Base URL 与模型名' },
  { key:'custom', name:'OpenAI 兼容（自定义）', baseUrl:'', model:'', note:'任意 OpenAI 兼容 /chat/completions 接口' }
];
