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
export enum HttpStatusDescription {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen. 
   */
  CONTINUE = 'Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen. ',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Protokollwechsel: Der Anforderer hat den Server gebeten, das Protokoll zu wechseln und der Server hat bestätigt, dass er dies tun wird. 
   */
  SWITCHING_PROTOCOLS = 'Protokollwechsel: Der Anforderer hat den Server gebeten, das Protokoll zu wechseln und der Server hat bestätigt, dass er dies tun wird. ',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Verarbeitung: Der Server hat die Anfrage erhalten und verarbeitet sie gerade, aber noch keine Antwort ist verfügbar. 
   */
  PROCESSING = 'Verarbeitung: Der Server hat die Anfrage erhalten und verarbeitet sie gerade, aber noch keine Antwort ist verfügbar. ',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. 
   */
  OK = 'OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. ',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Erstellt: Die Anfrage wurde erfüllt und eine neue Ressource wurde erstellt. 
   */
  CREATED = 'Erstellt: Die Anfrage wurde erfüllt und eine neue Ressource wurde erstellt. ',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird. 
   */
  ACCEPTED = 'Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird. ',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Nicht autoritative Informationen: HTTP 1.1. Der Server hat die Anfrage erfolgreich verarbeitet, gibt jedoch Informationen aus einer anderen Quelle zurück. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Nicht autoritative Informationen: HTTP 1.1. Der Server hat die Anfrage erfolgreich verarbeitet, gibt jedoch Informationen aus einer anderen Quelle zurück. ',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Kein Inhalt: Der Server hat die Anfrage akzeptiert, aber gibt keinen Inhalt zurück. Dies wird häufig als Antwort auf eine DELETE-Anfrage verwendet. 
   */
  NO_CONTENT = 'Kein Inhalt: Der Server hat die Anfrage akzeptiert, aber gibt keinen Inhalt zurück. Dies wird häufig als Antwort auf eine DELETE-Anfrage verwendet. ',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Inhalt zurücksetzen: Ähnlich wie eine 204-No-Content-Antwort, aber diese Antwort erfordert, dass der Anfragende die Dokumentansicht zurücksetzt. 
   */
  RESET_CONTENT = 'Inhalt zurücksetzen: Ähnlich wie eine 204-No-Content-Antwort, aber diese Antwort erfordert, dass der Anfragende die Dokumentansicht zurücksetzt. ',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Teilinhalt: Der Server liefert nur einen Teil des Inhalts, wie vom Client über einen Range-Header angefordert. 
   */
  PARTIAL_CONTENT = 'Teilinhalt: Der Server liefert nur einen Teil des Inhalts, wie vom Client über einen Range-Header angefordert. ',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-Status: Der nachfolgende Nachrichtenkörper ist eine XML-Nachricht und kann eine Anzahl separater Antwortcodes enthalten, abhängig davon, wie viele Unteranfragen gestellt wurden. 
   */
  MULTI_STATUS = 'Multi-Status: Der nachfolgende Nachrichtenkörper ist eine XML-Nachricht und kann eine Anzahl separater Antwortcodes enthalten, abhängig davon, wie viele Unteranfragen gestellt wurden. ',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Bereits gemeldet: Die Mitglieder einer DAV-Bindung wurden bereits in einer früheren Antwort auf diese Anfrage aufgelistet und werden nicht erneut enthalten. 
   */
  ALREADY_REPORTED = 'Bereits gemeldet: Die Mitglieder einer DAV-Bindung wurden bereits in einer früheren Antwort auf diese Anfrage aufgelistet und werden nicht erneut enthalten. ',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM-Verwendung: Der Server hat eine GET-Anfrage für die Ressource erfüllt, und die Antwort stellt eine Darstellung des Ergebnisses einer oder mehrerer Instanzmanipulationen dar, die auf die aktuelle Instanz angewendet wurden. 
   */
  IM_USED = 'IM-Verwendung: Der Server hat eine GET-Anfrage für die Ressource erfüllt, und die Antwort stellt eine Darstellung des Ergebnisses einer oder mehrerer Instanzmanipulationen dar, die auf die aktuelle Instanz angewendet wurden. ',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Mehrfachauswahl: Es gibt mehrere Optionen, aus denen der Client eine auswählen kann. 
   */
  MULTIPLE_CHOICES = 'Mehrfachauswahl: Es gibt mehrere Optionen, aus denen der Client eine auswählen kann. ',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Bewegt dauerhaft: Die Ressource wurde verschoben und alle weiteren Anfragen sollten sich auf ihre neue URI beziehen. 
   */
  MOVED_PERMANENTLY = 'Bewegt dauerhaft: Die Ressource wurde verschoben und alle weiteren Anfragen sollten sich auf ihre neue URI beziehen. ',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Gefunden: Die HTTP 1.0-Spezifikation beschrieb diesen Status als "Vorübergehend verschoben", aber beliebte Browser reagieren auf diesen Status ähnlich wie auf das Verhalten, das für 303 vorgesehen ist. Die Ressource kann abgerufen werden, indem man die zurückgegebene URI referenziert. 
   */
  FOUND = 'Gefunden: Die HTTP 1.0-Spezifikation beschrieb diesen Status als "Vorübergehend verschoben", aber beliebte Browser reagieren auf diesen Status ähnlich wie auf das Verhalten, das für 303 vorgesehen ist. Die Ressource kann abgerufen werden, indem man die zurückgegebene URI referenziert. ',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Siehe andere: Die Ressource kann über andere URIs abgerufen werden, indem die GET-Methode verwendet wird. Wenn dies als Antwort auf einen POST-, PUT- oder DELETE-Anfrage empfangen wird, kann in der Regel angenommen werden, dass der Server die Anfrage erfolgreich verarbeitet hat und den Client auf einen informativen Endpunkt verweist. 
   */
  SEE_OTHER = 'Siehe andere: Die Ressource kann über andere URIs abgerufen werden, indem die GET-Methode verwendet wird. Wenn dies als Antwort auf einen POST-, PUT- oder DELETE-Anfrage empfangen wird, kann in der Regel angenommen werden, dass der Server die Anfrage erfolgreich verarbeitet hat und den Client auf einen informativen Endpunkt verweist. ',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nicht modifiziert: Die Ressource wurde seit der in den If-Modified-Since- oder If-Match-Headern angegebenen Version nicht modifiziert. Die Ressource wird nicht im Antwortkörper zurückgegeben. 
   */
  NOT_MODIFIED = 'Nicht modifiziert: Die Ressource wurde seit der in den If-Modified-Since- oder If-Match-Headern angegebenen Version nicht modifiziert. Die Ressource wird nicht im Antwortkörper zurückgegeben. ',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Verwenden Sie Proxy: HTTP 1.1. Die Ressource ist nur über einen Proxy verfügbar und die Adresse wird in der Antwort bereitgestellt. 
   */
  USE_PROXY = 'Verwenden Sie Proxy: HTTP 1.1. Die Ressource ist nur über einen Proxy verfügbar und die Adresse wird in der Antwort bereitgestellt. ',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Proxy wechseln: In HTTP 1.1 veraltet. Wurde verwendet, um anzuzeigen, dass nachfolgende Anfragen mit dem angegebenen Proxy gesendet werden sollten. 
   */
  SWITCH_PROXY = 'Proxy wechseln: In HTTP 1.1 veraltet. Wurde verwendet, um anzuzeigen, dass nachfolgende Anfragen mit dem angegebenen Proxy gesendet werden sollten. ',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Temporäre Umleitung: HTTP 1.1. Die Anfrage sollte mit der URI, die in der Antwort bereitgestellt wurde, wiederholt werden, aber zukünftige Anfragen sollten immer noch die ursprüngliche URI aufrufen. 
   */
  TEMPORARY_REDIRECT = 'Temporäre Umleitung: HTTP 1.1. Die Anfrage sollte mit der URI, die in der Antwort bereitgestellt wurde, wiederholt werden, aber zukünftige Anfragen sollten immer noch die ursprüngliche URI aufrufen. ',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Dieser Code wird im Vorschlag für wiederaufnehmbare HTTP-Anfragen verwendet, um abgebrochene PUT- oder POST-Anfragen wiederaufzunehmen.
   * Dauerhafte Umleitung: Anfragen und alle zukünftigen Anfragen sollten unter Verwendung der in der Antwort bereitgestellten URI erneut gesendet werden. 
   */
  PERMANENT_REDIRECT = 'Resume Incomplete (Google): Dieser Code wird im Vorschlag für wiederaufnehmbare HTTP-Anfragen verwendet, um abgebrochene PUT- oder POST-Anfragen wiederaufzunehmen.\n\
Dauerhafte Umleitung: Anfragen und alle zukünftigen Anfragen sollten unter Verwendung der in der Antwort bereitgestellten URI erneut gesendet werden. ',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Fehlerhafte Anfrage: Die Anfrage konnte aufgrund der falschen Syntax der Anfrage nicht erfüllt werden. 
   */
  BAD_REQUEST = 'Fehlerhafte Anfrage: Die Anfrage konnte aufgrund der falschen Syntax der Anfrage nicht erfüllt werden. ',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nicht autorisiert: Der Anforderer ist nicht autorisiert, auf die Ressource zuzugreifen. Dies ist ähnlich wie 403, wird aber in Fällen verwendet, in denen eine Authentifizierung erwartet wird, aber fehlgeschlagen ist oder nicht bereitgestellt wurde. 
   */
  UNAUTHORIZED = 'Nicht autorisiert: Der Anforderer ist nicht autorisiert, auf die Ressource zuzugreifen. Dies ist ähnlich wie 403, wird aber in Fällen verwendet, in denen eine Authentifizierung erwartet wird, aber fehlgeschlagen ist oder nicht bereitgestellt wurde. ',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Zahlung erforderlich: Reserviert für die zukünftige Nutzung. Einige Webdienste verwenden diesen Statuscode, um anzuzeigen, dass der Client eine übermäßige Anzahl von Anfragen gesendet hat. 
   */
  PAYMENT_REQUIRED = 'Zahlung erforderlich: Reserviert für die zukünftige Nutzung. Einige Webdienste verwenden diesen Statuscode, um anzuzeigen, dass der Client eine übermäßige Anzahl von Anfragen gesendet hat. ',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Verboten: Die Anfrage war korrekt formatiert, aber der Server weigert sich, die angeforderte Ressource bereitzustellen. Im Gegensatz zu 401 macht eine Authentifizierung keinen Unterschied in der Antwort des Servers. 
   */
  FORBIDDEN = 'Verboten: Die Anfrage war korrekt formatiert, aber der Server weigert sich, die angeforderte Ressource bereitzustellen. Im Gegensatz zu 401 macht eine Authentifizierung keinen Unterschied in der Antwort des Servers. ',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nicht gefunden: Die Ressource konnte nicht gefunden werden. Dies wird oft als Sammelbezeichnung für alle ungültigen URIs verwendet, die vom Server angefordert werden. 
   */
  NOT_FOUND = 'Nicht gefunden: Die Ressource konnte nicht gefunden werden. Dies wird oft als Sammelbezeichnung für alle ungültigen URIs verwendet, die vom Server angefordert werden. ',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Methode nicht erlaubt: Die Ressource wurde mit einer Methode angefordert, die nicht erlaubt ist. Zum Beispiel wurde eine Ressource mittels der POST-Methode angefordert, obwohl die Ressource nur die GET-Methode unterstützt. 
   */
  METHOD_NOT_ALLOWED = 'Methode nicht erlaubt: Die Ressource wurde mit einer Methode angefordert, die nicht erlaubt ist. Zum Beispiel wurde eine Ressource mittels der POST-Methode angefordert, obwohl die Ressource nur die GET-Methode unterstützt. ',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nicht akzeptabel: Die Ressource ist gültig, kann aber nicht in dem Format bereitgestellt werden, das in den Accept-Headern der Anfrage angegeben ist. 
   */
  NOT_ACCEPTABLE = 'Nicht akzeptabel: Die Ressource ist gültig, kann aber nicht in dem Format bereitgestellt werden, das in den Accept-Headern der Anfrage angegeben ist. ',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy-Authentifizierung erforderlich: Vor der Erfüllung von Anfragen ist eine Authentifizierung beim Proxy erforderlich. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy-Authentifizierung erforderlich: Vor der Erfüllung von Anfragen ist eine Authentifizierung beim Proxy erforderlich. ',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout der Anfrage: Der Server hat die Wartezeit für eine Anfrage vom Client überschritten. Dem Client ist es erlaubt, die Anfrage zu wiederholen. 
   */
  REQUEST_TIMEOUT = 'Timeout der Anfrage: Der Server hat die Wartezeit für eine Anfrage vom Client überschritten. Dem Client ist es erlaubt, die Anfrage zu wiederholen. ',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Konflikt: Die Anfrage kann aufgrund eines Konflikts in den Anfrageparametern nicht abgeschlossen werden. 
   */
  CONFLICT = 'Konflikt: Die Anfrage kann aufgrund eines Konflikts in den Anfrageparametern nicht abgeschlossen werden. ',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Entfernt: Die Ressource ist an der angeforderten URI nicht mehr verfügbar und es wird keine Umleitung gegeben. 
   */
  GONE = 'Entfernt: Die Ressource ist an der angeforderten URI nicht mehr verfügbar und es wird keine Umleitung gegeben. ',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Länge erforderlich: Die Anfrage hat die Länge ihres Inhalts nicht wie vom Ressourcen erforderlich angegeben. 
   */
  LENGTH_REQUIRED = 'Länge erforderlich: Die Anfrage hat die Länge ihres Inhalts nicht wie vom Ressourcen erforderlich angegeben. ',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Voraussetzungsfehler: Der Server erfüllt nicht eine der Voraussetzungen, die vom Client festgelegt wurden. 
   */
  PRECONDITION_FAILED = 'Voraussetzungsfehler: Der Server erfüllt nicht eine der Voraussetzungen, die vom Client festgelegt wurden. ',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Request Entity zu groß: Die Anfrage ist größer als das, was der Server verarbeiten kann. 
   */
  PAYLOAD_TOO_LARGE = 'Request Entity zu groß: Die Anfrage ist größer als das, was der Server verarbeiten kann. ',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Anfrage-URI zu lang: Die URI, die in der Anfrage bereitgestellt wird, ist zu lang für den Server, um sie zu verarbeiten. Dieser Statuscode wird häufig verwendet, wenn zu viele Daten in die URI einer GET-Anfrage kodiert wurden und stattdessen eine POST-Anfrage verwendet werden sollte. 
   */
  URI_TOO_LONG = 'Anfrage-URI zu lang: Die URI, die in der Anfrage bereitgestellt wird, ist zu lang für den Server, um sie zu verarbeiten. Dieser Statuscode wird häufig verwendet, wenn zu viele Daten in die URI einer GET-Anfrage kodiert wurden und stattdessen eine POST-Anfrage verwendet werden sollte. ',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Ununterstützter Medientyp: Die vom Client bereitgestellten Daten haben einen Medientyp, der vom Server nicht unterstützt wird. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Ununterstützter Medientyp: Die vom Client bereitgestellten Daten haben einen Medientyp, der vom Server nicht unterstützt wird. ',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Beantragter Bereich nicht erfüllbar: Der Client hat einen Teil der Ressource angefordert, aber der Server kann diesen Teil nicht bereitstellen. 
   */
  RANGE_NOT_SATISFIABLE = 'Beantragter Bereich nicht erfüllbar: Der Client hat einen Teil der Ressource angefordert, aber der Server kann diesen Teil nicht bereitstellen. ',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Erwartung fehlgeschlagen: Der Server kann die Anforderungen des Expect-Request-Header-Felds nicht erfüllen. 
   */
  EXPECTATION_FAILED = 'Erwartung fehlgeschlagen: Der Server kann die Anforderungen des Expect-Request-Header-Felds nicht erfüllen. ',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Ich bin ein Teekessel: Jeder Versuch, mit einem Teekessel Kaffee zu kochen, sollte zum Fehlercode "418 Ich bin ein Teekessel" führen. Der resultierende Entitätskörper kann kurz und stämmig sein. 
   */
  I_M_A_TEAPOT = 'Ich bin ein Teekessel: Jeder Versuch, mit einem Teekessel Kaffee zu kochen, sollte zum Fehlercode "418 Ich bin ein Teekessel" führen. Der resultierende Entitätskörper kann kurz und stämmig sein. ',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Fehlgeleitete Anfrage: Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann. Dieser Statuscode kann von einem Server gesendet werden, der nicht konfiguriert ist, um für die Kombination von Schema und Autorität, die in der Anfrage-URI enthalten sind, Antworten zu erzeugen. 
   */
  MISDIRECTED_REQUEST = 'Fehlgeleitete Anfrage: Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann. Dieser Statuscode kann von einem Server gesendet werden, der nicht konfiguriert ist, um für die Kombination von Schema und Autorität, die in der Anfrage-URI enthalten sind, Antworten zu erzeugen. ',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Unverarbeitbare Einheit: Die Anfrage war korrekt formatiert, kann aber in ihrer aktuellen Form nicht verarbeitet werden. Wird häufig verwendet, wenn die angegebenen Parameter Validierungsfehler nicht bestehen. 
   */
  UNPROCESSABLE_ENTITY = 'Unverarbeitbare Einheit: Die Anfrage war korrekt formatiert, kann aber in ihrer aktuellen Form nicht verarbeitet werden. Wird häufig verwendet, wenn die angegebenen Parameter Validierungsfehler nicht bestehen. ',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Gesperrt: Die angeforderte Ressource wurde gefunden, ist jedoch gesperrt und wird nicht zurückgegeben. 
   */
  LOCKED = 'Gesperrt: Die angeforderte Ressource wurde gefunden, ist jedoch gesperrt und wird nicht zurückgegeben. ',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Abhängigkeitsfehler: Die Anfrage ist fehlgeschlagen, weil eine vorherige Anfrage fehlgeschlagen ist. 
   */
  FAILED_DEPENDENCY = 'Abhängigkeitsfehler: Die Anfrage ist fehlgeschlagen, weil eine vorherige Anfrage fehlgeschlagen ist. ',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Upgrade erforderlich: Der Client sollte die Anfrage mit einem aktualisierten Protokoll wie TLS 1.0 wiederholen. 
   */
  UPGRADE_REQUIRED = 'Upgrade erforderlich: Der Client sollte die Anfrage mit einem aktualisierten Protokoll wie TLS 1.0 wiederholen. ',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Voraussetzung erforderlich: Der Originalserver verlangt, dass die Anfrage bedingt ist. 
   */
  PRECONDITION_REQUIRED = 'Voraussetzung erforderlich: Der Originalserver verlangt, dass die Anfrage bedingt ist. ',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Zu viele Anfragen: Der Benutzer hat innerhalb einer bestimmten Zeitspanne zu viele Anfragen gesendet („Rate Limiting“). 
   */
  TOO_MANY_REQUESTS = 'Zu viele Anfragen: Der Benutzer hat innerhalb einer bestimmten Zeitspanne zu viele Anfragen gesendet („Rate Limiting“). ',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Anforderungskopfzeilenfelder zu groß: Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Kopfzeilenfelder zu groß sind. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Anforderungskopfzeilenfelder zu groß: Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Kopfzeilenfelder zu groß sind. ',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Login Timeout (Microsoft): Eine Microsoft-Erweiterung. Zeigt an, dass Ihre Sitzung abgelaufen ist.
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft): Eine Microsoft-Erweiterung. Zeigt an, dass Ihre Sitzung abgelaufen ist.',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Keine Antwort (Nginx): In Nginx-Protokollen verwendet, um anzuzeigen, dass der Server keine Informationen an den Client zurückgegeben und die Verbindung geschlossen hat (nützlich als Abschreckung für Malware). 
   */
  NO_RESPONSE_NGINX = 'Keine Antwort (Nginx): In Nginx-Protokollen verwendet, um anzuzeigen, dass der Server keine Informationen an den Client zurückgegeben und die Verbindung geschlossen hat (nützlich als Abschreckung für Malware). ',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry With (Microsoft): Eine Microsoft-Erweiterung. Die Anfrage sollte nach Durchführung der entsprechenden Aktion erneut gesendet werden. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft): Eine Microsoft-Erweiterung. Die Anfrage sollte nach Durchführung der entsprechenden Aktion erneut gesendet werden. ',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Blockiert durch Windows-Elternkontrollen (Microsoft): Eine Microsoft-Erweiterung. Dieser Fehler wird angezeigt, wenn Windows-Elternkontrollen aktiviert sind und den Zugriff auf die angegebene Webseite blockieren. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blockiert durch Windows-Elternkontrollen (Microsoft): Eine Microsoft-Erweiterung. Dieser Fehler wird angezeigt, wenn Windows-Elternkontrollen aktiviert sind und den Zugriff auf die angegebene Webseite blockieren. ',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Wird in Exchange ActiveSync verwendet, wenn entweder ein effizienterer Server verfügbar ist oder der Server nicht auf das Postfach der Benutzer zugreifen kann.
   * Aufgrund rechtlicher Gründe nicht verfügbar: Der Server kann aufgrund einer Anfrage aufgrund rechtlicher Einschränkungen nicht betrieben werden. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Redirect (Microsoft): Wird in Exchange ActiveSync verwendet, wenn entweder ein effizienterer Server verfügbar ist oder der Server nicht auf das Postfach der Benutzer zugreifen kann.\n\
