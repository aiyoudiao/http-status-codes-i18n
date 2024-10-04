
## 🌐 @http-status-codes/i18n-tl


### @http-status-codes/i18n-tl 是什麼？ 


Naghatag kini ng mga impormasyon kauban ang mga mensahe sa HTTP status code sa 21 nga mga wika sa nasud. Kung kinahanglan nimo pagproseso sa mga bagay bahin sa HTTP status code, subay subay ka nga subayon kini. Sobra kaayo ka simple. 


**🚀 suportado: **
- [x] Enum ng HttpStatusText, suportado ang paraan ng ingles na konstante at h{numero ng status code} upang makuha ang dahilan ng phrase na katumbas ng status code. Halimbawa, `HttpStatusText.OK` o `HttpStatusText.h200`.
- [x] Enum ng HttpStatusDescription, suportado ang paraan ng ingles na konstante at h{numero ng status code} upang makuha ang detalyadong paglalarawan na katumbas ng status code. Halimbawa, `HttpStatusDescription.OK` o `HttpStatusDescription.h200`.
- [x] Enum ng HttpStatusCode, suportado ang paraan ng ingles na konstante at h{numero ng status code} upang makuha ang numero ng status code. Halimbawa, `HttpStatusCode.OK` o `HttpStatusCode.h200`.
- [x] Suportado ang pag-verify sa `isCodeOrTextValid` upang suriin kung ang status code at ang dahilan ng phrase ng status code ay valid. Halimbawa, `isCodeOrTextValid(200)` o `isCodeOrTextValid('OK')` ay parehong true.
- [x] Suportado ang pagkuha ng kompletong impormasyon na katumbas ng partikular na status code o dahilan ng phrase ng status code sa pamamagitan ng `getStatusInfo`. Halimbawa, ang status code, ang dahilan ng phrase at ang detalyadong paglalarawan, at kung ito ay matagumpay o hindi.
- [x] Suportado ang pagkuha agad ng kung ang kasalukuyang status code ay normal sa pamamagitan ng `isStatusSuccessful`.
- [x] Suportado ang pagkuha ng simpleng impormasyon ng status code sa pamamagitan ng `getSimpleStatusMessage`, halimbawa `200 OK`.
- [x] Suportado ang pagkuha ng simpleng impormasyon na nakatalagang para sa partikular na status code sa pamamagitan ng `getStatusMessage`, halimbawa `200 OK: The standard response for successful HTTP requests.`
- [x] Suportado ang pagkuha ng simpleng impormasyon ng status code


Bakit gawin ito? 


Ang http-status-codes library mismo ay hindi sumusuporta sa internasyunalisasyon (i18n) 🌍, ngunit sa aking proyekto ay kailangan ito suportahan. Nagtanong ako kay GPT kung anong mga library ang maaaring matugunan ang pangangailangan ko, ngunit siya ay nagmumura at sinabi sa akin na mayroong isang @http-status-codes/i18n, ngunit sa wakas ay hindi ko ito mahanap ang tinutukoy na @http-status-codes/i18n, kaya ginawa ko ito ～ 


### 💉 参考灵感 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Pagsasala sa Teknolohiya 


1. Gusto kong mag-develop nang mabilis gamit ang `nx`, kaya ginamit ko ang scaffold ng nx upang mabilis na makabuo ng proyekto sa engineering
, 2. Gusto kong makabuo ng code gamit ang `ts-morph`
, 3. Gusto kong gumamit ng `Feishu / Multidimensional Table / Field Shortcut` upang magsagawa ng AI translation
, 4. Gusto kong i-convert ang XLSX sa JSON, kaya ginamit ko ang nai-translate na table upang makabuo ng JSON configuration
, 5. Gusto kong i-convert ang JSON sa Project, kaya ginamit ko ang JSON configuration upang makabuo ng multi-language na proyekto 


### 🔥 Mga Magandang Bahagi 


