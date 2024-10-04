## 创建模版

批量根据模版来生成模版项目。


根据需要以下代码，然后运行 `chmod +x ./create.sh && create.sh` 即可。
```js
// 初始化日志记录器
let logEntries = [];
// 忽略的目录或文件
const ignoring = ['node_modules'];
// 模板和目标路径列表
const templateTargetList = [
  {
    templateDirectory: '../../packages/i18n-en', // 模板目录
    targetDirectory: '../../packages/i18n-ja', // 目标目录
  },
];

// 搜索和替换列表
const searchReplaceList = [
  { searchStr: 'i18n-en', replaceStr: 'i18n-ja' },
  { searchStr: 'i18nEn', replaceStr: 'i18nJa' },
];
```


## 批量创建模版

运行 `chmod +x ./create.sh && create.sh latest` 即可。

根据 configs/config.json 中的 generateTemplateProjectConfig 配置，批量生成多国家语言的 模版项目。


