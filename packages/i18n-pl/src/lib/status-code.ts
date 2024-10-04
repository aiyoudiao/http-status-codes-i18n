/**
 * © 2024 aiyoudiao
 * 
 * Ten plik został utworzony przez aiyoudiao i zawiera dużo ciężkiej pracy i mądrości.
 * 
 * Możesz swobodnie korzystać, modyfikować i rozpowszechniać ten plik, ale zachowaj to oświadczenie praw autorskich.
 * 
 * Jeśli uważasz ten plik za pomocny, daj mi gwiazdkę lub obserwuj mnie ツ.
 * 
 * Kontakt:
 * - Email:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 * 
 * Miłego programowania! Pamiętaj, kod to poezja, a front-end to sztuka. ツ
 */
export enum HttpStatusCode {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Kontynuuj: Serwer otrzymał nagłówki żądania i klient powinien przejść do wysłania treści żądania. 
   */
  CONTINUE = 100,
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Przełączanie protokołów: Żądający poprosił serwer o przełączenie protokołów, a serwer potwierdził, że to zrobi. 
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Przetwarzanie: Serwer otrzymał żądanie i jest w trakcie przetwarzania, ale jeszcze nie ma dostępnej odpowiedzi. 
   */
  PROCESSING = 102,
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Standardowa odpowiedź dla pomyślnych żądań HTTP. 
   */
  OK = 200,
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Utworzono: Żądanie zostało spełnione i stworzono nowy zasób. 
   */
  CREATED = 201,
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Zaakceptowano: Żądanie zostało zaakceptowane, ale jeszcze nie zostało przetworzone. Ten kod nie gwarantuje, że żądanie zostanie pomyślnie przetworzone. 
   */
  ACCEPTED = 202,
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informacje nieautorytatywne: HTTP 1.1. Serwer pomyślnie przetworzył żądanie, ale zwraca informacje z innego źródła. 
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Brak zawartości: Serwer zaakceptował żądanie, ale nie zwraca żadnej zawartości. Jest to często używane jako odpowiedź na żądanie DELETE. 
   */
  NO_CONTENT = 204,
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Resetowanie zawartości: Podobnie jak odpowiedź 204 bez zawartości, ale ta odpowiedź wymaga, aby żądający zresetował widok dokumentu. 
   */
  RESET_CONTENT = 205,
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Część treści: Serwer dostarcza tylko część treści, jak żądana przez klienta poprzez nagłówek zakresu. 
   */
  PARTIAL_CONTENT = 206,
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Ciało wiadomości, które następuje, jest wiadomością XML i może zawierać wiele osobnych kodów odpowiedzi, w zależności od liczby złożonych podzapytań. 
   */
  MULTI_STATUS = 207,
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Już zgłaszano: Członkowie wiązania DAV zostały już wyliczone w poprzedniej odpowiedzi na to żądanie i nie będą ponownie uwzględniane. 
   */
  ALREADY_REPORTED = 208,
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM używane: Serwer spełnił żądanie GET dla zasobu, a odpowiedź jest reprezentacją wyniku jednej lub więcej operacji instancji zastosowanych do bieżącej instancji. 
   */
  IM_USED = 226,
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Wiele możliwości wyboru: Istnieje kilka opcji, z których klient może wybrać jedną w scenariuszu protokołu hipertekstowego. 
   */
  MULTIPLE_CHOICES = 300,
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Przeniesiono trwale: Zasób został przeniesiony i wszystkie kolejne żądania powinny odwoływać się do jego nowego URI. 
   */
  MOVED_PERMANENTLY = 301,
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Znaleziono: Specyfikacja HTTP 1.0 opisuje ten status jako "Tymczasowo przeniesiony", ale popularne przeglądarki reagują na ten status podobnie jak na zachowanie przeznaczone dla 303. Zasób można pobrać, odnosząc się do zwróconego URI. 
   */
  FOUND = 302,
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Zobacz inne: Zasób może być pobrany, stosując metodę GET dla innego URI. Gdy otrzymany jest w odpowiedzi na żądania POST, PUT lub DELETE, można zwykle przyjąć, że serwer przetworzył żądanie pomyślnie i kieruje klienta do punktu końcowego z informacjami. 
   */
  SEE_OTHER = 303,
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nie zmodyfikowano: Zasób nie został zmodyfikowany od wersji określonej w nagłówkach If-Modified-Since lub If-Match. Zasób nie zostanie zwrócony w treści odpowiedzi. 
   */
  NOT_MODIFIED = 304,
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Użyj proxy: HTTP 1.1. Zasób jest dostępny tylko za pośrednictwem proxy, a adres jest dostarczony w odpowiedzi. 
   */
  USE_PROXY = 305,
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Zmiana proxy: przestarzała w HTTP 1.1. Używane do oznaczenia, że kolejne żądania powinny być wysyłane przy użyciu określonego proxy. 
   */
  SWITCH_PROXY = 306,
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Tymczasowe przekierowanie: HTTP 1.1. Żądanie powinno być powtórzone z URI podanym w odpowiedzi, ale przyszłe żądania nadal powinny wywoływać oryginalny URI. 
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Ten kod jest używany w Propozycji żądań HTTP z możliwością wznowienia, aby wznowić przerwane żądania PUT lub POST.
   * Permanently Redirected: Żądania i wszystkie przyszłe żądania powinny być ponownie wysłane przy użyciu URI podanego w odpowiedzi. 
   */
  PERMANENT_REDIRECT = 308,
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Źle sformułowane żądanie: Żądanie nie może być spełnione ze względu na niepoprawną składnię żądania. 
   */
  BAD_REQUEST = 400,
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nieautoryzowany: Żądający nie ma uprawnień do dostępu do zasobu. Jest podobny do 403, ale używany w przypadkach, gdy oczekiwane jest uwierzytelnienie, ale nie powiodło się lub nie zostało dostarczone. 
   */
  UNAUTHORIZED = 401,
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Płatność wymagana: Zarezerwowane na przyszłość. Niektóre usługi internetowe wykorzystują ten stan jako wskazanie, że klient wysłał zbyt dużą liczbę żądań. 
   */
  PAYMENT_REQUIRED = 402,
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Zabronione: Żądanie było sformułowane poprawnie, ale serwer odmawia dostarczenia żądanego zasobu. W przeciwieństwie do 401, uwierzytelnienie nie zmieni odpowiedzi serwera. 
   */
  FORBIDDEN = 403,
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nie znaleziono: Nie można znaleźć żądanego zasobu. Jest to często stosowane jako zbiorcza odpowiedź dla wszystkich nieprawidłowych adresów URI żądanych przez serwer. 
   */
  NOT_FOUND = 404,
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metoda niedozwolona: żądanie zasobu odbywało się przy użyciu metody, która nie jest dozwolona. Na przykład żądanie zasobu przy użyciu metody POST, gdy zasób obsługuje tylko metodę GET. 
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nie do przyjęcia: Zasób jest prawidłowy, ale nie może być dostarczony w formacie określonym w nagłówkach Accept w żądaniu. 
   */
  NOT_ACCEPTABLE = 406,
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Wymagana jest autoryzacja proxy: Autoryzacja przy pośrednictwie proxy jest wymagana przed realizacją żądań. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout żądania: Serwer przekroczył czas oczekiwania na żądanie od klienta. Klient ma prawo powtórzyć żądanie. 
   */
  REQUEST_TIMEOUT = 408,
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   *  Konflikt: Żądanie nie może zostać zrealizowane z powodu konfliktu w parametrach żądania. 
   */
  CONFLICT = 409,
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Usunięto: zasób nie jest już dostępny w żądanym URI i nie zostanie podana żadna przekierowanie. 
   */
  GONE = 410,
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Wymagana długość: Żądanie nie określiło długości swojej zawartości, jak wymaga tego zasób. 
   */
  LENGTH_REQUIRED = 411,
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Warunek wstępny nie został spełniony: Serwer nie spełnia jednego z warunków wstępnych określonych przez klienta. 
   */
  PRECONDITION_FAILED = 412,
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Żądanie jednostki jest zbyt duże: Zawartość żądania jest większa niż to, co serwer jest w stanie przetworzyć. 
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Zbyt długi URI żądania: URI podane w żądaniu jest zbyt długie, aby serwer mógł je przetworzyć. Ten kod stanu jest często używany, gdy w URI żądania typu GET zakodowano zbyt wiele danych i należy zamiast tego użyć żądania typu POST. 
   */
  URI_TOO_LONG = 414,
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Nieobsługiwany typ multimediów: Dane dostarczone przez klienta mają typ multimediów, którego serwer nie obsługuje. 
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Zamówiony zakres nie jest możliwy do spełnienia: Klient zażądał części zasobu, ale serwer nie może jej dostarczyć. 
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Niepowodzenie oczekiwania: Serwer nie może spełnić wymagań pola nagłówka żądania Expect. 
   */
  EXPECTATION_FAILED = 417,
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Jestem czajnikiem: Każda próba zaparzenia kawy w czajniku powinna skutkować kodem błędu "418 Jestem czajnikiem". Wynikowe ciało encji MOŻE być krótkie i tęgie. 
   */
  I_M_A_TEAPOT = 418,
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Niepoprawna kierunek żądania: Żądanie zostało skierowane do serwera, który nie jest w stanie udzielić odpowiedzi. Ten kod stanu może być wysłany przez serwer, który nie jest skonfigurowany do udzielania odpowiedzi dla kombinacji schematu i uprawnień zawartych w URI żądania. 
   */
  MISDIRECTED_REQUEST = 421,
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Nieprzetwarzalny podmiot: Żądanie było sformułowane poprawnie, ale nie może być przetwarzane w jego obecnej formie. Często stosowany, gdy określone parametry nie przechodzą błędów walidacji. 
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Zablokowane: żądany zasób został znaleziony, ale jest zablokowany i nie będzie zwracany. 
   */
  LOCKED = 423,
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Niepowodzenie zależności: Żądanie nie powiodło się z powodu niepowodzenia poprzedniego żądania. 
   */
  FAILED_DEPENDENCY = 424,
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Wymagana aktualizacja: Klient powinien powtórzyć żądanie za pomocą zaktualizowanego protokołu, takiego jak TLS 1.0. 
   */
  UPGRADE_REQUIRED = 426,
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Warunek wstępny wymagany: Serwer źródłowy wymaga, aby żądanie było warunkowe. 
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Zbyt wiele żądań: Użytkownik wysłał zbyt wiele żądań w danym okresie czasu („ograniczenie szybkości”). 
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Pole nagłówkowe żądania jest zbyt duże: Serwer nie chce przetwarzać żądania, ponieważ jego pola nagłówkowe są zbyt duże. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Timeout logowania (Microsoft): Rozszerzenie Microsoft. Oznacza, że sesja wygasła. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 440,
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Brak odpowiedzi (Nginx): Stosowany w dziennikach Nginx, aby wskazać, że serwer nie zwrócił żadnych informacji do klienta i zamknął połączenie (przydatne jako środek odstraszający dla złośliwego oprogramowania). 
   */
  NO_RESPONSE_NGINX = 444,
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Próba ponowienia (Microsoft): Rozszerzenie Microsoft. Żądanie powinno zostać ponowione po wykonaniu odpowiedniej akcji. 
   */
  RETRY_WITH_MICROSOFT = 449,
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Zablokowane przez Windows Parental Controls (Microsoft): Rozszerzenie firmy Microsoft. Ten błąd jest wyświetlany, gdy Windows Parental Controls są włączone i blokują dostęp do danej strony internetowej. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 450,
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): W przypadku Exchange ActiveSync używane, jeśli istnieje bardziej wydajny serwer lub serwer nie ma dostępu do skrzynki pocztowej użytkownika.
   * Z powodu powodów prawnych niedostępne: Serwer nie może wykonywać operacji z powodu otrzymania żądania ograniczenia prawnego. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Nagłówek żądania jest zbyt duży (Nginx): Kod wewnętrzny Nginx podobny do 431, ale został wprowadzony wcześniej w wersji 0.9.4 (21 stycznia 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 494,
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Błąd certyfikatu (Nginx): Wewnętrzny kod Nginx wykorzystywany w przypadku błędu certyfikatu klienta SSL, aby odróżnić go od 4XX w dzienniku i przekierować na stronę błędu. 
   */
  CERT_ERROR_NGINX = 495,
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * Brak certyfikatu (Nginx): Kod wewnętrzny Nginx wykorzystywany, gdy klient nie dostarczył certyfikatu, aby odróżnić go od 4XX w dzienniku i przekierować na stronę błędu. 
   */
  NO_CERT_NGINX = 496,
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP do HTTPS (Nginx): Wewnętrzny kod Nginx używany dla zwykłych żądań HTTP wysyłanych do portu HTTPS w celu wyróżnienia ich od 4XX w dzienniku i przekierowania strony z błędem. 
   */
  HTTP_TO_HTTPS_NGINX = 497,
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token wygasł / jest nieprawidłowy (Esri): Zwrócone przez ArcGIS for Server. Kod 498 wskazuje na wygasły lub w inny sposób nieprawidłowy token. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 498,
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Wymagany token (Esri): Zwrócony przez ArcGIS for Server. Kod 499 wskazuje, że wymagany jest token (jeśli token nie został przesłany). 
   */
  TOKEN_REQUIRED_ESRI = 499,
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Błąd wewnętrzny serwera: Typowy status dla błędu w samym serwerze. 
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nie zaimplementowano: Serwer nie może odpowiedzieć na żądanie. Zazwyczaj oznacza to, że serwer może potencjalnie obsłużyć to żądanie w przyszłości - w przeciwnym razie bardziej odpowiedni może być kod statusu 4xx. 
   */
  NOT_IMPLEMENTED = 501,
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Zły bramka: Serwer działa jako proxy i nie otrzymał dopuszczalnej odpowiedzi od serwera źródłowego. 
   */
  BAD_GATEWAY = 502,
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Usługa niedostępna: Serwer jest wyłączony i nie przyjmuje żądań. 
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout bramy: Serwer działający jako proxy nie otrzymał odpowiedzi od serwera górnego. 
   */
  GATEWAY_TIMEOUT = 504,
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Wersja protokołu HTTP nie jest obsługiwana: Serwer nie obsługuje wersji protokołu HTTP określonej w żądaniu. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Wariant również negocjuje: Przejrzyste negocjowanie zawartości dla żądania skutkuje referencją cykliczną. 
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Niedostatek miejsca na dysku: Użytkownik lub serwer nie ma wystarczającej przydziału miejsca na dysku, aby spełnić żądanie. 
   */
  INSUFFICIENT_STORAGE = 507,
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Wykryto pętlę: Serwer wykrył nieskończoną pętlę w żądaniu. 
   */
  LOOP_DETECTED = 508,
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Przekroczenie limitu pasma (rozszerzenie bw/limited Apache): Ten kod statusu nie jest określony w żadnych RFC. Sposób jego użycia jest nieznany. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nie rozszerzone: Wymagane są dalsze rozszerzenia żądania, aby można je było zrealizować. 
   */
  NOT_EXTENDED = 510,
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autoryzacja sieci wymagana: Klient musi dokonać autoryzacji w sieci przed wysłaniem żądań. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Błąd nieznany (Microsoft / CloudFlare): Ten kod stanu nie jest określony w żadnym RFC i jest zwracany przez pewne usługi, na przykład serwery Microsoft Azure i CloudFlare: "Błąd 520 jest zasadniczo odpowiedzią 'wszystko-w-jednym' dla sytuacji, gdy serwer źródłowy zwraca coś niezaskakującego lub czegoś, co nie jest tolerowane / interpretowane (naruszenie protokołu lub pusta odpowiedź)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 520,
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Oryginalny serwer odmówił połączenia z CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 521,
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Timeout połączenia (CloudFlare): CloudFlare nie mogło wynegocjować ręki TCP z serwerem źródłowym. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 522,
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): CloudFlare nie może dotrzeć do serwera źródłowego; na przykład jeśli rekordy DNS serwera źródłowego są niepoprawne. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 523,
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Wystąpił timeout (CloudFlare): CloudFlare był w stanie ustanowić połączenie TCP z serwerem źródłowym, ale nie otrzymał w odpowiednim czasie odpowiedzi HTTP. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 524,
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * Błąd SSL Handshake (CloudFlare): CloudFlare nie mogło wynegocjować SSL/TLS handshake z serwerem źródłowym. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 525,
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Nieprawidłowy certyfikat SSL (CloudFlare): CloudFlare nie mógł zweryfikować certyfikatu SSL/TLS przedstawionego przez serwer źródłowy. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 526,
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Błąd Railguna (CloudFlare): Żądanie przekroczyło czas oczekiwania lub nie powiodło się po ustanowieniu połączenia WAN. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 527
}