Aufgrund rechtlicher Gründe nicht verfügbar: Der Server kann aufgrund einer Anfrage aufgrund rechtlicher Einschränkungen nicht betrieben werden. ',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Request Header zu groß (Nginx): Interne Nginx-Codes, ähnlich wie 431, aber bereits in Version 0.9.4 (am 21. Januar 2011) eingeführt. 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header zu groß (Nginx): Interne Nginx-Codes, ähnlich wie 431, aber bereits in Version 0.9.4 (am 21. Januar 2011) eingeführt. ',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Cert Error (Nginx): Interne Code von Nginx, der verwendet wird, wenn ein Fehler mit dem SSL-Client-Zertifikat auftritt, um es in einem Log und einer Weiterleitung der Fehlerseite von 4XX zu unterscheiden. 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx): Interne Code von Nginx, der verwendet wird, wenn ein Fehler mit dem SSL-Client-Zertifikat auftritt, um es in einem Log und einer Weiterleitung der Fehlerseite von 4XX zu unterscheiden. ',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden.  Kein Zertifikat: Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx): Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden.  Kein Zertifikat: Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. ',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP zu HTTPS (Nginx): Der interne Code von Nginx für einfache HTTP-Anfragen, die an den HTTPS-Port gesendet werden, um ihn in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP zu HTTPS (Nginx): Der interne Code von Nginx für einfache HTTP-Anfragen, die an den HTTPS-Port gesendet werden, um ihn in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. ',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token abgelaufen / ungültig (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 498 weist auf ein abgelaufenes oder anderweitig ungültiges Token hin. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token abgelaufen / ungültig (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 498 weist auf ein abgelaufenes oder anderweitig ungültiges Token hin. ',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token erforderlich (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 499 zeigt an, dass ein Token erforderlich ist (wenn kein Token eingereicht wurde). 
   */
  TOKEN_REQUIRED_ESRI = 'Token erforderlich (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 499 zeigt an, dass ein Token erforderlich ist (wenn kein Token eingereicht wurde). ',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Interner Serverfehler: Ein allgemeiner Status für einen Fehler im Server selbst. 
   */
  INTERNAL_SERVER_ERROR = 'Interner Serverfehler: Ein allgemeiner Status für einen Fehler im Server selbst. ',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nicht implementiert: Der Server kann auf die Anfrage nicht reagieren. Dies bedeutet in der Regel, dass der Server die Anfrage möglicherweise in Zukunft unterstützen könnte - andernfalls wäre ein 4xx-Status möglicherweise geeigneter. 
   */
  NOT_IMPLEMENTED = 'Nicht implementiert: Der Server kann auf die Anfrage nicht reagieren. Dies bedeutet in der Regel, dass der Server die Anfrage möglicherweise in Zukunft unterstützen könnte - andernfalls wäre ein 4xx-Status möglicherweise geeigneter. ',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad Gateway: Der Server fungiert als Proxy und hat keine akzeptable Antwort vom vorgelagerten Server erhalten. 
   */
  BAD_GATEWAY = 'Bad Gateway: Der Server fungiert als Proxy und hat keine akzeptable Antwort vom vorgelagerten Server erhalten. ',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Service nicht verfügbar: Der Server ist abgeschaltet und nimmt keine Anfragen entgegen. 
   */
  SERVICE_UNAVAILABLE = 'Service nicht verfügbar: Der Server ist abgeschaltet und nimmt keine Anfragen entgegen. ',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway-Timeout: Der Server fungiert als Proxy und hat keine Antwort vom vorgelagerten Server erhalten. 
   */
  GATEWAY_TIMEOUT = 'Gateway-Timeout: Der Server fungiert als Proxy und hat keine Antwort vom vorgelagerten Server erhalten. ',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP-Version nicht unterstützt: Der Server unterstützt die in der Anfrage angegebene HTTP-Protokollversion nicht. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP-Version nicht unterstützt: Der Server unterstützt die in der Anfrage angegebene HTTP-Protokollversion nicht. ',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant verhandelt auch: Transparente Inhaltsverhandlung für die Anfrage führt zu einer zirkulären Referenz. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant verhandelt auch: Transparente Inhaltsverhandlung für die Anfrage führt zu einer zirkulären Referenz. ',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Unzureichender Speicherplatz: Der Benutzer oder der Server verfügt nicht über ausreichend Speicherplatzkontingent, um die Anfrage zu erfüllen. 
   */
  INSUFFICIENT_STORAGE = 'Unzureichender Speicherplatz: Der Benutzer oder der Server verfügt nicht über ausreichend Speicherplatzkontingent, um die Anfrage zu erfüllen. ',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Loop erkannt: Der Server hat einen endlosen Loop in der Anfrage erkannt. 
   */
  LOOP_DETECTED = 'Loop erkannt: Der Server hat einen endlosen Loop in der Anfrage erkannt. ',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Bandbreitenlimit überschritten (Apache bw/limited-Erweiterung): Dieser Statuscode ist in keiner RFC festgelegt. Seine Verwendung ist unbekannt. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandbreitenlimit überschritten (Apache bw/limited-Erweiterung): Dieser Statuscode ist in keiner RFC festgelegt. Seine Verwendung ist unbekannt. ',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nicht erweitert: Weitere Erweiterungen der Anfrage sind erforderlich, damit sie erfüllt werden kann. 
   */
  NOT_EXTENDED = 'Nicht erweitert: Weitere Erweiterungen der Anfrage sind erforderlich, damit sie erfüllt werden kann. ',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Netzwerkauthentifizierung erforderlich: Der Client muss sich beim Netzwerk authentifizieren, bevor er Anfragen senden kann. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Netzwerkauthentifizierung erforderlich: Der Client muss sich beim Netzwerk authentifizieren, bevor er Anfragen senden kann. ',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Unbekannter Fehler (Microsoft / CloudFlare): Dieser Statuscode ist in keiner RFC festgelegt und wird von bestimmten Diensten zurückgegeben, beispielsweise von Microsoft Azure und CloudFlare-Servern: "Der Fehler 520 ist im Wesentlichen eine 'Alles-abdecken'-Antwort für den Fall, dass der Ursprungsserver etwas Unerwartetes zurückgibt oder etwas, das nicht geduldet/gedeutet wird (Verstoß gegen das Protokoll oder leere Antwort)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unbekannter Fehler (Microsoft / CloudFlare): Dieser Statuscode ist in keiner RFC festgelegt und wird von bestimmten Diensten zurückgegeben, beispielsweise von Microsoft Azure und CloudFlare-Servern: "Der Fehler 520 ist im Wesentlichen eine \'Alles-abdecken\'-Antwort für den Fall, dass der Ursprungsserver etwas Unerwartetes zurückgibt oder etwas, das nicht geduldet/gedeutet wird (Verstoß gegen das Protokoll oder leere Antwort)." ',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web-Server ist abgestürzt (CloudFlare): Der ursprüngliche Server hat die Verbindung von CloudFlare abgelehnt. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web-Server ist abgestürzt (CloudFlare): Der ursprüngliche Server hat die Verbindung von CloudFlare abgelehnt. ',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Verbindung Timeout (CloudFlare): CloudFlare konnte keine TCP-Handshake mit dem Origin-Server durchführen. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Verbindung Timeout (CloudFlare): CloudFlare konnte keine TCP-Handshake mit dem Origin-Server durchführen. ',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin ist nicht erreichbar (CloudFlare): CloudFlare konnte den Origin-Server nicht erreichen; zum Beispiel, wenn die DNS-Records für den Origin-Server falsch sind. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin ist nicht erreichbar (CloudFlare): CloudFlare konnte den Origin-Server nicht erreichen; zum Beispiel, wenn die DNS-Records für den Origin-Server falsch sind. ',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Timeout aufgetreten (CloudFlare): CloudFlare konnte eine TCP-Verbindung zum Origin-Server herstellen, hat aber keine rechtzeitige HTTP-Antwort erhalten. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'Timeout aufgetreten (CloudFlare): CloudFlare konnte eine TCP-Verbindung zum Origin-Server herstellen, hat aber keine rechtzeitige HTTP-Antwort erhalten. ',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL-Handshake fehlgeschlagen (CloudFlare): CloudFlare konnte mit dem Ursprungsserver keinen SSL/TLS-Handshake aushandeln. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL-Handshake fehlgeschlagen (CloudFlare): CloudFlare konnte mit dem Ursprungsserver keinen SSL/TLS-Handshake aushandeln. ',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Ungültiges SSL-Zertifikat (CloudFlare): CloudFlare konnte das SSL/TLS-Zertifikat, das der Ursprungsserver präsentierte, nicht validieren. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Ungültiges SSL-Zertifikat (CloudFlare): CloudFlare konnte das SSL/TLS-Zertifikat, das der Ursprungsserver präsentierte, nicht validieren. ',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun Fehler (CloudFlare): Die Anfrage ist abgelaufen oder fehlgeschlagen, nachdem die WAN-Verbindung hergestellt wurde. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Fehler (CloudFlare): Die Anfrage ist abgelaufen oder fehlgeschlagen, nachdem die WAN-Verbindung hergestellt wurde. '
}

