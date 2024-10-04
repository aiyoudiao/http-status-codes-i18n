
## 🌐 @http-status-codes/i18n-ko


### @http-status-codes/i18n-ko 이란 무엇입니까? 


그것은 21가지 국가의 언어로 HTTP 상태 코드 메시지와 관련된 정보를 제공합니다📜. HTTP 상태 코드와 관련된 사항을 처리해야 할 때 사용해 보세요. 매우 간단합니다. 


**🚀 지원:**
- [x] HttpStatusText 열거형: 영어 상수 및 h{상태 코드 숫자} 방식으로 상태 코드에 해당하는 원인 구문을 가져올 수 있습니다. 예를 들면 `HttpStatusText.OK` 또는 `HttpStatusText.h200`.
- [x] HttpStatusDescription 열거형: 영어 상수 및 h{상태 코드 숫자} 방식으로 상태 코드에 해당하는 상세 설명을 가져올 수 있습니다. 예를 들면 `HttpStatusDescription.OK` 또는 `HttpStatusDescription.h200`.
- [x] HttpStatusCode 열거형: 영어 상수 및 h{상태 코드 숫자} 방식으로 상태 코드에 해당하는 숫자값을 가져올 수 있습니다. 예를 들면 `HttpStatusCode.OK` 또는 `HttpStatusCode.h200`.
- [x] `isCodeOrTextValid`를 통해 상태 코드, 상태 코드 원인 구문의 유효성을 검사할 수 있습니다. 예를 들면 `isCodeOrTextValid(200)` 또는 `isCodeOrTextValid('OK')` 모두 true입니다.
- [x] `getStatusInfo`를 통해 지정된 상태 코드 또는 상태 코드 원인 구문에 해당하는 완전한 정보, 예를 들면 상태 코드, 원인 구문 및 상세 설명, 성공 여부 등의 정보를 가져올 수 있습니다.
- [x] `isStatusSuccessful`를 통해 현재 상태 코드가 정상인지 직접 얻을 수 있습니다.
- [x] `getSimpleStatusMessage` 메서드를 통해 간단한 상태 코드 정보를 가져올 수 있습니다. 예를 들면 `200 OK`.
- [x] `getStatusMessage` 메서드를 통해 지정된 상태 코드의 간단한 정보를 가져올 수 있습니다. 예를 들면 `200 OK: HTTP 요청이 성공한 표준 응답.`
- [x] `getStatusCode` 메서드를 통해 지정된 상태 코드의 간단한 정보를 가져올 수 있습니다. 예를 들면 `getStatusCode('OK') -> 200`.
- [x] `getStatusText` 메서드를 통해 지정된 상태


### ⚔️ 왜 그것을 해야 합니까? 


http-status-codes 라이브러리는 자체적으로 국제화(i18n)를 지원하지 않습니다. 저의 프로젝트에서는 이를 지원해야 하는데, GPT 에게 어떤 라이브러리가 제 요구를 충족시킬 수 있는지 물었습니다. GPT 는 거짓말을 하며 @http-status-codes/i18n 라는 것이 있다고 말했지만, 결국 이른바 @http-status-codes/i18n 를 찾지 못했습니다. 그래서 제가 이를 만들었습니다. 


### 💉 참고 영감 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 기술 선택 


1. `nx`를 사용하여 빠르게 개발하고 싶어서 nx 발판을 사용하여 프로젝트 엔지니어링을 빠르게 생성합니다.
2. `ts-morph`를 사용하여 코드를 생성하고 싶습니다.
3. `비서/다차원 표/필드 단축 경로`를 사용하여 AI 번역을 진행하고 싶습니다.
4. XLSX를 JSON으로 변경하고 싶어서 번역된 표를 사용하여 JSON 구성을 생성합니다.
5. JSON을 Project로 변경하고 싶어서 JSON 구성을 사용하여 다국어 프로젝트를 생성합니다. 


### 🔥 장점 


