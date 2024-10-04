
## 🌐 @http-status-codes/i18n-th


### @http-status-codes/i18n-th คืออะไร? 


มันให้ข้อมูลเกี่ยวกับโค้ดสถานะ HTTP ของ 21 ภาษาแห่งชาติ📜 เมื่อคุณต้องการดำเนินการเรื่องที่เกี่ยวข้องกับโค้ดสถานะ HTTP คุณสามารถลองใช้มัน มันง่ายมาก 


**🚀 สนับสนุน :** 
,[x] ผู้จัดหมวด HttpStatusText สามารถรับสถานะโค้ดในรูปแบบภาษาอังกฤษคงที่และ h{ค่าของสถานะโค้ด} เพื่อรับคำอธิบายสาเหตุของสถานะโค้ดที่สอดคล้อง เช่น `HttpStatusText.OK` หรือ `HttpStatusText.h200` 
,[x] ผู้จัดหมวด HttpStatusDescription สามารถรับสถานะโค้ดในรูปแบบภาษาอังกฤษคงที่และ h{ค่าของสถานะโค้ด} เพื่อรับคำอธิบายรายละเอียดของสถานะโค้ดที่สอดคล้อง เช่น `HttpStatusDescription.OK` หรือ `HttpStatusDescription.h200` 
,[x] ผู้จัดหมวด HttpStatusCode สามารถรับสถานะโค้ดในรูปแบบภาษาอังกฤษคงที่และ h{ค่าของสถานะโค้ด} เพื่อรับค่าของสถานะโค้ดที่สอดคล้อง เช่น `HttpStatusCode.OK` หรือ `HttpStatusCode.h200` 
,[x] สนับสนุนการตรวจสอบด้วย `isCodeOrTextValid` ว่าสถานะโค้ดหรือคำอธิบายสาเหตุของสถานะโค้ดมีผลลัพธ์ถูกต้อง เช่น `isCodeOrTextValid(200)` หรือ `isCodeOrTextValid('OK')` เป็น true 
,[x] สนับสนุนการรับข้อมูลเต็มของสถานะโค้ดหรือคำอธิบายสาเหตุของสถานะโค้ดที่ระบุด้วย `getStatusInfo` เช่น สถานะโค้ด คำอธิบายสาเหตุและคำอธิบายรายละเอียด การสำเร็จหรือไม่ ฯลฯ 
,[x] สนับสนุน


### ⚔️ ทำไมถึงต้องทำมัน? 


ไลบรารี http-status-codes ไม่ได้รองรับการนานาชาติ (i18n) เอง🌍 และในโครงการของฉันต้องการสนับสนุน ผมถาม GPT ว่ามีไลบรารีใดที่สามารถตอบสนองความต้องการของฉันได้ มันพูดคุยไร้สาระ บอกฉันว่ามี @http-status-codes/i18n แต่ในที่สุดไม่พบไลบรารีที่เรียกว่า @http-status-codes/i18n ดังนั้นฉันเลยสร้างมันมา 


### 💉 แรงบันดาลใจสำหรับอ้างอิง 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 การเลือกเทคโนโลยี 


1. ผมต้องการใช้ `nx` เพื่อพัฒนาอย่างรวดเร็ว แล้วก็ใช้โครงสร้างของ nx เพื่อสร้างโครงการวิศวกรรมได้อย่างรวดเร็ว
2. ผมต้องการใช้ `ts-morph` เพื่อสร้างโค้ด
3. ผมต้องการใช้ `Feishu/ส่วนตารางหลายมิติ/ทางลัดของฟิลด์` เพื่อทำการแปล AI
4. ผมต้องการเปลี่ยน XLSX เป็น JSON แล้วก็ใช้ตารางแปลเพื่อสร้างการกำหนดค่า JSON
5. ผมต้องการเปลี่ยน JSON เป็นโครงการ แล้วก็ใช้การกำหนดค่า JSON เพื่อสร้างโครงการหลายภาษา 


### 🔥 ประโยชน์ 