export enum HttpStatusDescriptionByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen. 
   */
  h100 = 'Weiter: Der Server hat die Request-Header erhalten und der Client sollte mit dem Senden des Request-Bodys fortsetzen. ',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Protokollwechsel: Der Anforderer hat den Server gebeten, das Protokoll zu wechseln und der Server hat bestätigt, dass er dies tun wird. 
   */
  h101 = 'Protokollwechsel: Der Anforderer hat den Server gebeten, das Protokoll zu wechseln und der Server hat bestätigt, dass er dies tun wird. ',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Verarbeitung: Der Server hat die Anfrage erhalten und verarbeitet sie gerade, aber noch keine Antwort ist verfügbar. 
   */
  h102 = 'Verarbeitung: Der Server hat die Anfrage erhalten und verarbeitet sie gerade, aber noch keine Antwort ist verfügbar. ',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. 
   */
  h200 = 'OK: Die Standardantwort für erfolgreiche HTTP-Anfragen. ',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Erstellt: Die Anfrage wurde erfüllt und eine neue Ressource wurde erstellt. 
   */
  h201 = 'Erstellt: Die Anfrage wurde erfüllt und eine neue Ressource wurde erstellt. ',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird. 
   */
  h202 = 'Akzeptiert: Die Anfrage wurde akzeptiert, ist aber noch nicht verarbeitet worden. Dieser Code garantiert nicht, dass die Anfrage erfolgreich verarbeitet wird. ',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Nicht autoritative Informationen: HTTP 1.1. Der Server hat die Anfrage erfolgreich verarbeitet, gibt jedoch Informationen aus einer anderen Quelle zurück. 
   */
  h203 = 'Nicht autoritative Informationen: HTTP 1.1. Der Server hat die Anfrage erfolgreich verarbeitet, gibt jedoch Informationen aus einer anderen Quelle zurück. ',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Kein Inhalt: Der Server hat die Anfrage akzeptiert, aber gibt keinen Inhalt zurück. Dies wird häufig als Antwort auf eine DELETE-Anfrage verwendet. 
   */
  h204 = 'Kein Inhalt: Der Server hat die Anfrage akzeptiert, aber gibt keinen Inhalt zurück. Dies wird häufig als Antwort auf eine DELETE-Anfrage verwendet. ',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Inhalt zurücksetzen: Ähnlich wie eine 204-No-Content-Antwort, aber diese Antwort erfordert, dass der Anfragende die Dokumentansicht zurücksetzt. 
   */
  h205 = 'Inhalt zurücksetzen: Ähnlich wie eine 204-No-Content-Antwort, aber diese Antwort erfordert, dass der Anfragende die Dokumentansicht zurücksetzt. ',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Teilinhalt: Der Server liefert nur einen Teil des Inhalts, wie vom Client über einen Range-Header angefordert. 
   */
  h206 = 'Teilinhalt: Der Server liefert nur einen Teil des Inhalts, wie vom Client über einen Range-Header angefordert. ',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-Status: Der nachfolgende Nachrichtenkörper ist eine XML-Nachricht und kann eine Anzahl separater Antwortcodes enthalten, abhängig davon, wie viele Unteranfragen gestellt wurden. 
   */
  h207 = 'Multi-Status: Der nachfolgende Nachrichtenkörper ist eine XML-Nachricht und kann eine Anzahl separater Antwortcodes enthalten, abhängig davon, wie viele Unteranfragen gestellt wurden. ',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Bereits gemeldet: Die Mitglieder einer DAV-Bindung wurden bereits in einer früheren Antwort auf diese Anfrage aufgelistet und werden nicht erneut enthalten. 
   */
  h208 = 'Bereits gemeldet: Die Mitglieder einer DAV-Bindung wurden bereits in einer früheren Antwort auf diese Anfrage aufgelistet und werden nicht erneut enthalten. ',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM-Verwendung: Der Server hat eine GET-Anfrage für die Ressource erfüllt, und die Antwort stellt eine Darstellung des Ergebnisses einer oder mehrerer Instanzmanipulationen dar, die auf die aktuelle Instanz angewendet wurden. 
   */
  h226 = 'IM-Verwendung: Der Server hat eine GET-Anfrage für die Ressource erfüllt, und die Antwort stellt eine Darstellung des Ergebnisses einer oder mehrerer Instanzmanipulationen dar, die auf die aktuelle Instanz angewendet wurden. ',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Mehrfachauswahl: Es gibt mehrere Optionen, aus denen der Client eine auswählen kann. 
   */
  h300 = 'Mehrfachauswahl: Es gibt mehrere Optionen, aus denen der Client eine auswählen kann. ',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Bewegt dauerhaft: Die Ressource wurde verschoben und alle weiteren Anfragen sollten sich auf ihre neue URI beziehen. 
   */
  h301 = 'Bewegt dauerhaft: Die Ressource wurde verschoben und alle weiteren Anfragen sollten sich auf ihre neue URI beziehen. ',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Gefunden: Die HTTP 1.0-Spezifikation beschrieb diesen Status als "Vorübergehend verschoben", aber beliebte Browser reagieren auf diesen Status ähnlich wie auf das Verhalten, das für 303 vorgesehen ist. Die Ressource kann abgerufen werden, indem man die zurückgegebene URI referenziert. 
   */
  h302 = 'Gefunden: Die HTTP 1.0-Spezifikation beschrieb diesen Status als "Vorübergehend verschoben", aber beliebte Browser reagieren auf diesen Status ähnlich wie auf das Verhalten, das für 303 vorgesehen ist. Die Ressource kann abgerufen werden, indem man die zurückgegebene URI referenziert. ',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Siehe andere: Die Ressource kann über andere URIs abgerufen werden, indem die GET-Methode verwendet wird. Wenn dies als Antwort auf einen POST-, PUT- oder DELETE-Anfrage empfangen wird, kann in der Regel angenommen werden, dass der Server die Anfrage erfolgreich verarbeitet hat und den Client auf einen informativen Endpunkt verweist. 
   */
  h303 = 'Siehe andere: Die Ressource kann über andere URIs abgerufen werden, indem die GET-Methode verwendet wird. Wenn dies als Antwort auf einen POST-, PUT- oder DELETE-Anfrage empfangen wird, kann in der Regel angenommen werden, dass der Server die Anfrage erfolgreich verarbeitet hat und den Client auf einen informativen Endpunkt verweist. ',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nicht modifiziert: Die Ressource wurde seit der in den If-Modified-Since- oder If-Match-Headern angegebenen Version nicht modifiziert. Die Ressource wird nicht im Antwortkörper zurückgegeben. 
   */
  h304 = 'Nicht modifiziert: Die Ressource wurde seit der in den If-Modified-Since- oder If-Match-Headern angegebenen Version nicht modifiziert. Die Ressource wird nicht im Antwortkörper zurückgegeben. ',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Verwenden Sie Proxy: HTTP 1.1. Die Ressource ist nur über einen Proxy verfügbar und die Adresse wird in der Antwort bereitgestellt. 
   */
  h305 = 'Verwenden Sie Proxy: HTTP 1.1. Die Ressource ist nur über einen Proxy verfügbar und die Adresse wird in der Antwort bereitgestellt. ',
  /**
   * h306: 
   *
   * Empty
   * Proxy wechseln: In HTTP 1.1 veraltet. Wurde verwendet, um anzuzeigen, dass nachfolgende Anfragen mit dem angegebenen Proxy gesendet werden sollten. 
   */
  h306 = 'Proxy wechseln: In HTTP 1.1 veraltet. Wurde verwendet, um anzuzeigen, dass nachfolgende Anfragen mit dem angegebenen Proxy gesendet werden sollten. ',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Temporäre Umleitung: HTTP 1.1. Die Anfrage sollte mit der URI, die in der Antwort bereitgestellt wurde, wiederholt werden, aber zukünftige Anfragen sollten immer noch die ursprüngliche URI aufrufen. 
   */
  h307 = 'Temporäre Umleitung: HTTP 1.1. Die Anfrage sollte mit der URI, die in der Antwort bereitgestellt wurde, wiederholt werden, aber zukünftige Anfragen sollten immer noch die ursprüngliche URI aufrufen. ',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Dieser Code wird im Vorschlag für wiederaufnehmbare HTTP-Anfragen verwendet, um abgebrochene PUT- oder POST-Anfragen wiederaufzunehmen.
   * Dauerhafte Umleitung: Anfragen und alle zukünftigen Anfragen sollten unter Verwendung der in der Antwort bereitgestellten URI erneut gesendet werden. 
   */
  h308 = 'Resume Incomplete (Google): Dieser Code wird im Vorschlag für wiederaufnehmbare HTTP-Anfragen verwendet, um abgebrochene PUT- oder POST-Anfragen wiederaufzunehmen.\n\
Dauerhafte Umleitung: Anfragen und alle zukünftigen Anfragen sollten unter Verwendung der in der Antwort bereitgestellten URI erneut gesendet werden. ',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Fehlerhafte Anfrage: Die Anfrage konnte aufgrund der falschen Syntax der Anfrage nicht erfüllt werden. 
   */
  h400 = 'Fehlerhafte Anfrage: Die Anfrage konnte aufgrund der falschen Syntax der Anfrage nicht erfüllt werden. ',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nicht autorisiert: Der Anforderer ist nicht autorisiert, auf die Ressource zuzugreifen. Dies ist ähnlich wie 403, wird aber in Fällen verwendet, in denen eine Authentifizierung erwartet wird, aber fehlgeschlagen ist oder nicht bereitgestellt wurde. 
   */
  h401 = 'Nicht autorisiert: Der Anforderer ist nicht autorisiert, auf die Ressource zuzugreifen. Dies ist ähnlich wie 403, wird aber in Fällen verwendet, in denen eine Authentifizierung erwartet wird, aber fehlgeschlagen ist oder nicht bereitgestellt wurde. ',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Zahlung erforderlich: Reserviert für die zukünftige Nutzung. Einige Webdienste verwenden diesen Statuscode, um anzuzeigen, dass der Client eine übermäßige Anzahl von Anfragen gesendet hat. 
   */
  h402 = 'Zahlung erforderlich: Reserviert für die zukünftige Nutzung. Einige Webdienste verwenden diesen Statuscode, um anzuzeigen, dass der Client eine übermäßige Anzahl von Anfragen gesendet hat. ',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Verboten: Die Anfrage war korrekt formatiert, aber der Server weigert sich, die angeforderte Ressource bereitzustellen. Im Gegensatz zu 401 macht eine Authentifizierung keinen Unterschied in der Antwort des Servers. 
   */
  h403 = 'Verboten: Die Anfrage war korrekt formatiert, aber der Server weigert sich, die angeforderte Ressource bereitzustellen. Im Gegensatz zu 401 macht eine Authentifizierung keinen Unterschied in der Antwort des Servers. ',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nicht gefunden: Die Ressource konnte nicht gefunden werden. Dies wird oft als Sammelbezeichnung für alle ungültigen URIs verwendet, die vom Server angefordert werden. 
   */
  h404 = 'Nicht gefunden: Die Ressource konnte nicht gefunden werden. Dies wird oft als Sammelbezeichnung für alle ungültigen URIs verwendet, die vom Server angefordert werden. ',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Methode nicht erlaubt: Die Ressource wurde mit einer Methode angefordert, die nicht erlaubt ist. Zum Beispiel wurde eine Ressource mittels der POST-Methode angefordert, obwohl die Ressource nur die GET-Methode unterstützt. 
   */
  h405 = 'Methode nicht erlaubt: Die Ressource wurde mit einer Methode angefordert, die nicht erlaubt ist. Zum Beispiel wurde eine Ressource mittels der POST-Methode angefordert, obwohl die Ressource nur die GET-Methode unterstützt. ',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nicht akzeptabel: Die Ressource ist gültig, kann aber nicht in dem Format bereitgestellt werden, das in den Accept-Headern der Anfrage angegeben ist. 
   */
  h406 = 'Nicht akzeptabel: Die Ressource ist gültig, kann aber nicht in dem Format bereitgestellt werden, das in den Accept-Headern der Anfrage angegeben ist. ',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy-Authentifizierung erforderlich: Vor der Erfüllung von Anfragen ist eine Authentifizierung beim Proxy erforderlich. 
   */
  h407 = 'Proxy-Authentifizierung erforderlich: Vor der Erfüllung von Anfragen ist eine Authentifizierung beim Proxy erforderlich. ',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout der Anfrage: Der Server hat die Wartezeit für eine Anfrage vom Client überschritten. Dem Client ist es erlaubt, die Anfrage zu wiederholen. 
   */
  h408 = 'Timeout der Anfrage: Der Server hat die Wartezeit für eine Anfrage vom Client überschritten. Dem Client ist es erlaubt, die Anfrage zu wiederholen. ',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Konflikt: Die Anfrage kann aufgrund eines Konflikts in den Anfrageparametern nicht abgeschlossen werden. 
   */
  h409 = 'Konflikt: Die Anfrage kann aufgrund eines Konflikts in den Anfrageparametern nicht abgeschlossen werden. ',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Entfernt: Die Ressource ist an der angeforderten URI nicht mehr verfügbar und es wird keine Umleitung gegeben. 
   */
  h410 = 'Entfernt: Die Ressource ist an der angeforderten URI nicht mehr verfügbar und es wird keine Umleitung gegeben. ',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Länge erforderlich: Die Anfrage hat die Länge ihres Inhalts nicht wie vom Ressourcen erforderlich angegeben. 
   */
  h411 = 'Länge erforderlich: Die Anfrage hat die Länge ihres Inhalts nicht wie vom Ressourcen erforderlich angegeben. ',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Voraussetzungsfehler: Der Server erfüllt nicht eine der Voraussetzungen, die vom Client festgelegt wurden. 
   */
  h412 = 'Voraussetzungsfehler: Der Server erfüllt nicht eine der Voraussetzungen, die vom Client festgelegt wurden. ',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Request Entity zu groß: Die Anfrage ist größer als das, was der Server verarbeiten kann. 
   */
  h413 = 'Request Entity zu groß: Die Anfrage ist größer als das, was der Server verarbeiten kann. ',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Anfrage-URI zu lang: Die URI, die in der Anfrage bereitgestellt wird, ist zu lang für den Server, um sie zu verarbeiten. Dieser Statuscode wird häufig verwendet, wenn zu viele Daten in die URI einer GET-Anfrage kodiert wurden und stattdessen eine POST-Anfrage verwendet werden sollte. 
   */
  h414 = 'Anfrage-URI zu lang: Die URI, die in der Anfrage bereitgestellt wird, ist zu lang für den Server, um sie zu verarbeiten. Dieser Statuscode wird häufig verwendet, wenn zu viele Daten in die URI einer GET-Anfrage kodiert wurden und stattdessen eine POST-Anfrage verwendet werden sollte. ',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Ununterstützter Medientyp: Die vom Client bereitgestellten Daten haben einen Medientyp, der vom Server nicht unterstützt wird. 
   */
  h415 = 'Ununterstützter Medientyp: Die vom Client bereitgestellten Daten haben einen Medientyp, der vom Server nicht unterstützt wird. ',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Beantragter Bereich nicht erfüllbar: Der Client hat einen Teil der Ressource angefordert, aber der Server kann diesen Teil nicht bereitstellen. 
   */
  h416 = 'Beantragter Bereich nicht erfüllbar: Der Client hat einen Teil der Ressource angefordert, aber der Server kann diesen Teil nicht bereitstellen. ',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Erwartung fehlgeschlagen: Der Server kann die Anforderungen des Expect-Request-Header-Felds nicht erfüllen. 
   */
  h417 = 'Erwartung fehlgeschlagen: Der Server kann die Anforderungen des Expect-Request-Header-Felds nicht erfüllen. ',
  /**
   * h418: 
   *
   * Empty
   * Ich bin ein Teekessel: Jeder Versuch, mit einem Teekessel Kaffee zu kochen, sollte zum Fehlercode "418 Ich bin ein Teekessel" führen. Der resultierende Entitätskörper kann kurz und stämmig sein. 
   */
  h418 = 'Ich bin ein Teekessel: Jeder Versuch, mit einem Teekessel Kaffee zu kochen, sollte zum Fehlercode "418 Ich bin ein Teekessel" führen. Der resultierende Entitätskörper kann kurz und stämmig sein. ',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Fehlgeleitete Anfrage: Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann. Dieser Statuscode kann von einem Server gesendet werden, der nicht konfiguriert ist, um für die Kombination von Schema und Autorität, die in der Anfrage-URI enthalten sind, Antworten zu erzeugen. 
   */
  h421 = 'Fehlgeleitete Anfrage: Die Anfrage wurde an einen Server gerichtet, der keine Antwort erzeugen kann. Dieser Statuscode kann von einem Server gesendet werden, der nicht konfiguriert ist, um für die Kombination von Schema und Autorität, die in der Anfrage-URI enthalten sind, Antworten zu erzeugen. ',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Unverarbeitbare Einheit: Die Anfrage war korrekt formatiert, kann aber in ihrer aktuellen Form nicht verarbeitet werden. Wird häufig verwendet, wenn die angegebenen Parameter Validierungsfehler nicht bestehen. 
   */
  h422 = 'Unverarbeitbare Einheit: Die Anfrage war korrekt formatiert, kann aber in ihrer aktuellen Form nicht verarbeitet werden. Wird häufig verwendet, wenn die angegebenen Parameter Validierungsfehler nicht bestehen. ',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Gesperrt: Die angeforderte Ressource wurde gefunden, ist jedoch gesperrt und wird nicht zurückgegeben. 
   */
  h423 = 'Gesperrt: Die angeforderte Ressource wurde gefunden, ist jedoch gesperrt und wird nicht zurückgegeben. ',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Abhängigkeitsfehler: Die Anfrage ist fehlgeschlagen, weil eine vorherige Anfrage fehlgeschlagen ist. 
   */
  h424 = 'Abhängigkeitsfehler: Die Anfrage ist fehlgeschlagen, weil eine vorherige Anfrage fehlgeschlagen ist. ',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Upgrade erforderlich: Der Client sollte die Anfrage mit einem aktualisierten Protokoll wie TLS 1.0 wiederholen. 
   */
  h426 = 'Upgrade erforderlich: Der Client sollte die Anfrage mit einem aktualisierten Protokoll wie TLS 1.0 wiederholen. ',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Voraussetzung erforderlich: Der Originalserver verlangt, dass die Anfrage bedingt ist. 
   */
  h428 = 'Voraussetzung erforderlich: Der Originalserver verlangt, dass die Anfrage bedingt ist. ',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Zu viele Anfragen: Der Benutzer hat innerhalb einer bestimmten Zeitspanne zu viele Anfragen gesendet („Rate Limiting“). 
   */
  h429 = 'Zu viele Anfragen: Der Benutzer hat innerhalb einer bestimmten Zeitspanne zu viele Anfragen gesendet („Rate Limiting“). ',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Anforderungskopfzeilenfelder zu groß: Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Kopfzeilenfelder zu groß sind. 
   */
  h431 = 'Anforderungskopfzeilenfelder zu groß: Der Server ist nicht bereit, die Anfrage zu verarbeiten, weil seine Kopfzeilenfelder zu groß sind. ',
  /**
   * h440: 
   *
   * Empty
   * Login Timeout (Microsoft): Eine Microsoft-Erweiterung. Zeigt an, dass Ihre Sitzung abgelaufen ist.
   */
  h440 = 'Login Timeout (Microsoft): Eine Microsoft-Erweiterung. Zeigt an, dass Ihre Sitzung abgelaufen ist.',
  /**
   * h444: 
   *
   * Empty
   * Keine Antwort (Nginx): In Nginx-Protokollen verwendet, um anzuzeigen, dass der Server keine Informationen an den Client zurückgegeben und die Verbindung geschlossen hat (nützlich als Abschreckung für Malware). 
   */
  h444 = 'Keine Antwort (Nginx): In Nginx-Protokollen verwendet, um anzuzeigen, dass der Server keine Informationen an den Client zurückgegeben und die Verbindung geschlossen hat (nützlich als Abschreckung für Malware). ',
  /**
   * h449: 
   *
   * Empty
   * Retry With (Microsoft): Eine Microsoft-Erweiterung. Die Anfrage sollte nach Durchführung der entsprechenden Aktion erneut gesendet werden. 
   */
  h449 = 'Retry With (Microsoft): Eine Microsoft-Erweiterung. Die Anfrage sollte nach Durchführung der entsprechenden Aktion erneut gesendet werden. ',
  /**
   * h450: 
   *
   * Empty
   * Blockiert durch Windows-Elternkontrollen (Microsoft): Eine Microsoft-Erweiterung. Dieser Fehler wird angezeigt, wenn Windows-Elternkontrollen aktiviert sind und den Zugriff auf die angegebene Webseite blockieren. 
   */
  h450 = 'Blockiert durch Windows-Elternkontrollen (Microsoft): Eine Microsoft-Erweiterung. Dieser Fehler wird angezeigt, wenn Windows-Elternkontrollen aktiviert sind und den Zugriff auf die angegebene Webseite blockieren. ',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Wird in Exchange ActiveSync verwendet, wenn entweder ein effizienterer Server verfügbar ist oder der Server nicht auf das Postfach der Benutzer zugreifen kann.
   * Aufgrund rechtlicher Gründe nicht verfügbar: Der Server kann aufgrund einer Anfrage aufgrund rechtlicher Einschränkungen nicht betrieben werden. 
   */
  h451 = 'Redirect (Microsoft): Wird in Exchange ActiveSync verwendet, wenn entweder ein effizienterer Server verfügbar ist oder der Server nicht auf das Postfach der Benutzer zugreifen kann.\n\
Aufgrund rechtlicher Gründe nicht verfügbar: Der Server kann aufgrund einer Anfrage aufgrund rechtlicher Einschränkungen nicht betrieben werden. ',
  /**
   * h494: 
   *
   * Empty
   * Request Header zu groß (Nginx): Interne Nginx-Codes, ähnlich wie 431, aber bereits in Version 0.9.4 (am 21. Januar 2011) eingeführt. 
   */
  h494 = 'Request Header zu groß (Nginx): Interne Nginx-Codes, ähnlich wie 431, aber bereits in Version 0.9.4 (am 21. Januar 2011) eingeführt. ',
  /**
   * h495: 
   *
   * Empty
   * Cert Error (Nginx): Interne Code von Nginx, der verwendet wird, wenn ein Fehler mit dem SSL-Client-Zertifikat auftritt, um es in einem Log und einer Weiterleitung der Fehlerseite von 4XX zu unterscheiden. 
   */
  h495 = 'Cert Error (Nginx): Interne Code von Nginx, der verwendet wird, wenn ein Fehler mit dem SSL-Client-Zertifikat auftritt, um es in einem Log und einer Weiterleitung der Fehlerseite von 4XX zu unterscheiden. ',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden.  Kein Zertifikat: Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. 
   */
  h496 = 'No Cert (Nginx): Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden.  Kein Zertifikat: Interne Nginx-Code, der verwendet wird, wenn der Client kein Zertifikat bereitstellt, um es in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. ',
  /**
   * h497: 
   *
   * Empty
   * HTTP zu HTTPS (Nginx): Der interne Code von Nginx für einfache HTTP-Anfragen, die an den HTTPS-Port gesendet werden, um ihn in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. 
   */
  h497 = 'HTTP zu HTTPS (Nginx): Der interne Code von Nginx für einfache HTTP-Anfragen, die an den HTTPS-Port gesendet werden, um ihn in einem Log und einer Weiterleitung der Fehler-Seite von 4XX zu unterscheiden. ',
  /**
   * h498: 
   *
   * Empty
   * Token abgelaufen / ungültig (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 498 weist auf ein abgelaufenes oder anderweitig ungültiges Token hin. 
   */
  h498 = 'Token abgelaufen / ungültig (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 498 weist auf ein abgelaufenes oder anderweitig ungültiges Token hin. ',
  /**
   * h499: 
   *
   * Empty
   * Token erforderlich (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 499 zeigt an, dass ein Token erforderlich ist (wenn kein Token eingereicht wurde). 
   */
  h499 = 'Token erforderlich (Esri): Wird von ArcGIS for Server zurückgegeben. Ein Code von 499 zeigt an, dass ein Token erforderlich ist (wenn kein Token eingereicht wurde). ',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Interner Serverfehler: Ein allgemeiner Status für einen Fehler im Server selbst. 
   */
  h500 = 'Interner Serverfehler: Ein allgemeiner Status für einen Fehler im Server selbst. ',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nicht implementiert: Der Server kann auf die Anfrage nicht reagieren. Dies bedeutet in der Regel, dass der Server die Anfrage möglicherweise in Zukunft unterstützen könnte - andernfalls wäre ein 4xx-Status möglicherweise geeigneter. 
   */
  h501 = 'Nicht implementiert: Der Server kann auf die Anfrage nicht reagieren. Dies bedeutet in der Regel, dass der Server die Anfrage möglicherweise in Zukunft unterstützen könnte - andernfalls wäre ein 4xx-Status möglicherweise geeigneter. ',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad Gateway: Der Server fungiert als Proxy und hat keine akzeptable Antwort vom vorgelagerten Server erhalten. 
   */
  h502 = 'Bad Gateway: Der Server fungiert als Proxy und hat keine akzeptable Antwort vom vorgelagerten Server erhalten. ',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Service nicht verfügbar: Der Server ist abgeschaltet und nimmt keine Anfragen entgegen. 
   */
  h503 = 'Service nicht verfügbar: Der Server ist abgeschaltet und nimmt keine Anfragen entgegen. ',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway-Timeout: Der Server fungiert als Proxy und hat keine Antwort vom vorgelagerten Server erhalten. 
   */
  h504 = 'Gateway-Timeout: Der Server fungiert als Proxy und hat keine Antwort vom vorgelagerten Server erhalten. ',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP-Version nicht unterstützt: Der Server unterstützt die in der Anfrage angegebene HTTP-Protokollversion nicht. 
   */
  h505 = 'HTTP-Version nicht unterstützt: Der Server unterstützt die in der Anfrage angegebene HTTP-Protokollversion nicht. ',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant verhandelt auch: Transparente Inhaltsverhandlung für die Anfrage führt zu einer zirkulären Referenz. 
   */
  h506 = 'Variant verhandelt auch: Transparente Inhaltsverhandlung für die Anfrage führt zu einer zirkulären Referenz. ',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Unzureichender Speicherplatz: Der Benutzer oder der Server verfügt nicht über ausreichend Speicherplatzkontingent, um die Anfrage zu erfüllen. 
   */
  h507 = 'Unzureichender Speicherplatz: Der Benutzer oder der Server verfügt nicht über ausreichend Speicherplatzkontingent, um die Anfrage zu erfüllen. ',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Loop erkannt: Der Server hat einen endlosen Loop in der Anfrage erkannt. 
   */
  h508 = 'Loop erkannt: Der Server hat einen endlosen Loop in der Anfrage erkannt. ',
  /**
   * h509: 
   *
   * Empty
   * Bandbreitenlimit überschritten (Apache bw/limited-Erweiterung): Dieser Statuscode ist in keiner RFC festgelegt. Seine Verwendung ist unbekannt. 
   */
  h509 = 'Bandbreitenlimit überschritten (Apache bw/limited-Erweiterung): Dieser Statuscode ist in keiner RFC festgelegt. Seine Verwendung ist unbekannt. ',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nicht erweitert: Weitere Erweiterungen der Anfrage sind erforderlich, damit sie erfüllt werden kann. 
   */
  h510 = 'Nicht erweitert: Weitere Erweiterungen der Anfrage sind erforderlich, damit sie erfüllt werden kann. ',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Netzwerkauthentifizierung erforderlich: Der Client muss sich beim Netzwerk authentifizieren, bevor er Anfragen senden kann. 
   */
  h511 = 'Netzwerkauthentifizierung erforderlich: Der Client muss sich beim Netzwerk authentifizieren, bevor er Anfragen senden kann. ',
  /**
   * h520: 
   *
   * Empty
   * Unbekannter Fehler (Microsoft / CloudFlare): Dieser Statuscode ist in keiner RFC festgelegt und wird von bestimmten Diensten zurückgegeben, beispielsweise von Microsoft Azure und CloudFlare-Servern: "Der Fehler 520 ist im Wesentlichen eine 'Alles-abdecken'-Antwort für den Fall, dass der Ursprungsserver etwas Unerwartetes zurückgibt oder etwas, das nicht geduldet/gedeutet wird (Verstoß gegen das Protokoll oder leere Antwort)." 
   */
  h520 = 'Unbekannter Fehler (Microsoft / CloudFlare): Dieser Statuscode ist in keiner RFC festgelegt und wird von bestimmten Diensten zurückgegeben, beispielsweise von Microsoft Azure und CloudFlare-Servern: "Der Fehler 520 ist im Wesentlichen eine \'Alles-abdecken\'-Antwort für den Fall, dass der Ursprungsserver etwas Unerwartetes zurückgibt oder etwas, das nicht geduldet/gedeutet wird (Verstoß gegen das Protokoll oder leere Antwort)." ',
  /**
   * h521: 
   *
   * Empty
   * Web-Server ist abgestürzt (CloudFlare): Der ursprüngliche Server hat die Verbindung von CloudFlare abgelehnt. 
   */
  h521 = 'Web-Server ist abgestürzt (CloudFlare): Der ursprüngliche Server hat die Verbindung von CloudFlare abgelehnt. ',
  /**
   * h522: 
   *
   * Empty
   * Verbindung Timeout (CloudFlare): CloudFlare konnte keine TCP-Handshake mit dem Origin-Server durchführen. 
   */
  h522 = 'Verbindung Timeout (CloudFlare): CloudFlare konnte keine TCP-Handshake mit dem Origin-Server durchführen. ',
  /**
   * h523: 
   *
   * Empty
   * Origin ist nicht erreichbar (CloudFlare): CloudFlare konnte den Origin-Server nicht erreichen; zum Beispiel, wenn die DNS-Records für den Origin-Server falsch sind. 
   */
  h523 = 'Origin ist nicht erreichbar (CloudFlare): CloudFlare konnte den Origin-Server nicht erreichen; zum Beispiel, wenn die DNS-Records für den Origin-Server falsch sind. ',
  /**
   * h524: 
   *
   * Empty
   * Timeout aufgetreten (CloudFlare): CloudFlare konnte eine TCP-Verbindung zum Origin-Server herstellen, hat aber keine rechtzeitige HTTP-Antwort erhalten. 
   */
  h524 = 'Timeout aufgetreten (CloudFlare): CloudFlare konnte eine TCP-Verbindung zum Origin-Server herstellen, hat aber keine rechtzeitige HTTP-Antwort erhalten. ',
  /**
   * h525: 
   *
   * Empty
   * SSL-Handshake fehlgeschlagen (CloudFlare): CloudFlare konnte mit dem Ursprungsserver keinen SSL/TLS-Handshake aushandeln. 
   */
  h525 = 'SSL-Handshake fehlgeschlagen (CloudFlare): CloudFlare konnte mit dem Ursprungsserver keinen SSL/TLS-Handshake aushandeln. ',
  /**
   * h526: 
   *
   * Empty
   * Ungültiges SSL-Zertifikat (CloudFlare): CloudFlare konnte das SSL/TLS-Zertifikat, das der Ursprungsserver präsentierte, nicht validieren. 
   */
  h526 = 'Ungültiges SSL-Zertifikat (CloudFlare): CloudFlare konnte das SSL/TLS-Zertifikat, das der Ursprungsserver präsentierte, nicht validieren. ',
  /**
   * h527: 
   *
   * Empty
   * Railgun Fehler (CloudFlare): Die Anfrage ist abgelaufen oder fehlgeschlagen, nachdem die WAN-Verbindung hergestellt wurde. 
   */
  h527 = 'Railgun Fehler (CloudFlare): Die Anfrage ist abgelaufen oder fehlgeschlagen, nachdem die WAN-Verbindung hergestellt wurde. '
}
