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
export enum HttpStatusCode {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Folytatás: A kiszolgáló megkapta a kérés fejléceit, és a kliensnek folytatnia kell a kérés törzsének küldését. 
   */
  CONTINUE = 100,
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Váltási protokollok: A kérező megkértette a szervert, hogy váltson protokollt, és a szerver megerősítette, hogy így fog csinálni. 
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Feldolgozásban: A szerver megkapta és feldolgozza a kérést, de még nincs elérhető válasz. 
   */
  PROCESSING = 102,
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: A szokásos válasz a sikeres HTTP-kérésekhez.
   * Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez. 
   */
  OK = 200,
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Létrejött: A kérés teljesült, és új erőforrás lett létrehozva. 
   */
  CREATED = 201,
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Elfogadva: A kérés elfogadva lett, de még nem lett feldolgozva. Ez a kód nem garantálja, hogy a kérés sikeresen feldolgozódik. 
   */
  ACCEPTED = 202,
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Nem hivatalos információ: HTTP 1.1. A szerver sikeresen feldolgozta a kérést, de információt ad vissza egy másik forrásból. 
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Nincs tartalom: A szerver elfogadta a kérést, de nem ad vissza semmilyen tartalmat. Ez gyakran használatos válasz a DELETE kérésre. 
   */
  NO_CONTENT = 204,
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Visszaállítás tartalmának: Hasonló a 204 No Content válaszhoz, de ez a válasz arra kéri a kérelmezőt, hogy visszaállítsa a dokumentum nézetét. 
   */
  RESET_CONTENT = 205,
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Részleges tartalom: A szerver csak a kliens egy_RANGE_headerrel_kért részét szállítja ki a tartalma. 
   */
  PARTIAL_CONTENT = 206,
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: A következő üzenet törzse egy XML üzenet, és több válaszkódot tartalmazhat, attól függően, hogy hány alkérelem készült. 
   */
  MULTI_STATUS = 207,
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Megjelent már jelentés: Az egy DAV kötéshez tartozó tagok már felsoroltak egy korábbi válaszban erre a kérésre, és nem kerülnek ismét beillesztésre. 
   */
  ALREADY_REPORTED = 208,
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM használatban: A szerver teljesítette a GET kérését az erőforráshoz, és a válasz egy képviselése az eredménye egy vagy több példány-kezelési művelet alkalmazását a jelenlegi példányra. 
   */
  IM_USED = 226,
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Többszörös választási lehetőség: A kliens több opció közül választhat az egyiket, hogy működjön. 
   */
  MULTIPLE_CHOICES = 300,
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Helytelenül mozgatva: A erőforrás át lett helyezve, és minden további kérésnek hivatkoznia kell az új URI-jára. 
   */
  MOVED_PERMANENTLY = 301,
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Azonnal megtalálva: Az HTTP 1.0-specifikáció ezt az állapotot "Időszakosan áthelyezve" jellemezte, de népszerű böngészők ezen állapotra hasonlóan reagálnak, mint ahogy a 303-ra szánt viselkedésre. Az erőforrást a visszaküldött URI-re hivatkozva lekérhető. 
   */
  FOUND = 302,
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lásd másikat: A erőforrás lekérhető az other URI követésével a GET módszerrel. Amikor POST, PUT vagy DELETE kéréssel válaszban kapjuk, általában feltételezhető, hogy a szerver sikeresen feldolgozta a kérést és az ügyfelet egy információs végpontra irányítja. 
   */
  SEE_OTHER = 303,
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nem módosított: A erőforrás nem lett módosítva az If-Modified-Since vagy If-Match fejlécekben megadott verziótól kezdve. Az erőforrás nem kerül visszaküldésre a válasz törzsből. 
   */
  NOT_MODIFIED = 304,
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Használjon próxiszolgáltatást: HTTP 1.1. A erőforrás csak próxiszolgáltatás révén érhető el, és az cím a válaszban megadva van. 
   */
  USE_PROXY = 305,
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Proxy váltás: Elavult a HTTP 1.1-ben. Egykor azt jelentette, hogy a következő kérések a megadott proxy segítségével küldendők. 
   */
  SWITCH_PROXY = 306,
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Időszakos irányítás: HTTP 1.1. A kérés újra elküldendő az a URI-val, amelyet a válaszban biztosítanak, de a jövőbeli kérések továbbra is az eredeti URI-t hívják meg. 
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * A Resume Incomplete (Google): Ez a kódot használják a Resumable HTTP Requests Proposalban az elszakított PUT vagy POST kérések folytatásához.
   * A permanens irányítása: A kérés és minden későbbi kérés újra elküldendő az URI-val, amelyet a válaszban biztosítanak. 
   */
  PERMANENT_REDIRECT = 308,
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Hibás kérés: A kérés nem teljesíthető azért, mert a kérés szintaxisa helytelen. 
   */
  BAD_REQUEST = 400,
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nem engedélyezett: A kérelmező nincs jogosult a erőforrás eléréséhez. Ez hasonló a 403-as kódhoz, de az olyan esetben használatos, amikor az azonosítás várható, de sikertelen vagy nem lett biztosítva. 
   */
  UNAUTHORIZED = 401,
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Fizetés szükséges: Kiszerválva jövőbeli használatra. Egyes web-szolgáltatások ezt használják jelzésül, hogy a kliens túl sok kérést küldött. 
   */
  PAYMENT_REQUIRED = 402,
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Forbidden: A kérés helyesen volt formázva, de a szerver megtagadja a kért erőforrást. 不像 401-es hibák esetén, az autentikáció nem fog változtatni a szerver válaszát. 
   */
  FORBIDDEN = 403,
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nem található: A erőforrás nem található. Ez gyakran használatos az összes érvénytelen URI kérés esetében a szerveren. 
   */
  NOT_FOUND = 404,
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metódus nem engedélyezett: A erőforrást olyan módon kérték meg, amely nem engedélyezett. Például amikor egy erőforrást POST módszerrel kérnek meg, pedig az erőforrás csak a GET módszerrel támogatott. 
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nem elfogadható: A erőforrás érvényes, de nem biztosítható a kérésben az Accept fejlécekben megadott formátumban. 
   */
  NOT_ACCEPTABLE = 406,
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy autentikáció szükséges: A kérés teljesítéséhez az autentikáció szükséges a proxy-nál. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Kérés késleltetés: A szerver időtúllépés történt miközben várakozott a kliens kérésére. A kliensnek megengedett, hogy ismét elküldje a kérést. 
   */
  REQUEST_TIMEOUT = 408,
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Veszélyhelyzet: A kérés nem teljesíthető, mert ellentmondás van a kérés paraméterei között. 
   */
  CONFLICT = 409,
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Elhagyva: A erőforrás már nem érhető el a kért URI-n és nem adnak irányítást. 
   */
  GONE = 410,
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Hossz szükséges: A kérés nem adta meg a tartalmának hosszát, ahogy azt a erőforrás igényli. 
   */
  LENGTH_REQUIRED = 411,
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Előfeltétel sikertelen: A szerver nem felel meg az egyik előfeltételt, amelyet a kliens megadott. 
   */
  PRECONDITION_FAILED = 412,
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Kérelem-entitás túl nagy: A kérelem tartalma nagyobb, mint amit a szerver képes feldolgozni. 
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Kérés-URI túl hosszú: Az URI, amelyet a kérésben biztosítanak, túl hosszú ahhoz, hogy a szerver feldolgozza. Ez gyakran használatos, amikor túl sok adat került kódolva a GET kérés URI-jába, és ehelyett POST kérést kell használni. 
   */
  URI_TOO_LONG = 414,
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Nem támogatott média típus: A kliens olyan adatokat biztosított, amelyeknek a média típusa nem támogatott a szerveren. 
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * A kért tartomány nem kielégíthető: A kliens egy részét kérte a erőforrástól, de a szerver nem tudja biztosítani ezt a részt. 
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Várhatóvá tévedés: A szerver nem tudja kielégíteni az Expect kérésfejlécmező követelményeit. 
   */
  EXPECTATION_FAILED = 417,
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Én egy teaforraló vagyok: Bármilyen kísérlet a kávét főzni egy teaforralóval eredményeznie kell az "418 Én egy teaforraló" hibakódot. A létrejövő entitás testének lehet rövid és vastag. 
   */
  I_M_A_TEAPOT = 418,
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Helytelen irányított kérés: A kérés olyan szerverre irányult, amely nem képes válaszként szolgálni. Ez a státusz kódot egy olyan szerver küldhet, amely nincs konfigurálva a kérés URI-jében szereplő rendszer és jogosultság-kombinációra válaszolni. 
   */
  MISDIRECTED_REQUEST = 421,
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   *  feldolgozhatatlan entitás: A kérés megfelelő formátumban volt, de a jelenlegi formában nem feldolgozható. Gyakran használatos, amikor a megadott paraméterek nem felelnek meg a ellenőrzési hibáknak. 
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Zárolva: A kért erőforrás megtalálható, de zárolva van, és nem kerül kiadásra. 
   */
  LOCKED = 423,
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Szállítási függőség sikertelen: A kérés sikertelen volt, mert az előző kérés sikertelen volt. 
   */
  FAILED_DEPENDENCY = 424,
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Frissítés szükséges: A kliensnek ismételten kell elküldenie a kérést egy frissített protokoll használatával, például a TLS 1.0-val. 
   */
  UPGRADE_REQUIRED = 426,
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Előfeltétel szükséges: Az eredeti szerver azt követeli, hogy a kérés feltételes legyen. 
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Túl sok kérés: A felhasználó túl sok kérést küldött egy adott idő alatt ("sebességkorlátozás"). 
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * A kérés fejléci mezőinek mérete túl nagy: A szerver nem hajlandó feldolgozni a kérést, mert a fejléci mezői túl nagyak. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Bejelentkezési időkorlát túllépés (Microsoft): Egy Microsoft bővítmény. Jelzi, hogy a munkameneted lejárt. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 440,
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Nincs válasz (Nginx): A Nginx naplóiban használt állapotkód, amely azt jelzi, hogy a szerver nem adott vissza semmilyen információt a kliensnek, és lezárta a kapcsolatot. (Hasznos az esetleges rosszindulatú szoftverek elleni védekezésben.) 
   */
  NO_RESPONSE_NGINX = 444,
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Újrapróbálás (Microsoft): Egy Microsoft kiterjesztése. A kérésnek újra küldésre kerüljön az megfelelő művelet végrehajtása után. 
   */
  RETRY_WITH_MICROSOFT = 449,
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Megállítva Windows szülői irányítások (Microsoft): Egy Microsoft bővítmény. Ez az hiba adódik, amikor az Windows szülői irányítások bekapcsolva vannak és blokkolják a megadott weboldalt elérését. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 450,
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Ha egy hatékonyabb szerver áll rendelkezésre Exchange ActiveSync-ben, vagy a szerver nem fér hozzá az ügyfél postafiókjához.
   * A törvényi okok miatt nem elérhető: A szerver nem működhet, mert törvényi kérés érkezett. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * "Request Header Too Large (Nginx): Az Nginx belső kódja hasonló a 431-hez, de korábban került bevezetésre a 0.9.4 verzióban (2011. január 21-én)." 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 494,
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Hivatkozási hiba (Nginx): Az Nginx belső kódja, amelyet használnak, amikor SSL ügyfélkértékeni hiba történik, hogy különbséget tegyenek a naplóban lévő 4XX-től, és irányítsák az hibas oldalt. 
   */
  CERT_ERROR_NGINX = 495,
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Az Nginx belső kódot használják, amikor a kliens nem biztosította a tanúsítványt, hogy megkülönböztesse az 4XX-t a naplóból és irányítsa az hibás oldalra. 
   */
  NO_CERT_NGINX = 496,
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP-t HTTPS-re (Nginx): Az Nginx belső kódja, amelyet a sima HTTP kérésekre használnak, amelyek az HTTPS portra kerülnek küldésre, hogy megkülönböztesse őket a naplóból származó 4XX-től és irányítsa őket az hibaoldalra. 
   */
  HTTP_TO_HTTPS_NGINX = 497,
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token lejárt/érvénytelen (Esri): Visszatér ArcGIS for Server által. A 498-es kód azt jelzi, hogy a token lejárt vagy egyébként érvénytelen. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 498,
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token szükséges (Esri): ArcGIS for Server által visszaküldött. A 499-es kód azt jelenti, hogy egy token szükséges (ha nem lett token beküldve). 
   */
  TOKEN_REQUIRED_ESRI = 499,
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Belső szerverhiba: Egy általános állapot a szerveren belül. 
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nem valósított ki: A szerver nem tud válaszolni a kérésre. Általában ez azt jelenti, hogy a szerver esetleg a jövőben támogathatja a kérést - különben egy 4xx állapotkód talán megfelelőbb lenne. 
   */
  NOT_IMPLEMENTED = 501,
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Hibás átjárókapu: A szerver mint próxis működik, és nem kapott elfogadható választ az felsőbb szintű szerverről. 
   */
  BAD_GATEWAY = 502,
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Szolgáltatás nem elérhető: A szerver leállt és nem fogadja a kérelmeket. 
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout: A szerver mint proxy működik, és nem kapott válaszát az felső szintű szerverről. 
   */
  GATEWAY_TIMEOUT = 504,
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Nem támogatott HTTP-verzió: A szerver nem támogatja az a HTTP-protokollverziót, amelyet a kérésben meghatározott. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * A variáns isimismo megküzdi: A átlátszó tartalmi tárgyalás a kérés eredményeként körkörös hivatkozást eredményez. 
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Túl kevés tárhely: A felhasználó vagy a szerver nem rendelkezik elegendő tárhely kvótával a kérés teljesítéséhez. 
   */
  INSUFFICIENT_STORAGE = 507,
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Ciklus észlelve: A szerver egy végtelen ciklust észlelt a kérésben. 
   */
  LOOP_DETECTED = 508,
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Bandwidth Limit Exceeded (Apache bw/limited extension): Ez a státusz kód nincs meghatározva egyetlen RFC-ben sem. A használata ismeretlen. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nem bővült: A kérés teljesítéséhez további bővítés szükséges. 
   */
  NOT_EXTENDED = 510,
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Hálózati autentikáció szükséges: A kliensnek hálózati autentikációval kell rendelkeznie, mielőtt kérelmeket küldene. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Ismeretlen hiba (Microsoft / CloudFlare): Ez a státusz kód nincs meghatározva semmilyen RFC-ben, és bizonyos szolgáltatások adnak vissza, például a Microsoft Azure és a CloudFlare szerverek: "A 520-es hiba alapvetően egy 'csapdában maradás' válasz, amikor a forrás szerver valami váratlan vagy nem tűrhető / értelmezhető (protokoll megszegés vagy üres válasz) választ ad vissza." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 520,
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server leállt (CloudFlare): Az eredeti szerver elutasította a CloudFlare-től származó kapcsolatot. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 521,
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Kapcsolati időszak túllépés (CloudFlare): A CloudFlare nem tudott TCP kezdeti csomagolást megállapítani az eredeti szerverrel. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 522,
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): A CloudFlare nem tudott elérni az eredeti szervert; például ha az eredeti szerver DNS rekordjai nem helyesek. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 523,
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Timeout történt (CloudFlare): A CloudFlare képes volt TCP-kapcsolatot létesíteni az eredeti szerverrel, de nem kapott időben HTTP-választ. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 524,
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake sikertelen (CloudFlare): A CloudFlare nem tudott SSL/TLS handshake-et folytatni az eredeti szerverrel. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 525,
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Érvénytelen SSL-érvényesítő bizonyítvány (CloudFlare): A CloudFlare nem tudta ellenőrizni az SSL/TLS-érvényesítő bizonyítványt, amelyet az eredeti szerver előállított. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 526,
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun-hiba (CloudFlare): A kérés lejárt vagy sikertelen volt miután az WAN kapcsolat létrejött. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 527
}