export enum HttpStatusCodeByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Kontynuuj: Serwer otrzymał nagłówki żądania i klient powinien przejść do wysłania treści żądania. 
   */
  h100 = 100,
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Przełączanie protokołów: Żądający poprosił serwer o przełączenie protokołów, a serwer potwierdził, że to zrobi. 
   */
  h101 = 101,
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Przetwarzanie: Serwer otrzymał żądanie i jest w trakcie przetwarzania, ale jeszcze nie ma dostępnej odpowiedzi. 
   */
  h102 = 102,
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Standardowa odpowiedź dla pomyślnych żądań HTTP. 
   */
  h200 = 200,
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Utworzono: Żądanie zostało spełnione i stworzono nowy zasób. 
   */
  h201 = 201,
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Zaakceptowano: Żądanie zostało zaakceptowane, ale jeszcze nie zostało przetworzone. Ten kod nie gwarantuje, że żądanie zostanie pomyślnie przetworzone. 
   */
  h202 = 202,
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informacje nieautorytatywne: HTTP 1.1. Serwer pomyślnie przetworzył żądanie, ale zwraca informacje z innego źródła. 
   */
  h203 = 203,
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Brak zawartości: Serwer zaakceptował żądanie, ale nie zwraca żadnej zawartości. Jest to często używane jako odpowiedź na żądanie DELETE. 
   */
  h204 = 204,
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Resetowanie zawartości: Podobnie jak odpowiedź 204 bez zawartości, ale ta odpowiedź wymaga, aby żądający zresetował widok dokumentu. 
   */
  h205 = 205,
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Część treści: Serwer dostarcza tylko część treści, jak żądana przez klienta poprzez nagłówek zakresu. 
   */
  h206 = 206,
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Ciało wiadomości, które następuje, jest wiadomością XML i może zawierać wiele osobnych kodów odpowiedzi, w zależności od liczby złożonych podzapytań. 
   */
  h207 = 207,
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Już zgłaszano: Członkowie wiązania DAV zostały już wyliczone w poprzedniej odpowiedzi na to żądanie i nie będą ponownie uwzględniane. 
   */
  h208 = 208,
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM używane: Serwer spełnił żądanie GET dla zasobu, a odpowiedź jest reprezentacją wyniku jednej lub więcej operacji instancji zastosowanych do bieżącej instancji. 
   */
  h226 = 226,
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Wiele możliwości wyboru: Istnieje kilka opcji, z których klient może wybrać jedną w scenariuszu protokołu hipertekstowego. 
   */
  h300 = 300,
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Przeniesiono trwale: Zasób został przeniesiony i wszystkie kolejne żądania powinny odwoływać się do jego nowego URI. 
   */
  h301 = 301,
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Znaleziono: Specyfikacja HTTP 1.0 opisuje ten status jako "Tymczasowo przeniesiony", ale popularne przeglądarki reagują na ten status podobnie jak na zachowanie przeznaczone dla 303. Zasób można pobrać, odnosząc się do zwróconego URI. 
   */
  h302 = 302,
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Zobacz inne: Zasób może być pobrany, stosując metodę GET dla innego URI. Gdy otrzymany jest w odpowiedzi na żądania POST, PUT lub DELETE, można zwykle przyjąć, że serwer przetworzył żądanie pomyślnie i kieruje klienta do punktu końcowego z informacjami. 
   */
  h303 = 303,
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Nie zmodyfikowano: Zasób nie został zmodyfikowany od wersji określonej w nagłówkach If-Modified-Since lub If-Match. Zasób nie zostanie zwrócony w treści odpowiedzi. 
   */
  h304 = 304,
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Użyj proxy: HTTP 1.1. Zasób jest dostępny tylko za pośrednictwem proxy, a adres jest dostarczony w odpowiedzi. 
   */
  h305 = 305,
  /**
   * h306: 
   *
   * Empty
   * Zmiana proxy: przestarzała w HTTP 1.1. Używane do oznaczenia, że kolejne żądania powinny być wysyłane przy użyciu określonego proxy. 
   */
  h306 = 306,
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Tymczasowe przekierowanie: HTTP 1.1. Żądanie powinno być powtórzone z URI podanym w odpowiedzi, ale przyszłe żądania nadal powinny wywoływać oryginalny URI. 
   */
  h307 = 307,
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Ten kod jest używany w Propozycji żądań HTTP z możliwością wznowienia, aby wznowić przerwane żądania PUT lub POST.
   * Permanently Redirected: Żądania i wszystkie przyszłe żądania powinny być ponownie wysłane przy użyciu URI podanego w odpowiedzi. 
   */
  h308 = 308,
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Źle sformułowane żądanie: Żądanie nie może być spełnione ze względu na niepoprawną składnię żądania. 
   */
  h400 = 400,
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Nieautoryzowany: Żądający nie ma uprawnień do dostępu do zasobu. Jest podobny do 403, ale używany w przypadkach, gdy oczekiwane jest uwierzytelnienie, ale nie powiodło się lub nie zostało dostarczone. 
   */
  h401 = 401,
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Płatność wymagana: Zarezerwowane na przyszłość. Niektóre usługi internetowe wykorzystują ten stan jako wskazanie, że klient wysłał zbyt dużą liczbę żądań. 
   */
  h402 = 402,
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Zabronione: Żądanie było sformułowane poprawnie, ale serwer odmawia dostarczenia żądanego zasobu. W przeciwieństwie do 401, uwierzytelnienie nie zmieni odpowiedzi serwera. 
   */
  h403 = 403,
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Nie znaleziono: Nie można znaleźć żądanego zasobu. Jest to często stosowane jako zbiorcza odpowiedź dla wszystkich nieprawidłowych adresów URI żądanych przez serwer. 
   */
  h404 = 404,
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metoda niedozwolona: żądanie zasobu odbywało się przy użyciu metody, która nie jest dozwolona. Na przykład żądanie zasobu przy użyciu metody POST, gdy zasób obsługuje tylko metodę GET. 
   */
  h405 = 405,
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Nie do przyjęcia: Zasób jest prawidłowy, ale nie może być dostarczony w formacie określonym w nagłówkach Accept w żądaniu. 
   */
  h406 = 406,
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Wymagana jest autoryzacja proxy: Autoryzacja przy pośrednictwie proxy jest wymagana przed realizacją żądań. 
   */
  h407 = 407,
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout żądania: Serwer przekroczył czas oczekiwania na żądanie od klienta. Klient ma prawo powtórzyć żądanie. 
   */
  h408 = 408,
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   *  Konflikt: Żądanie nie może zostać zrealizowane z powodu konfliktu w parametrach żądania. 
   */
  h409 = 409,
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Usunięto: zasób nie jest już dostępny w żądanym URI i nie zostanie podana żadna przekierowanie. 
   */
  h410 = 410,
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Wymagana długość: Żądanie nie określiło długości swojej zawartości, jak wymaga tego zasób. 
   */
  h411 = 411,
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Warunek wstępny nie został spełniony: Serwer nie spełnia jednego z warunków wstępnych określonych przez klienta. 
   */
  h412 = 412,
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Żądanie jednostki jest zbyt duże: Zawartość żądania jest większa niż to, co serwer jest w stanie przetworzyć. 
   */
  h413 = 413,
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Zbyt długi URI żądania: URI podane w żądaniu jest zbyt długie, aby serwer mógł je przetworzyć. Ten kod stanu jest często używany, gdy w URI żądania typu GET zakodowano zbyt wiele danych i należy zamiast tego użyć żądania typu POST. 
   */
  h414 = 414,
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Nieobsługiwany typ multimediów: Dane dostarczone przez klienta mają typ multimediów, którego serwer nie obsługuje. 
   */
  h415 = 415,
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Zamówiony zakres nie jest możliwy do spełnienia: Klient zażądał części zasobu, ale serwer nie może jej dostarczyć. 
   */
  h416 = 416,
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Niepowodzenie oczekiwania: Serwer nie może spełnić wymagań pola nagłówka żądania Expect. 
   */
  h417 = 417,
  /**
   * h418: 
   *
   * Empty
   * Jestem czajnikiem: Każda próba zaparzenia kawy w czajniku powinna skutkować kodem błędu "418 Jestem czajnikiem". Wynikowe ciało encji MOŻE być krótkie i tęgie. 
   */
  h418 = 418,
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Niepoprawna kierunek żądania: Żądanie zostało skierowane do serwera, który nie jest w stanie udzielić odpowiedzi. Ten kod stanu może być wysłany przez serwer, który nie jest skonfigurowany do udzielania odpowiedzi dla kombinacji schematu i uprawnień zawartych w URI żądania. 
   */
  h421 = 421,
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Nieprzetwarzalny podmiot: Żądanie było sformułowane poprawnie, ale nie może być przetwarzane w jego obecnej formie. Często stosowany, gdy określone parametry nie przechodzą błędów walidacji. 
   */
  h422 = 422,
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Zablokowane: żądany zasób został znaleziony, ale jest zablokowany i nie będzie zwracany. 
   */
  h423 = 423,
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Niepowodzenie zależności: Żądanie nie powiodło się z powodu niepowodzenia poprzedniego żądania. 
   */
  h424 = 424,
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Wymagana aktualizacja: Klient powinien powtórzyć żądanie za pomocą zaktualizowanego protokołu, takiego jak TLS 1.0. 
   */
  h426 = 426,
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Warunek wstępny wymagany: Serwer źródłowy wymaga, aby żądanie było warunkowe. 
   */
  h428 = 428,
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Zbyt wiele żądań: Użytkownik wysłał zbyt wiele żądań w danym okresie czasu („ograniczenie szybkości”). 
   */
  h429 = 429,
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Pole nagłówkowe żądania jest zbyt duże: Serwer nie chce przetwarzać żądania, ponieważ jego pola nagłówkowe są zbyt duże. 
   */
  h431 = 431,
  /**
   * h440: 
   *
   * Empty
   * Timeout logowania (Microsoft): Rozszerzenie Microsoft. Oznacza, że sesja wygasła. 
   */
  h440 = 440,
  /**
   * h444: 
   *
   * Empty
   * Brak odpowiedzi (Nginx): Stosowany w dziennikach Nginx, aby wskazać, że serwer nie zwrócił żadnych informacji do klienta i zamknął połączenie (przydatne jako środek odstraszający dla złośliwego oprogramowania). 
   */
  h444 = 444,
  /**
   * h449: 
   *
   * Empty
   * Próba ponowienia (Microsoft): Rozszerzenie Microsoft. Żądanie powinno zostać ponowione po wykonaniu odpowiedniej akcji. 
   */
  h449 = 449,
  /**
   * h450: 
   *
   * Empty
   * Zablokowane przez Windows Parental Controls (Microsoft): Rozszerzenie firmy Microsoft. Ten błąd jest wyświetlany, gdy Windows Parental Controls są włączone i blokują dostęp do danej strony internetowej. 
   */
  h450 = 450,
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): W przypadku Exchange ActiveSync używane, jeśli istnieje bardziej wydajny serwer lub serwer nie ma dostępu do skrzynki pocztowej użytkownika.
   * Z powodu powodów prawnych niedostępne: Serwer nie może wykonywać operacji z powodu otrzymania żądania ograniczenia prawnego. 
   */
  h451 = 451,
  /**
   * h494: 
   *
   * Empty
   * Nagłówek żądania jest zbyt duży (Nginx): Kod wewnętrzny Nginx podobny do 431, ale został wprowadzony wcześniej w wersji 0.9.4 (21 stycznia 2011). 
   */
  h494 = 494,
  /**
   * h495: 
   *
   * Empty
   * Błąd certyfikatu (Nginx): Wewnętrzny kod Nginx wykorzystywany w przypadku błędu certyfikatu klienta SSL, aby odróżnić go od 4XX w dzienniku i przekierować na stronę błędu. 
   */
  h495 = 495,
  /**
   * h496: 
   *
   * Empty
   * Brak certyfikatu (Nginx): Kod wewnętrzny Nginx wykorzystywany, gdy klient nie dostarczył certyfikatu, aby odróżnić go od 4XX w dzienniku i przekierować na stronę błędu. 
   */
  h496 = 496,
  /**
   * h497: 
   *
   * Empty
   * HTTP do HTTPS (Nginx): Wewnętrzny kod Nginx używany dla zwykłych żądań HTTP wysyłanych do portu HTTPS w celu wyróżnienia ich od 4XX w dzienniku i przekierowania strony z błędem. 
   */
  h497 = 497,
  /**
   * h498: 
   *
   * Empty
   * Token wygasł / jest nieprawidłowy (Esri): Zwrócone przez ArcGIS for Server. Kod 498 wskazuje na wygasły lub w inny sposób nieprawidłowy token. 
   */
  h498 = 498,
  /**
   * h499: 
   *
   * Empty
   * Wymagany token (Esri): Zwrócony przez ArcGIS for Server. Kod 499 wskazuje, że wymagany jest token (jeśli token nie został przesłany). 
   */
  h499 = 499,
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Błąd wewnętrzny serwera: Typowy status dla błędu w samym serwerze. 
   */
  h500 = 500,
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Nie zaimplementowano: Serwer nie może odpowiedzieć na żądanie. Zazwyczaj oznacza to, że serwer może potencjalnie obsłużyć to żądanie w przyszłości - w przeciwnym razie bardziej odpowiedni może być kod statusu 4xx. 
   */
  h501 = 501,
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Zły bramka: Serwer działa jako proxy i nie otrzymał dopuszczalnej odpowiedzi od serwera źródłowego. 
   */
  h502 = 502,
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Usługa niedostępna: Serwer jest wyłączony i nie przyjmuje żądań. 
   */
  h503 = 503,
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout bramy: Serwer działający jako proxy nie otrzymał odpowiedzi od serwera górnego. 
   */
  h504 = 504,
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Wersja protokołu HTTP nie jest obsługiwana: Serwer nie obsługuje wersji protokołu HTTP określonej w żądaniu. 
   */
  h505 = 505,
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Wariant również negocjuje: Przejrzyste negocjowanie zawartości dla żądania skutkuje referencją cykliczną. 
   */
  h506 = 506,
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Niedostatek miejsca na dysku: Użytkownik lub serwer nie ma wystarczającej przydziału miejsca na dysku, aby spełnić żądanie. 
   */
  h507 = 507,
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Wykryto pętlę: Serwer wykrył nieskończoną pętlę w żądaniu. 
   */
  h508 = 508,
  /**
   * h509: 
   *
   * Empty
   * Przekroczenie limitu pasma (rozszerzenie bw/limited Apache): Ten kod statusu nie jest określony w żadnych RFC. Sposób jego użycia jest nieznany. 
   */
  h509 = 509,
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Nie rozszerzone: Wymagane są dalsze rozszerzenia żądania, aby można je było zrealizować. 
   */
  h510 = 510,
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autoryzacja sieci wymagana: Klient musi dokonać autoryzacji w sieci przed wysłaniem żądań. 
   */
  h511 = 511,
  /**
   * h520: 
   *
   * Empty
   * Błąd nieznany (Microsoft / CloudFlare): Ten kod stanu nie jest określony w żadnym RFC i jest zwracany przez pewne usługi, na przykład serwery Microsoft Azure i CloudFlare: "Błąd 520 jest zasadniczo odpowiedzią 'wszystko-w-jednym' dla sytuacji, gdy serwer źródłowy zwraca coś niezaskakującego lub czegoś, co nie jest tolerowane / interpretowane (naruszenie protokołu lub pusta odpowiedź)." 
   */
  h520 = 520,
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Oryginalny serwer odmówił połączenia z CloudFlare. 
   */
  h521 = 521,
  /**
   * h522: 
   *
   * Empty
   * Timeout połączenia (CloudFlare): CloudFlare nie mogło wynegocjować ręki TCP z serwerem źródłowym. 
   */
  h522 = 522,
  /**
   * h523: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): CloudFlare nie może dotrzeć do serwera źródłowego; na przykład jeśli rekordy DNS serwera źródłowego są niepoprawne. 
   */
  h523 = 523,
  /**
   * h524: 
   *
   * Empty
   * Wystąpił timeout (CloudFlare): CloudFlare był w stanie ustanowić połączenie TCP z serwerem źródłowym, ale nie otrzymał w odpowiednim czasie odpowiedzi HTTP. 
   */
  h524 = 524,
  /**
   * h525: 
   *
   * Empty
   * Błąd SSL Handshake (CloudFlare): CloudFlare nie mogło wynegocjować SSL/TLS handshake z serwerem źródłowym. 
   */
  h525 = 525,
  /**
   * h526: 
   *
   * Empty
   * Nieprawidłowy certyfikat SSL (CloudFlare): CloudFlare nie mógł zweryfikować certyfikatu SSL/TLS przedstawionego przez serwer źródłowy. 
   */
  h526 = 526,
  /**
   * h527: 
   *
   * Empty
   * Błąd Railguna (CloudFlare): Żądanie przekroczyło czas oczekiwania lub nie powiodło się po ustanowieniu połączenia WAN. 
   */
  h527 = 527
}
