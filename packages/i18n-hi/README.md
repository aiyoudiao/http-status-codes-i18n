
## 🌐 @http-status-codes/i18n-hi


### @http-status-codes/i18n-hi क्या है? 


यह 21 देशों की भी भाषाओं के HTTP स्टेटस कोड मैसेज से संबंधित जानकारी प्रदान करता है 📜, जब आप HTTP स्टेटस कोड से संबंधित मामलों को हANDLE करने की आवश्यकता हो, तो इसे आजमा सकें, बहुत सीधा। 


**🚀 समर्थन :**
- [x] HttpStatusText स_ENUM, अंग्रेज़ी स्थिरांक और h{स्थिति कोड संख्या} के तरीके से स्थिति कोड के संगत कारण वाक्यांश प्राप्त करने का समर्थन करता है। जैसे `HttpStatusText.OK` या `HttpStatusText.h200`। 
- [x] HttpStatusDescription स_ENUM, अंग्रेज़ी स्थिरांक और h{स्थिति कोड संख्या} के तरीके से स्थिति कोड के संगत विस्तृत विवरण प्राप्त करने का समर्थन करता है। जैसे `HttpStatusDescription.OK` या `HttpStatusDescription.h200`।
- [x] HttpStatusCode स_ENUM, अंग्रेज़ी स्थिरांक और h{स्थिति कोड संख्या} के तरीके से स्थिति कोड के संगत संख्या प्राप्त करने का समर्थन करता है। जैसे `HttpStatusCode.OK` या `HttpStatusCode.h200`।
- [x] `isCodeOrTextValid` के माध्यम से स्थिति कोड, स्थिति कोड कारण वाक्यांश की वैधता जांचने का समर्थन है। जैसे `isCodeOrTextValid(200)` या `isCodeOrTextValid('OK')` दोनों सत्य हैं।
- [x] `getStatusInfo` के माध्यम से निर्दिष्ट स्थिति कोड या स्थिति कोड कारण वाक्यांश के संबंधित पूरी जानकारी प्राप्त करने का समर्थन है, जैसे स्थिति कोड, कारण वाक्यांश और विस्तृत विवरण, सफलता की जानकारी आदि।
- [x]


### ⚔️ क्यों इसे करना है? 


http-status-codes के पुस्तकालय स्वयं अंतर्राष्ट्रीयीकरण (i18n) का समर्थन नहीं करता है 🌍 और मेरे प्रोजेक्ट में इसका समर्थन करने की आवश्यकता है, GPT से पूछा कि मेरी आवश्यकताओं को पूरा करने के लिए कौन से पुस्तकालय उपलब्ध हैं, यह खली बातें करता है, मुझे एक @http-status-codes/i18n बताता है, लेकिन अंत में इस तथाकथित @http-status-codes/i18n को नहीं मिला सका, इसलिए मैंने इसे बना दिया ～ 


क्योंकि कोई संदर्भात्मक प्रेरणा प्रदान नहीं की गई है, मैं इसे हिंदी में अनुवाद करने के लिए कुछ भी नहीं मिला है। 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 प्रौद्योगिकी चयन 


1. मैं `nx` का उपयोग करके तेजी से विकास करना चाहता हूं, और फिर nx स्कैफोल्ड का उपयोग करके प्रोजेक्ट इंजीनियरिंग को तेजी से उत्पन्न करना चाहता हूं
2. मैं `ts-morph` का उपयोग करके कोड उत्पन्न करना चाहता हूं
3. मैं `फ़ीस बुक/मल्टी डिमेंशनल टेबल/फ़ील्ड शॉर्टकट` का उपयोग करके AI अनुवाद करना चाहता हूं
4. मैं XLSX को JSON में बदलना चाहता हूं, इसलिए अनुवाद की गई टेबल का उपयोग करके JSON कॉन्फ़िगरेशन उत्पन्न करना चाहता हूं
5. मैं JSON को प्रोजेक्ट में बदलना चाहता हूं, इसलिए JSON कॉन्फ़िगरेशन का उपयोग करके बहुभाषीय प्रोजेक्ट उत्पन्न करना चाहता हूं


### 🔥 लाभ 


✂️ हल्का पैमाना: ES6, TS, बढ़िया विस्तारित करने की क्षमता, संगति का अच्छा स्तर, बहु पैकेज समर्थन, आवश्यकतानुसार उपयोग।
,
,⚡ मजबूत: कई देशों की भी समर्थन करता है, अधिकतम 21 देशों को समर्थित करता है, विश्वसनीय पैकेज कई संसाधन प्रारूपों `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'` का समर्थन करता है, कई बार संपीड़िति, संपीड़िति का प्रभाव अच्छा है।
,
,⚙️ सरल: सूक्ष्म-ग्रेड API और मोटा-ग्रेड API हैं, उपयोग करना बहुत सुविधाजनक है। 


