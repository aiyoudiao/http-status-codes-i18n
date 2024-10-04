
## 🌐 @http-status-codes/i18n-pl


### @http-status-codes/i18n-pl czym jest? 


Udostępnia informacje dotyczące komunikatów statusu HTTP w 21 językach krajowych 📜. Kiedy trzeba zajmować się sprawami związanymi ze statusami HTTP, można to wypróbować. Jest to bardzo proste. 


**🚀 Wsparcie: **
,[x] Enumeracja HttpStatusText, obsługuje zarówno stałe angielskie, jak i formę h{wartość kodu statusu} w celu uzyskania odpowiedniego opisu przyczyny dla kodu statusu. Na przykład `HttpStatusText.OK` lub `HttpStatusText.h200`.
,[x] Enumeracja HttpStatusDescription, obsługuje zarówno stałe angielskie, jak i formę h{wartość kodu statusu} w celu uzyskania szczegółowego opisu dla kodu statusu. Na przykład `HttpStatusDescription.OK` lub `HttpStatusDescription.h200`.
,[x] Enumeracja HttpStatusCode, obsługuje zarówno stałe angielskie, jak i formę h{wartość kodu statusu} w celu uzyskania wartości kodu statusu. Na przykład `HttpStatusCode.OK` lub `HttpStatusCode.h200`.
,[x] Obsługuje walidację kodu statusu i frazy opisującej przyczynę za pomocą `isCodeOrTextValid`. Na przykład `isCodeOrTextValid(200)` lub `isCodeOrTextValid('OK')` zwracają prawdę.
,[x] Obsługuje pobieranie pełnej informacji dla określonego kodu statusu lub frazy opisującej przyczynę za pomocą `getStatusInfo`, np. informacji o kodzie statusu, frazie opisującej przyczynę i szczegółowym opisie oraz czy było sukcesem.
,[x] Obsługuje bezpośrednie pobieranie informacji, czy dany kod statusu jest prawidłowy za pomocą `isStatusSuccessful`.
,[x] Obsługuje pobieranie prostego komunikatu o kodzie statusu za pomocą metody `getSimpleStatusMessage`, np. `200 OK`.
,[x] Obsługuje pobieranie prostego komunikatu dla określonego kodu statusu za pomocą metody `getStatusMessage`, np. `200 OK: The standard response for successful HTTP requests.`
,[x] Obsługuje pobieranie wartości kodu statusu dla określonego kodu statusu za pomocą metody `getStatusCode`, np. `getStatusCode('


### ⚔️ Dlaczego to robić? 


Biblioteka http-status-codes sama w sobie nie obsługuje internacjonalizacji (i18n) 🌍, a w moim projekcie taka funkcjonalność jest wymagana. Zapytałem GPT, jakie biblioteki mogą spełnić moje potrzeby. Rozmówca wmieszał się, mówiąc mi o pewnej @http-status-codes/i18n, ale ostatecznie nie znalazłem tej rzekomej @http-status-codes/i18n, więc zrobiłem to sam. 


Nie można dostarczyć odpowiedzi bez konkretnego tekstu do przetłumaczenia. Proszę podać konkretną treść, aby przeprowadzić tłumaczenie na język polski. 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Wybór technologii 


1. Chcę szybko rozwijać za pomocą `nx`, więc używam rusztowania nx do szybkiego generowania projektu roboczego.
2. Chcę generować kod za pomocą `ts-morph`.
3. Chcę przeprowadzić tłumaczenie AI przy użyciu `FeiShu/Multi-Dimensional Table/Field Shortcut`.
4. Chcę przekształcić XLSX na JSON, więc używam przetłumaczonej tabelki do generowania konfiguracji JSON.
5. Chcę przekształcić JSON na Projekt, więc używam konfiguracji JSON do generowania projektu w wielu językach. 


### 🔥 zalety 


✂️ Lekkie: ES6, TS, dobra skalowalność, dobra kompatybilność, wsparcie wielu pakietów, użycie według zapotrzebowania.
,
,⚡ Silne: Wsparcie wielu języków krajowych, maksymalnie 21 krajów, wsparcie pakietów zależnych dla wielu formatów zasobów `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, wielokrotna kompresja, dobry efekt kompresji.
,
,⚙️ Łatwe: Dostępne są zarówno szczegółowe API, jak i ogólne API, bardzo łatwe w użyciu. 


