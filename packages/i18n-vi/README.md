
## 🌐 @http-status-codes/i18n-vi


### @http-status-codes/i18n-vi là gì? 


Nó cung cấp thông tin liên quan đến mã trạng thái HTTP của 21 ngôn ngữ quốc gia 📜, khi bạn cần xử lý các vấn đề liên quan đến mã trạng thái HTTP, bạn có thể thử nó, rất đơn giản. 


**🚀 Hỗ trợ: **
[x] Enumeration HttpStatusText, hỗ trợ cách lấy cụm từ lý do trạng thái tương ứng với mã trạng thái theo hằng số tiếng Anh và h{mã số trạng thái}. Ví dụ như `HttpStatusText.OK` hoặc `HttpStatusText.h200`.
[x] Enumeration HttpStatusDescription, hỗ trợ cách lấy mô tả chi tiết tương ứng với mã trạng thái theo hằng số tiếng Anh và h{mã số trạng thái}. Ví dụ như `HttpStatusDescription.OK` hoặc `HttpStatusDescription.h200`.
[x] Enumeration HttpStatusCode, hỗ trợ cách lấy giá trị số tương ứng với mã trạng thái theo hằng số tiếng Anh và h{mã số trạng thái}. Ví dụ như `HttpStatusCode.OK` hoặc `HttpStatusCode.h200`.
[x] Hỗ trợ xác minh xem mã trạng thái, cụm từ lý do trạng thái có hợp lệ hay không thông qua `isCodeOrTextValid`. Ví dụ như `isCodeOrTextValid(200)` hoặc `isCodeOrTextValid('OK')` đều là true.
[x] Hỗ trợ lấy thông tin đầy đủ tương ứng với mã trạng thái chỉ định hoặc cụm từ lý do trạng thái thông qua `getStatusInfo`, Ví dụ như mã trạng thái, cụm từ lý do và mô tả chi tiết, có thành công hay không.
[x] Hỗ trợ lấy trực tiếp xem mã trạng thái hiện tại có bình thường hay không thông qua `isStatusSuccessful`.
[x] Hỗ trợ lấy thông tin trạng thái đơn giản thông qua phương thức `getSimpleStatusMessage`, Ví dụ như `200 OK`.
[x] Hỗ trợ lấy thông tin đơn giản của mã trạng thái chỉ định thông qua phương thức `getStatusMessage`, Ví dụ như `200 OK: The standard response for successful HTTP requests.`.
[x] Hỗ trợ lấy thông tin đơn giản của mã trạng thái chỉ định thông qua phương thức `getStatusCode`, Ví dụ như `getStatusCode('OK') -> 200`.
[x] Hỗ trợ lấy cụm từ lý do của mã trạng thái chỉ định thông qua phương thức `getStatusText`, Ví dụ như `getStatusText(200) -> 'OK'.


Tại sao phải làm nó? 


Thư viện http-status-codes bản thân không hỗ trợ quốc tế hóa (i18n) 🌍, trong dự án của tôi cần hỗ trợ, tôi hỏi GPT có những thư viện nào có thể đáp ứng nhu cầu của tôi, nó nói bậy bạ, nói với tôi có một @http-status-codes/i18n, nhưng cuối cùng không tìm thấy cái gọi là @http-status-codes/i18n này, vì vậy tôi đã tạo nó ～ 


### 💉 Cảm hứng tham khảo 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Lựa chọn công nghệ 


1. Tôi muốn phát triển nhanh với `nx`, sau đó dùng giàn giáo `nx` để tạo nhanh dự án kỹ thuật.
2. Tôi muốn tạo mã bằng `ts-morph`.
3. Tôi muốn dùng `Feishu/Đa chiều bảng/Truy cập tắt trường` để tiến hành dịch AI.
4. Tôi muốn chuyển XLSX sang JSON, vì thế dùng bảng dịch để tạo cấu hình JSON.
5. Tôi muốn chuyển JSON sang Project, vì thế dùng cấu hình JSON để tạo dự án đa ngôn ngữ. 


### 🔥 Ưu điểm 


✂️ Nặng nhẹ: ES6, TS, khả năng mở rộng tốt, tương thích tốt, hỗ trợ nhiều gói, Sử dụng theo nhu cầu.
,
,⚡ Mạnh: Hỗ trợ nhiều ngôn ngữ quốc gia, tối đa hỗ trợ 21 quốc gia, Các gói phụ thuộc hỗ trợ nhiều định dạng tài nguyên `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, Nén nhiều lần, Hiệu quả nén tốt.
,
,⚙️️ Đơn giản: Có API có độ tinh tế cao và API có độ tinh tế thấp, Sử dụng rất thuận tiện. 