### 📚 त्वरित उपयोग 


केवल निम्नलिखित में से कोई एक आदेश चलाने की आवश्यकता है ताकि सामान्य रूप से स्थापित हो सकें, विशेष स्थापना आदेश आपके वर्तमान प्रोजेक्ट में निर्भरता वातावरण के अनुसार हो, डिफॉल्ट रूप से npm का उपयोग करें। 



```bash
npm install @http-status-codes/i18n-hi
yarn add @http-status-codes/i18n-hi
pnpm i @http-status-codes/i18n-hi
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-hi";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: The standard response for successful HTTP requests.
```  को हिंदी में अनुवाद करने के लिए,

```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} से "@http-status-codes/i18n-hi" में से;

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: सफल HTTP अनुरोधों के लिए मानक प्रतिक्रिया।
``` 


### ⚡ सुविधाओं की सूची 



| API                                               | Result                                                                                                                                                                                            |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                                               |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                                               |
| HttpStatusText.OK                                 | OK                                                                                                                                                                                                |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                                                |
| HttpStatusDescription.ACCEPTED                    | स्वीकृति: प्राप्ति का अनुरोध स्वीकृति हो गई है लेकिन अभी तक संसाधित नहीं हुआ है। यह कोड यह सुनिश्चित नहीं करता है कि अनुरोध सफलतापूर्वक संसाधित हो सकें।                                          |
| HttpStatusDescriptionByCode.h200                  | सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                             |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                                              |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                                              |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                                              |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                                              |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                                              |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                                              |
| getStatusInfo(200)                                | {"code":200,"message":"सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया। ","success":true}                                                                                                    |
| getStatusInfo('OK')                               | {"code":200,"message":"सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया। ","success":true}                                                                                                    |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"जारी रखें: सर्वर ने रिक्वेस्ट हेडर्स प्राप्त किए हैं, और क्लाइंट को रिक्वेस्ट बॉडी भेजना जारी रखें। ","success":true}                                                      |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"स्वीकृति: प्राप्ति का अनुरोध स्वीकृति हो गई है लेकिन अभी तक संसाधित नहीं हुआ है। यह कोड यह सुनिश्चित नहीं करता है कि अनुरोध सफलतापूर्वक संसाधित हो सकें। ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया। ","success":true}                                                                                                    |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया। ","success":true}                                                                                                    |
| isStatusSuccessful(200)                           | true                                                                                                                                                                                              |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                                              |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                                              |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                                              |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                                              |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                                              |
| getSimpleStatusMessage(200)                       | 200 सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                         |
| getSimpleStatusMessage('OK')                      | 200 सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                         |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 जारी रखें: सर्वर ने रिक्वेस्ट हेडर्स प्राप्त किए हैं, और क्लाइंट को रिक्वेस्ट बॉडी भेजना जारी रखें।                                                                                           |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 स्वीकृति: प्राप्ति का अनुरोध स्वीकृति हो गई है लेकिन अभी तक संसाधित नहीं हुआ है। यह कोड यह सुनिश्चित नहीं करता है कि अनुरोध सफलतापूर्वक संसाधित हो सकें।                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                         |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                         |
| getStatusMessage(200)                             | 200 सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                         |
| getStatusMessage('OK')                            | 200 सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                         |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 जारी रखें: सर्वर ने रिक्वेस्ट हेडर्स प्राप्त किए हैं, और क्लाइंट को रिक्वेस्ट बॉडी भेजना जारी रखें।                                                                                           |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 स्वीकृति: प्राप्ति का अनुरोध स्वीकृति हो गई है लेकिन अभी तक संसाधित नहीं हुआ है। यह कोड यह सुनिश्चित नहीं करता है कि अनुरोध सफलतापूर्वक संसाधित हो सकें।                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                         |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया।                                                                                                                                         |
| getStatusCode('OK')                               | 200                                                                                                                                                                                               |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                                               |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                                               |
| getStatusText(200)                                | OK                                                                                                                                                                                                |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                                          |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                                          |


### ✨ प्रभाव प्रदर्शन 


मैं एक सरल प्रदर्शन पृष्ठ की उम्मीद कर रहा हूं, जो वर्तमान स्टेटस कोड सूचना और उसके संबंधित विस्तृत विवरण प्रदर्शित कर सकें, ताकि उपयोगकर्ताओं को देखना सुविधाजनक हो सकें। \
, वर्तमान में कोड देखा जा सकता है: https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 सभी पैकेज


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
