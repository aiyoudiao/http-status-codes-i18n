/**
 * © 2024 aiyoudiao
 * 
 * Ez a fájlt aiyoudiao hozta létre, és sok kemény munkát és bölcsességet tartalmaz.
 * 
 * Ön szabadon használhatja, módosíthatja és terjesztheti ezt a fájlt, de kérjük, megtartsák ezt a szerzői jogi nyilatkozatot.
 * 
 * Ha találja hasznosnak ezt a fájlt, kérjük, adjon nekem egy csillagot vagy kövesse engem ツ.
 * 
 * Kontakt:
 * - Email:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 * 
 * Jó programozást! Ne feledje, a kód olyan, mint a vers, és az előoldal művészet. ツ
 */
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Folytatás: A kiszolgáló megkapta a kérés fejléceit, és a kliensnek folytatnia kell a kérés törzsének küldését. 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Váltási protokollok: A kérező megkértette a szervert, hogy váltson protokollt, és a szerver megerősítette, hogy így fog csinálni. 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Feldolgozásban: A szerver megkapta és feldolgozza a kérést, de még nincs elérhető válasz. 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: A szokásos válasz a sikeres HTTP-kérésekhez.
   * Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez. 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Létrejött: A kérés teljesült, és új erőforrás lett létrehozva. 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Elfogadva: A kérés elfogadva lett, de még nem lett feldolgozva. Ez a kód nem garantálja, hogy a kérés sikeresen feldolgozódik. 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Nem hivatalos információ: HTTP 1.1. A szerver sikeresen feldolgozta a kérést, de információt ad vissza egy másik forrásból. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Nincs tartalom: A szerver elfogadta a kérést, de nem ad vissza semmilyen tartalmat. Ez gyakran használatos válasz a DELETE kérésre. 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Visszaállítás tartalmának: Hasonló a 204 No Content válaszhoz, de ez a válasz arra kéri a kérelmezőt, hogy visszaállítsa a dokumentum nézetét. 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Részleges tartalom: A szerver csak a kliens egy_RANGE_headerrel_kért részét szállítja ki a tartalma. 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: A következő üzenet törzse egy XML üzenet, és több válaszkódot tartalmazhat, attól függően, hogy hány alkérelem készült. 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Megjelent már jelentés: Az egy DAV kötéshez tartozó tagok már felsoroltak egy korábbi válaszban erre a kérésre, és nem kerülnek ismét beillesztésre. 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM használatban: A szerver teljesítette a GET kérését az erőforráshoz, és a válasz egy képviselése az eredménye egy vagy több példány-kezelési művelet alkalmazását a jelenlegi példányra. 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Többszörös választási lehetőség: A kliens több opció közül választhat az egyiket, hogy működjön. 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Helytelenül mozgatva: A erőforrás át lett helyezve, és minden további kérésnek hivatkoznia kell az új URI-jára. 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Azonnal megtalálva: Az HTTP 1.0-specifikáció ezt az állapotot "Időszakosan áthelyezve" jellemezte, de népszerű böngészők ezen állapotra hasonlóan reagálnak, mint ahogy a 303-ra szánt viselkedésre. Az erőforrást a visszaküldött URI-re hivatkozva lekérhető. 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lásd másikat: A erőforrás lekérhető az other URI követésével a GET módszerrel. Amikor POST, PUT vagy DELETE kéréssel válaszban kapjuk, általában feltételezhető, hogy a szerver sikeresen feldolgozta a kérést és az ügyfelet egy információs végpontra irányítja. 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nem módosított: A erőforrás nem lett módosítva az If-Modified-Since vagy If-Match fejlécekben megadott verziótól kezdve. Az erőforrás nem kerül visszaküldésre a válasz törzsből. 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Használjon próxiszolgáltatást: HTTP 1.1. A erőforrás csak próxiszolgáltatás révén érhető el, és az cím a válaszban megadva van. 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Proxy váltás: Elavult a HTTP 1.1-ben. Egykor azt jelentette, hogy a következő kérések a megadott proxy segítségével küldendők. 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Időszakos irányítás: HTTP 1.1. A kérés újra elküldendő az a URI-val, amelyet a válaszban biztosítanak, de a jövőbeli kérések továbbra is az eredeti URI-t hívják meg. 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * A Resume Incomplete (Google): Ez a kódot használják a Resumable HTTP Requests Proposalban az elszakított PUT vagy POST kérések folytatásához.
   * A permanens irányítása: A kérés és minden későbbi kérés újra elküldendő az URI-val, amelyet a válaszban biztosítanak. 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Hibás kérés: A kérés nem teljesíthető azért, mert a kérés szintaxisa helytelen. 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nem engedélyezett: A kérelmező nincs jogosult a erőforrás eléréséhez. Ez hasonló a 403-as kódhoz, de az olyan esetben használatos, amikor az azonosítás várható, de sikertelen vagy nem lett biztosítva. 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Fizetés szükséges: Kiszerválva jövőbeli használatra. Egyes web-szolgáltatások ezt használják jelzésül, hogy a kliens túl sok kérést küldött. 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Forbidden: A kérés helyesen volt formázva, de a szerver megtagadja a kért erőforrást. 不像 401-es hibák esetén, az autentikáció nem fog változtatni a szerver válaszát. 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nem található: A erőforrás nem található. Ez gyakran használatos az összes érvénytelen URI kérés esetében a szerveren. 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metódus nem engedélyezett: A erőforrást olyan módon kérték meg, amely nem engedélyezett. Például amikor egy erőforrást POST módszerrel kérnek meg, pedig az erőforrás csak a GET módszerrel támogatott. 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nem elfogadható: A erőforrás érvényes, de nem biztosítható a kérésben az Accept fejlécekben megadott formátumban. 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy autentikáció szükséges: A kérés teljesítéséhez az autentikáció szükséges a proxy-nál. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Kérés késleltetés: A szerver időtúllépés történt miközben várakozott a kliens kérésére. A kliensnek megengedett, hogy ismét elküldje a kérést. 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Veszélyhelyzet: A kérés nem teljesíthető, mert ellentmondás van a kérés paraméterei között. 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Elhagyva: A erőforrás már nem érhető el a kért URI-n és nem adnak irányítást. 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Hossz szükséges: A kérés nem adta meg a tartalmának hosszát, ahogy azt a erőforrás igényli. 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Előfeltétel sikertelen: A szerver nem felel meg az egyik előfeltételt, amelyet a kliens megadott. 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Kérelem-entitás túl nagy: A kérelem tartalma nagyobb, mint amit a szerver képes feldolgozni. 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Kérés-URI túl hosszú: Az URI, amelyet a kérésben biztosítanak, túl hosszú ahhoz, hogy a szerver feldolgozza. Ez gyakran használatos, amikor túl sok adat került kódolva a GET kérés URI-jába, és ehelyett POST kérést kell használni. 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Nem támogatott média típus: A kliens olyan adatokat biztosított, amelyeknek a média típusa nem támogatott a szerveren. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * A kért tartomány nem kielégíthető: A kliens egy részét kérte a erőforrástól, de a szerver nem tudja biztosítani ezt a részt. 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Várhatóvá tévedés: A szerver nem tudja kielégíteni az Expect kérésfejlécmező követelményeit. 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Én egy teaforraló vagyok: Bármilyen kísérlet a kávét főzni egy teaforralóval eredményeznie kell az "418 Én egy teaforraló" hibakódot. A létrejövő entitás testének lehet rövid és vastag. 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Helytelen irányított kérés: A kérés olyan szerverre irányult, amely nem képes válaszként szolgálni. Ez a státusz kódot egy olyan szerver küldhet, amely nincs konfigurálva a kérés URI-jében szereplő rendszer és jogosultság-kombinációra válaszolni. 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   *  feldolgozhatatlan entitás: A kérés megfelelő formátumban volt, de a jelenlegi formában nem feldolgozható. Gyakran használatos, amikor a megadott paraméterek nem felelnek meg a ellenőrzési hibáknak. 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Zárolva: A kért erőforrás megtalálható, de zárolva van, és nem kerül kiadásra. 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Szállítási függőség sikertelen: A kérés sikertelen volt, mert az előző kérés sikertelen volt. 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Frissítés szükséges: A kliensnek ismételten kell elküldenie a kérést egy frissített protokoll használatával, például a TLS 1.0-val. 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Előfeltétel szükséges: Az eredeti szerver azt követeli, hogy a kérés feltételes legyen. 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Túl sok kérés: A felhasználó túl sok kérést küldött egy adott idő alatt ("sebességkorlátozás"). 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * A kérés fejléci mezőinek mérete túl nagy: A szerver nem hajlandó feldolgozni a kérést, mert a fejléci mezői túl nagyak. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Bejelentkezési időkorlát túllépés (Microsoft): Egy Microsoft bővítmény. Jelzi, hogy a munkameneted lejárt. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Nincs válasz (Nginx): A Nginx naplóiban használt állapotkód, amely azt jelzi, hogy a szerver nem adott vissza semmilyen információt a kliensnek, és lezárta a kapcsolatot. (Hasznos az esetleges rosszindulatú szoftverek elleni védekezésben.) 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Újrapróbálás (Microsoft): Egy Microsoft kiterjesztése. A kérésnek újra küldésre kerüljön az megfelelő művelet végrehajtása után. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Megállítva Windows szülői irányítások (Microsoft): Egy Microsoft bővítmény. Ez az hiba adódik, amikor az Windows szülői irányítások bekapcsolva vannak és blokkolják a megadott weboldalt elérését. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Ha egy hatékonyabb szerver áll rendelkezésre Exchange ActiveSync-ben, vagy a szerver nem fér hozzá az ügyfél postafiókjához.
   * A törvényi okok miatt nem elérhető: A szerver nem működhet, mert törvényi kérés érkezett. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * "Request Header Too Large (Nginx): Az Nginx belső kódja hasonló a 431-hez, de korábban került bevezetésre a 0.9.4 verzióban (2011. január 21-én)." 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Hivatkozási hiba (Nginx): Az Nginx belső kódja, amelyet használnak, amikor SSL ügyfélkértékeni hiba történik, hogy különbséget tegyenek a naplóban lévő 4XX-től, és irányítsák az hibas oldalt. 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Az Nginx belső kódot használják, amikor a kliens nem biztosította a tanúsítványt, hogy megkülönböztesse az 4XX-t a naplóból és irányítsa az hibás oldalra. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP-t HTTPS-re (Nginx): Az Nginx belső kódja, amelyet a sima HTTP kérésekre használnak, amelyek az HTTPS portra kerülnek küldésre, hogy megkülönböztesse őket a naplóból származó 4XX-től és irányítsa őket az hibaoldalra. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token lejárt/érvénytelen (Esri): Visszatér ArcGIS for Server által. A 498-es kód azt jelzi, hogy a token lejárt vagy egyébként érvénytelen. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token szükséges (Esri): ArcGIS for Server által visszaküldött. A 499-es kód azt jelenti, hogy egy token szükséges (ha nem lett token beküldve). 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Belső szerverhiba: Egy általános állapot a szerveren belül. 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nem valósított ki: A szerver nem tud válaszolni a kérésre. Általában ez azt jelenti, hogy a szerver esetleg a jövőben támogathatja a kérést - különben egy 4xx állapotkód talán megfelelőbb lenne. 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Hibás átjárókapu: A szerver mint próxis működik, és nem kapott elfogadható választ az felsőbb szintű szerverről. 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Szolgáltatás nem elérhető: A szerver leállt és nem fogadja a kérelmeket. 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout: A szerver mint proxy működik, és nem kapott válaszát az felső szintű szerverről. 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Nem támogatott HTTP-verzió: A szerver nem támogatja az a HTTP-protokollverziót, amelyet a kérésben meghatározott. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * A variáns isimismo megküzdi: A átlátszó tartalmi tárgyalás a kérés eredményeként körkörös hivatkozást eredményez. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Túl kevés tárhely: A felhasználó vagy a szerver nem rendelkezik elegendő tárhely kvótával a kérés teljesítéséhez. 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Ciklus észlelve: A szerver egy végtelen ciklust észlelt a kérésben. 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Bandwidth Limit Exceeded (Apache bw/limited extension): Ez a státusz kód nincs meghatározva egyetlen RFC-ben sem. A használata ismeretlen. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nem bővült: A kérés teljesítéséhez további bővítés szükséges. 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Hálózati autentikáció szükséges: A kliensnek hálózati autentikációval kell rendelkeznie, mielőtt kérelmeket küldene. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Ismeretlen hiba (Microsoft / CloudFlare): Ez a státusz kód nincs meghatározva semmilyen RFC-ben, és bizonyos szolgáltatások adnak vissza, például a Microsoft Azure és a CloudFlare szerverek: "A 520-es hiba alapvetően egy 'csapdában maradás' válasz, amikor a forrás szerver valami váratlan vagy nem tűrhető / értelmezhető (protokoll megszegés vagy üres válasz) választ ad vissza." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server leállt (CloudFlare): Az eredeti szerver elutasította a CloudFlare-től származó kapcsolatot. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Kapcsolati időszak túllépés (CloudFlare): A CloudFlare nem tudott TCP kezdeti csomagolást megállapítani az eredeti szerverrel. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): A CloudFlare nem tudott elérni az eredeti szervert; például ha az eredeti szerver DNS rekordjai nem helyesek. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Timeout történt (CloudFlare): A CloudFlare képes volt TCP-kapcsolatot létesíteni az eredeti szerverrel, de nem kapott időben HTTP-választ. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake sikertelen (CloudFlare): A CloudFlare nem tudott SSL/TLS handshake-et folytatni az eredeti szerverrel. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Érvénytelen SSL-érvényesítő bizonyítvány (CloudFlare): A CloudFlare nem tudta ellenőrizni az SSL/TLS-érvényesítő bizonyítványt, amelyet az eredeti szerver előállított. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun-hiba (CloudFlare): A kérés lejárt vagy sikertelen volt miután az WAN kapcsolat létrejött. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Folytatás: A kiszolgáló megkapta a kérés fejléceit, és a kliensnek folytatnia kell a kérés törzsének küldését. 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Váltási protokollok: A kérező megkértette a szervert, hogy váltson protokollt, és a szerver megerősítette, hogy így fog csinálni. 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Feldolgozásban: A szerver megkapta és feldolgozza a kérést, de még nincs elérhető válasz. 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: A szokásos válasz a sikeres HTTP-kérésekhez.
   * Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez. 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Létrejött: A kérés teljesült, és új erőforrás lett létrehozva. 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Elfogadva: A kérés elfogadva lett, de még nem lett feldolgozva. Ez a kód nem garantálja, hogy a kérés sikeresen feldolgozódik. 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Nem hivatalos információ: HTTP 1.1. A szerver sikeresen feldolgozta a kérést, de információt ad vissza egy másik forrásból. 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Nincs tartalom: A szerver elfogadta a kérést, de nem ad vissza semmilyen tartalmat. Ez gyakran használatos válasz a DELETE kérésre. 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Visszaállítás tartalmának: Hasonló a 204 No Content válaszhoz, de ez a válasz arra kéri a kérelmezőt, hogy visszaállítsa a dokumentum nézetét. 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Részleges tartalom: A szerver csak a kliens egy_RANGE_headerrel_kért részét szállítja ki a tartalma. 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: A következő üzenet törzse egy XML üzenet, és több válaszkódot tartalmazhat, attól függően, hogy hány alkérelem készült. 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Megjelent már jelentés: Az egy DAV kötéshez tartozó tagok már felsoroltak egy korábbi válaszban erre a kérésre, és nem kerülnek ismét beillesztésre. 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM használatban: A szerver teljesítette a GET kérését az erőforráshoz, és a válasz egy képviselése az eredménye egy vagy több példány-kezelési művelet alkalmazását a jelenlegi példányra. 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Többszörös választási lehetőség: A kliens több opció közül választhat az egyiket, hogy működjön. 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Helytelenül mozgatva: A erőforrás át lett helyezve, és minden további kérésnek hivatkoznia kell az új URI-jára. 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Azonnal megtalálva: Az HTTP 1.0-specifikáció ezt az állapotot "Időszakosan áthelyezve" jellemezte, de népszerű böngészők ezen állapotra hasonlóan reagálnak, mint ahogy a 303-ra szánt viselkedésre. Az erőforrást a visszaküldött URI-re hivatkozva lekérhető. 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lásd másikat: A erőforrás lekérhető az other URI követésével a GET módszerrel. Amikor POST, PUT vagy DELETE kéréssel válaszban kapjuk, általában feltételezhető, hogy a szerver sikeresen feldolgozta a kérést és az ügyfelet egy információs végpontra irányítja. 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nem módosított: A erőforrás nem lett módosítva az If-Modified-Since vagy If-Match fejlécekben megadott verziótól kezdve. Az erőforrás nem kerül visszaküldésre a válasz törzsből. 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Használjon próxiszolgáltatást: HTTP 1.1. A erőforrás csak próxiszolgáltatás révén érhető el, és az cím a válaszban megadva van. 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * Proxy váltás: Elavult a HTTP 1.1-ben. Egykor azt jelentette, hogy a következő kérések a megadott proxy segítségével küldendők. 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Időszakos irányítás: HTTP 1.1. A kérés újra elküldendő az a URI-val, amelyet a válaszban biztosítanak, de a jövőbeli kérések továbbra is az eredeti URI-t hívják meg. 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * A Resume Incomplete (Google): Ez a kódot használják a Resumable HTTP Requests Proposalban az elszakított PUT vagy POST kérések folytatásához.
   * A permanens irányítása: A kérés és minden későbbi kérés újra elküldendő az URI-val, amelyet a válaszban biztosítanak. 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Hibás kérés: A kérés nem teljesíthető azért, mert a kérés szintaxisa helytelen. 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nem engedélyezett: A kérelmező nincs jogosult a erőforrás eléréséhez. Ez hasonló a 403-as kódhoz, de az olyan esetben használatos, amikor az azonosítás várható, de sikertelen vagy nem lett biztosítva. 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Fizetés szükséges: Kiszerválva jövőbeli használatra. Egyes web-szolgáltatások ezt használják jelzésül, hogy a kliens túl sok kérést küldött. 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Forbidden: A kérés helyesen volt formázva, de a szerver megtagadja a kért erőforrást. 不像 401-es hibák esetén, az autentikáció nem fog változtatni a szerver válaszát. 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nem található: A erőforrás nem található. Ez gyakran használatos az összes érvénytelen URI kérés esetében a szerveren. 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metódus nem engedélyezett: A erőforrást olyan módon kérték meg, amely nem engedélyezett. Például amikor egy erőforrást POST módszerrel kérnek meg, pedig az erőforrás csak a GET módszerrel támogatott. 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nem elfogadható: A erőforrás érvényes, de nem biztosítható a kérésben az Accept fejlécekben megadott formátumban. 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy autentikáció szükséges: A kérés teljesítéséhez az autentikáció szükséges a proxy-nál. 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Kérés késleltetés: A szerver időtúllépés történt miközben várakozott a kliens kérésére. A kliensnek megengedett, hogy ismét elküldje a kérést. 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Veszélyhelyzet: A kérés nem teljesíthető, mert ellentmondás van a kérés paraméterei között. 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Elhagyva: A erőforrás már nem érhető el a kért URI-n és nem adnak irányítást. 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Hossz szükséges: A kérés nem adta meg a tartalmának hosszát, ahogy azt a erőforrás igényli. 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Előfeltétel sikertelen: A szerver nem felel meg az egyik előfeltételt, amelyet a kliens megadott. 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Kérelem-entitás túl nagy: A kérelem tartalma nagyobb, mint amit a szerver képes feldolgozni. 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Kérés-URI túl hosszú: Az URI, amelyet a kérésben biztosítanak, túl hosszú ahhoz, hogy a szerver feldolgozza. Ez gyakran használatos, amikor túl sok adat került kódolva a GET kérés URI-jába, és ehelyett POST kérést kell használni. 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Nem támogatott média típus: A kliens olyan adatokat biztosított, amelyeknek a média típusa nem támogatott a szerveren. 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * A kért tartomány nem kielégíthető: A kliens egy részét kérte a erőforrástól, de a szerver nem tudja biztosítani ezt a részt. 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Várhatóvá tévedés: A szerver nem tudja kielégíteni az Expect kérésfejlécmező követelményeit. 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * Én egy teaforraló vagyok: Bármilyen kísérlet a kávét főzni egy teaforralóval eredményeznie kell az "418 Én egy teaforraló" hibakódot. A létrejövő entitás testének lehet rövid és vastag. 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Helytelen irányított kérés: A kérés olyan szerverre irányult, amely nem képes válaszként szolgálni. Ez a státusz kódot egy olyan szerver küldhet, amely nincs konfigurálva a kérés URI-jében szereplő rendszer és jogosultság-kombinációra válaszolni. 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   *  feldolgozhatatlan entitás: A kérés megfelelő formátumban volt, de a jelenlegi formában nem feldolgozható. Gyakran használatos, amikor a megadott paraméterek nem felelnek meg a ellenőrzési hibáknak. 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Zárolva: A kért erőforrás megtalálható, de zárolva van, és nem kerül kiadásra. 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Szállítási függőség sikertelen: A kérés sikertelen volt, mert az előző kérés sikertelen volt. 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Frissítés szükséges: A kliensnek ismételten kell elküldenie a kérést egy frissített protokoll használatával, például a TLS 1.0-val. 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Előfeltétel szükséges: Az eredeti szerver azt követeli, hogy a kérés feltételes legyen. 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Túl sok kérés: A felhasználó túl sok kérést küldött egy adott idő alatt ("sebességkorlátozás"). 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * A kérés fejléci mezőinek mérete túl nagy: A szerver nem hajlandó feldolgozni a kérést, mert a fejléci mezői túl nagyak. 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * Bejelentkezési időkorlát túllépés (Microsoft): Egy Microsoft bővítmény. Jelzi, hogy a munkameneted lejárt. 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * Nincs válasz (Nginx): A Nginx naplóiban használt állapotkód, amely azt jelzi, hogy a szerver nem adott vissza semmilyen információt a kliensnek, és lezárta a kapcsolatot. (Hasznos az esetleges rosszindulatú szoftverek elleni védekezésben.) 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * Újrapróbálás (Microsoft): Egy Microsoft kiterjesztése. A kérésnek újra küldésre kerüljön az megfelelő művelet végrehajtása után. 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * Megállítva Windows szülői irányítások (Microsoft): Egy Microsoft bővítmény. Ez az hiba adódik, amikor az Windows szülői irányítások bekapcsolva vannak és blokkolják a megadott weboldalt elérését. 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Ha egy hatékonyabb szerver áll rendelkezésre Exchange ActiveSync-ben, vagy a szerver nem fér hozzá az ügyfél postafiókjához.
   * A törvényi okok miatt nem elérhető: A szerver nem működhet, mert törvényi kérés érkezett. 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * "Request Header Too Large (Nginx): Az Nginx belső kódja hasonló a 431-hez, de korábban került bevezetésre a 0.9.4 verzióban (2011. január 21-én)." 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * Hivatkozási hiba (Nginx): Az Nginx belső kódja, amelyet használnak, amikor SSL ügyfélkértékeni hiba történik, hogy különbséget tegyenek a naplóban lévő 4XX-től, és irányítsák az hibas oldalt. 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Az Nginx belső kódot használják, amikor a kliens nem biztosította a tanúsítványt, hogy megkülönböztesse az 4XX-t a naplóból és irányítsa az hibás oldalra. 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP-t HTTPS-re (Nginx): Az Nginx belső kódja, amelyet a sima HTTP kérésekre használnak, amelyek az HTTPS portra kerülnek küldésre, hogy megkülönböztesse őket a naplóból származó 4XX-től és irányítsa őket az hibaoldalra. 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * Token lejárt/érvénytelen (Esri): Visszatér ArcGIS for Server által. A 498-es kód azt jelzi, hogy a token lejárt vagy egyébként érvénytelen. 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * Token szükséges (Esri): ArcGIS for Server által visszaküldött. A 499-es kód azt jelenti, hogy egy token szükséges (ha nem lett token beküldve). 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Belső szerverhiba: Egy általános állapot a szerveren belül. 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nem valósított ki: A szerver nem tud válaszolni a kérésre. Általában ez azt jelenti, hogy a szerver esetleg a jövőben támogathatja a kérést - különben egy 4xx állapotkód talán megfelelőbb lenne. 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Hibás átjárókapu: A szerver mint próxis működik, és nem kapott elfogadható választ az felsőbb szintű szerverről. 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Szolgáltatás nem elérhető: A szerver leállt és nem fogadja a kérelmeket. 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout: A szerver mint proxy működik, és nem kapott válaszát az felső szintű szerverről. 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Nem támogatott HTTP-verzió: A szerver nem támogatja az a HTTP-protokollverziót, amelyet a kérésben meghatározott. 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * A variáns isimismo megküzdi: A átlátszó tartalmi tárgyalás a kérés eredményeként körkörös hivatkozást eredményez. 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Túl kevés tárhely: A felhasználó vagy a szerver nem rendelkezik elegendő tárhely kvótával a kérés teljesítéséhez. 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Ciklus észlelve: A szerver egy végtelen ciklust észlelt a kérésben. 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * Bandwidth Limit Exceeded (Apache bw/limited extension): Ez a státusz kód nincs meghatározva egyetlen RFC-ben sem. A használata ismeretlen. 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nem bővült: A kérés teljesítéséhez további bővítés szükséges. 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Hálózati autentikáció szükséges: A kliensnek hálózati autentikációval kell rendelkeznie, mielőtt kérelmeket küldene. 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * Ismeretlen hiba (Microsoft / CloudFlare): Ez a státusz kód nincs meghatározva semmilyen RFC-ben, és bizonyos szolgáltatások adnak vissza, például a Microsoft Azure és a CloudFlare szerverek: "A 520-es hiba alapvetően egy 'csapdában maradás' válasz, amikor a forrás szerver valami váratlan vagy nem tűrhető / értelmezhető (protokoll megszegés vagy üres válasz) választ ad vissza." 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web Server leállt (CloudFlare): Az eredeti szerver elutasította a CloudFlare-től származó kapcsolatot. 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * Kapcsolati időszak túllépés (CloudFlare): A CloudFlare nem tudott TCP kezdeti csomagolást megállapítani az eredeti szerverrel. 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): A CloudFlare nem tudott elérni az eredeti szervert; például ha az eredeti szerver DNS rekordjai nem helyesek. 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * Timeout történt (CloudFlare): A CloudFlare képes volt TCP-kapcsolatot létesíteni az eredeti szerverrel, de nem kapott időben HTTP-választ. 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake sikertelen (CloudFlare): A CloudFlare nem tudott SSL/TLS handshake-et folytatni az eredeti szerverrel. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * Érvénytelen SSL-érvényesítő bizonyítvány (CloudFlare): A CloudFlare nem tudta ellenőrizni az SSL/TLS-érvényesítő bizonyítványt, amelyet az eredeti szerver előállított. 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Railgun-hiba (CloudFlare): A kérés lejárt vagy sikertelen volt miután az WAN kapcsolat létrejött. 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