### 📚 Szybkie użycie 


Wystarczy uruchomić dowolną z poniższych komend w celu prawidłowej instalacji. Konkretna komenda instalacji zależy od środowiska zależności w bieżącym projekcie. Domyślnie użyj npm. 



```bash
npm install @http-status-codes/i18n-pl
yarn add @http-status-codes/i18n-pl
pnpm i @http-status-codes/i18n-pl
```


import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-pl";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: The standard response for successful HTTP requests.




### ⚡ Lista funkcji 



| API                                               | Result                                                                                                                                                                                           |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                                              |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                                              |
| HttpStatusText.OK                                 | OK                                                                                                                                                                                               |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                                               |
| HttpStatusDescription.ACCEPTED                    | Zaakceptowano: Żądanie zostało zaakceptowane, ale jeszcze nie zostało przetworzone. Ten kod nie gwarantuje, że żądanie zostanie pomyślnie przetworzone.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                             |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                                             |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                                             |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                                             |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                                             |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                                             |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                                             |
| getStatusInfo(200)                                | {"code":200,"message":"OK: Standardowa odpowiedź dla pomyślnych żądań HTTP. ","success":true}                                                                                                    |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: Standardowa odpowiedź dla pomyślnych żądań HTTP. ","success":true}                                                                                                    |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Kontynuuj: Serwer otrzymał nagłówki żądania i klient powinien przejść do wysłania treści żądania. ","success":true}                                                       |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Zaakceptowano: Żądanie zostało zaakceptowane, ale jeszcze nie zostało przetworzone. Ten kod nie gwarantuje, że żądanie zostanie pomyślnie przetworzone. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: Standardowa odpowiedź dla pomyślnych żądań HTTP. ","success":true}                                                                                                    |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: Standardowa odpowiedź dla pomyślnych żądań HTTP. ","success":true}                                                                                                    |
| isStatusSuccessful(200)                           | true                                                                                                                                                                                             |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                                             |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                                             |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                                             |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                                             |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                                             |
| getSimpleStatusMessage(200)                       | 200 OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                         |
| getSimpleStatusMessage('OK')                      | 200 OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                         |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Kontynuuj: Serwer otrzymał nagłówki żądania i klient powinien przejść do wysłania treści żądania.                                                                                            |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Zaakceptowano: Żądanie zostało zaakceptowane, ale jeszcze nie zostało przetworzone. Ten kod nie gwarantuje, że żądanie zostanie pomyślnie przetworzone.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                         |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                         |
| getStatusMessage(200)                             | 200 OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                         |
| getStatusMessage('OK')                            | 200 OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                         |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Kontynuuj: Serwer otrzymał nagłówki żądania i klient powinien przejść do wysłania treści żądania.                                                                                            |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Zaakceptowano: Żądanie zostało zaakceptowane, ale jeszcze nie zostało przetworzone. Ten kod nie gwarantuje, że żądanie zostanie pomyślnie przetworzone.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                         |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: Standardowa odpowiedź dla pomyślnych żądań HTTP.                                                                                                                                         |
| getStatusCode('OK')                               | 200                                                                                                                                                                                              |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                                              |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                                              |
| getStatusText(200)                                | OK                                                                                                                                                                                               |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                                         |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                                         |


### ✨ Prezentacja efektów 


Chciałbym mieć prostą stronę prezentacyjną, która mogłaby przedstawiać aktualne informacje o kodach statusu oraz odpowiednie szczegółowe opisy, aby ułatwić użytkownikom przeglądanie. Aktualnie można najpierw zobaczyć kod: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Wszystkie paczki 


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
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i32n-pt) |
