
## 🌐 @http-status-codes/i18n-ru


Что такое @http-status-codes/i18n-ru? 


Он предоставляет информацию о сообщениях HTTP-статус-кодов на 21 национальных языках 📜. Когда вам нужно обработать вопросы, связанные с HTTP-статус-кодами, попробуйте это, это очень просто. 


**🚀 Поддержка: **
- [x]  Перечисление HttpStatusText, поддерживается получение фразы причины статуса кодов с помощью английских констант и h{значение статуса Кодов}. Например, `HttpStatusText.OK` или `HttpStatusText.h200`.
- [x]  Перечисление HttpStatusDescription, поддерживается получение подробного описания статуса Кодов с помощью английских констант и h{значение статуса Кодов}. Например, `HttpStatusDescription.OK` или `HttpStatusDescription.h200`.
- [x]  Перечисление HttpStatusCode, поддерживается получение числового значения статуса Кодов с помощью английских констант и h{значение статуса Кодов}. Например, `HttpStatusCode.OK` или `HttpStatusCode.h200`.
- [x]  Поддерживается проверка валидности статуса Кодов и фразы причины с помощью `isCodeOrTextValid`. Например, `isCodeOrTextValid(200)` или `isCodeOrTextValid('OK')` - оба верны.
- [x]  Поддерживается получение полной информации о конкретном статусе Кодов или фразе причины с помощью `getStatusInfo`. Например, информация о статусе Кодов, фразе причины, подробном описании, успешности и т.д.
- [x]  Поддерживается прямое получение статуса нормальности текущего Статуса Кодов с помощью `isStatusSuccessful`.
- [x]  Поддерживается получение простой информации о статусе Кодов с помощью `getSimpleStatusMessage`, например, `200 OK`.
- [x]  Поддерживается получение простой информации о конкретном Статусе Кодов с помощью `getStatusMessage`, например, `200 OK: The standard response for successful HTTP requests.`
- [x]  Поддерживается получение числовой информации о конкретном Статусе Кодов с помощью `getStatusCode`, например, `getStatusCode('OK') -> 200`.
- [x]  Поддерживается получение фразы причины конкретного Статуса Кодов с помощью `getStatusText`, например, `getStatusText(200) -> 'OK'`. 


Почему это делать? 


Библиотека http-status-codes сама по себе не поддерживает интернационализацию (i18n) 🌍, а в моем проекте это требуется. Спросил у GPT, какие библиотеки могут удовлетворить мои потребности, но он ерунду сказал, сообщив о несуществующей @http-status-codes/i18n. В итоге я сделал это самостоятельно. 


### 💉  Референсное вдохновение  


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Технологический выбор 


1. Я хочу быстро разработать с помощью `nx`, и затем использовать строительную лесницу nx для быстрого создания проекта.
2. Я хочу сгенерировать код с помощью `ts-morph`.
3. Я хочу проводить AI-перевод с помощью `Feishu/Многомерная таблица/Краткий путь поля`.
4. Я хочу перевести XLSX в JSON, и поэтому использовать переведенную таблицу для создания конфигурации JSON.
5. Я хочу перевести JSON в проект, и поэтому использовать конфигурацию JSON для создания многоязычного проекта. 


### 🔥 Плюсы 


✂️ Легкий вес: ES6, TS, хорошая масштабируемость, хорошая совместимость, поддержка нескольких пакетов, использование по требованию.
,
,⚡ Мощный: Поддержка нескольких языков, максимум 21 страна, поддержка зависимых пакетов для нескольких форматов ресурсов `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, многократная сжатие, хороший эффект сжатия.
,
,⚙️ Простой: Имеет тонкую и грубую粒度ную api, очень удобно использовать. 


### 📚 Быстрое использование 


Просто запустите любую из следующих команд для нормальной установки. Конкретная команда установки зависит от среды зависимостей в вашем текущем проекте. По умолчанию используйте npm. 



```bash
npm install @http-status-codes/i18n-ru
yarn add @http-status-codes/i18n-ru
pnpm i @http-status-codes/i18n-ru
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} из "@http-status-codes/i18n-ru";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: Стандартный ответ для успешных HTTP-запросов.
``` 


### ⚡ Список функций 



| API                                               | Result                                                                                                                                             |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                |
| HttpStatusText.OK                                 | OK                                                                                                                                                 |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                 |
| HttpStatusDescription.ACCEPTED                    | Принято: Запрос был принят, но еще не обработан. Этот код не гарантирует успешную обработку запроса.                                               |
| HttpStatusDescriptionByCode.h200                  | OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                           |
| isCodeOrTextValid(200)                            | true                                                                                                                                               |
| isCodeOrTextValid('OK')                           | true                                                                                                                                               |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                               |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                               |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                               |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                               |
| getStatusInfo(200)                                | {"code":200,"message":"OK: Стандартный ответ для успешных HTTP-запросов.\nУспешно: Стандартный ответ для успешных HTTP-запросов. ","success":true} |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: Стандартный ответ для успешных HTTP-запросов.\nУспешно: Стандартный ответ для успешных HTTP-запросов. ","success":true} |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Продолжайте: Сервер получил заголовки запроса, и клиенту следует продолжить отправлять тело запроса. ","success":true}      |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Принято: Запрос был принят, но еще не обработан. Этот код не гарантирует успешную обработку запроса. ","success":true}      |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: Стандартный ответ для успешных HTTP-запросов.\nУспешно: Стандартный ответ для успешных HTTP-запросов. ","success":true} |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: Стандартный ответ для успешных HTTP-запросов.\nУспешно: Стандартный ответ для успешных HTTP-запросов. ","success":true} |
| isStatusSuccessful(200)                           | true                                                                                                                                               |
| isStatusSuccessful('OK')                          | true                                                                                                                                               |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                               |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                               |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                               |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                               |
| getSimpleStatusMessage(200)                       | 200 OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                       |
| getSimpleStatusMessage('OK')                      | 200 OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                       |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Продолжайте: Сервер получил заголовки запроса, и клиенту следует продолжить отправлять тело запроса.                                           |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Принято: Запрос был принят, но еще не обработан. Этот код не гарантирует успешную обработку запроса.                                           |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                       |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                       |
| getStatusMessage(200)                             | 200 OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                       |
| getStatusMessage('OK')                            | 200 OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                       |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Продолжайте: Сервер получил заголовки запроса, и клиенту следует продолжить отправлять тело запроса.                                           |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Принято: Запрос был принят, но еще не обработан. Этот код не гарантирует успешную обработку запроса.                                           |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                       |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: Стандартный ответ для успешных HTTP-запросов.
Успешно: Стандартный ответ для успешных HTTP-запросов.                                       |
| getStatusCode('OK')                               | 200                                                                                                                                                |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                |
| getStatusText(200)                                | OK                                                                                                                                                 |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                           |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                           |


Показ результатов 


Я надеюсь иметь простую страницу отображения, которая может отображать текущий код состояния и соответствующее подробное описание, чтобы пользователям было удобно просматривать. \
 В настоящее время можно сначала посмотреть код: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Все пакеты 
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