export enum HttpStatusCodeByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Folytatás: A kiszolgáló megkapta a kérés fejléceit, és a kliensnek folytatnia kell a kérés törzsének küldését. 
   */
  h100 = 100,
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Váltási protokollok: A kérező megkértette a szervert, hogy váltson protokollt, és a szerver megerősítette, hogy így fog csinálni. 
   */
  h101 = 101,
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Feldolgozásban: A szerver megkapta és feldolgozza a kérést, de még nincs elérhető válasz. 
   */
  h102 = 102,
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: A szokásos válasz a sikeres HTTP-kérésekhez.
   * Sikeres: A szabványos válasz a sikeres HTTP-kérésekhez. 
   */
  h200 = 200,
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Létrejött: A kérés teljesült, és új erőforrás lett létrehozva. 
   */
  h201 = 201,
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Elfogadva: A kérés elfogadva lett, de még nem lett feldolgozva. Ez a kód nem garantálja, hogy a kérés sikeresen feldolgozódik. 
   */
  h202 = 202,
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Nem hivatalos információ: HTTP 1.1. A szerver sikeresen feldolgozta a kérést, de információt ad vissza egy másik forrásból. 
   */
  h203 = 203,
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Nincs tartalom: A szerver elfogadta a kérést, de nem ad vissza semmilyen tartalmat. Ez gyakran használatos válasz a DELETE kérésre. 
   */
  h204 = 204,
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Visszaállítás tartalmának: Hasonló a 204 No Content válaszhoz, de ez a válasz arra kéri a kérelmezőt, hogy visszaállítsa a dokumentum nézetét. 
   */
  h205 = 205,
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Részleges tartalom: A szerver csak a kliens egy_RANGE_headerrel_kért részét szállítja ki a tartalma. 
   */
  h206 = 206,
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: A következő üzenet törzse egy XML üzenet, és több válaszkódot tartalmazhat, attól függően, hogy hány alkérelem készült. 
   */
  h207 = 207,
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Megjelent már jelentés: Az egy DAV kötéshez tartozó tagok már felsoroltak egy korábbi válaszban erre a kérésre, és nem kerülnek ismét beillesztésre. 
   */
  h208 = 208,
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM használatban: A szerver teljesítette a GET kérését az erőforráshoz, és a válasz egy képviselése az eredménye egy vagy több példány-kezelési művelet alkalmazását a jelenlegi példányra. 
   */
  h226 = 226,
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Többszörös választási lehetőség: A kliens több opció közül választhat az egyiket, hogy működjön. 
   */
  h300 = 300,
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Helytelenül mozgatva: A erőforrás át lett helyezve, és minden további kérésnek hivatkoznia kell az új URI-jára. 
   */
  h301 = 301,
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Azonnal megtalálva: Az HTTP 1.0-specifikáció ezt az állapotot "Időszakosan áthelyezve" jellemezte, de népszerű böngészők ezen állapotra hasonlóan reagálnak, mint ahogy a 303-ra szánt viselkedésre. Az erőforrást a visszaküldött URI-re hivatkozva lekérhető. 
   */
  h302 = 302,
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lásd másikat: A erőforrás lekérhető az other URI követésével a GET módszerrel. Amikor POST, PUT vagy DELETE kéréssel válaszban kapjuk, általában feltételezhető, hogy a szerver sikeresen feldolgozta a kérést és az ügyfelet egy információs végpontra irányítja. 
   */
  h303 = 303,
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nem módosított: A erőforrás nem lett módosítva az If-Modified-Since vagy If-Match fejlécekben megadott verziótól kezdve. Az erőforrás nem kerül visszaküldésre a válasz törzsből. 
   */
  h304 = 304,
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Használjon próxiszolgáltatást: HTTP 1.1. A erőforrás csak próxiszolgáltatás révén érhető el, és az cím a válaszban megadva van. 
   */
  h305 = 305,
  /**
   * h306: 
   *
   * Empty
   * Proxy váltás: Elavult a HTTP 1.1-ben. Egykor azt jelentette, hogy a következő kérések a megadott proxy segítségével küldendők. 
   */
  h306 = 306,
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Időszakos irányítás: HTTP 1.1. A kérés újra elküldendő az a URI-val, amelyet a válaszban biztosítanak, de a jövőbeli kérések továbbra is az eredeti URI-t hívják meg. 
   */
  h307 = 307,
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * A Resume Incomplete (Google): Ez a kódot használják a Resumable HTTP Requests Proposalban az elszakított PUT vagy POST kérések folytatásához.
   * A permanens irányítása: A kérés és minden későbbi kérés újra elküldendő az URI-val, amelyet a válaszban biztosítanak. 
   */
  h308 = 308,
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Hibás kérés: A kérés nem teljesíthető azért, mert a kérés szintaxisa helytelen. 
   */
  h400 = 400,
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nem engedélyezett: A kérelmező nincs jogosult a erőforrás eléréséhez. Ez hasonló a 403-as kódhoz, de az olyan esetben használatos, amikor az azonosítás várható, de sikertelen vagy nem lett biztosítva. 
   */
  h401 = 401,
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Fizetés szükséges: Kiszerválva jövőbeli használatra. Egyes web-szolgáltatások ezt használják jelzésül, hogy a kliens túl sok kérést küldött. 
   */
  h402 = 402,
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Forbidden: A kérés helyesen volt formázva, de a szerver megtagadja a kért erőforrást. 不像 401-es hibák esetén, az autentikáció nem fog változtatni a szerver válaszát. 
   */
  h403 = 403,
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nem található: A erőforrás nem található. Ez gyakran használatos az összes érvénytelen URI kérés esetében a szerveren. 
   */
  h404 = 404,
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metódus nem engedélyezett: A erőforrást olyan módon kérték meg, amely nem engedélyezett. Például amikor egy erőforrást POST módszerrel kérnek meg, pedig az erőforrás csak a GET módszerrel támogatott. 
   */
  h405 = 405,
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nem elfogadható: A erőforrás érvényes, de nem biztosítható a kérésben az Accept fejlécekben megadott formátumban. 
   */
  h406 = 406,
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy autentikáció szükséges: A kérés teljesítéséhez az autentikáció szükséges a proxy-nál. 
   */
  h407 = 407,
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Kérés késleltetés: A szerver időtúllépés történt miközben várakozott a kliens kérésére. A kliensnek megengedett, hogy ismét elküldje a kérést. 
   */
  h408 = 408,
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Veszélyhelyzet: A kérés nem teljesíthető, mert ellentmondás van a kérés paraméterei között. 
   */
  h409 = 409,
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Elhagyva: A erőforrás már nem érhető el a kért URI-n és nem adnak irányítást. 
   */
  h410 = 410,
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Hossz szükséges: A kérés nem adta meg a tartalmának hosszát, ahogy azt a erőforrás igényli. 
   */
  h411 = 411,
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Előfeltétel sikertelen: A szerver nem felel meg az egyik előfeltételt, amelyet a kliens megadott. 
   */
  h412 = 412,
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Kérelem-entitás túl nagy: A kérelem tartalma nagyobb, mint amit a szerver képes feldolgozni. 
   */
  h413 = 413,
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Kérés-URI túl hosszú: Az URI, amelyet a kérésben biztosítanak, túl hosszú ahhoz, hogy a szerver feldolgozza. Ez gyakran használatos, amikor túl sok adat került kódolva a GET kérés URI-jába, és ehelyett POST kérést kell használni. 
   */
  h414 = 414,
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Nem támogatott média típus: A kliens olyan adatokat biztosított, amelyeknek a média típusa nem támogatott a szerveren. 
   */
  h415 = 415,
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * A kért tartomány nem kielégíthető: A kliens egy részét kérte a erőforrástól, de a szerver nem tudja biztosítani ezt a részt. 
   */
  h416 = 416,
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Várhatóvá tévedés: A szerver nem tudja kielégíteni az Expect kérésfejlécmező követelményeit. 
   */
  h417 = 417,
  /**
   * h418: 
   *
   * Empty
   * Én egy teaforraló vagyok: Bármilyen kísérlet a kávét főzni egy teaforralóval eredményeznie kell az "418 Én egy teaforraló" hibakódot. A létrejövő entitás testének lehet rövid és vastag. 
   */
  h418 = 418,
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Helytelen irányított kérés: A kérés olyan szerverre irányult, amely nem képes válaszként szolgálni. Ez a státusz kódot egy olyan szerver küldhet, amely nincs konfigurálva a kérés URI-jében szereplő rendszer és jogosultság-kombinációra válaszolni. 
   */
  h421 = 421,
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   *  feldolgozhatatlan entitás: A kérés megfelelő formátumban volt, de a jelenlegi formában nem feldolgozható. Gyakran használatos, amikor a megadott paraméterek nem felelnek meg a ellenőrzési hibáknak. 
   */
  h422 = 422,
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Zárolva: A kért erőforrás megtalálható, de zárolva van, és nem kerül kiadásra. 
   */
  h423 = 423,
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Szállítási függőség sikertelen: A kérés sikertelen volt, mert az előző kérés sikertelen volt. 
   */
  h424 = 424,
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Frissítés szükséges: A kliensnek ismételten kell elküldenie a kérést egy frissített protokoll használatával, például a TLS 1.0-val. 
   */
  h426 = 426,
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Előfeltétel szükséges: Az eredeti szerver azt követeli, hogy a kérés feltételes legyen. 
   */
  h428 = 428,
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Túl sok kérés: A felhasználó túl sok kérést küldött egy adott idő alatt ("sebességkorlátozás"). 
   */
  h429 = 429,
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * A kérés fejléci mezőinek mérete túl nagy: A szerver nem hajlandó feldolgozni a kérést, mert a fejléci mezői túl nagyak. 
   */
  h431 = 431,
  /**
   * h440: 
   *
   * Empty
   * Bejelentkezési időkorlát túllépés (Microsoft): Egy Microsoft bővítmény. Jelzi, hogy a munkameneted lejárt. 
   */
  h440 = 440,
  /**
   * h444: 
   *
   * Empty
   * Nincs válasz (Nginx): A Nginx naplóiban használt állapotkód, amely azt jelzi, hogy a szerver nem adott vissza semmilyen információt a kliensnek, és lezárta a kapcsolatot. (Hasznos az esetleges rosszindulatú szoftverek elleni védekezésben.) 
   */
  h444 = 444,
  /**
   * h449: 
   *
   * Empty
   * Újrapróbálás (Microsoft): Egy Microsoft kiterjesztése. A kérésnek újra küldésre kerüljön az megfelelő művelet végrehajtása után. 
   */
  h449 = 449,
  /**
   * h450: 
   *
   * Empty
   * Megállítva Windows szülői irányítások (Microsoft): Egy Microsoft bővítmény. Ez az hiba adódik, amikor az Windows szülői irányítások bekapcsolva vannak és blokkolják a megadott weboldalt elérését. 
   */
  h450 = 450,
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Ha egy hatékonyabb szerver áll rendelkezésre Exchange ActiveSync-ben, vagy a szerver nem fér hozzá az ügyfél postafiókjához.
   * A törvényi okok miatt nem elérhető: A szerver nem működhet, mert törvényi kérés érkezett. 
   */
  h451 = 451,
  /**
   * h494: 
   *
   * Empty
   * "Request Header Too Large (Nginx): Az Nginx belső kódja hasonló a 431-hez, de korábban került bevezetésre a 0.9.4 verzióban (2011. január 21-én)." 
   */
  h494 = 494,
  /**
   * h495: 
   *
   * Empty
   * Hivatkozási hiba (Nginx): Az Nginx belső kódja, amelyet használnak, amikor SSL ügyfélkértékeni hiba történik, hogy különbséget tegyenek a naplóban lévő 4XX-től, és irányítsák az hibas oldalt. 
   */
  h495 = 495,
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Az Nginx belső kódot használják, amikor a kliens nem biztosította a tanúsítványt, hogy megkülönböztesse az 4XX-t a naplóból és irányítsa az hibás oldalra. 
   */
  h496 = 496,
  /**
   * h497: 
   *
   * Empty
   * HTTP-t HTTPS-re (Nginx): Az Nginx belső kódja, amelyet a sima HTTP kérésekre használnak, amelyek az HTTPS portra kerülnek küldésre, hogy megkülönböztesse őket a naplóból származó 4XX-től és irányítsa őket az hibaoldalra. 
   */
  h497 = 497,
  /**
   * h498: 
   *
   * Empty
   * Token lejárt/érvénytelen (Esri): Visszatér ArcGIS for Server által. A 498-es kód azt jelzi, hogy a token lejárt vagy egyébként érvénytelen. 
   */
  h498 = 498,
  /**
   * h499: 
   *
   * Empty
   * Token szükséges (Esri): ArcGIS for Server által visszaküldött. A 499-es kód azt jelenti, hogy egy token szükséges (ha nem lett token beküldve). 
   */
  h499 = 499,
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Belső szerverhiba: Egy általános állapot a szerveren belül. 
   */
  h500 = 500,
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nem valósított ki: A szerver nem tud válaszolni a kérésre. Általában ez azt jelenti, hogy a szerver esetleg a jövőben támogathatja a kérést - különben egy 4xx állapotkód talán megfelelőbb lenne. 
   */
  h501 = 501,
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Hibás átjárókapu: A szerver mint próxis működik, és nem kapott elfogadható választ az felsőbb szintű szerverről. 
   */
  h502 = 502,
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Szolgáltatás nem elérhető: A szerver leállt és nem fogadja a kérelmeket. 
   */
  h503 = 503,
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout: A szerver mint proxy működik, és nem kapott válaszát az felső szintű szerverről. 
   */
  h504 = 504,
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Nem támogatott HTTP-verzió: A szerver nem támogatja az a HTTP-protokollverziót, amelyet a kérésben meghatározott. 
   */
  h505 = 505,
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * A variáns isimismo megküzdi: A átlátszó tartalmi tárgyalás a kérés eredményeként körkörös hivatkozást eredményez. 
   */
  h506 = 506,
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Túl kevés tárhely: A felhasználó vagy a szerver nem rendelkezik elegendő tárhely kvótával a kérés teljesítéséhez. 
   */
  h507 = 507,
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Ciklus észlelve: A szerver egy végtelen ciklust észlelt a kérésben. 
   */
  h508 = 508,
  /**
   * h509: 
   *
   * Empty
   * Bandwidth Limit Exceeded (Apache bw/limited extension): Ez a státusz kód nincs meghatározva egyetlen RFC-ben sem. A használata ismeretlen. 
   */
  h509 = 509,
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nem bővült: A kérés teljesítéséhez további bővítés szükséges. 
   */
  h510 = 510,
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Hálózati autentikáció szükséges: A kliensnek hálózati autentikációval kell rendelkeznie, mielőtt kérelmeket küldene. 
   */
  h511 = 511,
  /**
   * h520: 
   *
   * Empty
   * Ismeretlen hiba (Microsoft / CloudFlare): Ez a státusz kód nincs meghatározva semmilyen RFC-ben, és bizonyos szolgáltatások adnak vissza, például a Microsoft Azure és a CloudFlare szerverek: "A 520-es hiba alapvetően egy 'csapdában maradás' válasz, amikor a forrás szerver valami váratlan vagy nem tűrhető / értelmezhető (protokoll megszegés vagy üres válasz) választ ad vissza." 
   */
  h520 = 520,
  /**
   * h521: 
   *
   * Empty
   * Web Server leállt (CloudFlare): Az eredeti szerver elutasította a CloudFlare-től származó kapcsolatot. 
   */
  h521 = 521,
  /**
   * h522: 
   *
   * Empty
   * Kapcsolati időszak túllépés (CloudFlare): A CloudFlare nem tudott TCP kezdeti csomagolást megállapítani az eredeti szerverrel. 
   */
  h522 = 522,
  /**
   * h523: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): A CloudFlare nem tudott elérni az eredeti szervert; például ha az eredeti szerver DNS rekordjai nem helyesek. 
   */
  h523 = 523,
  /**
   * h524: 
   *
   * Empty
   * Timeout történt (CloudFlare): A CloudFlare képes volt TCP-kapcsolatot létesíteni az eredeti szerverrel, de nem kapott időben HTTP-választ. 
   */
  h524 = 524,
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake sikertelen (CloudFlare): A CloudFlare nem tudott SSL/TLS handshake-et folytatni az eredeti szerverrel. 
   */
  h525 = 525,
  /**
   * h526: 
   *
   * Empty
   * Érvénytelen SSL-érvényesítő bizonyítvány (CloudFlare): A CloudFlare nem tudta ellenőrizni az SSL/TLS-érvényesítő bizonyítványt, amelyet az eredeti szerver előállított. 
   */
  h526 = 526,
  /**
   * h527: 
   *
   * Empty
   * Railgun-hiba (CloudFlare): A kérés lejárt vagy sikertelen volt miután az WAN kapcsolat létrejött. 
   */
  h527 = 527
}
