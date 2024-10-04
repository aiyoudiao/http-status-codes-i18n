
## 🌐 @http-status-codes/i18n-hu


Mi az a @http-status-codes/i18n-hu? 


Ez 21 ország nyelvű HTTP állapotkód üzeneteket kapcsolatos információkat biztosít 📜, amikor HTTP állapotkódokkal kapcsolatos ügyeket kell kezelesre vinni, próbálhatja meg, nagyon egyszerű. 


**🚀 Támogatás: **
- [x] Az HttpStatusText enumeráció, támogatja az angol konstansokat és a h{állapotkód számértékének} módon a megadott állapotkódhoz tartozó okok szövegét kapni. Például `HttpStatusText.OK` vagy `HttpStatusText.h200`. 
- [x] Az HttpStatusDescription enumeráció, támogatja az angol konstansokat és a h{állapotkód számértékének} módon a megadott állapotkódhoz tartozó részletes leírást kapni. Például `HttpStatusDescription.OK` vagy `HttpStatusDescription.h200`. 
- [x] Az HttpStatusCode enumeráció, támogatja az angol konstansokat és a h{állapotkód számértékének} módon a megadott állapotkódhoz tartozó számértéket kapni. Például `HttpStatusCode.OK` vagy `HttpStatusCode.h200`. 
- [x] Támogatott az `isCodeOrTextValid` használata a állapotkódok és az állapotkódok okok szövegének érvényességének ellenőrzésére. Például `isCodeOrTextValid(200)` vagy `isCodeOrTextValid('OK')` mind true. 
- [x] Támogatott az `getStatusInfo` használata a megadott állapotkód vagy az állapotkód okok szövegéhez tartozó teljes információkhoz, például az állapotkód, az okok szöveg és a részletes leírás, az sikeresség stb. információkhoz. 
- [x] Támogatott az `isStatusSuccessful` használata közvetlenül megállapítani, hogy a jelenlegi állapotkód normális-e. 
- [x] Támogatott az `getSimpleStatusMessage` metódus használata egyszerű állapotkód információkhoz kapni, például `200 OK`. 
- [x] Támogatott az `getStatusMessage` metódus használata egy megadott állapotkód egyszerű információjához kapni, például `


### ⚔️ Miért csináljuk? 


A http-status-codes könyvtár maga nem támogatja az internacionális (i18n) támogatást 🌍, és az én projektemben szükséges támogatni. Megkérdeztem a GPT-től, hogy mely könyvtárak kielégíthetik ezeket az igényeimet, de ő szórakozott és azt mondta, hogy van egy @http-status-codes/i18n, de végül nem találtam ezt az úgynevezett @http-status-codes/i18n-et, így én készítettem egyet. 


### 💉 Inspirációra való tekintés 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Választás a technológiák között 


1. Szeretnék gyors fejlesztést végezni az `nx` -vel, majd az nx szkafoldinggal gyorsan létrehozni a projekttémát.
2. Szeretnék kódot generálni az `ts-morph` -sal.
3. Szeretnék AI fordítást végezni az `Feishu / Több dimenziós táblázat / Mezők rövidítésekkel`.
4. Szeretnék XLSX -ből JSON -t váltani, így a fordított táblázat segítségével létrehozni a JSON konfigurációt.
5. Szeretnék JSON -ből Projektet váltani, így a JSON konfiguráció segítségével létrehozni a többnyelvű projektet. 


### 🔥 előnyök 


✂️ Könnyű súlyú: ES6, TS, jó kiterjeszthetőség, jó kompatibilitás, több csomag támogatása, igény szerint használat.

,
,⚡ Erős: Több országnyi nyelvet támogat, legfeljebb 21 országot, a függőség-csomag támogatja a különböző erőforrás-formátumokat `'cjs', 'esm', 'es', 'amd', 'iife', 'umd', 'system'`, többszörös tömörítés, jó tömörítési eredmény.

,
,⚙️ Egyszerű: Van finom és vastag szemponthasználati API, nagyon kényelmes használata. 


### 📚 Gyors használat 


Csak egyetlen parancs szükséges a megfelelő telepítéshez, a pontos telepítési parancs függ a jelenlegi projektben lévő függőségektől, alapértelmezés szerint npm-t használjuk. 



```bash
npm install @http-status-codes/i18n-hu
yarn add @http-status-codes/i18n-hu
pnpm i @http-status-codes/i18n-hu
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-hu";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: A sikeres HTTP-kérések szabványos válasza.
``` 


### ⚡ Lista funkcionalitásai 



| API                                               | Result                                                                                                                                                                  |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                     |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                     |
| HttpStatusText.OK                                 | OK                                                                                                                                                                      |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                      |
| HttpStatusDescription.ACCEPTED                    | Elfogadva: A kérés elfogadva lett, de még nem lett feldolgozva. Ez a kód nem garantálja, hogy a kérés sikeresen feldolgozódik.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                                |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                    |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                    |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                    |
| getStatusInfo(200)                                | {"code":200,"message":"OK: A szokásos válasz a sikeres HTTP-kérésekhez.\nSikeres: A szabványos válasz a sikeres HTTP-kérésekhez. ","success":true}                      |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: A szokásos válasz a sikeres HTTP-kérésekhez.\nSikeres: A szabványos válasz a sikeres HTTP-kérésekhez. ","success":true}                      |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Folytatás: A kiszolgáló megkapta a kérés fejléceit, és a kliensnek folytatnia kell a kérés törzsének küldését. ","success":true}                 |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Elfogadva: A kérés elfogadva lett, de még nem lett feldolgozva. Ez a kód nem garantálja, hogy a kérés sikeresen feldolgozódik. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: A szokásos válasz a sikeres HTTP-kérésekhez.\nSikeres: A szabványos válasz a sikeres HTTP-kérésekhez. ","success":true}                      |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: A szokásos válasz a sikeres HTTP-kérésekhez.\nSikeres: A szabványos válasz a sikeres HTTP-kérésekhez. ","success":true}                      |
| isStatusSuccessful(200)                           | true                                                                                                                                                                    |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                    |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                    |
| getSimpleStatusMessage(200)                       | 200 OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                            |
| getSimpleStatusMessage('OK')                      | 200 OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                            |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Folytatás: A kiszolgáló megkapta a kérés fejléceit, és a kliensnek folytatnia kell a kérés törzsének küldését.                                                      |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Elfogadva: A kérés elfogadva lett, de még nem lett feldolgozva. Ez a kód nem garantálja, hogy a kérés sikeresen feldolgozódik.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                            |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                            |
| getStatusMessage(200)                             | 200 OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                            |
| getStatusMessage('OK')                            | 200 OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                            |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Folytatás: A kiszolgáló megkapta a kérés fejléceit, és a kliensnek folytatnia kell a kérés törzsének küldését.                                                      |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Elfogadva: A kérés elfogadva lett, de még nem lett feldolgozva. Ez a kód nem garantálja, hogy a kérés sikeresen feldolgozódik.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                            |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: A szokásos válasz a sikeres HTTP-kérésekhez.
Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez.                                                            |
| getStatusCode('OK')                               | 200                                                                                                                                                                     |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                     |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                     |
| getStatusText(200)                                | OK                                                                                                                                                                      |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                |


### ✨ Kiállítási hatás 


Akarok egy egyszerű megjelenítő oldalt, amely jelenlegi státuszkód információkat és a hozzá tartozó részletes leírásokat mutatja, így kényelmesebb lesz az ügyfeleknek megtekinteni. \
, Jelenleg először megnézhetjük a kódot:,https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Minden csomag

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
