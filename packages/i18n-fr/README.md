
## 🌐 @http-status-codes/i18n-fr


### @http-status-codes/i18n-fr 是什么？  ->  ### Qu'est-ce que @http-status-codes/i18n-fr? 


Il fournit des informations sur les messages de codes d'état HTTP en 21 langues nationales 📜. Lorsque vous avez besoin de traiter des questions liées aux codes d'état HTTP, vous pouvez l'essayer. C'est très simple. 


🚀 Soutien :
- [x] L'énumération HttpStatusText, prend en charge l'obtention de la phrase de raison correspondant au code d'état en utilisant les constantes anglaises et le format h{valeur du code d'état}. Par exemple, `HttpStatusText.OK` ou `HttpStatusText.h200`.
- [x] L'énumération HttpStatusDescription, permet d'obtenir la description détaillée correspondant au code d'état en utilisant les constantes anglaises et le format h{valeur du code d'état}. Par exemple, `HttpStatusDescription.OK` ou `HttpStatusDescription.h200`.
- [x] L'énumération HttpStatusCode, permet d'obtenir la valeur numérique correspondant au code d'état en utilisant les constantes anglaises et le format h{valeur du code d'état}. Par exemple, `HttpStatusCode.OK` ou `HttpStatusCode.h200`.
- [x] Prise en charge de la validation de la validité du code d'état et de la phrase de raison via `isCodeOrTextValid`. Par exemple, `isCodeOrTextValid(200)` ou `isCodeOrTextValid('OK')` sont tous vrais.
- [x] Prise en charge de l'obtention des informations complètes correspondant au code d'état ou à la phrase de raison spécifiés via `getStatusInfo`, telles que le code d'état, la phrase de raison, la description détaillée, le succès, etc.
- [x] Prise en charge de l'obtention directement du statut de normalité du code d'état actuel via `isStatusSuccessful`.
- [x] Prise en charge de l'obtention des informations simples sur le code d'état via la méthode `getSimpleStatusMessage`, par exemple `200 OK`.
- [x] Prise en charge de l'obtention des informations simples du code d'état spécifié via la méthode `getStatusMessage`, par exemple `200 OK : La réponse standard pour les requêtes HTTP réussies.`
- [x] Prise en charge de l'obtention des informations simples du code d'état via la méthode `getStatusCode`, par exemple `getStatusCode('OK') -> 200`.
- [x] Prise en charge de l'obtention de la phrase de raison du code d'état spéc


### ⚔️ Pourquoi le faire? 


La bibliothèque http-status-codes elle-même n'est pas compatible avec l'internationalisation (i18n) 🌍, et dans mon projet, il est nécessaire de le soutenir. J'ai demandé à GPT quelles bibliothèques pouvaient répondre à mes besoins. Il a bavardé et m'a dit qu'il y avait une @http-status-codes/i18n, mais finalement, je n'ai pas trouvé ce soi-disant @http-status-codes/i18n, alors je l'ai fait ~ 


### 💉 Inspiration de référence 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Sélection de technologie 


1. Je veux utiliser `nx` pour un développement rapide, puis utiliser le framework nx pour générer rapidement le projet d'ingénierie.
2. Je veux utiliser `ts-morph` pour générer le code.
3. Je veux utiliser `Feishu / Multi-dimensional Table / Field Shortcut` pour la traduction AI.
4. Je veux convertir XLSX en JSON, donc utiliser le tableau traduit pour générer la configuration JSON.
5. Je veux convertir JSON en Project, donc utiliser la configuration JSON pour générer le projet multilingue. 


### 🔥 Avantages  


✂️ Léger : ES6, TS, bonne extensibilité, bonne compatibilité, support multi-paquet, utilisation à la demande. 

⚡ Fort : Prise en charge de plusieurs langues, jusqu'à 21 pays au maximum, support de paquets de dépendance pour de nombreux formats de ressources `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, compression multiple, bon effet de compression.

⚙️️ Simple : API à granularité fine et API à granularité grossière, extrêmement pratique à utiliser. 


### 📚 Utilisation rapide 


Il suffit d'exécuter l'un des commandes suivantes pour l'installation normale. Les commandes d'installation spécifiques dépendent de l'environnement de dépendance de votre projet actuel. Par défaut, utilisez npm. 



```bash
npm install @http-status-codes/i18n-fr
yarn add @http-status-codes/i18n-fr
pnpm i @http-status-codes/i18n-fr
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-fr";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK : La réponse standard pour les demandes HTTP réussies.
``` 


Liste des fonctionnalités 



| API                                               | Result                                                                                                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                            |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                            |
| HttpStatusText.OK                                 | OK                                                                                                                                                                             |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                             |
| HttpStatusDescription.ACCEPTED                    | Accepté : La demande a été acceptée mais n'a pas encore été traitée. Ce code ne garantit pas que la demande sera traitée avec succès.                                          |
| HttpStatusDescriptionByCode.h200                  | OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                      |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                           |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                           |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                           |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                           |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                           |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                           |
| getStatusInfo(200)                                | {"code":200,"message":"OK : La réponse standard pour les requêtes HTTP réussies. ","success":true}                                                                             |
| getStatusInfo('OK')                               | {"code":200,"message":"OK : La réponse standard pour les requêtes HTTP réussies. ","success":true}                                                                             |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Continuer : Le serveur a reçu les en-têtes de la demande et que le client doit poursuivre l'envoi du corps de la demande. ","success":true}             |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Accepté : La demande a été acceptée mais n'a pas encore été traitée. Ce code ne garantit pas que la demande sera traitée avec succès. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK : La réponse standard pour les requêtes HTTP réussies. ","success":true}                                                                             |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK : La réponse standard pour les requêtes HTTP réussies. ","success":true}                                                                             |
| isStatusSuccessful(200)                           | true                                                                                                                                                                           |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                           |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                           |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                           |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                           |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                           |
| getSimpleStatusMessage(200)                       | 200 OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                  |
| getSimpleStatusMessage('OK')                      | 200 OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                  |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Continuer : Le serveur a reçu les en-têtes de la demande et que le client doit poursuivre l'envoi du corps de la demande.                                                  |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Accepté : La demande a été acceptée mais n'a pas encore été traitée. Ce code ne garantit pas que la demande sera traitée avec succès.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                  |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                  |
| getStatusMessage(200)                             | 200 OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                  |
| getStatusMessage('OK')                            | 200 OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                  |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Continuer : Le serveur a reçu les en-têtes de la demande et que le client doit poursuivre l'envoi du corps de la demande.                                                  |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Accepté : La demande a été acceptée mais n'a pas encore été traitée. Ce code ne garantit pas que la demande sera traitée avec succès.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                  |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK : La réponse standard pour les requêtes HTTP réussies.                                                                                                                  |
| getStatusCode('OK')                               | 200                                                                                                                                                                            |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                            |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                            |
| getStatusText(200)                                | OK                                                                                                                                                                             |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                       |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                       |


### ✨ Présentation des effets 


Je souhaite avoir une page d'affichage simple qui puisse afficher les codes d'état actuels et les descriptions détaillées correspondantes afin de faciliter la consultation par les utilisateurs. \
, Pour l'instant, on peut d'abord regarder le code :, https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Tous les colis 


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