✂️ Liwanes nga katipon: ES6, TS, may maayong pagkahinabang sa pagpangkaugma, pagkaugma sa mga kasaligan, suporta sa daghang mga pakete, paggamit baton. 
,
,⚡ Malakas: May suporta sa mga wika sa maraming bansa, hanggang sa 21 nga mga bansa, suporta sa mga pakete sa daghang mga anyo sa mga mapagkukunan nga katulad sa `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, maraming pagkakasubo, maayong epekto sa pagkakasubo. 
,
,⚙️ ️Simple: May mga api sa mabinuligon nga detalye ug mga api sa mabinuligon nga kalabotan, napakaayo nga paggamit. 


### 📚 Gamit nga mabilis 


Kailangan niyo lang na hayagan ang alinman sa mga sumusunod na utos upang makapag-install nang tama. Ang mga konkretong utos sa pag-install ay depende sa inyong mga dependehensiyang pang-environment sa inyong kasalukuyang proyekto. Gamitin nang default ang npm. 



```bash
npm install @http-status-codes/i18n-tl
yarn add @http-status-codes/i18n-tl
pnpm i @http-status-codes/i18n-tl
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} mula sa "@http-status-codes/i18n-tl";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: Ang karaniwang tugon para sa matagumpay na mga kahilingan sa HTTP.
``` 


### ⚡ Mga Lista ng mga Pampublikong Pagganap 



| API                                               | Result                                                                                                                                                                                                |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                                                   |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                                                   |
| HttpStatusText.OK                                 | OK                                                                                                                                                                                                    |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                                                    |
| HttpStatusDescription.ACCEPTED                    | Katanggap-tanggap: Ang kahilingan ay tinanggap na ngunit hindi pa naiproseso. Ang kodigong ito ay hindi nangangako na ang kahilingan ay malulusawing maayos.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                           |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                                                  |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                                                  |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                                                  |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                                                  |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                                                  |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                                                  |
| getStatusInfo(200)                                | {"code":200,"message":"OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP. ","success":true}                                                                                  |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP. ","success":true}                                                                                  |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Patuloy: Ang server ay nakatanggap na ng mga header ng request, at ang client ay dapat magpatuloy na magpadala ng katawan ng request. ","success":true}                        |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Katanggap-tanggap: Ang kahilingan ay tinanggap na ngunit hindi pa naiproseso. Ang kodigong ito ay hindi nangangako na ang kahilingan ay malulusawing maayos. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP. ","success":true}                                                                                  |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP. ","success":true}                                                                                  |
| isStatusSuccessful(200)                           | true                                                                                                                                                                                                  |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                                                  |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                                                  |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                                                  |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                                                  |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                                                  |
| getSimpleStatusMessage(200)                       | 200 OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                       |
| getSimpleStatusMessage('OK')                      | 200 OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                       |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Patuloy: Ang server ay nakatanggap na ng mga header ng request, at ang client ay dapat magpatuloy na magpadala ng katawan ng request.                                                             |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Katanggap-tanggap: Ang kahilingan ay tinanggap na ngunit hindi pa naiproseso. Ang kodigong ito ay hindi nangangako na ang kahilingan ay malulusawing maayos.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                       |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                       |
| getStatusMessage(200)                             | 200 OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                       |
| getStatusMessage('OK')                            | 200 OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                       |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Patuloy: Ang server ay nakatanggap na ng mga header ng request, at ang client ay dapat magpatuloy na magpadala ng katawan ng request.                                                             |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Katanggap-tanggap: Ang kahilingan ay tinanggap na ngunit hindi pa naiproseso. Ang kodigong ito ay hindi nangangako na ang kahilingan ay malulusawing maayos.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                       |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP.                                                                                                                       |
| getStatusCode('OK')                               | 200                                                                                                                                                                                                   |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                                                   |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                                                   |
| getStatusText(200)                                | OK                                                                                                                                                                                                    |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                                              |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                                              |


### ✨ Pagpapakita ng Epekto 


Nais kong magkaroon ng isang simpleng pahina ng pagpapakita na maaaring ipakita ang kasalukuyang mga impormasyon ng status code, pati na rin ang mga detalyadong paglalarawan nito, para madaling tingnan ng mga user. \
, Sa ngayon, maaaring tingnan muna ang code:,https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts, 


### 📦 Lahat ng mga Pakete 

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
