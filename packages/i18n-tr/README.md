
## 🌐 @http-status-codes/i18n-tr


### @http-status-codes/i18n-tr  nedir? 


21 farklı ülkenin dilinde HTTP durum kodu mesajlarıyla ilgili bilgiler sağlıyor 📜. HTTP durum koduyla ilgili işleri hallederken bunu deneyebilirsiniz, çok basit. 


**🚀 Destekler :**
[x] HttpStatusText  enum'u, durum kodlarının ilişkili neden ifadelerini İngilizce sabitleri ve h{durum kodu değeri} biçiminde almayı destekler. Örneğin `HttpStatusText.OK` veya `HttpStatusText.h200`.
[x] HttpStatusDescription  enum'u, durum kodlarının ilişkili ayrıntılı açıklamalarını İngilizce sabitleri ve h{durum kodu değeri} biçiminde almayı destekler. Örneğin `HttpStatusDescription.OK` veya `HttpStatusDescription.h200`.
[x] HttpStatusCode  enum'u, durum kodlarının ilişkili değerlerini İngilizce sabitleri ve h{durum kodu değeri} biçiminde almayı destekler. Örneğin `HttpStatusCode.OK` veya `HttpStatusCode.h200`.
[x] `isCodeOrTextValid` aracılığıyla durum kodu veya durum kodu neden ifadelerinin geçerliliğini doğrulama desteklenir. Örneğin `isCodeOrTextValid(200)` veya `isCodeOrTextValid('OK')` her ikisi de true olur.
[x] `getStatusInfo` aracılığıyla belirli bir durum kodu veya durum kodu neden ifadesiyle ilişkili tam  bilgileri, örneğin durum kodu, neden ifadesi ve ayrıntılı açıklama, başarılı olup olmadığı gibi bilgileri almak desteklenir.
[x] `isStatusSuccessful` aracılığıyla mevcut durum kodunun normal olup olmadığını doğrudan almak desteklenir.
[x] `getSimpleStatusMessage` yöntemiyle basit durum kodu bilgilerini almak desteklenir, örneğin `200 OK` gibi.
[x] `getStatusMessage` yöntemiyle belirli bir durum kodunun basit bilgilerini almak desteklenir, örneğin `200 OK: Başarılı HTTP istekleri için standart yanıt.` gibi.
[x] `getStatusCode` yöntemiyle belirli bir durum kodunun basit bilgilerini almak desteklenir, örneğin `getStatusCode('OK') -> 200`


### ⚔️ Neden yapmalı? 


http-status-codes  kütüphanesi kendisi uluslararasılaştırma (i18n) 🌍 'yi desteklemez ve benim projemde buna ihtiyaç duyarım. GPT'ye hangi kütüphanelerin ihtiyacımı karşılayacağını sordum, saçmaladı ve bana @http-status-codes/i18n  olduğunu söyledi, fakat sonunda bu sözde @http-status-codes/i18n  bulunamadı, bu yüzden ben yaptım. 


### 💉  Referans ilhamı 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Teknoloji Seçimi 


1. `nx` kullanarak hızlı geliştirme yapmak istiyorum ve sonra `nx` iskele yapısını kullanarak proje mühendisliğini hızlı bir şekilde oluşturmak istiyorum
2. `ts-morph` kullanarak kod üretmek istiyorum
3. `Feishu / Duowei Tablosu / Alan Kısayolları` kullanarak AI ile çeviri yapmak istiyorum
4. XLSX' i JSON' a dönüştürmek istiyorum, bu yüzden çevrilmiş tabloyu kullanarak JSON yapılandırması oluşturmak istiyorum
5. JSON' i Proje' ye dönüştürmek istiyorum, bu yüzden JSON yapılandırmasını kullanarak çok dilli bir proje oluşturmak istiyorum 


### 🔥 Avantajlar 


✂️ Hafif: ES6, TS, genişletilebilirlik iyi, uyumluluk iyi, çoklu paket destekli, ihtiyaça göre kullanım.

,

,⚡ Güçlü: Çoklu ülke dilini destekler, en fazla 21 ülkeyi destekler, bağımlılık paketleri çeşitli kaynak formatlarını destekler `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, birden fazla sıkıştırma, sıkıştırma etkisi iyi.

,

,⚙️ ️Basit: İnce taneli API ve kalın taneli API vardır, kullanımı çok kolaydır. 


### 📚 Hızlı kullanım 


Sadece aşağıdaki herhangi bir komutu çalıştırarak normal şekilde kurulum yapmanız yeterlidir. Belirli kurulum komutu, şu anda projenizdeki bağımlılık ortamına göre değişir ve varsayılan olarak npm kullanılır. 



```bash
npm install @http-status-codes/i18n-tr
yarn add @http-status-codes/i18n-tr
pnpm i @http-status-codes/i18n-tr
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-tr";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: Başarılı HTTP istekleri için standart yanıt.
``` 


### ⚡ İşlev Listesi 



| API                                               | Result                                                                                                                                                            |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                               |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                               |
| HttpStatusText.OK                                 | OK                                                                                                                                                                |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                |
| HttpStatusDescription.ACCEPTED                    | Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez.                                          |
| HttpStatusDescriptionByCode.h200                  | Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                               |
| isCodeOrTextValid(200)                            | true                                                                                                                                                              |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                              |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                              |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                              |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                              |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                              |
| getStatusInfo(200)                                | {"code":200,"message":"Tamam: Başarılı HTTP istekleri için standart yanıt. ","success":true}                                                                      |
| getStatusInfo('OK')                               | {"code":200,"message":"Tamam: Başarılı HTTP istekleri için standart yanıt. ","success":true}                                                                      |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir. ","success":true}                          |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"Tamam: Başarılı HTTP istekleri için standart yanıt. ","success":true}                                                                      |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"Tamam: Başarılı HTTP istekleri için standart yanıt. ","success":true}                                                                      |
| isStatusSuccessful(200)                           | true                                                                                                                                                              |
| isStatusSuccessful('OK')                          | true                                                                                                                                                              |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                              |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                              |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                              |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                              |
| getSimpleStatusMessage(200)                       | 200 Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                           |
| getSimpleStatusMessage('OK')                      | 200 Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                           |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir.                                                               |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                           |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                           |
| getStatusMessage(200)                             | 200 Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                           |
| getStatusMessage('OK')                            | 200 Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                           |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir.                                                               |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                           |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 Tamam: Başarılı HTTP istekleri için standart yanıt.                                                                                                           |
| getStatusCode('OK')                               | 200                                                                                                                                                               |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                               |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                               |
| getStatusText(200)                                | OK                                                                                                                                                                |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                          |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                          |


### ✨ Gösterim Etkisi 


Umarım basit bir görüntüleme sayfası olabilsin, mevcut durum kod bilgilerini ve karşılık gelen ayrıntılı açıklamaları gösterebilsin, bu da kullanıcıların görüntülemelerini kolaylaştırsın. \
, şu anda önce kodu inceleyebilirsiniz: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Tüm Paketler 


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
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i35n-pt) |
