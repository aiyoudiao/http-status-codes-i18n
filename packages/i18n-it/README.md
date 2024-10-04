
## 🌐 @http-status-codes/i18n-it


Che cos'è @http-status-codes/i18n-it? 


Offre informazioni relative ai messaggi di codice di stato HTTP in 21 lingue nazionali 📜. Quando si hanno bisogno di gestire questioni relative ai codici di stato HTTP, si può provarla, è molto semplice. 


**🚀 Supporto: **
,[x] Enumerazione HttpStatusText, supporta il modo delle costanti in inglese e h{numero di codice di stato} per ottenere la frase di ragione corrispondente al codice di stato. Ad esempio `HttpStatusText.OK` o `HttpStatusText.h200`.
,[x] Enumerazione HttpStatusDescription, supporta il modo delle costanti in inglese e h{numero di codice di stato} per ottenere la descrizione dettagliata corrispondente al codice di stato. Ad esempio `HttpStatusDescription.OK` o `HttpStatusDescription.h200`.
,[x] Enumerazione HttpStatusCode, supporta il modo delle costanti in inglese e h{numero di codice di stato} per ottenere il valore numerico corrispondente al codice di stato. Ad esempio `HttpStatusCode.OK` o `HttpStatusCode.h200`.
,[x] Supporta tramite `isCodeOrTextValid` per verificare se il codice di stato, la frase di ragione del codice di stato sono validi. Ad esempio `isCodeOrTextValid(200)` o `isCodeOrTextValid('OK')` entrambi sono true.
,[x] Supporta tramite `getStatusInfo` per ottenere le informazioni complete corrispondenti al codice di stato specificato o alla frase di ragione del codice di stato, come il codice di stato, la frase di ragione e la descrizione dettagliata, se è un successo, ecc.
,[x] Supporta tramite `isStatusSuccessful` per ottenere direttamente se il codice di stato corrente è normale.
,[x] Supporta tramite il metodo `getSimpleStatusMessage` per ottenere informazioni semplici sul codice di stato, come `200 OK`.
,[x] Supporta tramite il metodo `getStatusMessage` per ottenere informazioni semplici specifiche sul codice di stato, come `200 OK: La risposta standard per richieste HTTP di successo.`.
,[x] Supporta tramite il metodo `getStatusCode` per ottenere informazioni semplici sul codice di stato specificato, come `getStatusCode('OK') -> 200`.
,[x] Supporta tramite il metodo `getStatusText` per ottenere la frase di ragione del codice di stato specific


Perché farlo? 


La libreria http-status-codes in sé non supporta l'internazionalizzazione (i18n), mentre nel mio progetto è necessario supportarla. Ho chiesto a GPT quali librerie potrebbero soddisfare le mie esigenze, ha parlato a vanvera, dicendomi che c'è una @http-status-codes/i18n, ma alla fine non abbiamo trovato questa cosiddetta @http-status-codes/i18n, così l'ho realizzata io. 


### 💉 参考灵感 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Selezione tecnica 


1. Voglio sviluppare rapidamente con "nx" e quindi utilizzo il ponteggio di nx per generare rapidamente un progetto di ingegneria.
2. Voglio generare codice con "ts-morph".
3. Voglio usare "Feishu / Tabelle multidimensionali / Scorciatoie di campo" per la traduzione AI.
4. Voglio convertire XLSX in JSON, quindi utilizzo la tabella tradotta per generare la configurazione JSON.
5. Voglio convertire JSON in progetto, quindi utilizzo la configurazione JSON per generare un progetto multilingue. 


### 🔥 Vantaggi 


✂️ Leggero: ES6, TS, buona estensibilità, buona compatibilità, supporto multi-package, utilizzo on-demand. 

, 

