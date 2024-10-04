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
export enum HttpStatusDescription {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud. 
   */
  CONTINUE = 'Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud. ',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Cambio de protocolos: El solicitante ha pedido al servidor que cambie de protocolos y el servidor reconoce que lo hará. 
   */
  SWITCHING_PROTOCOLS = 'Cambio de protocolos: El solicitante ha pedido al servidor que cambie de protocolos y el servidor reconoce que lo hará. ',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Procesando: El servidor ha recibido y está procesando la solicitud, pero aún no hay respuesta disponible. 
   */
  PROCESSING = 'Procesando: El servidor ha recibido y está procesando la solicitud, pero aún no hay respuesta disponible. ',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: La respuesta estándar para solicitudes HTTP exitosas. 
   */
  OK = 'OK: La respuesta estándar para solicitudes HTTP exitosas. ',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Creado: La solicitud ha sido cumplida y un nuevo recurso ha sido creado. 
   */
  CREATED = 'Creado: La solicitud ha sido cumplida y un nuevo recurso ha sido creado. ',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito. 
   */
  ACCEPTED = 'Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito. ',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Información no autorizada: HTTP 1.1. El servidor procesó con éxito la solicitud pero está devolviendo información de otra fuente. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Información no autorizada: HTTP 1.1. El servidor procesó con éxito la solicitud pero está devolviendo información de otra fuente. ',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Sin contenido: El servidor aceptó la solicitud pero no devuelve ningún contenido. Esto se utiliza a menudo como respuesta a una solicitud DELETE. 
   */
  NO_CONTENT = 'Sin contenido: El servidor aceptó la solicitud pero no devuelve ningún contenido. Esto se utiliza a menudo como respuesta a una solicitud DELETE. ',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reiniciar contenido: Similar a una respuesta 204 Sin contenido, pero esta respuesta requiere que el solicitante reinicie la vista del documento. 
   */
  RESET_CONTENT = 'Reiniciar contenido: Similar a una respuesta 204 Sin contenido, pero esta respuesta requiere que el solicitante reinicie la vista del documento. ',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Contenido parcial: El servidor entrega solo una parte del contenido, tal como lo solicita el cliente a través de un encabezado de rango. 
   */
  PARTIAL_CONTENT = 'Contenido parcial: El servidor entrega solo una parte del contenido, tal como lo solicita el cliente a través de un encabezado de rango. ',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-estado: El cuerpo del mensaje que sigue es un mensaje XML y puede contener un número de códigos de respuesta separados, dependiendo de cuántas sub-solicitudes se hayan realizado. 
   */
  MULTI_STATUS = 'Multi-estado: El cuerpo del mensaje que sigue es un mensaje XML y puede contener un número de códigos de respuesta separados, dependiendo de cuántas sub-solicitudes se hayan realizado. ',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Ya se informó: Los miembros de un enlace DAV ya se han enumerado en una respuesta anterior a esta solicitud y no se incluyen de nuevo. 
   */
  ALREADY_REPORTED = 'Ya se informó: Los miembros de un enlace DAV ya se han enumerado en una respuesta anterior a esta solicitud y no se incluyen de nuevo. ',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM usado: El servidor ha cumplido una solicitud GET para el recurso, y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual. 
   */
  IM_USED = 'IM usado: El servidor ha cumplido una solicitud GET para el recurso, y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual. ',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Opciones múltiples: Hay múltiples opciones que el cliente puede seguir en el escenario del protocolo de transferencia de hipertexto. 
   */
  MULTIPLE_CHOICES = 'Opciones múltiples: Hay múltiples opciones que el cliente puede seguir en el escenario del protocolo de transferencia de hipertexto. ',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Movido permanentemente: El recurso se ha movido y todas las solicitudes posteriores deben hacer referencia a su nueva URI. 
   */
  MOVED_PERMANENTLY = 'Movido permanentemente: El recurso se ha movido y todas las solicitudes posteriores deben hacer referencia a su nueva URI. ',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Encontrado: La especificación HTTP 1.0 describe este estado como "Movido temporalmente", pero los navegadores populares responden a este estado de manera similar al comportamiento previsto para 303. El recurso puede obtenerse haciendo referencia a la URI devuelta. 
   */
  FOUND = 'Encontrado: La especificación HTTP 1.0 describe este estado como "Movido temporalmente", pero los navegadores populares responden a este estado de manera similar al comportamiento previsto para 303. El recurso puede obtenerse haciendo referencia a la URI devuelta. ',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Ver otro: El recurso puede ser recuperado siguiendo otro URI utilizando el método GET. Cuando se recibe en respuesta a una solicitud POST, PUT o DELETE, normalmente se puede suponer que el servidor ha procesado la solicitud con éxito y está dirigiendo al cliente a un punto final informativo. 
   */
  SEE_OTHER = 'Ver otro: El recurso puede ser recuperado siguiendo otro URI utilizando el método GET. Cuando se recibe en respuesta a una solicitud POST, PUT o DELETE, normalmente se puede suponer que el servidor ha procesado la solicitud con éxito y está dirigiendo al cliente a un punto final informativo. ',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Sin modificar: El recurso no ha sido modificado desde la versión especificada en las cabeceras If-Modified-Since o If-Match. El recurso no se devolverá en el cuerpo de la respuesta. 
   */
  NOT_MODIFIED = 'Sin modificar: El recurso no ha sido modificado desde la versión especificada en las cabeceras If-Modified-Since o If-Match. El recurso no se devolverá en el cuerpo de la respuesta. ',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Usar proxy: HTTP 1.1. El recurso solo está disponible a través de un proxy y la dirección se proporciona en la respuesta. 
   */
  USE_PROXY = 'Usar proxy: HTTP 1.1. El recurso solo está disponible a través de un proxy y la dirección se proporciona en la respuesta. ',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Cambio de proxy: obsoleto en HTTP 1.1. Se utilizaba para indicar que las solicitudes posteriores debían enviarse utilizando el proxy especificado. 
   */
  SWITCH_PROXY = 'Cambio de proxy: obsoleto en HTTP 1.1. Se utilizaba para indicar que las solicitudes posteriores debían enviarse utilizando el proxy especificado. ',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirección temporal: HTTP 1.1. La solicitud debe repetirse con el URI proporcionado en la respuesta, pero las solicitudes futuras aún deberían llamar al URI original. 
   */
  TEMPORARY_REDIRECT = 'Redirección temporal: HTTP 1.1. La solicitud debe repetirse con el URI proporcionado en la respuesta, pero las solicitudes futuras aún deberían llamar al URI original. ',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resumen Incompleto (Google): Este código se utiliza en la Propuesta de Solicitudes HTTP Resumibles para reanudar las solicitudes PUT o POST abortadas. Redirección permanente: Las solicitudes y todas las futuras solicitudes deben enviarse de nuevo utilizando la URI proporcionada en la respuesta. 
   */
  PERMANENT_REDIRECT = 'Resumen Incompleto (Google): Este código se utiliza en la Propuesta de Solicitudes HTTP Resumibles para reanudar las solicitudes PUT o POST abortadas. Redirección permanente: Las solicitudes y todas las futuras solicitudes deben enviarse de nuevo utilizando la URI proporcionada en la respuesta. ',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Solicitud incorrecta: La solicitud no se puede cumplir debido a la sintaxis incorrecta de la solicitud. 
   */
  BAD_REQUEST = 'Solicitud incorrecta: La solicitud no se puede cumplir debido a la sintaxis incorrecta de la solicitud. ',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * No autorizado: El solicitante no está autorizado a acceder al recurso. Esto es similar al 403 pero se utiliza en casos en los que se espera autenticación pero ha fallado o no se ha proporcionado. 
   */
  UNAUTHORIZED = 'No autorizado: El solicitante no está autorizado a acceder al recurso. Esto es similar al 403 pero se utiliza en casos en los que se espera autenticación pero ha fallado o no se ha proporcionado. ',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pago requerido: Reservado para uso futuro. Algunos servicios web utilizan este código de estado para indicar que el cliente ha enviado un número excesivo de solicitudes. 
   */
  PAYMENT_REQUIRED = 'Pago requerido: Reservado para uso futuro. Algunos servicios web utilizan este código de estado para indicar que el cliente ha enviado un número excesivo de solicitudes. ',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Prohibido: La solicitud estaba formateada correctamente pero el servidor se niega a suministrar el recurso solicitado. A diferencia de 401, la autenticación no hará ninguna diferencia en la respuesta del servidor. 
   */
  FORBIDDEN = 'Prohibido: La solicitud estaba formateada correctamente pero el servidor se niega a suministrar el recurso solicitado. A diferencia de 401, la autenticación no hará ninguna diferencia en la respuesta del servidor. ',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * No encontrado: El recurso no pudo ser encontrado. Esto se usa a menudo como un captura-todo para todas las URIs inválidas solicitadas por el servidor. 
   */
  NOT_FOUND = 'No encontrado: El recurso no pudo ser encontrado. Esto se usa a menudo como un captura-todo para todas las URIs inválidas solicitadas por el servidor. ',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Método no permitido: El recurso se solicitó utilizando un método que no está permitido. Por ejemplo, solicitando un recurso a través del método POST cuando el recurso solo soporta el método GET. 
   */
  METHOD_NOT_ALLOWED = 'Método no permitido: El recurso se solicitó utilizando un método que no está permitido. Por ejemplo, solicitando un recurso a través del método POST cuando el recurso solo soporta el método GET. ',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * No aceptable: El recurso es válido, pero no puede ser proporcionado en el formato especificado en los encabezados Accept de la solicitud. 
   */
  NOT_ACCEPTABLE = 'No aceptable: El recurso es válido, pero no puede ser proporcionado en el formato especificado en los encabezados Accept de la solicitud. ',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticación de proxy requerida: Antes de que se puedan cumplir las solicitudes, se requiere autenticación con el proxy. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Autenticación de proxy requerida: Antes de que se puedan cumplir las solicitudes, se requiere autenticación con el proxy. ',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de solicitud: El servidor agotó el tiempo de espera de una solicitud del cliente. Se permite al cliente repetir la solicitud. 
   */
  REQUEST_TIMEOUT = 'Timeout de solicitud: El servidor agotó el tiempo de espera de una solicitud del cliente. Se permite al cliente repetir la solicitud. ',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflicto: La solicitud no puede completarse debido a un conflicto en los parámetros de la solicitud. 
   */
  CONFLICT = 'Conflicto: La solicitud no puede completarse debido a un conflicto en los parámetros de la solicitud. ',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Desaparecido: El recurso ya no está disponible en la URI solicitada y no se proporcionará redirección. 
   */
  GONE = 'Desaparecido: El recurso ya no está disponible en la URI solicitada y no se proporcionará redirección. ',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Longitud requerida: La solicitud no especificó la longitud de su contenido tal como lo requiere el recurso. 
   */
  LENGTH_REQUIRED = 'Longitud requerida: La solicitud no especificó la longitud de su contenido tal como lo requiere el recurso. ',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Condición previa fallida: El servidor no cumple con una de las condiciones previas especificadas por el cliente. 
   */
  PRECONDITION_FAILED = 'Condición previa fallida: El servidor no cumple con una de las condiciones previas especificadas por el cliente. ',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entidad de solicitud demasiado grande: El contenido de la solicitud es mayor de lo que el servidor puede procesar en el escenario del Protocolo de transferencia de hipertexto. 
   */
  PAYLOAD_TOO_LARGE = 'Entidad de solicitud demasiado grande: El contenido de la solicitud es mayor de lo que el servidor puede procesar en el escenario del Protocolo de transferencia de hipertexto. ',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de solicitud demasiado largo: El URI proporcionado en la solicitud es demasiado largo para que el servidor lo procese. Esto se utiliza a menudo cuando se ha codificado demasiada información en el URI de una solicitud GET y en su lugar se debería utilizar una solicitud POST. 
   */
  URI_TOO_LONG = 'URI de solicitud demasiado largo: El URI proporcionado en la solicitud es demasiado largo para que el servidor lo procese. Esto se utiliza a menudo cuando se ha codificado demasiada información en el URI de una solicitud GET y en su lugar se debería utilizar una solicitud POST. ',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo de medio no soportado: Los datos proporcionados por el cliente tienen un tipo de medio que el servidor no soporta. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Tipo de medio no soportado: Los datos proporcionados por el cliente tienen un tipo de medio que el servidor no soporta. ',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Rango solicitado no satisfacible: El cliente ha solicitado una parte del recurso pero el servidor no puede suministrar esa parte. 
   */
  RANGE_NOT_SATISFIABLE = 'Rango solicitado no satisfacible: El cliente ha solicitado una parte del recurso pero el servidor no puede suministrar esa parte. ',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Fracaso de expectativa: El servidor no puede satisfacer los requisitos del campo de encabezado de solicitud Expect. 
   */
  EXPECTATION_FAILED = 'Fracaso de expectativa: El servidor no puede satisfacer los requisitos del campo de encabezado de solicitud Expect. ',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Soy una tetera: Cualquier intento de preparar café con una tetera debería resultar en el código de error "418 Soy una tetera". El cuerpo de la entidad resultante PUEDE ser corto y robusto. 
   */
  I_M_A_TEAPOT = 'Soy una tetera: Cualquier intento de preparar café con una tetera debería resultar en el código de error "418 Soy una tetera". El cuerpo de la entidad resultante PUEDE ser corto y robusto. ',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Solicitud mal dirigida: La solicitud se dirigió a un servidor que no puede producir una respuesta. Este código de estado puede ser enviado por un servidor que no está configurado para producir respuestas para la combinación de esquema y autoridad que se incluyen en la URI de la solicitud. 
   */
  MISDIRECTED_REQUEST = 'Solicitud mal dirigida: La solicitud se dirigió a un servidor que no puede producir una respuesta. Este código de estado puede ser enviado por un servidor que no está configurado para producir respuestas para la combinación de esquema y autoridad que se incluyen en la URI de la solicitud. ',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entidad no procesable: La solicitud estaba formateada correctamente pero no puede ser procesada en su forma actual. A menudo se utiliza cuando los parámetros especificados no superan los errores de validación. 
   */
  UNPROCESSABLE_ENTITY = 'Entidad no procesable: La solicitud estaba formateada correctamente pero no puede ser procesada en su forma actual. A menudo se utiliza cuando los parámetros especificados no superan los errores de validación. ',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloqueado: El recurso solicitado se encontró pero ha sido bloqueado y no se devolverá. 
   */
  LOCKED = 'Bloqueado: El recurso solicitado se encontró pero ha sido bloqueado y no se devolverá. ',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Fallo de dependencia: La solicitud falló debido al fracaso de una solicitud anterior. 
   */
  FAILED_DEPENDENCY = 'Fallo de dependencia: La solicitud falló debido al fracaso de una solicitud anterior. ',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Actualización requerida: El cliente debería repetir la solicitud utilizando un protocolo actualizado como TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Actualización requerida: El cliente debería repetir la solicitud utilizando un protocolo actualizado como TLS 1.0. ',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Requisito previo: El servidor de origen requiere que la solicitud sea condicional. 
   */
  PRECONDITION_REQUIRED = 'Requisito previo: El servidor de origen requiere que la solicitud sea condicional. ',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Demasiadas solicitudes: El usuario ha enviado demasiadas solicitudes en un tiempo dado ("limitación de velocidad"). 
   */
  TOO_MANY_REQUESTS = 'Demasiadas solicitudes: El usuario ha enviado demasiadas solicitudes en un tiempo dado ("limitación de velocidad"). ',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campos de cabecera de la solicitud demasiado grandes: El servidor no está dispuesto a procesar la solicitud porque sus campos de cabecera son demasiado grandes. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Campos de cabecera de la solicitud demasiado grandes: El servidor no está dispuesto a procesar la solicitud porque sus campos de cabecera son demasiado grandes. ',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Tiempo de espera de inicio de sesión (Microsoft): Una extensión de Microsoft. Indica que su sesión ha expirado en el escenario del protocolo de transferencia de hipertexto. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Tiempo de espera de inicio de sesión (Microsoft): Una extensión de Microsoft. Indica que su sesión ha expirado en el escenario del protocolo de transferencia de hipertexto. ',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Sin respuesta (Nginx): Utilizado en los registros de Nginx para indicar que el servidor no ha devuelto ninguna información al cliente y ha cerrado la conexión (útil como disuasión contra el malware en el protocolo de transferencia de hipertexto). 
   */
  NO_RESPONSE_NGINX = 'Sin respuesta (Nginx): Utilizado en los registros de Nginx para indicar que el servidor no ha devuelto ninguna información al cliente y ha cerrado la conexión (útil como disuasión contra el malware en el protocolo de transferencia de hipertexto). ',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Reintentar con (Microsoft): Una extensión de Microsoft. La solicitud debe reenviarse después de realizar la acción apropiada. 
   */
  RETRY_WITH_MICROSOFT = 'Reintentar con (Microsoft): Una extensión de Microsoft. La solicitud debe reenviarse después de realizar la acción apropiada. ',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Bloqueado por Windows Parental Controls (Microsoft): Una extensión de Microsoft. Este error se da cuando Windows Parental Controls están activados y bloquean el acceso a la página web dada en el escenario del protocolo de transferencia de hipertexto. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Bloqueado por Windows Parental Controls (Microsoft): Una extensión de Microsoft. Este error se da cuando Windows Parental Controls están activados y bloquean el acceso a la página web dada en el escenario del protocolo de transferencia de hipertexto. ',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirección (Microsoft): Utilizado en Exchange ActiveSync si existe un servidor más eficiente que usar o si el servidor no puede acceder al buzón de correo de los usuarios.
   * Por razones legales no disponible: El servidor no puede operar debido a una solicitud de restricción legal. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Redirección (Microsoft): Utilizado en Exchange ActiveSync si existe un servidor más eficiente que usar o si el servidor no puede acceder al buzón de correo de los usuarios.\n\
Por razones legales no disponible: El servidor no puede operar debido a una solicitud de restricción legal. ',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Encabezado de solicitud demasiado grande (Nginx): Código interno de Nginx similar al 431, pero introducido antes en la versión 0.9.4 (el 21 de enero de 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Encabezado de solicitud demasiado grande (Nginx): Código interno de Nginx similar al 431, pero introducido antes en la versión 0.9.4 (el 21 de enero de 2011). ',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Error de certificado (Nginx): Código interno de Nginx utilizado cuando se produce un error en el certificado del cliente SSL para distinguirlo del 4XX en un registro y redireccionar a una página de error. 
   */
  CERT_ERROR_NGINX = 'Error de certificado (Nginx): Código interno de Nginx utilizado cuando se produce un error en el certificado del cliente SSL para distinguirlo del 4XX en un registro y redireccionar a una página de error. ',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * Sin certificado (Nginx): Código interno de Nginx utilizado cuando el cliente no proporciona un certificado para distinguirlo de los 4XX en un registro y una redirección de página de error en el escenario del Protocolo de Transferencia de Hipertexto. 
   */
  NO_CERT_NGINX = 'Sin certificado (Nginx): Código interno de Nginx utilizado cuando el cliente no proporciona un certificado para distinguirlo de los 4XX en un registro y una redirección de página de error en el escenario del Protocolo de Transferencia de Hipertexto. ',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP a HTTPS (Nginx): Código interno de Nginx utilizado para las solicitudes HTTP puras que se envían al puerto HTTPS para distinguirlo de 4XX en un registro y redirigir la página de error. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP a HTTPS (Nginx): Código interno de Nginx utilizado para las solicitudes HTTP puras que se envían al puerto HTTPS para distinguirlo de 4XX en un registro y redirigir la página de error. ',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token expirado / inválido (Esri): Devuelto por ArcGIS for Server. Un código 498 indica un token expirado o inválido. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expirado / inválido (Esri): Devuelto por ArcGIS for Server. Un código 498 indica un token expirado o inválido. ',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token requerido (Esri): Devuelto por ArcGIS for Server. Un código 499 indica que se requiere un token (si no se envió un token). 
   */
  TOKEN_REQUIRED_ESRI = 'Token requerido (Esri): Devuelto por ArcGIS for Server. Un código 499 indica que se requiere un token (si no se envió un token). ',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Error interno del servidor: Un estado genérico de error en el propio servidor. 
   */
  INTERNAL_SERVER_ERROR = 'Error interno del servidor: Un estado genérico de error en el propio servidor. ',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * No implementado: El servidor no puede responder a la solicitud. Esto generalmente implica que el servidor podría soportar la solicitud en el futuro; de lo contrario, un código de estado 4xx podría ser más apropiado. 
   */
  NOT_IMPLEMENTED = 'No implementado: El servidor no puede responder a la solicitud. Esto generalmente implica que el servidor podría soportar la solicitud en el futuro; de lo contrario, un código de estado 4xx podría ser más apropiado. ',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Puerto malo: El servidor actúa como proxy y no recibió una respuesta aceptable del servidor ascendente. 
   */
  BAD_GATEWAY = 'Puerto malo: El servidor actúa como proxy y no recibió una respuesta aceptable del servidor ascendente. ',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servicio no disponible: El servidor está caído y no acepta solicitudes. 
   */
  SERVICE_UNAVAILABLE = 'Servicio no disponible: El servidor está caído y no acepta solicitudes. ',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout del gateway: El servidor actúa como proxy y no recibió una respuesta del servidor ascendente. 
   */
  GATEWAY_TIMEOUT = 'Timeout del gateway: El servidor actúa como proxy y no recibió una respuesta del servidor ascendente. ',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versión HTTP no soportada: El servidor no soporta la versión del protocolo HTTP especificada en la solicitud. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'Versión HTTP no soportada: El servidor no soporta la versión del protocolo HTTP especificada en la solicitud. ',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * La variante también negocia: La negociación de contenido transparente para la solicitud da lugar a una referencia circular. 
   */
  VARIANT_ALSO_NEGOTIATES = 'La variante también negocia: La negociación de contenido transparente para la solicitud da lugar a una referencia circular. ',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuficiente almacenamiento: El usuario o el servidor no tiene suficientes cuotas de almacenamiento para cumplir con la solicitud. 
   */
  INSUFFICIENT_STORAGE = 'Insuficiente almacenamiento: El usuario o el servidor no tiene suficientes cuotas de almacenamiento para cumplir con la solicitud. ',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Se detectó un bucle: El servidor detectó un bucle infinito en la solicitud. 
   */
  LOOP_DETECTED = 'Se detectó un bucle: El servidor detectó un bucle infinito en la solicitud. ',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Límite de ancho de banda superado (extensión bw/limited de Apache): Este código de estado no está especificado en ningún RFC. Su uso es desconocido. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Límite de ancho de banda superado (extensión bw/limited de Apache): Este código de estado no está especificado en ningún RFC. Su uso es desconocido. ',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * No extendido: Se necesitan más extensiones de la solicitud para que se cumpla. 
   */
  NOT_EXTENDED = 'No extendido: Se necesitan más extensiones de la solicitud para que se cumpla. ',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticación de red requerida: El cliente debe autenticarse con la red antes de enviar solicitudes. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Autenticación de red requerida: El cliente debe autenticarse con la red antes de enviar solicitudes. ',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Error desconocido (Microsoft / CloudFlare): Este código de estado no está especificado en ningún RFC y es devuelto por ciertos servicios, por ejemplo, los servidores de Microsoft Azure y CloudFlare: "El error 520 es esencialmente una respuesta 'de todo' para cuando el servidor de origen devuelve algo inesperado o algo que no se tolera o se interpreta (violación del protocolo o respuesta vacía)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Error desconocido (Microsoft / CloudFlare): Este código de estado no está especificado en ningún RFC y es devuelto por ciertos servicios, por ejemplo, los servidores de Microsoft Azure y CloudFlare: "El error 520 es esencialmente una respuesta \'de todo\' para cuando el servidor de origen devuelve algo inesperado o algo que no se tolera o se interpreta (violación del protocolo o respuesta vacía)." ',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): El servidor original rechazó la conexión de CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare): El servidor original rechazó la conexión de CloudFlare. ',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Timeout de conexión (CloudFlare): CloudFlare no pudo negociar un apretón de manos TCP con el servidor de origen. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Timeout de conexión (CloudFlare): CloudFlare no pudo negociar un apretón de manos TCP con el servidor de origen. ',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origen no accesible (CloudFlare): CloudFlare no puede llegar al servidor de origen; por ejemplo, si los registros DNS del servidor de origen son incorrectos. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origen no accesible (CloudFlare): CloudFlare no puede llegar al servidor de origen; por ejemplo, si los registros DNS del servidor de origen son incorrectos. ',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Ocurrido un tiempo de espera (CloudFlare): CloudFlare pudo establecer una conexión TCP con el servidor de origen, pero no recibió una respuesta HTTP oportuna. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'Ocurrido un tiempo de espera (CloudFlare): CloudFlare pudo establecer una conexión TCP con el servidor de origen, pero no recibió una respuesta HTTP oportuna. ',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * Error en el Handshake SSL (CloudFlare): CloudFlare no pudo negociar un handshake SSL/TLS con el servidor de origen. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'Error en el Handshake SSL (CloudFlare): CloudFlare no pudo negociar un handshake SSL/TLS con el servidor de origen. ',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Certificado SSL inválido (CloudFlare): CloudFlare no pudo validar el certificado SSL/TLS que el servidor de origen presentó. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Certificado SSL inválido (CloudFlare): CloudFlare no pudo validar el certificado SSL/TLS que el servidor de origen presentó. ',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Error de Railgun (CloudFlare): La solicitud ha expirado o fallado después de que se haya establecido la conexión WAN. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Error de Railgun (CloudFlare): La solicitud ha expirado o fallado después de que se haya establecido la conexión WAN. '
}

