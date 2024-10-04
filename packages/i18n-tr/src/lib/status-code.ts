/**
 * © 2024 aiyoudiao
 *
 * Bu dosya aiyoudiao tarafından oluşturuldu ve çok fazla emek ve bilgelik içeriyor.
 *
 * Bu dosyayı özgürce kullanabilir, değiştirebilir ve dağıtırabilirsiniz, ancak lütfen bu telif hakkı bildirimini saklayın.
 *
 * Bu dosya size yardımcı olursa, lütfen bana bir yıldız verin veya beni takip edin ツ.
 *
 * İletişim:
 * - E-posta:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 *
 * Mutlu kodlama! Unutmayın, kod şiirdir ve ön uç sanattır. ツ
 */
export enum HttpStatusCode {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir. 
   */
  CONTINUE = 100,
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Protokolleri değiştirme: İstek yapan kişi sunucudan protokolleri değiştirmesini istedi ve sunucu bunu yapacağını doğruladı. 
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * İşleme: Sunucu isteği aldı ve işliyor, ancak henüz kullanılabilir bir yanıt yok. 
   */
  PROCESSING = 102,
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * Tamam: Başarılı HTTP istekleri için standart yanıt. 
   */
  OK = 200,
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Oluşturuldu: İstek yerine getirildi ve yeni bir kaynak oluşturuldu. 
   */
  CREATED = 201,
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez. 
   */
  ACCEPTED = 202,
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Yetkisiz bilgi: HTTP 1.1. Sunucu istekleri başarıyla işledi ancak bilgileri başka bir kaynaktan döndürüyor. 
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * İçerik yok: Sunucu isteği kabul etti fakat herhangi bir içerik döndürmüyor. Bu genellikle DELETE isteğine bir yanıt olarak kullanılır. 
   */
  NO_CONTENT = 204,
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * İçeriği sıfırla: 204 İçerik Yok yanıtına benzer, ancak bu yanıt, istekçiden belge görünümünü sıfırlamasını gerektirir. 
   */
  RESET_CONTENT = 205,
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Kısmi içerik: Sunucu, istemci tarafından bir Range başlığı aracılığıyla talep edildiği gibi yalnızca içeriğin bir bölümünü teslim eder. 
   */
  PARTIAL_CONTENT = 206,
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: İzleyen mesaj gövdesi bir XML mesajıdır ve kaç tane alt istek yapıldığına bağlı olarak bir sayıda ayrı yanıt kodu içerebilir. 
   */
  MULTI_STATUS = 207,
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Zaten rapor edildi: DAV bağlantısının üyeleri bu isteğin önceki yanıtında zaten listelenmişti ve tekrar dahil edilmiyor. 
   */
  ALREADY_REPORTED = 208,
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM kullanıldı: Sunucu kaynağa bir GET isteği yerine getirdi ve yanıt, mevcut örneğe bir veya daha fazla örnek işlem uygulanmasının sonucunun bir temsilidir. 
   */
  IM_USED = 226,
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Çoklu seçenekler: Müşteri birden fazla seçenekten birini izleyebilir. 
   */
  MULTIPLE_CHOICES = 300,
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Kalıcı olarak taşındı: Kaynak taşınmıştır ve tüm sonraki istekler onun yeni URI'sine başvurmalıdır. 
   */
  MOVED_PERMANENTLY = 301,
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Bulundu: HTTP 1.0 spesifikasyonu bu durumunu "Geçici Olarak Taşındı" olarak tanımladı, fakat popüler tarayıcılar bu duruma 303 için öngörülen davranışa benzer şekilde yanıt verir. Kaynak, döndürülen URI'ye başvurarak elde edilebilir. 
   */
  FOUND = 302,
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Diğerlerini gör: Kaynağa.GET yöntemini kullanarak başka URI'leri takip ederek erişilebilir. POST, PUT veya DELETE isteğine karşılık alındığında, genellikle sunucunun isteği başarılı bir şekilde işlediği ve istemciyi bilgilendirici bir uç noktaya yönlendirdiği varsayılabilir. 
   */
  SEE_OTHER = 303,
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Değiştirilmemiş: Kaynağın, If-Modified-Since veya If-Match başlıklarında belirtilen sürümden bu yana değiştirilmemiştir. Kaynak yanıt gövdesinde döndürülmeyecektir. 
   */
  NOT_MODIFIED = 304,
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Proxy kullanımı: HTTP 1.1. Kaynak yalnızca bir proxy üzerinden erişilebilir ve adres yanıtda sağlanır. 
   */
  USE_PROXY = 305,
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Proxy değiştirme: HTTP 1.1'de kullanım dışı bırakıldı. Daha önceki isteklerin belirtilen proxy kullanılarak gönderilmesi gerektiği anlamına geliyordu. 
   */
  SWITCH_PROXY = 306,
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Geçici yönlendirme: HTTP 1.1. İstek, yanıtta sağlanan URI ile tekrarlanmalıdır, fakat gelecekteki istekler yine de orijinal URI'yi çağırmalıdır. 
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Devam Edilemeyen Özgeçmiş (Google): Bu kod, Devam Edilebilir HTTP İstekleri Teklifinde kesilen PUT veya POST isteklerini devam ettirmek için kullanılır. Kalıcı Yönlendirme: İstek ve tüm gelecekteki istekler, yanıtta sağlanan URI kullanılarak yeniden gönderilmelidir. 
   */
  PERMANENT_REDIRECT = 308,
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Kötü istek: İstek hiper metin iletişim protokolü bağlamında, istekteki yanlış sözdizimi nedeniyle karşılanamadı. 
   */
  BAD_REQUEST = 400,
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Yetkisiz: İstek yapan kişi kaynağa erişim için yetkilendirilmemiştir. Bu 403'e benzer fakat kimlik doğrulama beklenirken başarısız olmuş ya da sağlanmamış durumlarda kullanılır. 
   */
  UNAUTHORIZED = 401,
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Ödeme gereklidir: Gelecekte kullanılmak üzere ayrılmıştır. Bazı web hizmetleri, bunun müşterinin aşırı sayıda istek gönderdiğini göstergesi olarak kullanır. 
   */
  PAYMENT_REQUIRED = 402,
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Yasaklandı: İstek doğru biçimlendirilmişti, ancak sunucu istenen kaynağı sağlamayı reddetti. 401'den farklı olarak kimlik doğrulama sunucu yanıtını değiştirmez. 
   */
  FORBIDDEN = 403,
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Bulunamadı: İstenilen kaynak bulunamadı. Bu genellikle sunucuya istenen tüm geçersiz URI'ler için bir toplama ifadesi olarak kullanılır. 
   */
  NOT_FOUND = 404,
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Yöntem izin verilmedi: Kaynak izin verilmeyen bir yöntem kullanılarak talep edildi. Örneğin, kaynağa yalnızca GET yöntemini desteklediği halde POST yöntemiyle talep edilmesi. 
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Kabul edilmez: Kaynak geçerlidir, fakat istekteki Accept başlıklarında belirtilen biçimde sağlanamaz. 
   */
  NOT_ACCEPTABLE = 406,
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy kimlik doğrulaması gerekli: İsteklerin karşılanmadan önce proxy ile kimlik doğrulaması gereklidir. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * İstek zaman aşımı: Sunucu, istemci tarafından bir istek beklerken zaman aşımına uğradı. İstemci istekleri tekrar göndermeye izin verilir. 
   */
  REQUEST_TIMEOUT = 408,
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Çatışma: İstek parametrelerindeki bir çatışma nedeniyle istek tamamlanamaz. 
   */
  CONFLICT = 409,
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Kayboldu: İstenen URI'de kaynak artık mevcut değil ve yönlendirme verilmeyecek. 
   */
  GONE = 410,
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Uzunluk gerekli: Kaynak tarafından gerektiği gibi isteğin içeriğinin uzunluğu belirtilmedi. 
   */
  LENGTH_REQUIRED = 411,
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Ön koşul başarısız oldu: Sunucu, müşterinin belirttiği ön koşullardan birini karşılamıyor. 
   */
  PRECONDITION_FAILED = 412,
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * İstek varlığı çok büyük: İstek içeriği, sunucunun işleyebileceğinden daha fazladır. 
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * İstek URI'si çok uzun: İstekte sağlanan URI sunucunun işlem yapabilmesi için çok uzun. Genellikle GET isteğinin URI'sine çok fazla veri kodlandığında bu durum kullanılır ve bunun yerine POST isteği kullanılmalıdır. 
   */
  URI_TOO_LONG = 414,
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Desteklenmeyen medya türü: İstemci tarafından sunulan verilerin medya türü sunucunun desteklemediği türdür. 
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * İstenilen aralık karşılanamıyor: İstemci kaynağın bir kısmını istemiş fakat sunucu bu kısmı sağlayamıyor. 
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Beklenti başarısız oldu: Sunucu, Expect istek başlık alanının gereksinimlerini karşılayamıyor. 
   */
  EXPECTATION_FAILED = 417,
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Ben bir çaydanlık: Herhangi bir çaydanlıkla kahve yapma girişimi "418 Ben bir çaydanlık" hata koduyla sonuçlanmalıdır. Oluşan varlık vücut kısa ve topaklı olabilir. 
   */
  I_M_A_TEAPOT = 418,
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Yanlış Yönlendirilmiş İstek: İstek, bir yanıt vermeye muktedir olmayan bir sunucuya yönlendirildi. Bu durum, istek URI'sinde yer alan şema ve yetki kombinasyonlarına karşılık vermek üzere yapılandırılmamış bir sunucu tarafından gönderilebilir. 
   */
  MISDIRECTED_REQUEST = 421,
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * İşlenemeyen varlık: İstek doğru biçimlendirilmiştir, ancak mevcut formda işlenemez. Genellikle belirtilen parametreler doğrulama hatalarını geçemediğinde kullanılır. 
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Kilitli: İstenen kaynak bulundu, ancak kilitlendiği için erişilemez. 
   */
  LOCKED = 423,
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Bağımlılık başarısız oldu: Önceki bir isteğin başarısız olması nedeniyle mevcut istek de başarısız oldu. 
   */
  FAILED_DEPENDENCY = 424,
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Güncelleme gereklidir: İstemci, TLS 1.0 gibi yükseltilmiş bir protokol kullanarak isteğini tekrar göndermelidir. 
   */
  UPGRADE_REQUIRED = 426,
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Önkoşul gerekli: Kaynak sunucu isteklerin koşullu olmasını gerektirir. 
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Çok fazla istek: Kullanıcı belirli bir süre içinde çok fazla istek gönderdi ("hız sınırlaması"). 
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * İstek başlık alanları çok büyük: Sunucu başlık alanları çok büyük olduğu için istek işlemeyi reddediyor. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Giriş Süresi Aşıldı (Microsoft): Bir Microsoft uzantısı. Kullanıcı oturumunuzun süresi dolduğunu gösterir. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 440,
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * "Hiç Yanıt Yok (Nginx): Nginx günlüklerinde kullanılan bir durum kodu. Sunucu, istemciye hiçbir bilgi döndürmez ve bağlantıyı kapatır (zararlı yazılımlar için caydırıcı bir unsur olarak kullanışlıdır)." 
   */
  NO_RESPONSE_NGINX = 444,
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Yeniden Deneyin (Microsoft): Bir Microsoft uzantısıdır. İstek uygun işlemi gerçekleştirildikten sonra tekrar gönderilmelidir. 
   */
  RETRY_WITH_MICROSOFT = 449,
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Windows Ebeveyn Kontrolleri tarafından engellendi (Microsoft): Microsoft uzantısı. Bu hata, Windows Ebeveyn Kontrolleri açıkken ve verilen web sayfasına erişimi engellediğinde ortaya çıkar. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 450,
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Exchange ActiveSync'te ya daha verimli bir sunucu kullanılacaksa ya da sunucu kullanıcıların posta kutusuna erişemiyorsa kullanılır.
   * Yasal nedenlerle kullanılamaz: Sunucu yasal kısıtlama talebi nedeniyle çalıştıramaz. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * İstek Başlığı Çok Büyük (Nginx): Nginx dahili kodu 431'e benzer fakat 0.9.4 sürümünde (21 Ocak 2011'de) daha önce tanıtıldı. 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 494,
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Sertifika Hatası (Nginx): SSL istemci sertifika hatası meydana geldiğinde Nginx'in bir kayıt ve hata sayfası yönlendirmesinde 4XX'den ayırt etmek için kullandığı dahili kod. 
   */
  CERT_ERROR_NGINX = 495,
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Nginx'in dahili kodu, istemci sertifikayı sağlamadığında kullanılır, bu da bir günlükteki 4XX'ten ayırmak ve bir hata sayfasına yönlendirmek için kullanılır. 
   */
  NO_CERT_NGINX = 496,
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP'den HTTPS'ye (Nginx): Nginx dahili kodu, HTTPS portuna gönderilen düz HTTP istekleri için kullanılır, bir günlükteki 4XX ile ayırt edilmesi ve bir hata sayfası yönlendirmesi yapılması amacıyla. 
   */
  HTTP_TO_HTTPS_NGINX = 497,
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token süresi doldu/geçersiz (Esri): ArcGIS for Server tarafından döndürüldü. 498 kodu bir tokenin süresi dolmuş veya geçersiz olduğunu gösterir. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 498,
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token gereklidir (Esri): ArcGIS for Server tarafından döndürüldü. 499 kodu bir token gerektiğini gösterir (eğer bir token sunulmamışsa). 
   */
  TOKEN_REQUIRED_ESRI = 499,
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Sunucu iç hatası: Sunucunun kendisindeki genel bir hata durumu. 
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Gerçekleştirilmedi: Sunucu istek yanıtlayamaz. Bu genellikle sunucunun isteği gelecekte karşılayabileceğini ima eder; aksi takdirde 4xx durum kodu daha uygun olabilir. 
   */
  NOT_IMPLEMENTED = 501,
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Kötü ağ geçidi: Sunucu bir vekil olarak hareket ederken, yukarı akış sunucusundan kabul edilebilir bir yanıt almadı. 
   */
  BAD_GATEWAY = 502,
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servis kullanılamıyor: Sunucu kapalıdır ve istekleri kabul etmiyor. 
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout: Sunucu bir vekil olarak çalışıyor ve yukarı akış sunucusundan bir yanıt alamadı. 
   */
  GATEWAY_TIMEOUT = 504,
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Desteklenmeyen HTTP sürümü: Sunucu, istekte belirtilen HTTP protokol sürümünü desteklemiyor. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant da görüşmeler yapıyor: İstek için şeffaf içerik görüşmesi döngüsel bir referans oluşturuyor. 
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Yetersiz depolama: Kullanıcı veya sunucu istekleri karşılayabilmek için yeterli depolama kotasına sahip değildir. 
   */
  INSUFFICIENT_STORAGE = 507,
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Döngü tespit edildi: Sunucu isteğinde sonsuz bir döngü tespit etti. 
   */
  LOOP_DETECTED = 508,
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Bant Genişliği Sınırı Aşıldı (Apache bw/limited uzantısı): Bu durum kodu herhangi bir RFC'de belirtilmemiştir. Kullanımı bilinmemektedir. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Not genişletildi: Talebin yerine getirilmesi için talebe daha fazla genişleme yapılması gerekmektedir. 
   */
  NOT_EXTENDED = 510,
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Ağ kimlik doğrulaması gereklidir: İstemci, istek göndermeden önce ağ ile kimlik doğrulaması yapmalıdır. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Bilinmeyen Hata (Microsoft / CloudFlare): Bu durum kodu herhangi bir RFC'de belirtilmemiş ve bazı hizmetler tarafından döndürülür, örneğin Microsoft Azure ve CloudFlare sunucuları: "520 hatası temelde kaynak sunucunun beklenmeyen bir şey döndürdüğü veya tolere edilmeyen/yorumlanamayan (protokol ihlali veya boş yanıt) bir "genel kapsayıcı" yanıtıdır." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 520,
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Sunucusu Çalışmıyor (CloudFlare): Orijinal sunucu CloudFlare'den gelen bağlantıyı reddetti. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 521,
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Bağlantı Zaman Aşımı (CloudFlare): CloudFlare, kaynak sunucu ile bir TCP el sıkışması yapamadı. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 522,
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Kaynak Ulaşılamaz (CloudFlare): CloudFlare kaynak sunucuya ulaşamadı; örneğin, kaynak sunucunun DNS kayıtları yanlışsa. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 523,
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Bir Süre Geçti (CloudFlare): CloudFlare kaynak sunucuya bir TCP bağlantısı oluşturabildi, ancak zamanında bir HTTP yanıtı alamadı. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 524,
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): CloudFlare, kaynak sunucusu ile bir SSL/TLS el sıkışması yapamadı. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 525,
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Geçersiz SSL Sertifikası (CloudFlare): CloudFlare, kaynak sunucunun sunduğu SSL/TLS sertifikasını doğrulayamadı. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 526,
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun Hatası (CloudFlare): WAN bağlantısı kurulduktan sonra istek zaman aşımına uğradı veya başarısız oldu. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 527
}

