/**
* © 2024 aiyoudiao
*
* File ini dibuat oleh aiyoudiao, yang mengandung banyak kerja keras dan kebijaksanaan.
*
* Anda bebas menggunakan, memodifikasi, dan mendistribusikan file ini, tetapi harap simpan pemberitahuan hak cipta ini.
*
* Jika Anda merasa file ini membantu, silakan beri saya bintang atau ikuti saya ツ.
*
* Kontak:
* - Email:,newdiao@163.com,
* - GitHub:,https://github.com/aiyoudiao,
*
* Selamat mengcoding! Ingat, kode adalah puisi, dan front-end adalah seni. ツ
*/
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan. 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Beralih protokol: Pemohon telah meminta server untuk beralih protokol dan server mengakui bahwa itu akan melakukannya. 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Pengolahan: Server telah menerima dan sedang memproses permintaan, tetapi belum ada respons yang tersedia. 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Respon standar untuk permintaan HTTP yang berhasil.
   * Berhasil: Respon standar untuk permintaan HTTP yang berhasil. 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Dibuat: Permintaan telah terpenuhi dan sumber daya baru telah dibuat. 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses. 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informasi non-otoritatif: HTTP 1.1. Server berhasil memproses permintaan tetapi mengembalikan informasi dari sumber lain. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Tidak ada konten: Server menerima permintaan tetapi tidak mengembalikan konten apa pun. Ini sering digunakan sebagai respons untuk permintaan DELETE. 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset konten: Mirip dengan respons 204 Tidak Ada Konten, tetapi respons ini mengharuskan pemohon untuk mengatur ulang tampilan dokumen. 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Partial content: Server hanya memberikan sebagian konten, seperti yang diminta oleh klien melalui header range. 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Tubuh pesan berikutnya adalah pesan XML dan dapat berisi sejumlah kode respons terpisah, tergantung pada berapa banyak permintaan anak yang dikirim. 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Sudah dilaporkan: Anggota dari ikatan DAV telah dihitung sebelumnya dalam balasan sebelumnya untuk permintaan ini, dan tidak disertakan lagi. 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM digunakan: Server telah memenuhi permintaan GET untuk sumber daya, dan responsnya merupakan representasi hasil dari satu atau lebih manipulasi instance yang diterapkan pada instance saat ini. 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Pilihan ganda: Ada beberapa opsi yang mungkin diikuti oleh klien. 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Pindah permanen: Sumber daya telah dipindahkan dan semua permintaan selanjutnya harus mengacu pada URI barunya. 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Ditemukan: Spesifikasi HTTP 1.0 menggambarkan status ini sebagai "Pindah Sementara", tetapi browser populer merespons status ini serupa dengan perilaku yang dimaksudkan untuk 303. Sumber daya dapat diambil dengan merujuk ke URI yang dikembalikan. 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lihat lainnya: Sumber daya dapat diambil dengan mengikuti URI lain menggunakan metode GET. Ketika diterima sebagai respons untuk permintaan POST, PUT, atau DELETE, biasanya dapat diasumsikan bahwa server telah berhasil memproses permintaan tersebut dan mengarahkan klien ke titik akhir informasional. 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Tidak dimodifikasi: Sumber daya tidak dimodifikasi sejak versi yang ditentukan dalam header If-Modified-Since atau If-Match. Sumber daya tidak akan dikembalikan dalam badan respons. 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Gunakan proxy: HTTP 1.1. Sumber daya hanya tersedia melalui proxy dan alamatnya diberikan dalam respons. 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Switch proxy: Didepresiasi dalam HTTP 1.1. Digunakan untuk berarti bahwa permintaan berikutnya harus dikirim menggunakan proxy yang ditentukan. 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Pengalihan sementara: HTTP 1.1. Permintaan harus diulang dengan URI yang diberikan dalam respons, tetapi permintaan di masa depan tetap harus memanggil URI asli. 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Kode ini digunakan dalam Proposal Permintaan HTTP yang Dapat Diatur Ulang untuk melanjutkan permintaan PUT atau POST yang terputus
   * Permanen Redirect: Permintaan dan semua permintaan di masa depan harus dikirim ulang menggunakan URI yang disediakan dalam respons. 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Permintaan salah: Permintaan tidak dapat dipenuhi karena sintaks permintaan yang tidak benar. 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Tidak Diizinkan: Pemohon tidak diizinkan mengakses sumber daya. Ini mirip dengan 403 tetapi digunakan dalam kasus ketika autentikasi diharapkan tetapi telah gagal atau tidak diberikan. 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pembayaran diperlukan: Dipesan untuk penggunaan di masa depan. Beberapa layanan web menggunakan ini sebagai indikasi bahwa klien telah mengirim jumlah permintaan yang berlebihan. 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Dilarang: Permintaan diformat dengan benar tetapi server menolak untuk menyediakan sumber daya yang diminta. Tidak seperti 401, melakukan autentikasi tidak akan membuat perbedaan dalam respons server. 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Tidak ditemukan: Sumber daya tidak dapat ditemukan. Ini sering digunakan sebagai penyelesaian untuk semua URI yang tidak valid yang diminta oleh server. 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metode tidak diizinkan: Sumber daya diminta menggunakan metode yang tidak diizinkan. Misalnya, meminta sumber daya melalui metode POST ketika sumber daya hanya mendukung metode GET. 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Tidak dapat diterima: Sumber daya tersebut valid, tetapi tidak dapat disediakan dalam format yang ditentukan dalam header Accept dalam permintaan. 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autentikasi proxy diperlukan: Autentikasi diperlukan dengan proxy sebelum permintaan dapat dipenuhi. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout permintaan: Server melebihi waktu tunggu untuk permintaan dari klien. Klien diizinkan untuk mengulang permintaan. 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Konflik: Permintaan tidak dapat diselesaikan karena terdapat konflik pada parameter permintaan. 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Menghilang: Sumber daya tidak lagi tersedia di URI yang diminta dan tidak akan diberikan pengalihan. 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Panjang yang diperlukan: Permintaan tidak menentukan panjang kontennya seperti yang diminta oleh sumber daya. 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Kondisi awal gagal: Server tidak memenuhi salah satu kondisi awal yang ditentukan oleh klien. 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entitas permintaan terlalu besar: Isi permintaan lebih besar daripada apa yang dapat diproses oleh server. 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Request-URI terlalu panjang: URI yang disediakan dalam permintaan terlalu panjang untuk diproses oleh server. Ini sering digunakan ketika terlalu banyak data telah dikodekan ke dalam URI permintaan GET dan sebaiknya permintaan POST digunakan sebagai gantinya. 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Jenis media tidak didukung: Data yang diberikan oleh klien memiliki jenis media yang tidak didukung oleh server. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Rentang yang diminta tidak dapat dipenuhi: Klien telah meminta sebagian sumber daya tetapi server tidak dapat menyediakan bagian itu. 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Harapan gagal: Server tidak dapat memenuhi persyaratan bidang header permintaan Expect. 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Saya adalah teko: Setiap upaya untuk merebus kopi dengan teko harus menghasilkan kode kesalahan "418 Saya adalah teko". Tubuh entitas yang dihasilkan BISA jadi pendek dan gemuk. 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Permintaan salah arah: Permintaan diarahkan ke server yang tidak dapat memberikan respons. Status ini dapat dikirim oleh server yang tidak dikonfigurasi untuk memberikan respons untuk kombinasi skema dan otorisasi yang termasuk dalam URI permintaan. 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entitas tidak dapat diproses: Permintaan diformat dengan benar tetapi tidak dapat diproses dalam bentuk saat ini. Sering digunakan saat parameter yang ditentukan gagal dalam kesalahan validasi. 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Terkunci: Sumber daya yang diminta ditemukan tetapi telah terkunci dan tidak akan dikembalikan. 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Ketergantungan gagal: Permintaan gagal karena kegagalan permintaan sebelumnya. 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Diperlukan peningkatan: Klien harus mengulangi permintaan dengan menggunakan protokol yang telah ditingkatkan seperti TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Persyaratan prakondisi diperlukan: Server asal mengharuskan permintaan bersifat kondisional. 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Terlalu banyak permintaan: Pengguna telah mengirim terlalu banyak permintaan dalam jumlah waktu tertentu ("pembatasan kecepatan"). 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Bidang header permintaan terlalu besar: Server tidak bersedia memproses permintaan karena bidang header-nya terlalu besar. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Timeout Login (Microsoft): Sebuah ekstensi Microsoft. Menunjukkan bahwa sesi Anda telah kedaluwarsa. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Tidak Ada Respon (Nginx): Digunakan dalam log Nginx untuk menunjukkan bahwa server tidak mengembalikan informasi apa pun ke klien dan menutup koneksi (berguna sebagai pencegah untuk malware dalam skenario protokol transfer hiperteks). 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry With (Microsoft): Ekstensi Microsoft. Permintaan harus diulang setelah melakukan tindakan yang sesuai. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Diblokir oleh Kontrol Orang Tua Windows (Microsoft): Sebuah ekstensi Microsoft. Kesalahan ini diberikan ketika Kontrol Orang Tua Windows diaktifkan dan sedang memblokir akses ke halaman web tertentu. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Digunakan dalam Exchange ActiveSync jika ada server yang lebih efisien untuk digunakan atau server tidak dapat mengakses kotak surat pengguna. Karena alasan hukum tidak tersedia: Server tidak dapat beroperasi karena menerima permintaan pembatasan hukum. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Header permintaan terlalu besar (Nginx): Kode internal Nginx yang mirip dengan 431 tetapi dikenalkan lebih awal dalam versi 0.9.4 (pada tanggal 21 Januari 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Galat Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika terjadi galat sertifikat klien SSL untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * Tanpa Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika klien tidak memberikan sertifikat untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP ke HTTPS (Nginx): Kode internal Nginx yang digunakan untuk permintaan HTTP biasa yang dikirim ke port HTTPS untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token kedaluwarsa/tidak valid (Esri): Dikembalikan oleh ArcGIS for Server. Kode 498 menunjukkan token yang telah kedaluwarsa atau tidak valid. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token diperlukan (Esri): Dikembalikan oleh ArcGIS for Server. Kode 499 menunjukkan bahwa token diperlukan (jika token tidak dikirimkan). 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Kesalahan server internal: Status umum untuk kesalahan dalam server itu sendiri. 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Tidak terimplementasi: Server tidak dapat menanggapi permintaan. Ini biasanya berarti bahwa server mungkin dapat mendukung permintaan tersebut di masa depan - jika tidak, kode status 4xx mungkin lebih tepat. 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad gateway: Server bertindak sebagai proxy dan tidak menerima respons yang dapat diterima dari server hulu. 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Layanan tidak tersedia: Server mati dan tidak menerima permintaan. 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout Gateway: Server berfungsi sebagai proxy dan tidak menerima respons dari server hulu. 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versi HTTP tidak didukung: Server tidak mendukung versi protokol HTTP yang ditentukan dalam permintaan. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant juga bernegosiasi: Negosiasi konten transparan untuk permintaan menghasilkan referensi siklus. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Kekurangan penyimpanan: Pengguna atau server tidak memiliki kuota penyimpanan yang cukup untuk memenuhi permintaan. 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Terdeteksi loop: Server mendeteksi loop tak terbatas dalam permintaan. 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Batas Bandwidth Terlampaui (Ekstensi bw/terbatas Apache): Kode status ini tidak ditentukan dalam RFC apa pun. Cara penggunaannya tidak diketahui. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Tidak diperpanjang: Perluasan lebih lanjut terhadap permintaan diperlukan agar dapat dipenuhi. 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autentikasi jaringan diperlukan: Klien harus melakukan autentikasi dengan jaringan sebelum mengirimkan permintaan. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Kesalahan Tidak Dikenal (Microsoft / CloudFlare): Kode status ini tidak ditentukan dalam RFC apa pun dan dikembalikan oleh beberapa layanan, misalnya server Microsoft Azure dan CloudFlare: "Kesalahan 520 pada dasarnya adalah respons 'penangkapan semua' untuk saat server asal mengembalikan sesuatu yang tidak terduga atau sesuatu yang tidak ditoleransi/diterjemahkan (pelanggaran protokol atau respons kosong)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Server asli menolak koneksi dari CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Connection Timed Out (CloudFlare): CloudFlare tidak bisa melakukan negosiasi handshake TCP dengan server asal. 
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
   * Timeout Terjadi (CloudFlare): CloudFlare dapat menyelesaikan koneksi TCP ke server asal, tetapi tidak menerima respons HTTP tepat waktu. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Gagal (CloudFlare): CloudFlare tidak dapat melakukan negosiasi handshake SSL/TLS dengan server asal. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Sertifikat SSL Tidak Valid (CloudFlare): CloudFlare tidak dapat memvalidasi sertifikat SSL/TLS yang disajikan oleh server asal. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Kesalahan Railgun (CloudFlare): Permintaan timeout atau gagal setelah koneksi WAN telah dibuat. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan. 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Beralih protokol: Pemohon telah meminta server untuk beralih protokol dan server mengakui bahwa itu akan melakukannya. 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Pengolahan: Server telah menerima dan sedang memproses permintaan, tetapi belum ada respons yang tersedia. 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Respon standar untuk permintaan HTTP yang berhasil.
   * Berhasil: Respon standar untuk permintaan HTTP yang berhasil. 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Dibuat: Permintaan telah terpenuhi dan sumber daya baru telah dibuat. 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses. 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informasi non-otoritatif: HTTP 1.1. Server berhasil memproses permintaan tetapi mengembalikan informasi dari sumber lain. 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Tidak ada konten: Server menerima permintaan tetapi tidak mengembalikan konten apa pun. Ini sering digunakan sebagai respons untuk permintaan DELETE. 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset konten: Mirip dengan respons 204 Tidak Ada Konten, tetapi respons ini mengharuskan pemohon untuk mengatur ulang tampilan dokumen. 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Partial content: Server hanya memberikan sebagian konten, seperti yang diminta oleh klien melalui header range. 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Tubuh pesan berikutnya adalah pesan XML dan dapat berisi sejumlah kode respons terpisah, tergantung pada berapa banyak permintaan anak yang dikirim. 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Sudah dilaporkan: Anggota dari ikatan DAV telah dihitung sebelumnya dalam balasan sebelumnya untuk permintaan ini, dan tidak disertakan lagi. 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM digunakan: Server telah memenuhi permintaan GET untuk sumber daya, dan responsnya merupakan representasi hasil dari satu atau lebih manipulasi instance yang diterapkan pada instance saat ini. 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Pilihan ganda: Ada beberapa opsi yang mungkin diikuti oleh klien. 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Pindah permanen: Sumber daya telah dipindahkan dan semua permintaan selanjutnya harus mengacu pada URI barunya. 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Ditemukan: Spesifikasi HTTP 1.0 menggambarkan status ini sebagai "Pindah Sementara", tetapi browser populer merespons status ini serupa dengan perilaku yang dimaksudkan untuk 303. Sumber daya dapat diambil dengan merujuk ke URI yang dikembalikan. 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lihat lainnya: Sumber daya dapat diambil dengan mengikuti URI lain menggunakan metode GET. Ketika diterima sebagai respons untuk permintaan POST, PUT, atau DELETE, biasanya dapat diasumsikan bahwa server telah berhasil memproses permintaan tersebut dan mengarahkan klien ke titik akhir informasional. 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Tidak dimodifikasi: Sumber daya tidak dimodifikasi sejak versi yang ditentukan dalam header If-Modified-Since atau If-Match. Sumber daya tidak akan dikembalikan dalam badan respons. 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Gunakan proxy: HTTP 1.1. Sumber daya hanya tersedia melalui proxy dan alamatnya diberikan dalam respons. 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * Switch proxy: Didepresiasi dalam HTTP 1.1. Digunakan untuk berarti bahwa permintaan berikutnya harus dikirim menggunakan proxy yang ditentukan. 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Pengalihan sementara: HTTP 1.1. Permintaan harus diulang dengan URI yang diberikan dalam respons, tetapi permintaan di masa depan tetap harus memanggil URI asli. 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Kode ini digunakan dalam Proposal Permintaan HTTP yang Dapat Diatur Ulang untuk melanjutkan permintaan PUT atau POST yang terputus
   * Permanen Redirect: Permintaan dan semua permintaan di masa depan harus dikirim ulang menggunakan URI yang disediakan dalam respons. 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Permintaan salah: Permintaan tidak dapat dipenuhi karena sintaks permintaan yang tidak benar. 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Tidak Diizinkan: Pemohon tidak diizinkan mengakses sumber daya. Ini mirip dengan 403 tetapi digunakan dalam kasus ketika autentikasi diharapkan tetapi telah gagal atau tidak diberikan. 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pembayaran diperlukan: Dipesan untuk penggunaan di masa depan. Beberapa layanan web menggunakan ini sebagai indikasi bahwa klien telah mengirim jumlah permintaan yang berlebihan. 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Dilarang: Permintaan diformat dengan benar tetapi server menolak untuk menyediakan sumber daya yang diminta. Tidak seperti 401, melakukan autentikasi tidak akan membuat perbedaan dalam respons server. 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Tidak ditemukan: Sumber daya tidak dapat ditemukan. Ini sering digunakan sebagai penyelesaian untuk semua URI yang tidak valid yang diminta oleh server. 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metode tidak diizinkan: Sumber daya diminta menggunakan metode yang tidak diizinkan. Misalnya, meminta sumber daya melalui metode POST ketika sumber daya hanya mendukung metode GET. 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Tidak dapat diterima: Sumber daya tersebut valid, tetapi tidak dapat disediakan dalam format yang ditentukan dalam header Accept dalam permintaan. 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autentikasi proxy diperlukan: Autentikasi diperlukan dengan proxy sebelum permintaan dapat dipenuhi. 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout permintaan: Server melebihi waktu tunggu untuk permintaan dari klien. Klien diizinkan untuk mengulang permintaan. 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Konflik: Permintaan tidak dapat diselesaikan karena terdapat konflik pada parameter permintaan. 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Menghilang: Sumber daya tidak lagi tersedia di URI yang diminta dan tidak akan diberikan pengalihan. 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Panjang yang diperlukan: Permintaan tidak menentukan panjang kontennya seperti yang diminta oleh sumber daya. 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Kondisi awal gagal: Server tidak memenuhi salah satu kondisi awal yang ditentukan oleh klien. 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entitas permintaan terlalu besar: Isi permintaan lebih besar daripada apa yang dapat diproses oleh server. 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Request-URI terlalu panjang: URI yang disediakan dalam permintaan terlalu panjang untuk diproses oleh server. Ini sering digunakan ketika terlalu banyak data telah dikodekan ke dalam URI permintaan GET dan sebaiknya permintaan POST digunakan sebagai gantinya. 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Jenis media tidak didukung: Data yang diberikan oleh klien memiliki jenis media yang tidak didukung oleh server. 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Rentang yang diminta tidak dapat dipenuhi: Klien telah meminta sebagian sumber daya tetapi server tidak dapat menyediakan bagian itu. 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Harapan gagal: Server tidak dapat memenuhi persyaratan bidang header permintaan Expect. 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * Saya adalah teko: Setiap upaya untuk merebus kopi dengan teko harus menghasilkan kode kesalahan "418 Saya adalah teko". Tubuh entitas yang dihasilkan BISA jadi pendek dan gemuk. 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Permintaan salah arah: Permintaan diarahkan ke server yang tidak dapat memberikan respons. Status ini dapat dikirim oleh server yang tidak dikonfigurasi untuk memberikan respons untuk kombinasi skema dan otorisasi yang termasuk dalam URI permintaan. 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entitas tidak dapat diproses: Permintaan diformat dengan benar tetapi tidak dapat diproses dalam bentuk saat ini. Sering digunakan saat parameter yang ditentukan gagal dalam kesalahan validasi. 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Terkunci: Sumber daya yang diminta ditemukan tetapi telah terkunci dan tidak akan dikembalikan. 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Ketergantungan gagal: Permintaan gagal karena kegagalan permintaan sebelumnya. 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Diperlukan peningkatan: Klien harus mengulangi permintaan dengan menggunakan protokol yang telah ditingkatkan seperti TLS 1.0. 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Persyaratan prakondisi diperlukan: Server asal mengharuskan permintaan bersifat kondisional. 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Terlalu banyak permintaan: Pengguna telah mengirim terlalu banyak permintaan dalam jumlah waktu tertentu ("pembatasan kecepatan"). 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Bidang header permintaan terlalu besar: Server tidak bersedia memproses permintaan karena bidang header-nya terlalu besar. 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * Timeout Login (Microsoft): Sebuah ekstensi Microsoft. Menunjukkan bahwa sesi Anda telah kedaluwarsa. 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * Tidak Ada Respon (Nginx): Digunakan dalam log Nginx untuk menunjukkan bahwa server tidak mengembalikan informasi apa pun ke klien dan menutup koneksi (berguna sebagai pencegah untuk malware dalam skenario protokol transfer hiperteks). 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * Retry With (Microsoft): Ekstensi Microsoft. Permintaan harus diulang setelah melakukan tindakan yang sesuai. 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * Diblokir oleh Kontrol Orang Tua Windows (Microsoft): Sebuah ekstensi Microsoft. Kesalahan ini diberikan ketika Kontrol Orang Tua Windows diaktifkan dan sedang memblokir akses ke halaman web tertentu. 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Digunakan dalam Exchange ActiveSync jika ada server yang lebih efisien untuk digunakan atau server tidak dapat mengakses kotak surat pengguna. Karena alasan hukum tidak tersedia: Server tidak dapat beroperasi karena menerima permintaan pembatasan hukum. 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * Header permintaan terlalu besar (Nginx): Kode internal Nginx yang mirip dengan 431 tetapi dikenalkan lebih awal dalam versi 0.9.4 (pada tanggal 21 Januari 2011). 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * Galat Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika terjadi galat sertifikat klien SSL untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * Tanpa Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika klien tidak memberikan sertifikat untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP ke HTTPS (Nginx): Kode internal Nginx yang digunakan untuk permintaan HTTP biasa yang dikirim ke port HTTPS untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * Token kedaluwarsa/tidak valid (Esri): Dikembalikan oleh ArcGIS for Server. Kode 498 menunjukkan token yang telah kedaluwarsa atau tidak valid. 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * Token diperlukan (Esri): Dikembalikan oleh ArcGIS for Server. Kode 499 menunjukkan bahwa token diperlukan (jika token tidak dikirimkan). 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Kesalahan server internal: Status umum untuk kesalahan dalam server itu sendiri. 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Tidak terimplementasi: Server tidak dapat menanggapi permintaan. Ini biasanya berarti bahwa server mungkin dapat mendukung permintaan tersebut di masa depan - jika tidak, kode status 4xx mungkin lebih tepat. 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad gateway: Server bertindak sebagai proxy dan tidak menerima respons yang dapat diterima dari server hulu. 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Layanan tidak tersedia: Server mati dan tidak menerima permintaan. 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout Gateway: Server berfungsi sebagai proxy dan tidak menerima respons dari server hulu. 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versi HTTP tidak didukung: Server tidak mendukung versi protokol HTTP yang ditentukan dalam permintaan. 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant juga bernegosiasi: Negosiasi konten transparan untuk permintaan menghasilkan referensi siklus. 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Kekurangan penyimpanan: Pengguna atau server tidak memiliki kuota penyimpanan yang cukup untuk memenuhi permintaan. 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Terdeteksi loop: Server mendeteksi loop tak terbatas dalam permintaan. 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * Batas Bandwidth Terlampaui (Ekstensi bw/terbatas Apache): Kode status ini tidak ditentukan dalam RFC apa pun. Cara penggunaannya tidak diketahui. 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Tidak diperpanjang: Perluasan lebih lanjut terhadap permintaan diperlukan agar dapat dipenuhi. 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autentikasi jaringan diperlukan: Klien harus melakukan autentikasi dengan jaringan sebelum mengirimkan permintaan. 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * Kesalahan Tidak Dikenal (Microsoft / CloudFlare): Kode status ini tidak ditentukan dalam RFC apa pun dan dikembalikan oleh beberapa layanan, misalnya server Microsoft Azure dan CloudFlare: "Kesalahan 520 pada dasarnya adalah respons 'penangkapan semua' untuk saat server asal mengembalikan sesuatu yang tidak terduga atau sesuatu yang tidak ditoleransi/diterjemahkan (pelanggaran protokol atau respons kosong)." 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Server asli menolak koneksi dari CloudFlare. 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * Connection Timed Out (CloudFlare): CloudFlare tidak bisa melakukan negosiasi handshake TCP dengan server asal. 
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
   * Timeout Terjadi (CloudFlare): CloudFlare dapat menyelesaikan koneksi TCP ke server asal, tetapi tidak menerima respons HTTP tepat waktu. 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Gagal (CloudFlare): CloudFlare tidak dapat melakukan negosiasi handshake SSL/TLS dengan server asal. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * Sertifikat SSL Tidak Valid (CloudFlare): CloudFlare tidak dapat memvalidasi sertifikat SSL/TLS yang disajikan oleh server asal. 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Kesalahan Railgun (CloudFlare): Permintaan timeout atau gagal setelah koneksi WAN telah dibuat. 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
