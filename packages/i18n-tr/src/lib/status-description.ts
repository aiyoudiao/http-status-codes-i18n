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
export enum HttpStatusDescription {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir. 
   */
  CONTINUE = 'Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir. ',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Protokolleri değiştirme: İstek yapan kişi sunucudan protokolleri değiştirmesini istedi ve sunucu bunu yapacağını doğruladı. 
   */
  SWITCHING_PROTOCOLS = 'Protokolleri değiştirme: İstek yapan kişi sunucudan protokolleri değiştirmesini istedi ve sunucu bunu yapacağını doğruladı. ',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * İşleme: Sunucu isteği aldı ve işliyor, ancak henüz kullanılabilir bir yanıt yok. 
   */
  PROCESSING = 'İşleme: Sunucu isteği aldı ve işliyor, ancak henüz kullanılabilir bir yanıt yok. ',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * Tamam: Başarılı HTTP istekleri için standart yanıt. 
   */
  OK = 'Tamam: Başarılı HTTP istekleri için standart yanıt. ',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Oluşturuldu: İstek yerine getirildi ve yeni bir kaynak oluşturuldu. 
   */
  CREATED = 'Oluşturuldu: İstek yerine getirildi ve yeni bir kaynak oluşturuldu. ',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez. 
   */
  ACCEPTED = 'Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez. ',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Yetkisiz bilgi: HTTP 1.1. Sunucu istekleri başarıyla işledi ancak bilgileri başka bir kaynaktan döndürüyor. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Yetkisiz bilgi: HTTP 1.1. Sunucu istekleri başarıyla işledi ancak bilgileri başka bir kaynaktan döndürüyor. ',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * İçerik yok: Sunucu isteği kabul etti fakat herhangi bir içerik döndürmüyor. Bu genellikle DELETE isteğine bir yanıt olarak kullanılır. 
   */
  NO_CONTENT = 'İçerik yok: Sunucu isteği kabul etti fakat herhangi bir içerik döndürmüyor. Bu genellikle DELETE isteğine bir yanıt olarak kullanılır. ',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * İçeriği sıfırla: 204 İçerik Yok yanıtına benzer, ancak bu yanıt, istekçiden belge görünümünü sıfırlamasını gerektirir. 
   */
  RESET_CONTENT = 'İçeriği sıfırla: 204 İçerik Yok yanıtına benzer, ancak bu yanıt, istekçiden belge görünümünü sıfırlamasını gerektirir. ',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Kısmi içerik: Sunucu, istemci tarafından bir Range başlığı aracılığıyla talep edildiği gibi yalnızca içeriğin bir bölümünü teslim eder. 
   */
  PARTIAL_CONTENT = 'Kısmi içerik: Sunucu, istemci tarafından bir Range başlığı aracılığıyla talep edildiği gibi yalnızca içeriğin bir bölümünü teslim eder. ',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: İzleyen mesaj gövdesi bir XML mesajıdır ve kaç tane alt istek yapıldığına bağlı olarak bir sayıda ayrı yanıt kodu içerebilir. 
   */
  MULTI_STATUS = 'Multi-status: İzleyen mesaj gövdesi bir XML mesajıdır ve kaç tane alt istek yapıldığına bağlı olarak bir sayıda ayrı yanıt kodu içerebilir. ',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Zaten rapor edildi: DAV bağlantısının üyeleri bu isteğin önceki yanıtında zaten listelenmişti ve tekrar dahil edilmiyor. 
   */
  ALREADY_REPORTED = 'Zaten rapor edildi: DAV bağlantısının üyeleri bu isteğin önceki yanıtında zaten listelenmişti ve tekrar dahil edilmiyor. ',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM kullanıldı: Sunucu kaynağa bir GET isteği yerine getirdi ve yanıt, mevcut örneğe bir veya daha fazla örnek işlem uygulanmasının sonucunun bir temsilidir. 
   */
  IM_USED = 'IM kullanıldı: Sunucu kaynağa bir GET isteği yerine getirdi ve yanıt, mevcut örneğe bir veya daha fazla örnek işlem uygulanmasının sonucunun bir temsilidir. ',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Çoklu seçenekler: Müşteri birden fazla seçenekten birini izleyebilir. 
   */
  MULTIPLE_CHOICES = 'Çoklu seçenekler: Müşteri birden fazla seçenekten birini izleyebilir. ',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Kalıcı olarak taşındı: Kaynak taşınmıştır ve tüm sonraki istekler onun yeni URI'sine başvurmalıdır. 
   */
  MOVED_PERMANENTLY = 'Kalıcı olarak taşındı: Kaynak taşınmıştır ve tüm sonraki istekler onun yeni URI\'sine başvurmalıdır. ',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Bulundu: HTTP 1.0 spesifikasyonu bu durumunu "Geçici Olarak Taşındı" olarak tanımladı, fakat popüler tarayıcılar bu duruma 303 için öngörülen davranışa benzer şekilde yanıt verir. Kaynak, döndürülen URI'ye başvurarak elde edilebilir. 
   */
  FOUND = 'Bulundu: HTTP 1.0 spesifikasyonu bu durumunu "Geçici Olarak Taşındı" olarak tanımladı, fakat popüler tarayıcılar bu duruma 303 için öngörülen davranışa benzer şekilde yanıt verir. Kaynak, döndürülen URI\'ye başvurarak elde edilebilir. ',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Diğerlerini gör: Kaynağa.GET yöntemini kullanarak başka URI'leri takip ederek erişilebilir. POST, PUT veya DELETE isteğine karşılık alındığında, genellikle sunucunun isteği başarılı bir şekilde işlediği ve istemciyi bilgilendirici bir uç noktaya yönlendirdiği varsayılabilir. 
   */
  SEE_OTHER = 'Diğerlerini gör: Kaynağa.GET yöntemini kullanarak başka URI\'leri takip ederek erişilebilir. POST, PUT veya DELETE isteğine karşılık alındığında, genellikle sunucunun isteği başarılı bir şekilde işlediği ve istemciyi bilgilendirici bir uç noktaya yönlendirdiği varsayılabilir. ',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Değiştirilmemiş: Kaynağın, If-Modified-Since veya If-Match başlıklarında belirtilen sürümden bu yana değiştirilmemiştir. Kaynak yanıt gövdesinde döndürülmeyecektir. 
   */
  NOT_MODIFIED = 'Değiştirilmemiş: Kaynağın, If-Modified-Since veya If-Match başlıklarında belirtilen sürümden bu yana değiştirilmemiştir. Kaynak yanıt gövdesinde döndürülmeyecektir. ',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Proxy kullanımı: HTTP 1.1. Kaynak yalnızca bir proxy üzerinden erişilebilir ve adres yanıtda sağlanır. 
   */
  USE_PROXY = 'Proxy kullanımı: HTTP 1.1. Kaynak yalnızca bir proxy üzerinden erişilebilir ve adres yanıtda sağlanır. ',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Proxy değiştirme: HTTP 1.1'de kullanım dışı bırakıldı. Daha önceki isteklerin belirtilen proxy kullanılarak gönderilmesi gerektiği anlamına geliyordu. 
   */
  SWITCH_PROXY = 'Proxy değiştirme: HTTP 1.1\'de kullanım dışı bırakıldı. Daha önceki isteklerin belirtilen proxy kullanılarak gönderilmesi gerektiği anlamına geliyordu. ',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Geçici yönlendirme: HTTP 1.1. İstek, yanıtta sağlanan URI ile tekrarlanmalıdır, fakat gelecekteki istekler yine de orijinal URI'yi çağırmalıdır. 
   */
  TEMPORARY_REDIRECT = 'Geçici yönlendirme: HTTP 1.1. İstek, yanıtta sağlanan URI ile tekrarlanmalıdır, fakat gelecekteki istekler yine de orijinal URI\'yi çağırmalıdır. ',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Devam Edilemeyen Özgeçmiş (Google): Bu kod, Devam Edilebilir HTTP İstekleri Teklifinde kesilen PUT veya POST isteklerini devam ettirmek için kullanılır. Kalıcı Yönlendirme: İstek ve tüm gelecekteki istekler, yanıtta sağlanan URI kullanılarak yeniden gönderilmelidir. 
   */
  PERMANENT_REDIRECT = 'Devam Edilemeyen Özgeçmiş (Google): Bu kod, Devam Edilebilir HTTP İstekleri Teklifinde kesilen PUT veya POST isteklerini devam ettirmek için kullanılır. Kalıcı Yönlendirme: İstek ve tüm gelecekteki istekler, yanıtta sağlanan URI kullanılarak yeniden gönderilmelidir. ',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Kötü istek: İstek hiper metin iletişim protokolü bağlamında, istekteki yanlış sözdizimi nedeniyle karşılanamadı. 
   */
  BAD_REQUEST = 'Kötü istek: İstek hiper metin iletişim protokolü bağlamında, istekteki yanlış sözdizimi nedeniyle karşılanamadı. ',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Yetkisiz: İstek yapan kişi kaynağa erişim için yetkilendirilmemiştir. Bu 403'e benzer fakat kimlik doğrulama beklenirken başarısız olmuş ya da sağlanmamış durumlarda kullanılır. 
   */
  UNAUTHORIZED = 'Yetkisiz: İstek yapan kişi kaynağa erişim için yetkilendirilmemiştir. Bu 403\'e benzer fakat kimlik doğrulama beklenirken başarısız olmuş ya da sağlanmamış durumlarda kullanılır. ',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Ödeme gereklidir: Gelecekte kullanılmak üzere ayrılmıştır. Bazı web hizmetleri, bunun müşterinin aşırı sayıda istek gönderdiğini göstergesi olarak kullanır. 
   */
  PAYMENT_REQUIRED = 'Ödeme gereklidir: Gelecekte kullanılmak üzere ayrılmıştır. Bazı web hizmetleri, bunun müşterinin aşırı sayıda istek gönderdiğini göstergesi olarak kullanır. ',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Yasaklandı: İstek doğru biçimlendirilmişti, ancak sunucu istenen kaynağı sağlamayı reddetti. 401'den farklı olarak kimlik doğrulama sunucu yanıtını değiştirmez. 
   */
  FORBIDDEN = 'Yasaklandı: İstek doğru biçimlendirilmişti, ancak sunucu istenen kaynağı sağlamayı reddetti. 401\'den farklı olarak kimlik doğrulama sunucu yanıtını değiştirmez. ',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Bulunamadı: İstenilen kaynak bulunamadı. Bu genellikle sunucuya istenen tüm geçersiz URI'ler için bir toplama ifadesi olarak kullanılır. 
   */
  NOT_FOUND = 'Bulunamadı: İstenilen kaynak bulunamadı. Bu genellikle sunucuya istenen tüm geçersiz URI\'ler için bir toplama ifadesi olarak kullanılır. ',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Yöntem izin verilmedi: Kaynak izin verilmeyen bir yöntem kullanılarak talep edildi. Örneğin, kaynağa yalnızca GET yöntemini desteklediği halde POST yöntemiyle talep edilmesi. 
   */
  METHOD_NOT_ALLOWED = 'Yöntem izin verilmedi: Kaynak izin verilmeyen bir yöntem kullanılarak talep edildi. Örneğin, kaynağa yalnızca GET yöntemini desteklediği halde POST yöntemiyle talep edilmesi. ',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Kabul edilmez: Kaynak geçerlidir, fakat istekteki Accept başlıklarında belirtilen biçimde sağlanamaz. 
   */
  NOT_ACCEPTABLE = 'Kabul edilmez: Kaynak geçerlidir, fakat istekteki Accept başlıklarında belirtilen biçimde sağlanamaz. ',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy kimlik doğrulaması gerekli: İsteklerin karşılanmadan önce proxy ile kimlik doğrulaması gereklidir. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy kimlik doğrulaması gerekli: İsteklerin karşılanmadan önce proxy ile kimlik doğrulaması gereklidir. ',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * İstek zaman aşımı: Sunucu, istemci tarafından bir istek beklerken zaman aşımına uğradı. İstemci istekleri tekrar göndermeye izin verilir. 
   */
  REQUEST_TIMEOUT = 'İstek zaman aşımı: Sunucu, istemci tarafından bir istek beklerken zaman aşımına uğradı. İstemci istekleri tekrar göndermeye izin verilir. ',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Çatışma: İstek parametrelerindeki bir çatışma nedeniyle istek tamamlanamaz. 
   */
  CONFLICT = 'Çatışma: İstek parametrelerindeki bir çatışma nedeniyle istek tamamlanamaz. ',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Kayboldu: İstenen URI'de kaynak artık mevcut değil ve yönlendirme verilmeyecek. 
   */
  GONE = 'Kayboldu: İstenen URI\'de kaynak artık mevcut değil ve yönlendirme verilmeyecek. ',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Uzunluk gerekli: Kaynak tarafından gerektiği gibi isteğin içeriğinin uzunluğu belirtilmedi. 
   */
  LENGTH_REQUIRED = 'Uzunluk gerekli: Kaynak tarafından gerektiği gibi isteğin içeriğinin uzunluğu belirtilmedi. ',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Ön koşul başarısız oldu: Sunucu, müşterinin belirttiği ön koşullardan birini karşılamıyor. 
   */
  PRECONDITION_FAILED = 'Ön koşul başarısız oldu: Sunucu, müşterinin belirttiği ön koşullardan birini karşılamıyor. ',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * İstek varlığı çok büyük: İstek içeriği, sunucunun işleyebileceğinden daha fazladır. 
   */
  PAYLOAD_TOO_LARGE = 'İstek varlığı çok büyük: İstek içeriği, sunucunun işleyebileceğinden daha fazladır. ',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * İstek URI'si çok uzun: İstekte sağlanan URI sunucunun işlem yapabilmesi için çok uzun. Genellikle GET isteğinin URI'sine çok fazla veri kodlandığında bu durum kullanılır ve bunun yerine POST isteği kullanılmalıdır. 
   */
  URI_TOO_LONG = 'İstek URI\'si çok uzun: İstekte sağlanan URI sunucunun işlem yapabilmesi için çok uzun. Genellikle GET isteğinin URI\'sine çok fazla veri kodlandığında bu durum kullanılır ve bunun yerine POST isteği kullanılmalıdır. ',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Desteklenmeyen medya türü: İstemci tarafından sunulan verilerin medya türü sunucunun desteklemediği türdür. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Desteklenmeyen medya türü: İstemci tarafından sunulan verilerin medya türü sunucunun desteklemediği türdür. ',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * İstenilen aralık karşılanamıyor: İstemci kaynağın bir kısmını istemiş fakat sunucu bu kısmı sağlayamıyor. 
   */
  RANGE_NOT_SATISFIABLE = 'İstenilen aralık karşılanamıyor: İstemci kaynağın bir kısmını istemiş fakat sunucu bu kısmı sağlayamıyor. ',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Beklenti başarısız oldu: Sunucu, Expect istek başlık alanının gereksinimlerini karşılayamıyor. 
   */
  EXPECTATION_FAILED = 'Beklenti başarısız oldu: Sunucu, Expect istek başlık alanının gereksinimlerini karşılayamıyor. ',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Ben bir çaydanlık: Herhangi bir çaydanlıkla kahve yapma girişimi "418 Ben bir çaydanlık" hata koduyla sonuçlanmalıdır. Oluşan varlık vücut kısa ve topaklı olabilir. 
   */
  I_M_A_TEAPOT = 'Ben bir çaydanlık: Herhangi bir çaydanlıkla kahve yapma girişimi "418 Ben bir çaydanlık" hata koduyla sonuçlanmalıdır. Oluşan varlık vücut kısa ve topaklı olabilir. ',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Yanlış Yönlendirilmiş İstek: İstek, bir yanıt vermeye muktedir olmayan bir sunucuya yönlendirildi. Bu durum, istek URI'sinde yer alan şema ve yetki kombinasyonlarına karşılık vermek üzere yapılandırılmamış bir sunucu tarafından gönderilebilir. 
   */
  MISDIRECTED_REQUEST = 'Yanlış Yönlendirilmiş İstek: İstek, bir yanıt vermeye muktedir olmayan bir sunucuya yönlendirildi. Bu durum, istek URI\'sinde yer alan şema ve yetki kombinasyonlarına karşılık vermek üzere yapılandırılmamış bir sunucu tarafından gönderilebilir. ',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * İşlenemeyen varlık: İstek doğru biçimlendirilmiştir, ancak mevcut formda işlenemez. Genellikle belirtilen parametreler doğrulama hatalarını geçemediğinde kullanılır. 
   */
  UNPROCESSABLE_ENTITY = 'İşlenemeyen varlık: İstek doğru biçimlendirilmiştir, ancak mevcut formda işlenemez. Genellikle belirtilen parametreler doğrulama hatalarını geçemediğinde kullanılır. ',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Kilitli: İstenen kaynak bulundu, ancak kilitlendiği için erişilemez. 
   */
  LOCKED = 'Kilitli: İstenen kaynak bulundu, ancak kilitlendiği için erişilemez. ',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Bağımlılık başarısız oldu: Önceki bir isteğin başarısız olması nedeniyle mevcut istek de başarısız oldu. 
   */
  FAILED_DEPENDENCY = 'Bağımlılık başarısız oldu: Önceki bir isteğin başarısız olması nedeniyle mevcut istek de başarısız oldu. ',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Güncelleme gereklidir: İstemci, TLS 1.0 gibi yükseltilmiş bir protokol kullanarak isteğini tekrar göndermelidir. 
   */
  UPGRADE_REQUIRED = 'Güncelleme gereklidir: İstemci, TLS 1.0 gibi yükseltilmiş bir protokol kullanarak isteğini tekrar göndermelidir. ',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Önkoşul gerekli: Kaynak sunucu isteklerin koşullu olmasını gerektirir. 
   */
  PRECONDITION_REQUIRED = 'Önkoşul gerekli: Kaynak sunucu isteklerin koşullu olmasını gerektirir. ',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Çok fazla istek: Kullanıcı belirli bir süre içinde çok fazla istek gönderdi ("hız sınırlaması"). 
   */
  TOO_MANY_REQUESTS = 'Çok fazla istek: Kullanıcı belirli bir süre içinde çok fazla istek gönderdi ("hız sınırlaması"). ',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * İstek başlık alanları çok büyük: Sunucu başlık alanları çok büyük olduğu için istek işlemeyi reddediyor. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'İstek başlık alanları çok büyük: Sunucu başlık alanları çok büyük olduğu için istek işlemeyi reddediyor. ',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Giriş Süresi Aşıldı (Microsoft): Bir Microsoft uzantısı. Kullanıcı oturumunuzun süresi dolduğunu gösterir. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Giriş Süresi Aşıldı (Microsoft): Bir Microsoft uzantısı. Kullanıcı oturumunuzun süresi dolduğunu gösterir. ',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * "Hiç Yanıt Yok (Nginx): Nginx günlüklerinde kullanılan bir durum kodu. Sunucu, istemciye hiçbir bilgi döndürmez ve bağlantıyı kapatır (zararlı yazılımlar için caydırıcı bir unsur olarak kullanışlıdır)." 
   */
  NO_RESPONSE_NGINX = '"Hiç Yanıt Yok (Nginx): Nginx günlüklerinde kullanılan bir durum kodu. Sunucu, istemciye hiçbir bilgi döndürmez ve bağlantıyı kapatır (zararlı yazılımlar için caydırıcı bir unsur olarak kullanışlıdır)." ',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Yeniden Deneyin (Microsoft): Bir Microsoft uzantısıdır. İstek uygun işlemi gerçekleştirildikten sonra tekrar gönderilmelidir. 
   */
  RETRY_WITH_MICROSOFT = 'Yeniden Deneyin (Microsoft): Bir Microsoft uzantısıdır. İstek uygun işlemi gerçekleştirildikten sonra tekrar gönderilmelidir. ',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Windows Ebeveyn Kontrolleri tarafından engellendi (Microsoft): Microsoft uzantısı. Bu hata, Windows Ebeveyn Kontrolleri açıkken ve verilen web sayfasına erişimi engellediğinde ortaya çıkar. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Windows Ebeveyn Kontrolleri tarafından engellendi (Microsoft): Microsoft uzantısı. Bu hata, Windows Ebeveyn Kontrolleri açıkken ve verilen web sayfasına erişimi engellediğinde ortaya çıkar. ',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Exchange ActiveSync'te ya daha verimli bir sunucu kullanılacaksa ya da sunucu kullanıcıların posta kutusuna erişemiyorsa kullanılır.
   * Yasal nedenlerle kullanılamaz: Sunucu yasal kısıtlama talebi nedeniyle çalıştıramaz. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Redirect (Microsoft): Exchange ActiveSync\'te ya daha verimli bir sunucu kullanılacaksa ya da sunucu kullanıcıların posta kutusuna erişemiyorsa kullanılır.\n\
Yasal nedenlerle kullanılamaz: Sunucu yasal kısıtlama talebi nedeniyle çalıştıramaz. ',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * İstek Başlığı Çok Büyük (Nginx): Nginx dahili kodu 431'e benzer fakat 0.9.4 sürümünde (21 Ocak 2011'de) daha önce tanıtıldı. 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'İstek Başlığı Çok Büyük (Nginx): Nginx dahili kodu 431\'e benzer fakat 0.9.4 sürümünde (21 Ocak 2011\'de) daha önce tanıtıldı. ',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Sertifika Hatası (Nginx): SSL istemci sertifika hatası meydana geldiğinde Nginx'in bir kayıt ve hata sayfası yönlendirmesinde 4XX'den ayırt etmek için kullandığı dahili kod. 
   */
  CERT_ERROR_NGINX = 'Sertifika Hatası (Nginx): SSL istemci sertifika hatası meydana geldiğinde Nginx\'in bir kayıt ve hata sayfası yönlendirmesinde 4XX\'den ayırt etmek için kullandığı dahili kod. ',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Nginx'in dahili kodu, istemci sertifikayı sağlamadığında kullanılır, bu da bir günlükteki 4XX'ten ayırmak ve bir hata sayfasına yönlendirmek için kullanılır. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx): Nginx\'in dahili kodu, istemci sertifikayı sağlamadığında kullanılır, bu da bir günlükteki 4XX\'ten ayırmak ve bir hata sayfasına yönlendirmek için kullanılır. ',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP'den HTTPS'ye (Nginx): Nginx dahili kodu, HTTPS portuna gönderilen düz HTTP istekleri için kullanılır, bir günlükteki 4XX ile ayırt edilmesi ve bir hata sayfası yönlendirmesi yapılması amacıyla. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP\'den HTTPS\'ye (Nginx): Nginx dahili kodu, HTTPS portuna gönderilen düz HTTP istekleri için kullanılır, bir günlükteki 4XX ile ayırt edilmesi ve bir hata sayfası yönlendirmesi yapılması amacıyla. ',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token süresi doldu/geçersiz (Esri): ArcGIS for Server tarafından döndürüldü. 498 kodu bir tokenin süresi dolmuş veya geçersiz olduğunu gösterir. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token süresi doldu/geçersiz (Esri): ArcGIS for Server tarafından döndürüldü. 498 kodu bir tokenin süresi dolmuş veya geçersiz olduğunu gösterir. ',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token gereklidir (Esri): ArcGIS for Server tarafından döndürüldü. 499 kodu bir token gerektiğini gösterir (eğer bir token sunulmamışsa). 
   */
  TOKEN_REQUIRED_ESRI = 'Token gereklidir (Esri): ArcGIS for Server tarafından döndürüldü. 499 kodu bir token gerektiğini gösterir (eğer bir token sunulmamışsa). ',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Sunucu iç hatası: Sunucunun kendisindeki genel bir hata durumu. 
   */
  INTERNAL_SERVER_ERROR = 'Sunucu iç hatası: Sunucunun kendisindeki genel bir hata durumu. ',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Gerçekleştirilmedi: Sunucu istek yanıtlayamaz. Bu genellikle sunucunun isteği gelecekte karşılayabileceğini ima eder; aksi takdirde 4xx durum kodu daha uygun olabilir. 
   */
  NOT_IMPLEMENTED = 'Gerçekleştirilmedi: Sunucu istek yanıtlayamaz. Bu genellikle sunucunun isteği gelecekte karşılayabileceğini ima eder; aksi takdirde 4xx durum kodu daha uygun olabilir. ',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Kötü ağ geçidi: Sunucu bir vekil olarak hareket ederken, yukarı akış sunucusundan kabul edilebilir bir yanıt almadı. 
   */
  BAD_GATEWAY = 'Kötü ağ geçidi: Sunucu bir vekil olarak hareket ederken, yukarı akış sunucusundan kabul edilebilir bir yanıt almadı. ',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servis kullanılamıyor: Sunucu kapalıdır ve istekleri kabul etmiyor. 
   */
  SERVICE_UNAVAILABLE = 'Servis kullanılamıyor: Sunucu kapalıdır ve istekleri kabul etmiyor. ',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout: Sunucu bir vekil olarak çalışıyor ve yukarı akış sunucusundan bir yanıt alamadı. 
   */
  GATEWAY_TIMEOUT = 'Gateway timeout: Sunucu bir vekil olarak çalışıyor ve yukarı akış sunucusundan bir yanıt alamadı. ',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Desteklenmeyen HTTP sürümü: Sunucu, istekte belirtilen HTTP protokol sürümünü desteklemiyor. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'Desteklenmeyen HTTP sürümü: Sunucu, istekte belirtilen HTTP protokol sürümünü desteklemiyor. ',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant da görüşmeler yapıyor: İstek için şeffaf içerik görüşmesi döngüsel bir referans oluşturuyor. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant da görüşmeler yapıyor: İstek için şeffaf içerik görüşmesi döngüsel bir referans oluşturuyor. ',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Yetersiz depolama: Kullanıcı veya sunucu istekleri karşılayabilmek için yeterli depolama kotasına sahip değildir. 
   */
  INSUFFICIENT_STORAGE = 'Yetersiz depolama: Kullanıcı veya sunucu istekleri karşılayabilmek için yeterli depolama kotasına sahip değildir. ',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Döngü tespit edildi: Sunucu isteğinde sonsuz bir döngü tespit etti. 
   */
  LOOP_DETECTED = 'Döngü tespit edildi: Sunucu isteğinde sonsuz bir döngü tespit etti. ',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Bant Genişliği Sınırı Aşıldı (Apache bw/limited uzantısı): Bu durum kodu herhangi bir RFC'de belirtilmemiştir. Kullanımı bilinmemektedir. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bant Genişliği Sınırı Aşıldı (Apache bw/limited uzantısı): Bu durum kodu herhangi bir RFC\'de belirtilmemiştir. Kullanımı bilinmemektedir. ',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Not genişletildi: Talebin yerine getirilmesi için talebe daha fazla genişleme yapılması gerekmektedir. 
   */
  NOT_EXTENDED = 'Not genişletildi: Talebin yerine getirilmesi için talebe daha fazla genişleme yapılması gerekmektedir. ',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Ağ kimlik doğrulaması gereklidir: İstemci, istek göndermeden önce ağ ile kimlik doğrulaması yapmalıdır. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Ağ kimlik doğrulaması gereklidir: İstemci, istek göndermeden önce ağ ile kimlik doğrulaması yapmalıdır. ',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Bilinmeyen Hata (Microsoft / CloudFlare): Bu durum kodu herhangi bir RFC'de belirtilmemiş ve bazı hizmetler tarafından döndürülür, örneğin Microsoft Azure ve CloudFlare sunucuları: "520 hatası temelde kaynak sunucunun beklenmeyen bir şey döndürdüğü veya tolere edilmeyen/yorumlanamayan (protokol ihlali veya boş yanıt) bir "genel kapsayıcı" yanıtıdır." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Bilinmeyen Hata (Microsoft / CloudFlare): Bu durum kodu herhangi bir RFC\'de belirtilmemiş ve bazı hizmetler tarafından döndürülür, örneğin Microsoft Azure ve CloudFlare sunucuları: "520 hatası temelde kaynak sunucunun beklenmeyen bir şey döndürdüğü veya tolere edilmeyen/yorumlanamayan (protokol ihlali veya boş yanıt) bir "genel kapsayıcı" yanıtıdır." ',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Sunucusu Çalışmıyor (CloudFlare): Orijinal sunucu CloudFlare'den gelen bağlantıyı reddetti. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Sunucusu Çalışmıyor (CloudFlare): Orijinal sunucu CloudFlare\'den gelen bağlantıyı reddetti. ',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Bağlantı Zaman Aşımı (CloudFlare): CloudFlare, kaynak sunucu ile bir TCP el sıkışması yapamadı. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Bağlantı Zaman Aşımı (CloudFlare): CloudFlare, kaynak sunucu ile bir TCP el sıkışması yapamadı. ',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Kaynak Ulaşılamaz (CloudFlare): CloudFlare kaynak sunucuya ulaşamadı; örneğin, kaynak sunucunun DNS kayıtları yanlışsa. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Kaynak Ulaşılamaz (CloudFlare): CloudFlare kaynak sunucuya ulaşamadı; örneğin, kaynak sunucunun DNS kayıtları yanlışsa. ',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Bir Süre Geçti (CloudFlare): CloudFlare kaynak sunucuya bir TCP bağlantısı oluşturabildi, ancak zamanında bir HTTP yanıtı alamadı. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'Bir Süre Geçti (CloudFlare): CloudFlare kaynak sunucuya bir TCP bağlantısı oluşturabildi, ancak zamanında bir HTTP yanıtı alamadı. ',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): CloudFlare, kaynak sunucusu ile bir SSL/TLS el sıkışması yapamadı. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare): CloudFlare, kaynak sunucusu ile bir SSL/TLS el sıkışması yapamadı. ',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Geçersiz SSL Sertifikası (CloudFlare): CloudFlare, kaynak sunucunun sunduğu SSL/TLS sertifikasını doğrulayamadı. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Geçersiz SSL Sertifikası (CloudFlare): CloudFlare, kaynak sunucunun sunduğu SSL/TLS sertifikasını doğrulayamadı. ',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun Hatası (CloudFlare): WAN bağlantısı kurulduktan sonra istek zaman aşımına uğradı veya başarısız oldu. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Hatası (CloudFlare): WAN bağlantısı kurulduktan sonra istek zaman aşımına uğradı veya başarısız oldu. '
}

