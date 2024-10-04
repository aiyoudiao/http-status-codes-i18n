/**
 * © 2024 aiyoudiao
 *
 * 이 파일은 aiyoudiao가 만들었으며 많은 노력과 지혜가 담겨 있습니다.
 *
 * 이 파일을 자유롭게 사용, 수정 및 배포할 수 있지만 이 저작권 공지사항을 유지하십시오.
 *
 * 이 파일이 도움이 된다고 생각하면 저에게 별을 주거나 저를 팔로우해 주세요 ツ.
 *
 * 연락처:
 * - 이메일:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 *
 * 행복한 코딩! 기억하세요, 코드는 시이며 프론트엔드는 예술입니다. ツ
 */
export enum HttpStatusDescription {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * 계속: 서버가 요청 헤더를 받았으며 클라이언트는 요청 본문을 전송해야 합니다. 
   */
  CONTINUE = '계속: 서버가 요청 헤더를 받았으며 클라이언트는 요청 본문을 전송해야 합니다. ',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * 프로토콜 전환: 요청자는 서버에 프로토콜을 전환하도록 요청했으며 서버는 이를 수행할 것임을 확인합니다. 
   */
  SWITCHING_PROTOCOLS = '프로토콜 전환: 요청자는 서버에 프로토콜을 전환하도록 요청했으며 서버는 이를 수행할 것임을 확인합니다. ',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * 처리 중: 서버가 요청을 받았고 처리 중이며 아직 사용 가능한 응답이 없습니다. 
   */
  PROCESSING = '처리 중: 서버가 요청을 받았고 처리 중이며 아직 사용 가능한 응답이 없습니다. ',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK : 성공적인 HTTP 요청에 대한 표준 응답. 
   */
  OK = 'OK : 성공적인 HTTP 요청에 대한 표준 응답. ',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * 생성됨: 요청이 이행되었으며 새로운 리소스가 생성되었습니다. 
   */
  CREATED = '생성됨: 요청이 이행되었으며 새로운 리소스가 생성되었습니다. ',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * 승인됨: 요청이 수락되었지만 아직 처리되지 않았습니다. 이 코드는 요청이 성공적으로 처리될 것이라는 보장을 하지 않습니다. 
   */
  ACCEPTED = '승인됨: 요청이 수락되었지만 아직 처리되지 않았습니다. 이 코드는 요청이 성공적으로 처리될 것이라는 보장을 하지 않습니다. ',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * 비권위적인 정보: HTTP 1.1. 서버는 요청을 성공적으로 처리했지만 다른 소스에서 정보를 반환하고 있습니다. 
   */
  NON_AUTHORITATIVE_INFORMATION = '비권위적인 정보: HTTP 1.1. 서버는 요청을 성공적으로 처리했지만 다른 소스에서 정보를 반환하고 있습니다. ',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * "컨텐츠 없음: 서버가 요청을 수락하였지만 어떠한 컨텐츠도 반환하지 않습니다. 이는 종종 DELETE 요청에 대한 응답으로 사용됩니다." 
   */
  NO_CONTENT = '"컨텐츠 없음: 서버가 요청을 수락하였지만 어떠한 컨텐츠도 반환하지 않습니다. 이는 종종 DELETE 요청에 대한 응답으로 사용됩니다." ',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * 리셋 컨텐츠: 204 'No Content' 응답과 유사하지만, 이 응답은 요청자가 문서 뷰를 리셋하도록 요구합니다. 
   */
  RESET_CONTENT = '리셋 컨텐츠: 204 \'No Content\' 응답과 유사하지만, 이 응답은 요청자가 문서 뷰를 리셋하도록 요구합니다. ',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * 부분적인 내용: 서버는 클라이언트가 Range 헤더를 통해 요청한 내용의 일부만 제공합니다. 
   */
  PARTIAL_CONTENT = '부분적인 내용: 서버는 클라이언트가 Range 헤더를 통해 요청한 내용의 일부만 제공합니다. ',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * 멀티 상태 : 뒤따르는 메시지 본문은 XML 메시지이며, 얼마나 많은 서브 요청이 이루어졌는지에 따라 여러 개의 개별 응답 코드를 포함할 수 있습니다. 
   */
  MULTI_STATUS = '멀티 상태 : 뒤따르는 메시지 본문은 XML 메시지이며, 얼마나 많은 서브 요청이 이루어졌는지에 따라 여러 개의 개별 응답 코드를 포함할 수 있습니다. ',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * 이미 보고되었습니다: DAV 바인딩의 구성원은 이 요청에 대한 이전 응답에서 이미 열거되었고 다시 포함되지 않습니다. 
   */
  ALREADY_REPORTED = '이미 보고되었습니다: DAV 바인딩의 구성원은 이 요청에 대한 이전 응답에서 이미 열거되었고 다시 포함되지 않습니다. ',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM 사용 : 서버는 자원에 대한 GET 요청을 수행했으며, 응답은 현재 인스턴스에 하나 이상의 인스턴스 조작이 적용된 결과의 표현입니다. 
   */
  IM_USED = 'IM 사용 : 서버는 자원에 대한 GET 요청을 수행했으며, 응답은 현재 인스턴스에 하나 이상의 인스턴스 조작이 적용된 결과의 표현입니다. ',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * 다중 선택: 클라이언트는 다양한 옵션 중 하나를 선택하여 작업할 수 있습니다.
   */
  MULTIPLE_CHOICES = '다중 선택: 클라이언트는 다양한 옵션 중 하나를 선택하여 작업할 수 있습니다.',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * 영구 이동: 리소스가 이동되었으며 모든 후속 요청은 그 새로운 URI를 참조해야 합니다. 
   */
  MOVED_PERMANENTLY = '영구 이동: 리소스가 이동되었으며 모든 후속 요청은 그 새로운 URI를 참조해야 합니다. ',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * 발견: HTTP 1.0 규격은 이 상태를 "임시로 이동"으로 기술했지만, 인기 있는 브라우저는 303에 의도된 동작과 비슷하게 이 상태에 응답합니다. 자원은 반환된 URI를 참조하여 검색할 수 있습니다. 
   */
  FOUND = '발견: HTTP 1.0 규격은 이 상태를 "임시로 이동"으로 기술했지만, 인기 있는 브라우저는 303에 의도된 동작과 비슷하게 이 상태에 응답합니다. 자원은 반환된 URI를 참조하여 검색할 수 있습니다. ',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * 다른 것을 참조하십시오: 자원은 GET 방법을 사용하여 다른 URI를 통해 검색할 수 있습니다. POST, PUT 또는 DELETE 요청에 대한 응답으로 받았을 때, 일반적으로 서버가 요청을 성공적으로 처리하고 클라이언트를 정보 제공 단말로 보내는 것으로 간주할 수 있습니다. 
   */
  SEE_OTHER = '다른 것을 참조하십시오: 자원은 GET 방법을 사용하여 다른 URI를 통해 검색할 수 있습니다. POST, PUT 또는 DELETE 요청에 대한 응답으로 받았을 때, 일반적으로 서버가 요청을 성공적으로 처리하고 클라이언트를 정보 제공 단말로 보내는 것으로 간주할 수 있습니다. ',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * 수정되지 않음: If-Modified-Since 또는 If-Match 헤더에서 지정된 버전 이후에 리소스가 수정되지 않았습니다. 응답 본문에서는 리소스가 반환되지 않습니다. 
   */
  NOT_MODIFIED = '수정되지 않음: If-Modified-Since 또는 If-Match 헤더에서 지정된 버전 이후에 리소스가 수정되지 않았습니다. 응답 본문에서는 리소스가 반환되지 않습니다. ',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * 프록시 사용: HTTP 1.1. 자원은 프록시를 통해서만 접근 가능하며, 주소는 응답에서 제공됩니다. 
   */
  USE_PROXY = '프록시 사용: HTTP 1.1. 자원은 프록시를 통해서만 접근 가능하며, 주소는 응답에서 제공됩니다. ',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * 스위치 프록시: HTTP 1.1에서 폐기되었습니다. 이전에는 지정된 프록시를 사용하여 후속 요청을 보내야 한다는 것을 의미했습니다. 
   */
  SWITCH_PROXY = '스위치 프록시: HTTP 1.1에서 폐기되었습니다. 이전에는 지정된 프록시를 사용하여 후속 요청을 보내야 한다는 것을 의미했습니다. ',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * 임시 리다이렉트: HTTP 1.1. 요청은 응답에서 제공된 URI로 재전송되어야 하지만, 향후 요청은 여전히 원래 URI를 호출해야 합니다. 
   */
  TEMPORARY_REDIRECT = '임시 리다이렉트: HTTP 1.1. 요청은 응답에서 제공된 URI로 재전송되어야 하지만, 향후 요청은 여전히 원래 URI를 호출해야 합니다. ',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * "Resume Incomplete (Google)": 이 코드는 Resumable HTTP Requests Proposal에서 취소된 PUT 또는 POST 요청을 재개하는 데 사용됩니다.
   * "영구 리디렉션": 요청 및 모든 향후 요청은 응답에서 제공된 URI를 사용하여 다시 전송되어야 합니다. 
   */
  PERMANENT_REDIRECT = '"Resume Incomplete (Google)": 이 코드는 Resumable HTTP Requests Proposal에서 취소된 PUT 또는 POST 요청을 재개하는 데 사용됩니다.\n\
"영구 리디렉션": 요청 및 모든 향후 요청은 응답에서 제공된 URI를 사용하여 다시 전송되어야 합니다. ',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * 잘못된 요청: 요청의 구문이 잘못되어 요청을 충족시킬 수 없습니다. 
   */
  BAD_REQUEST = '잘못된 요청: 요청의 구문이 잘못되어 요청을 충족시킬 수 없습니다. ',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * 미인가: 요청자가 해당 리소스에 액세스할 권한이 없습니다. 이는 403과 유사하지만 인증이 기대되지만 실패하거나 제공되지 않은 경우에 사용됩니다. 
   */
  UNAUTHORIZED = '미인가: 요청자가 해당 리소스에 액세스할 권한이 없습니다. 이는 403과 유사하지만 인증이 기대되지만 실패하거나 제공되지 않은 경우에 사용됩니다. ',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * 결제가 필요합니다: 미래 사용을 위해 예약되었습니다. 일부 웹 서비스는 이를 클라이언트가 너무 많은 요청을 보냈다는 표시로 사용합니다. 
   */
  PAYMENT_REQUIRED = '결제가 필요합니다: 미래 사용을 위해 예약되었습니다. 일부 웹 서비스는 이를 클라이언트가 너무 많은 요청을 보냈다는 표시로 사용합니다. ',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * 금지: 요청이 올바른 형식으로 이루어졌지만 서버가 요청된 자원을 제공 거부합니다. 401과 달리 인증을 하더라도 서버의 응답에 차이가 없습니다. 
   */
  FORBIDDEN = '금지: 요청이 올바른 형식으로 이루어졌지만 서버가 요청된 자원을 제공 거부합니다. 401과 달리 인증을 하더라도 서버의 응답에 차이가 없습니다. ',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * 찾을 수 없음: 요청한 자원을 찾을 수 없습니다. 이는 서버에서 요청된 모든 무효한 URI에 대해 종종 전반적으로 사용됩니다. 
   */
  NOT_FOUND = '찾을 수 없음: 요청한 자원을 찾을 수 없습니다. 이는 서버에서 요청된 모든 무효한 URI에 대해 종종 전반적으로 사용됩니다. ',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * 방법이 허용되지 않음: 자원이 허용되지 않는 방법으로 요청되었습니다. 예를 들어 자원이 GET 메서드만 지원하는데 POST 메서드를 사용하여 자원을 요청하는 경우. 
   */
  METHOD_NOT_ALLOWED = '방법이 허용되지 않음: 자원이 허용되지 않는 방법으로 요청되었습니다. 예를 들어 자원이 GET 메서드만 지원하는데 POST 메서드를 사용하여 자원을 요청하는 경우. ',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * 허용되지 않음: 자원은 유효하지만 요청의 Accept 헤더에서 지정된 형식으로 제공될 수 없습니다. 
   */
  NOT_ACCEPTABLE = '허용되지 않음: 자원은 유효하지만 요청의 Accept 헤더에서 지정된 형식으로 제공될 수 없습니다. ',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * 프록시 인증이 필요합니다: 요청을 충족시키기 전에 프록시에 대한 인증이 필요합니다. 
   */
  PROXY_AUTHENTICATION_REQUIRED = '프록시 인증이 필요합니다: 요청을 충족시키기 전에 프록시에 대한 인증이 필요합니다. ',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * 요청 타임아웃: 서버가 클라이언트의 요청을 기다리는 동안 타임아웃되었습니다. 클라이언트는 요청을 반복할 수 있습니다. 
   */
  REQUEST_TIMEOUT = '요청 타임아웃: 서버가 클라이언트의 요청을 기다리는 동안 타임아웃되었습니다. 클라이언트는 요청을 반복할 수 있습니다. ',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * 충돌: 요청 매개변수에 충돌이 있기 때문에 요청을 완료할 수 없습니다. 
   */
  CONFLICT = '충돌: 요청 매개변수에 충돌이 있기 때문에 요청을 완료할 수 없습니다. ',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * 사라짐: 요청된 URI에서 리소스가 더 이상 사용할 수 없으며 리디렉션도 제공되지 않습니다. 
   */
  GONE = '사라짐: 요청된 URI에서 리소스가 더 이상 사용할 수 없으며 리디렉션도 제공되지 않습니다. ',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * 길이 요구사항: HTTP 프로토콜의 상황에서 요청은 자원에서 필요로 하는 내용의 길이를 지정하지 않았습니다. 
   */
  LENGTH_REQUIRED = '길이 요구사항: HTTP 프로토콜의 상황에서 요청은 자원에서 필요로 하는 내용의 길이를 지정하지 않았습니다. ',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * 사전 조건이 실패했습니다: 서버는 클라이언트에 의해 지정된 사전 조건 중 하나를 충족하지 못합니다. 
   */
  PRECONDITION_FAILED = '사전 조건이 실패했습니다: 서버는 클라이언트에 의해 지정된 사전 조건 중 하나를 충족하지 못합니다. ',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * HTTP(하이퍼텍스트 전송 프로토콜) 상황에서: "Request entity too large: The request is larger than what the server is able to process."는 "요청 엔티티가 너무 큼: 요청 내용이 서버가 처리할 수 있는 것보다 큽니다."로 번역됩니다. 
   */
  PAYLOAD_TOO_LARGE = 'HTTP(하이퍼텍스트 전송 프로토콜) 상황에서: "Request entity too large: The request is larger than what the server is able to process."는 "요청 엔티티가 너무 큼: 요청 내용이 서버가 처리할 수 있는 것보다 큽니다."로 번역됩니다. ',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * 요청 URI가 너무 길다: 요청에 제공된 URI가 너무 길어 서버가 처리할 수 없습니다. GET 요청의 URI에 너무 많은 데이터가 인코딩되었을 때 자주 사용되며 이 경우 POST 요청을 사용해야 합니다. 
   */
  URI_TOO_LONG = '요청 URI가 너무 길다: 요청에 제공된 URI가 너무 길어 서버가 처리할 수 없습니다. GET 요청의 URI에 너무 많은 데이터가 인코딩되었을 때 자주 사용되며 이 경우 POST 요청을 사용해야 합니다. ',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * 미지원 미디어 타입: 클라이언트에서 제공한 데이터의 미디어 타입이 서버에서 지원되지 않습니다. 
   */
  UNSUPPORTED_MEDIA_TYPE = '미지원 미디어 타입: 클라이언트에서 제공한 데이터의 미디어 타입이 서버에서 지원되지 않습니다. ',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * 요청된 범위를 만족시킬 수 없습니다: 클라이언트가 리소스의 일부를 요청했지만 서버가 해당 부분을 제공할 수 없습니다. 
   */
  RANGE_NOT_SATISFIABLE = '요청된 범위를 만족시킬 수 없습니다: 클라이언트가 리소스의 일부를 요청했지만 서버가 해당 부분을 제공할 수 없습니다. ',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * 기대 실패: 서버가 Expect 요청 헤더 필드의 요구 사항을 충족할 수 없습니다. 
   */
  EXPECTATION_FAILED = '기대 실패: 서버가 Expect 요청 헤더 필드의 요구 사항을 충족할 수 없습니다. ',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * 저는 주전자입니다: HTTP 프로토콜의 상황에서 어떤 시도로든 주전자를 이용하여 커피를 끓이면 오류 코드 "418 저는 주전자입니다"가 발생해야 합니다. 생성된 실체 내용은 짧고 둥글 수 있습니다. 
   */
  I_M_A_TEAPOT = '저는 주전자입니다: HTTP 프로토콜의 상황에서 어떤 시도로든 주전자를 이용하여 커피를 끓이면 오류 코드 "418 저는 주전자입니다"가 발생해야 합니다. 생성된 실체 내용은 짧고 둥글 수 있습니다. ',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * 잘못된 요청 방향: 요청이 응답을 제공할 수 없는 서버로 향했습니다. 이 상태 코드는 요청 URI에 포함된 체계와 권한의 조합에 대해 응답을 생성하도록 구성되지 않은 서버에서 전송될 수 있습니다. 
   */
  MISDIRECTED_REQUEST = '잘못된 요청 방향: 요청이 응답을 제공할 수 없는 서버로 향했습니다. 이 상태 코드는 요청 URI에 포함된 체계와 권한의 조합에 대해 응답을 생성하도록 구성되지 않은 서버에서 전송될 수 있습니다. ',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 처리 불가능한 개체: 요청이 올바르게 포맷되었지만 현재 형태로 처리할 수 없습니다. 지정된 매개변수가 검증 오류를 통과하지 못할 때 종종 사용됩니다. 
   */
  UNPROCESSABLE_ENTITY = '처리 불가능한 개체: 요청이 올바르게 포맷되었지만 현재 형태로 처리할 수 없습니다. 지정된 매개변수가 검증 오류를 통과하지 못할 때 종종 사용됩니다. ',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * 잠금됨: 요청된 리소스는 찾았지만 잠겨 있기 때문에 반환되지 않습니다. 
   */
  LOCKED = '잠금됨: 요청된 리소스는 찾았지만 잠겨 있기 때문에 반환되지 않습니다. ',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * 종속 실패: 이전 요청의 실패로 인해 현재 요청도 실패했습니다. 
   */
  FAILED_DEPENDENCY = '종속 실패: 이전 요청의 실패로 인해 현재 요청도 실패했습니다. ',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * 업그레이드 필요: 클라이언트는 TLS 1.0과 같은 업그레이드된 프로토콜을 사용하여 요청을 반복해야 합니다. 
   */
  UPGRADE_REQUIRED = '업그레이드 필요: 클라이언트는 TLS 1.0과 같은 업그레이드된 프로토콜을 사용하여 요청을 반복해야 합니다. ',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * 사전 조건 필요: 원본 서버는 요청이 조건부여되어야 합니다. 
   */
  PRECONDITION_REQUIRED = '사전 조건 필요: 원본 서버는 요청이 조건부여되어야 합니다. ',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * 너무 많은 요청: 사용자가 주어진 시간 동안 너무 많은 요청을 보냈습니다("속도 제한"). 
   */
  TOO_MANY_REQUESTS = '너무 많은 요청: 사용자가 주어진 시간 동안 너무 많은 요청을 보냈습니다("속도 제한"). ',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * 요청 헤더 필드가 너무 큼: 서버는 헤더 필드가 너무 커서 요청을 처리하려 하지 않습니다. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = '요청 헤더 필드가 너무 큼: 서버는 헤더 필드가 너무 커서 요청을 처리하려 하지 않습니다. ',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * 로그인 타임아웃 (Microsoft) : Microsoft의 확장 기능. 사용자의 세션이 만료되었음을 나타냅니다. 
   */
  LOGIN_TIMEOUT_MICROSOFT = '로그인 타임아웃 (Microsoft) : Microsoft의 확장 기능. 사용자의 세션이 만료되었음을 나타냅니다. ',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * "무응답 (Nginx) : Nginx 로그에서 사용되는 것으로 서버가 클라이언트에게 어떠한 정보도 반환하지 않고 연결을 종료한 것을 나타냅니다(악성 소프트웨어에 대한 억제로 유용합니다). " 
   */
  NO_RESPONSE_NGINX = '"무응답 (Nginx) : Nginx 로그에서 사용되는 것으로 서버가 클라이언트에게 어떠한 정보도 반환하지 않고 연결을 종료한 것을 나타냅니다(악성 소프트웨어에 대한 억제로 유용합니다). " ',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * 재시도 (Microsoft) : Microsoft 확장입니다. 적절한 동작을 수행한 후 요청을 재전송해야 합니다. 
   */
  RETRY_WITH_MICROSOFT = '재시도 (Microsoft) : Microsoft 확장입니다. 적절한 동작을 수행한 후 요청을 재전송해야 합니다. ',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Windows 자녀 보호 제어(Microsoft)에 의해 차단됨: Microsoft 확장. Windows 자녀 보호 제어가 켜져 있고 주어진 웹페이지의 접근을 차단하는 경우 이 오류가 발생합니다. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Windows 자녀 보호 제어(Microsoft)에 의해 차단됨: Microsoft 확장. Windows 자녀 보호 제어가 켜져 있고 주어진 웹페이지의 접근을 차단하는 경우 이 오류가 발생합니다. ',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Exchange ActiveSync에서 더 효율적인 서버를 사용하거나 서버가 사용자의 사서함에 접근할 수 없을 경우 사용됩니다.
   * "법률적 이유로 사용 불가": 서버가 법률적 제한 요청을 받아 작동할 수 없습니다. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Redirect (Microsoft): Exchange ActiveSync에서 더 효율적인 서버를 사용하거나 서버가 사용자의 사서함에 접근할 수 없을 경우 사용됩니다.\n\
"법률적 이유로 사용 불가": 서버가 법률적 제한 요청을 받아 작동할 수 없습니다. ',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * 요청 헤더가 너무 큽니다 (Nginx) : Nginx의 내부 코드로 431과 유사하지만 0.9.4 버전(2011년 1월 21일)에 더 일찍 도입되었습니다. 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = '요청 헤더가 너무 큽니다 (Nginx) : Nginx의 내부 코드로 431과 유사하지만 0.9.4 버전(2011년 1월 21일)에 더 일찍 도입되었습니다. ',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * 인증서 오류 (Nginx) : SSL 클라이언트 인증서 오류가 발생했을 때 Nginx의 내부 코드로, 로그와 오류 페이지 리디렉션에서 4XX 와 구별하기 위해 사용됩니다. 
   */
  CERT_ERROR_NGINX = '인증서 오류 (Nginx) : SSL 클라이언트 인증서 오류가 발생했을 때 Nginx의 내부 코드로, 로그와 오류 페이지 리디렉션에서 4XX 와 구별하기 위해 사용됩니다. ',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx) : 클라이언트가 인증서를 제공하지 않았을 때 Nginx의 내부 코드로 사용되어 로그 및 오류 페이지 리디렉션에서 4XX 와 구별됩니다. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx) : 클라이언트가 인증서를 제공하지 않았을 때 Nginx의 내부 코드로 사용되어 로그 및 오류 페이지 리디렉션에서 4XX 와 구별됩니다. ',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP에서 HTTPS로 (Nginx) : Nginx의 내부 코드로, HTTPS 포트로 전송된 순수 HTTP 요청에 사용되어 로그 및 오류 페이지 리디렉션에서 4XX와 구분됩니다. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP에서 HTTPS로 (Nginx) : Nginx의 내부 코드로, HTTPS 포트로 전송된 순수 HTTP 요청에 사용되어 로그 및 오류 페이지 리디렉션에서 4XX와 구분됩니다. ',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * 토큰이 만료되었거나 유효하지 않음 (Esri) : ArcGIS for Server에서 반환됩니다. 498 코드는 만료되었거나 유효하지 않은 토큰을 나타냅니다. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = '토큰이 만료되었거나 유효하지 않음 (Esri) : ArcGIS for Server에서 반환됩니다. 498 코드는 만료되었거나 유효하지 않은 토큰을 나타냅니다. ',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * 토큰 필요 (Esri) : ArcGIS for Server에 의해 반환됩니다. 499 코드는 토큰이 필요함을 나타내며 (토큰이 제출되지 않은 경우). 
   */
  TOKEN_REQUIRED_ESRI = '토큰 필요 (Esri) : ArcGIS for Server에 의해 반환됩니다. 499 코드는 토큰이 필요함을 나타내며 (토큰이 제출되지 않은 경우). ',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * 내부 서버 오류: 서버 자체의 오류에 대한 일반적인 상태. 
   */
  INTERNAL_SERVER_ERROR = '내부 서버 오류: 서버 자체의 오류에 대한 일반적인 상태. ',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * 구현되지 않음: 서버가 요청에 응답할 수 없습니다. 이는 보통 서버가 미래에 이 요청을 지원할 수 있음을 의미하며, 그렇지 않다면 4xx 상태 코드가 더 적절할 수 있습니다. 
   */
  NOT_IMPLEMENTED = '구현되지 않음: 서버가 요청에 응답할 수 없습니다. 이는 보통 서버가 미래에 이 요청을 지원할 수 있음을 의미하며, 그렇지 않다면 4xx 상태 코드가 더 적절할 수 있습니다. ',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * 배드 게이트웨이: 서버가 프록시로 작동할 때 상류 서버로부터 수용 가능한 응답을 받지 못했습니다. 
   */
  BAD_GATEWAY = '배드 게이트웨이: 서버가 프록시로 작동할 때 상류 서버로부터 수용 가능한 응답을 받지 못했습니다. ',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * 서비스 사용 불가: 서버가 다운되었고 요청을 받지 않습니다. 
   */
  SERVICE_UNAVAILABLE = '서비스 사용 불가: 서버가 다운되었고 요청을 받지 않습니다. ',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * 게이트웨이 타임아웃: 서버가 프록시 역할을 수행하고 상류 서버로부터의 응답을 제때 받지 못했습니다. 
   */
  GATEWAY_TIMEOUT = '게이트웨이 타임아웃: 서버가 프록시 역할을 수행하고 상류 서버로부터의 응답을 제때 받지 못했습니다. ',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * 지원되지 않는 HTTP 버전: 서버는 요청에서 사용된 HTTP 프로토콜 버전을 지원하지 않습니다. 
   */
  HTTP_VERSION_NOT_SUPPORTED = '지원되지 않는 HTTP 버전: 서버는 요청에서 사용된 HTTP 프로토콜 버전을 지원하지 않습니다. ',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant도 협상 중입니다: 요청에 대한 투명한 콘텐츠 협상으로 인해 순환 참조가 발생합니다. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant도 협상 중입니다: 요청에 대한 투명한 콘텐츠 협상으로 인해 순환 참조가 발생합니다. ',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * 저장 공간 부족: 사용자 또는 서버에 요청을 완료하기 위한 충분한 저장 할당량이 없습니다. 
   */
  INSUFFICIENT_STORAGE = '저장 공간 부족: 사용자 또는 서버에 요청을 완료하기 위한 충분한 저장 할당량이 없습니다. ',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * 루프 감지: 서버가 요청에서 무한 루프를 감지했습니다. 
   */
  LOOP_DETECTED = '루프 감지: 서버가 요청에서 무한 루프를 감지했습니다. ',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * 대역폭 제한 초과 (Apache bw/limited 확장) : 이 상태 코드는 어떤 RFC에도 규정되어 있지 않습니다. 그 사용 방법은 알려지지 않습니다. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = '대역폭 제한 초과 (Apache bw/limited 확장) : 이 상태 코드는 어떤 RFC에도 규정되어 있지 않습니다. 그 사용 방법은 알려지지 않습니다. ',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * 미확장: 요청을 완료하기 위해서는 더욱 확장이 필요합니다. 
   */
  NOT_EXTENDED = '미확장: 요청을 완료하기 위해서는 더욱 확장이 필요합니다. ',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * 네트워크 인증이 필요합니다. : 클라이언트는 요청을 보내기 전에 네트워크 인증을 완료해야 합니다. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = '네트워크 인증이 필요합니다. : 클라이언트는 요청을 보내기 전에 네트워크 인증을 완료해야 합니다. ',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * 미지의 오류 (Microsoft / CloudFlare) : 이 상태 코드는 어떤 RFC에도 규정되어 있지 않으며 특정 서비스(예를 들어 Microsoft Azure 및 CloudFlare 서버)에서 반환됩니다. "520 오류는 기본적으로 원본 서버가 예상치 못한 또는 허용되지 않거나 해석할 수 없는(프로토콜 위반 또는 빈 응답) 무언가를 반환할 때의 '전반적인' 응답입니다." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = '미지의 오류 (Microsoft / CloudFlare) : 이 상태 코드는 어떤 RFC에도 규정되어 있지 않으며 특정 서비스(예를 들어 Microsoft Azure 및 CloudFlare 서버)에서 반환됩니다. "520 오류는 기본적으로 원본 서버가 예상치 못한 또는 허용되지 않거나 해석할 수 없는(프로토콜 위반 또는 빈 응답) 무언가를 반환할 때의 \'전반적인\' 응답입니다." ',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * 웹 서버 다운(CloudFlare) : 원래 서버가 CloudFlare로부터의 연결을 거부했습니다. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = '웹 서버 다운(CloudFlare) : 원래 서버가 CloudFlare로부터의 연결을 거부했습니다. ',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * 연결 시간 초과 (CloudFlare) : CloudFlare가 원본 서버와 TCP 핸드셰이크를 협상할 수 없습니다. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = '연결 시간 초과 (CloudFlare) : CloudFlare가 원본 서버와 TCP 핸드셰이크를 협상할 수 없습니다. ',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * 원본에 도달할 수 없음(CloudFlare) : CloudFlare가 원본 서버에 도달할 수 없습니다. 예를 들어 원본 서버의 DNS 레코드가 잘못되었을 경우. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = '원본에 도달할 수 없음(CloudFlare) : CloudFlare가 원본 서버에 도달할 수 없습니다. 예를 들어 원본 서버의 DNS 레코드가 잘못되었을 경우. ',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Timeout 발생 (CloudFlare) : CloudFlare는 원본 서버에 TCP 연결을 완료할 수 있었지만 적시에 HTTP 응답을 받지 못했습니다. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'Timeout 발생 (CloudFlare) : CloudFlare는 원본 서버에 TCP 연결을 완료할 수 있었지만 적시에 HTTP 응답을 받지 못했습니다. ',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare) : CloudFlare 는 원본 서버와 SSL/TLS 핸드셰이크를 협상할 수 없습니다. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare) : CloudFlare 는 원본 서버와 SSL/TLS 핸드셰이크를 협상할 수 없습니다. ',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * 유효하지 않은 SSL 인증서 (CloudFlare) : CloudFlare는 원본 서버가 제공한 SSL/TLS 인증서를 검증할 수 없습니다. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = '유효하지 않은 SSL 인증서 (CloudFlare) : CloudFlare는 원본 서버가 제공한 SSL/TLS 인증서를 검증할 수 없습니다. ',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun 오류 (CloudFlare) : WAN 연결이 수립된 후 요청이 타임아웃되거나 실패했습니다. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun 오류 (CloudFlare) : WAN 연결이 수립된 후 요청이 타임아웃되거나 실패했습니다. '
}

