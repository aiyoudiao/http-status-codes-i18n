
## 🌐 @http-status-codes/i18n-ms


Apakah @http-status-codes/i18n-ms? 


Ia menyediakan maklumat mengenai mesej kod status HTTP dalam 21 bahasa negara 📜. Apabila anda perlu mengendalikan perkara yang berkaitan dengan kod status HTTP, anda boleh mencubanya. Ia sangat mudah. 


**🚀 Sokongan: **
,[x] Enumerasi HttpStatusText, menyokong cara untuk mendapatkan frasa sebab status kod melalui pekali bahasa Inggeris dan h{nilai kod status}. Contohnya, `HttpStatusText.OK` atau `HttpStatusText.h200`.
,[x] Enumerasi HttpStatusDescription, menyokong cara untuk mendapatkan penerangan terperinci status kod melalui pekali bahasa Inggeris dan h{nilai kod status}. Contohnya, `HttpStatusDescription.OK` atau `HttpStatusDescription.h200`.
,[x] Enumerasi HttpStatusCode, menyokong cara untuk mendapatkan nilai status kod melalui pekali bahasa Inggeris dan h{nilai kod status}. Contohnya, `HttpStatusCode.OK` atau `HttpStatusCode.h200`.
,[x] Menyokong untuk mengesahkan sama ada kod status dan frasa sebab status adalah sah melalui `isCodeOrTextValid`. Contohnya, `isCodeOrTextValid(200)` atau `isCodeOrTextValid('OK')` adalah benar.
,[x] Menyokong untuk mendapatkan maklumat lengkap yang berkaitan dengan kod status tertentu atau frasa sebab status melalui `getStatusInfo`. Contohnya maklumat seperti kod status, frasa sebab, penerangan terperinci, dan sama ada berjaya atau tidak.
,[x] Menyokong untuk mendapatkan terus sama ada kod status semasa adalah normal melalui `isStatusSuccessful`.
,[x] Menyokong untuk mendapatkan mesej status mudah melalui kaedah `getSimpleStatusMessage`, seperti `200 OK`.
,[x] Menyokong untuk mendapatkan mesej mudah kod status tertentu melalui kaedah `getStatusMessage`, seperti `200 OK: The standard response for successful HTTP requests.`
,[x] Menyokong untuk mendapatkan mesej mudah kod status tertentu melalui kaedah `getStatusCode`, seperti `getStatusCode('OK') -> 200`
,[x] Menyokong untuk mendapatkan frasa sebab kod status tertentu melalui kaedah `getStatusText`, seperti `getStatusText(200) -> 'OK'` 


Mengapa perlu melakukannya? 


Kotak http-status-codes itu sendiri tidak menyokong antarabangsa (i18n) 🌍, dan dalam projek saya perlu menyokongnya. Saya bertanya kepada GPT tentang pustaka-pustaka yang boleh memenuhi keperluan saya, tetapi ia bercakap bohong, memberitahu saya terdapat satu @http-status-codes/i18n, tetapi akhirnya tidak menemui @http-status-codes/i18n yang disebut itu, jadi saya membuatnya. 


Tiada jawapan kerana tidak ada kandungan yang jelas dalam <|中文|> untuk diterjemahkan ke dalam Bahasa Melayu. 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Pemilihan Teknologi 


1. Saya ingin menggunakan `nx` untuk pembangunan cepat, dan kemudian menggunakan struktur pendukung nx untuk menghasilkan projek kejuruteraan dengan cepat.
2. Saya ingin menggunakan `ts-morph` untuk menghasilkan kod.
3. Saya ingin menggunakan `Feishu / Tabel Multi-Dimensi / Shortcut Medan` untuk terjemahan AI.
4. Saya ingin mengubah XLSX ke JSON, lalu menggunakan jadual terjemahan untuk menghasilkan konfigurasi JSON.
5. Saya ingin mengubah JSON ke Projek, lalu menggunakan konfigurasi JSON untuk menghasilkan projek berbilang bahasa. 


### 🔥 Kelebihan 


