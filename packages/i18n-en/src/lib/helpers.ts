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
  440: "Login Timeout (Microsoft)",
  444: "No Response (Nginx)",
  449: "Retry With (Microsoft)",
  450: "Blocked by Windows Parental Controls (Microsoft)",
  451: "Unavailable For Legal Reasons",
  494: "Request Header Too Large (Nginx)",
  495: "Cert Error (Nginx)",
  496: "No Cert (Nginx)",
  497: "HTTP to HTTPS (Nginx)",
  498: "Token expired/invalid (Esri)",
  499: "Token required (Esri)",
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
  100: "Continue：The server has received the request headers, and that the client should proceed to send the request body.",
  101: "Switching protocols：The requester has asked the server to switch protocols and the server is acknowledging that it will do so.",
  102: "Processing：The server has received and is processing the request, but no response is available yet.",
  200: "OK：The standard response for successful HTTP requests.",
  201: "Created：The request has been fulfilled and a new resource has been created.",
  202: "Accepted：The request has been accepted but has not been processed yet. This code does not guarantee that the request will process successfully.",
  203: "Non-authoritative information：HTTP 1.1. The server successfully processed the request but is returning information from another source.",
  204: "No content：The server accepted the request but is not returning any content. This is often used as a response to a DELETE request.",
  205: "Reset content：Similar to a 204 No Content response but this response requires the requester to reset the document view.",
  206: "Partial content：The server is delivering only a portion of the content, as requested by the client via a range header.",
  207: "Multi-status：The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.",
  208: "Already reported：The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.",
  226: "IM used：The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
  300: "Multiple choices：There are multiple options that the client may follow.",
  301: "Moved permanently：The resource has been moved and all further requests should reference its new URI.",
  302: "Found：The HTTP 1.0 specification described this status as \"Moved Temporarily\", but popular browsers respond to this status similar to behavior intended for 303. The resource can be retrieved by referencing the returned URI.",
  303: "See other：The resource can be retrieved by following other URI using the GET method. When received in response to a POST, PUT, or DELETE, it can usually be assumed that the server processed the request successfully and is sending the client to an informational endpoint.",
  304: "Not modified：The resource has not been modified since the version specified in If-Modified-Since or If-Match headers. The resource will not be returned in response body.",
  305: "Use proxy：HTTP 1.1. The resource is only available through a proxy and the address is provided in the response.",
  306: "Switch proxy：Deprecated in HTTP 1.1. Used to mean that subsequent requests should be sent using the specified proxy.",
  307: "Temporary redirect：HTTP 1.1. The request should be repeated with the URI provided in the response, but future requests should still call the original URI.",
  308: "Resume Incomplete (Google)：This code is used in the Resumable HTTP Requests Proposal to resume aborted PUT or POST requests",
  400: "Bad request：The request could not be fulfilled due to the incorrect syntax of the request.",
  401: "Unauthorized：The requester is not authorized to access the resource. This is similar to 403 but is used in cases where authentication is expected but has failed or has not been provided.",
  402: "Payment required：Reserved for future use. Some web services use this as an indication that the client has sent an excessive number of requests.",
  403: "Forbidden：The request was formatted correctly but the server is refusing to supply the requested resource. Unlike 401, authenticating will not make a difference in the server's response.",
  404: "Not found：The resource could not be found. This is often used as a catch-all for all invalid URIs requested of the server.",
  405: "Method not allowed：The resource was requested using a method that is not allowed. For example, requesting a resource via a POST method when the resource only supports the GET method.",
  406: "Not acceptable：The resource is valid, but cannot be provided in a format specified in the Accept headers in the request.",
  407: "Proxy authentication required：Authentication is required with the proxy before requests can be fulfilled.",
  408: "Request timeout：The server timed out waiting for a request from the client. The client is allowed to repeat the request.",
  409: "Conflict：The request cannot be completed due to a conflict in the request parameters.",
  410: "Gone：The resource is no longer available at the requested URI and no redirection will be given.",
  411: "Length required：The request did not specify the length of its content as required by the resource.",
  412: "Precondition failed：The server does not meet one of the preconditions specified by the client.",
  413: "Request entity too large：The request is larger than what the server is able to process.",
  414: "Request-URI too long：The URI provided in the request is too long for the server to process. This is often used when too much data has been encoded into the URI of a GET request and a POST request should be used instead.",
  415: "Unsupported media type：The client provided data with a media type that the server does not support.",
  416: "Requested range not satisfiable：The client has asked for a portion of the resource but the server cannot supply that portion.",
  417: "Expectation failed：The server cannot meet the requirements of the Expect request-header field.",
  418: "I'm a teapot：Any attempt to brew coffee with a teapot should result in the error code \"418 I'm a teapot\". The resulting entity body MAY be short and stout.",
  421: "Misdirected request：The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.",
  422: "Unprocessable entity：The request was formatted correctly but cannot be processed in its current form. Often used when the specified parameters fail validation errors.",
  423: "Locked：The requested resource was found but has been locked and will not be returned.",
  424: "Failed dependency：The request failed due to a failure of a previous request.",
  426: "Upgrade required：The client should repeat the request using an upgraded protocol such as TLS 1.0.",
  428: "Precondition required：The origin server requires the request to be conditional.",
  429: "Too many requests：The user has sent too many requests in a given amount of time (\"rate limiting\").",
  431: "Request header fields too large：The server is unwilling to process the request because its header fields are too large.",
  440: "Login Timeout (Microsoft)：A Microsoft extension. Indicates that your session has expired.",
  444: "No Response (Nginx)：Used in Nginx logs to indicate that the server has returned no information to the client and closed the connection (useful as a deterrent for malware).",
  449: "Retry With (Microsoft)：A Microsoft extension. The request should be retried after performing the appropriate action.",
  450: "Blocked by Windows Parental Controls (Microsoft)：A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.",
  451: "Redirect (Microsoft)：Used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the users' mailbox.",
  494: "Request Header Too Large (Nginx)：Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4 (on January 21, 2011).",
  495: "Cert Error (Nginx)：Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an error page redirection.",
  496: "No Cert (Nginx)：Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an error page redirection.",
  497: "HTTP to HTTPS (Nginx)：Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in a log and an error page redirection.",
  498: "Token expired/invalid (Esri)：Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.",
  499: "Token required (Esri)：Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).",
  500: "Internal server error：A generic status for an error in the server itself.",
  501: "Not implemented：The server cannot respond to the request. This usually implies that the server could possibly support the request in the future — otherwise a 4xx status may be more appropriate.",
  502: "Bad gateway：The server is acting as a proxy and did not receive an acceptable response from the upstream server.",
  503: "Service unavailable：The server is down and is not accepting requests.",
  504: "Gateway timeout：The server is acting as a proxy and did not receive a response from the upstream server.",
  505: "HTTP version not supported：The server does not support the HTTP protocol version specified in the request.",
  506: "Variant also negotiates：Transparent content negotiation for the request results in a circular reference.",
  507: "Insufficient storage：The user or server does not have sufficient storage quota to fulfill the request.",
  508: "Loop detected：The server detected an infinite loop in the request.",
  509: "Bandwidth Limit Exceeded (Apache bw/limited extension)：This status code is not specified in any RFCs. Its use is unknown.",
  510: "Not extended：Further extensions to the request are necessary for it to be fulfilled.",
  511: "Network authentication required：The client must authenticate with the network before sending requests.",
  520: "Unknown Error (Microsoft / CloudFlare)：This status code is not specified in any RFC and is returned by certain services, for instance Microsoft Azure and CloudFlare servers: \"The 520 error is essentially a \"catch-all\" response for when the origin server returns something unexpected or something that is not tolerated/interpreted (protocol violation or empty response).\"",
  521: "Web Server Is Down (CloudFlare)：The origin server has refused the connection from CloudFlare.",
  522: "Connection Timed Out (CloudFlare)：CloudFlare could not negotiate a TCP handshake with the origin server.",
  523: "Origin Is Unreachable (CloudFlare)：CloudFlare could not reach the origin server; for example, if the DNS records for the origin server are incorrect.",
  524: "A Timeout Occurred (CloudFlare)：CloudFlare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.",
  525: "SSL Handshake Failed (CloudFlare)：CloudFlare could not negotiate a SSL/TLS handshake with the origin server.",
  526: "Invalid SSL Certificate (CloudFlare)：CloudFlare could not validate the SSL/TLS certificate that the origin server presented.",
  527: "Railgun Error (CloudFlare)：The request timed out or failed after the WAN connection has been established."
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
  "Login Timeout (Microsoft)": 440,
  "No Response (Nginx)": 444,
  "Retry With (Microsoft)": 449,
  "Blocked by Windows Parental Controls (Microsoft)": 450,
  "Unavailable For Legal Reasons": 451,
  "Request Header Too Large (Nginx)": 494,
  "Cert Error (Nginx)": 495,
  "No Cert (Nginx)": 496,
  "HTTP to HTTPS (Nginx)": 497,
  "Token expired/invalid (Esri)": 498,
  "Token required (Esri)": 499,
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
  "Continue": "Continue：The server has received the request headers, and that the client should proceed to send the request body.",
  "Switching Protocols": "Switching protocols：The requester has asked the server to switch protocols and the server is acknowledging that it will do so.",
  "Processing": "Processing：The server has received and is processing the request, but no response is available yet.",
  "OK": "OK：The standard response for successful HTTP requests.",
  "Created": "Created：The request has been fulfilled and a new resource has been created.",
  "Accepted": "Accepted：The request has been accepted but has not been processed yet. This code does not guarantee that the request will process successfully.",
  "Non-Authoritative Information": "Non-authoritative information：HTTP 1.1. The server successfully processed the request but is returning information from another source.",
  "No Content": "No content：The server accepted the request but is not returning any content. This is often used as a response to a DELETE request.",
  "Reset Content": "Reset content：Similar to a 204 No Content response but this response requires the requester to reset the document view.",
  "Partial Content": "Partial content：The server is delivering only a portion of the content, as requested by the client via a range header.",
  "Multi-Status": "Multi-status：The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.",
  "Already Reported": "Already reported：The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.",
  "IM Used": "IM used：The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
  "Multiple Choices": "Multiple choices：There are multiple options that the client may follow.",
  "Moved Permanently": "Moved permanently：The resource has been moved and all further requests should reference its new URI.",
  "Found": "Found：The HTTP 1.0 specification described this status as \"Moved Temporarily\", but popular browsers respond to this status similar to behavior intended for 303. The resource can be retrieved by referencing the returned URI.",
  "See Other": "See other：The resource can be retrieved by following other URI using the GET method. When received in response to a POST, PUT, or DELETE, it can usually be assumed that the server processed the request successfully and is sending the client to an informational endpoint.",
  "Not Modified": "Not modified：The resource has not been modified since the version specified in If-Modified-Since or If-Match headers. The resource will not be returned in response body.",
  "Use Proxy": "Use proxy：HTTP 1.1. The resource is only available through a proxy and the address is provided in the response.",
  "Switch proxy": "Switch proxy：Deprecated in HTTP 1.1. Used to mean that subsequent requests should be sent using the specified proxy.",
  "Temporary Redirect": "Temporary redirect：HTTP 1.1. The request should be repeated with the URI provided in the response, but future requests should still call the original URI.",
  "Permanent Redirect": "Resume Incomplete (Google)：This code is used in the Resumable HTTP Requests Proposal to resume aborted PUT or POST requests",
  "Bad Request": "Bad request：The request could not be fulfilled due to the incorrect syntax of the request.",
  "Unauthorized": "Unauthorized：The requester is not authorized to access the resource. This is similar to 403 but is used in cases where authentication is expected but has failed or has not been provided.",
  "Payment Required": "Payment required：Reserved for future use. Some web services use this as an indication that the client has sent an excessive number of requests.",
  "Forbidden": "Forbidden：The request was formatted correctly but the server is refusing to supply the requested resource. Unlike 401, authenticating will not make a difference in the server's response.",
  "Not Found": "Not found：The resource could not be found. This is often used as a catch-all for all invalid URIs requested of the server.",
  "Method Not Allowed": "Method not allowed：The resource was requested using a method that is not allowed. For example, requesting a resource via a POST method when the resource only supports the GET method.",
  "Not Acceptable": "Not acceptable：The resource is valid, but cannot be provided in a format specified in the Accept headers in the request.",
  "Proxy Authentication Required": "Proxy authentication required：Authentication is required with the proxy before requests can be fulfilled.",
  "Request Timeout": "Request timeout：The server timed out waiting for a request from the client. The client is allowed to repeat the request.",
  "Conflict": "Conflict：The request cannot be completed due to a conflict in the request parameters.",
  "Gone": "Gone：The resource is no longer available at the requested URI and no redirection will be given.",
  "Length Required": "Length required：The request did not specify the length of its content as required by the resource.",
  "Precondition Failed": "Precondition failed：The server does not meet one of the preconditions specified by the client.",
  "Payload Too Large": "Request entity too large：The request is larger than what the server is able to process.",
  "URI Too Long": "Request-URI too long：The URI provided in the request is too long for the server to process. This is often used when too much data has been encoded into the URI of a GET request and a POST request should be used instead.",
  "Unsupported Media Type": "Unsupported media type：The client provided data with a media type that the server does not support.",
  "Range Not Satisfiable": "Requested range not satisfiable：The client has asked for a portion of the resource but the server cannot supply that portion.",
  "Expectation Failed": "Expectation failed：The server cannot meet the requirements of the Expect request-header field.",
  "I'm a Teapot": "I'm a teapot：Any attempt to brew coffee with a teapot should result in the error code \"418 I'm a teapot\". The resulting entity body MAY be short and stout.",
  "Misdirected Request": "Misdirected request：The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.",
  "Unprocessable Entity": "Unprocessable entity：The request was formatted correctly but cannot be processed in its current form. Often used when the specified parameters fail validation errors.",
  "Locked": "Locked：The requested resource was found but has been locked and will not be returned.",
  "Failed Dependency": "Failed dependency：The request failed due to a failure of a previous request.",
  "Upgrade Required": "Upgrade required：The client should repeat the request using an upgraded protocol such as TLS 1.0.",
  "Precondition Required": "Precondition required：The origin server requires the request to be conditional.",
  "Too Many Requests": "Too many requests：The user has sent too many requests in a given amount of time (\"rate limiting\").",
  "Request Header Fields Too Large": "Request header fields too large：The server is unwilling to process the request because its header fields are too large.",
  "Login Timeout (Microsoft)": "Login Timeout (Microsoft)：A Microsoft extension. Indicates that your session has expired.",
  "No Response (Nginx)": "No Response (Nginx)：Used in Nginx logs to indicate that the server has returned no information to the client and closed the connection (useful as a deterrent for malware).",
  "Retry With (Microsoft)": "Retry With (Microsoft)：A Microsoft extension. The request should be retried after performing the appropriate action.",
  "Blocked by Windows Parental Controls (Microsoft)": "Blocked by Windows Parental Controls (Microsoft)：A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.",
  "Unavailable For Legal Reasons": "Redirect (Microsoft)：Used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the users' mailbox.",
  "Request Header Too Large (Nginx)": "Request Header Too Large (Nginx)：Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4 (on January 21, 2011).",
  "Cert Error (Nginx)": "Cert Error (Nginx)：Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an error page redirection.",
  "No Cert (Nginx)": "No Cert (Nginx)：Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an error page redirection.",
  "HTTP to HTTPS (Nginx)": "HTTP to HTTPS (Nginx)：Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in a log and an error page redirection.",
  "Token expired/invalid (Esri)": "Token expired/invalid (Esri)：Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.",
  "Token required (Esri)": "Token required (Esri)：Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).",
  "Internal Server Error": "Internal server error：A generic status for an error in the server itself.",
  "Not Implemented": "Not implemented：The server cannot respond to the request. This usually implies that the server could possibly support the request in the future — otherwise a 4xx status may be more appropriate.",
  "Bad Gateway": "Bad gateway：The server is acting as a proxy and did not receive an acceptable response from the upstream server.",
  "Service Unavailable": "Service unavailable：The server is down and is not accepting requests.",
  "Gateway Timeout": "Gateway timeout：The server is acting as a proxy and did not receive a response from the upstream server.",
  "HTTP Version Not Supported": "HTTP version not supported：The server does not support the HTTP protocol version specified in the request.",
  "Variant Also Negotiates": "Variant also negotiates：Transparent content negotiation for the request results in a circular reference.",
  "Insufficient Storage": "Insufficient storage：The user or server does not have sufficient storage quota to fulfill the request.",
  "Loop Detected": "Loop detected：The server detected an infinite loop in the request.",
  "Bandwidth Limit Exceeded": "Bandwidth Limit Exceeded (Apache bw/limited extension)：This status code is not specified in any RFCs. Its use is unknown.",
  "Not Extended": "Not extended：Further extensions to the request are necessary for it to be fulfilled.",
  "Network Authentication Required": "Network authentication required：The client must authenticate with the network before sending requests.",
  "Unknown Error (Microsoft / CloudFlare)": "Unknown Error (Microsoft / CloudFlare)：This status code is not specified in any RFC and is returned by certain services, for instance Microsoft Azure and CloudFlare servers: \"The 520 error is essentially a \"catch-all\" response for when the origin server returns something unexpected or something that is not tolerated/interpreted (protocol violation or empty response).\"",
  "Web Server Is Down (CloudFlare)": "Web Server Is Down (CloudFlare)：The origin server has refused the connection from CloudFlare.",
  "Connection Timed Out (CloudFlare)": "Connection Timed Out (CloudFlare)：CloudFlare could not negotiate a TCP handshake with the origin server.",
  "Origin Is Unreachable (CloudFlare)": "Origin Is Unreachable (CloudFlare)：CloudFlare could not reach the origin server; for example, if the DNS records for the origin server are incorrect.",
  "A Timeout Occurred (CloudFlare)": "A Timeout Occurred (CloudFlare)：CloudFlare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.",
  "SSL Handshake Failed (CloudFlare)": "SSL Handshake Failed (CloudFlare)：CloudFlare could not negotiate a SSL/TLS handshake with the origin server.",
  "Invalid SSL Certificate (CloudFlare)": "Invalid SSL Certificate (CloudFlare)：CloudFlare could not validate the SSL/TLS certificate that the origin server presented.",
  "Railgun Error (CloudFlare)": "Railgun Error (CloudFlare)：The request timed out or failed after the WAN connection has been established."
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
