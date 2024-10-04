/**
 * © 2024 aiyoudiao
 *
 * Este archivo fue creado por aiyoudiao y contiene un montón de trabajo duro y sabiduría.
 *
 * Usted puede usar, modificar y distribuir este archivo libremente, pero por favor conserve este aviso de copyright.
 *
 * Si encuentra este archivo útil, por favor, déjeme una estrella o sígame ツ.
 *
 * Contacto:
 * - Correo electrónico:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 *
 * ¡Que disfrute programando! Recuerde, el código es poesía y el front-end es arte. ツ
 */
export enum HttpStatusCode {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud. 
   */
  CONTINUE = 100,
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Cambio de protocolos: El solicitante ha pedido al servidor que cambie de protocolos y el servidor reconoce que lo hará. 
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Procesando: El servidor ha recibido y está procesando la solicitud, pero aún no hay respuesta disponible. 
   */
  PROCESSING = 102,
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: La respuesta estándar para solicitudes HTTP exitosas. 
   */
  OK = 200,
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Creado: La solicitud ha sido cumplida y un nuevo recurso ha sido creado. 
   */
  CREATED = 201,
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito. 
   */
  ACCEPTED = 202,
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Información no autorizada: HTTP 1.1. El servidor procesó con éxito la solicitud pero está devolviendo información de otra fuente. 
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Sin contenido: El servidor aceptó la solicitud pero no devuelve ningún contenido. Esto se utiliza a menudo como respuesta a una solicitud DELETE. 
   */
  NO_CONTENT = 204,
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reiniciar contenido: Similar a una respuesta 204 Sin contenido, pero esta respuesta requiere que el solicitante reinicie la vista del documento. 
   */
  RESET_CONTENT = 205,
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Contenido parcial: El servidor entrega solo una parte del contenido, tal como lo solicita el cliente a través de un encabezado de rango. 
   */
  PARTIAL_CONTENT = 206,
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-estado: El cuerpo del mensaje que sigue es un mensaje XML y puede contener un número de códigos de respuesta separados, dependiendo de cuántas sub-solicitudes se hayan realizado. 
   */
  MULTI_STATUS = 207,
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Ya se informó: Los miembros de un enlace DAV ya se han enumerado en una respuesta anterior a esta solicitud y no se incluyen de nuevo. 
   */
  ALREADY_REPORTED = 208,
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM usado: El servidor ha cumplido una solicitud GET para el recurso, y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual. 
   */
  IM_USED = 226,
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Opciones múltiples: Hay múltiples opciones que el cliente puede seguir en el escenario del protocolo de transferencia de hipertexto. 
   */
  MULTIPLE_CHOICES = 300,
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Movido permanentemente: El recurso se ha movido y todas las solicitudes posteriores deben hacer referencia a su nueva URI. 
   */
  MOVED_PERMANENTLY = 301,
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Encontrado: La especificación HTTP 1.0 describe este estado como "Movido temporalmente", pero los navegadores populares responden a este estado de manera similar al comportamiento previsto para 303. El recurso puede obtenerse haciendo referencia a la URI devuelta. 
   */
  FOUND = 302,
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Ver otro: El recurso puede ser recuperado siguiendo otro URI utilizando el método GET. Cuando se recibe en respuesta a una solicitud POST, PUT o DELETE, normalmente se puede suponer que el servidor ha procesado la solicitud con éxito y está dirigiendo al cliente a un punto final informativo. 
   */
  SEE_OTHER = 303,
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Sin modificar: El recurso no ha sido modificado desde la versión especificada en las cabeceras If-Modified-Since o If-Match. El recurso no se devolverá en el cuerpo de la respuesta. 
   */
  NOT_MODIFIED = 304,
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Usar proxy: HTTP 1.1. El recurso solo está disponible a través de un proxy y la dirección se proporciona en la respuesta. 
   */
  USE_PROXY = 305,
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Cambio de proxy: obsoleto en HTTP 1.1. Se utilizaba para indicar que las solicitudes posteriores debían enviarse utilizando el proxy especificado. 
   */
  SWITCH_PROXY = 306,
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirección temporal: HTTP 1.1. La solicitud debe repetirse con el URI proporcionado en la respuesta, pero las solicitudes futuras aún deberían llamar al URI original. 
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resumen Incompleto (Google): Este código se utiliza en la Propuesta de Solicitudes HTTP Resumibles para reanudar las solicitudes PUT o POST abortadas. Redirección permanente: Las solicitudes y todas las futuras solicitudes deben enviarse de nuevo utilizando la URI proporcionada en la respuesta. 
   */
  PERMANENT_REDIRECT = 308,
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Solicitud incorrecta: La solicitud no se puede cumplir debido a la sintaxis incorrecta de la solicitud. 
   */
  BAD_REQUEST = 400,
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * No autorizado: El solicitante no está autorizado a acceder al recurso. Esto es similar al 403 pero se utiliza en casos en los que se espera autenticación pero ha fallado o no se ha proporcionado. 
   */
  UNAUTHORIZED = 401,
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pago requerido: Reservado para uso futuro. Algunos servicios web utilizan este código de estado para indicar que el cliente ha enviado un número excesivo de solicitudes. 
   */
  PAYMENT_REQUIRED = 402,
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Prohibido: La solicitud estaba formateada correctamente pero el servidor se niega a suministrar el recurso solicitado. A diferencia de 401, la autenticación no hará ninguna diferencia en la respuesta del servidor. 
   */
  FORBIDDEN = 403,
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * No encontrado: El recurso no pudo ser encontrado. Esto se usa a menudo como un captura-todo para todas las URIs inválidas solicitadas por el servidor. 
   */
  NOT_FOUND = 404,
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Método no permitido: El recurso se solicitó utilizando un método que no está permitido. Por ejemplo, solicitando un recurso a través del método POST cuando el recurso solo soporta el método GET. 
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * No aceptable: El recurso es válido, pero no puede ser proporcionado en el formato especificado en los encabezados Accept de la solicitud. 
   */
  NOT_ACCEPTABLE = 406,
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticación de proxy requerida: Antes de que se puedan cumplir las solicitudes, se requiere autenticación con el proxy. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de solicitud: El servidor agotó el tiempo de espera de una solicitud del cliente. Se permite al cliente repetir la solicitud. 
   */
  REQUEST_TIMEOUT = 408,
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflicto: La solicitud no puede completarse debido a un conflicto en los parámetros de la solicitud. 
   */
  CONFLICT = 409,
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Desaparecido: El recurso ya no está disponible en la URI solicitada y no se proporcionará redirección. 
   */
  GONE = 410,
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Longitud requerida: La solicitud no especificó la longitud de su contenido tal como lo requiere el recurso. 
   */
  LENGTH_REQUIRED = 411,
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Condición previa fallida: El servidor no cumple con una de las condiciones previas especificadas por el cliente. 
   */
  PRECONDITION_FAILED = 412,
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entidad de solicitud demasiado grande: El contenido de la solicitud es mayor de lo que el servidor puede procesar en el escenario del Protocolo de transferencia de hipertexto. 
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de solicitud demasiado largo: El URI proporcionado en la solicitud es demasiado largo para que el servidor lo procese. Esto se utiliza a menudo cuando se ha codificado demasiada información en el URI de una solicitud GET y en su lugar se debería utilizar una solicitud POST. 
   */
  URI_TOO_LONG = 414,
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo de medio no soportado: Los datos proporcionados por el cliente tienen un tipo de medio que el servidor no soporta. 
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Rango solicitado no satisfacible: El cliente ha solicitado una parte del recurso pero el servidor no puede suministrar esa parte. 
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Fracaso de expectativa: El servidor no puede satisfacer los requisitos del campo de encabezado de solicitud Expect. 
   */
  EXPECTATION_FAILED = 417,
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Soy una tetera: Cualquier intento de preparar café con una tetera debería resultar en el código de error "418 Soy una tetera". El cuerpo de la entidad resultante PUEDE ser corto y robusto. 
   */
  I_M_A_TEAPOT = 418,
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Solicitud mal dirigida: La solicitud se dirigió a un servidor que no puede producir una respuesta. Este código de estado puede ser enviado por un servidor que no está configurado para producir respuestas para la combinación de esquema y autoridad que se incluyen en la URI de la solicitud. 
   */
  MISDIRECTED_REQUEST = 421,
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entidad no procesable: La solicitud estaba formateada correctamente pero no puede ser procesada en su forma actual. A menudo se utiliza cuando los parámetros especificados no superan los errores de validación. 
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloqueado: El recurso solicitado se encontró pero ha sido bloqueado y no se devolverá. 
   */
  LOCKED = 423,
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Fallo de dependencia: La solicitud falló debido al fracaso de una solicitud anterior. 
   */
  FAILED_DEPENDENCY = 424,
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Actualización requerida: El cliente debería repetir la solicitud utilizando un protocolo actualizado como TLS 1.0. 
   */
  UPGRADE_REQUIRED = 426,
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Requisito previo: El servidor de origen requiere que la solicitud sea condicional. 
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Demasiadas solicitudes: El usuario ha enviado demasiadas solicitudes en un tiempo dado ("limitación de velocidad"). 
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campos de cabecera de la solicitud demasiado grandes: El servidor no está dispuesto a procesar la solicitud porque sus campos de cabecera son demasiado grandes. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Tiempo de espera de inicio de sesión (Microsoft): Una extensión de Microsoft. Indica que su sesión ha expirado en el escenario del protocolo de transferencia de hipertexto. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 440,
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Sin respuesta (Nginx): Utilizado en los registros de Nginx para indicar que el servidor no ha devuelto ninguna información al cliente y ha cerrado la conexión (útil como disuasión contra el malware en el protocolo de transferencia de hipertexto). 
   */
  NO_RESPONSE_NGINX = 444,
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Reintentar con (Microsoft): Una extensión de Microsoft. La solicitud debe reenviarse después de realizar la acción apropiada. 
   */
  RETRY_WITH_MICROSOFT = 449,
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Bloqueado por Windows Parental Controls (Microsoft): Una extensión de Microsoft. Este error se da cuando Windows Parental Controls están activados y bloquean el acceso a la página web dada en el escenario del protocolo de transferencia de hipertexto. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 450,
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirección (Microsoft): Utilizado en Exchange ActiveSync si existe un servidor más eficiente que usar o si el servidor no puede acceder al buzón de correo de los usuarios.
   * Por razones legales no disponible: El servidor no puede operar debido a una solicitud de restricción legal. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Encabezado de solicitud demasiado grande (Nginx): Código interno de Nginx similar al 431, pero introducido antes en la versión 0.9.4 (el 21 de enero de 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 494,
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Error de certificado (Nginx): Código interno de Nginx utilizado cuando se produce un error en el certificado del cliente SSL para distinguirlo del 4XX en un registro y redireccionar a una página de error. 
   */
  CERT_ERROR_NGINX = 495,
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * Sin certificado (Nginx): Código interno de Nginx utilizado cuando el cliente no proporciona un certificado para distinguirlo de los 4XX en un registro y una redirección de página de error en el escenario del Protocolo de Transferencia de Hipertexto. 
   */
  NO_CERT_NGINX = 496,
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP a HTTPS (Nginx): Código interno de Nginx utilizado para las solicitudes HTTP puras que se envían al puerto HTTPS para distinguirlo de 4XX en un registro y redirigir la página de error. 
   */
  HTTP_TO_HTTPS_NGINX = 497,
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token expirado / inválido (Esri): Devuelto por ArcGIS for Server. Un código 498 indica un token expirado o inválido. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 498,
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token requerido (Esri): Devuelto por ArcGIS for Server. Un código 499 indica que se requiere un token (si no se envió un token). 
   */
  TOKEN_REQUIRED_ESRI = 499,
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Error interno del servidor: Un estado genérico de error en el propio servidor. 
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * No implementado: El servidor no puede responder a la solicitud. Esto generalmente implica que el servidor podría soportar la solicitud en el futuro; de lo contrario, un código de estado 4xx podría ser más apropiado. 
   */
  NOT_IMPLEMENTED = 501,
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Puerto malo: El servidor actúa como proxy y no recibió una respuesta aceptable del servidor ascendente. 
   */
  BAD_GATEWAY = 502,
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servicio no disponible: El servidor está caído y no acepta solicitudes. 
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout del gateway: El servidor actúa como proxy y no recibió una respuesta del servidor ascendente. 
   */
  GATEWAY_TIMEOUT = 504,
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versión HTTP no soportada: El servidor no soporta la versión del protocolo HTTP especificada en la solicitud. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * La variante también negocia: La negociación de contenido transparente para la solicitud da lugar a una referencia circular. 
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuficiente almacenamiento: El usuario o el servidor no tiene suficientes cuotas de almacenamiento para cumplir con la solicitud. 
   */
  INSUFFICIENT_STORAGE = 507,
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Se detectó un bucle: El servidor detectó un bucle infinito en la solicitud. 
   */
  LOOP_DETECTED = 508,
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Límite de ancho de banda superado (extensión bw/limited de Apache): Este código de estado no está especificado en ningún RFC. Su uso es desconocido. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * No extendido: Se necesitan más extensiones de la solicitud para que se cumpla. 
   */
  NOT_EXTENDED = 510,
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticación de red requerida: El cliente debe autenticarse con la red antes de enviar solicitudes. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Error desconocido (Microsoft / CloudFlare): Este código de estado no está especificado en ningún RFC y es devuelto por ciertos servicios, por ejemplo, los servidores de Microsoft Azure y CloudFlare: "El error 520 es esencialmente una respuesta 'de todo' para cuando el servidor de origen devuelve algo inesperado o algo que no se tolera o se interpreta (violación del protocolo o respuesta vacía)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 520,
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): El servidor original rechazó la conexión de CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 521,
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Timeout de conexión (CloudFlare): CloudFlare no pudo negociar un apretón de manos TCP con el servidor de origen. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 522,
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origen no accesible (CloudFlare): CloudFlare no puede llegar al servidor de origen; por ejemplo, si los registros DNS del servidor de origen son incorrectos. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 523,
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Ocurrido un tiempo de espera (CloudFlare): CloudFlare pudo establecer una conexión TCP con el servidor de origen, pero no recibió una respuesta HTTP oportuna. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 524,
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * Error en el Handshake SSL (CloudFlare): CloudFlare no pudo negociar un handshake SSL/TLS con el servidor de origen. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 525,
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Certificado SSL inválido (CloudFlare): CloudFlare no pudo validar el certificado SSL/TLS que el servidor de origen presentó. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 526,
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Error de Railgun (CloudFlare): La solicitud ha expirado o fallado después de que se haya establecido la conexión WAN. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 527
}