✂️ 가벼움: ES6, TS, 확장성 좋음, 호환성 좋음, 다중 팩키지 지원, 필요에 따라 사용.
,
, ⚡ 강력함: 다국어 지원, 최대 21개 국가 지원, 의존 팩키지는 다양한 리소스 포맷 `'cjs', 'esm', 'es', 'amd', 'iife', 'umd', 'system'`을 지원, 여러 번 압축, 압축 효과 좋음.
,
, ⚙️ 간단함: 세밀한 API와 거친 API가 있으며 사용하기 매우 편리함. 


### 📚 빠른 사용 


다음 중 어느 한 명령을 실행하여 정상적으로 설치하면 됩니다. 구체적인 설치 명령은 현재 프로젝트의 종속 환경에 따라 다르며 기본적으로 npm을 사용합니다. 



```bash
npm install @http-status-codes/i18n-ko
yarn add @http-status-codes/i18n-ko
pnpm i @http-status-codes/i18n-ko
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-ko";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: HTTP 요청이 성공적으로 완료되었을 때의 표준 응답.
``` 


### ⚡ 기능 목록 



| API                                               | Result                                                                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                           |
| HttpStatusCodeByCode.h100                         | 100                                                                                                           |
| HttpStatusText.OK                                 | OK                                                                                                            |
| HttpStatusTextByCode.h200                         | OK                                                                                                            |
| HttpStatusDescription.ACCEPTED                    | 승인됨: 요청이 수락되었지만 아직 처리되지 않았습니다. 이 코드는 요청이 성공적으로 처리될 것이라는 보장을 하지 않습니다.                                          |
| HttpStatusDescriptionByCode.h200                  | OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                                  |
| isCodeOrTextValid(200)                            | true                                                                                                          |
| isCodeOrTextValid('OK')                           | true                                                                                                          |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                          |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                          |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                          |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                          |
| getStatusInfo(200)                                | {"code":200,"message":"OK : 성공적인 HTTP 요청에 대한 표준 응답. ","success":true}                                         |
| getStatusInfo('OK')                               | {"code":200,"message":"OK : 성공적인 HTTP 요청에 대한 표준 응답. ","success":true}                                         |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"계속: 서버가 요청 헤더를 받았으며 클라이언트는 요청 본문을 전송해야 합니다. ","success":true}                          |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"승인됨: 요청이 수락되었지만 아직 처리되지 않았습니다. 이 코드는 요청이 성공적으로 처리될 것이라는 보장을 하지 않습니다. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK : 성공적인 HTTP 요청에 대한 표준 응답. ","success":true}                                         |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK : 성공적인 HTTP 요청에 대한 표준 응답. ","success":true}                                         |
| isStatusSuccessful(200)                           | true                                                                                                          |
| isStatusSuccessful('OK')                          | true                                                                                                          |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                          |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                          |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                          |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                          |
| getSimpleStatusMessage(200)                       | 200 OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                              |
| getSimpleStatusMessage('OK')                      | 200 OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                              |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 계속: 서버가 요청 헤더를 받았으며 클라이언트는 요청 본문을 전송해야 합니다.                                                               |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 승인됨: 요청이 수락되었지만 아직 처리되지 않았습니다. 이 코드는 요청이 성공적으로 처리될 것이라는 보장을 하지 않습니다.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                              |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                              |
| getStatusMessage(200)                             | 200 OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                              |
| getStatusMessage('OK')                            | 200 OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                              |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 계속: 서버가 요청 헤더를 받았으며 클라이언트는 요청 본문을 전송해야 합니다.                                                               |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 승인됨: 요청이 수락되었지만 아직 처리되지 않았습니다. 이 코드는 요청이 성공적으로 처리될 것이라는 보장을 하지 않습니다.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                              |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK : 성공적인 HTTP 요청에 대한 표준 응답.                                                                              |
| getStatusCode('OK')                               | 200                                                                                                           |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                           |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                           |
| getStatusText(200)                                | OK                                                                                                            |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                      |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                      |


