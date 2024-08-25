/**
 * © 2024 aiyoudiao
 *
 * This file was created by aiyoudiao, containing a lot of hard work and wisdom.
 *
 * You are free to use, modify, and distribute this file, but please keep this copyright notice.
 *
 * If you find this file helpful, please give me a star or follow me ツ.
 *
 * Contact:
 * - Email: newdiao@163.com
 * - GitHub: https://github.com/aiyoudiao
 *
 * Happy coding! Remember, code is poetry, and front-end is art. ツ
 */

export enum StatusText {
  /**
   * 100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continue：The server has received the request headers, and that the client should proceed to send the request body.
   */
  CONTINUE = 'Continue',
  /**
   * 101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Switching protocols：The requester has asked the server to switch protocols and the server is acknowledging that it will do so.
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * 102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Processing：The server has received and is processing the request, but no response is available yet.
   */
  PROCESSING = 'Processing',
  /**
   * 200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK：The standard response for successful HTTP requests.
   */
  OK = 'OK',
  /**
   * 201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Created：The request has been fulfilled and a new resource has been created.
   */
  CREATED = 'Created',
  /**
   * 202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Accepted：The request has been accepted but has not been processed yet. This code does not guarantee that the request will process successfully.
   */
  ACCEPTED = 'Accepted',
  /**
   * 203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Non-authoritative information：HTTP 1.1. The server successfully processed the request but is returning information from another source.
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * 204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * No content：The server accepted the request but is not returning any content. This is often used as a response to a DELETE request.
   */
  NO_CONTENT = 'No Content',
  /**
   * 205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset content：Similar to a 204 No Content response but this response requires the requester to reset the document view.
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * 206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Partial content：The server is delivering only a portion of the content, as requested by the client via a range header.
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * 207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status：The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * 208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Already reported：The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * 226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM used：The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
   */
  IM_USED = 'IM Used',
  /**
   * 300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Multiple choices：There are multiple options that the client may follow.
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * 301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Moved permanently：The resource has been moved and all further requests should reference its new URI.
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * 302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Found：The HTTP 1.0 specification described this status as "Moved Temporarily", but popular browsers respond to this status similar to behavior intended for 303. The resource can be retrieved by referencing the returned URI.
   */
  FOUND = 'Found',
  /**
   * 303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * See other：The resource can be retrieved by following other URI using the GET method. When received in response to a POST, PUT, or DELETE, it can usually be assumed that the server processed the request successfully and is sending the client to an informational endpoint.
   */
  SEE_OTHER = 'See Other',
  /**
   * 304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Not modified：The resource has not been modified since the version specified in If-Modified-Since or If-Match headers. The resource will not be returned in response body.
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * 305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Use proxy：HTTP 1.1. The resource is only available through a proxy and the address is provided in the response.
   */
  USE_PROXY = 'Use Proxy',
  /**
   * 306: 
   * Empty
   * Switch proxy：Deprecated in HTTP 1.1. Used to mean that subsequent requests should be sent using the specified proxy.
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * 307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Temporary redirect：HTTP 1.1. The request should be repeated with the URI provided in the response, but future requests should still call the original URI.
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * 308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google)：This code is used in the Resumable HTTP Requests Proposal to resume aborted PUT or POST requests
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * 400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Bad request：The request could not be fulfilled due to the incorrect syntax of the request.
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * 401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Unauthorized：The requester is not authorized to access the resource. This is similar to 403 but is used in cases where authentication is expected but has failed or has not been provided.
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * 402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Payment required：Reserved for future use. Some web services use this as an indication that the client has sent an excessive number of requests.
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * 403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Forbidden：The request was formatted correctly but the server is refusing to supply the requested resource. Unlike 401, authenticating will not make a difference in the server's response.
   */
  FORBIDDEN = 'Forbidden',
  /**
   * 404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Not found：The resource could not be found. This is often used as a catch-all for all invalid URIs requested of the server.
   */
  NOT_FOUND = 'Not Found',
  /**
   * 405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Method not allowed：The resource was requested using a method that is not allowed. For example, requesting a resource via a POST method when the resource only supports the GET method.
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * 406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Not acceptable：The resource is valid, but cannot be provided in a format specified in the Accept headers in the request.
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * 407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy authentication required：Authentication is required with the proxy before requests can be fulfilled.
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * 408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Request timeout：The server timed out waiting for a request from the client. The client is allowed to repeat the request.
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * 409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflict：The request cannot be completed due to a conflict in the request parameters.
   */
  CONFLICT = 'Conflict',
  /**
   * 410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Gone：The resource is no longer available at the requested URI and no redirection will be given.
   */
  GONE = 'Gone',
  /**
   * 411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Length required：The request did not specify the length of its content as required by the resource.
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * 412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Precondition failed：The server does not meet one of the preconditions specified by the client.
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * 413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Request entity too large：The request is larger than what the server is able to process.
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * 414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Request-URI too long：The URI provided in the request is too long for the server to process. This is often used when too much data has been encoded into the URI of a GET request and a POST request should be used instead.
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * 415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Unsupported media type：The client provided data with a media type that the server does not support.
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * 416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Requested range not satisfiable：The client has asked for a portion of the resource but the server cannot supply that portion.
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * 417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Expectation failed：The server cannot meet the requirements of the Expect request-header field.
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * 418: 
   * Empty
   * I'm a teapot：Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * 421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Misdirected request：The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * 422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Unprocessable entity：The request was formatted correctly but cannot be processed in its current form. Often used when the specified parameters fail validation errors.
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * 423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Locked：The requested resource was found but has been locked and will not be returned.
   */
  LOCKED = 'Locked',
  /**
   * 424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Failed dependency：The request failed due to a failure of a previous request.
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * 426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817  and  https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15
   * Upgrade required：The client should repeat the request using an upgraded protocol such as TLS 1.0.
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * 428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Precondition required：The origin server requires the request to be conditional.
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * 429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Too many requests：The user has sent too many requests in a given amount of time ("rate limiting").
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * 431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Request header fields too large：The server is unwilling to process the request because its header fields are too large.
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * 440: 
   * Empty
   * Login Timeout (Microsoft)：A Microsoft extension. Indicates that your session has expired.
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * 444: 
   * Empty
   * No Response (Nginx)：Used in Nginx logs to indicate that the server has returned no information to the client and closed the connection (useful as a deterrent for malware).
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * 449: 
   * Empty
   * Retry With (Microsoft)：A Microsoft extension. The request should be retried after performing the appropriate action.
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * 450: 
   * Empty
   * Blocked by Windows Parental Controls (Microsoft)：A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * 451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft)：Used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the users' mailbox.
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * 494: 
   * Empty
   * Request Header Too Large (Nginx)：Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4 (on January 21, 2011).
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * 495: 
   * Empty
   * Cert Error (Nginx)：Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an error page redirection.
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * 496: 
   * Empty
   * No Cert (Nginx)：Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an error page redirection.
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * 497: 
   * Empty
   * HTTP to HTTPS (Nginx)：Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in a log and an error page redirection.
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * 498: 
   * Empty
   * Token expired/invalid (Esri)：Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * 499: 
   * Empty
   * Token required (Esri)：Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * 500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Internal server error：A generic status for an error in the server itself.
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * 501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Not implemented：The server cannot respond to the request. This usually implies that the server could possibly support the request in the future — otherwise a 4xx status may be more appropriate.
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * 502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad gateway：The server is acting as a proxy and did not receive an acceptable response from the upstream server.
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * 503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Service unavailable：The server is down and is not accepting requests.
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * 504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout：The server is acting as a proxy and did not receive a response from the upstream server.
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * 505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP version not supported：The server does not support the HTTP protocol version specified in the request.
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * 506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant also negotiates：Transparent content negotiation for the request results in a circular reference.
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * 507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insufficient storage：The user or server does not have sufficient storage quota to fulfill the request.
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * 508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Loop detected：The server detected an infinite loop in the request.
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * 509: 
   * Empty
   * Bandwidth Limit Exceeded (Apache bw/limited extension)：This status code is not specified in any RFCs. Its use is unknown.
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * 510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Not extended：Further extensions to the request are necessary for it to be fulfilled.
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * 511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Network authentication required：The client must authenticate with the network before sending requests.
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * 520: 
   * Empty
   * Unknown Error (Microsoft / CloudFlare)：This status code is not specified in any RFC and is returned by certain services, for instance Microsoft Azure and CloudFlare servers: "The 520 error is essentially a "catch-all" response for when the origin server returns something unexpected or something that is not tolerated/interpreted (protocol violation or empty response)."
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * 521: 
   * Empty
   * Web Server Is Down (CloudFlare)：The origin server has refused the connection from CloudFlare.
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * 522: 
   * Empty
   * Connection Timed Out (CloudFlare)：CloudFlare could not negotiate a TCP handshake with the origin server.
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * 523: 
   * Empty
   * Origin Is Unreachable (CloudFlare)：CloudFlare could not reach the origin server; for example, if the DNS records for the origin server are incorrect.
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * 524: 
   * Empty
   * A Timeout Occurred (CloudFlare)：CloudFlare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * 525: 
   * Empty
   * SSL Handshake Failed (CloudFlare)：CloudFlare could not negotiate a SSL/TLS handshake with the origin server.
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * 526: 
   * Empty
   * Invalid SSL Certificate (CloudFlare)：CloudFlare could not validate the SSL/TLS certificate that the origin server presented.
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * 527: 
   * Empty
   * Railgun Error (CloudFlare)：The request timed out or failed after the WAN connection has been established.
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}
