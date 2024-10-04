
## 🌐 @http-status-codes/i18n-id


### @http-status-codes/i18n-id  itu apa? 


Ini menyediakan informasi terkait pesan kode status HTTP dalam 21 bahasa negara 📜, ketika Anda perlu menangani hal-hal terkait kode status HTTP, Anda bisa mencobanya, sangat sederhana. 


**🚀 Dukungan: **
,[x] Enumerasi HttpStatusText, mendukung cara untuk mendapatkan frase alasan kode status yang sesuai dengan konstanta bahasa Inggris dan h{nilai kode status}. Seperti `HttpStatusText.OK` atau `HttpStatusText.h200`. 
,[x] Enumerasi HttpStatusDescription, mendukung cara untuk mendapatkan deskripsi rinci kode status yang sesuai dengan konstanta bahasa Inggris dan h{nilai kode status}. Seperti `HttpStatusDescription.OK` atau `HttpStatusDescription.h200`. 
,[x] Enumerasi HttpStatusCode, mendukung cara untuk mendapatkan nilai kode status yang sesuai dengan konstanta bahasa Inggris dan h{nilai kode status}. Seperti `HttpStatusCode.OK` atau `HttpStatusCode.h200`. 
,[x] Mendukung untuk memverifikasi apakah kode status, frase alasan kode status valid atau tidak melalui `isCodeOrTextValid`. Seperti `isCodeOrTextValid(200)` atau `isCodeOrTextValid('OK')` keduanya benar. 
,[x] Mendukung untuk mendapatkan informasi lengkap yang sesuai dengan kode status tertentu atau frase alasan kode status melalui `getStatusInfo`. Seperti informasi seperti kode status, frase alasan dan deskripsi rinci, apakah berhasil, dll. 
,[x] Mendukung untuk mendapatkan langsung apakah kode status saat ini normal melalui `isStatusSuccessful`. 
,[x] Mendukung untuk mendapatkan pesan status sederhana melalui metode `getSimpleStatusMessage`, seperti `200 OK`. 
,[x] Mendukung untuk mendapatkan informasi sederhana dari kode status tertentu melalui metode `getStatusMessage`, seperti `200 OK: The standard response for successful HTTP requests.` 
,[x] Mendukung untuk mendapatkan informasi sederhana dari kode status tertentu melalui metode `getStatusCode`, seperti `getStatusCode('OK') -> 200` 
,[x] Mendukung untuk mendapatkan frase alasan kode status tertentu melalui metode `getStatusText`, seperti `getStatusText(200) -> 'OK'` 


Mengapa harus melakukannya? 


Library http-status-codes sendiri tidak mendukung internasionalisasi (i18n) 🌍, sedangkan di proyek saya perlu mendukung ini. Saya bertanya kepada GPT tentang library mana yang dapat memenuhi kebutuhan saya, tetapi dia berbicara omong kosong dan memberitahu saya terdapat @http-status-codes/i18n, namun pada akhirnya tidak menemukan yang disebut @http-status-codes/i18n ini, jadi saya membuatnya ~ 


### 💉 Referensi inspirasi 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Pemilihan Teknologi 


1. Saya ingin mengembangkan dengan cepat menggunakan `nx`, lalu menggunakan scaffolding nx untuk menghasilkan proyek secara cepat
, 2. Saya ingin menghasilkan kode menggunakan `ts-morph`
, 3. Saya ingin melakukan terjemahan AI menggunakan `Feishu/Multi-Dimensional Table/Field Shortcut`
, 4. Saya ingin mengubah XLSX menjadi JSON, lalu menggunakan tabel terjemahan untuk menghasilkan konfigurasi JSON
, 5. Saya ingin mengubah JSON menjadi Project, lalu menggunakan konfigurasi JSON untuk menghasilkan proyek multi-bahasa 


### 🔥 Keuntungan 


✂️ Ringan: ES6, TS, ekspansibilitas baik, kompatibilitas baik, dukungan paket multi, penggunaan sesuai kebutuhan. 

⚡ Kuat: Dukungan berbagai bahasa negara, paling banyak dukungan 21 negara, dukungan paket tergantung pada berbagai format sumber daya `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system', kompresi berulang kali, efek kompresi baik. 

⚙️ Sederhana: Memiliki API bergranulasi halus dan API bergranulasi kasar, sangat mudah digunakan. 


### 📚 Penggunaan Cepat 


Hanya perlu menjalankan salah satu perintah berikut untuk instalasi normal. Perintah instalasi spesifik tergantung pada lingkungan dependensi dalam proyek Anda saat ini, secara default menggunakan npm. 



```bash
npm install @http-status-codes/i18n-id
yarn add @http-status-codes/i18n-id
pnpm i @http-status-codes/i18n-id
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} dari "@http-status-codes/i18n-id";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
``` 


### ⚡ Daftar Fitur 



| API                                               | Result                                                                                                                                                                               |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                                  |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                                  |
| HttpStatusText.OK                                 | OK                                                                                                                                                                                   |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                                   |
| HttpStatusDescription.ACCEPTED                    | Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                                |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                                 |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                                 |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                                 |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                                 |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                                 |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                                 |
| getStatusInfo(200)                                | {"code":200,"message":"OK: Respon standar untuk permintaan HTTP yang berhasil.\nBerhasil: Respon standar untuk permintaan HTTP yang berhasil. ","success":true}                      |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: Respon standar untuk permintaan HTTP yang berhasil.\nBerhasil: Respon standar untuk permintaan HTTP yang berhasil. ","success":true}                      |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan. ","success":true}                            |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: Respon standar untuk permintaan HTTP yang berhasil.\nBerhasil: Respon standar untuk permintaan HTTP yang berhasil. ","success":true}                      |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: Respon standar untuk permintaan HTTP yang berhasil.\nBerhasil: Respon standar untuk permintaan HTTP yang berhasil. ","success":true}                      |
| isStatusSuccessful(200)                           | true                                                                                                                                                                                 |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                                 |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                                 |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                                 |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                                 |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                                 |
| getSimpleStatusMessage(200)                       | 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                            |
| getSimpleStatusMessage('OK')                      | 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                            |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan.                                                                 |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                            |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                            |
| getStatusMessage(200)                             | 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                            |
| getStatusMessage('OK')                            | 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                            |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan.                                                                 |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                            |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: Respon standar untuk permintaan HTTP yang berhasil.
Berhasil: Respon standar untuk permintaan HTTP yang berhasil.                                                            |
| getStatusCode('OK')                               | 200                                                                                                                                                                                  |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                                  |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                                  |
| getStatusText(200)                                | OK                                                                                                                                                                                   |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                             |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                             |


### ✨ Menunjukkan Hasil




Saya berharap dapat memiliki halaman tampilan sederhana yang dapat menampilkan informasi kode status saat ini, serta deskripsi terperinci yang sesuai, sehingga memudahkan pengguna untuk melihat. \
, Saat ini bisa dulu melihat kode: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Semua Paket 

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