export enum HttpStatusDescriptionByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir. 
   */
  h100 = 'Devam et: Sunucu istek başlıklarını aldı ve istemci istek gövdesini göndermeye devam etmelidir. ',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Protokolleri değiştirme: İstek yapan kişi sunucudan protokolleri değiştirmesini istedi ve sunucu bunu yapacağını doğruladı. 
   */
  h101 = 'Protokolleri değiştirme: İstek yapan kişi sunucudan protokolleri değiştirmesini istedi ve sunucu bunu yapacağını doğruladı. ',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * İşleme: Sunucu isteği aldı ve işliyor, ancak henüz kullanılabilir bir yanıt yok. 
   */
  h102 = 'İşleme: Sunucu isteği aldı ve işliyor, ancak henüz kullanılabilir bir yanıt yok. ',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * Tamam: Başarılı HTTP istekleri için standart yanıt. 
   */
  h200 = 'Tamam: Başarılı HTTP istekleri için standart yanıt. ',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Oluşturuldu: İstek yerine getirildi ve yeni bir kaynak oluşturuldu. 
   */
  h201 = 'Oluşturuldu: İstek yerine getirildi ve yeni bir kaynak oluşturuldu. ',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez. 
   */
  h202 = 'Kabul edildi: İstek kabul edildi ancak henüz işlenmedi. Bu kod, isteğin başarılı bir şekilde işleneceğini garanti etmez. ',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Yetkisiz bilgi: HTTP 1.1. Sunucu istekleri başarıyla işledi ancak bilgileri başka bir kaynaktan döndürüyor. 
   */
  h203 = 'Yetkisiz bilgi: HTTP 1.1. Sunucu istekleri başarıyla işledi ancak bilgileri başka bir kaynaktan döndürüyor. ',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * İçerik yok: Sunucu isteği kabul etti fakat herhangi bir içerik döndürmüyor. Bu genellikle DELETE isteğine bir yanıt olarak kullanılır. 
   */
  h204 = 'İçerik yok: Sunucu isteği kabul etti fakat herhangi bir içerik döndürmüyor. Bu genellikle DELETE isteğine bir yanıt olarak kullanılır. ',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * İçeriği sıfırla: 204 İçerik Yok yanıtına benzer, ancak bu yanıt, istekçiden belge görünümünü sıfırlamasını gerektirir. 
   */
  h205 = 'İçeriği sıfırla: 204 İçerik Yok yanıtına benzer, ancak bu yanıt, istekçiden belge görünümünü sıfırlamasını gerektirir. ',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Kısmi içerik: Sunucu, istemci tarafından bir Range başlığı aracılığıyla talep edildiği gibi yalnızca içeriğin bir bölümünü teslim eder. 
   */
  h206 = 'Kısmi içerik: Sunucu, istemci tarafından bir Range başlığı aracılığıyla talep edildiği gibi yalnızca içeriğin bir bölümünü teslim eder. ',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: İzleyen mesaj gövdesi bir XML mesajıdır ve kaç tane alt istek yapıldığına bağlı olarak bir sayıda ayrı yanıt kodu içerebilir. 
   */
  h207 = 'Multi-status: İzleyen mesaj gövdesi bir XML mesajıdır ve kaç tane alt istek yapıldığına bağlı olarak bir sayıda ayrı yanıt kodu içerebilir. ',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Zaten rapor edildi: DAV bağlantısının üyeleri bu isteğin önceki yanıtında zaten listelenmişti ve tekrar dahil edilmiyor. 
   */
  h208 = 'Zaten rapor edildi: DAV bağlantısının üyeleri bu isteğin önceki yanıtında zaten listelenmişti ve tekrar dahil edilmiyor. ',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM kullanıldı: Sunucu kaynağa bir GET isteği yerine getirdi ve yanıt, mevcut örneğe bir veya daha fazla örnek işlem uygulanmasının sonucunun bir temsilidir. 
   */
  h226 = 'IM kullanıldı: Sunucu kaynağa bir GET isteği yerine getirdi ve yanıt, mevcut örneğe bir veya daha fazla örnek işlem uygulanmasının sonucunun bir temsilidir. ',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Çoklu seçenekler: Müşteri birden fazla seçenekten birini izleyebilir. 
   */
  h300 = 'Çoklu seçenekler: Müşteri birden fazla seçenekten birini izleyebilir. ',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Kalıcı olarak taşındı: Kaynak taşınmıştır ve tüm sonraki istekler onun yeni URI'sine başvurmalıdır. 
   */
  h301 = 'Kalıcı olarak taşındı: Kaynak taşınmıştır ve tüm sonraki istekler onun yeni URI\'sine başvurmalıdır. ',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Bulundu: HTTP 1.0 spesifikasyonu bu durumunu "Geçici Olarak Taşındı" olarak tanımladı, fakat popüler tarayıcılar bu duruma 303 için öngörülen davranışa benzer şekilde yanıt verir. Kaynak, döndürülen URI'ye başvurarak elde edilebilir. 
   */
  h302 = 'Bulundu: HTTP 1.0 spesifikasyonu bu durumunu "Geçici Olarak Taşındı" olarak tanımladı, fakat popüler tarayıcılar bu duruma 303 için öngörülen davranışa benzer şekilde yanıt verir. Kaynak, döndürülen URI\'ye başvurarak elde edilebilir. ',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Diğerlerini gör: Kaynağa.GET yöntemini kullanarak başka URI'leri takip ederek erişilebilir. POST, PUT veya DELETE isteğine karşılık alındığında, genellikle sunucunun isteği başarılı bir şekilde işlediği ve istemciyi bilgilendirici bir uç noktaya yönlendirdiği varsayılabilir. 
   */
  h303 = 'Diğerlerini gör: Kaynağa.GET yöntemini kullanarak başka URI\'leri takip ederek erişilebilir. POST, PUT veya DELETE isteğine karşılık alındığında, genellikle sunucunun isteği başarılı bir şekilde işlediği ve istemciyi bilgilendirici bir uç noktaya yönlendirdiği varsayılabilir. ',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Değiştirilmemiş: Kaynağın, If-Modified-Since veya If-Match başlıklarında belirtilen sürümden bu yana değiştirilmemiştir. Kaynak yanıt gövdesinde döndürülmeyecektir. 
   */
  h304 = 'Değiştirilmemiş: Kaynağın, If-Modified-Since veya If-Match başlıklarında belirtilen sürümden bu yana değiştirilmemiştir. Kaynak yanıt gövdesinde döndürülmeyecektir. ',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Proxy kullanımı: HTTP 1.1. Kaynak yalnızca bir proxy üzerinden erişilebilir ve adres yanıtda sağlanır. 
   */
  h305 = 'Proxy kullanımı: HTTP 1.1. Kaynak yalnızca bir proxy üzerinden erişilebilir ve adres yanıtda sağlanır. ',
  /**
   * h306: 
   *
   * Empty
   * Proxy değiştirme: HTTP 1.1'de kullanım dışı bırakıldı. Daha önceki isteklerin belirtilen proxy kullanılarak gönderilmesi gerektiği anlamına geliyordu. 
   */
  h306 = 'Proxy değiştirme: HTTP 1.1\'de kullanım dışı bırakıldı. Daha önceki isteklerin belirtilen proxy kullanılarak gönderilmesi gerektiği anlamına geliyordu. ',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Geçici yönlendirme: HTTP 1.1. İstek, yanıtta sağlanan URI ile tekrarlanmalıdır, fakat gelecekteki istekler yine de orijinal URI'yi çağırmalıdır. 
   */
  h307 = 'Geçici yönlendirme: HTTP 1.1. İstek, yanıtta sağlanan URI ile tekrarlanmalıdır, fakat gelecekteki istekler yine de orijinal URI\'yi çağırmalıdır. ',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Devam Edilemeyen Özgeçmiş (Google): Bu kod, Devam Edilebilir HTTP İstekleri Teklifinde kesilen PUT veya POST isteklerini devam ettirmek için kullanılır. Kalıcı Yönlendirme: İstek ve tüm gelecekteki istekler, yanıtta sağlanan URI kullanılarak yeniden gönderilmelidir. 
   */
  h308 = 'Devam Edilemeyen Özgeçmiş (Google): Bu kod, Devam Edilebilir HTTP İstekleri Teklifinde kesilen PUT veya POST isteklerini devam ettirmek için kullanılır. Kalıcı Yönlendirme: İstek ve tüm gelecekteki istekler, yanıtta sağlanan URI kullanılarak yeniden gönderilmelidir. ',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Kötü istek: İstek hiper metin iletişim protokolü bağlamında, istekteki yanlış sözdizimi nedeniyle karşılanamadı. 
   */
  h400 = 'Kötü istek: İstek hiper metin iletişim protokolü bağlamında, istekteki yanlış sözdizimi nedeniyle karşılanamadı. ',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Yetkisiz: İstek yapan kişi kaynağa erişim için yetkilendirilmemiştir. Bu 403'e benzer fakat kimlik doğrulama beklenirken başarısız olmuş ya da sağlanmamış durumlarda kullanılır. 
   */
  h401 = 'Yetkisiz: İstek yapan kişi kaynağa erişim için yetkilendirilmemiştir. Bu 403\'e benzer fakat kimlik doğrulama beklenirken başarısız olmuş ya da sağlanmamış durumlarda kullanılır. ',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Ödeme gereklidir: Gelecekte kullanılmak üzere ayrılmıştır. Bazı web hizmetleri, bunun müşterinin aşırı sayıda istek gönderdiğini göstergesi olarak kullanır. 
   */
  h402 = 'Ödeme gereklidir: Gelecekte kullanılmak üzere ayrılmıştır. Bazı web hizmetleri, bunun müşterinin aşırı sayıda istek gönderdiğini göstergesi olarak kullanır. ',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Yasaklandı: İstek doğru biçimlendirilmişti, ancak sunucu istenen kaynağı sağlamayı reddetti. 401'den farklı olarak kimlik doğrulama sunucu yanıtını değiştirmez. 
   */
  h403 = 'Yasaklandı: İstek doğru biçimlendirilmişti, ancak sunucu istenen kaynağı sağlamayı reddetti. 401\'den farklı olarak kimlik doğrulama sunucu yanıtını değiştirmez. ',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Bulunamadı: İstenilen kaynak bulunamadı. Bu genellikle sunucuya istenen tüm geçersiz URI'ler için bir toplama ifadesi olarak kullanılır. 
   */
  h404 = 'Bulunamadı: İstenilen kaynak bulunamadı. Bu genellikle sunucuya istenen tüm geçersiz URI\'ler için bir toplama ifadesi olarak kullanılır. ',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Yöntem izin verilmedi: Kaynak izin verilmeyen bir yöntem kullanılarak talep edildi. Örneğin, kaynağa yalnızca GET yöntemini desteklediği halde POST yöntemiyle talep edilmesi. 
   */
  h405 = 'Yöntem izin verilmedi: Kaynak izin verilmeyen bir yöntem kullanılarak talep edildi. Örneğin, kaynağa yalnızca GET yöntemini desteklediği halde POST yöntemiyle talep edilmesi. ',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Kabul edilmez: Kaynak geçerlidir, fakat istekteki Accept başlıklarında belirtilen biçimde sağlanamaz. 
   */
  h406 = 'Kabul edilmez: Kaynak geçerlidir, fakat istekteki Accept başlıklarında belirtilen biçimde sağlanamaz. ',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Proxy kimlik doğrulaması gerekli: İsteklerin karşılanmadan önce proxy ile kimlik doğrulaması gereklidir. 
   */
  h407 = 'Proxy kimlik doğrulaması gerekli: İsteklerin karşılanmadan önce proxy ile kimlik doğrulaması gereklidir. ',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * İstek zaman aşımı: Sunucu, istemci tarafından bir istek beklerken zaman aşımına uğradı. İstemci istekleri tekrar göndermeye izin verilir. 
   */
  h408 = 'İstek zaman aşımı: Sunucu, istemci tarafından bir istek beklerken zaman aşımına uğradı. İstemci istekleri tekrar göndermeye izin verilir. ',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Çatışma: İstek parametrelerindeki bir çatışma nedeniyle istek tamamlanamaz. 
   */
  h409 = 'Çatışma: İstek parametrelerindeki bir çatışma nedeniyle istek tamamlanamaz. ',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Kayboldu: İstenen URI'de kaynak artık mevcut değil ve yönlendirme verilmeyecek. 
   */
  h410 = 'Kayboldu: İstenen URI\'de kaynak artık mevcut değil ve yönlendirme verilmeyecek. ',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Uzunluk gerekli: Kaynak tarafından gerektiği gibi isteğin içeriğinin uzunluğu belirtilmedi. 
   */
  h411 = 'Uzunluk gerekli: Kaynak tarafından gerektiği gibi isteğin içeriğinin uzunluğu belirtilmedi. ',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Ön koşul başarısız oldu: Sunucu, müşterinin belirttiği ön koşullardan birini karşılamıyor. 
   */
  h412 = 'Ön koşul başarısız oldu: Sunucu, müşterinin belirttiği ön koşullardan birini karşılamıyor. ',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * İstek varlığı çok büyük: İstek içeriği, sunucunun işleyebileceğinden daha fazladır. 
   */
  h413 = 'İstek varlığı çok büyük: İstek içeriği, sunucunun işleyebileceğinden daha fazladır. ',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * İstek URI'si çok uzun: İstekte sağlanan URI sunucunun işlem yapabilmesi için çok uzun. Genellikle GET isteğinin URI'sine çok fazla veri kodlandığında bu durum kullanılır ve bunun yerine POST isteği kullanılmalıdır. 
   */
  h414 = 'İstek URI\'si çok uzun: İstekte sağlanan URI sunucunun işlem yapabilmesi için çok uzun. Genellikle GET isteğinin URI\'sine çok fazla veri kodlandığında bu durum kullanılır ve bunun yerine POST isteği kullanılmalıdır. ',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Desteklenmeyen medya türü: İstemci tarafından sunulan verilerin medya türü sunucunun desteklemediği türdür. 
   */
  h415 = 'Desteklenmeyen medya türü: İstemci tarafından sunulan verilerin medya türü sunucunun desteklemediği türdür. ',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * İstenilen aralık karşılanamıyor: İstemci kaynağın bir kısmını istemiş fakat sunucu bu kısmı sağlayamıyor. 
   */
  h416 = 'İstenilen aralık karşılanamıyor: İstemci kaynağın bir kısmını istemiş fakat sunucu bu kısmı sağlayamıyor. ',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Beklenti başarısız oldu: Sunucu, Expect istek başlık alanının gereksinimlerini karşılayamıyor. 
   */
  h417 = 'Beklenti başarısız oldu: Sunucu, Expect istek başlık alanının gereksinimlerini karşılayamıyor. ',
  /**
   * h418: 
   *
   * Empty
   * Ben bir çaydanlık: Herhangi bir çaydanlıkla kahve yapma girişimi "418 Ben bir çaydanlık" hata koduyla sonuçlanmalıdır. Oluşan varlık vücut kısa ve topaklı olabilir. 
   */
  h418 = 'Ben bir çaydanlık: Herhangi bir çaydanlıkla kahve yapma girişimi "418 Ben bir çaydanlık" hata koduyla sonuçlanmalıdır. Oluşan varlık vücut kısa ve topaklı olabilir. ',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Yanlış Yönlendirilmiş İstek: İstek, bir yanıt vermeye muktedir olmayan bir sunucuya yönlendirildi. Bu durum, istek URI'sinde yer alan şema ve yetki kombinasyonlarına karşılık vermek üzere yapılandırılmamış bir sunucu tarafından gönderilebilir. 
   */
  h421 = 'Yanlış Yönlendirilmiş İstek: İstek, bir yanıt vermeye muktedir olmayan bir sunucuya yönlendirildi. Bu durum, istek URI\'sinde yer alan şema ve yetki kombinasyonlarına karşılık vermek üzere yapılandırılmamış bir sunucu tarafından gönderilebilir. ',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * İşlenemeyen varlık: İstek doğru biçimlendirilmiştir, ancak mevcut formda işlenemez. Genellikle belirtilen parametreler doğrulama hatalarını geçemediğinde kullanılır. 
   */
  h422 = 'İşlenemeyen varlık: İstek doğru biçimlendirilmiştir, ancak mevcut formda işlenemez. Genellikle belirtilen parametreler doğrulama hatalarını geçemediğinde kullanılır. ',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Kilitli: İstenen kaynak bulundu, ancak kilitlendiği için erişilemez. 
   */
  h423 = 'Kilitli: İstenen kaynak bulundu, ancak kilitlendiği için erişilemez. ',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Bağımlılık başarısız oldu: Önceki bir isteğin başarısız olması nedeniyle mevcut istek de başarısız oldu. 
   */
  h424 = 'Bağımlılık başarısız oldu: Önceki bir isteğin başarısız olması nedeniyle mevcut istek de başarısız oldu. ',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Güncelleme gereklidir: İstemci, TLS 1.0 gibi yükseltilmiş bir protokol kullanarak isteğini tekrar göndermelidir. 
   */
  h426 = 'Güncelleme gereklidir: İstemci, TLS 1.0 gibi yükseltilmiş bir protokol kullanarak isteğini tekrar göndermelidir. ',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Önkoşul gerekli: Kaynak sunucu isteklerin koşullu olmasını gerektirir. 
   */
  h428 = 'Önkoşul gerekli: Kaynak sunucu isteklerin koşullu olmasını gerektirir. ',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Çok fazla istek: Kullanıcı belirli bir süre içinde çok fazla istek gönderdi ("hız sınırlaması"). 
   */
  h429 = 'Çok fazla istek: Kullanıcı belirli bir süre içinde çok fazla istek gönderdi ("hız sınırlaması"). ',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * İstek başlık alanları çok büyük: Sunucu başlık alanları çok büyük olduğu için istek işlemeyi reddediyor. 
   */
  h431 = 'İstek başlık alanları çok büyük: Sunucu başlık alanları çok büyük olduğu için istek işlemeyi reddediyor. ',
  /**
   * h440: 
   *
   * Empty
   * Giriş Süresi Aşıldı (Microsoft): Bir Microsoft uzantısı. Kullanıcı oturumunuzun süresi dolduğunu gösterir. 
   */
  h440 = 'Giriş Süresi Aşıldı (Microsoft): Bir Microsoft uzantısı. Kullanıcı oturumunuzun süresi dolduğunu gösterir. ',
  /**
   * h444: 
   *
   * Empty
   * "Hiç Yanıt Yok (Nginx): Nginx günlüklerinde kullanılan bir durum kodu. Sunucu, istemciye hiçbir bilgi döndürmez ve bağlantıyı kapatır (zararlı yazılımlar için caydırıcı bir unsur olarak kullanışlıdır)." 
   */
  h444 = '"Hiç Yanıt Yok (Nginx): Nginx günlüklerinde kullanılan bir durum kodu. Sunucu, istemciye hiçbir bilgi döndürmez ve bağlantıyı kapatır (zararlı yazılımlar için caydırıcı bir unsur olarak kullanışlıdır)." ',
  /**
   * h449: 
   *
   * Empty
   * Yeniden Deneyin (Microsoft): Bir Microsoft uzantısıdır. İstek uygun işlemi gerçekleştirildikten sonra tekrar gönderilmelidir. 
   */
  h449 = 'Yeniden Deneyin (Microsoft): Bir Microsoft uzantısıdır. İstek uygun işlemi gerçekleştirildikten sonra tekrar gönderilmelidir. ',
  /**
   * h450: 
   *
   * Empty
   * Windows Ebeveyn Kontrolleri tarafından engellendi (Microsoft): Microsoft uzantısı. Bu hata, Windows Ebeveyn Kontrolleri açıkken ve verilen web sayfasına erişimi engellediğinde ortaya çıkar. 
   */
  h450 = 'Windows Ebeveyn Kontrolleri tarafından engellendi (Microsoft): Microsoft uzantısı. Bu hata, Windows Ebeveyn Kontrolleri açıkken ve verilen web sayfasına erişimi engellediğinde ortaya çıkar. ',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Exchange ActiveSync'te ya daha verimli bir sunucu kullanılacaksa ya da sunucu kullanıcıların posta kutusuna erişemiyorsa kullanılır.
   * Yasal nedenlerle kullanılamaz: Sunucu yasal kısıtlama talebi nedeniyle çalıştıramaz. 
   */
  h451 = 'Redirect (Microsoft): Exchange ActiveSync\'te ya daha verimli bir sunucu kullanılacaksa ya da sunucu kullanıcıların posta kutusuna erişemiyorsa kullanılır.\n\
Yasal nedenlerle kullanılamaz: Sunucu yasal kısıtlama talebi nedeniyle çalıştıramaz. ',
  /**
   * h494: 
   *
   * Empty
   * İstek Başlığı Çok Büyük (Nginx): Nginx dahili kodu 431'e benzer fakat 0.9.4 sürümünde (21 Ocak 2011'de) daha önce tanıtıldı. 
   */
  h494 = 'İstek Başlığı Çok Büyük (Nginx): Nginx dahili kodu 431\'e benzer fakat 0.9.4 sürümünde (21 Ocak 2011\'de) daha önce tanıtıldı. ',
  /**
   * h495: 
   *
   * Empty
   * Sertifika Hatası (Nginx): SSL istemci sertifika hatası meydana geldiğinde Nginx'in bir kayıt ve hata sayfası yönlendirmesinde 4XX'den ayırt etmek için kullandığı dahili kod. 
   */
  h495 = 'Sertifika Hatası (Nginx): SSL istemci sertifika hatası meydana geldiğinde Nginx\'in bir kayıt ve hata sayfası yönlendirmesinde 4XX\'den ayırt etmek için kullandığı dahili kod. ',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Nginx'in dahili kodu, istemci sertifikayı sağlamadığında kullanılır, bu da bir günlükteki 4XX'ten ayırmak ve bir hata sayfasına yönlendirmek için kullanılır. 
   */
  h496 = 'No Cert (Nginx): Nginx\'in dahili kodu, istemci sertifikayı sağlamadığında kullanılır, bu da bir günlükteki 4XX\'ten ayırmak ve bir hata sayfasına yönlendirmek için kullanılır. ',
  /**
   * h497: 
   *
   * Empty
   * HTTP'den HTTPS'ye (Nginx): Nginx dahili kodu, HTTPS portuna gönderilen düz HTTP istekleri için kullanılır, bir günlükteki 4XX ile ayırt edilmesi ve bir hata sayfası yönlendirmesi yapılması amacıyla. 
   */
  h497 = 'HTTP\'den HTTPS\'ye (Nginx): Nginx dahili kodu, HTTPS portuna gönderilen düz HTTP istekleri için kullanılır, bir günlükteki 4XX ile ayırt edilmesi ve bir hata sayfası yönlendirmesi yapılması amacıyla. ',
  /**
   * h498: 
   *
   * Empty
   * Token süresi doldu/geçersiz (Esri): ArcGIS for Server tarafından döndürüldü. 498 kodu bir tokenin süresi dolmuş veya geçersiz olduğunu gösterir. 
   */
  h498 = 'Token süresi doldu/geçersiz (Esri): ArcGIS for Server tarafından döndürüldü. 498 kodu bir tokenin süresi dolmuş veya geçersiz olduğunu gösterir. ',
  /**
   * h499: 
   *
   * Empty
   * Token gereklidir (Esri): ArcGIS for Server tarafından döndürüldü. 499 kodu bir token gerektiğini gösterir (eğer bir token sunulmamışsa). 
   */
  h499 = 'Token gereklidir (Esri): ArcGIS for Server tarafından döndürüldü. 499 kodu bir token gerektiğini gösterir (eğer bir token sunulmamışsa). ',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Sunucu iç hatası: Sunucunun kendisindeki genel bir hata durumu. 
   */
  h500 = 'Sunucu iç hatası: Sunucunun kendisindeki genel bir hata durumu. ',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Gerçekleştirilmedi: Sunucu istek yanıtlayamaz. Bu genellikle sunucunun isteği gelecekte karşılayabileceğini ima eder; aksi takdirde 4xx durum kodu daha uygun olabilir. 
   */
  h501 = 'Gerçekleştirilmedi: Sunucu istek yanıtlayamaz. Bu genellikle sunucunun isteği gelecekte karşılayabileceğini ima eder; aksi takdirde 4xx durum kodu daha uygun olabilir. ',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Kötü ağ geçidi: Sunucu bir vekil olarak hareket ederken, yukarı akış sunucusundan kabul edilebilir bir yanıt almadı. 
   */
  h502 = 'Kötü ağ geçidi: Sunucu bir vekil olarak hareket ederken, yukarı akış sunucusundan kabul edilebilir bir yanıt almadı. ',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Servis kullanılamıyor: Sunucu kapalıdır ve istekleri kabul etmiyor. 
   */
  h503 = 'Servis kullanılamıyor: Sunucu kapalıdır ve istekleri kabul etmiyor. ',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Gateway timeout: Sunucu bir vekil olarak çalışıyor ve yukarı akış sunucusundan bir yanıt alamadı. 
   */
  h504 = 'Gateway timeout: Sunucu bir vekil olarak çalışıyor ve yukarı akış sunucusundan bir yanıt alamadı. ',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Desteklenmeyen HTTP sürümü: Sunucu, istekte belirtilen HTTP protokol sürümünü desteklemiyor. 
   */
  h505 = 'Desteklenmeyen HTTP sürümü: Sunucu, istekte belirtilen HTTP protokol sürümünü desteklemiyor. ',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant da görüşmeler yapıyor: İstek için şeffaf içerik görüşmesi döngüsel bir referans oluşturuyor. 
   */
  h506 = 'Variant da görüşmeler yapıyor: İstek için şeffaf içerik görüşmesi döngüsel bir referans oluşturuyor. ',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Yetersiz depolama: Kullanıcı veya sunucu istekleri karşılayabilmek için yeterli depolama kotasına sahip değildir. 
   */
  h507 = 'Yetersiz depolama: Kullanıcı veya sunucu istekleri karşılayabilmek için yeterli depolama kotasına sahip değildir. ',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Döngü tespit edildi: Sunucu isteğinde sonsuz bir döngü tespit etti. 
   */
  h508 = 'Döngü tespit edildi: Sunucu isteğinde sonsuz bir döngü tespit etti. ',
  /**
   * h509: 
   *
   * Empty
   * Bant Genişliği Sınırı Aşıldı (Apache bw/limited uzantısı): Bu durum kodu herhangi bir RFC'de belirtilmemiştir. Kullanımı bilinmemektedir. 
   */
  h509 = 'Bant Genişliği Sınırı Aşıldı (Apache bw/limited uzantısı): Bu durum kodu herhangi bir RFC\'de belirtilmemiştir. Kullanımı bilinmemektedir. ',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Not genişletildi: Talebin yerine getirilmesi için talebe daha fazla genişleme yapılması gerekmektedir. 
   */
  h510 = 'Not genişletildi: Talebin yerine getirilmesi için talebe daha fazla genişleme yapılması gerekmektedir. ',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Ağ kimlik doğrulaması gereklidir: İstemci, istek göndermeden önce ağ ile kimlik doğrulaması yapmalıdır. 
   */
  h511 = 'Ağ kimlik doğrulaması gereklidir: İstemci, istek göndermeden önce ağ ile kimlik doğrulaması yapmalıdır. ',
  /**
   * h520: 
   *
   * Empty
   * Bilinmeyen Hata (Microsoft / CloudFlare): Bu durum kodu herhangi bir RFC'de belirtilmemiş ve bazı hizmetler tarafından döndürülür, örneğin Microsoft Azure ve CloudFlare sunucuları: "520 hatası temelde kaynak sunucunun beklenmeyen bir şey döndürdüğü veya tolere edilmeyen/yorumlanamayan (protokol ihlali veya boş yanıt) bir "genel kapsayıcı" yanıtıdır." 
   */
  h520 = 'Bilinmeyen Hata (Microsoft / CloudFlare): Bu durum kodu herhangi bir RFC\'de belirtilmemiş ve bazı hizmetler tarafından döndürülür, örneğin Microsoft Azure ve CloudFlare sunucuları: "520 hatası temelde kaynak sunucunun beklenmeyen bir şey döndürdüğü veya tolere edilmeyen/yorumlanamayan (protokol ihlali veya boş yanıt) bir "genel kapsayıcı" yanıtıdır." ',
  /**
   * h521: 
   *
   * Empty
   * Web Sunucusu Çalışmıyor (CloudFlare): Orijinal sunucu CloudFlare'den gelen bağlantıyı reddetti. 
   */
  h521 = 'Web Sunucusu Çalışmıyor (CloudFlare): Orijinal sunucu CloudFlare\'den gelen bağlantıyı reddetti. ',
  /**
   * h522: 
   *
   * Empty
   * Bağlantı Zaman Aşımı (CloudFlare): CloudFlare, kaynak sunucu ile bir TCP el sıkışması yapamadı. 
   */
  h522 = 'Bağlantı Zaman Aşımı (CloudFlare): CloudFlare, kaynak sunucu ile bir TCP el sıkışması yapamadı. ',
  /**
   * h523: 
   *
   * Empty
   * Kaynak Ulaşılamaz (CloudFlare): CloudFlare kaynak sunucuya ulaşamadı; örneğin, kaynak sunucunun DNS kayıtları yanlışsa. 
   */
  h523 = 'Kaynak Ulaşılamaz (CloudFlare): CloudFlare kaynak sunucuya ulaşamadı; örneğin, kaynak sunucunun DNS kayıtları yanlışsa. ',
  /**
   * h524: 
   *
   * Empty
   * Bir Süre Geçti (CloudFlare): CloudFlare kaynak sunucuya bir TCP bağlantısı oluşturabildi, ancak zamanında bir HTTP yanıtı alamadı. 
   */
  h524 = 'Bir Süre Geçti (CloudFlare): CloudFlare kaynak sunucuya bir TCP bağlantısı oluşturabildi, ancak zamanında bir HTTP yanıtı alamadı. ',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): CloudFlare, kaynak sunucusu ile bir SSL/TLS el sıkışması yapamadı. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare): CloudFlare, kaynak sunucusu ile bir SSL/TLS el sıkışması yapamadı. ',
  /**
   * h526: 
   *
   * Empty
   * Geçersiz SSL Sertifikası (CloudFlare): CloudFlare, kaynak sunucunun sunduğu SSL/TLS sertifikasını doğrulayamadı. 
   */
  h526 = 'Geçersiz SSL Sertifikası (CloudFlare): CloudFlare, kaynak sunucunun sunduğu SSL/TLS sertifikasını doğrulayamadı. ',
  /**
   * h527: 
   *
   * Empty
   * Railgun Hatası (CloudFlare): WAN bağlantısı kurulduktan sonra istek zaman aşımına uğradı veya başarısız oldu. 
   */
  h527 = 'Railgun Hatası (CloudFlare): WAN bağlantısı kurulduktan sonra istek zaman aşımına uğradı veya başarısız oldu. '
}
