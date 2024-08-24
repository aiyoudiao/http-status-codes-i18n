# http-status-codes-i18n

由于 http-status-codes 库本身并不支持国际化（i18n）🌍，它只提供了英文的 HTTP 状态码消息相关的信息📜，所以我想基于它整一个支持多国家语言的 http-status-codes，先支持中文🇨🇳，其它的后面有空再整~💻🚀

Since the http-status-codes library itself does not support internationalization (i18n) 🌍 and only provides information related to HTTP status code messages in English 📜, I want to build a http-status-codes that supports multiple languages based on it, starting with Chinese 🇨🇳, and I'll add other languages later when I have time~💻🚀


## http://www.lingoes.net/zh/translator/langcode.htm

| 标题    | 描述                 | 源码        | 包名                       |
| ------- | -------------------- | ----------- | -------------------------- |
| zh      | 中文                 | packages/zh | @http-status-codes-i18n/zh |
| en      | 英文                 | packages/en | @http-status-codes-i18n/en |
| ja      | 日语                 | packages/ja | @http-status-codes-i18n/ja |
| th      | 泰语                 | packages/th | @http-status-codes-i18n/th |
| hi      | 印地语               | packages/hi | @http-status-codes-i18n/hi |
| id      | 印度尼西亚语         | packages/id | @http-status-codes-i18n/id |
| zh-Hant | 繁体中文             | packages/zh-Hant | @http-status-codes-i18n/zh-Hant |
| fr      | 法语                 | packages/fr | @http-status-codes-i18n/fr |
| es      | 西班牙语             | packages/es | @http-status-codes-i18n/es |
| pt      | 葡萄牙语             | packages/pt | @http-status-codes-i18n/pt |
| ko      | 韩语                 | packages/ko | @http-status-codes-i18n/ko |
| vi      | 越南语               | packages/vi | @http-status-codes-i18n/vi |
| ru      | 俄语                 | packages/ru | @http-status-codes-i18n/ru |
| de      | 德语                 | packages/de | @http-status-codes-i18n/de |
| it      | 意大利语             | packages/it | @http-status-codes-i18n/it |
| ar      | 阿拉伯语             | packages/ar | @http-status-codes-i18n/ar |
| pl      | 波兰语               | packages/pl | @http-status-codes-i18n/pl |
| tl      | 塔加路语（菲律宾语） | packages/tl | @http-status-codes-i18n/tl |
| ms      | 马来语               | packages/ms | @http-status-codes-i18n/ms |
| tr      | 土耳其语             | packages/tr | @http-status-codes-i18n/tr |
| hu      | 匈牙利语             | packages/hu | @http-status-codes-i18n/hu |


## https://github.com/nodejs/node/blob/main/lib/_http_server.js

超文本传输协议的查看示例: https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1

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

## RFC Tables




## References

https://github.com/nodejs/node/blob/main/lib/_http_server.js

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
