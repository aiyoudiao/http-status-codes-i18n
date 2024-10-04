/**
 * © 2024 aiyoudiao
 *
 * Diese Datei wurde von aiyoudiao erstellt und enthält eine Menge harte Arbeit und Weisheit.
 *
 * Sie sind frei, diese Datei zu verwenden, zu modifizieren und zu verteilen, aber bitte behalten Sie diese Copyright-Erklärung.
 *
 * Wenn Sie diese Datei hilfreich finden, bitte geben Sie mir einen Stern oder folgen Sie mir ツ.
 *
 * Kontaktdaten:
 * - E-Mail:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 *
 * Viel Spaß beim Programmieren! Denken Sie daran, Code ist Poesie und Front-End ist Kunst. ツ
 */
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen. 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Protokollwechsel: Der Anforderer hat den Server gebeten, das Protokoll zu wechseln und der Server hat bestätigt, dass er dies tun wird. 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Verarbeitung: Der Server hat die Anfrage erhalten und verarbeitet sie gerade, aber noch keine Antwort ist verfügbar. 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Erstellt: Die Anfrage wurde erfüllt und eine neue Ressource wurde erstellt. 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird. 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Nicht autoritative Informationen: HTTP 1.1. Der Server hat die Anfrage erfolgreich verarbeitet, gibt jedoch Informationen aus einer anderen Quelle zurück. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Kein Inhalt: Der Server hat die Anfrage akzeptiert, aber gibt keinen Inhalt zurück. Dies wird häufig als Antwort auf eine DELETE-Anfrage verwendet. 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Inhalt zurücksetzen: Ähnlich wie eine 204-No-Content-Antwort, aber diese Antwort erfordert, dass der Anfragende die Dokumentansicht zurücksetzt. 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Teilinhalt: Der Server liefert nur einen Teil des Inhalts, wie vom Client über einen Range-Header angefordert. 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-Status: Der nachfolgende Nachrichtenkörper ist eine XML-Nachricht und kann eine Anzahl separater Antwortcodes enthalten, abhängig davon, wie viele Unteranfragen gestellt wurden. 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Bereits gemeldet: Die Mitglieder einer DAV-Bindung wurden bereits in einer früheren Antwort auf diese Anfrage aufgelistet und werden nicht erneut enthalten. 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM-Verwendung: Der Server hat eine GET-Anfrage für die Ressource erfüllt, und die Antwort stellt eine Darstellung des Ergebnisses einer oder mehrerer Instanzmanipulationen dar, die auf die aktuelle Instanz angewendet wurden. 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Mehrfachauswahl: Es gibt mehrere Optionen, aus denen der Client eine auswählen kann. 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Bewegt dauerhaft: Die Ressource wurde verschoben und alle weiteren Anfragen sollten sich auf ihre neue URI beziehen. 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Gefunden: Die HTTP 1.0-Spezifikation beschrieb diesen Status als "Vorübergehend verschoben", aber beliebte Browser reagieren auf diesen Status ähnlich wie auf das Verhalten, das für 303 vorgesehen ist. Die Ressource kann abgerufen werden, indem man die zurückgegebene URI referenziert. 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Siehe andere: Die Ressource kann über andere URIs abgerufen werden, indem die GET-Methode verwendet wird. Wenn dies als Antwort auf einen POST-, PUT- oder DELETE-Anfrage empfangen wird, kann in der Regel angenommen werden, dass der Server die Anfrage erfolgreich verarbeitet hat und den Client auf einen informativen Endpunkt verweist. 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nicht modifiziert: Die Ressource wurde seit der in den If-Modified-Since- oder If-Match-Headern angegebenen Version nicht modifiziert. Die Ressource wird nicht im Antwortkörper zurückgegeben. 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Verwenden Sie Proxy: HTTP 1.1. Die Ressource ist nur über einen Proxy verfügbar und die Adresse wird in der Antwort bereitgestellt. 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Proxy wechseln: In HTTP 1.1 veraltet. Wurde verwendet, um anzuzeigen, dass nachfolgende Anfragen mit dem angegebenen Proxy gesendet werden sollten. 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Temporäre Umleitung: HTTP 1.1. Die Anfrage sollte mit der URI, die in der Antwort bereitgestellt wurde, wiederholt werden, aber zukünftige Anfragen sollten immer noch die ursprüngliche URI aufrufen. 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Dieser Code wird im Vorschlag für wiederaufnehmbare HTTP-Anfragen verwendet, um abgebrochene PUT- oder POST-Anfragen wiederaufzunehmen.
   * Dauerhafte Umleitung: Anfragen und alle zukünftigen Anfragen sollten unter Verwendung der in der Antwort bereitgestellten URI erneut gesendet werden. 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Fehlerhafte Anfrage: Die Anfrage konnte aufgrund der falschen Syntax der Anfrage nicht erfüllt werden. 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nicht autorisiert: Der Anforderer ist nicht autorisiert, auf die Ressource zuzugreifen. Dies ist ähnlich wie 403, wird aber in Fällen verwendet, in denen eine Authentifizierung erwartet wird, aber fehlgeschlagen ist oder nicht bereitgestellt wurde. 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Zahlung erforderlich: Reserviert für die zukünftige Nutzung. Einige Webdienste verwenden diesen Statuscode, um anzuzeigen, dass der Client eine übermäßige Anzahl von Anfragen gesendet hat. 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Verboten: Die Anfrage war korrekt formatiert, aber der Server weigert sich, die angeforderte Ressource bereitzustellen. Im Gegensatz zu 401 macht eine Authentifizierung keinen Unterschied in der Antwort des Servers. 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nicht gefunden: Die Ressource konnte nicht gefunden werden. Dies wird oft als Sammelbezeichnung für alle ungültigen URIs verwendet, die vom Server angefordert werden. 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Methode nicht erlaubt: Die Ressource wurde mit einer Methode angefordert, die nicht erlaubt ist. Zum Beispiel wurde eine Ressource mittels der POST-Methode angefordert, obwohl die Ressource nur die GET-Methode unterstützt. 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nicht akzeptabel: Die Ressource ist gültig, kann aber nicht in dem Format bereitgestellt werden, das in den Accept-Headern der Anfrage angegeben ist. 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy-Authentifizierung erforderlich: Vor der Erfüllung von Anfragen ist eine Authentifizierung beim Proxy erforderlich. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout der Anfrage: Der Server hat die Wartezeit für eine Anfrage vom Client überschritten. Dem Client ist es erlaubt, die Anfrage zu wiederholen. 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Konflikt: Die Anfrage kann aufgrund eines Konflikts in den Anfrageparametern nicht abgeschlossen werden. 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Entfernt: Die Ressource ist an der angeforderten URI nicht mehr verfügbar und es wird keine Umleitung gegeben. 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Länge erforderlich: Die Anfrage hat die Länge ihres Inhalts nicht wie vom Ressourcen erforderlich angegeben. 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Voraussetzungsfehler: Der Server erfüllt nicht eine der Voraussetzungen, die vom Client festgelegt wurden. 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Request Entity zu groß: Die Anfrage ist größer als das, was der Server verarbeiten kann. 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Anfrage-URI zu lang: Die URI, die in der Anfrage bereitgestellt wird, ist zu lang für den Server, um sie zu verarbeiten. Dieser Statuscode wird häufig verwendet, wenn zu viele Daten in die URI einer GET-Anfrage kodiert wurden und stattdessen eine POST-Anfrage verwendet werden sollte. 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Ununterstützter Medientyp: Die vom Client bereitgestellten Daten haben einen Medientyp, der vom Server nicht unterstützt wird. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Beantragter Bereich nicht erfüllbar: Der Client hat einen Teil der Ressource angefordert, aber der Server kann diesen Teil nicht bereitstellen. 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Erwartung fehlgeschlagen: Der Server kann die Anforderungen des Expect-Request-Header-Felds nicht erfüllen. 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Ich bin ein Teekessel: Jeder Versuch, mit einem Teekessel Kaffee zu kochen, sollte zum Fehlercode "418 Ich bin ein Teekessel" führen. Der resultierende Entitätskörper kann kurz und stämmig sein. 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Fehlgeleitete Anfrage: Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann. Dieser Statuscode kann von einem Server gesendet werden, der nicht konfiguriert ist, um für die Kombination von Schema und Autorität, die in der Anfrage-URI enthalten sind, Antworten zu erzeugen. 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Unverarbeitbare Einheit: Die Anfrage war korrekt formatiert, kann aber in ihrer aktuellen Form nicht verarbeitet werden. Wird häufig verwendet, wenn die angegebenen Parameter Validierungsfehler nicht bestehen. 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Gesperrt: Die angeforderte Ressource wurde gefunden, ist jedoch gesperrt und wird nicht zurückgegeben. 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Abhängigkeitsfehler: Die Anfrage ist fehlgeschlagen, weil eine vorherige Anfrage fehlgeschlagen ist. 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Upgrade erforderlich: Der Client sollte die Anfrage mit einem aktualisierten Protokoll wie TLS 1.0 wiederholen. 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Voraussetzung erforderlich: Der Originalserver verlangt, dass die Anfrage bedingt ist. 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Zu viele Anfragen: Der Benutzer hat innerhalb einer bestimmten Zeitspanne zu viele Anfragen gesendet („Rate Limiting“). 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Anforderungskopfzeilenfelder zu groß: Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Kopfzeilenfelder zu groß sind. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Login Timeout (Microsoft): Eine Microsoft-Erweiterung. Zeigt an, dass Ihre Sitzung abgelaufen ist.
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Keine Antwort (Nginx): In Nginx-Protokollen verwendet, um anzuzeigen, dass der Server keine Informationen an den Client zurückgegeben und die Verbindung geschlossen hat (nützlich als Abschreckung für Malware). 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry With (Microsoft): Eine Microsoft-Erweiterung. Die Anfrage sollte nach Durchführung der entsprechenden Aktion erneut gesendet werden. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Blockiert durch Windows-Elternkontrollen (Microsoft): Eine Microsoft-Erweiterung. Dieser Fehler wird angezeigt, wenn Windows-Elternkontrollen aktiviert sind und den Zugriff auf die angegebene Webseite blockieren. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Wird in Exchange ActiveSync verwendet, wenn entweder ein effizienterer Server verfügbar ist oder der Server nicht auf das Postfach der Benutzer zugreifen kann.
   * Aufgrund rechtlicher Gründe nicht verfügbar: Der Server kann aufgrund einer Anfrage aufgrund rechtlicher Einschränkungen nicht betrieben werden. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Request Header zu groß (Nginx): Interne Nginx-Codes, ähnlich wie 431, aber bereits in Version 0.9.4 (am 21. Januar 2011) eingeführt. 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Cert Error (Nginx): Interne Code von Nginx, der verwendet wird, wenn ein Fehler mit dem SSL-Client-Zertifikat auftritt, um es in einem Log und einer Weiterleitung der Fehlerseite von 4XX zu unterscheiden. 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden.  Kein Zertifikat: Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP zu HTTPS (Nginx): Der interne Code von Nginx für einfache HTTP-Anfragen, die an den HTTPS-Port gesendet werden, um ihn in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token abgelaufen / ungültig (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 498 weist auf ein abgelaufenes oder anderweitig ungültiges Token hin. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token erforderlich (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 499 zeigt an, dass ein Token erforderlich ist (wenn kein Token eingereicht wurde). 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Interner Serverfehler: Ein allgemeiner Status für einen Fehler im Server selbst. 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nicht implementiert: Der Server kann auf die Anfrage nicht reagieren. Dies bedeutet in der Regel, dass der Server die Anfrage möglicherweise in Zukunft unterstützen könnte - andernfalls wäre ein 4xx-Status möglicherweise geeigneter. 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad Gateway: Der Server fungiert als Proxy und hat keine akzeptable Antwort vom vorgelagerten Server erhalten. 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Service nicht verfügbar: Der Server ist abgeschaltet und nimmt keine Anfragen entgegen. 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway-Timeout: Der Server fungiert als Proxy und hat keine Antwort vom vorgelagerten Server erhalten. 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP-Version nicht unterstützt: Der Server unterstützt die in der Anfrage angegebene HTTP-Protokollversion nicht. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant verhandelt auch: Transparente Inhaltsverhandlung für die Anfrage führt zu einer zirkulären Referenz. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Unzureichender Speicherplatz: Der Benutzer oder der Server verfügt nicht über ausreichend Speicherplatzkontingent, um die Anfrage zu erfüllen. 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Loop erkannt: Der Server hat einen endlosen Loop in der Anfrage erkannt. 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Bandbreitenlimit überschritten (Apache bw/limited-Erweiterung): Dieser Statuscode ist in keiner RFC festgelegt. Seine Verwendung ist unbekannt. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nicht erweitert: Weitere Erweiterungen der Anfrage sind erforderlich, damit sie erfüllt werden kann. 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Netzwerkauthentifizierung erforderlich: Der Client muss sich beim Netzwerk authentifizieren, bevor er Anfragen senden kann. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Unbekannter Fehler (Microsoft / CloudFlare): Dieser Statuscode ist in keiner RFC festgelegt und wird von bestimmten Diensten zurückgegeben, beispielsweise von Microsoft Azure und CloudFlare-Servern: "Der Fehler 520 ist im Wesentlichen eine 'Alles-abdecken'-Antwort für den Fall, dass der Ursprungsserver etwas Unerwartetes zurückgibt oder etwas, das nicht geduldet/gedeutet wird (Verstoß gegen das Protokoll oder leere Antwort)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web-Server ist abgestürzt (CloudFlare): Der ursprüngliche Server hat die Verbindung von CloudFlare abgelehnt. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Verbindung Timeout (CloudFlare): CloudFlare konnte keine TCP-Handshake mit dem Origin-Server durchführen. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin ist nicht erreichbar (CloudFlare): CloudFlare konnte den Origin-Server nicht erreichen; zum Beispiel, wenn die DNS-Records für den Origin-Server falsch sind. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Timeout aufgetreten (CloudFlare): CloudFlare konnte eine TCP-Verbindung zum Origin-Server herstellen, hat aber keine rechtzeitige HTTP-Antwort erhalten. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL-Handshake fehlgeschlagen (CloudFlare): CloudFlare konnte mit dem Ursprungsserver keinen SSL/TLS-Handshake aushandeln. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Ungültiges SSL-Zertifikat (CloudFlare): CloudFlare konnte das SSL/TLS-Zertifikat, das der Ursprungsserver präsentierte, nicht validieren. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun Fehler (CloudFlare): Die Anfrage ist abgelaufen oder fehlgeschlagen, nachdem die WAN-Verbindung hergestellt wurde. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen. 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Protokollwechsel: Der Anforderer hat den Server gebeten, das Protokoll zu wechseln und der Server hat bestätigt, dass er dies tun wird. 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Verarbeitung: Der Server hat die Anfrage erhalten und verarbeitet sie gerade, aber noch keine Antwort ist verfügbar. 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Erstellt: Die Anfrage wurde erfüllt und eine neue Ressource wurde erstellt. 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird. 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Nicht autoritative Informationen: HTTP 1.1. Der Server hat die Anfrage erfolgreich verarbeitet, gibt jedoch Informationen aus einer anderen Quelle zurück. 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Kein Inhalt: Der Server hat die Anfrage akzeptiert, aber gibt keinen Inhalt zurück. Dies wird häufig als Antwort auf eine DELETE-Anfrage verwendet. 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Inhalt zurücksetzen: Ähnlich wie eine 204-No-Content-Antwort, aber diese Antwort erfordert, dass der Anfragende die Dokumentansicht zurücksetzt. 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Teilinhalt: Der Server liefert nur einen Teil des Inhalts, wie vom Client über einen Range-Header angefordert. 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-Status: Der nachfolgende Nachrichtenkörper ist eine XML-Nachricht und kann eine Anzahl separater Antwortcodes enthalten, abhängig davon, wie viele Unteranfragen gestellt wurden. 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Bereits gemeldet: Die Mitglieder einer DAV-Bindung wurden bereits in einer früheren Antwort auf diese Anfrage aufgelistet und werden nicht erneut enthalten. 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM-Verwendung: Der Server hat eine GET-Anfrage für die Ressource erfüllt, und die Antwort stellt eine Darstellung des Ergebnisses einer oder mehrerer Instanzmanipulationen dar, die auf die aktuelle Instanz angewendet wurden. 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Mehrfachauswahl: Es gibt mehrere Optionen, aus denen der Client eine auswählen kann. 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Bewegt dauerhaft: Die Ressource wurde verschoben und alle weiteren Anfragen sollten sich auf ihre neue URI beziehen. 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Gefunden: Die HTTP 1.0-Spezifikation beschrieb diesen Status als "Vorübergehend verschoben", aber beliebte Browser reagieren auf diesen Status ähnlich wie auf das Verhalten, das für 303 vorgesehen ist. Die Ressource kann abgerufen werden, indem man die zurückgegebene URI referenziert. 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Siehe andere: Die Ressource kann über andere URIs abgerufen werden, indem die GET-Methode verwendet wird. Wenn dies als Antwort auf einen POST-, PUT- oder DELETE-Anfrage empfangen wird, kann in der Regel angenommen werden, dass der Server die Anfrage erfolgreich verarbeitet hat und den Client auf einen informativen Endpunkt verweist. 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nicht modifiziert: Die Ressource wurde seit der in den If-Modified-Since- oder If-Match-Headern angegebenen Version nicht modifiziert. Die Ressource wird nicht im Antwortkörper zurückgegeben. 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Verwenden Sie Proxy: HTTP 1.1. Die Ressource ist nur über einen Proxy verfügbar und die Adresse wird in der Antwort bereitgestellt. 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * Proxy wechseln: In HTTP 1.1 veraltet. Wurde verwendet, um anzuzeigen, dass nachfolgende Anfragen mit dem angegebenen Proxy gesendet werden sollten. 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Temporäre Umleitung: HTTP 1.1. Die Anfrage sollte mit der URI, die in der Antwort bereitgestellt wurde, wiederholt werden, aber zukünftige Anfragen sollten immer noch die ursprüngliche URI aufrufen. 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Dieser Code wird im Vorschlag für wiederaufnehmbare HTTP-Anfragen verwendet, um abgebrochene PUT- oder POST-Anfragen wiederaufzunehmen.
   * Dauerhafte Umleitung: Anfragen und alle zukünftigen Anfragen sollten unter Verwendung der in der Antwort bereitgestellten URI erneut gesendet werden. 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Fehlerhafte Anfrage: Die Anfrage konnte aufgrund der falschen Syntax der Anfrage nicht erfüllt werden. 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nicht autorisiert: Der Anforderer ist nicht autorisiert, auf die Ressource zuzugreifen. Dies ist ähnlich wie 403, wird aber in Fällen verwendet, in denen eine Authentifizierung erwartet wird, aber fehlgeschlagen ist oder nicht bereitgestellt wurde. 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Zahlung erforderlich: Reserviert für die zukünftige Nutzung. Einige Webdienste verwenden diesen Statuscode, um anzuzeigen, dass der Client eine übermäßige Anzahl von Anfragen gesendet hat. 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Verboten: Die Anfrage war korrekt formatiert, aber der Server weigert sich, die angeforderte Ressource bereitzustellen. Im Gegensatz zu 401 macht eine Authentifizierung keinen Unterschied in der Antwort des Servers. 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nicht gefunden: Die Ressource konnte nicht gefunden werden. Dies wird oft als Sammelbezeichnung für alle ungültigen URIs verwendet, die vom Server angefordert werden. 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Methode nicht erlaubt: Die Ressource wurde mit einer Methode angefordert, die nicht erlaubt ist. Zum Beispiel wurde eine Ressource mittels der POST-Methode angefordert, obwohl die Ressource nur die GET-Methode unterstützt. 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nicht akzeptabel: Die Ressource ist gültig, kann aber nicht in dem Format bereitgestellt werden, das in den Accept-Headern der Anfrage angegeben ist. 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy-Authentifizierung erforderlich: Vor der Erfüllung von Anfragen ist eine Authentifizierung beim Proxy erforderlich. 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout der Anfrage: Der Server hat die Wartezeit für eine Anfrage vom Client überschritten. Dem Client ist es erlaubt, die Anfrage zu wiederholen. 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Konflikt: Die Anfrage kann aufgrund eines Konflikts in den Anfrageparametern nicht abgeschlossen werden. 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Entfernt: Die Ressource ist an der angeforderten URI nicht mehr verfügbar und es wird keine Umleitung gegeben. 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Länge erforderlich: Die Anfrage hat die Länge ihres Inhalts nicht wie vom Ressourcen erforderlich angegeben. 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Voraussetzungsfehler: Der Server erfüllt nicht eine der Voraussetzungen, die vom Client festgelegt wurden. 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Request Entity zu groß: Die Anfrage ist größer als das, was der Server verarbeiten kann. 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Anfrage-URI zu lang: Die URI, die in der Anfrage bereitgestellt wird, ist zu lang für den Server, um sie zu verarbeiten. Dieser Statuscode wird häufig verwendet, wenn zu viele Daten in die URI einer GET-Anfrage kodiert wurden und stattdessen eine POST-Anfrage verwendet werden sollte. 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Ununterstützter Medientyp: Die vom Client bereitgestellten Daten haben einen Medientyp, der vom Server nicht unterstützt wird. 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Beantragter Bereich nicht erfüllbar: Der Client hat einen Teil der Ressource angefordert, aber der Server kann diesen Teil nicht bereitstellen. 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Erwartung fehlgeschlagen: Der Server kann die Anforderungen des Expect-Request-Header-Felds nicht erfüllen. 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * Ich bin ein Teekessel: Jeder Versuch, mit einem Teekessel Kaffee zu kochen, sollte zum Fehlercode "418 Ich bin ein Teekessel" führen. Der resultierende Entitätskörper kann kurz und stämmig sein. 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Fehlgeleitete Anfrage: Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann. Dieser Statuscode kann von einem Server gesendet werden, der nicht konfiguriert ist, um für die Kombination von Schema und Autorität, die in der Anfrage-URI enthalten sind, Antworten zu erzeugen. 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Unverarbeitbare Einheit: Die Anfrage war korrekt formatiert, kann aber in ihrer aktuellen Form nicht verarbeitet werden. Wird häufig verwendet, wenn die angegebenen Parameter Validierungsfehler nicht bestehen. 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Gesperrt: Die angeforderte Ressource wurde gefunden, ist jedoch gesperrt und wird nicht zurückgegeben. 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Abhängigkeitsfehler: Die Anfrage ist fehlgeschlagen, weil eine vorherige Anfrage fehlgeschlagen ist. 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Upgrade erforderlich: Der Client sollte die Anfrage mit einem aktualisierten Protokoll wie TLS 1.0 wiederholen. 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Voraussetzung erforderlich: Der Originalserver verlangt, dass die Anfrage bedingt ist. 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Zu viele Anfragen: Der Benutzer hat innerhalb einer bestimmten Zeitspanne zu viele Anfragen gesendet („Rate Limiting“). 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Anforderungskopfzeilenfelder zu groß: Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Kopfzeilenfelder zu groß sind. 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * Login Timeout (Microsoft): Eine Microsoft-Erweiterung. Zeigt an, dass Ihre Sitzung abgelaufen ist.
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * Keine Antwort (Nginx): In Nginx-Protokollen verwendet, um anzuzeigen, dass der Server keine Informationen an den Client zurückgegeben und die Verbindung geschlossen hat (nützlich als Abschreckung für Malware). 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * Retry With (Microsoft): Eine Microsoft-Erweiterung. Die Anfrage sollte nach Durchführung der entsprechenden Aktion erneut gesendet werden. 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * Blockiert durch Windows-Elternkontrollen (Microsoft): Eine Microsoft-Erweiterung. Dieser Fehler wird angezeigt, wenn Windows-Elternkontrollen aktiviert sind und den Zugriff auf die angegebene Webseite blockieren. 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Wird in Exchange ActiveSync verwendet, wenn entweder ein effizienterer Server verfügbar ist oder der Server nicht auf das Postfach der Benutzer zugreifen kann.
   * Aufgrund rechtlicher Gründe nicht verfügbar: Der Server kann aufgrund einer Anfrage aufgrund rechtlicher Einschränkungen nicht betrieben werden. 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * Request Header zu groß (Nginx): Interne Nginx-Codes, ähnlich wie 431, aber bereits in Version 0.9.4 (am 21. Januar 2011) eingeführt. 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * Cert Error (Nginx): Interne Code von Nginx, der verwendet wird, wenn ein Fehler mit dem SSL-Client-Zertifikat auftritt, um es in einem Log und einer Weiterleitung der Fehlerseite von 4XX zu unterscheiden. 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden.  Kein Zertifikat: Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP zu HTTPS (Nginx): Der interne Code von Nginx für einfache HTTP-Anfragen, die an den HTTPS-Port gesendet werden, um ihn in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * Token abgelaufen / ungültig (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 498 weist auf ein abgelaufenes oder anderweitig ungültiges Token hin. 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * Token erforderlich (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 499 zeigt an, dass ein Token erforderlich ist (wenn kein Token eingereicht wurde). 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Interner Serverfehler: Ein allgemeiner Status für einen Fehler im Server selbst. 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nicht implementiert: Der Server kann auf die Anfrage nicht reagieren. Dies bedeutet in der Regel, dass der Server die Anfrage möglicherweise in Zukunft unterstützen könnte - andernfalls wäre ein 4xx-Status möglicherweise geeigneter. 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad Gateway: Der Server fungiert als Proxy und hat keine akzeptable Antwort vom vorgelagerten Server erhalten. 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Service nicht verfügbar: Der Server ist abgeschaltet und nimmt keine Anfragen entgegen. 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway-Timeout: Der Server fungiert als Proxy und hat keine Antwort vom vorgelagerten Server erhalten. 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP-Version nicht unterstützt: Der Server unterstützt die in der Anfrage angegebene HTTP-Protokollversion nicht. 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant verhandelt auch: Transparente Inhaltsverhandlung für die Anfrage führt zu einer zirkulären Referenz. 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Unzureichender Speicherplatz: Der Benutzer oder der Server verfügt nicht über ausreichend Speicherplatzkontingent, um die Anfrage zu erfüllen. 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Loop erkannt: Der Server hat einen endlosen Loop in der Anfrage erkannt. 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * Bandbreitenlimit überschritten (Apache bw/limited-Erweiterung): Dieser Statuscode ist in keiner RFC festgelegt. Seine Verwendung ist unbekannt. 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nicht erweitert: Weitere Erweiterungen der Anfrage sind erforderlich, damit sie erfüllt werden kann. 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Netzwerkauthentifizierung erforderlich: Der Client muss sich beim Netzwerk authentifizieren, bevor er Anfragen senden kann. 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * Unbekannter Fehler (Microsoft / CloudFlare): Dieser Statuscode ist in keiner RFC festgelegt und wird von bestimmten Diensten zurückgegeben, beispielsweise von Microsoft Azure und CloudFlare-Servern: "Der Fehler 520 ist im Wesentlichen eine 'Alles-abdecken'-Antwort für den Fall, dass der Ursprungsserver etwas Unerwartetes zurückgibt oder etwas, das nicht geduldet/gedeutet wird (Verstoß gegen das Protokoll oder leere Antwort)." 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web-Server ist abgestürzt (CloudFlare): Der ursprüngliche Server hat die Verbindung von CloudFlare abgelehnt. 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * Verbindung Timeout (CloudFlare): CloudFlare konnte keine TCP-Handshake mit dem Origin-Server durchführen. 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * Origin ist nicht erreichbar (CloudFlare): CloudFlare konnte den Origin-Server nicht erreichen; zum Beispiel, wenn die DNS-Records für den Origin-Server falsch sind. 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * Timeout aufgetreten (CloudFlare): CloudFlare konnte eine TCP-Verbindung zum Origin-Server herstellen, hat aber keine rechtzeitige HTTP-Antwort erhalten. 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL-Handshake fehlgeschlagen (CloudFlare): CloudFlare konnte mit dem Ursprungsserver keinen SSL/TLS-Handshake aushandeln. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * Ungültiges SSL-Zertifikat (CloudFlare): CloudFlare konnte das SSL/TLS-Zertifikat, das der Ursprungsserver präsentierte, nicht validieren. 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Railgun Fehler (CloudFlare): Die Anfrage ist abgelaufen oder fehlgeschlagen, nachdem die WAN-Verbindung hergestellt wurde. 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