### 📚 Sử dụng nhanh 


Chỉ cần chạy một trong các lệnh sau để cài đặt bình thường, lệnh cài đặt cụ thể tùy thuộc vào môi trường phụ thuộc trong dự án hiện tại của bạn, mặc định sử dụng npm. 



```bash
npm install @http-status-codes/i18n-vi
yarn add @http-status-codes/i18n-vi
pnpm i @http-status-codes/i18n-vi
```


import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-vi";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: Phản hồi chuẩn cho các yêu cầu HTTP thành công. 


### ⚡ Danh sách chức năng 



| API                                               | Result                                                                                                                                                                     |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                        |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                        |
| HttpStatusText.OK                                 | OK                                                                                                                                                                         |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                         |
| HttpStatusDescription.ACCEPTED                    | Được chấp nhận: Yêu cầu đã được chấp nhận nhưng chưa được xử lý xong. Mã này không đảm bảo rằng yêu cầu sẽ được xử lý thành công.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                               |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                       |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                       |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                       |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                       |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                       |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                       |
| getStatusInfo(200)                                | {"code":200,"message":"OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công. ","success":true}                      |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công. ","success":true}                      |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Tiếp tục: Máy chủ đã nhận được tiêu đề yêu cầu và khách hàng nên tiếp tục gửi thân yêu cầu. ","success":true}                                       |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Được chấp nhận: Yêu cầu đã được chấp nhận nhưng chưa được xử lý xong. Mã này không đảm bảo rằng yêu cầu sẽ được xử lý thành công. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công. ","success":true}                      |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công. ","success":true}                      |
| isStatusSuccessful(200)                           | true                                                                                                                                                                       |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                       |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                       |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                       |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                       |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                       |
| getSimpleStatusMessage(200)                       | 200 OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                           |
| getSimpleStatusMessage('OK')                      | 200 OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                           |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Tiếp tục: Máy chủ đã nhận được tiêu đề yêu cầu và khách hàng nên tiếp tục gửi thân yêu cầu.                                                                            |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Được chấp nhận: Yêu cầu đã được chấp nhận nhưng chưa được xử lý xong. Mã này không đảm bảo rằng yêu cầu sẽ được xử lý thành công.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                           |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                           |
| getStatusMessage(200)                             | 200 OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                           |
| getStatusMessage('OK')                            | 200 OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                           |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Tiếp tục: Máy chủ đã nhận được tiêu đề yêu cầu và khách hàng nên tiếp tục gửi thân yêu cầu.                                                                            |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Được chấp nhận: Yêu cầu đã được chấp nhận nhưng chưa được xử lý xong. Mã này không đảm bảo rằng yêu cầu sẽ được xử lý thành công.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                           |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công.                                                           |
| getStatusCode('OK')                               | 200                                                                                                                                                                        |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                        |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                        |
| getStatusText(200)                                | OK                                                                                                                                                                         |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                   |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                   |


### ✨ Hiển thị hiệu quả 


Tôi hy vọng có thể có một trang hiển thị đơn giản, có thể hiển thị thông tin mã trạng thái hiện tại cùng với mô tả chi tiết tương ứng, như vậy có thể thuận tiện cho người dùng xem xét. Hiện tại có thể xem xét mã nguồn trước: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Tất cả các gói 


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
