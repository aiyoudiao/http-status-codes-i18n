
## 🌐 @http-status-codes/i18n-zh-Hant


### @http-status-codes/i18n-zh-Hant 是什麼？ 


它提供了 21 種國家語言的 HTTP 狀態碼消息相關的資訊📜，當您需要處理 HTTP 狀態碼相關事項的時候，可以試試它，非常簡單。 


**🚀 支援：**
,[x] HttpStatusText 枚舉，支援 英文常量 和 h{狀態碼數值}的方式獲取狀態碼對應的原因短語。比如 `HttpStatusText.OK` 或 `HttpStatusText.h200`。
,[x] HttpStatusDescription 枚舉，支援 英文常量 和 h{狀態碼數值}的方式獲取狀態碼對應的詳細描述。比如 `HttpStatusDescription.OK` 或 `HttpStatusDescription.h200`。
,[x] HttpStatusCode 枚舉，支援 英文常量 和 h{狀態碼數值}的方式獲取狀態碼對應的數值。 比如 `HttpStatusCode.OK` 或 `HttpStatusCode.h200`。
,[x] 支援透過 `isCodeOrTextValid` 來校驗 狀態碼、狀態碼原因短語 是否有效。比如 `isCodeOrTextValid(200)` 或 `isCodeOrTextValid('OK')` 都為 true。
,[x] 支援透過 `getStatusInfo` 來獲取指定狀態碼 或 狀態碼原因短語 所對應的完整 資訊，比如 狀態碼、原因短語和詳細描述、 是否成功等資訊。
,[x] 支援透過 `isStatusSuccessful` 直接獲取 當前狀態碼是否正常。
,[x] 支援透過 `getSimpleStatusMessage` 方法獲取簡單的狀態碼資訊，比如 `200 OK`。
,[x] 支援透過 `getStatusMessage` 方法獲取指定狀態碼的簡單資訊，比如 `200 OK：The standard response for successful HTTP requests.`。
,[x] 支援透過 `getStatusCode` 方法獲取指定狀態碼的簡單資訊，比如 `getStatusCode('OK') -> 200`。
,[x] 支援透過 `getStatusText` 方法獲取指定狀態碼的原因短語，比如 `getStatusText(200) -> 'OK'`。 


### ⚔️ 為什麼要做它？ 


http-status-codes 庫本身並不支援國際化（i18n）🌍，而我的專案中需要支援一下，問了 GPT 有哪些庫可以滿足我的需求，它胡說八道，告訴我有一個 @http-status-codes/i18n，但最終沒有找到這個所謂的 @http-status-codes/i18n，於是我做了它～ 


### 💉 參考靈感 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 技術選型 


1. 我想用 `nx` 快速開發，然後就用 nx 腳手架來快速生成項目工程
2. 我想用 `ts-morph` 來生成代碼
3. 我想用 `飛書/多緯表格/字段捷徑` 來進行 AI 翻譯
4. 我想用 XLSX 轉 JSON，於是就用 翻譯的表格來 生成 JSON 配置
5. 我想用 JSON 轉 Project，於是就用 JSON 配置來生成多語言的項目 


### 🔥 優點 


✂️ 輕量級： ES6、TS，擴展性好，兼容性好，多包支持，按需使用。

,

⚡ 強：支持多國語言，最多支持 21 個國家，依賴包支持多種資源格式 `'cjs', 'esm', 'es', 'amd', 'iife', 'umd', 'system'` ，多次壓縮，壓縮效果好。

,

⚙️ ️簡單：有細粒度的 api 和粗粒度的 api，使用起來非常方便。 


### 📚 快速使用 


只需要運行以下任意一條命令來正常安裝，具體的安裝命令以你當前項目中的依賴環境為準，默認使用 npm 。 



```bash
npm install @http-status-codes/i18n-zh-Hant
yarn add @http-status-codes/i18n-zh-Hant
pnpm i @http-status-codes/i18n-zh-Hant
```


```javascript
import {
  取得簡單狀態訊息,
  取得狀態訊息,
  取得狀態文字,
} 從 "@http-status-codes/i18n-zh-Hant";

取得狀態文字(HttpStatusCode.OK) // OK
取得簡單狀態訊息(HttpStatusCode.OK) // 200 OK
取得狀態訊息(HttpStatusCode.OK) // 200 OK：成功 HTTP 請求的標準回應。
``` 


