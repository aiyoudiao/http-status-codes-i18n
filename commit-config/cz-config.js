const { getTypes } = require("./cz-config-types");
const { getScopes, getScopeOverrides } = require("./cz-config-scope");
const { getDynamicScopes } = require("./utils");

// cz.config.js
/** @type {import('cz-git').UserConfig['prompt']} */
module.exports = {
  alias: { fd: "📝 docs(common): 文档变更" },
  messages: {
    type: "选择你要提交的类型 : 🎨",
    scope: "选择一个提交范围（可选）: 📝",
    customScope: "请输入自定义的提交范围 : 💡",
    subject: "填写简短精炼的变更描述: 📝（不超过50个字符）",
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
    breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
    footerPrefixesSelect: "选择关联issue前缀（可选）:",
    customFooterPrefix: "输入自定义issue前缀 :",
    footer:
      "列出此更改关联的飞书任务号，比如 #1234567890，多个可用|隔开： 📌(非必填)\n",
    generatingByAI: "正在通过 AI 生成你的提交简短描述...",
    generatedSelectByAI: "选择一个 AI 生成的简短描述:",
    confirmCommit: "是否提交或修改commit ? ✔️ （Y/n）",
  },
  // eslint-disable-next-line compat/compat
  types: getTypes(),
  useEmoji: false,
  emojiAlign: "center",
  useAI: false,
  aiNumber: 1,
  themeColorCode: "",
  scopes: getDynamicScopes(getScopes),
  scopeOverrides: getScopeOverrides(),
  allowCustomScopes: true,
  allowEmptyScopes: true,
  customScopesAlias: "以上都不是？我要自定义",
  emptyScopesAlias: "跳过",
  upperCaseSubject: false,
  markBreakingChangeMode: false,
  allowBreakingChanges: ["feat", "fix"],
  breaklineNumber: 100,
  breaklineChar: "|",
  skipQuestions: ["body", "breaking", "footerPrefix"],
  issuePrefixes: [
    // { value: 'link', name: 'link:     链接 ISSUES 进行中' },
    // { value: 'closed', name: 'closed:   标记 ISSUES 已完成' },
  ],
  customIssuePrefixAlign: "top",
  emptyIssuePrefixAlias: "跳过",
  customIssuePrefixAlias: "自定义前缀",
  allowCustomIssuePrefix: true,
  allowEmptyIssuePrefix: true,
  confirmColorize: true,
  maxHeaderLength: 100,
  maxSubjectLength: 100,
  defaultBody: "",
  defaultIssues: "",
  defaultScope: "",
  customScopesAlign: "bottom",
  defaultSubject: "",
  enableMultipleScopes: true,
  scopeEnumSeparator: "&",
};
