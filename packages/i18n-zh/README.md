## 🌐 @http-status-codes/i18n-zh


### @http-status-codes/i18n-zh 是什么？


它提供了21种国家语言的 HTTP 状态码消息相关的信息📜，当你需要处理 HTTP 状态码相关事项的时候，可以试试它，非常简单。


**🚀 支持：**
[x] HttpStatusText 枚举，支持 英文常量 和 h{状态码数值}的方式获取状态码对应的原因短语。比如 `HttpStatusText.OK` 或 `HttpStatusText.h200`。
[x] HttpStatusDescription 枚举，支持 英文常量 和 h{状态码数值}的方式获取状态码对应的详细描述。比如 `HttpStatusDescription.OK` 或 `HttpStatusDescription.h200`。
[x] HttpStatusCode 枚举，支持 英文常量 和 h{状态码数值}的方式获取状态码对应的数值。 比如 `HttpStatusCode.OK` 或 `HttpStatusCode.h200`。
[x] 支持通过 `isCodeOrTextValid` 来校验 状态码、状态码原因短语 是否有效。比如 `isCodeOrTextValid(200)` 或 `isCodeOrTextValid('OK')` 都为 true。
[x] 支持通过 `getStatusInfo` 来获取指定状态码 或 状态码原因短语 所对应的完整 信息，比如 状态码、原因短语和详细描述、 是否成功等信息。
[x] 支持通过 `isStatusSuccessful` 直接获取 当前状态码是否正常。
[x] 支持通过 `getSimpleStatusMessage` 方法获取简单的状态码信息，比如 `200 OK`。
[x] 支持通过 `getStatusMessage` 方法获取指定状态码的简单信息，比如 `200 OK：The standard response for successful HTTP requests.`。
[x] 支持通过 `getStatusCode` 方法获取指定状态码的简单信息，比如 `getStatusCode('OK') -> 200`。
[x] 支持通过 `getStatusText` 方法获取指定状态码的原因短语，比如 `getStatusText(200) -> 'OK'`。


### ⚔️ 为什么要做它？


http-status-codes 库本身并不支持国际化（i18n）🌍，而我的项目中需要支持一下，问了 GPT 有哪些库可以满足我的需求，它胡说八道，告诉我有一个 @http-status-codes/i18n，但最终没有找到这个所谓的 @http-status-codes/i18n，于是我做了它～


### 💉 参考灵感


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 技术选型


1. 我想用 `nx` 快速开发，然后就用 nx 脚手架来快速生成项目工程
2. 我想用 `ts-morph` 来生成代码
3. 我想用 `飞书/多纬表格/字段捷径` 来进行 AI 翻译
4. 我想用 XLSX 转 JSON，于是就用 翻译的表格来 生成 JSON 配置
5. 我想用 JSON 转 Project，于是就用 JSON 配置来生成多语言的项目


### 🔥 优点


✂️ 轻量级： ES6、TS，扩展性好，兼容性好，多包支持，按需使用。

⚡ 强：支持多国语言，最多支持 21 个国家，依赖包支持多种资源格式 `'cjs', 'esm', 'es', 'amd', 'iife', 'umd', 'system'` ，多次压缩，压缩效果好。

⚙️ ️简单：有细粒度的api和粗粒度的api，使用起来非常方便。


### 📚 快速使用


只需要运行以下任意一条命令来正常安装，具体的安装命令以你当前项目中的依赖环境为准，默认使用 npm。



```bash
npm install @http-status-codes/i18n-zh
yarn add @http-status-codes/i18n-zh
pnpm i @http-status-codes/i18n-zh
```



```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-zh";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK：The standard response for successful HTTP requests.

```




### ⚡ 功能列表



| API                                               | Result                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------ |
| HttpStatusCode.ACCEPTED                           | 202                                                                      |
| HttpStatusCodeByCode.h100                         | 100                                                                      |
| HttpStatusText.OK                                 | OK                                                                       |
| HttpStatusTextByCode.h200                         | OK                                                                       |
| HttpStatusDescription.ACCEPTED                    | 已接受：请求已被接受但尚未处理完毕。此代码不保证请求会成功处理。                                         |
| HttpStatusDescriptionByCode.h200                  | 成功：标准的成功 HTTP 请求响应。                                                      |
| isCodeOrTextValid(200)                            | true                                                                     |
| isCodeOrTextValid('OK')                           | true                                                                     |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                     |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                     |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                     |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                     |
| getStatusInfo(200)                                | {"code":200,"message":"成功：标准的成功 HTTP 请求响应。","success":true}              |
| getStatusInfo('OK')                               | {"code":200,"message":"成功：标准的成功 HTTP 请求响应。","success":true}              |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"继续：服务器已经收到请求头，客户端应继续发送请求主体。","success":true}      |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"已接受：请求已被接受但尚未处理完毕。此代码不保证请求会成功处理。","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"成功：标准的成功 HTTP 请求响应。","success":true}              |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"成功：标准的成功 HTTP 请求响应。","success":true}              |
| isStatusSuccessful(200)                           | true                                                                     |
| isStatusSuccessful('OK')                          | true                                                                     |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                     |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                     |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                     |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                     |
| getSimpleStatusMessage(200)                       | 200 成功                                                                   |
| getSimpleStatusMessage('OK')                      | 200 成功                                                                   |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 继续                                                                   |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 已接受                                                                  |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 成功                                                                   |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 成功                                                                   |
| getStatusMessage(200)                             | 200 成功：标准的成功 HTTP 请求响应。                                                  |
| getStatusMessage('OK')                            | 200 成功：标准的成功 HTTP 请求响应。                                                  |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 继续：服务器已经收到请求头，客户端应继续发送请求主体。                                          |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 已接受：请求已被接受但尚未处理完毕。此代码不保证请求会成功处理。                                     |
| getStatusMessage(HttpStatusText.OK)               | 200 成功：标准的成功 HTTP 请求响应。                                                  |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 成功：标准的成功 HTTP 请求响应。                                                  |
| getStatusCode('OK')                               | 200                                                                      |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                      |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                      |
| getStatusText(200)                                | OK                                                                       |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                 |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                 |


