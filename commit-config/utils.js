const { execSync } = require('child_process');

// 根据 git status 动态分割，获取模块范围
module.exports.getDynamicScopes = getStaticScopes => {
  // 获取已更改的文件列表
  const changedFiles = execSync('git status --porcelain')
    .toString()
    .split('\n');

  // 从文件路径中提取 scope
  const dynamicScopes = changedFiles
    .map(file => {
      const match = file.match(/^\s*[A-Z]\s+src\/(.+?)\/[^/]+$/);
      return match ? match[1].split('/') : null;
    })
    .filter(Boolean)
    .flat();

  // 去重并合并静态和动态 scopes
  const uniqueScopes = Array.from(
    new Set([
      // eslint-disable-next-line compat/compat
      ...Object.values(getStaticScopes?.() || {}).map(scope => scope.value),
      ...dynamicScopes,
    ])
  ).map(scope => {
    // 将驼峰命名或 Pascal 命名转换为 xx-xx-xx 格式
    return scope
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase();
  });

  return uniqueScopes.map(scope => ({ value: scope, name: `${scope} 相关更改` }));
};
