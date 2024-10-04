/**
 * © 2024 aiyoudiao
 *
 * Questo file è stato creato da aiyoudiao e contiene un sacco di duro lavoro e saggezza.
 *
 * È libero di usare, modificare e distribuire questo file, ma si prega di mantenere questa dichiarazione di copyright.
 *
 * Se trova questo file utile, la prego di darmi una stella o seguitemi ツ.
 *
 * Contatti:
 * - Email:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 *
 * Buon programmazione! Ricorda, il codice è poesia e il front-end è arte. ツ
 */
export enum HttpStatusCode {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continua: Il server ha ricevuto gli header della richiesta e il client dovrebbe procedere a inviare il corpo della richiesta. 
   */
  CONTINUE = 100,
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Cambio di protocolli: Il richiedente ha chiesto al server di cambiare i protocolli e il server ha riconosciuto che lo farà. 
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Elaborazione: Il server ha ricevuto e sta elaborando la richiesta, ma non è ancora disponibile alcuna risposta. 
   */
  PROCESSING = 102,
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: La risposta standard per le richieste HTTP di successo. 
   */
  OK = 200,
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Creato: La richiesta è stata soddisfatta e una nuova risorsa è stata creata. 
   */
  CREATED = 201,
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Accettato: La richiesta è stata accettata ma non è stata ancora elaborata. Questo codice non garantisce che la richiesta sia elaborata con successo. 
   */
  ACCEPTED = 202,
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informazione non autorevole: HTTP 1.1. Il server ha elaborato con successo la richiesta ma sta restituendo informazioni da un'altra fonte. 
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Nessun contenuto: Il server ha accettato la richiesta ma non sta restituendo alcun contenuto. Questo viene spesso usato come risposta a una richiesta DELETE. 
   */
  NO_CONTENT = 204,
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset contenuto: Simile a una risposta 204 No Content, ma questa risposta richiede al richiedente di ripristinare la vista del documento. 
   */
  RESET_CONTENT = 205,
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Contenuto parziale: Il server fornisce solo una parte del contenuto, come richiesto dal client tramite un'intestazione Range. 
   */
  PARTIAL_CONTENT = 206,
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Il corpo del messaggio che segue è un messaggio XML e può contenere un numero di codici di risposta distinti, a seconda di quante sottorichieste sono state effettuate. 
   */
  MULTI_STATUS = 207,
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Già segnalato: I membri di un binding DAV sono già stati enumerati in una precedente risposta a questa richiesta e non vengono inclusi nuovamente. 
   */
  ALREADY_REPORTED = 208,
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM utilizzato: Il server ha soddisfatto una richiesta GET per la risorsa e la risposta è una rappresentazione del risultato di una o più manipolazioni di istanza applicate all'istanza corrente. 
   */
  IM_USED = 226,
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Scelte multiple: C'è più di un'opzione che il client può seguire. 
   */
  MULTIPLE_CHOICES = 300,
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Spostato in modo permanente: La risorsa è stata spostata e tutte le richieste successive dovrebbero fare riferimento al suo nuovo URI. 
   */
  MOVED_PERMANENTLY = 301,
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Trovato: La specifica HTTP 1.0 descrive questo stato come "Spostato temporaneamente", ma i browser popolari rispondono a questo stato in modo simile al comportamento previsto per 303. La risorsa può essere recuperata facendo riferimento all'URI restituito. 
   */
  FOUND = 302,
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Vedi altro: La risorsa può essere recuperata seguendo un'altra URI utilizzando il metodo GET. Quando ricevuto in risposta a una richiesta POST, PUT o DELETE, di solito si può presumere che il server abbia elaborato correttamente la richiesta e stia indirizzando il client verso un endpoint informativo. 
   */
  SEE_OTHER = 303,
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Non modificato: La risorsa non è stata modificata dalla versione specificata negli header If-Modified-Since o If-Match. La risorsa non verrà restituita nel corpo della risposta. 
   */
  NOT_MODIFIED = 304,
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Usa il proxy: HTTP 1.1. Il risorsa è disponibile solo tramite un proxy e l'indirizzo è fornito nella risposta. 
   */
  USE_PROXY = 305,
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Cambio di proxy: deprecato in HTTP 1.1. Usato per indicare che le richieste successive devono essere inviate utilizzando il proxy specificato. 
   */
  SWITCH_PROXY = 306,
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Ridirezione temporanea: HTTP 1.1. La richiesta deve essere ripetuta con l'URI fornito nella risposta, ma le richieste future devono comunque chiamare l'URI originale. 
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incompleto (Google): Questo codice viene utilizzato nella Proposta di Richieste HTTP Riprendibili per riprendere richieste PUT o POST interrotte
   * Permanente reindirizzamento: La richiesta e tutte le richieste future devono essere rinviate utilizzando l'URI fornito nella risposta. 
   */
  PERMANENT_REDIRECT = 308,
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Richiesta non valida: la richiesta non può essere soddisfatta a causa della sintassi errata della richiesta. 
   */
  BAD_REQUEST = 400,
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Non autorizzato: Il richiedente non è autorizzato ad accedere alla risorsa. È simile al 403 ma viene utilizzato nei casi in cui l'autenticazione è attesa ma è fallita o non è stata fornita. 
   */
  UNAUTHORIZED = 401,
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pagamento richiesto: Riservato per uso futuro. Alcuni servizi web lo usano come indicazione che il client ha inviato un numero eccessivo di richieste. 
   */
  PAYMENT_REQUIRED = 402,
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Vietato: La richiesta è stata formattata correttamente ma il server rifiuta di fornire la risorsa richiesta. A differenza di 401, l'autenticazione non farà alcuna differenza nella risposta del server. 
   */
  FORBIDDEN = 403,
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Non trovato: La risorsa non può essere trovata. Questo viene spesso utilizzato come risposta generale per tutte le richieste di URI non valide dal server. 
   */
  NOT_FOUND = 404,
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metodo non consentito: La risorsa è stata richiesta utilizzando un metodo non consentito. Ad esempio, la richiesta di una risorsa tramite il metodo POST quando la risorsa supporta solo il metodo GET. 
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Non accettabile: La risorsa è valida, ma non può essere fornita nel formato specificato negli header Accept della richiesta. 
   */
  NOT_ACCEPTABLE = 406,
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticazione proxy richiesta: L'autenticazione è richiesta per il proxy prima che le richieste possano essere soddisfatte. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout della richiesta: Il server è andato in timeout in attesa di una richiesta dal client. Al client è consentito ripetere la richiesta. 
   */
  REQUEST_TIMEOUT = 408,
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflitto: La richiesta non può essere completata a causa di un conflitto nei parametri della richiesta. 
   */
  CONFLICT = 409,
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Scomparso: La risorsa non è più disponibile all'URI richiesto e non verrà fornita alcuna redirezione. 
   */
  GONE = 410,
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Lunghezza richiesta: La richiesta non ha specificato la lunghezza del suo contenuto come richiesto dalla risorsa. 
   */
  LENGTH_REQUIRED = 411,
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Condizione preliminare fallita: Il server non soddisfa una delle condizioni preliminari specificate dal client. 
   */
  PRECONDITION_FAILED = 412,
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entità della richiesta troppo grande: Il contenuto della richiesta è maggiore di quanto il server sia in grado di elaborare. 
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI di richiesta troppo lungo: L'URI fornito nella richiesta è troppo lungo per essere elaborato dal server. Questo viene spesso utilizzato quando troppi dati sono stati codificati nell'URI di una richiesta GET e invece dovrebbe essere utilizzata una richiesta POST. 
   */
  URI_TOO_LONG = 414,
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo di supporto multimediale non supportato: I dati forniti dal client presentano un tipo di supporto multimediale non supportato dal server. 
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * L'intervallo richiesto non è soddisfacibile: Il client ha richiesto una parte della risorsa, ma il server non può fornire tale parte. 
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Fallimento dell'aspettativa: Il server non può soddisfare i requisiti del campo dell'intestazione della richiesta Expect. 
   */
  EXPECTATION_FAILED = 417,
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Sono un bollitore: Qualsiasi tentativo di preparare il caffè con un bollitore dovrebbe risultare nel codice di errore "418 Sono un bollitore". Il corpo dell'entità risultante potrebbe essere corto e tozzo. 
   */
  I_M_A_TEAPOT = 418,
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Richiesta sbagliatamente indirizzata: La richiesta è stata indirizzata a un server che non è in grado di fornire una risposta. Questo può essere inviato da un server che non è configurato per fornire risposte per la combinazione di schema e autorità inclusi nell'URI della richiesta. 
   */
  MISDIRECTED_REQUEST = 421,
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entità non elaborabile: La richiesta era formattata correttamente ma non può essere elaborata nella sua forma attuale. Spesso usato quando i parametri specificati non superano gli errori di convalida. 
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloccato: La risorsa richiesta è stata trovata ma è stata bloccata e non verrà restituita. 
   */
  LOCKED = 423,
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Fallimento della dipendenza: La richiesta è fallita a causa del fallimento di una richiesta precedente. 
   */
  FAILED_DEPENDENCY = 424,
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Aggiornamento richiesto: Il client dovrebbe ripetere la richiesta usando un protocollo aggiornato come TLS 1.0. 
   */
  UPGRADE_REQUIRED = 426,
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Condizione preliminare richiesta: Il server di origine richiede che la richiesta sia condizionale. 
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Troppe richieste: L'utente ha inviato troppe richieste in un dato periodo di tempo ("limite di velocità"). 
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campi dell'intestazione della richiesta troppo grandi: Il server non è disposto a elaborare la richiesta perché i suoi campi dell'intestazione sono troppo grandi. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Timeout di accesso (Microsoft): un'estensione Microsoft. Indica che la sessione dell'utente è scaduta. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 440,
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Nessuna risposta (Nginx): Utilizzato nei log di Nginx per indicare che il server non ha restituito alcuna informazione al client e ha chiuso la connessione (utile come deterrente per i malware). 
   */
  NO_RESPONSE_NGINX = 444,
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Riprova con (Microsoft): Un'estensione di Microsoft. La richiesta dovrebbe essere ripetuta dopo aver eseguito l'azione appropriata. 
   */
  RETRY_WITH_MICROSOFT = 449,
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Bloccato dai controlli parentali di Windows (Microsoft): un'estensione di Microsoft. Questo errore viene dato quando i controlli parentali di Windows sono attivati e bloccano l'accesso alla pagina web specificata. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 450,
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Utilizzato in Exchange ActiveSync se c'è un server più efficiente da usare o se il server non può accedere alla posta in arrivo dell'utente. "Non disponibile per motivi legali": Il server non può operare a causa di richieste vincolanti legali. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Intestazione della richiesta troppo grande (Nginx): Codice interno di Nginx simile a 431 ma introdotto in precedenza nella versione 0.9.4 (il 21 gennaio 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 494,
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Errore del certificato (Nginx): Codice interno di Nginx utilizzato quando si verifica un errore del certificato del client SSL per distinguerlo dal 4XX in un registro e una redirezione della pagina di errore. 
   */
  CERT_ERROR_NGINX = 495,
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Codice interno di Nginx utilizzato quando il client non fornisce il certificato per distinguerlo dal 4XX in un log e per la reindirizzamento della pagina di errore.
   * No Cert: Codice interno di Nginx usato quando il client non fornisce il certificato per distinguerlo dal 4XX in un log e per il reindirizzamento della pagina di errore. 
   */
  NO_CERT_NGINX = 496,
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP a HTTPS (Nginx): Il codice interno di Nginx utilizzato per le richieste HTTP semplici che vengono inviate alla porta HTTPS per distinguerlo dal 4XX in un log e una redirezione della pagina di errore. 
   */
  HTTP_TO_HTTPS_NGINX = 497,
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token scaduto / non valido (Esri): restituito da ArcGIS for Server. Un codice 498 indica un token scaduto o in altro modo non valido. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 498,
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token necessario (Esri): restituito da ArcGIS for Server. Un codice 499 indica che è necessario un token (se non è stato inviato un token). 
   */
  TOKEN_REQUIRED_ESRI = 499,
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Errore interno del server: Uno stato generico di errore nel server stesso. 
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Non implementato: Il server non può rispondere alla richiesta. Questo di solito implica che il server potrebbe forse supportare la richiesta in futuro - altrimenti un codice di stato 4xx potrebbe essere più appropriato. 
   */
  NOT_IMPLEMENTED = 501,
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad gateway: Il server sta agendo come proxy e non ha ricevuto una risposta accettabile dal server upstream. 
   */
  BAD_GATEWAY = 502,
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servizio non disponibile: Il server è inattivo e non accetta richieste. 
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout della gateway: Il server funge da proxy e non ha ricevuto una risposta dal server a monte. 
   */
  GATEWAY_TIMEOUT = 504,
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versione HTTP non supportata: Il server non supporta la versione del protocollo HTTP specificata nella richiesta. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * La variante negozia anche: La negoziazione di contenuto trasparente per la richiesta comporta un riferimento circolare. 
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insufficienza di spazio di archiviazione: L'utente o il server non dispone di una quota di archiviazione sufficiente per soddisfare la richiesta. 
   */
  INSUFFICIENT_STORAGE = 507,
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Rilevato un ciclo: Il server ha rilevato un ciclo infinito nella richiesta. 
   */
  LOOP_DETECTED = 508,
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Limite di larghezza di banda superato (estensione bw/limited di Apache): Questo codice di stato non è specificato in nessun RFC. Il suo utilizzo è sconosciuto. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Non esteso: Ulteriori estensioni alla richiesta sono necessarie per il suo soddisfacimento. 
   */
  NOT_EXTENDED = 510,
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticazione di rete richiesta: Il client deve autenticarsi sulla rete prima di inviare richieste. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Errore sconosciuto (Microsoft / CloudFlare): Questo codice di stato non è specificato in nessun RFC ed è restituito da alcuni servizi, per esempio server Microsoft Azure e CloudFlare: "L'errore 520 è essenzialmente una risposta 'tuttofare' quando il server di origine restituisce qualcosa di inaspettato o qualcosa che non è tollerato/interpretato (violazione del protocollo o risposta vuota)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 520,
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Il server originale ha rifiutato la connessione da CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 521,
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Timeout della connessione (CloudFlare): CloudFlare non è riuscito a negoziare un handshake TCP con il server di origine. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 522,
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origine non raggiungibile (CloudFlare): CloudFlare non è riuscito a raggiungere il server di origine; per esempio, se i record DNS per il server di origine non sono corretti. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 523,
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * È avvenuto un timeout (CloudFlare): CloudFlare è stato in grado di stabilire una connessione TCP al server di origine, ma non ha ricevuto tempestivamente una risposta HTTP. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 524,
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Fallito (CloudFlare): CloudFlare non è riuscito a negoziare un handshake SSL/TLS con il server di origine. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 525,
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Certificato SSL non valido (CloudFlare): CloudFlare non è riuscito a convalidare il certificato SSL/TLS presentato dal server di origine. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 526,
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Errore Railgun (CloudFlare): La richiesta è scaduta o è fallita dopo che la connessione WAN è stata stabilita. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 527
}

export enum HttpStatusCodeByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continua: Il server ha ricevuto gli header della richiesta e il client dovrebbe procedere a inviare il corpo della richiesta. 
   */
  h100 = 100,
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Cambio di protocolli: Il richiedente ha chiesto al server di cambiare i protocolli e il server ha riconosciuto che lo farà. 
   */
  h101 = 101,
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Elaborazione: Il server ha ricevuto e sta elaborando la richiesta, ma non è ancora disponibile alcuna risposta. 
   */
  h102 = 102,
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: La risposta standard per le richieste HTTP di successo. 
   */
  h200 = 200,
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Creato: La richiesta è stata soddisfatta e una nuova risorsa è stata creata. 
   */
  h201 = 201,
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Accettato: La richiesta è stata accettata ma non è stata ancora elaborata. Questo codice non garantisce che la richiesta sia elaborata con successo. 
   */
  h202 = 202,
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informazione non autorevole: HTTP 1.1. Il server ha elaborato con successo la richiesta ma sta restituendo informazioni da un'altra fonte. 
   */
  h203 = 203,
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Nessun contenuto: Il server ha accettato la richiesta ma non sta restituendo alcun contenuto. Questo viene spesso usato come risposta a una richiesta DELETE. 
   */
  h204 = 204,
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset contenuto: Simile a una risposta 204 No Content, ma questa risposta richiede al richiedente di ripristinare la vista del documento. 
   */
  h205 = 205,
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Contenuto parziale: Il server fornisce solo una parte del contenuto, come richiesto dal client tramite un'intestazione Range. 
   */
  h206 = 206,
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Il corpo del messaggio che segue è un messaggio XML e può contenere un numero di codici di risposta distinti, a seconda di quante sottorichieste sono state effettuate. 
   */
  h207 = 207,
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Già segnalato: I membri di un binding DAV sono già stati enumerati in una precedente risposta a questa richiesta e non vengono inclusi nuovamente. 
   */
  h208 = 208,
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM utilizzato: Il server ha soddisfatto una richiesta GET per la risorsa e la risposta è una rappresentazione del risultato di una o più manipolazioni di istanza applicate all'istanza corrente. 
   */
  h226 = 226,
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Scelte multiple: C'è più di un'opzione che il client può seguire. 
   */
  h300 = 300,
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Spostato in modo permanente: La risorsa è stata spostata e tutte le richieste successive dovrebbero fare riferimento al suo nuovo URI. 
   */
  h301 = 301,
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Trovato: La specifica HTTP 1.0 descrive questo stato come "Spostato temporaneamente", ma i browser popolari rispondono a questo stato in modo simile al comportamento previsto per 303. La risorsa può essere recuperata facendo riferimento all'URI restituito. 
   */
  h302 = 302,
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Vedi altro: La risorsa può essere recuperata seguendo un'altra URI utilizzando il metodo GET. Quando ricevuto in risposta a una richiesta POST, PUT o DELETE, di solito si può presumere che il server abbia elaborato correttamente la richiesta e stia indirizzando il client verso un endpoint informativo. 
   */
  h303 = 303,
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Non modificato: La risorsa non è stata modificata dalla versione specificata negli header If-Modified-Since o If-Match. La risorsa non verrà restituita nel corpo della risposta. 
   */
  h304 = 304,
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Usa il proxy: HTTP 1.1. Il risorsa è disponibile solo tramite un proxy e l'indirizzo è fornito nella risposta. 
   */
  h305 = 305,
  /**
   * h306: 
   *
   * Empty
   * Cambio di proxy: deprecato in HTTP 1.1. Usato per indicare che le richieste successive devono essere inviate utilizzando il proxy specificato. 
   */
  h306 = 306,
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Ridirezione temporanea: HTTP 1.1. La richiesta deve essere ripetuta con l'URI fornito nella risposta, ma le richieste future devono comunque chiamare l'URI originale. 
   */
  h307 = 307,
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incompleto (Google): Questo codice viene utilizzato nella Proposta di Richieste HTTP Riprendibili per riprendere richieste PUT o POST interrotte
   * Permanente reindirizzamento: La richiesta e tutte le richieste future devono essere rinviate utilizzando l'URI fornito nella risposta. 
   */
  h308 = 308,
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Richiesta non valida: la richiesta non può essere soddisfatta a causa della sintassi errata della richiesta. 
   */
  h400 = 400,
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Non autorizzato: Il richiedente non è autorizzato ad accedere alla risorsa. È simile al 403 ma viene utilizzato nei casi in cui l'autenticazione è attesa ma è fallita o non è stata fornita. 
   */
  h401 = 401,
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pagamento richiesto: Riservato per uso futuro. Alcuni servizi web lo usano come indicazione che il client ha inviato un numero eccessivo di richieste. 
   */
  h402 = 402,
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Vietato: La richiesta è stata formattata correttamente ma il server rifiuta di fornire la risorsa richiesta. A differenza di 401, l'autenticazione non farà alcuna differenza nella risposta del server. 
   */
  h403 = 403,
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Non trovato: La risorsa non può essere trovata. Questo viene spesso utilizzato come risposta generale per tutte le richieste di URI non valide dal server. 
   */
  h404 = 404,
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metodo non consentito: La risorsa è stata richiesta utilizzando un metodo non consentito. Ad esempio, la richiesta di una risorsa tramite il metodo POST quando la risorsa supporta solo il metodo GET. 
   */
  h405 = 405,
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Non accettabile: La risorsa è valida, ma non può essere fornita nel formato specificato negli header Accept della richiesta. 
   */
  h406 = 406,
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticazione proxy richiesta: L'autenticazione è richiesta per il proxy prima che le richieste possano essere soddisfatte. 
   */
  h407 = 407,
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout della richiesta: Il server è andato in timeout in attesa di una richiesta dal client. Al client è consentito ripetere la richiesta. 
   */
  h408 = 408,
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflitto: La richiesta non può essere completata a causa di un conflitto nei parametri della richiesta. 
   */
  h409 = 409,
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Scomparso: La risorsa non è più disponibile all'URI richiesto e non verrà fornita alcuna redirezione. 
   */
  h410 = 410,
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Lunghezza richiesta: La richiesta non ha specificato la lunghezza del suo contenuto come richiesto dalla risorsa. 
   */
  h411 = 411,
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Condizione preliminare fallita: Il server non soddisfa una delle condizioni preliminari specificate dal client. 
   */
  h412 = 412,
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entità della richiesta troppo grande: Il contenuto della richiesta è maggiore di quanto il server sia in grado di elaborare. 
   */
  h413 = 413,
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI di richiesta troppo lungo: L'URI fornito nella richiesta è troppo lungo per essere elaborato dal server. Questo viene spesso utilizzato quando troppi dati sono stati codificati nell'URI di una richiesta GET e invece dovrebbe essere utilizzata una richiesta POST. 
   */
  h414 = 414,
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo di supporto multimediale non supportato: I dati forniti dal client presentano un tipo di supporto multimediale non supportato dal server. 
   */
  h415 = 415,
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * L'intervallo richiesto non è soddisfacibile: Il client ha richiesto una parte della risorsa, ma il server non può fornire tale parte. 
   */
  h416 = 416,
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Fallimento dell'aspettativa: Il server non può soddisfare i requisiti del campo dell'intestazione della richiesta Expect. 
   */
  h417 = 417,
  /**
   * h418: 
   *
   * Empty
   * Sono un bollitore: Qualsiasi tentativo di preparare il caffè con un bollitore dovrebbe risultare nel codice di errore "418 Sono un bollitore". Il corpo dell'entità risultante potrebbe essere corto e tozzo. 
   */
  h418 = 418,
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Richiesta sbagliatamente indirizzata: La richiesta è stata indirizzata a un server che non è in grado di fornire una risposta. Questo può essere inviato da un server che non è configurato per fornire risposte per la combinazione di schema e autorità inclusi nell'URI della richiesta. 
   */
  h421 = 421,
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entità non elaborabile: La richiesta era formattata correttamente ma non può essere elaborata nella sua forma attuale. Spesso usato quando i parametri specificati non superano gli errori di convalida. 
   */
  h422 = 422,
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloccato: La risorsa richiesta è stata trovata ma è stata bloccata e non verrà restituita. 
   */
  h423 = 423,
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Fallimento della dipendenza: La richiesta è fallita a causa del fallimento di una richiesta precedente. 
   */
  h424 = 424,
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Aggiornamento richiesto: Il client dovrebbe ripetere la richiesta usando un protocollo aggiornato come TLS 1.0. 
   */
  h426 = 426,
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Condizione preliminare richiesta: Il server di origine richiede che la richiesta sia condizionale. 
   */
  h428 = 428,
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Troppe richieste: L'utente ha inviato troppe richieste in un dato periodo di tempo ("limite di velocità"). 
   */
  h429 = 429,
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campi dell'intestazione della richiesta troppo grandi: Il server non è disposto a elaborare la richiesta perché i suoi campi dell'intestazione sono troppo grandi. 
   */
  h431 = 431,
  /**
   * h440: 
   *
   * Empty
   * Timeout di accesso (Microsoft): un'estensione Microsoft. Indica che la sessione dell'utente è scaduta. 
   */
  h440 = 440,
  /**
   * h444: 
   *
   * Empty
   * Nessuna risposta (Nginx): Utilizzato nei log di Nginx per indicare che il server non ha restituito alcuna informazione al client e ha chiuso la connessione (utile come deterrente per i malware). 
   */
  h444 = 444,
  /**
   * h449: 
   *
   * Empty
   * Riprova con (Microsoft): Un'estensione di Microsoft. La richiesta dovrebbe essere ripetuta dopo aver eseguito l'azione appropriata. 
   */
  h449 = 449,
  /**
   * h450: 
   *
   * Empty
   * Bloccato dai controlli parentali di Windows (Microsoft): un'estensione di Microsoft. Questo errore viene dato quando i controlli parentali di Windows sono attivati e bloccano l'accesso alla pagina web specificata. 
   */
  h450 = 450,
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Utilizzato in Exchange ActiveSync se c'è un server più efficiente da usare o se il server non può accedere alla posta in arrivo dell'utente. "Non disponibile per motivi legali": Il server non può operare a causa di richieste vincolanti legali. 
   */
  h451 = 451,
  /**
   * h494: 
   *
   * Empty
   * Intestazione della richiesta troppo grande (Nginx): Codice interno di Nginx simile a 431 ma introdotto in precedenza nella versione 0.9.4 (il 21 gennaio 2011). 
   */
  h494 = 494,
  /**
   * h495: 
   *
   * Empty
   * Errore del certificato (Nginx): Codice interno di Nginx utilizzato quando si verifica un errore del certificato del client SSL per distinguerlo dal 4XX in un registro e una redirezione della pagina di errore. 
   */
  h495 = 495,
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Codice interno di Nginx utilizzato quando il client non fornisce il certificato per distinguerlo dal 4XX in un log e per la reindirizzamento della pagina di errore.
   * No Cert: Codice interno di Nginx usato quando il client non fornisce il certificato per distinguerlo dal 4XX in un log e per il reindirizzamento della pagina di errore. 
   */
  h496 = 496,
  /**
   * h497: 
   *
   * Empty
   * HTTP a HTTPS (Nginx): Il codice interno di Nginx utilizzato per le richieste HTTP semplici che vengono inviate alla porta HTTPS per distinguerlo dal 4XX in un log e una redirezione della pagina di errore. 
   */
  h497 = 497,
  /**
   * h498: 
   *
   * Empty
   * Token scaduto / non valido (Esri): restituito da ArcGIS for Server. Un codice 498 indica un token scaduto o in altro modo non valido. 
   */
  h498 = 498,
  /**
   * h499: 
   *
   * Empty
   * Token necessario (Esri): restituito da ArcGIS for Server. Un codice 499 indica che è necessario un token (se non è stato inviato un token). 
   */
  h499 = 499,
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Errore interno del server: Uno stato generico di errore nel server stesso. 
   */
  h500 = 500,
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Non implementato: Il server non può rispondere alla richiesta. Questo di solito implica che il server potrebbe forse supportare la richiesta in futuro - altrimenti un codice di stato 4xx potrebbe essere più appropriato. 
   */
  h501 = 501,
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad gateway: Il server sta agendo come proxy e non ha ricevuto una risposta accettabile dal server upstream. 
   */
  h502 = 502,
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servizio non disponibile: Il server è inattivo e non accetta richieste. 
   */
  h503 = 503,
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout della gateway: Il server funge da proxy e non ha ricevuto una risposta dal server a monte. 
   */
  h504 = 504,
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versione HTTP non supportata: Il server non supporta la versione del protocollo HTTP specificata nella richiesta. 
   */
  h505 = 505,
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * La variante negozia anche: La negoziazione di contenuto trasparente per la richiesta comporta un riferimento circolare. 
   */
  h506 = 506,
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insufficienza di spazio di archiviazione: L'utente o il server non dispone di una quota di archiviazione sufficiente per soddisfare la richiesta. 
   */
  h507 = 507,
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Rilevato un ciclo: Il server ha rilevato un ciclo infinito nella richiesta. 
   */
  h508 = 508,
  /**
   * h509: 
   *
   * Empty
   * Limite di larghezza di banda superato (estensione bw/limited di Apache): Questo codice di stato non è specificato in nessun RFC. Il suo utilizzo è sconosciuto. 
   */
  h509 = 509,
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Non esteso: Ulteriori estensioni alla richiesta sono necessarie per il suo soddisfacimento. 
   */
  h510 = 510,
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticazione di rete richiesta: Il client deve autenticarsi sulla rete prima di inviare richieste. 
   */
  h511 = 511,
  /**
   * h520: 
   *
   * Empty
   * Errore sconosciuto (Microsoft / CloudFlare): Questo codice di stato non è specificato in nessun RFC ed è restituito da alcuni servizi, per esempio server Microsoft Azure e CloudFlare: "L'errore 520 è essenzialmente una risposta 'tuttofare' quando il server di origine restituisce qualcosa di inaspettato o qualcosa che non è tollerato/interpretato (violazione del protocollo o risposta vuota)." 
   */
  h520 = 520,
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Il server originale ha rifiutato la connessione da CloudFlare. 
   */
  h521 = 521,
  /**
   * h522: 
   *
   * Empty
   * Timeout della connessione (CloudFlare): CloudFlare non è riuscito a negoziare un handshake TCP con il server di origine. 
   */
  h522 = 522,
  /**
   * h523: 
   *
   * Empty
   * Origine non raggiungibile (CloudFlare): CloudFlare non è riuscito a raggiungere il server di origine; per esempio, se i record DNS per il server di origine non sono corretti. 
   */
  h523 = 523,
  /**
   * h524: 
   *
   * Empty
   * È avvenuto un timeout (CloudFlare): CloudFlare è stato in grado di stabilire una connessione TCP al server di origine, ma non ha ricevuto tempestivamente una risposta HTTP. 
   */
  h524 = 524,
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Fallito (CloudFlare): CloudFlare non è riuscito a negoziare un handshake SSL/TLS con il server di origine. 
   */
  h525 = 525,
  /**
   * h526: 
   *
   * Empty
   * Certificato SSL non valido (CloudFlare): CloudFlare non è riuscito a convalidare il certificato SSL/TLS presentato dal server di origine. 
   */
  h526 = 526,
  /**
   * h527: 
   *
   * Empty
   * Errore Railgun (CloudFlare): La richiesta è scaduta o è fallita dopo che la connessione WAN è stata stabilita. 
   */
  h527 = 527
}