export enum HttpStatusDescriptionByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * 계속: 서버가 요청 헤더를 받았으며 클라이언트는 요청 본문을 전송해야 합니다. 
   */
  h100 = '계속: 서버가 요청 헤더를 받았으며 클라이언트는 요청 본문을 전송해야 합니다. ',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * 프로토콜 전환: 요청자는 서버에 프로토콜을 전환하도록 요청했으며 서버는 이를 수행할 것임을 확인합니다. 
   */
  h101 = '프로토콜 전환: 요청자는 서버에 프로토콜을 전환하도록 요청했으며 서버는 이를 수행할 것임을 확인합니다. ',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * 처리 중: 서버가 요청을 받았고 처리 중이며 아직 사용 가능한 응답이 없습니다. 
   */
  h102 = '처리 중: 서버가 요청을 받았고 처리 중이며 아직 사용 가능한 응답이 없습니다. ',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK : 성공적인 HTTP 요청에 대한 표준 응답. 
   */
  h200 = 'OK : 성공적인 HTTP 요청에 대한 표준 응답. ',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * 생성됨: 요청이 이행되었으며 새로운 리소스가 생성되었습니다. 
   */
  h201 = '생성됨: 요청이 이행되었으며 새로운 리소스가 생성되었습니다. ',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * 승인됨: 요청이 수락되었지만 아직 처리되지 않았습니다. 이 코드는 요청이 성공적으로 처리될 것이라는 보장을 하지 않습니다. 
   */
  h202 = '승인됨: 요청이 수락되었지만 아직 처리되지 않았습니다. 이 코드는 요청이 성공적으로 처리될 것이라는 보장을 하지 않습니다. ',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * 비권위적인 정보: HTTP 1.1. 서버는 요청을 성공적으로 처리했지만 다른 소스에서 정보를 반환하고 있습니다. 
   */
  h203 = '비권위적인 정보: HTTP 1.1. 서버는 요청을 성공적으로 처리했지만 다른 소스에서 정보를 반환하고 있습니다. ',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * "컨텐츠 없음: 서버가 요청을 수락하였지만 어떠한 컨텐츠도 반환하지 않습니다. 이는 종종 DELETE 요청에 대한 응답으로 사용됩니다." 
   */
  h204 = '"컨텐츠 없음: 서버가 요청을 수락하였지만 어떠한 컨텐츠도 반환하지 않습니다. 이는 종종 DELETE 요청에 대한 응답으로 사용됩니다." ',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * 리셋 컨텐츠: 204 'No Content' 응답과 유사하지만, 이 응답은 요청자가 문서 뷰를 리셋하도록 요구합니다. 
   */
  h205 = '리셋 컨텐츠: 204 \'No Content\' 응답과 유사하지만, 이 응답은 요청자가 문서 뷰를 리셋하도록 요구합니다. ',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * 부분적인 내용: 서버는 클라이언트가 Range 헤더를 통해 요청한 내용의 일부만 제공합니다. 
   */
  h206 = '부분적인 내용: 서버는 클라이언트가 Range 헤더를 통해 요청한 내용의 일부만 제공합니다. ',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * 멀티 상태 : 뒤따르는 메시지 본문은 XML 메시지이며, 얼마나 많은 서브 요청이 이루어졌는지에 따라 여러 개의 개별 응답 코드를 포함할 수 있습니다. 
   */
  h207 = '멀티 상태 : 뒤따르는 메시지 본문은 XML 메시지이며, 얼마나 많은 서브 요청이 이루어졌는지에 따라 여러 개의 개별 응답 코드를 포함할 수 있습니다. ',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * 이미 보고되었습니다: DAV 바인딩의 구성원은 이 요청에 대한 이전 응답에서 이미 열거되었고 다시 포함되지 않습니다. 
   */
  h208 = '이미 보고되었습니다: DAV 바인딩의 구성원은 이 요청에 대한 이전 응답에서 이미 열거되었고 다시 포함되지 않습니다. ',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM 사용 : 서버는 자원에 대한 GET 요청을 수행했으며, 응답은 현재 인스턴스에 하나 이상의 인스턴스 조작이 적용된 결과의 표현입니다. 
   */
  h226 = 'IM 사용 : 서버는 자원에 대한 GET 요청을 수행했으며, 응답은 현재 인스턴스에 하나 이상의 인스턴스 조작이 적용된 결과의 표현입니다. ',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * 다중 선택: 클라이언트는 다양한 옵션 중 하나를 선택하여 작업할 수 있습니다.
   */
  h300 = '다중 선택: 클라이언트는 다양한 옵션 중 하나를 선택하여 작업할 수 있습니다.',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * 영구 이동: 리소스가 이동되었으며 모든 후속 요청은 그 새로운 URI를 참조해야 합니다. 
   */
  h301 = '영구 이동: 리소스가 이동되었으며 모든 후속 요청은 그 새로운 URI를 참조해야 합니다. ',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * 발견: HTTP 1.0 규격은 이 상태를 "임시로 이동"으로 기술했지만, 인기 있는 브라우저는 303에 의도된 동작과 비슷하게 이 상태에 응답합니다. 자원은 반환된 URI를 참조하여 검색할 수 있습니다. 
   */
  h302 = '발견: HTTP 1.0 규격은 이 상태를 "임시로 이동"으로 기술했지만, 인기 있는 브라우저는 303에 의도된 동작과 비슷하게 이 상태에 응답합니다. 자원은 반환된 URI를 참조하여 검색할 수 있습니다. ',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * 다른 것을 참조하십시오: 자원은 GET 방법을 사용하여 다른 URI를 통해 검색할 수 있습니다. POST, PUT 또는 DELETE 요청에 대한 응답으로 받았을 때, 일반적으로 서버가 요청을 성공적으로 처리하고 클라이언트를 정보 제공 단말로 보내는 것으로 간주할 수 있습니다. 
   */
  h303 = '다른 것을 참조하십시오: 자원은 GET 방법을 사용하여 다른 URI를 통해 검색할 수 있습니다. POST, PUT 또는 DELETE 요청에 대한 응답으로 받았을 때, 일반적으로 서버가 요청을 성공적으로 처리하고 클라이언트를 정보 제공 단말로 보내는 것으로 간주할 수 있습니다. ',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * 수정되지 않음: If-Modified-Since 또는 If-Match 헤더에서 지정된 버전 이후에 리소스가 수정되지 않았습니다. 응답 본문에서는 리소스가 반환되지 않습니다. 
   */
  h304 = '수정되지 않음: If-Modified-Since 또는 If-Match 헤더에서 지정된 버전 이후에 리소스가 수정되지 않았습니다. 응답 본문에서는 리소스가 반환되지 않습니다. ',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * 프록시 사용: HTTP 1.1. 자원은 프록시를 통해서만 접근 가능하며, 주소는 응답에서 제공됩니다. 
   */
  h305 = '프록시 사용: HTTP 1.1. 자원은 프록시를 통해서만 접근 가능하며, 주소는 응답에서 제공됩니다. ',
  /**
   * h306: 
   *
   * Empty
   * 스위치 프록시: HTTP 1.1에서 폐기되었습니다. 이전에는 지정된 프록시를 사용하여 후속 요청을 보내야 한다는 것을 의미했습니다. 
   */
  h306 = '스위치 프록시: HTTP 1.1에서 폐기되었습니다. 이전에는 지정된 프록시를 사용하여 후속 요청을 보내야 한다는 것을 의미했습니다. ',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * 임시 리다이렉트: HTTP 1.1. 요청은 응답에서 제공된 URI로 재전송되어야 하지만, 향후 요청은 여전히 원래 URI를 호출해야 합니다. 
   */
  h307 = '임시 리다이렉트: HTTP 1.1. 요청은 응답에서 제공된 URI로 재전송되어야 하지만, 향후 요청은 여전히 원래 URI를 호출해야 합니다. ',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * "Resume Incomplete (Google)": 이 코드는 Resumable HTTP Requests Proposal에서 취소된 PUT 또는 POST 요청을 재개하는 데 사용됩니다.
   * "영구 리디렉션": 요청 및 모든 향후 요청은 응답에서 제공된 URI를 사용하여 다시 전송되어야 합니다. 
   */
  h308 = '"Resume Incomplete (Google)": 이 코드는 Resumable HTTP Requests Proposal에서 취소된 PUT 또는 POST 요청을 재개하는 데 사용됩니다.\n\
"영구 리디렉션": 요청 및 모든 향후 요청은 응답에서 제공된 URI를 사용하여 다시 전송되어야 합니다. ',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * 잘못된 요청: 요청의 구문이 잘못되어 요청을 충족시킬 수 없습니다. 
   */
  h400 = '잘못된 요청: 요청의 구문이 잘못되어 요청을 충족시킬 수 없습니다. ',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * 미인가: 요청자가 해당 리소스에 액세스할 권한이 없습니다. 이는 403과 유사하지만 인증이 기대되지만 실패하거나 제공되지 않은 경우에 사용됩니다. 
   */
  h401 = '미인가: 요청자가 해당 리소스에 액세스할 권한이 없습니다. 이는 403과 유사하지만 인증이 기대되지만 실패하거나 제공되지 않은 경우에 사용됩니다. ',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * 결제가 필요합니다: 미래 사용을 위해 예약되었습니다. 일부 웹 서비스는 이를 클라이언트가 너무 많은 요청을 보냈다는 표시로 사용합니다. 
   */
  h402 = '결제가 필요합니다: 미래 사용을 위해 예약되었습니다. 일부 웹 서비스는 이를 클라이언트가 너무 많은 요청을 보냈다는 표시로 사용합니다. ',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * 금지: 요청이 올바른 형식으로 이루어졌지만 서버가 요청된 자원을 제공 거부합니다. 401과 달리 인증을 하더라도 서버의 응답에 차이가 없습니다. 
   */
  h403 = '금지: 요청이 올바른 형식으로 이루어졌지만 서버가 요청된 자원을 제공 거부합니다. 401과 달리 인증을 하더라도 서버의 응답에 차이가 없습니다. ',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * 찾을 수 없음: 요청한 자원을 찾을 수 없습니다. 이는 서버에서 요청된 모든 무효한 URI에 대해 종종 전반적으로 사용됩니다. 
   */
  h404 = '찾을 수 없음: 요청한 자원을 찾을 수 없습니다. 이는 서버에서 요청된 모든 무효한 URI에 대해 종종 전반적으로 사용됩니다. ',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * 방법이 허용되지 않음: 자원이 허용되지 않는 방법으로 요청되었습니다. 예를 들어 자원이 GET 메서드만 지원하는데 POST 메서드를 사용하여 자원을 요청하는 경우. 
   */
  h405 = '방법이 허용되지 않음: 자원이 허용되지 않는 방법으로 요청되었습니다. 예를 들어 자원이 GET 메서드만 지원하는데 POST 메서드를 사용하여 자원을 요청하는 경우. ',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * 허용되지 않음: 자원은 유효하지만 요청의 Accept 헤더에서 지정된 형식으로 제공될 수 없습니다. 
   */
  h406 = '허용되지 않음: 자원은 유효하지만 요청의 Accept 헤더에서 지정된 형식으로 제공될 수 없습니다. ',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * 프록시 인증이 필요합니다: 요청을 충족시키기 전에 프록시에 대한 인증이 필요합니다. 
   */
  h407 = '프록시 인증이 필요합니다: 요청을 충족시키기 전에 프록시에 대한 인증이 필요합니다. ',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * 요청 타임아웃: 서버가 클라이언트의 요청을 기다리는 동안 타임아웃되었습니다. 클라이언트는 요청을 반복할 수 있습니다. 
   */
  h408 = '요청 타임아웃: 서버가 클라이언트의 요청을 기다리는 동안 타임아웃되었습니다. 클라이언트는 요청을 반복할 수 있습니다. ',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * 충돌: 요청 매개변수에 충돌이 있기 때문에 요청을 완료할 수 없습니다. 
   */
  h409 = '충돌: 요청 매개변수에 충돌이 있기 때문에 요청을 완료할 수 없습니다. ',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * 사라짐: 요청된 URI에서 리소스가 더 이상 사용할 수 없으며 리디렉션도 제공되지 않습니다. 
   */
  h410 = '사라짐: 요청된 URI에서 리소스가 더 이상 사용할 수 없으며 리디렉션도 제공되지 않습니다. ',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * 길이 요구사항: HTTP 프로토콜의 상황에서 요청은 자원에서 필요로 하는 내용의 길이를 지정하지 않았습니다. 
   */
  h411 = '길이 요구사항: HTTP 프로토콜의 상황에서 요청은 자원에서 필요로 하는 내용의 길이를 지정하지 않았습니다. ',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * 사전 조건이 실패했습니다: 서버는 클라이언트에 의해 지정된 사전 조건 중 하나를 충족하지 못합니다. 
   */
  h412 = '사전 조건이 실패했습니다: 서버는 클라이언트에 의해 지정된 사전 조건 중 하나를 충족하지 못합니다. ',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * HTTP(하이퍼텍스트 전송 프로토콜) 상황에서: "Request entity too large: The request is larger than what the server is able to process."는 "요청 엔티티가 너무 큼: 요청 내용이 서버가 처리할 수 있는 것보다 큽니다."로 번역됩니다. 
   */
  h413 = 'HTTP(하이퍼텍스트 전송 프로토콜) 상황에서: "Request entity too large: The request is larger than what the server is able to process."는 "요청 엔티티가 너무 큼: 요청 내용이 서버가 처리할 수 있는 것보다 큽니다."로 번역됩니다. ',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * 요청 URI가 너무 길다: 요청에 제공된 URI가 너무 길어 서버가 처리할 수 없습니다. GET 요청의 URI에 너무 많은 데이터가 인코딩되었을 때 자주 사용되며 이 경우 POST 요청을 사용해야 합니다. 
   */
  h414 = '요청 URI가 너무 길다: 요청에 제공된 URI가 너무 길어 서버가 처리할 수 없습니다. GET 요청의 URI에 너무 많은 데이터가 인코딩되었을 때 자주 사용되며 이 경우 POST 요청을 사용해야 합니다. ',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * 미지원 미디어 타입: 클라이언트에서 제공한 데이터의 미디어 타입이 서버에서 지원되지 않습니다. 
   */
  h415 = '미지원 미디어 타입: 클라이언트에서 제공한 데이터의 미디어 타입이 서버에서 지원되지 않습니다. ',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * 요청된 범위를 만족시킬 수 없습니다: 클라이언트가 리소스의 일부를 요청했지만 서버가 해당 부분을 제공할 수 없습니다. 
   */
  h416 = '요청된 범위를 만족시킬 수 없습니다: 클라이언트가 리소스의 일부를 요청했지만 서버가 해당 부분을 제공할 수 없습니다. ',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * 기대 실패: 서버가 Expect 요청 헤더 필드의 요구 사항을 충족할 수 없습니다. 
   */
  h417 = '기대 실패: 서버가 Expect 요청 헤더 필드의 요구 사항을 충족할 수 없습니다. ',
  /**
   * h418: 
   *
   * Empty
   * 저는 주전자입니다: HTTP 프로토콜의 상황에서 어떤 시도로든 주전자를 이용하여 커피를 끓이면 오류 코드 "418 저는 주전자입니다"가 발생해야 합니다. 생성된 실체 내용은 짧고 둥글 수 있습니다. 
   */
  h418 = '저는 주전자입니다: HTTP 프로토콜의 상황에서 어떤 시도로든 주전자를 이용하여 커피를 끓이면 오류 코드 "418 저는 주전자입니다"가 발생해야 합니다. 생성된 실체 내용은 짧고 둥글 수 있습니다. ',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * 잘못된 요청 방향: 요청이 응답을 제공할 수 없는 서버로 향했습니다. 이 상태 코드는 요청 URI에 포함된 체계와 권한의 조합에 대해 응답을 생성하도록 구성되지 않은 서버에서 전송될 수 있습니다. 
   */
  h421 = '잘못된 요청 방향: 요청이 응답을 제공할 수 없는 서버로 향했습니다. 이 상태 코드는 요청 URI에 포함된 체계와 권한의 조합에 대해 응답을 생성하도록 구성되지 않은 서버에서 전송될 수 있습니다. ',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 처리 불가능한 개체: 요청이 올바르게 포맷되었지만 현재 형태로 처리할 수 없습니다. 지정된 매개변수가 검증 오류를 통과하지 못할 때 종종 사용됩니다. 
   */
  h422 = '처리 불가능한 개체: 요청이 올바르게 포맷되었지만 현재 형태로 처리할 수 없습니다. 지정된 매개변수가 검증 오류를 통과하지 못할 때 종종 사용됩니다. ',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * 잠금됨: 요청된 리소스는 찾았지만 잠겨 있기 때문에 반환되지 않습니다. 
   */
  h423 = '잠금됨: 요청된 리소스는 찾았지만 잠겨 있기 때문에 반환되지 않습니다. ',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * 종속 실패: 이전 요청의 실패로 인해 현재 요청도 실패했습니다. 
   */
  h424 = '종속 실패: 이전 요청의 실패로 인해 현재 요청도 실패했습니다. ',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * 업그레이드 필요: 클라이언트는 TLS 1.0과 같은 업그레이드된 프로토콜을 사용하여 요청을 반복해야 합니다. 
   */
  h426 = '업그레이드 필요: 클라이언트는 TLS 1.0과 같은 업그레이드된 프로토콜을 사용하여 요청을 반복해야 합니다. ',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * 사전 조건 필요: 원본 서버는 요청이 조건부여되어야 합니다. 
   */
  h428 = '사전 조건 필요: 원본 서버는 요청이 조건부여되어야 합니다. ',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * 너무 많은 요청: 사용자가 주어진 시간 동안 너무 많은 요청을 보냈습니다("속도 제한"). 
   */
  h429 = '너무 많은 요청: 사용자가 주어진 시간 동안 너무 많은 요청을 보냈습니다("속도 제한"). ',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * 요청 헤더 필드가 너무 큼: 서버는 헤더 필드가 너무 커서 요청을 처리하려 하지 않습니다. 
   */
  h431 = '요청 헤더 필드가 너무 큼: 서버는 헤더 필드가 너무 커서 요청을 처리하려 하지 않습니다. ',
  /**
   * h440: 
   *
   * Empty
   * 로그인 타임아웃 (Microsoft) : Microsoft의 확장 기능. 사용자의 세션이 만료되었음을 나타냅니다. 
   */
  h440 = '로그인 타임아웃 (Microsoft) : Microsoft의 확장 기능. 사용자의 세션이 만료되었음을 나타냅니다. ',
  /**
   * h444: 
   *
   * Empty
   * "무응답 (Nginx) : Nginx 로그에서 사용되는 것으로 서버가 클라이언트에게 어떠한 정보도 반환하지 않고 연결을 종료한 것을 나타냅니다(악성 소프트웨어에 대한 억제로 유용합니다). " 
   */
  h444 = '"무응답 (Nginx) : Nginx 로그에서 사용되는 것으로 서버가 클라이언트에게 어떠한 정보도 반환하지 않고 연결을 종료한 것을 나타냅니다(악성 소프트웨어에 대한 억제로 유용합니다). " ',
  /**
   * h449: 
   *
   * Empty
   * 재시도 (Microsoft) : Microsoft 확장입니다. 적절한 동작을 수행한 후 요청을 재전송해야 합니다. 
   */
  h449 = '재시도 (Microsoft) : Microsoft 확장입니다. 적절한 동작을 수행한 후 요청을 재전송해야 합니다. ',
  /**
   * h450: 
   *
   * Empty
   * Windows 자녀 보호 제어(Microsoft)에 의해 차단됨: Microsoft 확장. Windows 자녀 보호 제어가 켜져 있고 주어진 웹페이지의 접근을 차단하는 경우 이 오류가 발생합니다. 
   */
  h450 = 'Windows 자녀 보호 제어(Microsoft)에 의해 차단됨: Microsoft 확장. Windows 자녀 보호 제어가 켜져 있고 주어진 웹페이지의 접근을 차단하는 경우 이 오류가 발생합니다. ',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Exchange ActiveSync에서 더 효율적인 서버를 사용하거나 서버가 사용자의 사서함에 접근할 수 없을 경우 사용됩니다.
   * "법률적 이유로 사용 불가": 서버가 법률적 제한 요청을 받아 작동할 수 없습니다. 
   */
  h451 = 'Redirect (Microsoft): Exchange ActiveSync에서 더 효율적인 서버를 사용하거나 서버가 사용자의 사서함에 접근할 수 없을 경우 사용됩니다.\n\
"법률적 이유로 사용 불가": 서버가 법률적 제한 요청을 받아 작동할 수 없습니다. ',
  /**
   * h494: 
   *
   * Empty
   * 요청 헤더가 너무 큽니다 (Nginx) : Nginx의 내부 코드로 431과 유사하지만 0.9.4 버전(2011년 1월 21일)에 더 일찍 도입되었습니다. 
   */
  h494 = '요청 헤더가 너무 큽니다 (Nginx) : Nginx의 내부 코드로 431과 유사하지만 0.9.4 버전(2011년 1월 21일)에 더 일찍 도입되었습니다. ',
  /**
   * h495: 
   *
   * Empty
   * 인증서 오류 (Nginx) : SSL 클라이언트 인증서 오류가 발생했을 때 Nginx의 내부 코드로, 로그와 오류 페이지 리디렉션에서 4XX 와 구별하기 위해 사용됩니다. 
   */
  h495 = '인증서 오류 (Nginx) : SSL 클라이언트 인증서 오류가 발생했을 때 Nginx의 내부 코드로, 로그와 오류 페이지 리디렉션에서 4XX 와 구별하기 위해 사용됩니다. ',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx) : 클라이언트가 인증서를 제공하지 않았을 때 Nginx의 내부 코드로 사용되어 로그 및 오류 페이지 리디렉션에서 4XX 와 구별됩니다. 
   */
  h496 = 'No Cert (Nginx) : 클라이언트가 인증서를 제공하지 않았을 때 Nginx의 내부 코드로 사용되어 로그 및 오류 페이지 리디렉션에서 4XX 와 구별됩니다. ',
  /**
   * h497: 
   *
   * Empty
   * HTTP에서 HTTPS로 (Nginx) : Nginx의 내부 코드로, HTTPS 포트로 전송된 순수 HTTP 요청에 사용되어 로그 및 오류 페이지 리디렉션에서 4XX와 구분됩니다. 
   */
  h497 = 'HTTP에서 HTTPS로 (Nginx) : Nginx의 내부 코드로, HTTPS 포트로 전송된 순수 HTTP 요청에 사용되어 로그 및 오류 페이지 리디렉션에서 4XX와 구분됩니다. ',
  /**
   * h498: 
   *
   * Empty
   * 토큰이 만료되었거나 유효하지 않음 (Esri) : ArcGIS for Server에서 반환됩니다. 498 코드는 만료되었거나 유효하지 않은 토큰을 나타냅니다. 
   */
  h498 = '토큰이 만료되었거나 유효하지 않음 (Esri) : ArcGIS for Server에서 반환됩니다. 498 코드는 만료되었거나 유효하지 않은 토큰을 나타냅니다. ',
  /**
   * h499: 
   *
   * Empty
   * 토큰 필요 (Esri) : ArcGIS for Server에 의해 반환됩니다. 499 코드는 토큰이 필요함을 나타내며 (토큰이 제출되지 않은 경우). 
   */
  h499 = '토큰 필요 (Esri) : ArcGIS for Server에 의해 반환됩니다. 499 코드는 토큰이 필요함을 나타내며 (토큰이 제출되지 않은 경우). ',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * 내부 서버 오류: 서버 자체의 오류에 대한 일반적인 상태. 
   */
  h500 = '내부 서버 오류: 서버 자체의 오류에 대한 일반적인 상태. ',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * 구현되지 않음: 서버가 요청에 응답할 수 없습니다. 이는 보통 서버가 미래에 이 요청을 지원할 수 있음을 의미하며, 그렇지 않다면 4xx 상태 코드가 더 적절할 수 있습니다. 
   */
  h501 = '구현되지 않음: 서버가 요청에 응답할 수 없습니다. 이는 보통 서버가 미래에 이 요청을 지원할 수 있음을 의미하며, 그렇지 않다면 4xx 상태 코드가 더 적절할 수 있습니다. ',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * 배드 게이트웨이: 서버가 프록시로 작동할 때 상류 서버로부터 수용 가능한 응답을 받지 못했습니다. 
   */
  h502 = '배드 게이트웨이: 서버가 프록시로 작동할 때 상류 서버로부터 수용 가능한 응답을 받지 못했습니다. ',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * 서비스 사용 불가: 서버가 다운되었고 요청을 받지 않습니다. 
   */
  h503 = '서비스 사용 불가: 서버가 다운되었고 요청을 받지 않습니다. ',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * 게이트웨이 타임아웃: 서버가 프록시 역할을 수행하고 상류 서버로부터의 응답을 제때 받지 못했습니다. 
   */
  h504 = '게이트웨이 타임아웃: 서버가 프록시 역할을 수행하고 상류 서버로부터의 응답을 제때 받지 못했습니다. ',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * 지원되지 않는 HTTP 버전: 서버는 요청에서 사용된 HTTP 프로토콜 버전을 지원하지 않습니다. 
   */
  h505 = '지원되지 않는 HTTP 버전: 서버는 요청에서 사용된 HTTP 프로토콜 버전을 지원하지 않습니다. ',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant도 협상 중입니다: 요청에 대한 투명한 콘텐츠 협상으로 인해 순환 참조가 발생합니다. 
   */
  h506 = 'Variant도 협상 중입니다: 요청에 대한 투명한 콘텐츠 협상으로 인해 순환 참조가 발생합니다. ',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * 저장 공간 부족: 사용자 또는 서버에 요청을 완료하기 위한 충분한 저장 할당량이 없습니다. 
   */
  h507 = '저장 공간 부족: 사용자 또는 서버에 요청을 완료하기 위한 충분한 저장 할당량이 없습니다. ',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * 루프 감지: 서버가 요청에서 무한 루프를 감지했습니다. 
   */
  h508 = '루프 감지: 서버가 요청에서 무한 루프를 감지했습니다. ',
  /**
   * h509: 
   *
   * Empty
   * 대역폭 제한 초과 (Apache bw/limited 확장) : 이 상태 코드는 어떤 RFC에도 규정되어 있지 않습니다. 그 사용 방법은 알려지지 않습니다. 
   */
  h509 = '대역폭 제한 초과 (Apache bw/limited 확장) : 이 상태 코드는 어떤 RFC에도 규정되어 있지 않습니다. 그 사용 방법은 알려지지 않습니다. ',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * 미확장: 요청을 완료하기 위해서는 더욱 확장이 필요합니다. 
   */
  h510 = '미확장: 요청을 완료하기 위해서는 더욱 확장이 필요합니다. ',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * 네트워크 인증이 필요합니다. : 클라이언트는 요청을 보내기 전에 네트워크 인증을 완료해야 합니다. 
   */
  h511 = '네트워크 인증이 필요합니다. : 클라이언트는 요청을 보내기 전에 네트워크 인증을 완료해야 합니다. ',
  /**
   * h520: 
   *
   * Empty
   * 미지의 오류 (Microsoft / CloudFlare) : 이 상태 코드는 어떤 RFC에도 규정되어 있지 않으며 특정 서비스(예를 들어 Microsoft Azure 및 CloudFlare 서버)에서 반환됩니다. "520 오류는 기본적으로 원본 서버가 예상치 못한 또는 허용되지 않거나 해석할 수 없는(프로토콜 위반 또는 빈 응답) 무언가를 반환할 때의 '전반적인' 응답입니다." 
   */
  h520 = '미지의 오류 (Microsoft / CloudFlare) : 이 상태 코드는 어떤 RFC에도 규정되어 있지 않으며 특정 서비스(예를 들어 Microsoft Azure 및 CloudFlare 서버)에서 반환됩니다. "520 오류는 기본적으로 원본 서버가 예상치 못한 또는 허용되지 않거나 해석할 수 없는(프로토콜 위반 또는 빈 응답) 무언가를 반환할 때의 \'전반적인\' 응답입니다." ',
  /**
   * h521: 
   *
   * Empty
   * 웹 서버 다운(CloudFlare) : 원래 서버가 CloudFlare로부터의 연결을 거부했습니다. 
   */
  h521 = '웹 서버 다운(CloudFlare) : 원래 서버가 CloudFlare로부터의 연결을 거부했습니다. ',
  /**
   * h522: 
   *
   * Empty
   * 연결 시간 초과 (CloudFlare) : CloudFlare가 원본 서버와 TCP 핸드셰이크를 협상할 수 없습니다. 
   */
  h522 = '연결 시간 초과 (CloudFlare) : CloudFlare가 원본 서버와 TCP 핸드셰이크를 협상할 수 없습니다. ',
  /**
   * h523: 
   *
   * Empty
   * 원본에 도달할 수 없음(CloudFlare) : CloudFlare가 원본 서버에 도달할 수 없습니다. 예를 들어 원본 서버의 DNS 레코드가 잘못되었을 경우. 
   */
  h523 = '원본에 도달할 수 없음(CloudFlare) : CloudFlare가 원본 서버에 도달할 수 없습니다. 예를 들어 원본 서버의 DNS 레코드가 잘못되었을 경우. ',
  /**
   * h524: 
   *
   * Empty
   * Timeout 발생 (CloudFlare) : CloudFlare는 원본 서버에 TCP 연결을 완료할 수 있었지만 적시에 HTTP 응답을 받지 못했습니다. 
   */
  h524 = 'Timeout 발생 (CloudFlare) : CloudFlare는 원본 서버에 TCP 연결을 완료할 수 있었지만 적시에 HTTP 응답을 받지 못했습니다. ',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare) : CloudFlare 는 원본 서버와 SSL/TLS 핸드셰이크를 협상할 수 없습니다. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare) : CloudFlare 는 원본 서버와 SSL/TLS 핸드셰이크를 협상할 수 없습니다. ',
  /**
   * h526: 
   *
   * Empty
   * 유효하지 않은 SSL 인증서 (CloudFlare) : CloudFlare는 원본 서버가 제공한 SSL/TLS 인증서를 검증할 수 없습니다. 
   */
  h526 = '유효하지 않은 SSL 인증서 (CloudFlare) : CloudFlare는 원본 서버가 제공한 SSL/TLS 인증서를 검증할 수 없습니다. ',
  /**
   * h527: 
   *
   * Empty
   * Railgun 오류 (CloudFlare) : WAN 연결이 수립된 후 요청이 타임아웃되거나 실패했습니다. 
   */
  h527 = 'Railgun 오류 (CloudFlare) : WAN 연결이 수립된 후 요청이 타임아웃되거나 실패했습니다. '
}
