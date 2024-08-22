const { TypesMap } = require('./cz-config-types');

// !TODO 请根据项目实际情况添加 模块 和 描述
const ScopesMap = [
  // { value: 'api', name: 'API相关更改' },
  // { value: 'ui', name: '用户界面相关更改' },
  // { value: 'config', name: '配置相关更改' },
  // { value: 'docs', name: '文档相关更改' },
];

// eslint-disable-next-line compat/compat
const getScopes = () => Object.values(ScopesMap);

// !TODO 请根据项目实际情况定制化添加 模块 和 描述
const scopeOverrides = {
  // [TypesMap.fix.value]: [
  //   { value: 'merge' },
  //   { value: 'style' },
  //   { value: 'e2eTest' },
  //   { value: 'unitTest' },
  // ],
};

const getScopeOverrides = () => scopeOverrides;

module.exports = {
  ScopesMap,
  getScopes,
  scopeOverrides,
  getScopeOverrides,
};
