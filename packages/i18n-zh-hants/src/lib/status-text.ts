/**
* © 2024 aiyoudiao
*
* 這個文件由 aiyoudiao 創建，包含了大量的辛勤工作和智慧。
*
* 您可以自由使用、修改和分發這個文件，但請保留此版權聲明。
*
* 如果您覺得這個文件對您有幫助，請給我一個星星或關注我 ツ。
*
* 聯繫方式：
* - 郵箱:,newdiao@163.com,
* - GitHub:,https://github.com/aiyoudiao,
*
* 祝你編程愉快！記住，代碼是詩歌，前端是藝術。 ツ
*/
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * 繼續：服務器已經收到請求頭，客戶端應繼續發送請求主體。 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * 切換協議：請求者已要求服務器切換協議，服務器確認其將進行切換。 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * 處理中：伺服器已收到請求並正在處理，但尚無可用的回應。 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * 成功：標準的成功 HTTP 請求響應。 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * 已創建：請求已完成並且新資源已創建 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * 已接受：請求已被接受但尚未處理完畢。此代碼不保證請求會成功處理。 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * 非權威資訊：HTTP 1.1。伺服器成功處理了請求，但返回的是來自另一來源的資訊。 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * 無內容：服務器接受了請求，但沒有返回任何內容。通常作為 DELETE 請求的響應。 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * 重置內容：類似於 204 無內容回應，但此回應要求請求者重置文件視圖。 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * 部分內容：伺服器僅提供了客戶端透過 Range 頭請求的部分內容。 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * 多狀態：後續的消息體是一個 XML 消息，可能包含多個響應代碼，具體取決於有多少子請求被發出。 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * 已報告：DAV 綁定的成員已經在對此請求的先前回覆中被枚舉，不再重複包含。 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM 使用：伺服器已完成資源的 GET 請求，並且響應表示對當前實例應用了一個或多個實例操作的結果。 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * 多重選擇：客戶端可以選擇多個選項中的一個進行操作 。 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * 永久移動：資源已被移動，所有後續請求應參考其新的 URI 。 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * 找到：HTTP 1.0 規範將此狀態描述為「臨時移動」，但流行的瀏覽器對此狀態的響應類似於 303 的行為。資源可以透過參考返回的 URI 來獲取。 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * 參見其他：資源可以透過使用 GET 方法來獲取其他 URI 。當在響應 POST、PUT 或 DELETE 請求時收到此狀態碼，通常可以認為服務器已成功處理請求並將客戶端指向一個資訊性端點。 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * 未修改：自 If-Modified-Since 或 If-Match 頭中指定的版本以來，資源未被修改。響應主體中將不會返回資源。 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * 使用代理：HTTP 1.1。資源僅能透過代理存取，地址在響應中提供。 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * 切換代理：在 HTTP 1.1 中已廢棄。曾用於表示後續請求應使用指定的代理發送。 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * 臨時重定向：HTTP 1.1。請求應使用響應中提供的 URI 重新發送，但未來的請求仍應調用原始 URI 。 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * 恢復未完成（Google）：此代碼用於可恢復 HTTP 請求提案中，以恢復中斷的 PUT 或 POST 請求
   * 永久重新定向：請求及所有未來的請求應使用響應中提供的 URI 重新發送。 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * 錯誤請求：由於請求的語法不正確，無法滿足請求。 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * 未授權：請求者未被授權存取該資源。與 403 類似，但用於身份驗證失敗或未提供身份驗證的情況。 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * 付款需要：保留供未來使用。某些網路服務使用此作為表示客戶端已發送過多數量請求的指示。 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * 禁止：請求格式正確，但伺服器拒絕提供請求的資源。與 401 不同，身份驗證不會 改變伺服器的響應。 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * 未找到：找不到請求的資源。通常用於伺服器上所有無效的 URI 請求。 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * 方法不允許：資源請求使用了不允許的方法。例如，使用 POST 方法請求資源，但該資源僅支援 GET 方法。 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * 不可接受：資源有效，但無法以請求中 Accept 頭字段指定的格式提供。 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * 需要代理身份驗證：在滿足請求之前，需要對代理進行身份驗證。 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * 請求超時：伺服器等待客戶端的請求超時。允許客戶端重新發送請求。 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * 衝突：由於請求參數中的衝突，無法 完成請求。 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * 已刪除：請求的資源在請求的 URI 不再可用，且不會提供重定向。 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * 需要內容長度：請求未指定資源所需的內容長度 。 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * 前提條件失敗：服務器不滿足客戶端指定的一個前提條件 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * 請求實體過大：請求的內容比伺服器能夠處理的要大。 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * 請求 URI 過長：請求中提供的 URI 過長，伺服器無法 處理。通常在 GET 請求的 URI 中編碼了過多資料時會使用此狀態碼，此時應改用 POST 請求。 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * 不支援的媒體類型：客戶端提供的資料型別不受伺服器支援。 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * 請求的範圍無法滿足：客戶端請求了資源的一部分，但服務器無法提供該部分。 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * 期望失敗：服務器無法滿足 Expect 請求頭字段的要求。 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * 我是茶壺：任何嘗試用茶壺煮咖啡的行為都應該導致錯誤代碼「418 我是茶壺」。生成的實體內容可能會又短又粗。 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * 請求錯誤定向：請求被定向到無法提供響應的伺服器。該狀態碼可以由未配置為響應請求 URI 中包含的方案和授權組合的伺服器發送。 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 無法處理的實體：請求格式正確，但在當前表單中無法處理。通常在指定的參數未通過驗證錯誤時使用。 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * 已鎖定：請求的資源已找到，但由於其被鎖定而無法 訪問。 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * 依賴失敗：由於前一個請求失敗，導致當前請求也失敗。 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * 需要升級：客戶端應切換到升級後的協議（如 TLS/1.0），然後再發送請求。 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * 需要前提條件：源服務器要求請求是有條件的。 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * 請求過多：用戶在給定的時間內發送了過多的請求（"速率限制"） 。 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * 請求頭欄位過大：伺服器不願意處理請求，因爲其頭欄位過大。 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * 登錄超時（Microsoft）：Microsoft 擴展。表示因用戶登錄超時而導致失敗。 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * 無響應：Nginx 內部狀態碼，用於指示伺服器未返回任何資訊並關閉連接（於阻擋惡意軟件有用）。 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * 重試：Microsoft 擴展。用於指示客戶端應在執行適當操作後重新發送請求。 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * 被 Windows 家長控制阻止：Microsoft 擴展。當 Windows 家長控制阻斷存取特定網頁時出現。 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * 重新導向（Microsoft）：若存在更高效的伺服器可供使用，或伺服器無法存取使用者的信箱，則在 Exchange ActiveSync 中使用。
   * 因法律原因不可用：伺服器由於接到法律約束請求而無法 操作。 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * 請求頭欄位過大（Nginx）：Nginx 內部代碼，類似於 431，但在更早版本中實現（版本 0.9.4，於 2011 年 1 月 21 日推出）。 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * 證書錯誤 (Nginx)：Nginx 內部代碼，用於 SSL 客戶端證書錯誤，以將其與日誌中的 4XX 區分開來，並進行錯誤頁面重定向。 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * 無證書（Nginx）：Nginx 內部代碼，當客戶端未提供證書時使用，以將其與日誌中的 4XX 區分開來，並進行錯誤頁面重定向。 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP 到 HTTPS（Nginx）：Nginx 內部代碼，用於發送到 HTTPS 埠的純 HTTP 請求，以將其與日誌中的 4XX 區別開來，並進行錯誤頁面重定向。 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * 令牌過期/無效（Esri）：由 ArcGIS for Server 回傳。代碼 498 表示令牌已過期或無效。 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * 需要令牌（Esri）：由 ArcGIS for Server 回傳。代碼 499 表示需要令牌（如果未提交令牌）。 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * 服務器內部錯誤：服務器自身的通用錯誤狀態。 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * 未實現：伺服器無法響應請求，通常表示伺服器可能在未來支援此請求，否則使用 4xx 狀態碼可能更為適當。 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * 錯誤網關：服務器作為代理時，從上游服務器接收的響應無效。 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * 服務不可用：伺服器停機，不接受請求。 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * 網關超時：伺服器作為代理時，從上游伺服器未能及時接收到響應。 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * 不支持的 HTTP 版本：伺服器不支持請求中所用的 HTTP 協議版本。 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * 變體亦在協商：請求的透明內容協商導致循環引用 。 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * 存儲空間不足：用戶或伺服器沒有足夠的存儲配額來完成請求。 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * 檢測到循環：伺服器在請求中檢測到無限循環。 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * 超出帶寬限制（Apache bw/limited 擴展）：此狀態碼未在任何 RFC 中規定，其使用方式未知。 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * 未擴展：需要進一步擴展請求才能完成。 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * 需要網路認證：客戶端必須先透過網路認證，才能發送請求。 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * 未知錯誤（Microsoft / CloudFlare）：此狀態碼未在任何 RFC 中規定，由某些服務返回，例如 Microsoft Azure 和 CloudFlare 服務器：「520 錯誤本質上是對源服務器返回意外響應或不可解釋/不允許（協議違規或空響應）的「兜底」響應。 」 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web 服務器宕機（CloudFlare）：源服務器拒絕了來自 CloudFlare 的連接 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * 連接超時（CloudFlare）：CloudFlare 無法與源伺服器完成 TCP 握手。 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * 源不可達（CloudFlare）：CloudFlare 無法到達源伺服器；例如，源伺服器的 DNS 記錄不正確。 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * 發生超時（CloudFlare）：CloudFlare 能夠與源伺服器建立 TCP 連接，但未能及時收到 HTTP 響應。 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL 握手失敗（CloudFlare）：CloudFlare 無法與源服務器完成 SSL/TLS 握手。 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * 無效的 SSL 證書（CloudFlare）：CloudFlare 無法驗證源伺服器提供的 SSL/TLS 證書 。 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun 錯誤（CloudFlare）：在建立 WAN 連接後，請求超時或失敗。 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * 繼續：服務器已經收到請求頭，客戶端應繼續發送請求主體。 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * 切換協議：請求者已要求服務器切換協議，服務器確認其將進行切換。 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * 處理中：伺服器已收到請求並正在處理，但尚無可用的回應。 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * 成功：標準的成功 HTTP 請求響應。 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * 已創建：請求已完成並且新資源已創建 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * 已接受：請求已被接受但尚未處理完畢。此代碼不保證請求會成功處理。 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * 非權威資訊：HTTP 1.1。伺服器成功處理了請求，但返回的是來自另一來源的資訊。 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * 無內容：服務器接受了請求，但沒有返回任何內容。通常作為 DELETE 請求的響應。 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * 重置內容：類似於 204 無內容回應，但此回應要求請求者重置文件視圖。 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * 部分內容：伺服器僅提供了客戶端透過 Range 頭請求的部分內容。 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * 多狀態：後續的消息體是一個 XML 消息，可能包含多個響應代碼，具體取決於有多少子請求被發出。 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * 已報告：DAV 綁定的成員已經在對此請求的先前回覆中被枚舉，不再重複包含。 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM 使用：伺服器已完成資源的 GET 請求，並且響應表示對當前實例應用了一個或多個實例操作的結果。 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * 多重選擇：客戶端可以選擇多個選項中的一個進行操作 。 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * 永久移動：資源已被移動，所有後續請求應參考其新的 URI 。 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * 找到：HTTP 1.0 規範將此狀態描述為「臨時移動」，但流行的瀏覽器對此狀態的響應類似於 303 的行為。資源可以透過參考返回的 URI 來獲取。 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * 參見其他：資源可以透過使用 GET 方法來獲取其他 URI 。當在響應 POST、PUT 或 DELETE 請求時收到此狀態碼，通常可以認為服務器已成功處理請求並將客戶端指向一個資訊性端點。 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * 未修改：自 If-Modified-Since 或 If-Match 頭中指定的版本以來，資源未被修改。響應主體中將不會返回資源。 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * 使用代理：HTTP 1.1。資源僅能透過代理存取，地址在響應中提供。 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * 切換代理：在 HTTP 1.1 中已廢棄。曾用於表示後續請求應使用指定的代理發送。 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * 臨時重定向：HTTP 1.1。請求應使用響應中提供的 URI 重新發送，但未來的請求仍應調用原始 URI 。 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * 恢復未完成（Google）：此代碼用於可恢復 HTTP 請求提案中，以恢復中斷的 PUT 或 POST 請求
   * 永久重新定向：請求及所有未來的請求應使用響應中提供的 URI 重新發送。 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * 錯誤請求：由於請求的語法不正確，無法滿足請求。 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * 未授權：請求者未被授權存取該資源。與 403 類似，但用於身份驗證失敗或未提供身份驗證的情況。 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * 付款需要：保留供未來使用。某些網路服務使用此作為表示客戶端已發送過多數量請求的指示。 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * 禁止：請求格式正確，但伺服器拒絕提供請求的資源。與 401 不同，身份驗證不會 改變伺服器的響應。 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * 未找到：找不到請求的資源。通常用於伺服器上所有無效的 URI 請求。 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * 方法不允許：資源請求使用了不允許的方法。例如，使用 POST 方法請求資源，但該資源僅支援 GET 方法。 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * 不可接受：資源有效，但無法以請求中 Accept 頭字段指定的格式提供。 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * 需要代理身份驗證：在滿足請求之前，需要對代理進行身份驗證。 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * 請求超時：伺服器等待客戶端的請求超時。允許客戶端重新發送請求。 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * 衝突：由於請求參數中的衝突，無法 完成請求。 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * 已刪除：請求的資源在請求的 URI 不再可用，且不會提供重定向。 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * 需要內容長度：請求未指定資源所需的內容長度 。 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * 前提條件失敗：服務器不滿足客戶端指定的一個前提條件 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * 請求實體過大：請求的內容比伺服器能夠處理的要大。 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * 請求 URI 過長：請求中提供的 URI 過長，伺服器無法 處理。通常在 GET 請求的 URI 中編碼了過多資料時會使用此狀態碼，此時應改用 POST 請求。 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * 不支援的媒體類型：客戶端提供的資料型別不受伺服器支援。 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * 請求的範圍無法滿足：客戶端請求了資源的一部分，但服務器無法提供該部分。 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * 期望失敗：服務器無法滿足 Expect 請求頭字段的要求。 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * 我是茶壺：任何嘗試用茶壺煮咖啡的行為都應該導致錯誤代碼「418 我是茶壺」。生成的實體內容可能會又短又粗。 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * 請求錯誤定向：請求被定向到無法提供響應的伺服器。該狀態碼可以由未配置為響應請求 URI 中包含的方案和授權組合的伺服器發送。 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 無法處理的實體：請求格式正確，但在當前表單中無法處理。通常在指定的參數未通過驗證錯誤時使用。 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * 已鎖定：請求的資源已找到，但由於其被鎖定而無法 訪問。 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * 依賴失敗：由於前一個請求失敗，導致當前請求也失敗。 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * 需要升級：客戶端應切換到升級後的協議（如 TLS/1.0），然後再發送請求。 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * 需要前提條件：源服務器要求請求是有條件的。 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * 請求過多：用戶在給定的時間內發送了過多的請求（"速率限制"） 。 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * 請求頭欄位過大：伺服器不願意處理請求，因爲其頭欄位過大。 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * 登錄超時（Microsoft）：Microsoft 擴展。表示因用戶登錄超時而導致失敗。 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * 無響應：Nginx 內部狀態碼，用於指示伺服器未返回任何資訊並關閉連接（於阻擋惡意軟件有用）。 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * 重試：Microsoft 擴展。用於指示客戶端應在執行適當操作後重新發送請求。 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * 被 Windows 家長控制阻止：Microsoft 擴展。當 Windows 家長控制阻斷存取特定網頁時出現。 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * 重新導向（Microsoft）：若存在更高效的伺服器可供使用，或伺服器無法存取使用者的信箱，則在 Exchange ActiveSync 中使用。
   * 因法律原因不可用：伺服器由於接到法律約束請求而無法 操作。 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * 請求頭欄位過大（Nginx）：Nginx 內部代碼，類似於 431，但在更早版本中實現（版本 0.9.4，於 2011 年 1 月 21 日推出）。 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * 證書錯誤 (Nginx)：Nginx 內部代碼，用於 SSL 客戶端證書錯誤，以將其與日誌中的 4XX 區分開來，並進行錯誤頁面重定向。 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * 無證書（Nginx）：Nginx 內部代碼，當客戶端未提供證書時使用，以將其與日誌中的 4XX 區分開來，並進行錯誤頁面重定向。 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP 到 HTTPS（Nginx）：Nginx 內部代碼，用於發送到 HTTPS 埠的純 HTTP 請求，以將其與日誌中的 4XX 區別開來，並進行錯誤頁面重定向。 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * 令牌過期/無效（Esri）：由 ArcGIS for Server 回傳。代碼 498 表示令牌已過期或無效。 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * 需要令牌（Esri）：由 ArcGIS for Server 回傳。代碼 499 表示需要令牌（如果未提交令牌）。 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * 服務器內部錯誤：服務器自身的通用錯誤狀態。 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * 未實現：伺服器無法響應請求，通常表示伺服器可能在未來支援此請求，否則使用 4xx 狀態碼可能更為適當。 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * 錯誤網關：服務器作為代理時，從上游服務器接收的響應無效。 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * 服務不可用：伺服器停機，不接受請求。 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * 網關超時：伺服器作為代理時，從上游伺服器未能及時接收到響應。 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * 不支持的 HTTP 版本：伺服器不支持請求中所用的 HTTP 協議版本。 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * 變體亦在協商：請求的透明內容協商導致循環引用 。 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * 存儲空間不足：用戶或伺服器沒有足夠的存儲配額來完成請求。 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * 檢測到循環：伺服器在請求中檢測到無限循環。 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * 超出帶寬限制（Apache bw/limited 擴展）：此狀態碼未在任何 RFC 中規定，其使用方式未知。 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * 未擴展：需要進一步擴展請求才能完成。 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * 需要網路認證：客戶端必須先透過網路認證，才能發送請求。 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * 未知錯誤（Microsoft / CloudFlare）：此狀態碼未在任何 RFC 中規定，由某些服務返回，例如 Microsoft Azure 和 CloudFlare 服務器：「520 錯誤本質上是對源服務器返回意外響應或不可解釋/不允許（協議違規或空響應）的「兜底」響應。 」 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web 服務器宕機（CloudFlare）：源服務器拒絕了來自 CloudFlare 的連接 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * 連接超時（CloudFlare）：CloudFlare 無法與源伺服器完成 TCP 握手。 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * 源不可達（CloudFlare）：CloudFlare 無法到達源伺服器；例如，源伺服器的 DNS 記錄不正確。 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * 發生超時（CloudFlare）：CloudFlare 能夠與源伺服器建立 TCP 連接，但未能及時收到 HTTP 響應。 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL 握手失敗（CloudFlare）：CloudFlare 無法與源服務器完成 SSL/TLS 握手。 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * 無效的 SSL 證書（CloudFlare）：CloudFlare 無法驗證源伺服器提供的 SSL/TLS 證書 。 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Railgun 錯誤（CloudFlare）：在建立 WAN 連接後，請求超時或失敗。 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