export enum HttpStatusCodeByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir. 
   */
  h100 = 100,
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Protokolleri değiştirme: İstek yapan kişi sunucudan protokolleri değiştirmesini istedi ve sunucu bunu yapacağını doğruladı. 
   */
  h101 = 101,
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * İşleme: Sunucu isteği aldı ve işliyor, ancak henüz kullanılabilir bir yanıt yok. 
   */
  h102 = 102,
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * Tamam: Başarılı HTTP istekleri için standart yanıt. 
   */
  h200 = 200,
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Oluşturuldu: İstek yerine getirildi ve yeni bir kaynak oluşturuldu. 
   */
  h201 = 201,
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez. 
   */
  h202 = 202,
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Yetkisiz bilgi: HTTP 1.1. Sunucu istekleri başarıyla işledi ancak bilgileri başka bir kaynaktan döndürüyor. 
   */
  h203 = 203,
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * İçerik yok: Sunucu isteği kabul etti fakat herhangi bir içerik döndürmüyor. Bu genellikle DELETE isteğine bir yanıt olarak kullanılır. 
   */
  h204 = 204,
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * İçeriği sıfırla: 204 İçerik Yok yanıtına benzer, ancak bu yanıt, istekçiden belge görünümünü sıfırlamasını gerektirir. 
   */
  h205 = 205,
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Kısmi içerik: Sunucu, istemci tarafından bir Range başlığı aracılığıyla talep edildiği gibi yalnızca içeriğin bir bölümünü teslim eder. 
   */
  h206 = 206,
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: İzleyen mesaj gövdesi bir XML mesajıdır ve kaç tane alt istek yapıldığına bağlı olarak bir sayıda ayrı yanıt kodu içerebilir. 
   */
  h207 = 207,
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Zaten rapor edildi: DAV bağlantısının üyeleri bu isteğin önceki yanıtında zaten listelenmişti ve tekrar dahil edilmiyor. 
   */
  h208 = 208,
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM kullanıldı: Sunucu kaynağa bir GET isteği yerine getirdi ve yanıt, mevcut örneğe bir veya daha fazla örnek işlem uygulanmasının sonucunun bir temsilidir. 
   */
  h226 = 226,
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Çoklu seçenekler: Müşteri birden fazla seçenekten birini izleyebilir. 
   */
  h300 = 300,
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Kalıcı olarak taşındı: Kaynak taşınmıştır ve tüm sonraki istekler onun yeni URI'sine başvurmalıdır. 
   */
  h301 = 301,
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Bulundu: HTTP 1.0 spesifikasyonu bu durumunu "Geçici Olarak Taşındı" olarak tanımladı, fakat popüler tarayıcılar bu duruma 303 için öngörülen davranışa benzer şekilde yanıt verir. Kaynak, döndürülen URI'ye başvurarak elde edilebilir. 
   */
  h302 = 302,
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Diğerlerini gör: Kaynağa.GET yöntemini kullanarak başka URI'leri takip ederek erişilebilir. POST, PUT veya DELETE isteğine karşılık alındığında, genellikle sunucunun isteği başarılı bir şekilde işlediği ve istemciyi bilgilendirici bir uç noktaya yönlendirdiği varsayılabilir. 
   */
  h303 = 303,
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Değiştirilmemiş: Kaynağın, If-Modified-Since veya If-Match başlıklarında belirtilen sürümden bu yana değiştirilmemiştir. Kaynak yanıt gövdesinde döndürülmeyecektir. 
   */
  h304 = 304,
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Proxy kullanımı: HTTP 1.1. Kaynak yalnızca bir proxy üzerinden erişilebilir ve adres yanıtda sağlanır. 
   */
  h305 = 305,
  /**
   * h306: 
   *
   * Empty
   * Proxy değiştirme: HTTP 1.1'de kullanım dışı bırakıldı. Daha önceki isteklerin belirtilen proxy kullanılarak gönderilmesi gerektiği anlamına geliyordu. 
   */
  h306 = 306,
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Geçici yönlendirme: HTTP 1.1. İstek, yanıtta sağlanan URI ile tekrarlanmalıdır, fakat gelecekteki istekler yine de orijinal URI'yi çağırmalıdır. 
   */
  h307 = 307,
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Devam Edilemeyen Özgeçmiş (Google): Bu kod, Devam Edilebilir HTTP İstekleri Teklifinde kesilen PUT veya POST isteklerini devam ettirmek için kullanılır. Kalıcı Yönlendirme: İstek ve tüm gelecekteki istekler, yanıtta sağlanan URI kullanılarak yeniden gönderilmelidir. 
   */
  h308 = 308,
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Kötü istek: İstek hiper metin iletişim protokolü bağlamında, istekteki yanlış sözdizimi nedeniyle karşılanamadı. 
   */
  h400 = 400,
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Yetkisiz: İstek yapan kişi kaynağa erişim için yetkilendirilmemiştir. Bu 403'e benzer fakat kimlik doğrulama beklenirken başarısız olmuş ya da sağlanmamış durumlarda kullanılır. 
   */
  h401 = 401,
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Ödeme gereklidir: Gelecekte kullanılmak üzere ayrılmıştır. Bazı web hizmetleri, bunun müşterinin aşırı sayıda istek gönderdiğini göstergesi olarak kullanır. 
   */
  h402 = 402,
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Yasaklandı: İstek doğru biçimlendirilmişti, ancak sunucu istenen kaynağı sağlamayı reddetti. 401'den farklı olarak kimlik doğrulama sunucu yanıtını değiştirmez. 
   */
  h403 = 403,
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Bulunamadı: İstenilen kaynak bulunamadı. Bu genellikle sunucuya istenen tüm geçersiz URI'ler için bir toplama ifadesi olarak kullanılır. 
   */
  h404 = 404,
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Yöntem izin verilmedi: Kaynak izin verilmeyen bir yöntem kullanılarak talep edildi. Örneğin, kaynağa yalnızca GET yöntemini desteklediği halde POST yöntemiyle talep edilmesi. 
   */
  h405 = 405,
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Kabul edilmez: Kaynak geçerlidir, fakat istekteki Accept başlıklarında belirtilen biçimde sağlanamaz. 
   */
  h406 = 406,
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy kimlik doğrulaması gerekli: İsteklerin karşılanmadan önce proxy ile kimlik doğrulaması gereklidir. 
   */
  h407 = 407,
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * İstek zaman aşımı: Sunucu, istemci tarafından bir istek beklerken zaman aşımına uğradı. İstemci istekleri tekrar göndermeye izin verilir. 
   */
  h408 = 408,
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Çatışma: İstek parametrelerindeki bir çatışma nedeniyle istek tamamlanamaz. 
   */
  h409 = 409,
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Kayboldu: İstenen URI'de kaynak artık mevcut değil ve yönlendirme verilmeyecek. 
   */
  h410 = 410,
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Uzunluk gerekli: Kaynak tarafından gerektiği gibi isteğin içeriğinin uzunluğu belirtilmedi. 
   */
  h411 = 411,
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Ön koşul başarısız oldu: Sunucu, müşterinin belirttiği ön koşullardan birini karşılamıyor. 
   */
  h412 = 412,
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * İstek varlığı çok büyük: İstek içeriği, sunucunun işleyebileceğinden daha fazladır. 
   */
  h413 = 413,
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * İstek URI'si çok uzun: İstekte sağlanan URI sunucunun işlem yapabilmesi için çok uzun. Genellikle GET isteğinin URI'sine çok fazla veri kodlandığında bu durum kullanılır ve bunun yerine POST isteği kullanılmalıdır. 
   */
  h414 = 414,
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Desteklenmeyen medya türü: İstemci tarafından sunulan verilerin medya türü sunucunun desteklemediği türdür. 
   */
  h415 = 415,
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * İstenilen aralık karşılanamıyor: İstemci kaynağın bir kısmını istemiş fakat sunucu bu kısmı sağlayamıyor. 
   */
  h416 = 416,
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Beklenti başarısız oldu: Sunucu, Expect istek başlık alanının gereksinimlerini karşılayamıyor. 
   */
  h417 = 417,
  /**
   * h418: 
   *
   * Empty
   * Ben bir çaydanlık: Herhangi bir çaydanlıkla kahve yapma girişimi "418 Ben bir çaydanlık" hata koduyla sonuçlanmalıdır. Oluşan varlık vücut kısa ve topaklı olabilir. 
   */
  h418 = 418,
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Yanlış Yönlendirilmiş İstek: İstek, bir yanıt vermeye muktedir olmayan bir sunucuya yönlendirildi. Bu durum, istek URI'sinde yer alan şema ve yetki kombinasyonlarına karşılık vermek üzere yapılandırılmamış bir sunucu tarafından gönderilebilir. 
   */
  h421 = 421,
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * İşlenemeyen varlık: İstek doğru biçimlendirilmiştir, ancak mevcut formda işlenemez. Genellikle belirtilen parametreler doğrulama hatalarını geçemediğinde kullanılır. 
   */
  h422 = 422,
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Kilitli: İstenen kaynak bulundu, ancak kilitlendiği için erişilemez. 
   */
  h423 = 423,
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Bağımlılık başarısız oldu: Önceki bir isteğin başarısız olması nedeniyle mevcut istek de başarısız oldu. 
   */
  h424 = 424,
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Güncelleme gereklidir: İstemci, TLS 1.0 gibi yükseltilmiş bir protokol kullanarak isteğini tekrar göndermelidir. 
   */
  h426 = 426,
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Önkoşul gerekli: Kaynak sunucu isteklerin koşullu olmasını gerektirir. 
   */
  h428 = 428,
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Çok fazla istek: Kullanıcı belirli bir süre içinde çok fazla istek gönderdi ("hız sınırlaması"). 
   */
  h429 = 429,
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * İstek başlık alanları çok büyük: Sunucu başlık alanları çok büyük olduğu için istek işlemeyi reddediyor. 
   */
  h431 = 431,
  /**
   * h440: 
   *
   * Empty
   * Giriş Süresi Aşıldı (Microsoft): Bir Microsoft uzantısı. Kullanıcı oturumunuzun süresi dolduğunu gösterir. 
   */
  h440 = 440,
  /**
   * h444: 
   *
   * Empty
   * "Hiç Yanıt Yok (Nginx): Nginx günlüklerinde kullanılan bir durum kodu. Sunucu, istemciye hiçbir bilgi döndürmez ve bağlantıyı kapatır (zararlı yazılımlar için caydırıcı bir unsur olarak kullanışlıdır)." 
   */
  h444 = 444,
  /**
   * h449: 
   *
   * Empty
   * Yeniden Deneyin (Microsoft): Bir Microsoft uzantısıdır. İstek uygun işlemi gerçekleştirildikten sonra tekrar gönderilmelidir. 
   */
  h449 = 449,
  /**
   * h450: 
   *
   * Empty
   * Windows Ebeveyn Kontrolleri tarafından engellendi (Microsoft): Microsoft uzantısı. Bu hata, Windows Ebeveyn Kontrolleri açıkken ve verilen web sayfasına erişimi engellediğinde ortaya çıkar. 
   */
  h450 = 450,
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Exchange ActiveSync'te ya daha verimli bir sunucu kullanılacaksa ya da sunucu kullanıcıların posta kutusuna erişemiyorsa kullanılır.
   * Yasal nedenlerle kullanılamaz: Sunucu yasal kısıtlama talebi nedeniyle çalıştıramaz. 
   */
  h451 = 451,
  /**
   * h494: 
   *
   * Empty
   * İstek Başlığı Çok Büyük (Nginx): Nginx dahili kodu 431'e benzer fakat 0.9.4 sürümünde (21 Ocak 2011'de) daha önce tanıtıldı. 
   */
  h494 = 494,
  /**
   * h495: 
   *
   * Empty
   * Sertifika Hatası (Nginx): SSL istemci sertifika hatası meydana geldiğinde Nginx'in bir kayıt ve hata sayfası yönlendirmesinde 4XX'den ayırt etmek için kullandığı dahili kod. 
   */
  h495 = 495,
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Nginx'in dahili kodu, istemci sertifikayı sağlamadığında kullanılır, bu da bir günlükteki 4XX'ten ayırmak ve bir hata sayfasına yönlendirmek için kullanılır. 
   */
  h496 = 496,
  /**
   * h497: 
   *
   * Empty
   * HTTP'den HTTPS'ye (Nginx): Nginx dahili kodu, HTTPS portuna gönderilen düz HTTP istekleri için kullanılır, bir günlükteki 4XX ile ayırt edilmesi ve bir hata sayfası yönlendirmesi yapılması amacıyla. 
   */
  h497 = 497,
  /**
   * h498: 
   *
   * Empty
   * Token süresi doldu/geçersiz (Esri): ArcGIS for Server tarafından döndürüldü. 498 kodu bir tokenin süresi dolmuş veya geçersiz olduğunu gösterir. 
   */
  h498 = 498,
  /**
   * h499: 
   *
   * Empty
   * Token gereklidir (Esri): ArcGIS for Server tarafından döndürüldü. 499 kodu bir token gerektiğini gösterir (eğer bir token sunulmamışsa). 
   */
  h499 = 499,
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Sunucu iç hatası: Sunucunun kendisindeki genel bir hata durumu. 
   */
  h500 = 500,
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Gerçekleştirilmedi: Sunucu istek yanıtlayamaz. Bu genellikle sunucunun isteği gelecekte karşılayabileceğini ima eder; aksi takdirde 4xx durum kodu daha uygun olabilir. 
   */
  h501 = 501,
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Kötü ağ geçidi: Sunucu bir vekil olarak hareket ederken, yukarı akış sunucusundan kabul edilebilir bir yanıt almadı. 
   */
  h502 = 502,
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servis kullanılamıyor: Sunucu kapalıdır ve istekleri kabul etmiyor. 
   */
  h503 = 503,
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout: Sunucu bir vekil olarak çalışıyor ve yukarı akış sunucusundan bir yanıt alamadı. 
   */
  h504 = 504,
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Desteklenmeyen HTTP sürümü: Sunucu, istekte belirtilen HTTP protokol sürümünü desteklemiyor. 
   */
  h505 = 505,
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant da görüşmeler yapıyor: İstek için şeffaf içerik görüşmesi döngüsel bir referans oluşturuyor. 
   */
  h506 = 506,
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Yetersiz depolama: Kullanıcı veya sunucu istekleri karşılayabilmek için yeterli depolama kotasına sahip değildir. 
   */
  h507 = 507,
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Döngü tespit edildi: Sunucu isteğinde sonsuz bir döngü tespit etti. 
   */
  h508 = 508,
  /**
   * h509: 
   *
   * Empty
   * Bant Genişliği Sınırı Aşıldı (Apache bw/limited uzantısı): Bu durum kodu herhangi bir RFC'de belirtilmemiştir. Kullanımı bilinmemektedir. 
   */
  h509 = 509,
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Not genişletildi: Talebin yerine getirilmesi için talebe daha fazla genişleme yapılması gerekmektedir. 
   */
  h510 = 510,
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Ağ kimlik doğrulaması gereklidir: İstemci, istek göndermeden önce ağ ile kimlik doğrulaması yapmalıdır. 
   */
  h511 = 511,
  /**
   * h520: 
   *
   * Empty
   * Bilinmeyen Hata (Microsoft / CloudFlare): Bu durum kodu herhangi bir RFC'de belirtilmemiş ve bazı hizmetler tarafından döndürülür, örneğin Microsoft Azure ve CloudFlare sunucuları: "520 hatası temelde kaynak sunucunun beklenmeyen bir şey döndürdüğü veya tolere edilmeyen/yorumlanamayan (protokol ihlali veya boş yanıt) bir "genel kapsayıcı" yanıtıdır." 
   */
  h520 = 520,
  /**
   * h521: 
   *
   * Empty
   * Web Sunucusu Çalışmıyor (CloudFlare): Orijinal sunucu CloudFlare'den gelen bağlantıyı reddetti. 
   */
  h521 = 521,
  /**
   * h522: 
   *
   * Empty
   * Bağlantı Zaman Aşımı (CloudFlare): CloudFlare, kaynak sunucu ile bir TCP el sıkışması yapamadı. 
   */
  h522 = 522,
  /**
   * h523: 
   *
   * Empty
   * Kaynak Ulaşılamaz (CloudFlare): CloudFlare kaynak sunucuya ulaşamadı; örneğin, kaynak sunucunun DNS kayıtları yanlışsa. 
   */
  h523 = 523,
  /**
   * h524: 
   *
   * Empty
   * Bir Süre Geçti (CloudFlare): CloudFlare kaynak sunucuya bir TCP bağlantısı oluşturabildi, ancak zamanında bir HTTP yanıtı alamadı. 
   */
  h524 = 524,
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): CloudFlare, kaynak sunucusu ile bir SSL/TLS el sıkışması yapamadı. 
   */
  h525 = 525,
  /**
   * h526: 
   *
   * Empty
   * Geçersiz SSL Sertifikası (CloudFlare): CloudFlare, kaynak sunucunun sunduğu SSL/TLS sertifikasını doğrulayamadı. 
   */
  h526 = 526,
  /**
   * h527: 
   *
   * Empty
   * Railgun Hatası (CloudFlare): WAN bağlantısı kurulduktan sonra istek zaman aşımına uğradı veya başarısız oldu. 
   */
  h527 = 527
}