export enum HttpStatusCodeByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud. 
   */
  h100 = 100,
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Cambio de protocolos: El solicitante ha pedido al servidor que cambie de protocolos y el servidor reconoce que lo hará. 
   */
  h101 = 101,
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Procesando: El servidor ha recibido y está procesando la solicitud, pero aún no hay respuesta disponible. 
   */
  h102 = 102,
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: La respuesta estándar para solicitudes HTTP exitosas. 
   */
  h200 = 200,
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Creado: La solicitud ha sido cumplida y un nuevo recurso ha sido creado. 
   */
  h201 = 201,
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito. 
   */
  h202 = 202,
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Información no autorizada: HTTP 1.1. El servidor procesó con éxito la solicitud pero está devolviendo información de otra fuente. 
   */
  h203 = 203,
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Sin contenido: El servidor aceptó la solicitud pero no devuelve ningún contenido. Esto se utiliza a menudo como respuesta a una solicitud DELETE. 
   */
  h204 = 204,
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reiniciar contenido: Similar a una respuesta 204 Sin contenido, pero esta respuesta requiere que el solicitante reinicie la vista del documento. 
   */
  h205 = 205,
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Contenido parcial: El servidor entrega solo una parte del contenido, tal como lo solicita el cliente a través de un encabezado de rango. 
   */
  h206 = 206,
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-estado: El cuerpo del mensaje que sigue es un mensaje XML y puede contener un número de códigos de respuesta separados, dependiendo de cuántas sub-solicitudes se hayan realizado. 
   */
  h207 = 207,
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Ya se informó: Los miembros de un enlace DAV ya se han enumerado en una respuesta anterior a esta solicitud y no se incluyen de nuevo. 
   */
  h208 = 208,
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM usado: El servidor ha cumplido una solicitud GET para el recurso, y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual. 
   */
  h226 = 226,
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Opciones múltiples: Hay múltiples opciones que el cliente puede seguir en el escenario del protocolo de transferencia de hipertexto. 
   */
  h300 = 300,
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Movido permanentemente: El recurso se ha movido y todas las solicitudes posteriores deben hacer referencia a su nueva URI. 
   */
  h301 = 301,
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Encontrado: La especificación HTTP 1.0 describe este estado como "Movido temporalmente", pero los navegadores populares responden a este estado de manera similar al comportamiento previsto para 303. El recurso puede obtenerse haciendo referencia a la URI devuelta. 
   */
  h302 = 302,
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Ver otro: El recurso puede ser recuperado siguiendo otro URI utilizando el método GET. Cuando se recibe en respuesta a una solicitud POST, PUT o DELETE, normalmente se puede suponer que el servidor ha procesado la solicitud con éxito y está dirigiendo al cliente a un punto final informativo. 
   */
  h303 = 303,
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Sin modificar: El recurso no ha sido modificado desde la versión especificada en las cabeceras If-Modified-Since o If-Match. El recurso no se devolverá en el cuerpo de la respuesta. 
   */
  h304 = 304,
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Usar proxy: HTTP 1.1. El recurso solo está disponible a través de un proxy y la dirección se proporciona en la respuesta. 
   */
  h305 = 305,
  /**
   * h306: 
   *
   * Empty
   * Cambio de proxy: obsoleto en HTTP 1.1. Se utilizaba para indicar que las solicitudes posteriores debían enviarse utilizando el proxy especificado. 
   */
  h306 = 306,
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirección temporal: HTTP 1.1. La solicitud debe repetirse con el URI proporcionado en la respuesta, pero las solicitudes futuras aún deberían llamar al URI original. 
   */
  h307 = 307,
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resumen Incompleto (Google): Este código se utiliza en la Propuesta de Solicitudes HTTP Resumibles para reanudar las solicitudes PUT o POST abortadas. Redirección permanente: Las solicitudes y todas las futuras solicitudes deben enviarse de nuevo utilizando la URI proporcionada en la respuesta. 
   */
  h308 = 308,
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Solicitud incorrecta: La solicitud no se puede cumplir debido a la sintaxis incorrecta de la solicitud. 
   */
  h400 = 400,
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * No autorizado: El solicitante no está autorizado a acceder al recurso. Esto es similar al 403 pero se utiliza en casos en los que se espera autenticación pero ha fallado o no se ha proporcionado. 
   */
  h401 = 401,
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pago requerido: Reservado para uso futuro. Algunos servicios web utilizan este código de estado para indicar que el cliente ha enviado un número excesivo de solicitudes. 
   */
  h402 = 402,
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Prohibido: La solicitud estaba formateada correctamente pero el servidor se niega a suministrar el recurso solicitado. A diferencia de 401, la autenticación no hará ninguna diferencia en la respuesta del servidor. 
   */
  h403 = 403,
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * No encontrado: El recurso no pudo ser encontrado. Esto se usa a menudo como un captura-todo para todas las URIs inválidas solicitadas por el servidor. 
   */
  h404 = 404,
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Método no permitido: El recurso se solicitó utilizando un método que no está permitido. Por ejemplo, solicitando un recurso a través del método POST cuando el recurso solo soporta el método GET. 
   */
  h405 = 405,
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * No aceptable: El recurso es válido, pero no puede ser proporcionado en el formato especificado en los encabezados Accept de la solicitud. 
   */
  h406 = 406,
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticación de proxy requerida: Antes de que se puedan cumplir las solicitudes, se requiere autenticación con el proxy. 
   */
  h407 = 407,
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de solicitud: El servidor agotó el tiempo de espera de una solicitud del cliente. Se permite al cliente repetir la solicitud. 
   */
  h408 = 408,
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflicto: La solicitud no puede completarse debido a un conflicto en los parámetros de la solicitud. 
   */
  h409 = 409,
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Desaparecido: El recurso ya no está disponible en la URI solicitada y no se proporcionará redirección. 
   */
  h410 = 410,
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Longitud requerida: La solicitud no especificó la longitud de su contenido tal como lo requiere el recurso. 
   */
  h411 = 411,
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Condición previa fallida: El servidor no cumple con una de las condiciones previas especificadas por el cliente. 
   */
  h412 = 412,
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entidad de solicitud demasiado grande: El contenido de la solicitud es mayor de lo que el servidor puede procesar en el escenario del Protocolo de transferencia de hipertexto. 
   */
  h413 = 413,
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de solicitud demasiado largo: El URI proporcionado en la solicitud es demasiado largo para que el servidor lo procese. Esto se utiliza a menudo cuando se ha codificado demasiada información en el URI de una solicitud GET y en su lugar se debería utilizar una solicitud POST. 
   */
  h414 = 414,
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo de medio no soportado: Los datos proporcionados por el cliente tienen un tipo de medio que el servidor no soporta. 
   */
  h415 = 415,
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Rango solicitado no satisfacible: El cliente ha solicitado una parte del recurso pero el servidor no puede suministrar esa parte. 
   */
  h416 = 416,
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Fracaso de expectativa: El servidor no puede satisfacer los requisitos del campo de encabezado de solicitud Expect. 
   */
  h417 = 417,
  /**
   * h418: 
   *
   * Empty
   * Soy una tetera: Cualquier intento de preparar café con una tetera debería resultar en el código de error "418 Soy una tetera". El cuerpo de la entidad resultante PUEDE ser corto y robusto. 
   */
  h418 = 418,
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Solicitud mal dirigida: La solicitud se dirigió a un servidor que no puede producir una respuesta. Este código de estado puede ser enviado por un servidor que no está configurado para producir respuestas para la combinación de esquema y autoridad que se incluyen en la URI de la solicitud. 
   */
  h421 = 421,
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entidad no procesable: La solicitud estaba formateada correctamente pero no puede ser procesada en su forma actual. A menudo se utiliza cuando los parámetros especificados no superan los errores de validación. 
   */
  h422 = 422,
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloqueado: El recurso solicitado se encontró pero ha sido bloqueado y no se devolverá. 
   */
  h423 = 423,
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Fallo de dependencia: La solicitud falló debido al fracaso de una solicitud anterior. 
   */
  h424 = 424,
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Actualización requerida: El cliente debería repetir la solicitud utilizando un protocolo actualizado como TLS 1.0. 
   */
  h426 = 426,
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Requisito previo: El servidor de origen requiere que la solicitud sea condicional. 
   */
  h428 = 428,
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Demasiadas solicitudes: El usuario ha enviado demasiadas solicitudes en un tiempo dado ("limitación de velocidad"). 
   */
  h429 = 429,
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campos de cabecera de la solicitud demasiado grandes: El servidor no está dispuesto a procesar la solicitud porque sus campos de cabecera son demasiado grandes. 
   */
  h431 = 431,
  /**
   * h440: 
   *
   * Empty
   * Tiempo de espera de inicio de sesión (Microsoft): Una extensión de Microsoft. Indica que su sesión ha expirado en el escenario del protocolo de transferencia de hipertexto. 
   */
  h440 = 440,
  /**
   * h444: 
   *
   * Empty
   * Sin respuesta (Nginx): Utilizado en los registros de Nginx para indicar que el servidor no ha devuelto ninguna información al cliente y ha cerrado la conexión (útil como disuasión contra el malware en el protocolo de transferencia de hipertexto). 
   */
  h444 = 444,
  /**
   * h449: 
   *
   * Empty
   * Reintentar con (Microsoft): Una extensión de Microsoft. La solicitud debe reenviarse después de realizar la acción apropiada. 
   */
  h449 = 449,
  /**
   * h450: 
   *
   * Empty
   * Bloqueado por Windows Parental Controls (Microsoft): Una extensión de Microsoft. Este error se da cuando Windows Parental Controls están activados y bloquean el acceso a la página web dada en el escenario del protocolo de transferencia de hipertexto. 
   */
  h450 = 450,
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirección (Microsoft): Utilizado en Exchange ActiveSync si existe un servidor más eficiente que usar o si el servidor no puede acceder al buzón de correo de los usuarios.
   * Por razones legales no disponible: El servidor no puede operar debido a una solicitud de restricción legal. 
   */
  h451 = 451,
  /**
   * h494: 
   *
   * Empty
   * Encabezado de solicitud demasiado grande (Nginx): Código interno de Nginx similar al 431, pero introducido antes en la versión 0.9.4 (el 21 de enero de 2011). 
   */
  h494 = 494,
  /**
   * h495: 
   *
   * Empty
   * Error de certificado (Nginx): Código interno de Nginx utilizado cuando se produce un error en el certificado del cliente SSL para distinguirlo del 4XX en un registro y redireccionar a una página de error. 
   */
  h495 = 495,
  /**
   * h496: 
   *
   * Empty
   * Sin certificado (Nginx): Código interno de Nginx utilizado cuando el cliente no proporciona un certificado para distinguirlo de los 4XX en un registro y una redirección de página de error en el escenario del Protocolo de Transferencia de Hipertexto. 
   */
  h496 = 496,
  /**
   * h497: 
   *
   * Empty
   * HTTP a HTTPS (Nginx): Código interno de Nginx utilizado para las solicitudes HTTP puras que se envían al puerto HTTPS para distinguirlo de 4XX en un registro y redirigir la página de error. 
   */
  h497 = 497,
  /**
   * h498: 
   *
   * Empty
   * Token expirado / inválido (Esri): Devuelto por ArcGIS for Server. Un código 498 indica un token expirado o inválido. 
   */
  h498 = 498,
  /**
   * h499: 
   *
   * Empty
   * Token requerido (Esri): Devuelto por ArcGIS for Server. Un código 499 indica que se requiere un token (si no se envió un token). 
   */
  h499 = 499,
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Error interno del servidor: Un estado genérico de error en el propio servidor. 
   */
  h500 = 500,
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * No implementado: El servidor no puede responder a la solicitud. Esto generalmente implica que el servidor podría soportar la solicitud en el futuro; de lo contrario, un código de estado 4xx podría ser más apropiado. 
   */
  h501 = 501,
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Puerto malo: El servidor actúa como proxy y no recibió una respuesta aceptable del servidor ascendente. 
   */
  h502 = 502,
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servicio no disponible: El servidor está caído y no acepta solicitudes. 
   */
  h503 = 503,
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout del gateway: El servidor actúa como proxy y no recibió una respuesta del servidor ascendente. 
   */
  h504 = 504,
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versión HTTP no soportada: El servidor no soporta la versión del protocolo HTTP especificada en la solicitud. 
   */
  h505 = 505,
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * La variante también negocia: La negociación de contenido transparente para la solicitud da lugar a una referencia circular. 
   */
  h506 = 506,
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuficiente almacenamiento: El usuario o el servidor no tiene suficientes cuotas de almacenamiento para cumplir con la solicitud. 
   */
  h507 = 507,
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Se detectó un bucle: El servidor detectó un bucle infinito en la solicitud. 
   */
  h508 = 508,
  /**
   * h509: 
   *
   * Empty
   * Límite de ancho de banda superado (extensión bw/limited de Apache): Este código de estado no está especificado en ningún RFC. Su uso es desconocido. 
   */
  h509 = 509,
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * No extendido: Se necesitan más extensiones de la solicitud para que se cumpla. 
   */
  h510 = 510,
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticación de red requerida: El cliente debe autenticarse con la red antes de enviar solicitudes. 
   */
  h511 = 511,
  /**
   * h520: 
   *
   * Empty
   * Error desconocido (Microsoft / CloudFlare): Este código de estado no está especificado en ningún RFC y es devuelto por ciertos servicios, por ejemplo, los servidores de Microsoft Azure y CloudFlare: "El error 520 es esencialmente una respuesta 'de todo' para cuando el servidor de origen devuelve algo inesperado o algo que no se tolera o se interpreta (violación del protocolo o respuesta vacía)." 
   */
  h520 = 520,
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): El servidor original rechazó la conexión de CloudFlare. 
   */
  h521 = 521,
  /**
   * h522: 
   *
   * Empty
   * Timeout de conexión (CloudFlare): CloudFlare no pudo negociar un apretón de manos TCP con el servidor de origen. 
   */
  h522 = 522,
  /**
   * h523: 
   *
   * Empty
   * Origen no accesible (CloudFlare): CloudFlare no puede llegar al servidor de origen; por ejemplo, si los registros DNS del servidor de origen son incorrectos. 
   */
  h523 = 523,
  /**
   * h524: 
   *
   * Empty
   * Ocurrido un tiempo de espera (CloudFlare): CloudFlare pudo establecer una conexión TCP con el servidor de origen, pero no recibió una respuesta HTTP oportuna. 
   */
  h524 = 524,
  /**
   * h525: 
   *
   * Empty
   * Error en el Handshake SSL (CloudFlare): CloudFlare no pudo negociar un handshake SSL/TLS con el servidor de origen. 
   */
  h525 = 525,
  /**
   * h526: 
   *
   * Empty
   * Certificado SSL inválido (CloudFlare): CloudFlare no pudo validar el certificado SSL/TLS que el servidor de origen presentó. 
   */
  h526 = 526,
  /**
   * h527: 
   *
   * Empty
   * Error de Railgun (CloudFlare): La solicitud ha expirado o fallado después de que se haya establecido la conexión WAN. 
   */
  h527 = 527
}
