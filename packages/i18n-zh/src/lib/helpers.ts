/**
* © 2024 aiyoudiao
*
* 这个文件由 aiyoudiao 创建，包含了大量的辛勤工作和智慧。
*
* 您可以自由使用、修改和分发这个文件，但请保留此版权声明。
*
* 如果您觉得这个文件对您有帮助，请给我一个星星或关注我 ツ。
*
* 联系方式：
* - 邮箱: newdiao@163.com
* - GitHub: https://github.com/aiyoudiao
*
* 祝你编程愉快！记住，代码是诗歌，前端是艺术。 ツ
*/

/** Key-value mapping of HTTP status codes and HTTP status texts. */
export const statusCodeToStatusText: Record<number, string> = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  306: "Switch proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  440: "Login Time-out",
  444: "No Response",
  449: "Retry With",
  450: "Blocked by Windows Parental Controls",
  451: "Unavailable For Legal Reasons",
  494: "Request Header Too Large",
  495: "Cert Error",
  496: "No Cert",
  497: "HTTP to HTTPS",
  498: "Token expired/invalid",
  499: "Token required",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required",
  520: "Unknown Error (Microsoft / CloudFlare)",
  521: "Web Server Is Down (CloudFlare)",
  522: "Connection Timed Out (CloudFlare)",
  523: "Origin Is Unreachable (CloudFlare)",
  524: "A Timeout Occurred (CloudFlare)",
  525: "SSL Handshake Failed (CloudFlare)",
  526: "Invalid SSL Certificate (CloudFlare)",
  527: "Railgun Error (CloudFlare)"
};
/** Key-value mapping of HTTP status codes and HTTP status descriptions. */
export const statusCodeToStatusDescription: Record<number, string> = {
  100: "继续：服务器已经收到请求头，客户端应继续发送请求主体。",
  101: "切换协议：请求者已要求服务器切换协议，服务器确认它将进行切换。",
  102: "处理中：服务器已收到请求并正在处理，但尚无可用的响应。",
  200: "成功：标准的成功 HTTP 请求响应。",
  201: "已创建：请求已完成并且新资源已创建。",
  202: "已接受：请求已被接受但尚未处理完毕。此代码不保证请求会成功处理。",
  203: "非权威信息：服务器成功处理了请求，但返回的是来自另一来源的信息。",
  204: "无内容：服务器接受了请求，但没有返回任何内容。通常作为 DELETE 请求的响应。",
  205: "重置内容：类似于 204 无内容响应，但此响应要求请求者重置文档视图。",
  206: "部分内容：服务器仅提供了客户端通过 Range 头请求的部分内容。",
  207: "多状态：后续的消息体是一个 XML 消息，可能包含多个响应代码，具体取决于有多少子请求被发出。",
  208: "已报告：DAV 绑定的成员已经在对此请求的先前回复中被枚举，不再重复包含。",
  226: "IM 使用：服务器已完成资源的 GET 请求，并且响应表示对当前实例应用了一个或多个实例操作的结果。",
  300: "多重选择：客户端可以选择多个选项中的一个进行操作。",
  301: "永久移动：资源已被移动，所有后续请求应参考其新的 URI。",
  302: "找到：HTTP 1.0 规范将此状态描述为“临时移动”，但流行的浏览器对此状态的响应类似于 303 的行为。资源可以通过参考返回的 URI 来获取。",
  303: "参见其他：资源可以通过使用 GET 方法来获取其他 URI。当在响应 POST、PUT 或 DELETE 请求时收到此状态码，通常可以认为服务器已成功处理请求并将客户端指向一个信息性端点。",
  304: "未修改：自 If-Modified-Since 或 If-Match 头中指定的版本以来，资源未被修改。响应主体中将不会返回资源。",
  305: "使用代理：HTTP 1.1。资源只能通过代理访问，地址在响应中提供。",
  306: "切换代理：在 HTTP 1.1 中已废弃。曾用于表示后续请求应使用指定的代理发送。",
  307: "临时重定向：HTTP 1.1。请求应使用响应中提供的 URI 重新发送，但未来的请求仍应调用原始 URI。",
  308: "永久重定向：请求和所有未来的请求应使用响应中提供的 URI 重新发送。",
  400: "错误请求：由于请求的语法不正确，无法满足请求。",
  401: "未授权：请求者未被授权访问该资源。与 403 类似，但用于身份验证失败或未提供身份验证的情况。",
  402: "需要付款：保留以供将来使用。某些网络服务使用此状态码表示客户端发送的请求次数过多。",
  403: "禁止：请求格式正确，但服务器拒绝提供请求的资源。与 401 不同，身份验证不会改变服务器的响应。",
  404: "未找到：找不到请求的资源。通常用于服务器上所有无效的 URI 请求。",
  405: "方法不允许：资源请求使用了不允许的方法。例如，使用 POST 方法请求资源，但该资源仅支持 GET 方法。",
  406: "不可接受：资源有效，但无法以请求中 Accept 头字段指定的格式提供。",
  407: "需要代理身份验证：在满足请求之前，需要对代理进行身份验证。",
  408: "请求超时：服务器等待客户端的请求超时。允许客户端重新发送请求。",
  409: "冲突：由于请求参数中的冲突，无法完成请求。",
  410: "已删除：请求的资源在请求的 URI 不再可用，且不会提供重定向。",
  411: "需要内容长度：请求未指定资源所需的内容长度。",
  412: "前提条件失败：服务器不满足客户端指定的一个前提条件。",
  413: "请求实体过大：请求的内容比服务器能够处理的要大。",
  414: "请求 URI 过长：请求中提供的 URI 过长，服务器无法处理。通常在 GET 请求的 URI 中编码了过多数据时会使用此状态码，此时应改用 POST 请求。",
  415: "不支持的媒体类型：客户端提供的数据类型不受服务器支持。",
  416: "请求的范围无法满足：客户端请求了资源的一部分，但服务器无法提供该部分。",
  417: "期望失败：服务器无法满足 Expect 请求头字段的要求。",
  418: "我是茶壶：任何尝试用茶壶煮咖啡的行为都应该导致错误代码 \"418 我是茶壶\"。生成的实体内容可能会又短又粗。",
  421: "请求错误定向：请求被定向到无法提供响应的服务器。该状态码可以由未配置为响应请求 URI 中包含的方案和授权组合的服务器发送。",
  422: "无法处理的实体：请求格式正确，但在当前表单中无法处理。通常在指定的参数未通过验证错误时使用。",
  423: "已锁定：请求的资源已找到，但由于其被锁定而无法访问。",
  424: "依赖失败：由于前一个请求失败，导致当前请求也失败。",
  426: "需要升级：客户端应切换到升级后的协议（如 TLS/1.0），然后再发送请求。",
  428: "需要前提条件：源服务器要求请求是有条件的。",
  429: "请求过多：用户在给定的时间内发送了过多的请求（\"速率限制\"）。",
  431: "请求头字段过大：服务器不愿意处理请求，因为其头字段过大。",
  440: "登录超时：Microsoft 扩展。表示由于用户登录超时而导致的失败。",
  444: "无响应：Nginx 内部状态码，用于指示服务器未返回任何信息并关闭连接。",
  449: "重试：Microsoft 扩展。用于指示客户端应在执行适当操作后重新发送请求。",
  450: "被 Windows 家长控制阻止：Microsoft 扩展。当 Windows 家长控制阻止访问特定网页时出现。",
  451: "因法律原因不可用：服务器由于接到法律约束请求而无法操作。",
  494: "请求头字段过大：Nginx 内部代码，类似于 431，但在更早版本中实现。",
  495: "证书错误：Nginx 内部代码，用于 SSL 客户端证书错误，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。",
  496: "无证书：Nginx 内部代码，当客户端未提供证书时使用，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。",
  497: "HTTP 到 HTTPS：Nginx 内部代码，用于发送到 HTTPS 端口的纯 HTTP 请求，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。",
  498: "令牌过期/无效：由 ArcGIS for Server 返回。代码 498 表示令牌已过期或无效。",
  499: "需要令牌：由 ArcGIS for Server 返回。代码 499 表示需要令牌（如果未提交令牌）。",
  500: "服务器内部错误：服务器自身的通用错误状态。",
  501: "未实现：服务器无法响应请求，通常表示服务器可能在未来支持此请求，否则使用 4xx 状态码可能更为适当。",
  502: "错误网关：服务器作为代理时，从上游服务器接收到的响应无效。",
  503: "服务不可用：服务器停机，不接受请求。",
  504: "网关超时：服务器作为代理时，从上游服务器未能及时接收到响应。",
  505: "不支持的 HTTP 版本：服务器不支持请求中所用的 HTTP 协议版本。",
  506: "变体也在协商：请求的透明内容协商导致循环引用。",
  507: "存储空间不足：用户或服务器没有足够的存储配额来完成请求。",
  508: "检测到循环：服务器在请求中检测到无限循环。",
  509: "超出带宽限制（Apache bw/limited 扩展）：此状态码未在任何 RFC 中规定，其使用方式未知。",
  510: "未扩展：需要进一步扩展请求才能完成。",
  511: "需要网络认证：客户端必须先通过网络认证，才能发送请求。",
  520: "未知错误（Microsoft / CloudFlare）：此状态码未在任何 RFC 中规定，由某些服务返回，如 Microsoft Azure 和 CloudFlare 服务器：520 错误本质上是对源服务器返回意外响应或不可解释/不允许（协议违规或空响应）的 \"兜底\" 响应。",
  521: "Web 服务器宕机（CloudFlare）：源服务器拒绝了来自 CloudFlare 的连接。",
  522: "连接超时（CloudFlare）：CloudFlare 无法与源服务器完成 TCP 握手。",
  523: "源不可达（CloudFlare）：CloudFlare 无法到达源服务器；例如，源服务器的 DNS 记录不正确。",
  524: "发生超时（CloudFlare）：CloudFlare 能够与源服务器建立 TCP 连接，但未能及时收到 HTTP 响应。",
  525: "SSL 握手失败（CloudFlare）：CloudFlare 无法与源服务器完成 SSL/TLS 握手。",
  526: "无效的 SSL 证书（CloudFlare）：CloudFlare 无法验证源服务器提供的 SSL/TLS 证书。",
  527: "Railgun 错误（CloudFlare）：在建立 WAN 连接后，请求超时或失败。"
};
/** Key-value mapping of HTTP status texts and HTTP status codes. */
export const statusTextToStatusCode: Record<string, number> = {
  "Continue": 100,
  "Switching Protocols": 101,
  "Processing": 102,
  "OK": 200,
  "Created": 201,
  "Accepted": 202,
  "Non-Authoritative Information": 203,
  "No Content": 204,
  "Reset Content": 205,
  "Partial Content": 206,
  "Multi-Status": 207,
  "Already Reported": 208,
  "IM Used": 226,
  "Multiple Choices": 300,
  "Moved Permanently": 301,
  "Found": 302,
  "See Other": 303,
  "Not Modified": 304,
  "Use Proxy": 305,
  "Switch proxy": 306,
  "Temporary Redirect": 307,
  "Permanent Redirect": 308,
  "Bad Request": 400,
  "Unauthorized": 401,
  "Payment Required": 402,
  "Forbidden": 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  "Not Acceptable": 406,
  "Proxy Authentication Required": 407,
  "Request Timeout": 408,
  "Conflict": 409,
  "Gone": 410,
  "Length Required": 411,
  "Precondition Failed": 412,
  "Payload Too Large": 413,
  "URI Too Long": 414,
  "Unsupported Media Type": 415,
  "Range Not Satisfiable": 416,
  "Expectation Failed": 417,
  "I'm a Teapot": 418,
  "Misdirected Request": 421,
  "Unprocessable Entity": 422,
  "Locked": 423,
  "Failed Dependency": 424,
  "Upgrade Required": 426,
  "Precondition Required": 428,
  "Too Many Requests": 429,
  "Request Header Fields Too Large": 431,
  "Login Time-out": 440,
  "No Response": 444,
  "Retry With": 449,
  "Blocked by Windows Parental Controls": 450,
  "Unavailable For Legal Reasons": 451,
  "Request Header Too Large": 494,
  "Cert Error": 495,
  "No Cert": 496,
  "HTTP to HTTPS": 497,
  "Token expired/invalid": 498,
  "Token required": 499,
  "Internal Server Error": 500,
  "Not Implemented": 501,
  "Bad Gateway": 502,
  "Service Unavailable": 503,
  "Gateway Timeout": 504,
  "HTTP Version Not Supported": 505,
  "Variant Also Negotiates": 506,
  "Insufficient Storage": 507,
  "Loop Detected": 508,
  "Bandwidth Limit Exceeded": 509,
  "Not Extended": 510,
  "Network Authentication Required": 511,
  "Unknown Error (Microsoft / CloudFlare)": 520,
  "Web Server Is Down (CloudFlare)": 521,
  "Connection Timed Out (CloudFlare)": 522,
  "Origin Is Unreachable (CloudFlare)": 523,
  "A Timeout Occurred (CloudFlare)": 524,
  "SSL Handshake Failed (CloudFlare)": 525,
  "Invalid SSL Certificate (CloudFlare)": 526,
  "Railgun Error (CloudFlare)": 527
};
/** Key-value mapping of HTTP status texts and HTTP status descriptions. */
export const statusTextToStatusDescription: Record<string, string> = {
  "Continue": "继续：服务器已经收到请求头，客户端应继续发送请求主体。",
  "Switching Protocols": "切换协议：请求者已要求服务器切换协议，服务器确认它将进行切换。",
  "Processing": "处理中：服务器已收到请求并正在处理，但尚无可用的响应。",
  "OK": "成功：标准的成功 HTTP 请求响应。",
  "Created": "已创建：请求已完成并且新资源已创建。",
  "Accepted": "已接受：请求已被接受但尚未处理完毕。此代码不保证请求会成功处理。",
  "Non-Authoritative Information": "非权威信息：服务器成功处理了请求，但返回的是来自另一来源的信息。",
  "No Content": "无内容：服务器接受了请求，但没有返回任何内容。通常作为 DELETE 请求的响应。",
  "Reset Content": "重置内容：类似于 204 无内容响应，但此响应要求请求者重置文档视图。",
  "Partial Content": "部分内容：服务器仅提供了客户端通过 Range 头请求的部分内容。",
  "Multi-Status": "多状态：后续的消息体是一个 XML 消息，可能包含多个响应代码，具体取决于有多少子请求被发出。",
  "Already Reported": "已报告：DAV 绑定的成员已经在对此请求的先前回复中被枚举，不再重复包含。",
  "IM Used": "IM 使用：服务器已完成资源的 GET 请求，并且响应表示对当前实例应用了一个或多个实例操作的结果。",
  "Multiple Choices": "多重选择：客户端可以选择多个选项中的一个进行操作。",
  "Moved Permanently": "永久移动：资源已被移动，所有后续请求应参考其新的 URI。",
  "Found": "找到：HTTP 1.0 规范将此状态描述为“临时移动”，但流行的浏览器对此状态的响应类似于 303 的行为。资源可以通过参考返回的 URI 来获取。",
  "See Other": "参见其他：资源可以通过使用 GET 方法来获取其他 URI。当在响应 POST、PUT 或 DELETE 请求时收到此状态码，通常可以认为服务器已成功处理请求并将客户端指向一个信息性端点。",
  "Not Modified": "未修改：自 If-Modified-Since 或 If-Match 头中指定的版本以来，资源未被修改。响应主体中将不会返回资源。",
  "Use Proxy": "使用代理：HTTP 1.1。资源只能通过代理访问，地址在响应中提供。",
  "Switch proxy": "切换代理：在 HTTP 1.1 中已废弃。曾用于表示后续请求应使用指定的代理发送。",
  "Temporary Redirect": "临时重定向：HTTP 1.1。请求应使用响应中提供的 URI 重新发送，但未来的请求仍应调用原始 URI。",
  "Permanent Redirect": "永久重定向：请求和所有未来的请求应使用响应中提供的 URI 重新发送。",
  "Bad Request": "错误请求：由于请求的语法不正确，无法满足请求。",
  "Unauthorized": "未授权：请求者未被授权访问该资源。与 403 类似，但用于身份验证失败或未提供身份验证的情况。",
  "Payment Required": "需要付款：保留以供将来使用。某些网络服务使用此状态码表示客户端发送的请求次数过多。",
  "Forbidden": "禁止：请求格式正确，但服务器拒绝提供请求的资源。与 401 不同，身份验证不会改变服务器的响应。",
  "Not Found": "未找到：找不到请求的资源。通常用于服务器上所有无效的 URI 请求。",
  "Method Not Allowed": "方法不允许：资源请求使用了不允许的方法。例如，使用 POST 方法请求资源，但该资源仅支持 GET 方法。",
  "Not Acceptable": "不可接受：资源有效，但无法以请求中 Accept 头字段指定的格式提供。",
  "Proxy Authentication Required": "需要代理身份验证：在满足请求之前，需要对代理进行身份验证。",
  "Request Timeout": "请求超时：服务器等待客户端的请求超时。允许客户端重新发送请求。",
  "Conflict": "冲突：由于请求参数中的冲突，无法完成请求。",
  "Gone": "已删除：请求的资源在请求的 URI 不再可用，且不会提供重定向。",
  "Length Required": "需要内容长度：请求未指定资源所需的内容长度。",
  "Precondition Failed": "前提条件失败：服务器不满足客户端指定的一个前提条件。",
  "Payload Too Large": "请求实体过大：请求的内容比服务器能够处理的要大。",
  "URI Too Long": "请求 URI 过长：请求中提供的 URI 过长，服务器无法处理。通常在 GET 请求的 URI 中编码了过多数据时会使用此状态码，此时应改用 POST 请求。",
  "Unsupported Media Type": "不支持的媒体类型：客户端提供的数据类型不受服务器支持。",
  "Range Not Satisfiable": "请求的范围无法满足：客户端请求了资源的一部分，但服务器无法提供该部分。",
  "Expectation Failed": "期望失败：服务器无法满足 Expect 请求头字段的要求。",
  "I'm a Teapot": "我是茶壶：任何尝试用茶壶煮咖啡的行为都应该导致错误代码 \"418 我是茶壶\"。生成的实体内容可能会又短又粗。",
  "Misdirected Request": "请求错误定向：请求被定向到无法提供响应的服务器。该状态码可以由未配置为响应请求 URI 中包含的方案和授权组合的服务器发送。",
  "Unprocessable Entity": "无法处理的实体：请求格式正确，但在当前表单中无法处理。通常在指定的参数未通过验证错误时使用。",
  "Locked": "已锁定：请求的资源已找到，但由于其被锁定而无法访问。",
  "Failed Dependency": "依赖失败：由于前一个请求失败，导致当前请求也失败。",
  "Upgrade Required": "需要升级：客户端应切换到升级后的协议（如 TLS/1.0），然后再发送请求。",
  "Precondition Required": "需要前提条件：源服务器要求请求是有条件的。",
  "Too Many Requests": "请求过多：用户在给定的时间内发送了过多的请求（\"速率限制\"）。",
  "Request Header Fields Too Large": "请求头字段过大：服务器不愿意处理请求，因为其头字段过大。",
  "Login Time-out": "登录超时：Microsoft 扩展。表示由于用户登录超时而导致的失败。",
  "No Response": "无响应：Nginx 内部状态码，用于指示服务器未返回任何信息并关闭连接。",
  "Retry With": "重试：Microsoft 扩展。用于指示客户端应在执行适当操作后重新发送请求。",
  "Blocked by Windows Parental Controls": "被 Windows 家长控制阻止：Microsoft 扩展。当 Windows 家长控制阻止访问特定网页时出现。",
  "Unavailable For Legal Reasons": "因法律原因不可用：服务器由于接到法律约束请求而无法操作。",
  "Request Header Too Large": "请求头字段过大：Nginx 内部代码，类似于 431，但在更早版本中实现。",
  "Cert Error": "证书错误：Nginx 内部代码，用于 SSL 客户端证书错误，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。",
  "No Cert": "无证书：Nginx 内部代码，当客户端未提供证书时使用，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。",
  "HTTP to HTTPS": "HTTP 到 HTTPS：Nginx 内部代码，用于发送到 HTTPS 端口的纯 HTTP 请求，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。",
  "Token expired/invalid": "令牌过期/无效：由 ArcGIS for Server 返回。代码 498 表示令牌已过期或无效。",
  "Token required": "需要令牌：由 ArcGIS for Server 返回。代码 499 表示需要令牌（如果未提交令牌）。",
  "Internal Server Error": "服务器内部错误：服务器自身的通用错误状态。",
  "Not Implemented": "未实现：服务器无法响应请求，通常表示服务器可能在未来支持此请求，否则使用 4xx 状态码可能更为适当。",
  "Bad Gateway": "错误网关：服务器作为代理时，从上游服务器接收到的响应无效。",
  "Service Unavailable": "服务不可用：服务器停机，不接受请求。",
  "Gateway Timeout": "网关超时：服务器作为代理时，从上游服务器未能及时接收到响应。",
  "HTTP Version Not Supported": "不支持的 HTTP 版本：服务器不支持请求中所用的 HTTP 协议版本。",
  "Variant Also Negotiates": "变体也在协商：请求的透明内容协商导致循环引用。",
  "Insufficient Storage": "存储空间不足：用户或服务器没有足够的存储配额来完成请求。",
  "Loop Detected": "检测到循环：服务器在请求中检测到无限循环。",
  "Bandwidth Limit Exceeded": "超出带宽限制（Apache bw/limited 扩展）：此状态码未在任何 RFC 中规定，其使用方式未知。",
  "Not Extended": "未扩展：需要进一步扩展请求才能完成。",
  "Network Authentication Required": "需要网络认证：客户端必须先通过网络认证，才能发送请求。",
  "Unknown Error (Microsoft / CloudFlare)": "未知错误（Microsoft / CloudFlare）：此状态码未在任何 RFC 中规定，由某些服务返回，如 Microsoft Azure 和 CloudFlare 服务器：520 错误本质上是对源服务器返回意外响应或不可解释/不允许（协议违规或空响应）的 \"兜底\" 响应。",
  "Web Server Is Down (CloudFlare)": "Web 服务器宕机（CloudFlare）：源服务器拒绝了来自 CloudFlare 的连接。",
  "Connection Timed Out (CloudFlare)": "连接超时（CloudFlare）：CloudFlare 无法与源服务器完成 TCP 握手。",
  "Origin Is Unreachable (CloudFlare)": "源不可达（CloudFlare）：CloudFlare 无法到达源服务器；例如，源服务器的 DNS 记录不正确。",
  "A Timeout Occurred (CloudFlare)": "发生超时（CloudFlare）：CloudFlare 能够与源服务器建立 TCP 连接，但未能及时收到 HTTP 响应。",
  "SSL Handshake Failed (CloudFlare)": "SSL 握手失败（CloudFlare）：CloudFlare 无法与源服务器完成 SSL/TLS 握手。",
  "Invalid SSL Certificate (CloudFlare)": "无效的 SSL 证书（CloudFlare）：CloudFlare 无法验证源服务器提供的 SSL/TLS 证书。",
  "Railgun Error (CloudFlare)": "Railgun 错误（CloudFlare）：在建立 WAN 连接后，请求超时或失败。"
};