### ✨ 효과 전시 


저는 간단한 디스플레이 페이지가 있기를 바랍니다. 이 페이지는 현재 상태 코드 정보와 해당하는 상세 설명을 보여줄 수 있어야 하고, 이렇게 하면 사용자가 확인하기 편리합니다. \
, 현재는 먼저 코드를 확인할 수 있습니다: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 모든 패키지 
| Title | Description | Source Code | Package Name |
| ------- | -------------------- | ----------- | -------------------------- |
| zh | Chinese | packages/i18n-zh | [@http-status-codes/i18n-zh](https://www.npmjs.com/package/@http-status-codes/i18n-zh) |
| en | English | packages/i18n-en | [@http-status-codes/i18n-en](https://www.npmjs.com/package/@http-status-codes/i18n-en) |
| ja | Japanese | packages/i18n-ja | [@http-status-codes/i18n-ja](https://www.npmjs.com/package/@http-status-codes/i18n-ja) |
| th | Thai | packages/i18n-th | [@http-status-codes/i18n-th](https://www.npmjs.com/package/@http-status-codes/i18n-th) |
| hi | Hindi | packages/i18n-hi | [@http-status-codes/i18n-hi](https://www.npmjs.com/package/@http-status-codes/i18n-hi) |
| id | Indonesian | packages/i18n-id | [@http-status-codes/i18n-id](https://www.npmjs.com/package/@http-status-codes/i18n-id) |
| zh-hant | Traditional Chinese | packages/i18n-zh-hant | [@http-status-codes/i18n-zh-hant](https://www.npmjs.com/package/@http-status-codes/i18n-zh-hant) |
| fr | French | packages/i18n-fr | [@http-status-codes/i18n-fr](https://www.npmjs.com/package/@http-status-codes/i18n-fr) |
| es | Spanish | packages/i18n-es | [@http-status-codes/i18n-es](https://www.npmjs.com/package/@http-status-codes/i18n-es) |
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i18n-pt) |
| ko      | Korean                 | packages/i18n-ko | [@http-status-codes/i18n-ko](https://www.npmjs.com/package/@http-status-codes/i18n-ko) |
| vi      | Vietnamese               | packages/i18n-vi | [@http-status-codes/i18n-vi](https://www.npmjs.com/package/@http-status-codes/i18n-vi) |
| ru      | Russian                 | packages/i18n-ru | [@http-status-codes/i18n-ru](https://www.npmjs.com/package/@http-status-codes/i18n-ru) |
| de      | German                 | packages/i18n-de | [@http-status-codes/i18n-de](https://www.npmjs.com/package/@http-status-codes/i18n-de) |
| it      | Italian             | packages/i18n-it | [@http-status-codes/i18n-it](https://www.npmjs.com/package/@http-status-codes/i18n-it) |
| ar      | Arabic             | packages/i18n-ar | [@http-status-codes/i18n-ar](https://www.npmjs.com/package/@http-status-codes/i18n-ar) |
| pl      | Polish               | packages/i18n-pl | [@http-status-codes/i18n-pl](https://www.npmjs.com/package/@http-status-codes/i18n-pl) |
| tl      | Tagalog (Filipino) | packages/i18n-tl | [@http-status-codes/i18n-tl](https://www.npmjs.com/package/@http-status-codes/i18n-tl) |
| ms      | Malay              | packages/i18n-ms | [@http-status-codes/i18n-ms](https://www.npmjs.com/package/@http-status-codes/i18n-ms) |
| tr      | Turkish             | packages/i18n-tr | [@http-status-codes/i18n-tr](https://www.npmjs.com/package/@http-status-codes/i18n-tr) |
| hu      | Hungarian             | packages/i18n-hu | [@http-status-codes/i18n-hu](https://www.npmjs.com/package/@http-status-codes/i18n-hu) |
