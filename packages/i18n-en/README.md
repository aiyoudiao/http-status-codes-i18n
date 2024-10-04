## 🌐 @http-status-codes/i18n-en


### What is @http-status-codes/i18n-en? 


It provides information related to HTTP status code messages in 21 national languages 📜. When you need to handle matters related to HTTP status codes, you can give it a try. It's very simple. 


**🚀 Support:**
,[x] HttpStatusText enumeration, supports obtaining the reason phrase corresponding to the status code in the form of English constants and h{status code value}. For example, `HttpStatusText.OK` or `HttpStatusText.h200`.
,[x] HttpStatusDescription enumeration, supports obtaining the detailed description corresponding to the status code in the form of English constants and h{status code value}. For example, `HttpStatusDescription.OK` or `HttpStatusDescription.h200`.
,[x] HttpStatusCode enumeration, supports obtaining the value corresponding to the status code in the form of English constants and h{status code value}. For example, `HttpStatusCode.OK` or `HttpStatusCode.h200`.
,[x] Supports verifying whether the status code and status code reason phrase are valid through `isCodeOrTextValid`. For example, both `isCodeOrTextValid(200)` or `isCodeOrTextValid('OK')` are true.
,[x] Supports obtaining the complete information corresponding to the specified status code or status code reason phrase through `getStatusInfo`, such as status code, reason phrase, detailed description, and whether it is successful.
,[x] Supports directly obtaining whether the current status code is normal through `isStatusSuccessful`.
,[x] Supports obtaining simple status code information through the `getSimpleStatusMessage` method, such as `200 OK`.
,[x] Supports obtaining the simple information of the specified status code through the `getStatusMessage` method, such as `200 OK: The standard response for successful HTTP requests.`.
,[x] Supports obtaining the simple information of the specified status code through the `getStatusCode` method, such as `getStatusCode('OK') -> 200`.
,[x] Supports obtaining the reason phrase of the specified status code through the `getStatusText` method, such as `getStatusText(200) -> 'OK'`. 


### ⚔️ Why build it? 


The http-status-codes library itself does not support internationalization (i18n) 🌍. However, my project needs to support it. I asked GPT which libraries could meet my requirements, but it talked nonsense and told me there was one called @http-status-codes/i18n. Eventually, I couldn't find this so-called @http-status-codes/i18n, so I made it myself. 


### 💉 Reference inspiration 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Technology selection 


1. I want to develop quickly with `nx`, and then use the nx scaffolding to generate the project engineering quickly
,2. I want to generate code with `ts-morph`
,3. I want to conduct AI translation with `Feishu/Multi-dimensional Table/Field Shortcut`
,4. I want to convert XLSX to JSON, so I use the translated table to generate the JSON configuration
,5. I want to convert JSON to Project, so I use the JSON configuration to generate multi-language projects 


### 🔥 Advantages 


✂️ Lightweight: ES6, TS, good scalability, good compatibility, multi-package support, on-demand usage.
,
,⚡ Strong: Supports multiple languages, up to 21 countries, the dependent packages support various resource formats `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, multiple compressions, and has a good compression effect.
,
,⚙️ Simple: Has fine-grained APIs and coarse-grained APIs, and is very convenient to use. 


### 📚 Quick Use 


Just run any of the following commands for a normal installation. The specific installation command depends on the dependency environment in your current project. By default, npm is used. 



```bash
npm install @http-status-codes/i18n-en
yarn add @http-status-codes/i18n-en
pnpm i @http-status-codes/i18n-en
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-en";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: The standard response for successful HTTP requests.

``` 


### ⚡ Function List 



| API                                               | Result                                                                                                                                                                                  |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                                     |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                                     |
| HttpStatusText.OK                                 | OK                                                                                                                                                                                      |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                                      |
| HttpStatusDescription.ACCEPTED                    | Accepted：The request has been accepted but has not been processed yet. This code does not guarantee that the request will process successfully.                                         |
| HttpStatusDescriptionByCode.h200                  | OK：The standard response for successful HTTP requests.                                                                                                                                  |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                                    |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                                    |
| getStatusInfo(200)                                | {"code":200,"message":"OK：The standard response for successful HTTP requests.","success":true}                                                                                          |
| getStatusInfo('OK')                               | {"code":200,"message":"OK：The standard response for successful HTTP requests.","success":true}                                                                                          |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Continue：The server has received the request headers, and that the client should proceed to send the request body.","success":true}                              |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Accepted：The request has been accepted but has not been processed yet. This code does not guarantee that the request will process successfully.","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK：The standard response for successful HTTP requests.","success":true}                                                                                          |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK：The standard response for successful HTTP requests.","success":true}                                                                                          |
| isStatusSuccessful(200)                           | true                                                                                                                                                                                    |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                                    |
| getSimpleStatusMessage(200)                       | 200 OK                                                                                                                                                                                  |
| getSimpleStatusMessage('OK')                      | 200 OK                                                                                                                                                                                  |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Continue                                                                                                                                                                            |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Accepted                                                                                                                                                                            |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK                                                                                                                                                                                  |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK                                                                                                                                                                                  |
| getStatusMessage(200)                             | 200 OK：The standard response for successful HTTP requests.                                                                                                                              |
| getStatusMessage('OK')                            | 200 OK：The standard response for successful HTTP requests.                                                                                                                              |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Continue：The server has received the request headers, and that the client should proceed to send the request body.                                                                  |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Accepted：The request has been accepted but has not been processed yet. This code does not guarantee that the request will process successfully.                                     |
| getStatusMessage(HttpStatusText.OK)               | 200 OK：The standard response for successful HTTP requests.                                                                                                                              |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK：The standard response for successful HTTP requests.                                                                                                                              |
| getStatusCode('OK')                               | 200                                                                                                                                                                                     |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                                     |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                                     |
| getStatusText(200)                                | OK                                                                                                                                                                                      |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                                |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                                |


### ✨ Effect Display 


I hope to have a simple display page that can show the current status code information and the corresponding detailed description. This would facilitate users' viewing.
, For now, you can take a look at the code first:, https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 All Packages 


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
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i18n-pt) |
