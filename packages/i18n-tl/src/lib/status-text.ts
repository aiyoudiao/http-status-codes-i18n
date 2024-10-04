/**
* © 2024 aiyoudiao
*
* Ito ang file na nilikha ni aiyoudiao, na naglalaman ng maraming paghihirap at katalinuhan.
*
* Libre mong gamitin, baguhin, at ipamahagi ang file na ito, ngunit mangyaring panatilihin ang copyright notice na ito.
*
* Kung nakatulong sa iyo ang file na ito, mangyaring bigyan ako ng isang bituin o sundin ako ツ.
*
* Mga paraan upang makipag-ugnay:
* - Email:,newdiao@163.com,
* - GitHub:,https://github.com/aiyoudiao,
*
* Maligayang pag-program! Tandaan, ang code ay isang tula, at ang front-end ay isang sining. ツ
*/
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Patuloy: Ang server ay nakatanggap na ng mga header ng request, at ang client ay dapat magpatuloy na magpadala ng katawan ng request. 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Pagpalit ng protocol: Sinabi ng tagapaghingi na palitan ng server ang protocol at kinilala ng server na gagawin ito. 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Pagproseso: Ang server ay natanggap at nagpoproseso ang mga kahilingan, ngunit wala pang available na tugon. 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP. 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Nilikha: Ang kahilingan ay natupad at isang bagong mapagkukunan ay naitatag. 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Katanggap-tanggap: Ang kahilingan ay tinanggap na ngunit hindi pa naiproseso. Ang kodigong ito ay hindi nangangako na ang kahilingan ay malulusawing maayos. 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Hindi awtoritatibong impormasyon: HTTP 1.1. Ang server ay matagumpay na naiproseso ang kahilingan ngunit nagbabalik ng impormasyon mula sa ibang pinagmulan. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Walang nilalaman: Tinanggap ng server ang kahilingan ngunit hindi nagbabalik ng anumang nilalaman. Kadalasan ginagamit ito bilang tugon sa kahilingan na DELETE. 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * I-reset ang nilalaman: Katulad ng 204 na walang nilalaman na tugon, ngunit ang tugong ito ay nangangailangan na i-reset ng requester ang view ng dokumento. 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Bahagi ng nilalaman: Ang server ay naghahatid lamang ng isang bahagi ng nilalaman, gaya ng hiniling ng client sa pamamagitan ng isang range header. 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Ang katawan ng mensahe na sumusunod ay isang mensahe sa XML at maaaring maglaman ng maraming mga code ng tugon, depende sa kung gaano karaming mga sub-request ang ginawa. 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Naulat na: Ang mga miyembro ng DAV binding ay na-enumerate na sa nakaraang sagot sa request na ito, at hindi na kasama muli. 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM ginamit: Ang server ay nakumpleto ang GET request para sa resource, at ang response ay isang representasyon ng resulta ng isa o higit pang mga instance-manipulations na inilapat sa kasalukuyang instance. 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Maraming mga pagpipilian: Mayroong maraming mga opsyon na maaaring sundin ng client. 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Naglipat na permanente: Ang resource ay inilipat na at ang lahat ng mga susunod na request ay dapat sumangguni sa bagong URI nito. 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Natagpuan: Ang specification ng HTTP 1.0 ay inilarawan ang kalagayan na ito bilang "Moved Temporarily", ngunit ang mga popular na browser ay sumasagot sa kalagayan na ito na katulad ng pag-uugali na inilaan para sa 303. Ang resource ay maaaring makuha sa pamamagitan ng pagtukoy sa URI na ibinalik. 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Tingnan ang iba: Ang mapagkukunan ay maaaring makuha sa pamamagitan ng pagsunod sa iba pang URI gamit ang GET method. Kapag natanggap bilang tugon sa POST, PUT, o DELETE, karaniwang maaaring ipagpalagay na ang server ay nagsagawa nang matagumpay ng kahilingan at naglalayong ipadala ang client sa isang endpoint na may impormasyon. 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Hindi binago: Mula pa noong bersyon na tinukoy sa mga header ng If-Modified-Since o If-Match, ang resource ay hindi binago. Hindi mababalik ang resource sa katawan ng tugon. 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Gumamit ng proxy: HTTP 1.1. Ang mapagkukunan ay maaaring ma-access lamang sa pamamagitan ng isang proxy at ang address ay ibinigay sa pagtugon. 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Switch proxy: In HTTP 1.1, ito ay deprecated. Ginamit upang sabihin na ang mga sumusunod na mga kahilingan ay dapat ipadala gamit ang tinukoy na proxy. 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Temporary redirect: HTTP 1.1. Ang kahilingan ay dapat na paulit-ulit gamit ang URI na ibinigay sa tugon, ngunit ang mga hinaharap na kahilingan ay dapat pa ring tawagin ang orihinal na URI. 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Ang code na ito ay ginagamit sa Resumable HTTP Requests Proposal upang mabalik ang mga aborted PUT o POST requests.
   * Permanent Redirect: Ang mga kahilingan at lahat ng mga hinaharap na kahilingan ay dapat muling ipadala gamit ang URI na ibinigay sa response. 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Maling pangangailangan: Ang pangangailangan ay hindi masasakatuparan dahil sa hindi wastong syntax ng pangangailangan. 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Walang awtorisasyon: Ang nagmumungkahi ay hindi awtorisado upang ma-access ang mapagkukunan. Katulad nito ang 403 ngunit ginagamit sa mga kaso kung saan inaasahan ang pagpapatunay ng pagkakakilanlan ngunit nabigo o hindi naibigay. 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Kailangan ng bayad: Inireserba para sa hinaharap na paggamit. Ang ilang mga serbisyo sa web ay gumagamit nito bilang indikasyon na ang kliyente ay nagpadala ng labis na bilang ng mga kahilingan. 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Prohibido: Ang kahilingan ay naformat nang tama pero ang server ay tumangging ibigay ang hiniling na mapagkukunan. Hindi katulad ng 401, ang pagpapatunay ng pagkakakilanlan ay hindi magpapabago sa tugon ng server. 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Hindi natagpuan: Ang mapagkukunan ay hindi matagpuan. Ginagamit ito kadalasang bilang isang pangkalahatang paraan para sa lahat ng hindi wastong mga URI na hiniling sa server. 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metodo di hindi payag: Ang resource ay hiniling gamit ang isang metodo na hindi payag. Halimbawa, ang paghingi ng resource gamit ang POST na metodo kapag ang resource ay suportado lamang ang GET na metodo. 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Hindi tanggap: Ang mapagkukunan ay wasto, ngunit hindi maaaring ibigay sa isang format na tinukoy sa mga Accept headers sa kahilingan. 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Kinakailangan ang pagpapatotoo ng proxy: Bago matupad ang mga kahilingan, kinakailangan ang pagpapatotoo sa proxy. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Request timeout: Ang server ay nag-expire sa paghihintay para sa isang kahilingan mula sa client. Pinahintulutan ang client na muling magpadala ng kahilingan. 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Kontrago: Ang kahilingan ay hindi maipatupad dahil sa kontrago sa mga pamamaraan ng kahilingan. 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Nawala: Ang mapagkukunan ay hindi na magagamit sa hiniling na URI at walang pagpapadala ng pangalawang direksyon. 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Kailangan sa haba: Ang kahilingan ay hindi tinukoy ang haba ng nilalaman nito gaya ng kinakailangan ng mapagkukunan. 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Naulit: Ang server ay hindi nakakatugon sa isa sa mga precondition na tinukoy ng client. 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Hinihiling na entity ay masyadong malaki: Ang hinihiling ay mas malaki kaysa sa kaya pang iproseso ng server. 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Hiling sa URI masyadong mahaba: Ang URI na ibinigay sa hiling ay masyadong mahaba para maiproseso ng server. Karaniwang ginagamit ito kapag masyadong maraming data ang nakodigo sa URI ng isang GET hiling at dapat gamitin ang POST hiling sa halip. 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Hindi suportadong uri ng midya: Ang data na ibinigay ng client ay may uri ng midya na hindi sinusuportahan ng server. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Hinihiling na saklaw ay hindi matugunan: Ang kliyente ay humiling para sa isang bahagi ng mapagkukunan ngunit ang server ay hindi maaaring magbigay ng bahaging iyon. 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Nagkabigo ang inaasahan: Ang server ay hindi makakatugon sa mga kinakailangan ng field ng Expect request-header. 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Ako ang isang kawa: Anuman ang pagtatangka na magluto ng kape gamit ang isang kawa ay dapat magresulta sa error code na "418 Ako ang isang kawa". Ang resulta ng katawan ng entity ay maaaring maikli at mataba. 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Maling-diretso na kahilingan: Ang kahilingan ay direktado sa isang server na hindi kayang magbigay ng tugon. Maaaring ipadala ito ng isang server na hindi nakonfigurado upang magbigay ng tugon para sa kumbinasyon ng scheme at awtoridad na kasama sa URI ng kahilingan. 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Walang maiproseso na entity: Ang kahilingan ay naka-format nang tama pero hindi maiproseso sa kasalukuyang form. Ginagamit madalas kapag ang tinukoy na mga parameter ay hindi pumasa sa mga error sa validation. 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Nakasilong: Ang hiniling na resource ay natagpuan pero naka-lock at hindi mabibigay. 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Nabigong ang dependency: Nabigo ang kahilingan sa kasalukuyan dahil sa pagkabigo ng isang nakaraang kahilingan. 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Kailangan ng pag-upgrade: Ang client dapat mag-ulit ng kahilingan gamit ang isang na-upgrade na protokol gaya ng TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Kinakailangan ng precondition: Kinakailangan ng origin server na ang kahilingan ay may kondisyon. 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Maraming mga kahilingan: Ang user ay nagpadala ng masyadong maraming kahilingan sa isang naibigay na oras ("rate limiting"). 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Ang mga field ng header ng kahilingan ay masyadong malaki: Hindi gustong pangasiwaan ng server ang kahilingan dahil ang mga field ng header nito ay masyadong malaki. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Login Timeout (Microsoft): isang extension ng Microsoft. Nagpapahiwatig na ang iyong sesyon ay nag-expire. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Walang tugon (Nginx): Ginamit sa mga log ng Nginx upang ipahiwatig na ang server ay hindi nagbalik ng anumang impormasyon sa client at isinara ang koneksyon (nakatutulong bilang hadlang para sa malware sa pwedeng paggamit ng mga protokolong pang-transfer ng hypertext). 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry With (Microsoft): isang pagpapalawig ng Microsoft. Ang kahilingan ay dapat na iretry pagkatapos gawin ang naaangkop na aksyon. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Nagtigil dahil sa Windows Parental Controls (Microsoft): isang extension ng Microsoft. Ang error na ito ay ibinibigay kapag ang Windows Parental Controls ay naka-on at nagpigil sa pag-access sa tinukoy na webpage. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Ginagamit sa Exchange ActiveSync kung may mas epektibong server na magagamit o kung hindi ma-access ng server ang mailbox ng mga user.
   * Dahil sa mga kadahilanan sa batas hindi maaaring gamitin: Ang server ay hindi makapag-operate dahil sa mga kahilingan sa batas. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * "Request Header Too Large (Nginx): Ang internal code ng Nginx, na katulad ng 431 pero ito ay ipinalabas mas maaga sa bersyon 0.9.4 (noong Enero 21, 2011)." 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Cert Error (Nginx): Kodigo panloob sa Nginx na ginagamit kapag may error sa SSL client certificate upang makilala ito mula sa 4XX sa isang log at redirection ng error page. 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * Walang Sertipiko (Nginx): Kode internal ng Nginx na ginagamit kapag ang client ay hindi nagbigay ng sertipiko upang makilala ito mula sa 4XX sa isang log at isang redirection ng pahinang error. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP papunta sa HTTPS (Nginx): Code internal ng Nginx para sa mga plain HTTP requests na ipadala sa HTTPS port upang makilala ito mula sa 4XX sa isang log at sa redirection ng error page. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Expired at.Invalid na token (Esri): Inihatag sang ArcGIS para sa Server. Ang code 498 nagpakahulag sang expired ukon diin valid na token. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token kinakailangan (Esri): Inibalik ng ArcGIS para sa Server. Ang code 499 ay nagpapahiwatig na kinakailangan ang token (kung walang inihain na token). 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Internal server error: Isang pangkalahatang katayuan para sa isang error sa server mismo. 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Hindi na ipinatupad: Ang server ay hindi makasagot sa kahilingan. Karaniwan, ito ay nangangahulugan na maaaring suportahan ng server ang kahilingan sa hinaharap - kung hindi man, maaaring mas naaangkop ang 4xx status. 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Malditong gateway: Ang server ay gumaganap bilang isang proxy at hindi natanggap ang isang katanggap-tanggap na tugon mula sa upstream server. 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Walang magagamit na serbisyo: Ang server ay naka-off at hindi tumatanggap ng mga kahilingan. 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout ng Gateway: Ang server ay gumaganap bilang isang proxy at hindi nakatanggap ng sagot mula sa upstream server. 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP bersyon na hindi suportado: Ang server ay hindi sumusuporta sa bersyon ng HTTP protocol na tinukoy sa kahilingan. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Ang mga variant din ay nag-negotiate: Ang transparent na content negotiation para sa request ay nagreresulta sa circular reference. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Hindi sapat na imbentaryo: Ang user o ang server ay walang sapat na imbentaryong quota upang matupad ang kahilingan. 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Natuklasan ang loop: Ang server ay natuklasan ang isang walang katapusang loop sa kahilingan. 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Bandwidth Limit Exceeded (Apache bw/limited extension): Ang status code na ito ay hindi tinukoy sa anumang RFCs. Ang paggamit nito ay hindi alam. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Hindi ginawang palawigin: Kailangan pang palawigin ang kahilingan upang maisakatuparan ito. 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Kinakailangan ng pagpapatotoo sa network: Ang kliyente ay dapat magpapatotoo sa network bago magpadala ng mga kahilingan. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Unknown Error (Microsoft / CloudFlare): Ang status code na ito ay hindi tinukoy sa sinuman RFC at ibinigay ng ilang mga serbisyo, halimbawa ang Microsoft Azure at mga server ng CloudFlare: "Ang 520 error ay talaga namang isang 'catch-all' response kapag ang origin server ay nagbalik ng isang hindi inaasahang tugon o isang hindi maipaliwanag / hindi pinahintulutan (violation ng protocol o walang tugon)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Ang orihinal na server ay tumanggi sa koneksyon mula sa CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Connection Timed Out (CloudFlare): Hindi kayang makipag-negotiate ng TCP handshake ng CloudFlare sa origin server. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): Hindi maaabot ng CloudFlare ang origin server; halimbawa, kung mali ang mga DNS records para sa origin server. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Nagkaroon ng timeout (CloudFlare): Nakatugma ang CloudFlare sa isang TCP connection sa origin server, ngunit hindi natanggap ang tamang HTTP response sa tamang oras. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): Hindi makipagtulungan ang CloudFlare sa SSL/TLS handshake sa origin server. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Invalid SSL Certificate (CloudFlare): Hindi makapag-validate ng SSL/TLS certificate na iniharap ng origin server ang CloudFlare. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Error sa Railgun (CloudFlare): Ang kahilingan ay nag-expire o nabigo pagkatapos na maitatag ang koneksyon ng WAN. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Patuloy: Ang server ay nakatanggap na ng mga header ng request, at ang client ay dapat magpatuloy na magpadala ng katawan ng request. 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Pagpalit ng protocol: Sinabi ng tagapaghingi na palitan ng server ang protocol at kinilala ng server na gagawin ito. 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Pagproseso: Ang server ay natanggap at nagpoproseso ang mga kahilingan, ngunit wala pang available na tugon. 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Ang standard na tugon para sa mga matagumpay na mga kahilingan sa HTTP. 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Nilikha: Ang kahilingan ay natupad at isang bagong mapagkukunan ay naitatag. 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Katanggap-tanggap: Ang kahilingan ay tinanggap na ngunit hindi pa naiproseso. Ang kodigong ito ay hindi nangangako na ang kahilingan ay malulusawing maayos. 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Hindi awtoritatibong impormasyon: HTTP 1.1. Ang server ay matagumpay na naiproseso ang kahilingan ngunit nagbabalik ng impormasyon mula sa ibang pinagmulan. 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Walang nilalaman: Tinanggap ng server ang kahilingan ngunit hindi nagbabalik ng anumang nilalaman. Kadalasan ginagamit ito bilang tugon sa kahilingan na DELETE. 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * I-reset ang nilalaman: Katulad ng 204 na walang nilalaman na tugon, ngunit ang tugong ito ay nangangailangan na i-reset ng requester ang view ng dokumento. 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Bahagi ng nilalaman: Ang server ay naghahatid lamang ng isang bahagi ng nilalaman, gaya ng hiniling ng client sa pamamagitan ng isang range header. 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Ang katawan ng mensahe na sumusunod ay isang mensahe sa XML at maaaring maglaman ng maraming mga code ng tugon, depende sa kung gaano karaming mga sub-request ang ginawa. 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Naulat na: Ang mga miyembro ng DAV binding ay na-enumerate na sa nakaraang sagot sa request na ito, at hindi na kasama muli. 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM ginamit: Ang server ay nakumpleto ang GET request para sa resource, at ang response ay isang representasyon ng resulta ng isa o higit pang mga instance-manipulations na inilapat sa kasalukuyang instance. 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Maraming mga pagpipilian: Mayroong maraming mga opsyon na maaaring sundin ng client. 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Naglipat na permanente: Ang resource ay inilipat na at ang lahat ng mga susunod na request ay dapat sumangguni sa bagong URI nito. 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Natagpuan: Ang specification ng HTTP 1.0 ay inilarawan ang kalagayan na ito bilang "Moved Temporarily", ngunit ang mga popular na browser ay sumasagot sa kalagayan na ito na katulad ng pag-uugali na inilaan para sa 303. Ang resource ay maaaring makuha sa pamamagitan ng pagtukoy sa URI na ibinalik. 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Tingnan ang iba: Ang mapagkukunan ay maaaring makuha sa pamamagitan ng pagsunod sa iba pang URI gamit ang GET method. Kapag natanggap bilang tugon sa POST, PUT, o DELETE, karaniwang maaaring ipagpalagay na ang server ay nagsagawa nang matagumpay ng kahilingan at naglalayong ipadala ang client sa isang endpoint na may impormasyon. 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Hindi binago: Mula pa noong bersyon na tinukoy sa mga header ng If-Modified-Since o If-Match, ang resource ay hindi binago. Hindi mababalik ang resource sa katawan ng tugon. 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Gumamit ng proxy: HTTP 1.1. Ang mapagkukunan ay maaaring ma-access lamang sa pamamagitan ng isang proxy at ang address ay ibinigay sa pagtugon. 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * Switch proxy: In HTTP 1.1, ito ay deprecated. Ginamit upang sabihin na ang mga sumusunod na mga kahilingan ay dapat ipadala gamit ang tinukoy na proxy. 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Temporary redirect: HTTP 1.1. Ang kahilingan ay dapat na paulit-ulit gamit ang URI na ibinigay sa tugon, ngunit ang mga hinaharap na kahilingan ay dapat pa ring tawagin ang orihinal na URI. 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Ang code na ito ay ginagamit sa Resumable HTTP Requests Proposal upang mabalik ang mga aborted PUT o POST requests.
   * Permanent Redirect: Ang mga kahilingan at lahat ng mga hinaharap na kahilingan ay dapat muling ipadala gamit ang URI na ibinigay sa response. 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Maling pangangailangan: Ang pangangailangan ay hindi masasakatuparan dahil sa hindi wastong syntax ng pangangailangan. 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Walang awtorisasyon: Ang nagmumungkahi ay hindi awtorisado upang ma-access ang mapagkukunan. Katulad nito ang 403 ngunit ginagamit sa mga kaso kung saan inaasahan ang pagpapatunay ng pagkakakilanlan ngunit nabigo o hindi naibigay. 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Kailangan ng bayad: Inireserba para sa hinaharap na paggamit. Ang ilang mga serbisyo sa web ay gumagamit nito bilang indikasyon na ang kliyente ay nagpadala ng labis na bilang ng mga kahilingan. 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Prohibido: Ang kahilingan ay naformat nang tama pero ang server ay tumangging ibigay ang hiniling na mapagkukunan. Hindi katulad ng 401, ang pagpapatunay ng pagkakakilanlan ay hindi magpapabago sa tugon ng server. 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Hindi natagpuan: Ang mapagkukunan ay hindi matagpuan. Ginagamit ito kadalasang bilang isang pangkalahatang paraan para sa lahat ng hindi wastong mga URI na hiniling sa server. 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metodo di hindi payag: Ang resource ay hiniling gamit ang isang metodo na hindi payag. Halimbawa, ang paghingi ng resource gamit ang POST na metodo kapag ang resource ay suportado lamang ang GET na metodo. 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Hindi tanggap: Ang mapagkukunan ay wasto, ngunit hindi maaaring ibigay sa isang format na tinukoy sa mga Accept headers sa kahilingan. 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Kinakailangan ang pagpapatotoo ng proxy: Bago matupad ang mga kahilingan, kinakailangan ang pagpapatotoo sa proxy. 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Request timeout: Ang server ay nag-expire sa paghihintay para sa isang kahilingan mula sa client. Pinahintulutan ang client na muling magpadala ng kahilingan. 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Kontrago: Ang kahilingan ay hindi maipatupad dahil sa kontrago sa mga pamamaraan ng kahilingan. 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Nawala: Ang mapagkukunan ay hindi na magagamit sa hiniling na URI at walang pagpapadala ng pangalawang direksyon. 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Kailangan sa haba: Ang kahilingan ay hindi tinukoy ang haba ng nilalaman nito gaya ng kinakailangan ng mapagkukunan. 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Naulit: Ang server ay hindi nakakatugon sa isa sa mga precondition na tinukoy ng client. 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Hinihiling na entity ay masyadong malaki: Ang hinihiling ay mas malaki kaysa sa kaya pang iproseso ng server. 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Hiling sa URI masyadong mahaba: Ang URI na ibinigay sa hiling ay masyadong mahaba para maiproseso ng server. Karaniwang ginagamit ito kapag masyadong maraming data ang nakodigo sa URI ng isang GET hiling at dapat gamitin ang POST hiling sa halip. 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Hindi suportadong uri ng midya: Ang data na ibinigay ng client ay may uri ng midya na hindi sinusuportahan ng server. 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Hinihiling na saklaw ay hindi matugunan: Ang kliyente ay humiling para sa isang bahagi ng mapagkukunan ngunit ang server ay hindi maaaring magbigay ng bahaging iyon. 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Nagkabigo ang inaasahan: Ang server ay hindi makakatugon sa mga kinakailangan ng field ng Expect request-header. 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * Ako ang isang kawa: Anuman ang pagtatangka na magluto ng kape gamit ang isang kawa ay dapat magresulta sa error code na "418 Ako ang isang kawa". Ang resulta ng katawan ng entity ay maaaring maikli at mataba. 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Maling-diretso na kahilingan: Ang kahilingan ay direktado sa isang server na hindi kayang magbigay ng tugon. Maaaring ipadala ito ng isang server na hindi nakonfigurado upang magbigay ng tugon para sa kumbinasyon ng scheme at awtoridad na kasama sa URI ng kahilingan. 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Walang maiproseso na entity: Ang kahilingan ay naka-format nang tama pero hindi maiproseso sa kasalukuyang form. Ginagamit madalas kapag ang tinukoy na mga parameter ay hindi pumasa sa mga error sa validation. 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Nakasilong: Ang hiniling na resource ay natagpuan pero naka-lock at hindi mabibigay. 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Nabigong ang dependency: Nabigo ang kahilingan sa kasalukuyan dahil sa pagkabigo ng isang nakaraang kahilingan. 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Kailangan ng pag-upgrade: Ang client dapat mag-ulit ng kahilingan gamit ang isang na-upgrade na protokol gaya ng TLS 1.0. 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Kinakailangan ng precondition: Kinakailangan ng origin server na ang kahilingan ay may kondisyon. 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Maraming mga kahilingan: Ang user ay nagpadala ng masyadong maraming kahilingan sa isang naibigay na oras ("rate limiting"). 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Ang mga field ng header ng kahilingan ay masyadong malaki: Hindi gustong pangasiwaan ng server ang kahilingan dahil ang mga field ng header nito ay masyadong malaki. 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * Login Timeout (Microsoft): isang extension ng Microsoft. Nagpapahiwatig na ang iyong sesyon ay nag-expire. 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * Walang tugon (Nginx): Ginamit sa mga log ng Nginx upang ipahiwatig na ang server ay hindi nagbalik ng anumang impormasyon sa client at isinara ang koneksyon (nakatutulong bilang hadlang para sa malware sa pwedeng paggamit ng mga protokolong pang-transfer ng hypertext). 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * Retry With (Microsoft): isang pagpapalawig ng Microsoft. Ang kahilingan ay dapat na iretry pagkatapos gawin ang naaangkop na aksyon. 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * Nagtigil dahil sa Windows Parental Controls (Microsoft): isang extension ng Microsoft. Ang error na ito ay ibinibigay kapag ang Windows Parental Controls ay naka-on at nagpigil sa pag-access sa tinukoy na webpage. 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Ginagamit sa Exchange ActiveSync kung may mas epektibong server na magagamit o kung hindi ma-access ng server ang mailbox ng mga user.
   * Dahil sa mga kadahilanan sa batas hindi maaaring gamitin: Ang server ay hindi makapag-operate dahil sa mga kahilingan sa batas. 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * "Request Header Too Large (Nginx): Ang internal code ng Nginx, na katulad ng 431 pero ito ay ipinalabas mas maaga sa bersyon 0.9.4 (noong Enero 21, 2011)." 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * Cert Error (Nginx): Kodigo panloob sa Nginx na ginagamit kapag may error sa SSL client certificate upang makilala ito mula sa 4XX sa isang log at redirection ng error page. 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * Walang Sertipiko (Nginx): Kode internal ng Nginx na ginagamit kapag ang client ay hindi nagbigay ng sertipiko upang makilala ito mula sa 4XX sa isang log at isang redirection ng pahinang error. 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP papunta sa HTTPS (Nginx): Code internal ng Nginx para sa mga plain HTTP requests na ipadala sa HTTPS port upang makilala ito mula sa 4XX sa isang log at sa redirection ng error page. 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * Expired at.Invalid na token (Esri): Inihatag sang ArcGIS para sa Server. Ang code 498 nagpakahulag sang expired ukon diin valid na token. 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * Token kinakailangan (Esri): Inibalik ng ArcGIS para sa Server. Ang code 499 ay nagpapahiwatig na kinakailangan ang token (kung walang inihain na token). 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Internal server error: Isang pangkalahatang katayuan para sa isang error sa server mismo. 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Hindi na ipinatupad: Ang server ay hindi makasagot sa kahilingan. Karaniwan, ito ay nangangahulugan na maaaring suportahan ng server ang kahilingan sa hinaharap - kung hindi man, maaaring mas naaangkop ang 4xx status. 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Malditong gateway: Ang server ay gumaganap bilang isang proxy at hindi natanggap ang isang katanggap-tanggap na tugon mula sa upstream server. 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Walang magagamit na serbisyo: Ang server ay naka-off at hindi tumatanggap ng mga kahilingan. 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout ng Gateway: Ang server ay gumaganap bilang isang proxy at hindi nakatanggap ng sagot mula sa upstream server. 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP bersyon na hindi suportado: Ang server ay hindi sumusuporta sa bersyon ng HTTP protocol na tinukoy sa kahilingan. 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Ang mga variant din ay nag-negotiate: Ang transparent na content negotiation para sa request ay nagreresulta sa circular reference. 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Hindi sapat na imbentaryo: Ang user o ang server ay walang sapat na imbentaryong quota upang matupad ang kahilingan. 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Natuklasan ang loop: Ang server ay natuklasan ang isang walang katapusang loop sa kahilingan. 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * Bandwidth Limit Exceeded (Apache bw/limited extension): Ang status code na ito ay hindi tinukoy sa anumang RFCs. Ang paggamit nito ay hindi alam. 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Hindi ginawang palawigin: Kailangan pang palawigin ang kahilingan upang maisakatuparan ito. 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Kinakailangan ng pagpapatotoo sa network: Ang kliyente ay dapat magpapatotoo sa network bago magpadala ng mga kahilingan. 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * Unknown Error (Microsoft / CloudFlare): Ang status code na ito ay hindi tinukoy sa sinuman RFC at ibinigay ng ilang mga serbisyo, halimbawa ang Microsoft Azure at mga server ng CloudFlare: "Ang 520 error ay talaga namang isang 'catch-all' response kapag ang origin server ay nagbalik ng isang hindi inaasahang tugon o isang hindi maipaliwanag / hindi pinahintulutan (violation ng protocol o walang tugon)." 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Ang orihinal na server ay tumanggi sa koneksyon mula sa CloudFlare. 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * Connection Timed Out (CloudFlare): Hindi kayang makipag-negotiate ng TCP handshake ng CloudFlare sa origin server. 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): Hindi maaabot ng CloudFlare ang origin server; halimbawa, kung mali ang mga DNS records para sa origin server. 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * Nagkaroon ng timeout (CloudFlare): Nakatugma ang CloudFlare sa isang TCP connection sa origin server, ngunit hindi natanggap ang tamang HTTP response sa tamang oras. 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): Hindi makipagtulungan ang CloudFlare sa SSL/TLS handshake sa origin server. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * Invalid SSL Certificate (CloudFlare): Hindi makapag-validate ng SSL/TLS certificate na iniharap ng origin server ang CloudFlare. 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Error sa Railgun (CloudFlare): Ang kahilingan ay nag-expire o nabigo pagkatapos na maitatag ang koneksyon ng WAN. 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
