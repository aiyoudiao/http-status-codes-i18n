/**
* © 2024 aiyoudiao
*
* Этот файл был создан aiyoudiao и содержит много трудностей и мудрости.
*
* Вы можете свободно использовать, модифицировать и распространять этот файл, но, пожалуйста, сохраните это заявление об авторском праве.
*
* Если вы считаете, что этот файл полезен для вас, дайте мне звезду или подпишитесь на меня ツ.
*
* Контактная информация:
* - Электронная почта:,newdiao@163.com,
* - GitHub:,https://github.com/aiyoudiao,
*
* Удачного программирования! Помните, код - это поэзия, а фронтенд - это искусство. ツ
*/
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Продолжайте: Сервер получил заголовки запроса, и клиенту следует продолжить отправлять тело запроса. 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Переключение протоколов: Запросивший попросил сервер переключить протоколы, и сервер подтвердил, что это сделает. 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Обработка: Сервер получил запрос и обрабатывает его, но пока нет доступного ответа. 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Стандартный ответ для успешных HTTP-запросов.
   * Успешно: Стандартный ответ для успешных HTTP-запросов. 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Создано: Запрос выполнен и новый ресурс создан. 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Принято: Запрос был принят, но еще не обработан. Этот код не гарантирует успешную обработку запроса. 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Несанкционированная информация: HTTP 1.1. Сервер успешно обработал запрос, но возвращает информацию из другого источника. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Без содержимого: Сервер принял запрос, но не возвращает никакого содержимого. Это часто используется в качестве ответа на запрос DELETE. 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Сбросить содержимое: Похоже на ответ 204 "Нет содержимого", но этот ответ требует от запрашивающего сбросить вид документа. 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Частичное содержимое: Сервер предоставляет только часть содержимого, как запрошено клиентом с помощью заголовка диапазона. 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Мультистатус: Тело сообщения, которое следует, представляет собой XML-сообщение и может содержать ряд отдельных кодов ответа, в зависимости от того, сколько было сделано подзапросов. 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Уже сообщалось: Члены привязки DAV уже перечислялись в предыдущем ответе на этот запрос и не включаются снова. 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM использовано: Сервер выполнил GET-запрос ресурса, и ответ представляет собой отображение результата одной или нескольких манипуляций экземпляра, примененных к текущему экземпляру. 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Множественный выбор: У клиента есть возможность выбрать один из нескольких вариантов в сценарии протокола передачи гипертекста. 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Постоянно перемещено: ресурс был перемещен, и все последующие запросы следует ссылаться на его новый URI. 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Обнаружено: Спецификация HTTP 1.0 описывает этот статус как «Временное перемещение», но популярные браузеры реагируют на этот статус аналогично поведению, предназначенному для 303. Ресурс можно получить, ссылаясь на возвращаемый URI. 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Смотрите другое: Ресурс может быть получен, следуя другим URI с помощью метода GET. Когда получен в ответ на запрос POST, PUT или DELETE, обычно можно предположить, что сервер успешно обработал запрос и направляет клиента на информационный конечный пункт. 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Не модифицировано: ресурс не был модифицирован с версии, указанной в заголовках If-Modified-Since или If-Match. Ресурс не будет возвращен в теле ответа. 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Используйте прокси: HTTP 1.1. Ресурс доступен только через прокси, и адрес предоставляется в ответе. 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Переключение прокси: устарело в HTTP 1.1. Использовалось для обозначения того, что последующие запросы следует отправлять с использованием указанного прокси. 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Временное перенаправление: HTTP 1.1. Запрос должен быть повторен с URI, предоставленным в ответе, но в будущем запросы по-прежнему должны вызывать исходный URI. 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Этот код используется в предложении о запросах с возможностью возобновления HTTP для возобновления прерванных запросов PUT или POST.
   * Постоянное перенаправление: Запросы и все будущие запросы следует пересылать снова с использованием URI, предоставленного в ответе. 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Неверный запрос: Запрос не может быть выполнен из-за неправильного синтаксиса запроса. 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Неавторизовано: Запросивший не авторизован для доступа к ресурсу. Это похоже на 403, но используется в случаях, когда ожидается аутентификация, но она не удалась или не предоставлена. 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Платеж требуется: Зарезервировано для будущего использования. Некоторые веб-службы используют это как указание, что клиент отправил слишком большое количество запросов. 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Запрещено: запрос был отформатирован правильно, но сервер отказывается предоставлять запрашиваемый ресурс. В отличие от 401, аутентификация не изменит ответ сервера. 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Не найдено: Ресурс не может быть найден. Это часто используется в качестве общего ответа для всех недействительных URI, запрошенных сервером. 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Метод недопустим: ресурс был запрошен с использованием метода, который не допускается. Например, запрос ресурса с помощью метода POST, когда ресурс поддерживает только метод GET. 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Недопустимо: ресурс действителен, но не может быть предоставлен в формате, указанном в заголовках Accept в запросе. 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Требуется аутентификация прокси: Аутентификация с прокси требуется перед выполнением запросов. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Тайм-аут запроса: Сервер превысил время ожидания запроса от клиента. Клиенту разрешено повторить запрос. 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Конфликт: Запрос не может быть выполнен из-за конфликта в параметрах запроса. 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Удалено: Ресурс больше не доступен по запрошенному URI, и перенаправление не будет предоставлено. 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Требуемая длина: Запрос не указал длину своего содержимого, как требуется ресурсом. 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Условие предварительное не выполнено: Сервер не соответствует одному из предварительных условий, указанных клиентом. 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Слишком большой объект запроса: содержимое запроса превышает возможности обработки сервером. 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Слишком длинный URI запроса: URI, предоставленный в запросе, слишком длинный для обработки сервером. Часто используется, когда слишком много данных закодировано в URI GET-запроса, и вместо него следует использовать POST-запрос. 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Неподдерживаемый тип медиа: Данные, предоставленные клиентом, имеют тип медиа, который не поддерживается сервером. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Запрошенный диапазон не может быть удовлетворен: клиент запросил часть ресурса, но сервер не может предоставить эту часть. 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Ожидания не оправдались: Сервер не может выполнить требования поля заголовка запроса Expect. 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Я - чайник: Любая попытка приготовить кофе с помощью чайника должна приводить к коду ошибки "418 Я - чайник". Тело результирующей сущности может быть коротким и толстым. 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Неправильно направленный запрос: Запрос был направлен на сервер, который не способен дать ответ. Этот статусный код может быть отправлен сервером, который не настроен давать ответы на комбинацию схемы и полномочий, включенных в URI запроса. 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Непрорабатываемый объект: Запрос был отформатирован правильно, но не может быть обработан в его текущей форме. Часто используется, когда указанные параметры не проходят проверку на ошибки валидации. 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Заблокировано: Запрошенный ресурс найден, но заблокирован и не будет возвращен. 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Неудачная зависимость: Текущий запрос не удался из-за неудачи предыдущего запроса. 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Необходимо обновление: Клиент должен повторить запрос, используя обновленную протокол, например TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Необходимое предварительное условие: Исходный сервер требует, чтобы запрос был условным. 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Слишком много запросов: Пользователь отправил слишком много запросов за отведенное время («ограничение скорости»). 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Поля заголовка запроса слишком большие: Сервер отказывается обрабатывать запрос, потому что его поля заголовка слишком большие. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Время входа истекло (Microsoft): Расширение Microsoft. Указывает, что ваша сессия истекла. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Без ответа (Nginx): Используется в журналах Nginx для обозначения, что сервер не вернул никакой информации клиенту и закрыл соединение (полезно как средство отпугивания вредоносного ПО). 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Повторная попытка (Microsoft): Расширение Microsoft. Запрос следует повторить после выполнения соответствующего действия. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Заблокировано средствами родительского контроля Windows (Microsoft): Расширение Microsoft. Эта ошибка возникает, когда средства родительского контроля Windows включены и блокируют доступ к данной веб-странице. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Перенаправление (Microsoft): Используется в Exchange ActiveSync, если есть более эффективный сервер для использования или сервер не может получить доступ к почтовому ящику пользователя. Из-за юридических причин недоступно: Сервер не может функционировать в результате запроса юридического ограничения. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * "Заголовок запроса слишком большой (Nginx): внутренний код Nginx, похожий на 431, но введенный ранее в версии 0.9.4 (21 января 2011 года)." 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Ошибка сертификата (Nginx): Внутренний код Nginx, используемый при ошибке сертификата SSL клиента для различения ее от 4XX в журнале и перенаправления на страницу с ошибкой. 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): внутренний код Nginx, используемый, когда клиент не предоставляет сертификат, чтобы отличить его от 4XX в журнале и перенаправить на страницу с ошибкой. 
   * Без сертификата: внутренний код Nginx, используемый, когда клиент не предоставляет сертификат, чтобы отличить его от 4XX в журнале и перенаправить на страницу с ошибкой. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP в HTTPS (Nginx): Внутренний код Nginx, используемый для обычных запросов HTTP, отправленных на порт HTTPS для различения его от 4XX в журнале и перенаправления на страницу с ошибкой. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Токен истек/недействителен (Esri): возвращается ArcGIS for Server. Код 498 указывает на истекший или иным образом недействительный токен. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Требуется токен (Esri): Возвращается ArcGIS for Server. Код 499 указывает на то, что требуется токен (если токен не был представлен). 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Внутренняя ошибка сервера: Общий статус ошибки в самом сервере. 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Не реализовано: Сервер не может ответить на запрос. Это обычно означает, что сервер может поддержать этот запрос в будущем - в противном случае более подходящим может быть статус 4xx. 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Плохой шлюз: Сервер действует как прокси и не получил приемлемого ответа от сервера вышестоящего уровня. 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Служба недоступна: Сервер отключен и не принимает запросы. 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Тайм-аут шлюза: Сервер выступает в качестве прокси и не получил ответа от сервера верхнего уровня. 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Версия HTTP не поддерживается: Сервер не поддерживает версию протокола HTTP, указанную в запросе. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Вариант также ведет переговоры: Транспарентная согласование содержимого для запроса приводит к циклической ссылке. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Недостаточно места для хранения: Пользователь или сервер не имеет достаточного квоты места для хранения для выполнения запроса. 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Обнаружено циклирование: Сервер обнаружил бесконечный цикл в запросе. 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Превышение лимита пропускной способности (расширение Apache bw/limited): Этот код состояния не указан ни в одном RFC. Его применение неизвестно. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Не расширен: для выполнения запроса необходимо дальнейшее расширение. 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Требуется сетевой аутентификация: Клиент должен пройти аутентификацию в сети, прежде чем отправлять запросы. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Неизвестная ошибка (Microsoft / CloudFlare): Этот код состояния не указан ни в одном RFC и возвращается некоторыми службами, например, серверами Microsoft Azure и CloudFlare: "Ошибка 520 по существу является "отловочным" ответом, когда исходный сервер возвращает что-то неожиданное или что-то, что не допускается/интерпретируется (нарушение протокола или пустой ответ)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web-сервер не работает (CloudFlare): Оригинальный сервер отказал в соединении от CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Соединение истекло по времени (CloudFlare): CloudFlare не смог договориться о рукопожатии TCP с исходным сервером. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Не досягаемый источник (CloudFlare): CloudFlare не может достичь исходного сервера; например, если записи DNS для исходного сервера неверны. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Произошел тайм-аут (CloudFlare): CloudFlare смог установить TCP-соединение с исходным сервером, но своевременно не получил HTTP-ответ. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * Неудача при обмене ключами SSL (CloudFlare): CloudFlare не смог осуществить обмен ключами SSL/TLS с исходным сервером. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Неверный SSL-сертификат (CloudFlare): CloudFlare не смог подтвердить SSL/TLS-сертификат, который предоставил исходный сервер. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Ошибка Railgun (CloudFlare): Запрос превысил время ожидания или не был успешным после установления соединения WAN. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Продолжайте: Сервер получил заголовки запроса, и клиенту следует продолжить отправлять тело запроса. 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Переключение протоколов: Запросивший попросил сервер переключить протоколы, и сервер подтвердил, что это сделает. 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Обработка: Сервер получил запрос и обрабатывает его, но пока нет доступного ответа. 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Стандартный ответ для успешных HTTP-запросов.
   * Успешно: Стандартный ответ для успешных HTTP-запросов. 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Создано: Запрос выполнен и новый ресурс создан. 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Принято: Запрос был принят, но еще не обработан. Этот код не гарантирует успешную обработку запроса. 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Несанкционированная информация: HTTP 1.1. Сервер успешно обработал запрос, но возвращает информацию из другого источника. 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Без содержимого: Сервер принял запрос, но не возвращает никакого содержимого. Это часто используется в качестве ответа на запрос DELETE. 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Сбросить содержимое: Похоже на ответ 204 "Нет содержимого", но этот ответ требует от запрашивающего сбросить вид документа. 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Частичное содержимое: Сервер предоставляет только часть содержимого, как запрошено клиентом с помощью заголовка диапазона. 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Мультистатус: Тело сообщения, которое следует, представляет собой XML-сообщение и может содержать ряд отдельных кодов ответа, в зависимости от того, сколько было сделано подзапросов. 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Уже сообщалось: Члены привязки DAV уже перечислялись в предыдущем ответе на этот запрос и не включаются снова. 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM использовано: Сервер выполнил GET-запрос ресурса, и ответ представляет собой отображение результата одной или нескольких манипуляций экземпляра, примененных к текущему экземпляру. 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Множественный выбор: У клиента есть возможность выбрать один из нескольких вариантов в сценарии протокола передачи гипертекста. 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Постоянно перемещено: ресурс был перемещен, и все последующие запросы следует ссылаться на его новый URI. 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Обнаружено: Спецификация HTTP 1.0 описывает этот статус как «Временное перемещение», но популярные браузеры реагируют на этот статус аналогично поведению, предназначенному для 303. Ресурс можно получить, ссылаясь на возвращаемый URI. 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Смотрите другое: Ресурс может быть получен, следуя другим URI с помощью метода GET. Когда получен в ответ на запрос POST, PUT или DELETE, обычно можно предположить, что сервер успешно обработал запрос и направляет клиента на информационный конечный пункт. 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Не модифицировано: ресурс не был модифицирован с версии, указанной в заголовках If-Modified-Since или If-Match. Ресурс не будет возвращен в теле ответа. 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Используйте прокси: HTTP 1.1. Ресурс доступен только через прокси, и адрес предоставляется в ответе. 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * Переключение прокси: устарело в HTTP 1.1. Использовалось для обозначения того, что последующие запросы следует отправлять с использованием указанного прокси. 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Временное перенаправление: HTTP 1.1. Запрос должен быть повторен с URI, предоставленным в ответе, но в будущем запросы по-прежнему должны вызывать исходный URI. 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Этот код используется в предложении о запросах с возможностью возобновления HTTP для возобновления прерванных запросов PUT или POST.
   * Постоянное перенаправление: Запросы и все будущие запросы следует пересылать снова с использованием URI, предоставленного в ответе. 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Неверный запрос: Запрос не может быть выполнен из-за неправильного синтаксиса запроса. 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Неавторизовано: Запросивший не авторизован для доступа к ресурсу. Это похоже на 403, но используется в случаях, когда ожидается аутентификация, но она не удалась или не предоставлена. 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Платеж требуется: Зарезервировано для будущего использования. Некоторые веб-службы используют это как указание, что клиент отправил слишком большое количество запросов. 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Запрещено: запрос был отформатирован правильно, но сервер отказывается предоставлять запрашиваемый ресурс. В отличие от 401, аутентификация не изменит ответ сервера. 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Не найдено: Ресурс не может быть найден. Это часто используется в качестве общего ответа для всех недействительных URI, запрошенных сервером. 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Метод недопустим: ресурс был запрошен с использованием метода, который не допускается. Например, запрос ресурса с помощью метода POST, когда ресурс поддерживает только метод GET. 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Недопустимо: ресурс действителен, но не может быть предоставлен в формате, указанном в заголовках Accept в запросе. 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Требуется аутентификация прокси: Аутентификация с прокси требуется перед выполнением запросов. 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Тайм-аут запроса: Сервер превысил время ожидания запроса от клиента. Клиенту разрешено повторить запрос. 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Конфликт: Запрос не может быть выполнен из-за конфликта в параметрах запроса. 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Удалено: Ресурс больше не доступен по запрошенному URI, и перенаправление не будет предоставлено. 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Требуемая длина: Запрос не указал длину своего содержимого, как требуется ресурсом. 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Условие предварительное не выполнено: Сервер не соответствует одному из предварительных условий, указанных клиентом. 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Слишком большой объект запроса: содержимое запроса превышает возможности обработки сервером. 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Слишком длинный URI запроса: URI, предоставленный в запросе, слишком длинный для обработки сервером. Часто используется, когда слишком много данных закодировано в URI GET-запроса, и вместо него следует использовать POST-запрос. 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Неподдерживаемый тип медиа: Данные, предоставленные клиентом, имеют тип медиа, который не поддерживается сервером. 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Запрошенный диапазон не может быть удовлетворен: клиент запросил часть ресурса, но сервер не может предоставить эту часть. 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Ожидания не оправдались: Сервер не может выполнить требования поля заголовка запроса Expect. 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * Я - чайник: Любая попытка приготовить кофе с помощью чайника должна приводить к коду ошибки "418 Я - чайник". Тело результирующей сущности может быть коротким и толстым. 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Неправильно направленный запрос: Запрос был направлен на сервер, который не способен дать ответ. Этот статусный код может быть отправлен сервером, который не настроен давать ответы на комбинацию схемы и полномочий, включенных в URI запроса. 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Непрорабатываемый объект: Запрос был отформатирован правильно, но не может быть обработан в его текущей форме. Часто используется, когда указанные параметры не проходят проверку на ошибки валидации. 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Заблокировано: Запрошенный ресурс найден, но заблокирован и не будет возвращен. 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Неудачная зависимость: Текущий запрос не удался из-за неудачи предыдущего запроса. 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Необходимо обновление: Клиент должен повторить запрос, используя обновленную протокол, например TLS 1.0. 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Необходимое предварительное условие: Исходный сервер требует, чтобы запрос был условным. 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Слишком много запросов: Пользователь отправил слишком много запросов за отведенное время («ограничение скорости»). 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Поля заголовка запроса слишком большие: Сервер отказывается обрабатывать запрос, потому что его поля заголовка слишком большие. 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * Время входа истекло (Microsoft): Расширение Microsoft. Указывает, что ваша сессия истекла. 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * Без ответа (Nginx): Используется в журналах Nginx для обозначения, что сервер не вернул никакой информации клиенту и закрыл соединение (полезно как средство отпугивания вредоносного ПО). 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * Повторная попытка (Microsoft): Расширение Microsoft. Запрос следует повторить после выполнения соответствующего действия. 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * Заблокировано средствами родительского контроля Windows (Microsoft): Расширение Microsoft. Эта ошибка возникает, когда средства родительского контроля Windows включены и блокируют доступ к данной веб-странице. 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Перенаправление (Microsoft): Используется в Exchange ActiveSync, если есть более эффективный сервер для использования или сервер не может получить доступ к почтовому ящику пользователя. Из-за юридических причин недоступно: Сервер не может функционировать в результате запроса юридического ограничения. 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * "Заголовок запроса слишком большой (Nginx): внутренний код Nginx, похожий на 431, но введенный ранее в версии 0.9.4 (21 января 2011 года)." 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * Ошибка сертификата (Nginx): Внутренний код Nginx, используемый при ошибке сертификата SSL клиента для различения ее от 4XX в журнале и перенаправления на страницу с ошибкой. 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): внутренний код Nginx, используемый, когда клиент не предоставляет сертификат, чтобы отличить его от 4XX в журнале и перенаправить на страницу с ошибкой. 
   * Без сертификата: внутренний код Nginx, используемый, когда клиент не предоставляет сертификат, чтобы отличить его от 4XX в журнале и перенаправить на страницу с ошибкой. 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP в HTTPS (Nginx): Внутренний код Nginx, используемый для обычных запросов HTTP, отправленных на порт HTTPS для различения его от 4XX в журнале и перенаправления на страницу с ошибкой. 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * Токен истек/недействителен (Esri): возвращается ArcGIS for Server. Код 498 указывает на истекший или иным образом недействительный токен. 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * Требуется токен (Esri): Возвращается ArcGIS for Server. Код 499 указывает на то, что требуется токен (если токен не был представлен). 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Внутренняя ошибка сервера: Общий статус ошибки в самом сервере. 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Не реализовано: Сервер не может ответить на запрос. Это обычно означает, что сервер может поддержать этот запрос в будущем - в противном случае более подходящим может быть статус 4xx. 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Плохой шлюз: Сервер действует как прокси и не получил приемлемого ответа от сервера вышестоящего уровня. 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Служба недоступна: Сервер отключен и не принимает запросы. 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Тайм-аут шлюза: Сервер выступает в качестве прокси и не получил ответа от сервера верхнего уровня. 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Версия HTTP не поддерживается: Сервер не поддерживает версию протокола HTTP, указанную в запросе. 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Вариант также ведет переговоры: Транспарентная согласование содержимого для запроса приводит к циклической ссылке. 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Недостаточно места для хранения: Пользователь или сервер не имеет достаточного квоты места для хранения для выполнения запроса. 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Обнаружено циклирование: Сервер обнаружил бесконечный цикл в запросе. 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * Превышение лимита пропускной способности (расширение Apache bw/limited): Этот код состояния не указан ни в одном RFC. Его применение неизвестно. 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Не расширен: для выполнения запроса необходимо дальнейшее расширение. 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Требуется сетевой аутентификация: Клиент должен пройти аутентификацию в сети, прежде чем отправлять запросы. 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * Неизвестная ошибка (Microsoft / CloudFlare): Этот код состояния не указан ни в одном RFC и возвращается некоторыми службами, например, серверами Microsoft Azure и CloudFlare: "Ошибка 520 по существу является "отловочным" ответом, когда исходный сервер возвращает что-то неожиданное или что-то, что не допускается/интерпретируется (нарушение протокола или пустой ответ)." 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web-сервер не работает (CloudFlare): Оригинальный сервер отказал в соединении от CloudFlare. 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * Соединение истекло по времени (CloudFlare): CloudFlare не смог договориться о рукопожатии TCP с исходным сервером. 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * Не досягаемый источник (CloudFlare): CloudFlare не может достичь исходного сервера; например, если записи DNS для исходного сервера неверны. 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * Произошел тайм-аут (CloudFlare): CloudFlare смог установить TCP-соединение с исходным сервером, но своевременно не получил HTTP-ответ. 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * Неудача при обмене ключами SSL (CloudFlare): CloudFlare не смог осуществить обмен ключами SSL/TLS с исходным сервером. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * Неверный SSL-сертификат (CloudFlare): CloudFlare не смог подтвердить SSL/TLS-сертификат, который предоставил исходный сервер. 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Ошибка Railgun (CloudFlare): Запрос превысил время ожидания или не был успешным после установления соединения WAN. 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
