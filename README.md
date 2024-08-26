#  🌐 @http-status-codes

由于 http-status-codes 库本身并不支持国际化（i18n）🌍，它只提供了英文的 HTTP 状态码消息相关的信息📜，所以我想基于它整一个支持多国家语言的 http-status-codes，先支持中文🇨🇳，其它的后面有空再整~💻🚀

Since the http-status-codes library itself does not support internationalization (i18n) 🌍 and only provides information related to HTTP status code messages in English 📜, I want to build a http-status-codes that supports multiple languages based on it, starting with Chinese 🇨🇳, and I'll add other languages later when I have time~💻🚀

## 📚 Examples

### 📦 ES Module

```typescript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
  getStatusInfo,
  getStatusText,
  getStatusCode,
  isStatusSuccessful,
  isCodeOrTextValid,
  HttpStatusCode,
  HttpStatusDescription,
  HttpStatusText,
} from "@http-status-codes/i18n-en";

// import {
//   getSimpleStatusMessage
//   getStatusMessage,
//   getStatusText,
//   getStatusInfo,
//   getStatusText,
//   getStatusCode,
//   isStatusSuccessful,
//   isCodeOrTextValid,
//   HttpStatusCode,
//   HttpStatusDescription,
//   HttpStatusText,
// } from "@http-status-codes/i18n-zh";


console.log(HttpStatusCode.CONTINUE); // 100
console.log(HttpStatusCode.OK); // 100

console.log(HttpStatusText.CONTINUE); // 'Continue'
console.log(HttpStatusText.OK); // 'OK'

console.log(HttpStatusDescription.CONTINUE); // 'Continue：The server has received the request headers, and that the client should proceed to send the request body.'
console.log(HttpStatusDescription.OK); // 'OK：The standard response for successful HTTP requests.'


/**
 * getSimpleStatusMessage(200) -> 200 OK
 * getSimpleStatusMessage('OK') -> 200 OK
 */
console.log(getSimpleStatusMessage(HttpStatusCode.OK));
console.log(getSimpleStatusMessage(HttpStatusText.OK));


/**
 * getStatusMessage(200) -> 200 OK：The standard response for successful HTTP requests.
 * getStatusMessage('OK') -> 200 OK：The standard response for successful HTTP requests.
 */
console.log(getStatusMessage(HttpStatusCode.OK));
console.log(getStatusMessage(HttpStatusText.OK));


/**
 * getStatusInfo(200) -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
 * getStatusInfo('OK') -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
 */
console.log(getStatusInfo(HttpStatusCode.OK));
console.log(getStatusInfo(HttpStatusText.OK));


/**
 * isStatusSuccessful(200) -> true
 * isStatusSuccessful('OK') -> true
 */
console.log(isStatusSuccessful(HttpStatusCode.OK))
console.log(isStatusSuccessful(HttpStatusText.OK))


/**
  * isCodeOrTextValid(200) -> true
  * isCodeOrTextValid('OK') -> true
 */
console.log(isCodeOrTextValid(0)) // false
console.log(isCodeOrTextValid(true)) // false
console.log(isCodeOrTextValid(100)) // true
console.log(isCodeOrTextValid(HttpStatusCode.OK)) // true
console.log(isCodeOrTextValid(HttpStatusText.OK)) // true


/**
 * getStatusMessage(200) -> 200 OK：The standard response for successful HTTP requests.
 * getStatusMessage('OK') -> 200 OK：The standard response for successful HTTP requests.
 */
console.log(getStatusMessage(HttpStatusCode.OK))
console.log(getStatusMessage(HttpStatusText.OK))


console.log(getStatusText(HttpStatusCode.OK)); // getStatusCode('200') -> OK
console.log(getStatusCode('OK')) // getStatusCode('OK') -> 200

```

### 📦 CommonJS

```javascript
const {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
  getStatusInfo,
  getStatusText,
  getStatusCode,
  isStatusSuccessful,
  isCodeOrTextValid,
  HttpStatusCode,
  HttpStatusDescription,
  HttpStatusText } = require('@http-status-codes/i18n-en')

// const {
//   getSimpleStatusMessage,
//   getStatusMessage,
//   getStatusText,
//   getStatusInfo,
//   getStatusText,
//   getStatusCode,
//   isStatusSuccessful,
//   isCodeOrTextValid,
//   HttpStatusCode,
//   HttpStatusDescription,
//   HttpStatusText } = require('@http-status-codes/i18n-zh')


console.log(HttpStatusCode.CONTINUE); // 100
console.log(HttpStatusCode.OK); // 100

console.log(HttpStatusText.CONTINUE); // 'Continue'
console.log(HttpStatusText.OK); // 'OK'

console.log(HttpStatusDescription.CONTINUE); // 'Continue：The server has received the request headers, and that the client should proceed to send the request body.'
console.log(HttpStatusDescription.OK); // 'OK：The standard response for successful HTTP requests.'


/**
 * getSimpleStatusMessage(200) -> 200 OK
 * getSimpleStatusMessage('OK') -> 200 OK
 */
console.log(getSimpleStatusMessage(HttpStatusCode.OK));
console.log(getSimpleStatusMessage(HttpStatusText.OK));


/**
 * getStatusMessage(200) -> 200 OK：The standard response for successful HTTP requests.
 * getStatusMessage('OK') -> 200 OK：The standard response for successful HTTP requests.
 */
console.log(getStatusMessage(HttpStatusCode.OK));
console.log(getStatusMessage(HttpStatusText.OK));


/**
 * getStatusInfo(200) -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
 * getStatusInfo('OK') -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
 */
console.log(getStatusInfo(HttpStatusCode.OK));
console.log(getStatusInfo(HttpStatusText.OK));


/**
 * isStatusSuccessful(200) -> true
 * isStatusSuccessful('OK') -> true
 */
console.log(isStatusSuccessful(HttpStatusCode.OK))
console.log(isStatusSuccessful(HttpStatusText.OK))


/**
  * isCodeOrTextValid(200) -> true
  * isCodeOrTextValid('OK') -> true
 */
console.log(isCodeOrTextValid(0)) // false
console.log(isCodeOrTextValid(true)) // false
console.log(isCodeOrTextValid(100)) // true
console.log(isCodeOrTextValid(HttpStatusCode.OK)) // true
console.log(isCodeOrTextValid(HttpStatusText.OK)) // true


/**
 * getStatusMessage(200) -> 200 OK：The standard response for successful HTTP requests.
 * getStatusMessage('OK') -> 200 OK：The standard response for successful HTTP requests.
 */
console.log(getStatusMessage(HttpStatusCode.OK))
console.log(getStatusMessage(HttpStatusText.OK))


console.log(getStatusText(HttpStatusCode.OK)); // getStatusCode('200') -> OK
console.log(getStatusCode('OK')) // getStatusCode('OK') -> 200
```