export enum HttpStatusDescriptionByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud. 
   */
  h100 = 'Continuar: El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud. ',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Cambio de protocolos: El solicitante ha pedido al servidor que cambie de protocolos y el servidor reconoce que lo hará. 
   */
  h101 = 'Cambio de protocolos: El solicitante ha pedido al servidor que cambie de protocolos y el servidor reconoce que lo hará. ',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Procesando: El servidor ha recibido y está procesando la solicitud, pero aún no hay respuesta disponible. 
   */
  h102 = 'Procesando: El servidor ha recibido y está procesando la solicitud, pero aún no hay respuesta disponible. ',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: La respuesta estándar para solicitudes HTTP exitosas. 
   */
  h200 = 'OK: La respuesta estándar para solicitudes HTTP exitosas. ',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Creado: La solicitud ha sido cumplida y un nuevo recurso ha sido creado. 
   */
  h201 = 'Creado: La solicitud ha sido cumplida y un nuevo recurso ha sido creado. ',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito. 
   */
  h202 = 'Aceptado: La solicitud ha sido aceptada pero aún no se ha procesado. Este código no garantiza que la solicitud se procese con éxito. ',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Información no autorizada: HTTP 1.1. El servidor procesó con éxito la solicitud pero está devolviendo información de otra fuente. 
   */
  h203 = 'Información no autorizada: HTTP 1.1. El servidor procesó con éxito la solicitud pero está devolviendo información de otra fuente. ',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Sin contenido: El servidor aceptó la solicitud pero no devuelve ningún contenido. Esto se utiliza a menudo como respuesta a una solicitud DELETE. 
   */
  h204 = 'Sin contenido: El servidor aceptó la solicitud pero no devuelve ningún contenido. Esto se utiliza a menudo como respuesta a una solicitud DELETE. ',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reiniciar contenido: Similar a una respuesta 204 Sin contenido, pero esta respuesta requiere que el solicitante reinicie la vista del documento. 
   */
  h205 = 'Reiniciar contenido: Similar a una respuesta 204 Sin contenido, pero esta respuesta requiere que el solicitante reinicie la vista del documento. ',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Contenido parcial: El servidor entrega solo una parte del contenido, tal como lo solicita el cliente a través de un encabezado de rango. 
   */
  h206 = 'Contenido parcial: El servidor entrega solo una parte del contenido, tal como lo solicita el cliente a través de un encabezado de rango. ',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-estado: El cuerpo del mensaje que sigue es un mensaje XML y puede contener un número de códigos de respuesta separados, dependiendo de cuántas sub-solicitudes se hayan realizado. 
   */
  h207 = 'Multi-estado: El cuerpo del mensaje que sigue es un mensaje XML y puede contener un número de códigos de respuesta separados, dependiendo de cuántas sub-solicitudes se hayan realizado. ',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Ya se informó: Los miembros de un enlace DAV ya se han enumerado en una respuesta anterior a esta solicitud y no se incluyen de nuevo. 
   */
  h208 = 'Ya se informó: Los miembros de un enlace DAV ya se han enumerado en una respuesta anterior a esta solicitud y no se incluyen de nuevo. ',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM usado: El servidor ha cumplido una solicitud GET para el recurso, y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual. 
   */
  h226 = 'IM usado: El servidor ha cumplido una solicitud GET para el recurso, y la respuesta es una representación del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual. ',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Opciones múltiples: Hay múltiples opciones que el cliente puede seguir en el escenario del protocolo de transferencia de hipertexto. 
   */
  h300 = 'Opciones múltiples: Hay múltiples opciones que el cliente puede seguir en el escenario del protocolo de transferencia de hipertexto. ',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Movido permanentemente: El recurso se ha movido y todas las solicitudes posteriores deben hacer referencia a su nueva URI. 
   */
  h301 = 'Movido permanentemente: El recurso se ha movido y todas las solicitudes posteriores deben hacer referencia a su nueva URI. ',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Encontrado: La especificación HTTP 1.0 describe este estado como "Movido temporalmente", pero los navegadores populares responden a este estado de manera similar al comportamiento previsto para 303. El recurso puede obtenerse haciendo referencia a la URI devuelta. 
   */
  h302 = 'Encontrado: La especificación HTTP 1.0 describe este estado como "Movido temporalmente", pero los navegadores populares responden a este estado de manera similar al comportamiento previsto para 303. El recurso puede obtenerse haciendo referencia a la URI devuelta. ',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Ver otro: El recurso puede ser recuperado siguiendo otro URI utilizando el método GET. Cuando se recibe en respuesta a una solicitud POST, PUT o DELETE, normalmente se puede suponer que el servidor ha procesado la solicitud con éxito y está dirigiendo al cliente a un punto final informativo. 
   */
  h303 = 'Ver otro: El recurso puede ser recuperado siguiendo otro URI utilizando el método GET. Cuando se recibe en respuesta a una solicitud POST, PUT o DELETE, normalmente se puede suponer que el servidor ha procesado la solicitud con éxito y está dirigiendo al cliente a un punto final informativo. ',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Sin modificar: El recurso no ha sido modificado desde la versión especificada en las cabeceras If-Modified-Since o If-Match. El recurso no se devolverá en el cuerpo de la respuesta. 
   */
  h304 = 'Sin modificar: El recurso no ha sido modificado desde la versión especificada en las cabeceras If-Modified-Since o If-Match. El recurso no se devolverá en el cuerpo de la respuesta. ',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Usar proxy: HTTP 1.1. El recurso solo está disponible a través de un proxy y la dirección se proporciona en la respuesta. 
   */
  h305 = 'Usar proxy: HTTP 1.1. El recurso solo está disponible a través de un proxy y la dirección se proporciona en la respuesta. ',
  /**
   * h306: 
   *
   * Empty
   * Cambio de proxy: obsoleto en HTTP 1.1. Se utilizaba para indicar que las solicitudes posteriores debían enviarse utilizando el proxy especificado. 
   */
  h306 = 'Cambio de proxy: obsoleto en HTTP 1.1. Se utilizaba para indicar que las solicitudes posteriores debían enviarse utilizando el proxy especificado. ',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirección temporal: HTTP 1.1. La solicitud debe repetirse con el URI proporcionado en la respuesta, pero las solicitudes futuras aún deberían llamar al URI original. 
   */
  h307 = 'Redirección temporal: HTTP 1.1. La solicitud debe repetirse con el URI proporcionado en la respuesta, pero las solicitudes futuras aún deberían llamar al URI original. ',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resumen Incompleto (Google): Este código se utiliza en la Propuesta de Solicitudes HTTP Resumibles para reanudar las solicitudes PUT o POST abortadas. Redirección permanente: Las solicitudes y todas las futuras solicitudes deben enviarse de nuevo utilizando la URI proporcionada en la respuesta. 
   */
  h308 = 'Resumen Incompleto (Google): Este código se utiliza en la Propuesta de Solicitudes HTTP Resumibles para reanudar las solicitudes PUT o POST abortadas. Redirección permanente: Las solicitudes y todas las futuras solicitudes deben enviarse de nuevo utilizando la URI proporcionada en la respuesta. ',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Solicitud incorrecta: La solicitud no se puede cumplir debido a la sintaxis incorrecta de la solicitud. 
   */
  h400 = 'Solicitud incorrecta: La solicitud no se puede cumplir debido a la sintaxis incorrecta de la solicitud. ',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * No autorizado: El solicitante no está autorizado a acceder al recurso. Esto es similar al 403 pero se utiliza en casos en los que se espera autenticación pero ha fallado o no se ha proporcionado. 
   */
  h401 = 'No autorizado: El solicitante no está autorizado a acceder al recurso. Esto es similar al 403 pero se utiliza en casos en los que se espera autenticación pero ha fallado o no se ha proporcionado. ',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pago requerido: Reservado para uso futuro. Algunos servicios web utilizan este código de estado para indicar que el cliente ha enviado un número excesivo de solicitudes. 
   */
  h402 = 'Pago requerido: Reservado para uso futuro. Algunos servicios web utilizan este código de estado para indicar que el cliente ha enviado un número excesivo de solicitudes. ',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Prohibido: La solicitud estaba formateada correctamente pero el servidor se niega a suministrar el recurso solicitado. A diferencia de 401, la autenticación no hará ninguna diferencia en la respuesta del servidor. 
   */
  h403 = 'Prohibido: La solicitud estaba formateada correctamente pero el servidor se niega a suministrar el recurso solicitado. A diferencia de 401, la autenticación no hará ninguna diferencia en la respuesta del servidor. ',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * No encontrado: El recurso no pudo ser encontrado. Esto se usa a menudo como un captura-todo para todas las URIs inválidas solicitadas por el servidor. 
   */
  h404 = 'No encontrado: El recurso no pudo ser encontrado. Esto se usa a menudo como un captura-todo para todas las URIs inválidas solicitadas por el servidor. ',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Método no permitido: El recurso se solicitó utilizando un método que no está permitido. Por ejemplo, solicitando un recurso a través del método POST cuando el recurso solo soporta el método GET. 
   */
  h405 = 'Método no permitido: El recurso se solicitó utilizando un método que no está permitido. Por ejemplo, solicitando un recurso a través del método POST cuando el recurso solo soporta el método GET. ',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * No aceptable: El recurso es válido, pero no puede ser proporcionado en el formato especificado en los encabezados Accept de la solicitud. 
   */
  h406 = 'No aceptable: El recurso es válido, pero no puede ser proporcionado en el formato especificado en los encabezados Accept de la solicitud. ',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticación de proxy requerida: Antes de que se puedan cumplir las solicitudes, se requiere autenticación con el proxy. 
   */
  h407 = 'Autenticación de proxy requerida: Antes de que se puedan cumplir las solicitudes, se requiere autenticación con el proxy. ',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de solicitud: El servidor agotó el tiempo de espera de una solicitud del cliente. Se permite al cliente repetir la solicitud. 
   */
  h408 = 'Timeout de solicitud: El servidor agotó el tiempo de espera de una solicitud del cliente. Se permite al cliente repetir la solicitud. ',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflicto: La solicitud no puede completarse debido a un conflicto en los parámetros de la solicitud. 
   */
  h409 = 'Conflicto: La solicitud no puede completarse debido a un conflicto en los parámetros de la solicitud. ',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Desaparecido: El recurso ya no está disponible en la URI solicitada y no se proporcionará redirección. 
   */
  h410 = 'Desaparecido: El recurso ya no está disponible en la URI solicitada y no se proporcionará redirección. ',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Longitud requerida: La solicitud no especificó la longitud de su contenido tal como lo requiere el recurso. 
   */
  h411 = 'Longitud requerida: La solicitud no especificó la longitud de su contenido tal como lo requiere el recurso. ',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Condición previa fallida: El servidor no cumple con una de las condiciones previas especificadas por el cliente. 
   */
  h412 = 'Condición previa fallida: El servidor no cumple con una de las condiciones previas especificadas por el cliente. ',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entidad de solicitud demasiado grande: El contenido de la solicitud es mayor de lo que el servidor puede procesar en el escenario del Protocolo de transferencia de hipertexto. 
   */
  h413 = 'Entidad de solicitud demasiado grande: El contenido de la solicitud es mayor de lo que el servidor puede procesar en el escenario del Protocolo de transferencia de hipertexto. ',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de solicitud demasiado largo: El URI proporcionado en la solicitud es demasiado largo para que el servidor lo procese. Esto se utiliza a menudo cuando se ha codificado demasiada información en el URI de una solicitud GET y en su lugar se debería utilizar una solicitud POST. 
   */
  h414 = 'URI de solicitud demasiado largo: El URI proporcionado en la solicitud es demasiado largo para que el servidor lo procese. Esto se utiliza a menudo cuando se ha codificado demasiada información en el URI de una solicitud GET y en su lugar se debería utilizar una solicitud POST. ',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo de medio no soportado: Los datos proporcionados por el cliente tienen un tipo de medio que el servidor no soporta. 
   */
  h415 = 'Tipo de medio no soportado: Los datos proporcionados por el cliente tienen un tipo de medio que el servidor no soporta. ',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Rango solicitado no satisfacible: El cliente ha solicitado una parte del recurso pero el servidor no puede suministrar esa parte. 
   */
  h416 = 'Rango solicitado no satisfacible: El cliente ha solicitado una parte del recurso pero el servidor no puede suministrar esa parte. ',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Fracaso de expectativa: El servidor no puede satisfacer los requisitos del campo de encabezado de solicitud Expect. 
   */
  h417 = 'Fracaso de expectativa: El servidor no puede satisfacer los requisitos del campo de encabezado de solicitud Expect. ',
  /**
   * h418: 
   *
   * Empty
   * Soy una tetera: Cualquier intento de preparar café con una tetera debería resultar en el código de error "418 Soy una tetera". El cuerpo de la entidad resultante PUEDE ser corto y robusto. 
   */
  h418 = 'Soy una tetera: Cualquier intento de preparar café con una tetera debería resultar en el código de error "418 Soy una tetera". El cuerpo de la entidad resultante PUEDE ser corto y robusto. ',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Solicitud mal dirigida: La solicitud se dirigió a un servidor que no puede producir una respuesta. Este código de estado puede ser enviado por un servidor que no está configurado para producir respuestas para la combinación de esquema y autoridad que se incluyen en la URI de la solicitud. 
   */
  h421 = 'Solicitud mal dirigida: La solicitud se dirigió a un servidor que no puede producir una respuesta. Este código de estado puede ser enviado por un servidor que no está configurado para producir respuestas para la combinación de esquema y autoridad que se incluyen en la URI de la solicitud. ',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entidad no procesable: La solicitud estaba formateada correctamente pero no puede ser procesada en su forma actual. A menudo se utiliza cuando los parámetros especificados no superan los errores de validación. 
   */
  h422 = 'Entidad no procesable: La solicitud estaba formateada correctamente pero no puede ser procesada en su forma actual. A menudo se utiliza cuando los parámetros especificados no superan los errores de validación. ',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloqueado: El recurso solicitado se encontró pero ha sido bloqueado y no se devolverá. 
   */
  h423 = 'Bloqueado: El recurso solicitado se encontró pero ha sido bloqueado y no se devolverá. ',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Fallo de dependencia: La solicitud falló debido al fracaso de una solicitud anterior. 
   */
  h424 = 'Fallo de dependencia: La solicitud falló debido al fracaso de una solicitud anterior. ',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Actualización requerida: El cliente debería repetir la solicitud utilizando un protocolo actualizado como TLS 1.0. 
   */
  h426 = 'Actualización requerida: El cliente debería repetir la solicitud utilizando un protocolo actualizado como TLS 1.0. ',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Requisito previo: El servidor de origen requiere que la solicitud sea condicional. 
   */
  h428 = 'Requisito previo: El servidor de origen requiere que la solicitud sea condicional. ',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Demasiadas solicitudes: El usuario ha enviado demasiadas solicitudes en un tiempo dado ("limitación de velocidad"). 
   */
  h429 = 'Demasiadas solicitudes: El usuario ha enviado demasiadas solicitudes en un tiempo dado ("limitación de velocidad"). ',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campos de cabecera de la solicitud demasiado grandes: El servidor no está dispuesto a procesar la solicitud porque sus campos de cabecera son demasiado grandes. 
   */
  h431 = 'Campos de cabecera de la solicitud demasiado grandes: El servidor no está dispuesto a procesar la solicitud porque sus campos de cabecera son demasiado grandes. ',
  /**
   * h440: 
   *
   * Empty
   * Tiempo de espera de inicio de sesión (Microsoft): Una extensión de Microsoft. Indica que su sesión ha expirado en el escenario del protocolo de transferencia de hipertexto. 
   */
  h440 = 'Tiempo de espera de inicio de sesión (Microsoft): Una extensión de Microsoft. Indica que su sesión ha expirado en el escenario del protocolo de transferencia de hipertexto. ',
  /**
   * h444: 
   *
   * Empty
   * Sin respuesta (Nginx): Utilizado en los registros de Nginx para indicar que el servidor no ha devuelto ninguna información al cliente y ha cerrado la conexión (útil como disuasión contra el malware en el protocolo de transferencia de hipertexto). 
   */
  h444 = 'Sin respuesta (Nginx): Utilizado en los registros de Nginx para indicar que el servidor no ha devuelto ninguna información al cliente y ha cerrado la conexión (útil como disuasión contra el malware en el protocolo de transferencia de hipertexto). ',
  /**
   * h449: 
   *
   * Empty
   * Reintentar con (Microsoft): Una extensión de Microsoft. La solicitud debe reenviarse después de realizar la acción apropiada. 
   */
  h449 = 'Reintentar con (Microsoft): Una extensión de Microsoft. La solicitud debe reenviarse después de realizar la acción apropiada. ',
  /**
   * h450: 
   *
   * Empty
   * Bloqueado por Windows Parental Controls (Microsoft): Una extensión de Microsoft. Este error se da cuando Windows Parental Controls están activados y bloquean el acceso a la página web dada en el escenario del protocolo de transferencia de hipertexto. 
   */
  h450 = 'Bloqueado por Windows Parental Controls (Microsoft): Una extensión de Microsoft. Este error se da cuando Windows Parental Controls están activados y bloquean el acceso a la página web dada en el escenario del protocolo de transferencia de hipertexto. ',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirección (Microsoft): Utilizado en Exchange ActiveSync si existe un servidor más eficiente que usar o si el servidor no puede acceder al buzón de correo de los usuarios.
   * Por razones legales no disponible: El servidor no puede operar debido a una solicitud de restricción legal. 
   */
  h451 = 'Redirección (Microsoft): Utilizado en Exchange ActiveSync si existe un servidor más eficiente que usar o si el servidor no puede acceder al buzón de correo de los usuarios.\n\
Por razones legales no disponible: El servidor no puede operar debido a una solicitud de restricción legal. ',
  /**
   * h494: 
   *
   * Empty
   * Encabezado de solicitud demasiado grande (Nginx): Código interno de Nginx similar al 431, pero introducido antes en la versión 0.9.4 (el 21 de enero de 2011). 
   */
  h494 = 'Encabezado de solicitud demasiado grande (Nginx): Código interno de Nginx similar al 431, pero introducido antes en la versión 0.9.4 (el 21 de enero de 2011). ',
  /**
   * h495: 
   *
   * Empty
   * Error de certificado (Nginx): Código interno de Nginx utilizado cuando se produce un error en el certificado del cliente SSL para distinguirlo del 4XX en un registro y redireccionar a una página de error. 
   */
  h495 = 'Error de certificado (Nginx): Código interno de Nginx utilizado cuando se produce un error en el certificado del cliente SSL para distinguirlo del 4XX en un registro y redireccionar a una página de error. ',
  /**
   * h496: 
   *
   * Empty
   * Sin certificado (Nginx): Código interno de Nginx utilizado cuando el cliente no proporciona un certificado para distinguirlo de los 4XX en un registro y una redirección de página de error en el escenario del Protocolo de Transferencia de Hipertexto. 
   */
  h496 = 'Sin certificado (Nginx): Código interno de Nginx utilizado cuando el cliente no proporciona un certificado para distinguirlo de los 4XX en un registro y una redirección de página de error en el escenario del Protocolo de Transferencia de Hipertexto. ',
  /**
   * h497: 
   *
   * Empty
   * HTTP a HTTPS (Nginx): Código interno de Nginx utilizado para las solicitudes HTTP puras que se envían al puerto HTTPS para distinguirlo de 4XX en un registro y redirigir la página de error. 
   */
  h497 = 'HTTP a HTTPS (Nginx): Código interno de Nginx utilizado para las solicitudes HTTP puras que se envían al puerto HTTPS para distinguirlo de 4XX en un registro y redirigir la página de error. ',
  /**
   * h498: 
   *
   * Empty
   * Token expirado / inválido (Esri): Devuelto por ArcGIS for Server. Un código 498 indica un token expirado o inválido. 
   */
  h498 = 'Token expirado / inválido (Esri): Devuelto por ArcGIS for Server. Un código 498 indica un token expirado o inválido. ',
  /**
   * h499: 
   *
   * Empty
   * Token requerido (Esri): Devuelto por ArcGIS for Server. Un código 499 indica que se requiere un token (si no se envió un token). 
   */
  h499 = 'Token requerido (Esri): Devuelto por ArcGIS for Server. Un código 499 indica que se requiere un token (si no se envió un token). ',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Error interno del servidor: Un estado genérico de error en el propio servidor. 
   */
  h500 = 'Error interno del servidor: Un estado genérico de error en el propio servidor. ',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * No implementado: El servidor no puede responder a la solicitud. Esto generalmente implica que el servidor podría soportar la solicitud en el futuro; de lo contrario, un código de estado 4xx podría ser más apropiado. 
   */
  h501 = 'No implementado: El servidor no puede responder a la solicitud. Esto generalmente implica que el servidor podría soportar la solicitud en el futuro; de lo contrario, un código de estado 4xx podría ser más apropiado. ',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Puerto malo: El servidor actúa como proxy y no recibió una respuesta aceptable del servidor ascendente. 
   */
  h502 = 'Puerto malo: El servidor actúa como proxy y no recibió una respuesta aceptable del servidor ascendente. ',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servicio no disponible: El servidor está caído y no acepta solicitudes. 
   */
  h503 = 'Servicio no disponible: El servidor está caído y no acepta solicitudes. ',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout del gateway: El servidor actúa como proxy y no recibió una respuesta del servidor ascendente. 
   */
  h504 = 'Timeout del gateway: El servidor actúa como proxy y no recibió una respuesta del servidor ascendente. ',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versión HTTP no soportada: El servidor no soporta la versión del protocolo HTTP especificada en la solicitud. 
   */
  h505 = 'Versión HTTP no soportada: El servidor no soporta la versión del protocolo HTTP especificada en la solicitud. ',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * La variante también negocia: La negociación de contenido transparente para la solicitud da lugar a una referencia circular. 
   */
  h506 = 'La variante también negocia: La negociación de contenido transparente para la solicitud da lugar a una referencia circular. ',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuficiente almacenamiento: El usuario o el servidor no tiene suficientes cuotas de almacenamiento para cumplir con la solicitud. 
   */
  h507 = 'Insuficiente almacenamiento: El usuario o el servidor no tiene suficientes cuotas de almacenamiento para cumplir con la solicitud. ',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Se detectó un bucle: El servidor detectó un bucle infinito en la solicitud. 
   */
  h508 = 'Se detectó un bucle: El servidor detectó un bucle infinito en la solicitud. ',
  /**
   * h509: 
   *
   * Empty
   * Límite de ancho de banda superado (extensión bw/limited de Apache): Este código de estado no está especificado en ningún RFC. Su uso es desconocido. 
   */
  h509 = 'Límite de ancho de banda superado (extensión bw/limited de Apache): Este código de estado no está especificado en ningún RFC. Su uso es desconocido. ',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * No extendido: Se necesitan más extensiones de la solicitud para que se cumpla. 
   */
  h510 = 'No extendido: Se necesitan más extensiones de la solicitud para que se cumpla. ',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticación de red requerida: El cliente debe autenticarse con la red antes de enviar solicitudes. 
   */
  h511 = 'Autenticación de red requerida: El cliente debe autenticarse con la red antes de enviar solicitudes. ',
  /**
   * h520: 
   *
   * Empty
   * Error desconocido (Microsoft / CloudFlare): Este código de estado no está especificado en ningún RFC y es devuelto por ciertos servicios, por ejemplo, los servidores de Microsoft Azure y CloudFlare: "El error 520 es esencialmente una respuesta 'de todo' para cuando el servidor de origen devuelve algo inesperado o algo que no se tolera o se interpreta (violación del protocolo o respuesta vacía)." 
   */
  h520 = 'Error desconocido (Microsoft / CloudFlare): Este código de estado no está especificado en ningún RFC y es devuelto por ciertos servicios, por ejemplo, los servidores de Microsoft Azure y CloudFlare: "El error 520 es esencialmente una respuesta \'de todo\' para cuando el servidor de origen devuelve algo inesperado o algo que no se tolera o se interpreta (violación del protocolo o respuesta vacía)." ',
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): El servidor original rechazó la conexión de CloudFlare. 
   */
  h521 = 'Web Server Is Down (CloudFlare): El servidor original rechazó la conexión de CloudFlare. ',
  /**
   * h522: 
   *
   * Empty
   * Timeout de conexión (CloudFlare): CloudFlare no pudo negociar un apretón de manos TCP con el servidor de origen. 
   */
  h522 = 'Timeout de conexión (CloudFlare): CloudFlare no pudo negociar un apretón de manos TCP con el servidor de origen. ',
  /**
   * h523: 
   *
   * Empty
   * Origen no accesible (CloudFlare): CloudFlare no puede llegar al servidor de origen; por ejemplo, si los registros DNS del servidor de origen son incorrectos. 
   */
  h523 = 'Origen no accesible (CloudFlare): CloudFlare no puede llegar al servidor de origen; por ejemplo, si los registros DNS del servidor de origen son incorrectos. ',
  /**
   * h524: 
   *
   * Empty
   * Ocurrido un tiempo de espera (CloudFlare): CloudFlare pudo establecer una conexión TCP con el servidor de origen, pero no recibió una respuesta HTTP oportuna. 
   */
  h524 = 'Ocurrido un tiempo de espera (CloudFlare): CloudFlare pudo establecer una conexión TCP con el servidor de origen, pero no recibió una respuesta HTTP oportuna. ',
  /**
   * h525: 
   *
   * Empty
   * Error en el Handshake SSL (CloudFlare): CloudFlare no pudo negociar un handshake SSL/TLS con el servidor de origen. 
   */
  h525 = 'Error en el Handshake SSL (CloudFlare): CloudFlare no pudo negociar un handshake SSL/TLS con el servidor de origen. ',
  /**
   * h526: 
   *
   * Empty
   * Certificado SSL inválido (CloudFlare): CloudFlare no pudo validar el certificado SSL/TLS que el servidor de origen presentó. 
   */
  h526 = 'Certificado SSL inválido (CloudFlare): CloudFlare no pudo validar el certificado SSL/TLS que el servidor de origen presentó. ',
  /**
   * h527: 
   *
   * Empty
   * Error de Railgun (CloudFlare): La solicitud ha expirado o fallado después de que se haya establecido la conexión WAN. 
   */
  h527 = 'Error de Railgun (CloudFlare): La solicitud ha expirado o fallado después de que se haya establecido la conexión WAN. '
}