✂️ เล็กน้ำหนักเบา: ES6, TS, ความสามารถในการขยายดี, ความเข้ากันได้ดี, สนับสนุนหลายแพ็คเกจ, ใช้ตามความจำเป็น.
,
,⚡ แข็งแกร่ง: สนับสนุนหลายภาษา, สนับสนุนได้สูงสุดถึง 21 ประเทศ, สนับสนุนแพ็คเกจพึ่งพาในรูปแบบทรัพยากรหลายชนิด เช่น `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, บีบอัดหลายครั้ง, ผลของการบีบอัดดี.
,
,⚙️ ️ ง่าย: มี api ความละเอียดละเอียดและ api ความละเอียดหยาบ, ใช้งานสะดวกมาก. 


### 📚 ใช้อย่างรวดเร็ว 


เพียงแค่ต้องรันคำสั่งใดคำสั่งหนึ่งต่อไปนี้เพื่อติดตั้งได้ตามปกติ โดยคำสั่งการติดตั้งเฉพาะจะขึ้นอยู่กับสภาพแวดล้อมของการพึ่งพาในโครงการของคุณในปัจจุบัน โดยค่าเริ่มต้นจะใช้ npm 



```bash
npm install @http-status-codes/i18n-th
yarn add @http-status-codes/i18n-th
pnpm i @http-status-codes/i18n-th
```


นำเข้าส่วนต่างๆ ได้แก่
```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-th";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: การตอบสนองมาตรฐานสำหรับคำขอ HTTP ที่สำเร็จ
``` 


### ⚡ รายการฟังก์ชัน 



| API                                               | Result                                                                                                                                          |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                             |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                             |
| HttpStatusText.OK                                 | OK                                                                                                                                              |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                              |
| HttpStatusDescription.ACCEPTED                    | ยอมรับ: คำขอได้รับการยอมรับแต่ยังไม่ได้ดำเนินการเสร็จสิ้น โค้ดนี้ไม่ได้การันตีว่าคำขอจะดำเนินการสำเร็จ                                          |
| HttpStatusDescriptionByCode.h200                  | โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                                   |
| isCodeOrTextValid(200)                            | true                                                                                                                                            |
| isCodeOrTextValid('OK')                           | true                                                                                                                                            |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                            |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                            |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                            |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                            |
| getStatusInfo(200)                                | {"code":200,"message":"โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ ","success":true}                                                          |
| getStatusInfo('OK')                               | {"code":200,"message":"โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ ","success":true}                                                          |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"ดำเนินต่อ: เซิร์ฟเวอร์ได้รับหัวข้อคำขอแล้วและลูกค้าควรดำเนินการส่งร่างของคำขอต่อไป ","success":true}                     |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"ยอมรับ: คำขอได้รับการยอมรับแต่ยังไม่ได้ดำเนินการเสร็จสิ้น โค้ดนี้ไม่ได้การันตีว่าคำขอจะดำเนินการสำเร็จ ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ ","success":true}                                                          |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ ","success":true}                                                          |
| isStatusSuccessful(200)                           | true                                                                                                                                            |
| isStatusSuccessful('OK')                          | true                                                                                                                                            |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                            |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                            |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                            |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                            |
| getSimpleStatusMessage(200)                       | 200 โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                               |
| getSimpleStatusMessage('OK')                      | 200 โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                               |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 ดำเนินต่อ: เซิร์ฟเวอร์ได้รับหัวข้อคำขอแล้วและลูกค้าควรดำเนินการส่งร่างของคำขอต่อไป                                                          |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 ยอมรับ: คำขอได้รับการยอมรับแต่ยังไม่ได้ดำเนินการเสร็จสิ้น โค้ดนี้ไม่ได้การันตีว่าคำขอจะดำเนินการสำเร็จ                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                               |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                               |
| getStatusMessage(200)                             | 200 โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                               |
| getStatusMessage('OK')                            | 200 โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                               |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 ดำเนินต่อ: เซิร์ฟเวอร์ได้รับหัวข้อคำขอแล้วและลูกค้าควรดำเนินการส่งร่างของคำขอต่อไป                                                          |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 ยอมรับ: คำขอได้รับการยอมรับแต่ยังไม่ได้ดำเนินการเสร็จสิ้น โค้ดนี้ไม่ได้การันตีว่าคำขอจะดำเนินการสำเร็จ                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                               |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ                                                                                               |
| getStatusCode('OK')                               | 200                                                                                                                                             |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                             |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                             |
| getStatusText(200)                                | OK                                                                                                                                              |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                        |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                        |


### ✨ แสดงผล 


ฉันหวังว่าจะมีหน้าจอโชว์แบบง่ายๆ สามารถโชว์รหัสสถานะปัจจุบันและคำอธิบายรายละเอียดที่เกี่ยวข้อง เพื่อให้ผู้ใช้สามารถดูได้สะดวก  ขณะนี้สามารถดูโค้ดก่อน: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 ทั้งหมดแพ็คเกจ
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
