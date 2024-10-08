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
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * 继续：服务器已经收到请求头，客户端应继续发送请求主体。
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * 切换协议：请求者已要求服务器切换协议，服务器确认它将进行切换。
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * 处理中：服务器已收到请求并正在处理，但尚无可用的响应。
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * 成功：标准的成功 HTTP 请求响应。
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * 已创建：请求已完成并且新资源已创建。
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * 已接受：请求已被接受但尚未处理完毕。此代码不保证请求会成功处理。
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * 非权威信息：服务器成功处理了请求，但返回的是来自另一来源的信息。
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * 无内容：服务器接受了请求，但没有返回任何内容。通常作为 DELETE 请求的响应。
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * 重置内容：类似于 204 无内容响应，但此响应要求请求者重置文档视图。
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * 部分内容：服务器仅提供了客户端通过 Range 头请求的部分内容。
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * 多状态：后续的消息体是一个 XML 消息，可能包含多个响应代码，具体取决于有多少子请求被发出。
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * 已报告：DAV 绑定的成员已经在对此请求的先前回复中被枚举，不再重复包含。
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM 使用：服务器已完成资源的 GET 请求，并且响应表示对当前实例应用了一个或多个实例操作的结果。
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * 多重选择：客户端可以选择多个选项中的一个进行操作。
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * 永久移动：资源已被移动，所有后续请求应参考其新的 URI。
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * 找到：HTTP 1.0 规范将此状态描述为“临时移动”，但流行的浏览器对此状态的响应类似于 303 的行为。资源可以通过参考返回的 URI 来获取。
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * 参见其他：资源可以通过使用 GET 方法来获取其他 URI。当在响应 POST、PUT 或 DELETE 请求时收到此状态码，通常可以认为服务器已成功处理请求并将客户端指向一个信息性端点。
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * 未修改：自 If-Modified-Since 或 If-Match 头中指定的版本以来，资源未被修改。响应主体中将不会返回资源。
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * 使用代理：HTTP 1.1。资源只能通过代理访问，地址在响应中提供。
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * 切换代理：在 HTTP 1.1 中已废弃。曾用于表示后续请求应使用指定的代理发送。
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * 临时重定向：HTTP 1.1。请求应使用响应中提供的 URI 重新发送，但未来的请求仍应调用原始 URI。
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * 永久重定向：请求和所有未来的请求应使用响应中提供的 URI 重新发送。
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * 错误请求：由于请求的语法不正确，无法满足请求。
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * 未授权：请求者未被授权访问该资源。与 403 类似，但用于身份验证失败或未提供身份验证的情况。
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * 需要付款：保留以供将来使用。某些网络服务使用此状态码表示客户端发送的请求次数过多。
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * 禁止：请求格式正确，但服务器拒绝提供请求的资源。与 401 不同，身份验证不会改变服务器的响应。
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * 未找到：找不到请求的资源。通常用于服务器上所有无效的 URI 请求。
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * 方法不允许：资源请求使用了不允许的方法。例如，使用 POST 方法请求资源，但该资源仅支持 GET 方法。
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * 不可接受：资源有效，但无法以请求中 Accept 头字段指定的格式提供。
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * 需要代理身份验证：在满足请求之前，需要对代理进行身份验证。
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * 请求超时：服务器等待客户端的请求超时。允许客户端重新发送请求。
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * 冲突：由于请求参数中的冲突，无法完成请求。
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * 已删除：请求的资源在请求的 URI 不再可用，且不会提供重定向。
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * 需要内容长度：请求未指定资源所需的内容长度。
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * 前提条件失败：服务器不满足客户端指定的一个前提条件。
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * 请求实体过大：请求的内容比服务器能够处理的要大。
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * 请求 URI 过长：请求中提供的 URI 过长，服务器无法处理。通常在 GET 请求的 URI 中编码了过多数据时会使用此状态码，此时应改用 POST 请求。
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * 不支持的媒体类型：客户端提供的数据类型不受服务器支持。
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * 请求的范围无法满足：客户端请求了资源的一部分，但服务器无法提供该部分。
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * 期望失败：服务器无法满足 Expect 请求头字段的要求。
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * 我是茶壶：任何尝试用茶壶煮咖啡的行为都应该导致错误代码 "418 我是茶壶"。生成的实体内容可能会又短又粗。
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * 请求错误定向：请求被定向到无法提供响应的服务器。该状态码可以由未配置为响应请求 URI 中包含的方案和授权组合的服务器发送。
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 无法处理的实体：请求格式正确，但在当前表单中无法处理。通常在指定的参数未通过验证错误时使用。
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * 已锁定：请求的资源已找到，但由于其被锁定而无法访问。
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * 依赖失败：由于前一个请求失败，导致当前请求也失败。
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * 需要升级：客户端应切换到升级后的协议（如 TLS/1.0），然后再发送请求。
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * 需要前提条件：源服务器要求请求是有条件的。
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * 请求过多：用户在给定的时间内发送了过多的请求（"速率限制"）。
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * 请求头字段过大：服务器不愿意处理请求，因为其头字段过大。
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * 登录超时：Microsoft 扩展。表示由于用户登录超时而导致的失败。
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * 无响应：Nginx 内部状态码，用于指示服务器未返回任何信息并关闭连接。
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * 重试：Microsoft 扩展。用于指示客户端应在执行适当操作后重新发送请求。
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * 被 Windows 家长控制阻止：Microsoft 扩展。当 Windows 家长控制阻止访问特定网页时出现。
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * 因法律原因不可用：服务器由于接到法律约束请求而无法操作。
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * 请求头字段过大：Nginx 内部代码，类似于 431，但在更早版本中实现。
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * 证书错误：Nginx 内部代码，用于 SSL 客户端证书错误，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * 无证书：Nginx 内部代码，当客户端未提供证书时使用，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP 到 HTTPS：Nginx 内部代码，用于发送到 HTTPS 端口的纯 HTTP 请求，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * 令牌过期/无效：由 ArcGIS for Server 返回。代码 498 表示令牌已过期或无效。
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * 需要令牌：由 ArcGIS for Server 返回。代码 499 表示需要令牌（如果未提交令牌）。
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * 服务器内部错误：服务器自身的通用错误状态。
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * 未实现：服务器无法响应请求，通常表示服务器可能在未来支持此请求，否则使用 4xx 状态码可能更为适当。
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * 错误网关：服务器作为代理时，从上游服务器接收到的响应无效。
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * 服务不可用：服务器停机，不接受请求。
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * 网关超时：服务器作为代理时，从上游服务器未能及时接收到响应。
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * 不支持的 HTTP 版本：服务器不支持请求中所用的 HTTP 协议版本。
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * 变体也在协商：请求的透明内容协商导致循环引用。
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * 存储空间不足：用户或服务器没有足够的存储配额来完成请求。
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * 检测到循环：服务器在请求中检测到无限循环。
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * 超出带宽限制（Apache bw/limited 扩展）：此状态码未在任何 RFC 中规定，其使用方式未知。
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * 未扩展：需要进一步扩展请求才能完成。
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * 需要网络认证：客户端必须先通过网络认证，才能发送请求。
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * 未知错误（Microsoft / CloudFlare）：此状态码未在任何 RFC 中规定，由某些服务返回，如 Microsoft Azure 和 CloudFlare 服务器：520 错误本质上是对源服务器返回意外响应或不可解释/不允许（协议违规或空响应）的 "兜底" 响应。
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web 服务器宕机（CloudFlare）：源服务器拒绝了来自 CloudFlare 的连接。
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * 连接超时（CloudFlare）：CloudFlare 无法与源服务器完成 TCP 握手。
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * 源不可达（CloudFlare）：CloudFlare 无法到达源服务器；例如，源服务器的 DNS 记录不正确。
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * 发生超时（CloudFlare）：CloudFlare 能够与源服务器建立 TCP 连接，但未能及时收到 HTTP 响应。
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL 握手失败（CloudFlare）：CloudFlare 无法与源服务器完成 SSL/TLS 握手。
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * 无效的 SSL 证书（CloudFlare）：CloudFlare 无法验证源服务器提供的 SSL/TLS 证书。
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun 错误（CloudFlare）：在建立 WAN 连接后，请求超时或失败。
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * 继续：服务器已经收到请求头，客户端应继续发送请求主体。
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * 切换协议：请求者已要求服务器切换协议，服务器确认它将进行切换。
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * 处理中：服务器已收到请求并正在处理，但尚无可用的响应。
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * 成功：标准的成功 HTTP 请求响应。
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * 已创建：请求已完成并且新资源已创建。
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * 已接受：请求已被接受但尚未处理完毕。此代码不保证请求会成功处理。
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * 非权威信息：服务器成功处理了请求，但返回的是来自另一来源的信息。
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * 无内容：服务器接受了请求，但没有返回任何内容。通常作为 DELETE 请求的响应。
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * 重置内容：类似于 204 无内容响应，但此响应要求请求者重置文档视图。
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * 部分内容：服务器仅提供了客户端通过 Range 头请求的部分内容。
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * 多状态：后续的消息体是一个 XML 消息，可能包含多个响应代码，具体取决于有多少子请求被发出。
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * 已报告：DAV 绑定的成员已经在对此请求的先前回复中被枚举，不再重复包含。
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM 使用：服务器已完成资源的 GET 请求，并且响应表示对当前实例应用了一个或多个实例操作的结果。
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * 多重选择：客户端可以选择多个选项中的一个进行操作。
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * 永久移动：资源已被移动，所有后续请求应参考其新的 URI。
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * 找到：HTTP 1.0 规范将此状态描述为“临时移动”，但流行的浏览器对此状态的响应类似于 303 的行为。资源可以通过参考返回的 URI 来获取。
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * 参见其他：资源可以通过使用 GET 方法来获取其他 URI。当在响应 POST、PUT 或 DELETE 请求时收到此状态码，通常可以认为服务器已成功处理请求并将客户端指向一个信息性端点。
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * 未修改：自 If-Modified-Since 或 If-Match 头中指定的版本以来，资源未被修改。响应主体中将不会返回资源。
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * 使用代理：HTTP 1.1。资源只能通过代理访问，地址在响应中提供。
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * 切换代理：在 HTTP 1.1 中已废弃。曾用于表示后续请求应使用指定的代理发送。
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * 临时重定向：HTTP 1.1。请求应使用响应中提供的 URI 重新发送，但未来的请求仍应调用原始 URI。
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * 永久重定向：请求和所有未来的请求应使用响应中提供的 URI 重新发送。
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * 错误请求：由于请求的语法不正确，无法满足请求。
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * 未授权：请求者未被授权访问该资源。与 403 类似，但用于身份验证失败或未提供身份验证的情况。
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * 需要付款：保留以供将来使用。某些网络服务使用此状态码表示客户端发送的请求次数过多。
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * 禁止：请求格式正确，但服务器拒绝提供请求的资源。与 401 不同，身份验证不会改变服务器的响应。
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * 未找到：找不到请求的资源。通常用于服务器上所有无效的 URI 请求。
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * 方法不允许：资源请求使用了不允许的方法。例如，使用 POST 方法请求资源，但该资源仅支持 GET 方法。
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * 不可接受：资源有效，但无法以请求中 Accept 头字段指定的格式提供。
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * 需要代理身份验证：在满足请求之前，需要对代理进行身份验证。
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * 请求超时：服务器等待客户端的请求超时。允许客户端重新发送请求。
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * 冲突：由于请求参数中的冲突，无法完成请求。
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * 已删除：请求的资源在请求的 URI 不再可用，且不会提供重定向。
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * 需要内容长度：请求未指定资源所需的内容长度。
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * 前提条件失败：服务器不满足客户端指定的一个前提条件。
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * 请求实体过大：请求的内容比服务器能够处理的要大。
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * 请求 URI 过长：请求中提供的 URI 过长，服务器无法处理。通常在 GET 请求的 URI 中编码了过多数据时会使用此状态码，此时应改用 POST 请求。
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * 不支持的媒体类型：客户端提供的数据类型不受服务器支持。
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * 请求的范围无法满足：客户端请求了资源的一部分，但服务器无法提供该部分。
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * 期望失败：服务器无法满足 Expect 请求头字段的要求。
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * 我是茶壶：任何尝试用茶壶煮咖啡的行为都应该导致错误代码 "418 我是茶壶"。生成的实体内容可能会又短又粗。
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * 请求错误定向：请求被定向到无法提供响应的服务器。该状态码可以由未配置为响应请求 URI 中包含的方案和授权组合的服务器发送。
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 无法处理的实体：请求格式正确，但在当前表单中无法处理。通常在指定的参数未通过验证错误时使用。
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * 已锁定：请求的资源已找到，但由于其被锁定而无法访问。
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * 依赖失败：由于前一个请求失败，导致当前请求也失败。
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * 需要升级：客户端应切换到升级后的协议（如 TLS/1.0），然后再发送请求。
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * 需要前提条件：源服务器要求请求是有条件的。
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * 请求过多：用户在给定的时间内发送了过多的请求（"速率限制"）。
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * 请求头字段过大：服务器不愿意处理请求，因为其头字段过大。
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * 登录超时：Microsoft 扩展。表示由于用户登录超时而导致的失败。
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * 无响应：Nginx 内部状态码，用于指示服务器未返回任何信息并关闭连接。
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * 重试：Microsoft 扩展。用于指示客户端应在执行适当操作后重新发送请求。
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * 被 Windows 家长控制阻止：Microsoft 扩展。当 Windows 家长控制阻止访问特定网页时出现。
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * 因法律原因不可用：服务器由于接到法律约束请求而无法操作。
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * 请求头字段过大：Nginx 内部代码，类似于 431，但在更早版本中实现。
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * 证书错误：Nginx 内部代码，用于 SSL 客户端证书错误，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * 无证书：Nginx 内部代码，当客户端未提供证书时使用，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP 到 HTTPS：Nginx 内部代码，用于发送到 HTTPS 端口的纯 HTTP 请求，以将其与日志中的 4XX 区分开来，并进行错误页面重定向。
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * 令牌过期/无效：由 ArcGIS for Server 返回。代码 498 表示令牌已过期或无效。
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * 需要令牌：由 ArcGIS for Server 返回。代码 499 表示需要令牌（如果未提交令牌）。
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * 服务器内部错误：服务器自身的通用错误状态。
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * 未实现：服务器无法响应请求，通常表示服务器可能在未来支持此请求，否则使用 4xx 状态码可能更为适当。
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * 错误网关：服务器作为代理时，从上游服务器接收到的响应无效。
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * 服务不可用：服务器停机，不接受请求。
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * 网关超时：服务器作为代理时，从上游服务器未能及时接收到响应。
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * 不支持的 HTTP 版本：服务器不支持请求中所用的 HTTP 协议版本。
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * 变体也在协商：请求的透明内容协商导致循环引用。
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * 存储空间不足：用户或服务器没有足够的存储配额来完成请求。
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * 检测到循环：服务器在请求中检测到无限循环。
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * 超出带宽限制（Apache bw/limited 扩展）：此状态码未在任何 RFC 中规定，其使用方式未知。
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * 未扩展：需要进一步扩展请求才能完成。
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * 需要网络认证：客户端必须先通过网络认证，才能发送请求。
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * 未知错误（Microsoft / CloudFlare）：此状态码未在任何 RFC 中规定，由某些服务返回，如 Microsoft Azure 和 CloudFlare 服务器：520 错误本质上是对源服务器返回意外响应或不可解释/不允许（协议违规或空响应）的 "兜底" 响应。
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web 服务器宕机（CloudFlare）：源服务器拒绝了来自 CloudFlare 的连接。
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * 连接超时（CloudFlare）：CloudFlare 无法与源服务器完成 TCP 握手。
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * 源不可达（CloudFlare）：CloudFlare 无法到达源服务器；例如，源服务器的 DNS 记录不正确。
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * 发生超时（CloudFlare）：CloudFlare 能够与源服务器建立 TCP 连接，但未能及时收到 HTTP 响应。
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL 握手失败（CloudFlare）：CloudFlare 无法与源服务器完成 SSL/TLS 握手。
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * 无效的 SSL 证书（CloudFlare）：CloudFlare 无法验证源服务器提供的 SSL/TLS 证书。
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Railgun 错误（CloudFlare）：在建立 WAN 连接后，请求超时或失败。
   */
  h527 = 'Railgun Error (CloudFlare)'
}
