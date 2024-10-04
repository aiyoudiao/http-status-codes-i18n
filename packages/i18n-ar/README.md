
## 🌐 @http-status-codes/i18n-ar


### @http-status-codes/i18n-ar 究竟是什么؟ 


يوفر معلومات حول رسائل رمز الحالة HTTP بلغ 21 لغة دولية 📜، عندما تحتاج إلى معالجة المسائل المتعلقة برموز الحالة HTTP، يمكنك تجربته، إنه سهل جدًا. 


**🚀 الدعم: **
- [x] قائمة الفهرسة(HttpStatusText)، تدعم الطريقة للحصول على عبارة السبب المقابلة لرمز الحالة باستخدام الثوابت الإنجليزية و h{رقم رمز الحالة الرقمي}. مثل `HttpStatusText.OK` أو `HttpStatusText.h200`.
- [x] قائمة الفهرسة(HttpStatusDescription)، تدعم الطريقة للحصول على الوصف التفصيلي المقابل لرمز الحالة باستخدام الثوابت الإنجليزية و h{رقم رمز الحالة الرقمي}. مثل `HttpStatusDescription.OK` أو `HttpStatusDescription.h200`.
- [x] قائمة الفهرسة(HttpStatusCode)، تدعم الطريقة للحصول على الرقم المقابل لرمز الحالة باستخدام الثوابت الإنجليزية و h{رقم رمز الحالة الرقمي}. مثل `HttpStatusCode.OK` أو `HttpStatusCode.h200`.
- [x] يدعم استخدام `isCodeOrTextValid` للتحقق من صحة رمز الحالة أو عبارة السبب للرمز. مثل `isCodeOrTextValid(200)` أو `isCodeOrTextValid('OK')` يكون كلاهما صحيحًا.
- [x] يدعم استخدام `getStatusInfo` للحصول على المعلومات الكاملة المقابلة لرمز الحالة المحدد أو عبارة السبب، مثل رمز الحالة وعبارة السبب والوصف التفصيلي والنجاح أم لا.
- [x] يدعم استخدام `isStatusSuccessful` للحصول مباشرة على ما إذا كان رمز الحالة الحالي طبيعيًا.
- [x] يدعم استخدام طريقة `getSimpleStatusMessage` للحصول على رسالة حالة بسيطة، مثل `200 OK`.
- [x] يدعم استخدام طريقة `getStatusMessage` للحصول على رسالة بسيطة محددة لرمز الحالة، مثل `200 OK: The standard response for successful HTTP requests.`.
- [x] يدعم استخدام طريقة `getStatusCode` للحصول على الرقم البسيط لرمز الحالة المحدد، مثل `getStatusCode('


### ⚔️ لماذا نقوم بذلك؟ 


مكتبة http-status-codes نفسها لا تدعم التدويل (i18n) 🌍، ولكن في مشروعي أحتاج إلى دعمها. سألت GPT عن المكتبات التي يمكن أن تلبي احتياجاتي، لكنها تكلمت بشكل غير صحيح وأخبرتني أن هناك @http-status-codes/i18n، لكن في النهاية لم أجد هذا المسمى المزعوم @http-status-codes/i18n، لذا قمت بإنشائه. 


### 💉 الإلهام المرجعي 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 الاختيار التقني 


1. أريد التطوير بسرعة باستخدام "nx" ثم استخدام السقالة "nx" لإنشاء مشروع الهندسة بسرعة.
2. أريد إنشاء الشفرة باستخدام "ts-morph".
3. أريد استخدام "Feishu / جدول الاكثر بعدا / الاختصارات الميدانية" لتنفيذ الترجمة باستخدام الذكاء الاصطناعي.
4. أريد التحويل من XLSX إلى JSON ثم استخدام الجدول المترجم لإنشاء إعدادات JSON.
5. أريد التحويل من JSON إلى المشروع ثم استخدام إعدادات JSON لإنشاء المشروع متعدد اللغات. 


### 🔥 المزايا 


✂️ خفيف الوزن: ES6، TS، قابلية التوسيع جيدة، التوافق جيد، دعم عدة حزم، الاستخدام عند الحاجة. 

⚡ قوي: يدعم اللغات المتعددة، يدعم حتى 21 دولة، دعم حزم الاعتماد على أشكال الموارد المتعددة `"cjs"، "esm"، "es"، "amd"، "iife"، "umd"، "system"`، الضغط عدة مرات، تأثير الضغط جيد. 

⚙️ ️بسيط: يوجد APIs ذات الحبيبات الدقيقة والخشنة، الاستخدام سهل جدًا. 


### 📚 الاستخدام السريع 


فقط يجب تشغيل أي أمر واحد من الأوامر التالية لتثبيت بشكل صحيح، ويكون الأمر التثبيت المحدد اعتمادًا على بيئة الاعتماد في المشروع الحالي الخاص بك، ويستخدم npm افتراضيًا. 



```bash
npm install @http-status-codes/i18n-ar
yarn add @http-status-codes/i18n-ar
pnpm i @http-status-codes/i18n-ar
```


استيراد {
  getSimpleStatusMessage،
  getStatusMessage،
  getStatusText،
} من "@http-status-codes/i18n-ar";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: الرد القياسي لطلبات HTTP الناجحة. 


### قائمة الوظائف 



| API                                               | Result                                                                                                                                        |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                           |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                           |
| HttpStatusText.OK                                 | OK                                                                                                                                            |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                            |
| HttpStatusDescription.ACCEPTED                    | مقبولة: تم قبول الطلب ولكن لم يتم معالجته بعد. هذا الرمز لا يضمن معالجة الطلب بنجاح.                                                          |
| HttpStatusDescriptionByCode.h200                  | "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                              |
| isCodeOrTextValid(200)                            | true                                                                                                                                          |
| isCodeOrTextValid('OK')                           | true                                                                                                                                          |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                          |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                          |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                          |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                          |
| getStatusInfo(200)                                | {"code":200,"message":"\"OK: الاستجابة القياسية لطلبات HTTP الناجحة.\"  ,\"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة.\" ","success":true} |
| getStatusInfo('OK')                               | {"code":200,"message":"\"OK: الاستجابة القياسية لطلبات HTTP الناجحة.\"  ,\"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة.\" ","success":true} |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"استمرار: لقد تلقى الخادم رؤوس الطلبات، ويجب على العميل أن يواصل إرسال جسم الطلب. ","success":true}                     |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"مقبولة: تم قبول الطلب ولكن لم يتم معالجته بعد. هذا الرمز لا يضمن معالجة الطلب بنجاح. ","success":true}                 |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"\"OK: الاستجابة القياسية لطلبات HTTP الناجحة.\"  ,\"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة.\" ","success":true} |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"\"OK: الاستجابة القياسية لطلبات HTTP الناجحة.\"  ,\"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة.\" ","success":true} |
| isStatusSuccessful(200)                           | true                                                                                                                                          |
| isStatusSuccessful('OK')                          | true                                                                                                                                          |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                          |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                          |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                          |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                          |
| getSimpleStatusMessage(200)                       | 200 "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                          |
| getSimpleStatusMessage('OK')                      | 200 "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                          |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 استمرار: لقد تلقى الخادم رؤوس الطلبات، ويجب على العميل أن يواصل إرسال جسم الطلب.                                                          |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 مقبولة: تم قبول الطلب ولكن لم يتم معالجته بعد. هذا الرمز لا يضمن معالجة الطلب بنجاح.                                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                          |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                          |
| getStatusMessage(200)                             | 200 "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                          |
| getStatusMessage('OK')                            | 200 "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                          |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 استمرار: لقد تلقى الخادم رؤوس الطلبات، ويجب على العميل أن يواصل إرسال جسم الطلب.                                                          |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 مقبولة: تم قبول الطلب ولكن لم يتم معالجته بعد. هذا الرمز لا يضمن معالجة الطلب بنجاح.                                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                          |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة."                                          |
| getStatusCode('OK')                               | 200                                                                                                                                           |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                           |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                           |
| getStatusText(200)                                | OK                                                                                                                                            |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                      |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                      |


### ✨ عرض التأثير 


أرغب في امتلاك صفحة عرض بسيطة يمكنها عرض رموز الحالة الحالية والوصف التفصيلي المقابل، بحيث يمكن للمستخدمين الاطلاع عليها بسهولة.  في الوقت الحاضر، يمكننا أولاً الاطلاع على الشفرة: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 جميع الباقات 


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
