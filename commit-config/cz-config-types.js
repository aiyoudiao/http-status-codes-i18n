const TypeCategory = {
  wip: "🚧 WIP | 在制品",
  feat: "✨ Features | 新功能",
  fix: "🐛 Bug Fixes | Bug 修复",
  perf: "⚡ Performance Improvements | 性能优化",
  docs: "📝 Documentation | 文档",
  style: "💄 Styles | 风格",
  refactor: "♻️ Code Refactoring | 代码重构",
  test: "✅ Tests | 测试",
  chore: "🎫 Chores | 其他更新",
  ci: "🔧 Continuous Integration | CI 配置",
  revert: "⏪ Reverts | 回退",
  build: "👷‍ Build System | 构建",
};

const TypesMap = {
  wip: {
    value: "🚧 wip",
    name: "🚧 半成品 | wip:     还在进行中的工作 | Work in progress.",
    emoji: ":construction:",
  },
  feat: {
    value: "✨ feat",
    name: "✨ 特性 | feat:     新增功能 | A new feature",
    emoji: ":sparkles:",
  },
  fix: {
    value: "🐛 fix",
    name: "🐛 修复 | fix:     修复缺陷 | A bug fix",
    emoji: ":bug:",
  },
  docs: {
    value: "📝 docs",
    name: "📝 文档 | docs:     文档变更 | Documentation only changes",
    emoji: ":memo:",
  },
  style: {
    value: "💄 style",
    name: "💄 格式 | style:     代码格式（不影响功能，例如空格、分号等格式修正） | Changes that do not affect the meaning of the code",
    emoji: ":lipstick:",
  },
  refactor: {
    value: "♻️ refactor",
    name: "♻️  重构 | refactor:     代码重构（不包括 bug 修复、功能新增） | A code change that neither fixes a bug nor adds a feature",
    emoji: ":recycle:",
  },
  perf: {
    value: "⚡️ perf",
    name: "⚡️ 性能 | perf:     性能优化 | A code change that improves performance",
    emoji: ":zap:",
  },
  test: {
    value: "✅ test",
    name: "✅ 测试 | test:     添加疏漏测试或已有测试改动 | Adding missing tests or correcting existing tests",
    emoji: ":white_check_mark:",
  },
  build: {
    value: "📦️ build",
    name: "📦️ 构建 | build:     构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等） | Changes that affect the build system or external dependencies",
    emoji: ":package:",
  },
  ci: {
    value: "⚙️ ci",
    name: "⚙️ 集成 | ci:     修改 CI 配置、脚本 | Changes to our CI configuration files and scripts",
    emoji: ":ferris_wheel:",
  },
  chore: {
    value: "🔨 chore",
    name: "🔨 其他 | chore:     对构建过程或辅助工具和库的更改（不影响源文件、测试用例） | Other changes that don't modify src or test files",
    emoji: ":hammer:",
  },
  revert: {
    value: "⏪️ revert",
    name: "⏪️ 回退 | revert:     回滚 commit | Reverts a previous commit",
    emoji: ":rewind:",
  },
};

// eslint-disable-next-line compat/compat
const getTypes = () => Object.values(TypesMap);

const getChangeLogTypes = () => {
  const types = getTypes();
  return types.map(({ value, name, emoji }) => ({
    type: value,
    section: name,
    hiddend: false,
  }));
};

module.exports = {
  TypesMap,
  getTypes,
  getChangeLogTypes,
  TypeCategory,
};
