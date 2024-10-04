
## 🌐 @http-status-codes/i18n-es


### @http-status-codes/i18n-es ¿Qué es? 


Proporciona información relacionada con los códigos de estado HTTP en 21 idiomas nacionales 📜. Cuando necesite manejar asuntos relacionados con los códigos de estado HTTP, puede probarlo. Es muy sencillo. 


**🚀 Soporte: **
,[x] Enumeración HttpStatusText, admite la obtención de la frase de razón correspondiente al código de estado en forma de constantes en inglés y h{valor del código de estado}. Por ejemplo, `HttpStatusText.OK` o `HttpStatusText.h200`.
,[x] Enumeración HttpStatusDescription, admite la obtención de la descripción detallada correspondiente al código de estado en forma de constantes en inglés y h{valor del código de estado}. Por ejemplo, `HttpStatusDescription.OK` o `HttpStatusDescription.h200`.
,[x] Enumeración HttpStatusCode, admite la obtención del valor numérico correspondiente al código de estado en forma de constantes en inglés y h{valor del código de estado}. Por ejemplo, `HttpStatusCode.OK` o `HttpStatusCode.h200`.
,[x] Se admite la validación de si el código de estado o la frase de razón del código de estado es válido a través de `isCodeOrTextValid`. Por ejemplo, `isCodeOrTextValid(200)` o `isCodeOrTextValid('OK')` son ambos verdadero.
,[x] Se admite la obtención de la información completa correspondiente al código de estado especificado o la frase de razón del código de estado a través de `getStatusInfo`. Por ejemplo, código de estado, frase de razón y descripción detallada, éxito o no, etc.
,[x] Se admite la obtención directa de si el código de estado actual es normal a través de `isStatusSuccessful`.
,[x] Se admite la obtención de la información simple del código de estado a través del método `getSimpleStatusMessage`, por ejemplo, `200 OK`.
,[x] Se admite la obtención de la información simple específica del código de estado a través del método `getStatusMessage`, por ejemplo, `200 OK: La respuesta estándar para solicitudes HTTP exitosas.`
,[x] Se admite la obtención de la información simple del código de estado especificado a través del método `getStatusCode`, por ejemplo, `getStatusCode('OK') -> 200`.
,[x] Se admite la obtención de la frase de razón del código de estado especificado


### ⚔️ ¿Por qué hacerlo? 


La biblioteca http-status-codes en sí no soporta internacionalización (i18n) 🌍, y en mi proyecto se necesita soportarla. Pregunté a GPT qué bibliotecas podrían satisfacer mis necesidades, pero habló disparates y me dijo que había una @http-status-codes/i18n. Sin embargo, finalmente no encontré esa supuesta @http-status-codes/i18n, así que la creé yo. 


### 🧪 Inspiración de referencia 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Selección de tecnología 


1. Quiero desarrollar rápidamente con `nx` y luego usar el andamio de nx para generar rápidamente el proyecto de ingeniería.
2. Quiero generar código con `ts-morph`.
3. Quiero usar `Feishu / Tablas multidimensionales / Atajos de campos` para realizar la traducción AI.
4. Quiero convertir XLSX a JSON, así que uso la tabla traducida para generar la configuración JSON.
5. Quiero convertir JSON a Proyecto, entonces uso la configuración JSON para generar el proyecto multilingüe. 


### 🔥 Ventajas 


✂️ Ligero: ES6, TS, buena extensibilidad, buena compatibilidad, soporte de múltiples paquetes, uso según demanda.

⚡ Potente: Soporta múltiples idiomas, hasta 21 países, soporte de paquetes de dependencia para múltiples formatos de recursos `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, compresión múltiple, buen efecto de compresión.

⚙️ Simple: Tiene API de granularidad fina y API de granularidad gruesa, es muy conveniente de usar. 


### 📚 Uso rápido 


Solo es necesario ejecutar cualquiera de los siguientes comandos para instalar normalmente. El comando de instalación específico depende del entorno de dependencia en su proyecto actual. Utilice npm de forma predeterminada. 



```bash
npm install @http-status-codes/i18n-es
yarn add @http-status-codes/i18n-es
pnpm i @http-status-codes/i18n-es
```


import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-es";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: La respuesta estándar para solicitudes HTTP exitosas. 


### Lista de funciones 



| API                                               | Result                                                                                                                                                                        |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                           |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                           |
| HttpStatusText.OK                                 | OK                                                                                                                                                                            |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                            |
| HttpStatusDescription.ACCEPTED                    | Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                     |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                          |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                          |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                          |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                          |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                          |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                          |
| getStatusInfo(200)                                | {"code":200,"message":"OK: La respuesta estándar para solicitudes HTTP exitosas. ","success":true}                                                                            |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: La respuesta estándar para solicitudes HTTP exitosas. ","success":true}                                                                            |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud. ","success":true}    |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: La respuesta estándar para solicitudes HTTP exitosas. ","success":true}                                                                            |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: La respuesta estándar para solicitudes HTTP exitosas. ","success":true}                                                                            |
| isStatusSuccessful(200)                           | true                                                                                                                                                                          |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                          |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                          |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                          |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                          |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                          |
| getSimpleStatusMessage(200)                       | 200 OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                 |
| getSimpleStatusMessage('OK')                      | 200 OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                 |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud.                                         |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                 |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                 |
| getStatusMessage(200)                             | 200 OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                 |
| getStatusMessage('OK')                            | 200 OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                 |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud.                                         |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                 |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: La respuesta estándar para solicitudes HTTP exitosas.                                                                                                                 |
| getStatusCode('OK')                               | 200                                                                                                                                                                           |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                           |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                           |
| getStatusText(200)                                | OK                                                                                                                                                                            |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                      |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                      |


### ✨ Presentación de efectos 


Quiero que haya una página de presentación sencilla que pueda mostrar la información del código de estado actual y la descripción detallada correspondiente, de modo que sea conveniente para que los usuarios consulten. \
, De momento, podemos echar un vistazo al código: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Todos los paquetes 


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
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i25n-pt) |