export type HTTPStatusCode = keyof typeof statusCodeToStatusText;
export type HTTPStatusText = keyof typeof statusTextToStatusCode;
export type StatusInfo = { code: number, message: string, success: boolean };

/**
 * Returns whether the provided status code or status text is valid or not.
 * @example isCodeOrTextValid(200) -> true
 * isCodeOrTextValid('OK') -> true
 *
 * @param codeOrText: HTTPStatusCode | HTTPStatusText
 * @returns yesOrNo: boolean
 */
export function isCodeOrTextValid(codeOrText: HTTPStatusCode | HTTPStatusText): boolean {
  return codeOrText in statusCodeToStatusText || codeOrText in statusTextToStatusCode;
}

/**
 * Returns an object containing information about the provided status code or status text.
 * @example getStatusInfo(200) -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
 * isCodeOrTextValid('OK') -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
 *
 * @param codeOrText: HTTPStatusCode | HTTPStatusText
 * @returns StatusInfo: { code: number, message: string, success: boolean}
 */
export function getStatusInfo(codeOrText: HTTPStatusCode | HTTPStatusText): StatusInfo {

  if (!isCodeOrTextValid(codeOrText)) {
    throw new Error(`${codeOrText} is not a known HTTP status code or status text.`);
  }

  const [code, message] = [
    statusTextToStatusCode[codeOrText] || codeOrText as number,
    statusCodeToStatusDescription[codeOrText as number] || statusTextToStatusDescription[codeOrText]
  ]

  return {
    code,
    message,
    success: code < 400
  }
}