## 📦 Packages

http://www.lingoes.net/zh/translator/langcode.htm

| 标题    | 描述                 | 源码        | 包名                       |
| ------- | -------------------- | ----------- | -------------------------- |
| zh      | 中文                 | packages/i18n-zh | [@http-status-codes/i18n-zh](https://www.npmjs.com/package/@http-status-codes/i18n-zh) |
| en      | 英文                 | packages/i18n-en | [@http-status-codes/i18n-en](https://www.npmjs.com/package/@http-status-codes/i18n-en) |
| ja      | 日语                 | packages/i18n-ja | @http-status-codes/i18n-ja |
| th      | 泰语                 | packages/i18n-th | @http-status-codes/i18n-th |
| hi      | 印地语               | packages/i18n-hi | @http-status-codes/i18n-hi |
| id      | 印度尼西亚语         | packages/i18n-id | @http-status-codes/i18n-id |
| zh-Hant | 繁体中文             | packages/i18n-zh-Hant | @http-status-codes/i18n-zh-Hant |
| fr      | 法语                 | packages/i18n-fr | @http-status-codes/i18n-fr |
| es      | 西班牙语             | packages/i18n-es | @http-status-codes/i18n-es |
| pt      | 葡萄牙语             | packages/i18n-pt | @http-status-codes/i18n-pt |
| ko      | 韩语                 | packages/i18n-ko | @http-status-codes/i18n-ko |
| vi      | 越南语               | packages/i18n-vi | @http-status-codes/i18n-vi |
| ru      | 俄语                 | packages/i18n-ru | @http-status-codes/i18n-ru |
| de      | 德语                 | packages/i18n-de | @http-status-codes/i18n-de |
| it      | 意大利语             | packages/i18n-it | @http-status-codes/i18n-it |
| ar      | 阿拉伯语             | packages/i18n-ar | @http-status-codes/i18n-ar |
| pl      | 波兰语               | packages/i18n-pl | @http-status-codes/i18n-pl |
| tl      | 塔加路语（菲律宾语） | packages/i18n-tl | @http-status-codes/i18n-tl |
| ms      | 马来语               | packages/i18n-ms | @http-status-codes/i18n-ms |
| tr      | 土耳其语             | packages/i18n-tr | @http-status-codes/i18n-tr |
| hu      | 匈牙利语             | packages/i18n-hu | @http-status-codes/i18n-hu |


## 📜 Http codes

超文本传输协议的查看示例: https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 \
nodejs: https://github.com/nodejs/node/blob/main/lib/_http_server.js

```javascript
const STATUS_CODES = {
  100: 'Continue',                   // RFC 7231 6.2.1 
  101: 'Switching Protocols',        // RFC 7231 6.2.2 
  102: 'Processing',                 // RFC 2518 10.1 (obsoleted by RFC 4918)
  103: 'Early Hints',                // RFC 8297 2
  200: 'OK',                         // RFC 7231 6.3.1
  201: 'Created',                    // RFC 7231 6.3.2
  202: 'Accepted',                   // RFC 7231 6.3.3
  203: 'Non-Authoritative Information', // RFC 7231 6.3.4
  204: 'No Content',                 // RFC 7231 6.3.5
  205: 'Reset Content',              // RFC 7231 6.3.6
  206: 'Partial Content',            // RFC 7233 4.1
  207: 'Multi-Status',               // RFC 4918 11.1
  208: 'Already Reported',           // RFC 5842 7.1
  226: 'IM Used',                    // RFC 3229 10.4.1
  300: 'Multiple Choices',           // RFC 7231 6.4.1
  301: 'Moved Permanently',          // RFC 7231 6.4.2
  302: 'Found',                      // RFC 7231 6.4.3
  303: 'See Other',                  // RFC 7231 6.4.4
  304: 'Not Modified',               // RFC 7232 4.1
  305: 'Use Proxy',                  // RFC 7231 6.4.5
  307: 'Temporary Redirect',         // RFC 7231 6.4.7
  308: 'Permanent Redirect',         // RFC 7238 3
  400: 'Bad Request',                // RFC 7231 6.5.1
  401: 'Unauthorized',               // RFC 7235 3.1
  402: 'Payment Required',           // RFC 7231 6.5.2
  403: 'Forbidden',                  // RFC 7231 6.5.3
  404: 'Not Found',                  // RFC 7231 6.5.4
  405: 'Method Not Allowed',         // RFC 7231 6.5.5
  406: 'Not Acceptable',             // RFC 7231 6.5.6
  407: 'Proxy Authentication Required', // RFC 7235 3.2
  408: 'Request Timeout',            // RFC 7231 6.5.7
  409: 'Conflict',                   // RFC 7231 6.5.8
  410: 'Gone',                       // RFC 7231 6.5.9
  411: 'Length Required',            // RFC 7231 6.5.10
  412: 'Precondition Failed',        // RFC 7232 4.2
  413: 'Payload Too Large',          // RFC 7231 6.5.11
  414: 'URI Too Long',               // RFC 7231 6.5.12
  415: 'Unsupported Media Type',     // RFC 7231 6.5.13
  416: 'Range Not Satisfiable',      // RFC 7233 4.4
  417: 'Expectation Failed',         // RFC 7231 6.5.14
  418: 'I\'m a Teapot',              // RFC 7168 2.3.3
  421: 'Misdirected Request',        // RFC 7540 9.1.2
  422: 'Unprocessable Entity',       // RFC 4918 11.2
  423: 'Locked',                     // RFC 4918 11.3
  424: 'Failed Dependency',          // RFC 4918 11.4
  425: 'Too Early',                  // RFC 8470 5.2
  426: 'Upgrade Required',           // RFC 2817 and RFC 7231 6.5.15
  428: 'Precondition Required',      // RFC 6585 3
  429: 'Too Many Requests',          // RFC 6585 4
  431: 'Request Header Fields Too Large', // RFC 6585 5
  451: 'Unavailable For Legal Reasons', // RFC 7725 3
  500: 'Internal Server Error',      // RFC 7231 6.6.1
  501: 'Not Implemented',            // RFC 7231 6.6.2
  502: 'Bad Gateway',                // RFC 7231 6.6.3
  503: 'Service Unavailable',        // RFC 7231 6.6.4
  504: 'Gateway Timeout',            // RFC 7231 6.6.5
  505: 'HTTP Version Not Supported', // RFC 7231 6.6.6
  506: 'Variant Also Negotiates',    // RFC 2295 8.1
  507: 'Insufficient Storage',       // RFC 4918 11.5
  508: 'Loop Detected',              // RFC 5842 7.2
  509: 'Bandwidth Limit Exceeded',
  510: 'Not Extended',               // RFC 2774 7
  511: 'Network Authentication Required', // RFC 6585 6
};
```

## 📋 RFC Tables

| Code | Text                                             | Enum                                           | Description                                                                                                                                                                                                                                                                                                                                                                        | Translation                                                                                                                                 | Comment                               | Link                                                                                                             |
| ---- | ------------------------------------------------ | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                         | CONTINUE                                       | Continue：The server has received the request headers, and that the client should proceed to send the request body.                                                                                                                                                                                                                                                                 | 继续：服务器已经收到请求头，客户端应继续发送请求主体。                                                                                                                 | RFC 7231 6.2.1                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1                                                      |
| 101  | Switching Protocols                              | SWITCHING_PROTOCOLS                            | Switching protocols：The requester has asked the server to switch protocols and the server is acknowledging that it will do so.                                                                                                                                                                                                                                                     | 切换协议：请求者已要求服务器切换协议，服务器确认它将进行切换。                                                                                                             | RFC 7231 6.2.2                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2                                                      |
| 102  | Processing                                       | PROCESSING                                     | Processing：The server has received and is processing the request, but no response is available yet.                                                                                                                                                                                                                                                                                | 处理中：服务器已收到请求并正在处理，但尚无可用的响应。                                                                                                                 | RFC 2518 10.1 (obsoleted by RFC 4918) | https://datatracker.ietf.org/doc/html/rfc2518#section-10.1                                                       |
| 200  | OK                                               | OK                                             | OK：The standard response for successful HTTP requests.                                                                                                                                                                                                                                                                                                                             | 成功：标准的成功 HTTP 请求响应。                                                                                                                         | RFC 7231 6.3.1                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1                                                      |
| 201  | Created                                          | CREATED                                        | Created：The request has been fulfilled and a new resource has been created.                                                                                                                                                                                                                                                                                                        | 已创建：请求已完成并且新资源已创建。                                                                                                                          | RFC 7231 6.3.2                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2                                                      |
| 202  | Accepted                                         | ACCEPTED                                       | Accepted：The request has been accepted but has not been processed yet. This code does not guarantee that the request will process successfully.                                                                                                                                                                                                                                    | 已接受：请求已被接受但尚未处理完毕。此代码不保证请求会成功处理。                                                                                                            | RFC 7231 6.3.3                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3                                                      |
| 203  | Non-Authoritative Information                    | NON_AUTHORITATIVE_INFORMATION                  | Non-authoritative information：HTTP 1.1. The server successfully processed the request but is returning information from another source.                                                                                                                                                                                                                                            | 非权威信息：服务器成功处理了请求，但返回的是来自另一来源的信息。                                                                                                            | RFC 7231 6.3.4                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4                                                      |
| 204  | No Content                                       | NO_CONTENT                                     | No content：The server accepted the request but is not returning any content. This is often used as a response to a DELETE request.                                                                                                                                                                                                                                                 | 无内容：服务器接受了请求，但没有返回任何内容。通常作为 DELETE 请求的响应。                                                                                                   | RFC 7231 6.3.5                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5                                                      |
| 205  | Reset Content                                    | RESET_CONTENT                                  | Reset content：Similar to a 204 No Content response but this response requires the requester to reset the document view.                                                                                                                                                                                                                                                            | 重置内容：类似于 204 无内容响应，但此响应要求请求者重置文档视图。                                                                                                         | RFC 7231 6.3.6                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6                                                      |
| 206  | Partial Content                                  | PARTIAL_CONTENT                                | Partial content：The server is delivering only a portion of the content, as requested by the client via a range header.                                                                                                                                                                                                                                                             | 部分内容：服务器仅提供了客户端通过 Range 头请求的部分内容。                                                                                                           | RFC 7233 4.1                          | https://datatracker.ietf.org/doc/html/rfc7233#section-4.1                                                        |
| 207  | Multi-Status                                     | MULTI_STATUS                                   | Multi-status：The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.                                                                                                                                                                                                                    | 多状态：后续的消息体是一个 XML 消息，可能包含多个响应代码，具体取决于有多少子请求被发出。                                                                                             | RFC 4918 11.1                         | https://datatracker.ietf.org/doc/html/rfc4918#section-11.1                                                       |
| 208  | Already Reported                                 | ALREADY_REPORTED                               | Already reported：The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.                                                                                                                                                                                                                                  | 已报告：DAV 绑定的成员已经在对此请求的先前回复中被枚举，不再重复包含。                                                                                                       | RFC 5842 7.1                          | https://datatracker.ietf.org/doc/html/rfc5842#section-7.1                                                        |
| 226  | IM Used                                          | IM_USED                                        | IM used：The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.                                                                                                                                                                                         | IM 使用：服务器已完成资源的 GET 请求，并且响应表示对当前实例应用了一个或多个实例操作的结果。                                                                                          | RFC 3229 10.4.1                       | https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1                                                     |
| 300  | Multiple Choices                                 | MULTIPLE_CHOICES                               | Multiple choices：There are multiple options that the client may follow.                                                                                                                                                                                                                                                                                                            | 多重选择：客户端可以选择多个选项中的一个进行操作。                                                                                                                   | RFC 7231 6.4.1                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1                                                      |
| 301  | Moved Permanently                                | MOVED_PERMANENTLY                              | Moved permanently：The resource has been moved and all further requests should reference its new URI.                                                                                                                                                                                                                                                                               | 永久移动：资源已被移动，所有后续请求应参考其新的 URI。                                                                                                               | RFC 7231 6.4.2                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2                                                      |
| 302  | Found                                            | FOUND                                          | Found：The HTTP 1.0 specification described this status as "Moved Temporarily", but popular browsers respond to this status similar to behavior intended for 303. The resource can be retrieved by referencing the returned URI.                                                                                                                                                    | 找到：HTTP 1.0 规范将此状态描述为“临时移动”，但流行的浏览器对此状态的响应类似于 303 的行为。资源可以通过参考返回的 URI 来获取。                                                                  | RFC 7231 6.4.3                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3                                                      |
| 303  | See Other                                        | SEE_OTHER                                      | See other：The resource can be retrieved by following other URI using the GET method. When received in response to a POST, PUT, or DELETE, it can usually be assumed that the server processed the request successfully and is sending the client to an informational endpoint.                                                                                                     | 参见其他：资源可以通过使用 GET 方法来获取其他 URI。当在响应 POST、PUT 或 DELETE 请求时收到此状态码，通常可以认为服务器已成功处理请求并将客户端指向一个信息性端点。                                              | RFC 7231 6.4.4                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4                                                      |
| 304  | Not Modified                                     | NOT_MODIFIED                                   | Not modified：The resource has not been modified since the version specified in If-Modified-Since or If-Match headers. The resource will not be returned in response body.                                                                                                                                                                                                          | 未修改：自 If-Modified-Since 或 If-Match 头中指定的版本以来，资源未被修改。响应主体中将不会返回资源。                                                                           | RFC 7232 4.1                          | https://datatracker.ietf.org/doc/html/rfc7232#section-4.1                                                        |
| 305  | Use Proxy                                        | USE_PROXY                                      | Use proxy：HTTP 1.1. The resource is only available through a proxy and the address is provided in the response.                                                                                                                                                                                                                                                                    | 使用代理：HTTP 1.1。资源只能通过代理访问，地址在响应中提供。                                                                                                          | RFC 7231 6.4.5                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5                                                      |
| 306  | Switch proxy                                     | SWITCH_PROXY                                   | Switch proxy：Deprecated in HTTP 1.1. Used to mean that subsequent requests should be sent using the specified proxy.                                                                                                                                                                                                                                                               | 切换代理：在 HTTP 1.1 中已废弃。曾用于表示后续请求应使用指定的代理发送。                                                                                                   |                                       | Empty                                                                                                            |
| 307  | Temporary Redirect                               | TEMPORARY_REDIRECT                             | Temporary redirect：HTTP 1.1. The request should be repeated with the URI provided in the response, but future requests should still call the original URI.                                                                                                                                                                                                                         | 临时重定向：HTTP 1.1。请求应使用响应中提供的 URI 重新发送，但未来的请求仍应调用原始 URI。                                                                                       | RFC 7231 6.4.7                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7                                                      |
| 308  | Permanent Redirect                               | PERMANENT_REDIRECT                             | Resume Incomplete (Google)：This code is used in the Resumable HTTP Requests Proposal to resume aborted PUT or POST requests                                                                                                                                                                                                                                                        | 永久重定向：请求和所有未来的请求应使用响应中提供的 URI 重新发送。                                                                                                         | RFC 7238 3                            | https://datatracker.ietf.org/doc/html/rfc7238#section-3                                                          |
| 400  | Bad Request                                      | BAD_REQUEST                                    | Bad request：The request could not be fulfilled due to the incorrect syntax of the request.                                                                                                                                                                                                                                                                                         | 错误请求：由于请求的语法不正确，无法满足请求。                                                                                                                     | RFC 7231 6.5.1                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1                                                      |
| 401  | Unauthorized                                     | UNAUTHORIZED                                   | Unauthorized：The requester is not authorized to access the resource. This is similar to 403 but is used in cases where authentication is expected but has failed or has not been provided.                                                                                                                                                                                         | 未授权：请求者未被授权访问该资源。与 403 类似，但用于身份验证失败或未提供身份验证的情况。                                                                                             | RFC 7235 3.1                          | https://datatracker.ietf.org/doc/html/rfc7235#section-3.1                                                        |
| 402  | Payment Required                                 | PAYMENT_REQUIRED                               | Payment required：Reserved for future use. Some web services use this as an indication that the client has sent an excessive number of requests.                                                                                                                                                                                                                                    | 需要付款：保留以供将来使用。某些网络服务使用此状态码表示客户端发送的请求次数过多。                                                                                                   | RFC 7231 6.5.2                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2                                                      |
| 403  | Forbidden                                        | FORBIDDEN                                      | Forbidden：The request was formatted correctly but the server is refusing to supply the requested resource. Unlike 401, authenticating will not make a difference in the server's response.                                                                                                                                                                                         | 禁止：请求格式正确，但服务器拒绝提供请求的资源。与 401 不同，身份验证不会改变服务器的响应。                                                                                            | RFC 7231 6.5.3                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3                                                      |
| 404  | Not Found                                        | NOT_FOUND                                      | Not found：The resource could not be found. This is often used as a catch-all for all invalid URIs requested of the server.                                                                                                                                                                                                                                                         | 未找到：找不到请求的资源。通常用于服务器上所有无效的 URI 请求。                                                                                                          | RFC 7231 6.5.4                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4                                                      |
| 405  | Method Not Allowed                               | METHOD_NOT_ALLOWED                             | Method not allowed：The resource was requested using a method that is not allowed. For example, requesting a resource via a POST method when the resource only supports the GET method.                                                                                                                                                                                             | 方法不允许：资源请求使用了不允许的方法。例如，使用 POST 方法请求资源，但该资源仅支持 GET 方法。                                                                                       | RFC 7231 6.5.5                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5                                                      |
| 406  | Not Acceptable                                   | NOT_ACCEPTABLE                                 | Not acceptable：The resource is valid, but cannot be provided in a format specified in the Accept headers in the request.                                                                                                                                                                                                                                                           | 不可接受：资源有效，但无法以请求中 Accept 头字段指定的格式提供。                                                                                                        | RFC 7231 6.5.6                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6                                                      |
| 407  | Proxy Authentication Required                    | PROXY_AUTHENTICATION_REQUIRED                  | Proxy authentication required：Authentication is required with the proxy before requests can be fulfilled.                                                                                                                                                                                                                                                                          | 需要代理身份验证：在满足请求之前，需要对代理进行身份验证。                                                                                                               | RFC 7235 3.2                          | https://datatracker.ietf.org/doc/html/rfc7235#section-3.2                                                        |
| 408  | Request Timeout                                  | REQUEST_TIMEOUT                                | Request timeout：The server timed out waiting for a request from the client. The client is allowed to repeat the request.                                                                                                                                                                                                                                                           | 请求超时：服务器等待客户端的请求超时。允许客户端重新发送请求。                                                                                                             | RFC 7231 6.5.7                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7                                                      |
| 409  | Conflict                                         | CONFLICT                                       | Conflict：The request cannot be completed due to a conflict in the request parameters.                                                                                                                                                                                                                                                                                              | 冲突：由于请求参数中的冲突，无法完成请求。                                                                                                                       | RFC 7231 6.5.8                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8                                                      |
| 410  | Gone                                             | GONE                                           | Gone：The resource is no longer available at the requested URI and no redirection will be given.                                                                                                                                                                                                                                                                                    | 已删除：请求的资源在请求的 URI 不再可用，且不会提供重定向。                                                                                                            | RFC 7231 6.5.9                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9                                                      |
| 411  | Length Required                                  | LENGTH_REQUIRED                                | Length required：The request did not specify the length of its content as required by the resource.                                                                                                                                                                                                                                                                                 | 需要内容长度：请求未指定资源所需的内容长度。                                                                                                                      | RFC 7231 6.5.10                       | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10                                                     |
| 412  | Precondition Failed                              | PRECONDITION_FAILED                            | Precondition failed：The server does not meet one of the preconditions specified by the client.                                                                                                                                                                                                                                                                                     | 前提条件失败：服务器不满足客户端指定的一个前提条件。                                                                                                                  | RFC 7232 4.2                          | https://datatracker.ietf.org/doc/html/rfc7232#section-4.2                                                        |
| 413  | Payload Too Large                                | PAYLOAD_TOO_LARGE                              | Request entity too large：The request is larger than what the server is able to process.                                                                                                                                                                                                                                                                                            | 请求实体过大：请求的内容比服务器能够处理的要大。                                                                                                                    | RFC 7231 6.5.11                       | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11                                                     |
| 414  | URI Too Long                                     | URI_TOO_LONG                                   | Request-URI too long：The URI provided in the request is too long for the server to process. This is often used when too much data has been encoded into the URI of a GET request and a POST request should be used instead.                                                                                                                                                        | 请求 URI 过长：请求中提供的 URI 过长，服务器无法处理。通常在 GET 请求的 URI 中编码了过多数据时会使用此状态码，此时应改用 POST 请求。                                                             | RFC 7231 6.5.12                       | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12                                                     |
| 415  | Unsupported Media Type                           | UNSUPPORTED_MEDIA_TYPE                         | Unsupported media type：The client provided data with a media type that the server does not support.                                                                                                                                                                                                                                                                                | 不支持的媒体类型：客户端提供的数据类型不受服务器支持。                                                                                                                 | RFC 7231 6.5.13                       | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13                                                     |
| 416  | Range Not Satisfiable                            | RANGE_NOT_SATISFIABLE                          | Requested range not satisfiable：The client has asked for a portion of the resource but the server cannot supply that portion.                                                                                                                                                                                                                                                      | 请求的范围无法满足：客户端请求了资源的一部分，但服务器无法提供该部分。                                                                                                         | RFC 7233 4.4                          | https://datatracker.ietf.org/doc/html/rfc7233#section-4.4                                                        |
| 417  | Expectation Failed                               | EXPECTATION_FAILED                             | Expectation failed：The server cannot meet the requirements of the Expect request-header field.                                                                                                                                                                                                                                                                                     | 期望失败：服务器无法满足 Expect 请求头字段的要求。                                                                                                               | RFC 7231 6.5.14                       | https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14                                                     |
| 418  | I'm a Teapot                                     | I_M_A_TEAPOT                                   | I'm a teapot：Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.                                                                                                                                                                                                                        | 我是茶壶：任何尝试用茶壶煮咖啡的行为都应该导致错误代码 "418 我是茶壶"。生成的实体内容可能会又短又粗。                                                                                      |                                       | Empty                                                                                                            |
| 421  | Misdirected Request                              | MISDIRECTED_REQUEST                            | Misdirected request：The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.                                                                                                                        | 请求错误定向：请求被定向到无法提供响应的服务器。该状态码可以由未配置为响应请求 URI 中包含的方案和授权组合的服务器发送。                                                                              | RFC 7540 9.1.2                        | https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2                                                      |
| 422  | Unprocessable Entity                             | UNPROCESSABLE_ENTITY                           | Unprocessable entity：The request was formatted correctly but cannot be processed in its current form. Often used when the specified parameters fail validation errors.                                                                                                                                                                                                             | 无法处理的实体：请求格式正确，但在当前表单中无法处理。通常在指定的参数未通过验证错误时使用。                                                                                              | RFC 4918 11.2                         | https://datatracker.ietf.org/doc/html/rfc4918#section-11.2                                                       |
| 423  | Locked                                           | LOCKED                                         | Locked：The requested resource was found but has been locked and will not be returned.                                                                                                                                                                                                                                                                                              | 已锁定：请求的资源已找到，但由于其被锁定而无法访问。                                                                                                                  | RFC 4918 11.3                         | https://datatracker.ietf.org/doc/html/rfc4918#section-11.3                                                       |
| 424  | Failed Dependency                                | FAILED_DEPENDENCY                              | Failed dependency：The request failed due to a failure of a previous request.                                                                                                                                                                                                                                                                                                       | 依赖失败：由于前一个请求失败，导致当前请求也失败。                                                                                                                   | RFC 4918 11.4                         | https://datatracker.ietf.org/doc/html/rfc4918#section-11.4                                                       |
| 426  | Upgrade Required                                 | UPGRADE_REQUIRED                               | Upgrade required：The client should repeat the request using an upgraded protocol such as TLS 1.0.                                                                                                                                                                                                                                                                                  | 需要升级：客户端应切换到升级后的协议（如 TLS/1.0），然后再发送请求。                                                                                                      | RFC 2817 and RFC 7231 6.5.15          | https://datatracker.ietf.org/doc/html/rfc2817  and  https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15 |
| 428  | Precondition Required                            | PRECONDITION_REQUIRED                          | Precondition required：The origin server requires the request to be conditional.                                                                                                                                                                                                                                                                                                    | 需要前提条件：源服务器要求请求是有条件的。                                                                                                                       | RFC 6585 3                            | https://datatracker.ietf.org/doc/html/rfc6585#section-3                                                          |
| 429  | Too Many Requests                                | TOO_MANY_REQUESTS                              | Too many requests：The user has sent too many requests in a given amount of time ("rate limiting").                                                                                                                                                                                                                                                                                 | 请求过多：用户在给定的时间内发送了过多的请求（"速率限制"）。                                                                                                             | RFC 6585 4                            | https://datatracker.ietf.org/doc/html/rfc6585#section-4                                                          |
| 431  | Request Header Fields Too Large                  | REQUEST_HEADER_FIELDS_TOO_LARGE                | Request header fields too large：The server is unwilling to process the request because its header fields are too large.                                                                                                                                                                                                                                                            | 请求头字段过大：服务器不愿意处理请求，因为其头字段过大。                                                                                                                | RFC 6585 5                            | https://datatracker.ietf.org/doc/html/rfc6585#section-5                                                          |
| 440  | Login Timeout (Microsoft)                        | LOGIN_TIMEOUT_MICROSOFT                        | Login Timeout (Microsoft)：A Microsoft extension. Indicates that your session has expired.                                                                                                                                                                                                                                                                                          | 登录超时：Microsoft 扩展。表示由于用户登录超时而导致的失败。                                                                                                         |                                       | Empty                                                                                                            |
| 444  | No Response (Nginx)                              | NO_RESPONSE_NGINX                              | No Response (Nginx)：Used in Nginx logs to indicate that the server has returned no information to the client and closed the connection (useful as a deterrent for malware).                                                                                                                                                                                                        | 无响应：Nginx 内部状态码，用于指示服务器未返回任何信息并关闭连接。                                                                                                        |                                       | Empty                                                                                                            |
| 449  | Retry With (Microsoft)                           | RETRY_WITH_MICROSOFT                           | Retry With (Microsoft)：A Microsoft extension. The request should be retried after performing the appropriate action.                                                                                                                                                                                                                                                               | 重试：Microsoft 扩展。用于指示客户端应在执行适当操作后重新发送请求。                                                                                                     |                                       | Empty                                                                                                            |
| 450  | Blocked by Windows Parental Controls (Microsoft) | BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT | Blocked by Windows Parental Controls (Microsoft)：A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.                                                                                                                                                                                             | 被 Windows 家长控制阻止：Microsoft 扩展。当 Windows 家长控制阻止访问特定网页时出现。                                                                                    |                                       | Empty                                                                                                            |
| 451  | Unavailable For Legal Reasons                    | UNAVAILABLE_FOR_LEGAL_REASONS                  | Redirect (Microsoft)：Used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the users' mailbox.                                                                                                                                                                                                                                 | 因法律原因不可用：服务器由于接到法律约束请求而无法操作。                                                                                                                | RFC 7725 3                            | https://datatracker.ietf.org/doc/html/rfc7725#section-3                                                          |
| 494  | Request Header Too Large (Nginx)                 | REQUEST_HEADER_TOO_LARGE_NGINX                 | Request Header Too Large (Nginx)：Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4 (on January 21, 2011).                                                                                                                                                                                                                                          | 请求头字段过大：Nginx 内部代码，类似于 431，但在更早版本中实现。                                                                                                       |                                       | Empty                                                                                                            |
| 495  | Cert Error (Nginx)                               | CERT_ERROR_NGINX                               | Cert Error (Nginx)：Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an error page redirection.                                                                                                                                                                                                                          | 证书错误：Nginx 内部代码，用于 SSL 客户端证书错误，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。                                                                                |                                       | Empty                                                                                                            |
| 496  | No Cert (Nginx)                                  | NO_CERT_NGINX                                  | No Cert (Nginx)：Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an error page redirection.                                                                                                                                                                                                                                 | 无证书：Nginx 内部代码，当客户端未提供证书时使用，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。                                                                                   |                                       | Empty                                                                                                            |
| 497  | HTTP to HTTPS (Nginx)                            | HTTP_TO_HTTPS_NGINX                            | HTTP to HTTPS (Nginx)：Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in a log and an error page redirection.                                                                                                                                                                                                          | HTTP 到 HTTPS：Nginx 内部代码，用于发送到 HTTPS 端口的纯 HTTP 请求，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。                                                              |                                       | Empty                                                                                                            |
| 498  | Token expired/invalid (Esri)                     | TOKEN_EXPIRED_INVALID_ESRI                     | Token expired/invalid (Esri)：Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.                                                                                                                                                                                                                                                         | 令牌过期/无效：由 ArcGIS for Server 返回。代码 498 表示令牌已过期或无效。                                                                                           |                                       | Empty                                                                                                            |
| 499  | Token required (Esri)                            | TOKEN_REQUIRED_ESRI                            | Token required (Esri)：Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).                                                                                                                                                                                                                                                 | 需要令牌：由 ArcGIS for Server 返回。代码 499 表示需要令牌（如果未提交令牌）。                                                                                         |                                       | Empty                                                                                                            |
| 500  | Internal Server Error                            | INTERNAL_SERVER_ERROR                          | Internal server error：A generic status for an error in the server itself.                                                                                                                                                                                                                                                                                                          | 服务器内部错误：服务器自身的通用错误状态。                                                                                                                       | RFC 7231 6.6.1                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1                                                      |
| 501  | Not Implemented                                  | NOT_IMPLEMENTED                                | Not implemented：The server cannot respond to the request. This usually implies that the server could possibly support the request in the future — otherwise a 4xx status may be more appropriate.                                                                                                                                                                                  | 未实现：服务器无法响应请求，通常表示服务器可能在未来支持此请求，否则使用 4xx 状态码可能更为适当。                                                                                         | RFC 7231 6.6.2                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2                                                      |
| 502  | Bad Gateway                                      | BAD_GATEWAY                                    | Bad gateway：The server is acting as a proxy and did not receive an acceptable response from the upstream server.                                                                                                                                                                                                                                                                   | 错误网关：服务器作为代理时，从上游服务器接收到的响应无效。                                                                                                               | RFC 7231 6.6.3                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3                                                      |
| 503  | Service Unavailable                              | SERVICE_UNAVAILABLE                            | Service unavailable：The server is down and is not accepting requests.                                                                                                                                                                                                                                                                                                              | 服务不可用：服务器停机，不接受请求。                                                                                                                          | RFC 7231 6.6.4                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4                                                      |
| 504  | Gateway Timeout                                  | GATEWAY_TIMEOUT                                | Gateway timeout：The server is acting as a proxy and did not receive a response from the upstream server.                                                                                                                                                                                                                                                                           | 网关超时：服务器作为代理时，从上游服务器未能及时接收到响应。                                                                                                              | RFC 7231 6.6.5                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5                                                      |
| 505  | HTTP Version Not Supported                       | HTTP_VERSION_NOT_SUPPORTED                     | HTTP version not supported：The server does not support the HTTP protocol version specified in the request.                                                                                                                                                                                                                                                                         | 不支持的 HTTP 版本：服务器不支持请求中所用的 HTTP 协议版本。                                                                                                        | RFC 7231 6.6.6                        | https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6                                                      |
| 506  | Variant Also Negotiates                          | VARIANT_ALSO_NEGOTIATES                        | Variant also negotiates：Transparent content negotiation for the request results in a circular reference.                                                                                                                                                                                                                                                                           | 变体也在协商：请求的透明内容协商导致循环引用。                                                                                                                     | RFC 2295 8.1                          | https://datatracker.ietf.org/doc/html/rfc2295#section-8.1                                                        |
| 507  | Insufficient Storage                             | INSUFFICIENT_STORAGE                           | Insufficient storage：The user or server does not have sufficient storage quota to fulfill the request.                                                                                                                                                                                                                                                                             | 存储空间不足：用户或服务器没有足够的存储配额来完成请求。                                                                                                                | RFC 4918 11.5                         | https://datatracker.ietf.org/doc/html/rfc4918#section-11.5                                                       |
| 508  | Loop Detected                                    | LOOP_DETECTED                                  | Loop detected：The server detected an infinite loop in the request.                                                                                                                                                                                                                                                                                                                 | 检测到循环：服务器在请求中检测到无限循环。                                                                                                                       | RFC 5842 7.2                          | https://datatracker.ietf.org/doc/html/rfc5842#section-7.2                                                        |
| 509  | Bandwidth Limit Exceeded                         | BANDWIDTH_LIMIT_EXCEEDED                       | Bandwidth Limit Exceeded (Apache bw/limited extension)：This status code is not specified in any RFCs. Its use is unknown.                                                                                                                                                                                                                                                          | 超出带宽限制（Apache bw/limited 扩展）：此状态码未在任何 RFC 中规定，其使用方式未知。                                                                                      |                                       | Empty                                                                                                            |
| 510  | Not Extended                                     | NOT_EXTENDED                                   | Not extended：Further extensions to the request are necessary for it to be fulfilled.                                                                                                                                                                                                                                                                                               | 未扩展：需要进一步扩展请求才能完成。                                                                                                                          | RFC 2774 7                            | https://datatracker.ietf.org/doc/html/rfc2774#section-7                                                          |
| 511  | Network Authentication Required                  | NETWORK_AUTHENTICATION_REQUIRED                | Network authentication required：The client must authenticate with the network before sending requests.                                                                                                                                                                                                                                                                             | 需要网络认证：客户端必须先通过网络认证，才能发送请求。                                                                                                                 | RFC 6585 6                            | https://datatracker.ietf.org/doc/html/rfc6585#section-6                                                          |
| 520  | Unknown Error (Microsoft / CloudFlare)           | UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE            | Unknown Error (Microsoft / CloudFlare)：This status code is not specified in any RFC and is returned by certain services, for instance Microsoft Azure and CloudFlare servers: "The 520 error is essentially a "catch-all" response for when the origin server returns something unexpected or something that is not tolerated/interpreted (protocol violation or empty response)." | 未知错误（Microsoft / CloudFlare）：此状态码未在任何 RFC 中规定，由某些服务返回，如 Microsoft Azure 和 CloudFlare 服务器：520 错误本质上是对源服务器返回意外响应或不可解释/不允许（协议违规或空响应）的 "兜底" 响应。 |                                       | Empty                                                                                                            |
| 521  | Web Server Is Down (CloudFlare)                  | WEB_SERVER_IS_DOWN_CLOUD_FLARE                 | Web Server Is Down (CloudFlare)：The origin server has refused the connection from CloudFlare.                                                                                                                                                                                                                                                                                      | Web 服务器宕机（CloudFlare）：源服务器拒绝了来自 CloudFlare 的连接。                                                                                             |                                       | Empty                                                                                                            |
| 522  | Connection Timed Out (CloudFlare)                | CONNECTION_TIMED_OUT_CLOUD_FLARE               | Connection Timed Out (CloudFlare)：CloudFlare could not negotiate a TCP handshake with the origin server.                                                                                                                                                                                                                                                                           | 连接超时（CloudFlare）：CloudFlare 无法与源服务器完成 TCP 握手。                                                                                               |                                       | Empty                                                                                                            |
| 523  | Origin Is Unreachable (CloudFlare)               | ORIGIN_IS_UNREACHABLE_CLOUD_FLARE              | Origin Is Unreachable (CloudFlare)：CloudFlare could not reach the origin server; for example, if the DNS records for the origin server are incorrect.                                                                                                                                                                                                                              | 源不可达（CloudFlare）：CloudFlare 无法到达源服务器；例如，源服务器的 DNS 记录不正确。                                                                                    |                                       | Empty                                                                                                            |
| 524  | A Timeout Occurred (CloudFlare)                  | A_TIMEOUT_OCCURRED_CLOUD_FLARE                 | A Timeout Occurred (CloudFlare)：CloudFlare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.                                                                                                                                                                                                                                 | 发生超时（CloudFlare）：CloudFlare 能够与源服务器建立 TCP 连接，但未能及时收到 HTTP 响应。                                                                               |                                       | Empty                                                                                                            |
| 525  | SSL Handshake Failed (CloudFlare)                | SSL_HANDSHAKE_FAILED_CLOUD_FLARE               | SSL Handshake Failed (CloudFlare)：CloudFlare could not negotiate a SSL/TLS handshake with the origin server.                                                                                                                                                                                                                                                                       | SSL 握手失败（CloudFlare）：CloudFlare 无法与源服务器完成 SSL/TLS 握手。                                                                                       |                                       | Empty                                                                                                            |
| 526  | Invalid SSL Certificate (CloudFlare)             | INVALID_SSL_CERTIFICATE_CLOUD_FLARE            | Invalid SSL Certificate (CloudFlare)：CloudFlare could not validate the SSL/TLS certificate that the origin server presented.                                                                                                                                                                                                                                                       | 无效的 SSL 证书（CloudFlare）：CloudFlare 无法验证源服务器提供的 SSL/TLS 证书。                                                                                   |                                       | Empty                                                                                                            |
| 527  | Railgun Error (CloudFlare)                       | RAILGUN_ERROR_CLOUD_FLARE                      | Railgun Error (CloudFlare)：The request timed out or failed after the WAN connection has been established.                                                                                                                                                                                                                                                                          | Railgun 错误（CloudFlare）：在建立 WAN 连接后，请求超时或失败。                                                                                                 |                                       | Empty                                                                                                            |

## 📖 References

https://github.com/nodejs/node/blob/main/lib/_http_server.js

https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