✂️ Ringan: ES6, TS, baik untuk diperluas, kompatibilitas baik, dukungan paket banyak, penggunaan berdasarkan kebutuhan.
,
,⚡ Kuat: Dukung bahasa banyak negara, maksimal dukung 21 negara, paket dependensi dukung banyak format sumber seperti `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, kompresi berkali-kali, efek kompresi bagus.
,
,⚙️ ️Sederhana: Ada api bergranulasi halus dan api bergranulasi kasar, sangat mudah digunakan. 


### 📚 Penggunaan Pantas 


Hanya perlu menjalankan salah satu perintah berikut untuk pemasangan biasa. Perintah pemasangan khusus bergantung pada persekitaran kebergantungan dalam projek anda sekarang, secara lalai menggunakan npm. 



```bash
npm install @http-status-codes/i18n-ms
yarn add @http-status-codes/i18n-ms
pnpm i @http-status-codes/i18n-ms
```


import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} dari "@http-status-codes/i18n-ms";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: Respon standar untuk permintaan HTTP yang berhasil. 


### ⚡ Senarai Fungsi 



| API                                               | Result                                                                                                                                                                                     |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                                        |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                                        |
| HttpStatusText.OK                                 | OK                                                                                                                                                                                         |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                                         |
| HttpStatusDescription.ACCEPTED                    | Diterima: Permintaan telah diterima tetapi belum diproses dengan lengkap. Kode ini tidak menjamin bahawa permintaan akan diproses dengan berjaya.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                        |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                                       |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                                       |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                                       |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                                       |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                                       |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                                       |
| getStatusInfo(200)                                | {"code":200,"message":"OK: Respons standard untuk permintaan HTTP berjaya. ","success":true}                                                                                               |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: Respons standard untuk permintaan HTTP berjaya. ","success":true}                                                                                               |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Teruskan: Pelayan telah menerima kepala permintaan, dan bahawa pelanggan harus meneruskan untuk menghantar badan permintaan. ","success":true}                      |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Diterima: Permintaan telah diterima tetapi belum diproses dengan lengkap. Kode ini tidak menjamin bahawa permintaan akan diproses dengan berjaya. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: Respons standard untuk permintaan HTTP berjaya. ","success":true}                                                                                               |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: Respons standard untuk permintaan HTTP berjaya. ","success":true}                                                                                               |
| isStatusSuccessful(200)                           | true                                                                                                                                                                                       |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                                       |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                                       |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                                       |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                                       |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                                       |
| getSimpleStatusMessage(200)                       | 200 OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                    |
| getSimpleStatusMessage('OK')                      | 200 OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                    |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Teruskan: Pelayan telah menerima kepala permintaan, dan bahawa pelanggan harus meneruskan untuk menghantar badan permintaan.                                                           |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Diterima: Permintaan telah diterima tetapi belum diproses dengan lengkap. Kode ini tidak menjamin bahawa permintaan akan diproses dengan berjaya.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                    |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                    |
| getStatusMessage(200)                             | 200 OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                    |
| getStatusMessage('OK')                            | 200 OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                    |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Teruskan: Pelayan telah menerima kepala permintaan, dan bahawa pelanggan harus meneruskan untuk menghantar badan permintaan.                                                           |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Diterima: Permintaan telah diterima tetapi belum diproses dengan lengkap. Kode ini tidak menjamin bahawa permintaan akan diproses dengan berjaya.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                    |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: Respons standard untuk permintaan HTTP berjaya.                                                                                                                                    |
| getStatusCode('OK')                               | 200                                                                                                                                                                                        |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                                        |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                                        |
| getStatusText(200)                                | OK                                                                                                                                                                                         |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                                   |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                                   |


### ✨ Paparan Kesan 


Saya berharap dapat memiliki halaman paparan yang sederhana, yang dapat menampilkan informasi kod status semasa, serta penerangan terperinci yang sepadan, supaya mudah dilihat oleh pengguna. \
, Pada masa ini boleh melihat kod:,https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts, 


### 📦 Semua Pakej 


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
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i34n-pt) |
