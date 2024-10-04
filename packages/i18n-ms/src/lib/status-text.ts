/**
 * © 2024 aiyoudiao
 *
 * Fail ini telah dicipta oleh aiyoudiao, mengandungi banyak kerja keras dan kebijaksanaan.
 *
 * Anda bebas untuk menggunakan, mengubah suai, dan mengedar fail ini, tetapi sila simpan notis hak cipta ini.
 *
 * Jika anda rasa fail ini membantu, sila berikan saya bintang atau ikuti saya ツ.
 *
 * Hubungi:
 * - Email:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 *
 * Selamat mengod! Ingat, kod adalah puisi, dan hadapan adalah seni. ツ
 */
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Teruskan: Pelayan telah menerima kepala permintaan, dan bahawa pelanggan harus meneruskan untuk menghantar badan permintaan. 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Beralih Protokol: Pengirim permintaan telah meminta pelayan untuk beralih protokol dan pelayan mengakui bahwa ia akan melakukannya. 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Proses: Pelayan telah menerima dan sedang memproses permintaan itu, tetapi belum ada respons yang tersedia. 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Respons standard untuk permintaan HTTP berjaya. 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Dicipta: Permintaan telah dipenuhi dan sumber baru telah dicipta. 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Diterima: Permintaan telah diterima tetapi belum diproses dengan lengkap. Kode ini tidak menjamin bahawa permintaan akan diproses dengan berjaya. 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Maklumat bukan berotoriti: HTTP 1.1. Pelayan berjaya memproses permintaan tetapi mengembalikan maklumat dari sumber lain. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Tiada kandungan: Pelayan menerima permintaan tetapi tidak mengembalikan sebarang kandungan. Ini sering digunakan sebagai respons kepada permintaan DELETE. 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset kandungan: Mirip dengan respons 204 Tidak Ada Kandungan, tetapi respons ini mewajibkan pemohon untuk menetapkan semula paparan dokumen. 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Isi separa: Server hanya memberikan sebahagian daripada kandungan seperti yang diminta oleh pelanggan melalui kepala julat (range header). 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Badan mesej yang berikutnya ialah mesej XML dan mungkin mengandungi sebilangan kod respons yang berasingan, bergantung kepada berapa banyak permintaan anak yang dibuat. 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Telah dilaporkan: Anggota ikatan DAV telah dihitung sebelumnya dalam jawaban sebelumnya untuk permintaan ini dan tidak akan termasuk lagi. 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * Penggunaan IM: Pelayan telah memenuhi permintaan GET untuk sumber itu, dan responsnya merupakan perwakilan hasil satu atau lebih manipulasi instans yang dikenakan pada instans semasa. 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Pilihan berganda: Terdapat beberapa pilihan yang boleh diikuti oleh pelanggan. 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Dialihkan secara tetap: Sumber daya telah dialihkan dan semua permintaan berikutnya harus merujuk ke URI barunya. 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Ditemukan: Spesifikasi HTTP 1.0 menggambarkan status ini sebagai "Pindah Sementara", tetapi browser populer merespons status ini mirip dengan perilaku yang dimaksudkan untuk 303. Sumber daya dapat diambil dengan mengacu pada URI yang dikembalikan. 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lihat lain: Sumber boleh diambil dengan mengikuti URI lain menggunakan kaedah GET. Apabila diterima sebagai respons kepada POST, PUT, atau DELETE, biasanya boleh dianggap bahawa pelayan telah memproses permintaan berjaya dan menghantar klien ke titik akhir informasi. 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Tidak dimodifikasi: Sumber daya tidak telah dimodifikasi sejak versi yang ditentukan dalam kepala If-Modified-Since atau If-Match. Sumber daya tidak akan dikembalikan dalam badan respons. 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Gunakan proksi: HTTP 1.1. Sumber daya hanya tersedia melalui proksi dan alamat diberikan dalam respons. 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Switch proxy: Tidak lagi digunakan dalam HTTP 1.1. Dulu digunakan untuk menunjukkan bahawa permintaan berikutnya harus dikirim menggunakan proksi yang ditentukan. 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Pengalihan Sementara: HTTP 1.1. Permintaan harus diulang dengan URI yang disediakan dalam respons, tetapi permintaan di masa depan tetap harus memanggil URI asal. 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Kod ini digunakan dalam Cadangan Permintaan HTTP yang Dapat Dilanjutkan untuk melanjutkan permintaan PUT atau POST yang dibatalkan.
   * Pencarian Permanen: Permintaan dan semua permintaan di masa depan harus dikirim ulang dengan menggunakan URI yang disediakan dalam respon. 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Permintaan tidak sah: Permintaan tidak dapat dipenuhi kerana sintaks permintaan tidak betul. 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Tidak Diizinkan: Pihak yang meminta tidak diizinkan untuk mengakses sumber daya. Ini mirip dengan 403 tetapi digunakan dalam kasus di mana autentikasi diharapkan tetapi telah gagal atau tidak diberikan. 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pembayaran diperlukan: Disimpan untuk kegunaan masa depan. Beberapa perkhidmatan web menggunakan ini sebagai petunjuk bahawa klien telah menghantar bilangan permintaan yang berlebihan. 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Dilarang: Permintaan diformatkan dengan betul tetapi pelayan enggan membekalkan sumber daya yang diminta. Tidak seperti 401, pengesahan tidak akan membuat perbezaan dalam respons pelayan. 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Tidak ditemukan: Sumber daya tidak dapat ditemukan. Ini sering digunakan sebagai penangkapan semua URI yang tidak sah yang diminta oleh server. 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metod tidak dibenarkan: Permintaan sumber daya dilakukan menggunakan metod yang tidak dibenarkan. Sebagai contoh, meminta sumber daya melalui metod POST apabila sumber daya tersebut hanya menyokong metod GET. 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Tidak diterima: Sumber daya ini sah, tetapi tidak dapat disediakan dalam format yang ditentukan dalam kepala Accept dalam permintaan. 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Pengesahan autentikasi proksi diperlukan: Autentikasi diperlukan dengan proksi sebelum permintaan dapat dipenuhi. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout permintaan: Pelayan telah habis masa menunggu permintaan daripada pelanggan. Pelanggan dibenarkan untuk mengulangi permintaan. 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   *  Konflik: Permintaan tidak dapat diselesaikan kerana konflik dalam parameter permintaan. 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Hilang: Sumber tidak lagi tersedia di URI yang diminta dan tidak akan diberikan pengalihan. 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Panjang diperlukan: Permintaan tidak menentukan panjang kandungan seperti yang diperlukan oleh sumber. 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Keadaan pra-syarat gagal: Server tidak memenuhi salah satu keadaan pra-syarat yang ditentukan oleh klien. 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entity permintaan terlalu besar: Isi permintaan lebih besar daripada kemampuan server untuk memproses. 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Permintaan URI terlalu panjang: URI yang disediakan dalam permintaan terlalu panjang untuk diproses oleh pelayan. Ini sering digunakan ketika terlalu banyak data telah dikodekan ke dalam URI permintaan GET dan permintaan POST harus digunakan sebagai gantinya. 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Jenis media tidak disokong: Data yang disediakan oleh klien mempunyai jenis media yang tidak disokong oleh pelayan. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Julat yang diminta tidak dapat dipenuhi: Pelanggan telah meminta sebahagian daripada sumber tetapi pelayan tidak boleh membekalkan bahagian itu. 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Harapan gagal: Server tidak dapat memenuhi keperluan medan kepala permintaan Expect. 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Saya adalah teko: Setiap percubaan untuk memasak kopi dengan teko harus menghasilkan kod ralat "418 Saya adalah teko". Badan entiti yang terhasil mungkin pendek dan tegap. 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Permintaan salah arah: Permintaan ditujukan ke server yang tidak mampu menghasilkan respons. Ini dapat dikirim oleh server yang tidak dikonfigurasi untuk menghasilkan respons untuk kombinasi skema dan otoritas yang termasuk dalam URI permintaan. 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entitas tidak dapat diproses: Permintaan diformatkan dengan benar tetapi tidak dapat diproses dalam bentuknya saat ini. Sering digunakan ketika parameter yang ditentukan gagal dalam kesalahan validasi. 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Kunci: Sumber daya yang diminta ditemukan tetapi telah dikunci dan tidak akan dikembalikan. 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Gagal berhutang: Permintaan gagal kerana kegagalan permintaan sebelumnya. 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Diperlukan naik taraf: Klien harus mengulangi permintaan dengan menggunakan protokol yang telah dinaik taraf seperti TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Keperluan prasyarat: Pelayan asal memerlukan permintaan itu bersyarat. 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Terlalu banyak permintaan: Pengguna telah mengirim terlalu banyak permintaan dalam jangka waktu tertentu ("batas kecepatan"). 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Bidang kepala permintaan terlalu besar: Server tidak bersedia memproses permintaan karena bidang kepalanya terlalu besar. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Login Timeout (Microsoft): Suatu lanjutan daripada Microsoft. Menunjukkan bahawa sesi anda telah luput. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Tidak Ada Respons (Nginx): Digunakan dalam log Nginx untuk menunjukkan bahawa pelayan tidak mengembalikan apa-apa maklumat kepada pelanggan dan menutup sambungan (berguna sebagai pencegah bagi perisian hasad). 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry Dengan (Microsoft): Ekstensi Microsoft. Permintaan harus diulangi setelah melakukan tindakan yang sesuai. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Disekat oleh Kawalan Ibu Bapa Windows (Microsoft): Satu sambungan Microsoft. Ralat ini diberikan apabila Kawalan Ibu Bapa Windows dihidupkan dan menghalang akses ke laman web tertentu. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Digunakan dalam Exchange ActiveSync jika terdapat server yang lebih efisien untuk digunakan atau server tidak dapat mengakses kotak surat pengguna.
   *
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Header Permintaan Terlalu Besar (Nginx): Kode internal Nginx serupa dengan 431 tetapi diperkenalkan sebelumnya dalam versi 0.9.4 (pada 21 Januari 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Ralat Sijil (Nginx): Kod dalaman Nginx yang digunakan apabila berlaku ralat sijil pelanggan SSL untuk membezakannya daripada 4XX dalam log dan pengalihan halaman ralat. 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * Tiada Sijil (Nginx): Kod dalaman Nginx yang digunakan apabila pelanggan tidak memberikan sijil untuk membezakan daripada 4XX dalam log dan penalaian halaman ralat. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP ke HTTPS (Nginx): Kod internal Nginx yang digunakan untuk permintaan HTTP biasa yang dikirim ke port HTTPS untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token telah tamat tempoh/tidak sah (Esri): Dikembalikan oleh ArcGIS for Server. Kod 498 menunjukkan token telah tamat tempoh atau tidak sah. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token diperlukan (Esri): Dikembalikan oleh ArcGIS untuk Server. Kod 499 menunjukkan bahawa token diperlukan (jika token tidak dikemukakan). 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Kesalahan server dalaman: Keadaan umum untuk kesalahan di dalam server itu sendiri pada skenario Protokol Pemindahan Hiperteks. 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Tidak diimplementasi: Server tidak dapat menanggapi permintaan. Ini biasanya menunjukkan bahawa server mungkin dapat menyokong permintaan ini pada masa depan - jika tidak, kode status 4xx mungkin lebih sesuai. 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Gerbang tidak baik: Server berfungsi sebagai proksi dan tidak menerima respons yang dapat diterima dari server hulu. 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Perkhidmatan tidak tersedia: Server mati dan tidak menerima permintaan. 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout gateway: Server berfungsi sebagai proksi dan tidak menerima respons dari server hulu. 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versi HTTP tidak didukung: Server tidak menyokong versi protokol HTTP yang ditentukan dalam permintaan. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant juga berunding: Negosiasi kandungan telus untuk permintaan menghasilkan rujukan bulat. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Kekurangan penyimpanan: Pengguna atau pelayan tidak mempunyai kuota penyimpanan yang mencukupi untuk memenuhi permintaan. 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Dikesan gelung: Pelayan mengesan gelung tanpa had dalam permintaan. 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Had Hadirnya Had Lintas Lebar (Pelanjutan bw/terhad Apache): Kod status ini tidak ditentukan dalam mana-mana RFC. Cara penggunaannya tidak diketahui. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Tidak diperpanjang: Perluasan lebih lanjut pada permintaan diperlukan agar dapat dipenuhi. 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autentikasi Jaringan Diperlukan: Klien harus melakukan autentikasi dengan jaringan sebelum mengirim permintaan. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Galat Tidak Diketahui (Microsoft / CloudFlare): Kod status ini tidak ditentukan dalam mana-mana RFC dan dikembalikan oleh perkhidmatan tertentu, seperti pelayan Microsoft Azure dan CloudFlare: "Ralat 520 pada dasarnya adalah respons 'catch-all' apabila pelayan asal mengembalikan sesuatu yang tidak dijangka atau sesuatu yang tidak diterima/ditafsir (pelanggaran protokol atau respons kosong)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Server asal menolak sambungan dari CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Timeout sambungan (CloudFlare): CloudFlare tidak dapat menyelesaikan genggaman TCP dengan pelayan asal. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin Tidak Dapat Diakses (CloudFlare): CloudFlare tidak dapat mencapai server asal; misalnya, jika catatan DNS untuk server asal tidak benar. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Timeout Berlaku (CloudFlare): CloudFlare mampu membuat sambungan TCP ke pelayan asal, tetapi tidak menerima respons HTTP tepat pada masanya. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Gagal (CloudFlare): CloudFlare tidak dapat bernegosiasi dengan server asal melalui SSL/TLS handshake. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Sijil SSL Tidak Sah (CloudFlare): CloudFlare tidak dapat mengesahkan sijil SSL/TLS yang disediakan oleh pelayan asal. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Kesalahan Railgun (CloudFlare): Permintaan telah habis waktu atau gagal setelah sambungan WAN telah ditubuhkan. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Teruskan: Pelayan telah menerima kepala permintaan, dan bahawa pelanggan harus meneruskan untuk menghantar badan permintaan. 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Beralih Protokol: Pengirim permintaan telah meminta pelayan untuk beralih protokol dan pelayan mengakui bahwa ia akan melakukannya. 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Proses: Pelayan telah menerima dan sedang memproses permintaan itu, tetapi belum ada respons yang tersedia. 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Respons standard untuk permintaan HTTP berjaya. 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Dicipta: Permintaan telah dipenuhi dan sumber baru telah dicipta. 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Diterima: Permintaan telah diterima tetapi belum diproses dengan lengkap. Kode ini tidak menjamin bahawa permintaan akan diproses dengan berjaya. 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Maklumat bukan berotoriti: HTTP 1.1. Pelayan berjaya memproses permintaan tetapi mengembalikan maklumat dari sumber lain. 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Tiada kandungan: Pelayan menerima permintaan tetapi tidak mengembalikan sebarang kandungan. Ini sering digunakan sebagai respons kepada permintaan DELETE. 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset kandungan: Mirip dengan respons 204 Tidak Ada Kandungan, tetapi respons ini mewajibkan pemohon untuk menetapkan semula paparan dokumen. 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Isi separa: Server hanya memberikan sebahagian daripada kandungan seperti yang diminta oleh pelanggan melalui kepala julat (range header). 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Badan mesej yang berikutnya ialah mesej XML dan mungkin mengandungi sebilangan kod respons yang berasingan, bergantung kepada berapa banyak permintaan anak yang dibuat. 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Telah dilaporkan: Anggota ikatan DAV telah dihitung sebelumnya dalam jawaban sebelumnya untuk permintaan ini dan tidak akan termasuk lagi. 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * Penggunaan IM: Pelayan telah memenuhi permintaan GET untuk sumber itu, dan responsnya merupakan perwakilan hasil satu atau lebih manipulasi instans yang dikenakan pada instans semasa. 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Pilihan berganda: Terdapat beberapa pilihan yang boleh diikuti oleh pelanggan. 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Dialihkan secara tetap: Sumber daya telah dialihkan dan semua permintaan berikutnya harus merujuk ke URI barunya. 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Ditemukan: Spesifikasi HTTP 1.0 menggambarkan status ini sebagai "Pindah Sementara", tetapi browser populer merespons status ini mirip dengan perilaku yang dimaksudkan untuk 303. Sumber daya dapat diambil dengan mengacu pada URI yang dikembalikan. 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lihat lain: Sumber boleh diambil dengan mengikuti URI lain menggunakan kaedah GET. Apabila diterima sebagai respons kepada POST, PUT, atau DELETE, biasanya boleh dianggap bahawa pelayan telah memproses permintaan berjaya dan menghantar klien ke titik akhir informasi. 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Tidak dimodifikasi: Sumber daya tidak telah dimodifikasi sejak versi yang ditentukan dalam kepala If-Modified-Since atau If-Match. Sumber daya tidak akan dikembalikan dalam badan respons. 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Gunakan proksi: HTTP 1.1. Sumber daya hanya tersedia melalui proksi dan alamat diberikan dalam respons. 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * Switch proxy: Tidak lagi digunakan dalam HTTP 1.1. Dulu digunakan untuk menunjukkan bahawa permintaan berikutnya harus dikirim menggunakan proksi yang ditentukan. 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Pengalihan Sementara: HTTP 1.1. Permintaan harus diulang dengan URI yang disediakan dalam respons, tetapi permintaan di masa depan tetap harus memanggil URI asal. 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Kod ini digunakan dalam Cadangan Permintaan HTTP yang Dapat Dilanjutkan untuk melanjutkan permintaan PUT atau POST yang dibatalkan.
   * Pencarian Permanen: Permintaan dan semua permintaan di masa depan harus dikirim ulang dengan menggunakan URI yang disediakan dalam respon. 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Permintaan tidak sah: Permintaan tidak dapat dipenuhi kerana sintaks permintaan tidak betul. 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Tidak Diizinkan: Pihak yang meminta tidak diizinkan untuk mengakses sumber daya. Ini mirip dengan 403 tetapi digunakan dalam kasus di mana autentikasi diharapkan tetapi telah gagal atau tidak diberikan. 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pembayaran diperlukan: Disimpan untuk kegunaan masa depan. Beberapa perkhidmatan web menggunakan ini sebagai petunjuk bahawa klien telah menghantar bilangan permintaan yang berlebihan. 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Dilarang: Permintaan diformatkan dengan betul tetapi pelayan enggan membekalkan sumber daya yang diminta. Tidak seperti 401, pengesahan tidak akan membuat perbezaan dalam respons pelayan. 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Tidak ditemukan: Sumber daya tidak dapat ditemukan. Ini sering digunakan sebagai penangkapan semua URI yang tidak sah yang diminta oleh server. 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metod tidak dibenarkan: Permintaan sumber daya dilakukan menggunakan metod yang tidak dibenarkan. Sebagai contoh, meminta sumber daya melalui metod POST apabila sumber daya tersebut hanya menyokong metod GET. 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Tidak diterima: Sumber daya ini sah, tetapi tidak dapat disediakan dalam format yang ditentukan dalam kepala Accept dalam permintaan. 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Pengesahan autentikasi proksi diperlukan: Autentikasi diperlukan dengan proksi sebelum permintaan dapat dipenuhi. 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout permintaan: Pelayan telah habis masa menunggu permintaan daripada pelanggan. Pelanggan dibenarkan untuk mengulangi permintaan. 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   *  Konflik: Permintaan tidak dapat diselesaikan kerana konflik dalam parameter permintaan. 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Hilang: Sumber tidak lagi tersedia di URI yang diminta dan tidak akan diberikan pengalihan. 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Panjang diperlukan: Permintaan tidak menentukan panjang kandungan seperti yang diperlukan oleh sumber. 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Keadaan pra-syarat gagal: Server tidak memenuhi salah satu keadaan pra-syarat yang ditentukan oleh klien. 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entity permintaan terlalu besar: Isi permintaan lebih besar daripada kemampuan server untuk memproses. 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Permintaan URI terlalu panjang: URI yang disediakan dalam permintaan terlalu panjang untuk diproses oleh pelayan. Ini sering digunakan ketika terlalu banyak data telah dikodekan ke dalam URI permintaan GET dan permintaan POST harus digunakan sebagai gantinya. 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Jenis media tidak disokong: Data yang disediakan oleh klien mempunyai jenis media yang tidak disokong oleh pelayan. 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Julat yang diminta tidak dapat dipenuhi: Pelanggan telah meminta sebahagian daripada sumber tetapi pelayan tidak boleh membekalkan bahagian itu. 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Harapan gagal: Server tidak dapat memenuhi keperluan medan kepala permintaan Expect. 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * Saya adalah teko: Setiap percubaan untuk memasak kopi dengan teko harus menghasilkan kod ralat "418 Saya adalah teko". Badan entiti yang terhasil mungkin pendek dan tegap. 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Permintaan salah arah: Permintaan ditujukan ke server yang tidak mampu menghasilkan respons. Ini dapat dikirim oleh server yang tidak dikonfigurasi untuk menghasilkan respons untuk kombinasi skema dan otoritas yang termasuk dalam URI permintaan. 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entitas tidak dapat diproses: Permintaan diformatkan dengan benar tetapi tidak dapat diproses dalam bentuknya saat ini. Sering digunakan ketika parameter yang ditentukan gagal dalam kesalahan validasi. 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Kunci: Sumber daya yang diminta ditemukan tetapi telah dikunci dan tidak akan dikembalikan. 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Gagal berhutang: Permintaan gagal kerana kegagalan permintaan sebelumnya. 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Diperlukan naik taraf: Klien harus mengulangi permintaan dengan menggunakan protokol yang telah dinaik taraf seperti TLS 1.0. 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Keperluan prasyarat: Pelayan asal memerlukan permintaan itu bersyarat. 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Terlalu banyak permintaan: Pengguna telah mengirim terlalu banyak permintaan dalam jangka waktu tertentu ("batas kecepatan"). 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Bidang kepala permintaan terlalu besar: Server tidak bersedia memproses permintaan karena bidang kepalanya terlalu besar. 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * Login Timeout (Microsoft): Suatu lanjutan daripada Microsoft. Menunjukkan bahawa sesi anda telah luput. 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * Tidak Ada Respons (Nginx): Digunakan dalam log Nginx untuk menunjukkan bahawa pelayan tidak mengembalikan apa-apa maklumat kepada pelanggan dan menutup sambungan (berguna sebagai pencegah bagi perisian hasad). 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * Retry Dengan (Microsoft): Ekstensi Microsoft. Permintaan harus diulangi setelah melakukan tindakan yang sesuai. 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * Disekat oleh Kawalan Ibu Bapa Windows (Microsoft): Satu sambungan Microsoft. Ralat ini diberikan apabila Kawalan Ibu Bapa Windows dihidupkan dan menghalang akses ke laman web tertentu. 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Digunakan dalam Exchange ActiveSync jika terdapat server yang lebih efisien untuk digunakan atau server tidak dapat mengakses kotak surat pengguna.
   *
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * Header Permintaan Terlalu Besar (Nginx): Kode internal Nginx serupa dengan 431 tetapi diperkenalkan sebelumnya dalam versi 0.9.4 (pada 21 Januari 2011). 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * Ralat Sijil (Nginx): Kod dalaman Nginx yang digunakan apabila berlaku ralat sijil pelanggan SSL untuk membezakannya daripada 4XX dalam log dan pengalihan halaman ralat. 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * Tiada Sijil (Nginx): Kod dalaman Nginx yang digunakan apabila pelanggan tidak memberikan sijil untuk membezakan daripada 4XX dalam log dan penalaian halaman ralat. 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP ke HTTPS (Nginx): Kod internal Nginx yang digunakan untuk permintaan HTTP biasa yang dikirim ke port HTTPS untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * Token telah tamat tempoh/tidak sah (Esri): Dikembalikan oleh ArcGIS for Server. Kod 498 menunjukkan token telah tamat tempoh atau tidak sah. 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * Token diperlukan (Esri): Dikembalikan oleh ArcGIS untuk Server. Kod 499 menunjukkan bahawa token diperlukan (jika token tidak dikemukakan). 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Kesalahan server dalaman: Keadaan umum untuk kesalahan di dalam server itu sendiri pada skenario Protokol Pemindahan Hiperteks. 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Tidak diimplementasi: Server tidak dapat menanggapi permintaan. Ini biasanya menunjukkan bahawa server mungkin dapat menyokong permintaan ini pada masa depan - jika tidak, kode status 4xx mungkin lebih sesuai. 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Gerbang tidak baik: Server berfungsi sebagai proksi dan tidak menerima respons yang dapat diterima dari server hulu. 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Perkhidmatan tidak tersedia: Server mati dan tidak menerima permintaan. 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout gateway: Server berfungsi sebagai proksi dan tidak menerima respons dari server hulu. 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versi HTTP tidak didukung: Server tidak menyokong versi protokol HTTP yang ditentukan dalam permintaan. 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant juga berunding: Negosiasi kandungan telus untuk permintaan menghasilkan rujukan bulat. 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Kekurangan penyimpanan: Pengguna atau pelayan tidak mempunyai kuota penyimpanan yang mencukupi untuk memenuhi permintaan. 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Dikesan gelung: Pelayan mengesan gelung tanpa had dalam permintaan. 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * Had Hadirnya Had Lintas Lebar (Pelanjutan bw/terhad Apache): Kod status ini tidak ditentukan dalam mana-mana RFC. Cara penggunaannya tidak diketahui. 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Tidak diperpanjang: Perluasan lebih lanjut pada permintaan diperlukan agar dapat dipenuhi. 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autentikasi Jaringan Diperlukan: Klien harus melakukan autentikasi dengan jaringan sebelum mengirim permintaan. 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * Galat Tidak Diketahui (Microsoft / CloudFlare): Kod status ini tidak ditentukan dalam mana-mana RFC dan dikembalikan oleh perkhidmatan tertentu, seperti pelayan Microsoft Azure dan CloudFlare: "Ralat 520 pada dasarnya adalah respons 'catch-all' apabila pelayan asal mengembalikan sesuatu yang tidak dijangka atau sesuatu yang tidak diterima/ditafsir (pelanggaran protokol atau respons kosong)." 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Server asal menolak sambungan dari CloudFlare. 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * Timeout sambungan (CloudFlare): CloudFlare tidak dapat menyelesaikan genggaman TCP dengan pelayan asal. 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * Origin Tidak Dapat Diakses (CloudFlare): CloudFlare tidak dapat mencapai server asal; misalnya, jika catatan DNS untuk server asal tidak benar. 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * Timeout Berlaku (CloudFlare): CloudFlare mampu membuat sambungan TCP ke pelayan asal, tetapi tidak menerima respons HTTP tepat pada masanya. 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Gagal (CloudFlare): CloudFlare tidak dapat bernegosiasi dengan server asal melalui SSL/TLS handshake. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * Sijil SSL Tidak Sah (CloudFlare): CloudFlare tidak dapat mengesahkan sijil SSL/TLS yang disediakan oleh pelayan asal. 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Kesalahan Railgun (CloudFlare): Permintaan telah habis waktu atau gagal setelah sambungan WAN telah ditubuhkan. 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