### ✨ 效果展示


我希望能够有一个简单的展示页面，可以展示当前的状态码信息，以及对应的详细描述，这样可以方便用户查看。\
目前可以先看看代码：https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts


### 📦 所有的安装包



| 标题    | 描述                 | 源码        | 包名                       |
| ------- | -------------------- | ----------- | -------------------------- |
| zh      | 中文                 | packages/i18n-zh | [@http-status-codes/i18n-zh](https://www.npmjs.com/package/@http-status-codes/i18n-zh) |
| en      | 英文                 | packages/i18n-en | [@http-status-codes/i18n-en](https://www.npmjs.com/package/@http-status-codes/i18n-en) |
| ja      | 日语                 | packages/i18n-ja | [@http-status-codes/i18n-ja](https://www.npmjs.com/package/@http-status-codes/i18n-ja) |
| th      | 泰语                 | packages/i18n-th | [@http-status-codes/i18n-th](https://www.npmjs.com/package/@http-status-codes/i18n-th) |
| hi      | 印地语               | packages/i18n-hi | [@http-status-codes/i18n-hi](https://www.npmjs.com/package/@http-status-codes/i18n-hi) |
| id      | 印度尼西亚语         | packages/i18n-id | [@http-status-codes/i18n-id](https://www.npmjs.com/package/@http-status-codes/i18n-id) |
| zh-Hant | 繁体中文             | packages/i18n-zh-Hant | [@http-status-codes/i18n-zh-Hant](https://www.npmjs.com/package/@http-status-codes/i18n-zh-Hant) |
| fr      | 法语                 | packages/i18n-fr | [@http-status-codes/i18n-fr](https://www.npmjs.com/package/@http-status-codes/i18n-fr) |
| es      | 西班牙语             | packages/i18n-es | [@http-status-codes/i18n-es](https://www.npmjs.com/package/@http-status-codes/i18n-es) |
| pt      | 葡萄牙语             | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i18n-pt) |
| ko      | 韩语                 | packages/i18n-ko | [@http-status-codes/i18n-ko](https://www.npmjs.com/package/@http-status-codes/i18n-ko) |
| vi      | 越南语               | packages/i18n-vi | [@http-status-codes/i18n-vi](https://www.npmjs.com/package/@http-status-codes/i18n-vi) |
| ru      | 俄语                 | packages/i18n-ru | [@http-status-codes/i18n-ru](https://www.npmjs.com/package/@http-status-codes/i18n-ru) |
| de      | 德语                 | packages/i18n-de | [@http-status-codes/i18n-de](https://www.npmjs.com/package/@http-status-codes/i18n-de) |
| it      | 意大利语             | packages/i18n-it | [@http-status-codes/i18n-it](https://www.npmjs.com/package/@http-status-codes/i18n-it) |
| ar      | 阿拉伯语             | packages/i18n-ar | [@http-status-codes/i18n-ar](https://www.npmjs.com/package/@http-status-codes/i18n-ar) |
| pl      | 波兰语               | packages/i18n-pl | [@http-status-codes/i18n-pl](https://www.npmjs.com/package/@http-status-codes/i18n-pl) |
| tl      | 塔加路语（菲律宾语） | packages/i18n-tl | [@http-status-codes/i18n-tl](https://www.npmjs.com/package/@http-status-codes/i18n-tl) |
| ms      | 马来语               | packages/i18n-ms | [@http-status-codes/i18n-ms](https://www.npmjs.com/package/@http-status-codes/i18n-ms) |
| tr      | 土耳其语             | packages/i18n-tr | [@http-status-codes/i18n-tr](https://www.npmjs.com/package/@http-status-codes/i18n-tr) |
| hu      | 匈牙利语             | packages/i18n-hu | [@http-status-codes/i18n-hu](https://www.npmjs.com/package/@http-status-codes/i18n-hu) |
