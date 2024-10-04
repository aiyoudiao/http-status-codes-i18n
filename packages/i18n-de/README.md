
## 🌐 @http-status-codes/i18n-de


Was ist @http-status-codes/i18n-de? 


Es bietet Informationen zu HTTP-Statuscode-Meldungen in 21 Nationalsprachen📜. Wenn Sie mit Angelegenheiten im Zusammenhang mit HTTP-Statuscodes umgehen müssen, können Sie es ausprobieren. Es ist sehr einfach. 


**🚀 Unterstützung: **
- [x] HttpStatusText-Enumeration, unterstützt die Ermittlung der Gründephrasen für Statuscodes mittels englischer Konstanten und h{Zahl des Statuscodes}. Beispielsweise `HttpStatusText.OK` oder `HttpStatusText.h200`.
- [x] HttpStatusDescription-Enumeration, unterstützt die Ermittlung der detaillierten Beschreibungen für Statuscodes mittels englischer Konstanten und h{Zahl des Statuscodes}. Beispielsweise `HttpStatusDescription.OK` oder `HttpStatusDescription.h200`.
- [x] HttpStatusCode-Enumeration, unterstützt die Ermittlung der Zahlenwerte von Statuscodes mittels englischer Konstanten und h{Zahl des Statuscodes}. Beispielsweise `HttpStatusCode.OK` oder `HttpStatusCode.h200`.
- [x] Unterstützt die Validierung von Statuscodes und Statuscode-Gründephrasen mittels `isCodeOrTextValid`. Beispielsweise `isCodeOrTextValid(200)` oder `isCodeOrTextValid('OK')` sind beide true.
- [x] Unterstützt die Ermittlung der vollständigen Informationen zu einem bestimmten Statuscode oder einer Statuscode-Gründephrase mittels `getStatusInfo`. Beispielsweise Statuscode, Grundphrase, detaillierte Beschreibung und Erfolgstatus.
- [x] Unterstützt die direkte Ermittlung, ob der aktuelle Statuscode normal ist, mittels `isStatusSuccessful`.
- [x] Unterstützt die Ermittlung einfacher Statuscode-Informationen mittels `getSimpleStatusMessage`. Beispielsweise `200 OK`.
- [x] Unterstützt die Ermittlung einfacher Informationen für einen bestimmten Statuscode mittels `getStatusMessage`. Beispielsweise `200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.`
- [x] Unterstützt die Ermittlung einfacher Informationen eines bestimmten Statuscodes mittels `getStatusCode`. Beispielsweise `getStatusCode('OK') -> 200`.
- [x] Unterstützt die Ermittlung der Grundphrase eines bestimmten Statuscodes mittels `getStatusText`. Beispielsweise `getStatusText(200) -> 'OK'`. 


Warum soll man es tun? 


Die http-status-codes-Bibliothek unterstützt die Internationalisierung (i18n) nicht selbst 🌍, aber mein Projekt benötigt dies. Ich habe GPT gefragt, welche Bibliotheken meine Anforderungen erfüllen können. Es hat Unsinn dahergesagt und mir gesagt, dass es eine @http-status-codes/i18n gibt. Allerdings habe ich diese sogenannte @http-status-codes/i18n letztendlich nicht gefunden. Also habe ich sie selbst gemacht. 


### 💉 Referenzinspiration 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Technologieauswahl 


1. Ich möchte mit `nx` schnell entwickeln und dann mit dem nx-Scaffolding schnell das Projektengineering generieren.
2. Ich möchte mit `ts-morph` Code generieren.
3. Ich möchte mit `Feishu / Multi-Dimensionale Tabelle / Feldabkürzung` für die AI-Übersetzung verwenden.
4. Ich möchte XLSX in JSON konvertieren und deshalb mit der übersetzten Tabelle JSON-Konfigurationen generieren.
5. Ich möchte JSON in Project konvertieren und deshalb mit der JSON-Konfiguration mehrsprachige Projekte generieren. 


### 🔥 Vorteile 


✂️ Leichtgewicht: ES6, TS, gute Erweiterbarkeit, gute Kompatibilität, Unterstützung mehrerer Pakete, bedarfsorientierter Einsatz. 

⚡ Stark: Unterstützt mehrere Sprachen, unterstützt bis zu 21 Länder, die Abhängigkeitspakete unterstützen mehrere Ressourcenformate `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, mehrfache Komprimierung, gute Komprimierungseffekte. 

⚙️ ️ Einfach: Verfügt über feingranulare und grobgranulare APIs, sehr bequem in der Verwendung. 


### 📚 Schnelle Nutzung 


Man muss nur einen der folgenden Befehle ausführen, um die Installation ordnungsgemäß durchzuführen. Der genaue Installationsbefehl richtet sich nach Ihrer aktuellen Abhängigkeitsumgebung in Ihrem Projekt. Standardmäßig wird npm verwendet. 



```bash
npm install @http-status-codes/i18n-de
yarn add @http-status-codes/i18n-de
pnpm i @http-status-codes/i18n-de
```


import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} von "@http-status-codes/i18n-de";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. 


### ⚡ Funktionsliste 



| API                                               | Result                                                                                                                                                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                                                     |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                                                     |
| HttpStatusText.OK                                 | OK                                                                                                                                                                                                      |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                                                      |
| HttpStatusDescription.ACCEPTED                    | Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                                 |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                                                    |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                                                    |
| getStatusInfo(200)                                | {"code":200,"message":"OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. ","success":true}                                                                                                        |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. ","success":true}                                                                                                        |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen. ","success":true}                                          |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. ","success":true}                                                                                                        |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. ","success":true}                                                                                                        |
| isStatusSuccessful(200)                           | true                                                                                                                                                                                                    |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                                                    |
| getSimpleStatusMessage(200)                       | 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                             |
| getSimpleStatusMessage('OK')                      | 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                             |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen.                                                                               |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                             |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                             |
| getStatusMessage(200)                             | 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                             |
| getStatusMessage('OK')                            | 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                             |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen.                                                                               |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                             |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: Die Standardantwort für erfolgreiche HTTP-Anfragen.                                                                                                                                             |
| getStatusCode('OK')                               | 200                                                                                                                                                                                                     |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                                                     |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                                                     |
| getStatusText(200)                                | OK                                                                                                                                                                                                      |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                                                |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                                                |


### ✨ Ergebnispräsentation 


Ich hoffe, dass es eine einfache Anzeigeseite geben kann, die die aktuellen Statuscodeinformationen und die entsprechenden detaillierten Beschreibungen anzeigen kann, damit es für Benutzer bequem ist, sie zu überprüfen. \
 Im Moment können wir zuerst den Code ansehen:  https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Alle Pakete 


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