⚡ Potente: Supporta più lingue nazionali, fino a 21 paesi, il pacchetto di dipendenza supporta diversi formati di risorse `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system', compressione ripetuta, buon effetto di compressione. 

, 

⚙️ Semplice: Ha API granulari fini e API granulari grossolane, è molto conveniente da usare. 


### 📚 Utilizzo rapido 


È sufficiente eseguire uno qualsiasi dei seguenti comandi per l'installazione corretta, il comando di installazione specifico dipende dall'ambiente di dipendenza nel progetto attuale, di default si utilizza npm. 



```bash
npm install @http-status-codes/i18n-it
yarn add @http-status-codes/i18n-it
pnpm i @http-status-codes/i18n-it
```


import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} da "@http-status-codes/i18n-it";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: La risposta standard per le richieste HTTP di successo. 


### ⚡ Elenco delle funzionalità 



| API                                               | Result                                                                                                                                                                                        |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                                           |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                                           |
| HttpStatusText.OK                                 | OK                                                                                                                                                                                            |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                                            |
| HttpStatusDescription.ACCEPTED                    | Accettato: La richiesta è stata accettata ma non è stata ancora elaborata. Questo codice non garantisce che la richiesta sia elaborata con successo.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: La risposta standard per le richieste HTTP di successo.                                                                                                                                   |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                                          |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                                          |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                                          |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                                          |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                                          |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                                          |
| getStatusInfo(200)                                | {"code":200,"message":"OK: La risposta standard per le richieste HTTP di successo. ","success":true}                                                                                          |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: La risposta standard per le richieste HTTP di successo. ","success":true}                                                                                          |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Continua: Il server ha ricevuto gli header della richiesta e il client dovrebbe procedere a inviare il corpo della richiesta. ","success":true}                        |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Accettato: La richiesta è stata accettata ma non è stata ancora elaborata. Questo codice non garantisce che la richiesta sia elaborata con successo. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: La risposta standard per le richieste HTTP di successo. ","success":true}                                                                                          |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: La risposta standard per le richieste HTTP di successo. ","success":true}                                                                                          |
| isStatusSuccessful(200)                           | true                                                                                                                                                                                          |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                                          |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                                          |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                                          |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                                          |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                                          |
| getSimpleStatusMessage(200)                       | 200 OK: La risposta standard per le richieste HTTP di successo.                                                                                                                               |
| getSimpleStatusMessage('OK')                      | 200 OK: La risposta standard per le richieste HTTP di successo.                                                                                                                               |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Continua: Il server ha ricevuto gli header della richiesta e il client dovrebbe procedere a inviare il corpo della richiesta.                                                             |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Accettato: La richiesta è stata accettata ma non è stata ancora elaborata. Questo codice non garantisce che la richiesta sia elaborata con successo.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: La risposta standard per le richieste HTTP di successo.                                                                                                                               |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: La risposta standard per le richieste HTTP di successo.                                                                                                                               |
| getStatusMessage(200)                             | 200 OK: La risposta standard per le richieste HTTP di successo.                                                                                                                               |
| getStatusMessage('OK')                            | 200 OK: La risposta standard per le richieste HTTP di successo.                                                                                                                               |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Continua: Il server ha ricevuto gli header della richiesta e il client dovrebbe procedere a inviare il corpo della richiesta.                                                             |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Accettato: La richiesta è stata accettata ma non è stata ancora elaborata. Questo codice non garantisce che la richiesta sia elaborata con successo.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: La risposta standard per le richieste HTTP di successo.                                                                                                                               |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: La risposta standard per le richieste HTTP di successo.                                                                                                                               |
| getStatusCode('OK')                               | 200                                                                                                                                                                                           |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                                           |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                                           |
| getStatusText(200)                                | OK                                                                                                                                                                                            |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                                      |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                                      |


### ✨ Mostra dell'effetto 


Vorrei avere una pagina di presentazione semplice, in grado di mostrare le informazioni sull'attuale codice di stato e la relativa descrizione dettagliata, in modo da facilitare la consultazione da parte degli utenti. \
, Per il momento si può dare un'occhiata al codice:,https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Tutti i pacchetti 


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
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i30n-pt) |