/**
 * Returns whether the provided status code or status text is a successful status or not.
 * @example isStatusSuccessful(200) -> true
 * isStatusSuccessful('OK') -> true
 * isStatusSuccessful(400) -> false
 * isStatusSuccessful('Bad request') -> false
 *
 * @param codeOrText: HTTPStatusCode | HTTPStatusText
 * @returns successful: boolean
 */
export function isStatusSuccessful(codeOrText: HTTPStatusCode | HTTPStatusText): boolean {

  try {
    return getStatusInfo(codeOrText).success;
  } catch (e) {
    return false;
  }
}

/**
 * Returns a string containing the provided status code and message.
 * @example isStatusSuccessful(200) -> 200 OK：The standard response for successful HTTP requests.
 * isStatusSuccessful('OK') -> 200 OK：The standard response for successful HTTP requests.
 *
 * @param codeOrText: HTTPStatusCode | HTTPStatusText
 * @returns statusMessage: string
 */
export function getStatusMessage(codeOrText: HTTPStatusCode | HTTPStatusText): string {
  const statusInfo = getStatusInfo(codeOrText)
  return `${statusInfo.code} ${statusInfo.message}`;

}

/**
 * Returns the status code for the given http status text.
 * If the given http status text does not exist, undefined is returned.
 * @example getStatusCode('OK') -> 200
 * @param text: HTTPStatusText
 * @returns statusCode: HTTPStatusCode
 */
export function getStatusCode(text: HTTPStatusText): HTTPStatusCode {
  const code = statusTextToStatusCode[`${text}`]
  if (!code) {
    throw new Error(`${text} is not a known HTTP status text.`);
  }
  return code;
}

/**
 * Returns the status text for the given http status code.
 * If the given http status code does not exist, undefined is returned.
 * @example getStatusCode('200') -> OK
 * @param code: HTTPStatusCode
 * @returns statusText: HTTPStatusText
 */
export function getStatusText(code: HTTPStatusCode): HTTPStatusText {
  const text = statusCodeToStatusText[`${code}`]
  if (!text) {
    throw new Error(`${code} is not a known HTTP status code.`);
  }
  return text;
}