###  ⚡ 功能列表  



| API                                               | Result                                                                    |
| ------------------------------------------------- | ------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                       |
| HttpStatusCodeByCode.h100                         | 100                                                                       |
| HttpStatusText.OK                                 | OK                                                                        |
| HttpStatusTextByCode.h200                         | OK                                                                        |
| HttpStatusDescription.ACCEPTED                    | 已接受：請求已被接受但尚未處理完畢。此代碼不保證請求會成功處理。                                          |
| HttpStatusDescriptionByCode.h200                  | 成功：標準的成功 HTTP 請求響應。                                                       |
| isCodeOrTextValid(200)                            | true                                                                      |
| isCodeOrTextValid('OK')                           | true                                                                      |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                      |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                      |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                      |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                      |
| getStatusInfo(200)                                | {"code":200,"message":"成功：標準的成功 HTTP 請求響應。 ","success":true}              |
| getStatusInfo('OK')                               | {"code":200,"message":"成功：標準的成功 HTTP 請求響應。 ","success":true}              |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"繼續：服務器已經收到請求頭，客戶端應繼續發送請求主體。 ","success":true}      |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"已接受：請求已被接受但尚未處理完畢。此代碼不保證請求會成功處理。 ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"成功：標準的成功 HTTP 請求響應。 ","success":true}              |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"成功：標準的成功 HTTP 請求響應。 ","success":true}              |
| isStatusSuccessful(200)                           | true                                                                      |
| isStatusSuccessful('OK')                          | true                                                                      |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                      |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                      |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                      |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                      |
| getSimpleStatusMessage(200)                       | 200 成功                                                                    |
| getSimpleStatusMessage('OK')                      | 200 成功                                                                    |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 繼續                                                                    |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 已接受                                                                   |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 成功                                                                    |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 成功                                                                    |
| getStatusMessage(200)                             | 200 成功：標準的成功 HTTP 請求響應。                                                   |
| getStatusMessage('OK')                            | 200 成功：標準的成功 HTTP 請求響應。                                                   |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 繼續：服務器已經收到請求頭，客戶端應繼續發送請求主體。                                           |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 已接受：請求已被接受但尚未處理完畢。此代碼不保證請求會成功處理。                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 成功：標準的成功 HTTP 請求響應。                                                   |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 成功：標準的成功 HTTP 請求響應。                                                   |
| getStatusCode('OK')                               | 200                                                                       |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                       |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                       |
| getStatusText(200)                                | OK                                                                        |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                  |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                  |


### ✨ 效果展示 


我希望能夠有一個簡單的展示頁面，可以展示當前的狀態碼信息，以及對應的詳細描述，這樣可以方便用戶查看。\
, 目前可以先看看代碼：,https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 所有包裹 


| Title | Description | Source Code | Package Name |
| ------- | -------------------- | ----------- | -------------------------- |
| zh | Chinese | packages/i18n-zh | [@http-status-codes/i18n-zh](https://www.npmjs.com/package/@http-status-codes/i18n-zh) |
| en | English | packages/i18n-en | [@http-status-codes/i18n-en](https://www.npmjs.com/package/@http-status-codes/i18n-en) |
| ja | Japanese | packages/i18n-ja | [@http-status-codes/i18n-ja](https://www.npmjs.com/package/@http-status-codes/i18n-ja) |
| th | Thai | packages/i18n-th | [@http-status-codes/i18n-th](https://www.npmjs.com/package/@http-status-codes/i18n-th) |
| hi | Hindi | packages/i18n-hi | [@http-status-codes/i18n-hi](https://www.npmjs.com/package/@http-status-codes/i18n-hi) |
| id | Indonesian | packages/i18n-id | [@http-status-codes/i18n-id](https://www.npmjs.com/package/@http-status-codes/i18n-id) |
| zh-Hant | Traditional Chinese | packages/i18n-zh-Hant | [@http-status-codes/i18n-zh-Hant](https://www.npmjs.com/package/@http-status-codes/i18n-zh-Hant) |
| fr | French | packages/i18n-fr | [@http-status-codes/i18n-fr](https://www.npmjs.com/package/@http-status-codes/i18n-fr) |
| es | Spanish | packages/i18n-es | [@http-status-codes/i18n-es](https://www.npmjs.com/package/@http-status-codes/i18n-es) |
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i23n-pt) |
