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
export enum HttpStatusDescription {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan. 
   */
  CONTINUE = 'Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan. ',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Beralih protokol: Pemohon telah meminta server untuk beralih protokol dan server mengakui bahwa itu akan melakukannya. 
   */
  SWITCHING_PROTOCOLS = 'Beralih protokol: Pemohon telah meminta server untuk beralih protokol dan server mengakui bahwa itu akan melakukannya. ',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Pengolahan: Server telah menerima dan sedang memproses permintaan, tetapi belum ada respons yang tersedia. 
   */
  PROCESSING = 'Pengolahan: Server telah menerima dan sedang memproses permintaan, tetapi belum ada respons yang tersedia. ',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Respon standar untuk permintaan HTTP yang berhasil.
   * Berhasil: Respon standar untuk permintaan HTTP yang berhasil. 
   */
  OK = 'OK: Respon standar untuk permintaan HTTP yang berhasil.\n\
Berhasil: Respon standar untuk permintaan HTTP yang berhasil. ',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Dibuat: Permintaan telah terpenuhi dan sumber daya baru telah dibuat. 
   */
  CREATED = 'Dibuat: Permintaan telah terpenuhi dan sumber daya baru telah dibuat. ',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses. 
   */
  ACCEPTED = 'Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses. ',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informasi non-otoritatif: HTTP 1.1. Server berhasil memproses permintaan tetapi mengembalikan informasi dari sumber lain. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Informasi non-otoritatif: HTTP 1.1. Server berhasil memproses permintaan tetapi mengembalikan informasi dari sumber lain. ',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Tidak ada konten: Server menerima permintaan tetapi tidak mengembalikan konten apa pun. Ini sering digunakan sebagai respons untuk permintaan DELETE. 
   */
  NO_CONTENT = 'Tidak ada konten: Server menerima permintaan tetapi tidak mengembalikan konten apa pun. Ini sering digunakan sebagai respons untuk permintaan DELETE. ',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset konten: Mirip dengan respons 204 Tidak Ada Konten, tetapi respons ini mengharuskan pemohon untuk mengatur ulang tampilan dokumen. 
   */
  RESET_CONTENT = 'Reset konten: Mirip dengan respons 204 Tidak Ada Konten, tetapi respons ini mengharuskan pemohon untuk mengatur ulang tampilan dokumen. ',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Partial content: Server hanya memberikan sebagian konten, seperti yang diminta oleh klien melalui header range. 
   */
  PARTIAL_CONTENT = 'Partial content: Server hanya memberikan sebagian konten, seperti yang diminta oleh klien melalui header range. ',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Tubuh pesan berikutnya adalah pesan XML dan dapat berisi sejumlah kode respons terpisah, tergantung pada berapa banyak permintaan anak yang dikirim. 
   */
  MULTI_STATUS = 'Multi-status: Tubuh pesan berikutnya adalah pesan XML dan dapat berisi sejumlah kode respons terpisah, tergantung pada berapa banyak permintaan anak yang dikirim. ',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Sudah dilaporkan: Anggota dari ikatan DAV telah dihitung sebelumnya dalam balasan sebelumnya untuk permintaan ini, dan tidak disertakan lagi. 
   */
  ALREADY_REPORTED = 'Sudah dilaporkan: Anggota dari ikatan DAV telah dihitung sebelumnya dalam balasan sebelumnya untuk permintaan ini, dan tidak disertakan lagi. ',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM digunakan: Server telah memenuhi permintaan GET untuk sumber daya, dan responsnya merupakan representasi hasil dari satu atau lebih manipulasi instance yang diterapkan pada instance saat ini. 
   */
  IM_USED = 'IM digunakan: Server telah memenuhi permintaan GET untuk sumber daya, dan responsnya merupakan representasi hasil dari satu atau lebih manipulasi instance yang diterapkan pada instance saat ini. ',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Pilihan ganda: Ada beberapa opsi yang mungkin diikuti oleh klien. 
   */
  MULTIPLE_CHOICES = 'Pilihan ganda: Ada beberapa opsi yang mungkin diikuti oleh klien. ',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Pindah permanen: Sumber daya telah dipindahkan dan semua permintaan selanjutnya harus mengacu pada URI barunya. 
   */
  MOVED_PERMANENTLY = 'Pindah permanen: Sumber daya telah dipindahkan dan semua permintaan selanjutnya harus mengacu pada URI barunya. ',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Ditemukan: Spesifikasi HTTP 1.0 menggambarkan status ini sebagai "Pindah Sementara", tetapi browser populer merespons status ini serupa dengan perilaku yang dimaksudkan untuk 303. Sumber daya dapat diambil dengan merujuk ke URI yang dikembalikan. 
   */
  FOUND = 'Ditemukan: Spesifikasi HTTP 1.0 menggambarkan status ini sebagai "Pindah Sementara", tetapi browser populer merespons status ini serupa dengan perilaku yang dimaksudkan untuk 303. Sumber daya dapat diambil dengan merujuk ke URI yang dikembalikan. ',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lihat lainnya: Sumber daya dapat diambil dengan mengikuti URI lain menggunakan metode GET. Ketika diterima sebagai respons untuk permintaan POST, PUT, atau DELETE, biasanya dapat diasumsikan bahwa server telah berhasil memproses permintaan tersebut dan mengarahkan klien ke titik akhir informasional. 
   */
  SEE_OTHER = 'Lihat lainnya: Sumber daya dapat diambil dengan mengikuti URI lain menggunakan metode GET. Ketika diterima sebagai respons untuk permintaan POST, PUT, atau DELETE, biasanya dapat diasumsikan bahwa server telah berhasil memproses permintaan tersebut dan mengarahkan klien ke titik akhir informasional. ',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Tidak dimodifikasi: Sumber daya tidak dimodifikasi sejak versi yang ditentukan dalam header If-Modified-Since atau If-Match. Sumber daya tidak akan dikembalikan dalam badan respons. 
   */
  NOT_MODIFIED = 'Tidak dimodifikasi: Sumber daya tidak dimodifikasi sejak versi yang ditentukan dalam header If-Modified-Since atau If-Match. Sumber daya tidak akan dikembalikan dalam badan respons. ',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Gunakan proxy: HTTP 1.1. Sumber daya hanya tersedia melalui proxy dan alamatnya diberikan dalam respons. 
   */
  USE_PROXY = 'Gunakan proxy: HTTP 1.1. Sumber daya hanya tersedia melalui proxy dan alamatnya diberikan dalam respons. ',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Switch proxy: Didepresiasi dalam HTTP 1.1. Digunakan untuk berarti bahwa permintaan berikutnya harus dikirim menggunakan proxy yang ditentukan. 
   */
  SWITCH_PROXY = 'Switch proxy: Didepresiasi dalam HTTP 1.1. Digunakan untuk berarti bahwa permintaan berikutnya harus dikirim menggunakan proxy yang ditentukan. ',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Pengalihan sementara: HTTP 1.1. Permintaan harus diulang dengan URI yang diberikan dalam respons, tetapi permintaan di masa depan tetap harus memanggil URI asli. 
   */
  TEMPORARY_REDIRECT = 'Pengalihan sementara: HTTP 1.1. Permintaan harus diulang dengan URI yang diberikan dalam respons, tetapi permintaan di masa depan tetap harus memanggil URI asli. ',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Kode ini digunakan dalam Proposal Permintaan HTTP yang Dapat Diatur Ulang untuk melanjutkan permintaan PUT atau POST yang terputus
   * Permanen Redirect: Permintaan dan semua permintaan di masa depan harus dikirim ulang menggunakan URI yang disediakan dalam respons. 
   */
  PERMANENT_REDIRECT = 'Resume Incomplete (Google): Kode ini digunakan dalam Proposal Permintaan HTTP yang Dapat Diatur Ulang untuk melanjutkan permintaan PUT atau POST yang terputus\n\
Permanen Redirect: Permintaan dan semua permintaan di masa depan harus dikirim ulang menggunakan URI yang disediakan dalam respons. ',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Permintaan salah: Permintaan tidak dapat dipenuhi karena sintaks permintaan yang tidak benar. 
   */
  BAD_REQUEST = 'Permintaan salah: Permintaan tidak dapat dipenuhi karena sintaks permintaan yang tidak benar. ',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Tidak Diizinkan: Pemohon tidak diizinkan mengakses sumber daya. Ini mirip dengan 403 tetapi digunakan dalam kasus ketika autentikasi diharapkan tetapi telah gagal atau tidak diberikan. 
   */
  UNAUTHORIZED = 'Tidak Diizinkan: Pemohon tidak diizinkan mengakses sumber daya. Ini mirip dengan 403 tetapi digunakan dalam kasus ketika autentikasi diharapkan tetapi telah gagal atau tidak diberikan. ',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pembayaran diperlukan: Dipesan untuk penggunaan di masa depan. Beberapa layanan web menggunakan ini sebagai indikasi bahwa klien telah mengirim jumlah permintaan yang berlebihan. 
   */
  PAYMENT_REQUIRED = 'Pembayaran diperlukan: Dipesan untuk penggunaan di masa depan. Beberapa layanan web menggunakan ini sebagai indikasi bahwa klien telah mengirim jumlah permintaan yang berlebihan. ',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Dilarang: Permintaan diformat dengan benar tetapi server menolak untuk menyediakan sumber daya yang diminta. Tidak seperti 401, melakukan autentikasi tidak akan membuat perbedaan dalam respons server. 
   */
  FORBIDDEN = 'Dilarang: Permintaan diformat dengan benar tetapi server menolak untuk menyediakan sumber daya yang diminta. Tidak seperti 401, melakukan autentikasi tidak akan membuat perbedaan dalam respons server. ',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Tidak ditemukan: Sumber daya tidak dapat ditemukan. Ini sering digunakan sebagai penyelesaian untuk semua URI yang tidak valid yang diminta oleh server. 
   */
  NOT_FOUND = 'Tidak ditemukan: Sumber daya tidak dapat ditemukan. Ini sering digunakan sebagai penyelesaian untuk semua URI yang tidak valid yang diminta oleh server. ',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metode tidak diizinkan: Sumber daya diminta menggunakan metode yang tidak diizinkan. Misalnya, meminta sumber daya melalui metode POST ketika sumber daya hanya mendukung metode GET. 
   */
  METHOD_NOT_ALLOWED = 'Metode tidak diizinkan: Sumber daya diminta menggunakan metode yang tidak diizinkan. Misalnya, meminta sumber daya melalui metode POST ketika sumber daya hanya mendukung metode GET. ',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Tidak dapat diterima: Sumber daya tersebut valid, tetapi tidak dapat disediakan dalam format yang ditentukan dalam header Accept dalam permintaan. 
   */
  NOT_ACCEPTABLE = 'Tidak dapat diterima: Sumber daya tersebut valid, tetapi tidak dapat disediakan dalam format yang ditentukan dalam header Accept dalam permintaan. ',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autentikasi proxy diperlukan: Autentikasi diperlukan dengan proxy sebelum permintaan dapat dipenuhi. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Autentikasi proxy diperlukan: Autentikasi diperlukan dengan proxy sebelum permintaan dapat dipenuhi. ',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout permintaan: Server melebihi waktu tunggu untuk permintaan dari klien. Klien diizinkan untuk mengulang permintaan. 
   */
  REQUEST_TIMEOUT = 'Timeout permintaan: Server melebihi waktu tunggu untuk permintaan dari klien. Klien diizinkan untuk mengulang permintaan. ',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Konflik: Permintaan tidak dapat diselesaikan karena terdapat konflik pada parameter permintaan. 
   */
  CONFLICT = 'Konflik: Permintaan tidak dapat diselesaikan karena terdapat konflik pada parameter permintaan. ',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Menghilang: Sumber daya tidak lagi tersedia di URI yang diminta dan tidak akan diberikan pengalihan. 
   */
  GONE = 'Menghilang: Sumber daya tidak lagi tersedia di URI yang diminta dan tidak akan diberikan pengalihan. ',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Panjang yang diperlukan: Permintaan tidak menentukan panjang kontennya seperti yang diminta oleh sumber daya. 
   */
  LENGTH_REQUIRED = 'Panjang yang diperlukan: Permintaan tidak menentukan panjang kontennya seperti yang diminta oleh sumber daya. ',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Kondisi awal gagal: Server tidak memenuhi salah satu kondisi awal yang ditentukan oleh klien. 
   */
  PRECONDITION_FAILED = 'Kondisi awal gagal: Server tidak memenuhi salah satu kondisi awal yang ditentukan oleh klien. ',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entitas permintaan terlalu besar: Isi permintaan lebih besar daripada apa yang dapat diproses oleh server. 
   */
  PAYLOAD_TOO_LARGE = 'Entitas permintaan terlalu besar: Isi permintaan lebih besar daripada apa yang dapat diproses oleh server. ',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Request-URI terlalu panjang: URI yang disediakan dalam permintaan terlalu panjang untuk diproses oleh server. Ini sering digunakan ketika terlalu banyak data telah dikodekan ke dalam URI permintaan GET dan sebaiknya permintaan POST digunakan sebagai gantinya. 
   */
  URI_TOO_LONG = 'Request-URI terlalu panjang: URI yang disediakan dalam permintaan terlalu panjang untuk diproses oleh server. Ini sering digunakan ketika terlalu banyak data telah dikodekan ke dalam URI permintaan GET dan sebaiknya permintaan POST digunakan sebagai gantinya. ',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Jenis media tidak didukung: Data yang diberikan oleh klien memiliki jenis media yang tidak didukung oleh server. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Jenis media tidak didukung: Data yang diberikan oleh klien memiliki jenis media yang tidak didukung oleh server. ',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Rentang yang diminta tidak dapat dipenuhi: Klien telah meminta sebagian sumber daya tetapi server tidak dapat menyediakan bagian itu. 
   */
  RANGE_NOT_SATISFIABLE = 'Rentang yang diminta tidak dapat dipenuhi: Klien telah meminta sebagian sumber daya tetapi server tidak dapat menyediakan bagian itu. ',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Harapan gagal: Server tidak dapat memenuhi persyaratan bidang header permintaan Expect. 
   */
  EXPECTATION_FAILED = 'Harapan gagal: Server tidak dapat memenuhi persyaratan bidang header permintaan Expect. ',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Saya adalah teko: Setiap upaya untuk merebus kopi dengan teko harus menghasilkan kode kesalahan "418 Saya adalah teko". Tubuh entitas yang dihasilkan BISA jadi pendek dan gemuk. 
   */
  I_M_A_TEAPOT = 'Saya adalah teko: Setiap upaya untuk merebus kopi dengan teko harus menghasilkan kode kesalahan "418 Saya adalah teko". Tubuh entitas yang dihasilkan BISA jadi pendek dan gemuk. ',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Permintaan salah arah: Permintaan diarahkan ke server yang tidak dapat memberikan respons. Status ini dapat dikirim oleh server yang tidak dikonfigurasi untuk memberikan respons untuk kombinasi skema dan otorisasi yang termasuk dalam URI permintaan. 
   */
  MISDIRECTED_REQUEST = 'Permintaan salah arah: Permintaan diarahkan ke server yang tidak dapat memberikan respons. Status ini dapat dikirim oleh server yang tidak dikonfigurasi untuk memberikan respons untuk kombinasi skema dan otorisasi yang termasuk dalam URI permintaan. ',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entitas tidak dapat diproses: Permintaan diformat dengan benar tetapi tidak dapat diproses dalam bentuk saat ini. Sering digunakan saat parameter yang ditentukan gagal dalam kesalahan validasi. 
   */
  UNPROCESSABLE_ENTITY = 'Entitas tidak dapat diproses: Permintaan diformat dengan benar tetapi tidak dapat diproses dalam bentuk saat ini. Sering digunakan saat parameter yang ditentukan gagal dalam kesalahan validasi. ',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Terkunci: Sumber daya yang diminta ditemukan tetapi telah terkunci dan tidak akan dikembalikan. 
   */
  LOCKED = 'Terkunci: Sumber daya yang diminta ditemukan tetapi telah terkunci dan tidak akan dikembalikan. ',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Ketergantungan gagal: Permintaan gagal karena kegagalan permintaan sebelumnya. 
   */
  FAILED_DEPENDENCY = 'Ketergantungan gagal: Permintaan gagal karena kegagalan permintaan sebelumnya. ',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Diperlukan peningkatan: Klien harus mengulangi permintaan dengan menggunakan protokol yang telah ditingkatkan seperti TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Diperlukan peningkatan: Klien harus mengulangi permintaan dengan menggunakan protokol yang telah ditingkatkan seperti TLS 1.0. ',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Persyaratan prakondisi diperlukan: Server asal mengharuskan permintaan bersifat kondisional. 
   */
  PRECONDITION_REQUIRED = 'Persyaratan prakondisi diperlukan: Server asal mengharuskan permintaan bersifat kondisional. ',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Terlalu banyak permintaan: Pengguna telah mengirim terlalu banyak permintaan dalam jumlah waktu tertentu ("pembatasan kecepatan"). 
   */
  TOO_MANY_REQUESTS = 'Terlalu banyak permintaan: Pengguna telah mengirim terlalu banyak permintaan dalam jumlah waktu tertentu ("pembatasan kecepatan"). ',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Bidang header permintaan terlalu besar: Server tidak bersedia memproses permintaan karena bidang header-nya terlalu besar. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Bidang header permintaan terlalu besar: Server tidak bersedia memproses permintaan karena bidang header-nya terlalu besar. ',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Timeout Login (Microsoft): Sebuah ekstensi Microsoft. Menunjukkan bahwa sesi Anda telah kedaluwarsa. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Timeout Login (Microsoft): Sebuah ekstensi Microsoft. Menunjukkan bahwa sesi Anda telah kedaluwarsa. ',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Tidak Ada Respon (Nginx): Digunakan dalam log Nginx untuk menunjukkan bahwa server tidak mengembalikan informasi apa pun ke klien dan menutup koneksi (berguna sebagai pencegah untuk malware dalam skenario protokol transfer hiperteks). 
   */
  NO_RESPONSE_NGINX = 'Tidak Ada Respon (Nginx): Digunakan dalam log Nginx untuk menunjukkan bahwa server tidak mengembalikan informasi apa pun ke klien dan menutup koneksi (berguna sebagai pencegah untuk malware dalam skenario protokol transfer hiperteks). ',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry With (Microsoft): Ekstensi Microsoft. Permintaan harus diulang setelah melakukan tindakan yang sesuai. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft): Ekstensi Microsoft. Permintaan harus diulang setelah melakukan tindakan yang sesuai. ',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Diblokir oleh Kontrol Orang Tua Windows (Microsoft): Sebuah ekstensi Microsoft. Kesalahan ini diberikan ketika Kontrol Orang Tua Windows diaktifkan dan sedang memblokir akses ke halaman web tertentu. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Diblokir oleh Kontrol Orang Tua Windows (Microsoft): Sebuah ekstensi Microsoft. Kesalahan ini diberikan ketika Kontrol Orang Tua Windows diaktifkan dan sedang memblokir akses ke halaman web tertentu. ',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Digunakan dalam Exchange ActiveSync jika ada server yang lebih efisien untuk digunakan atau server tidak dapat mengakses kotak surat pengguna. Karena alasan hukum tidak tersedia: Server tidak dapat beroperasi karena menerima permintaan pembatasan hukum. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Redirect (Microsoft): Digunakan dalam Exchange ActiveSync jika ada server yang lebih efisien untuk digunakan atau server tidak dapat mengakses kotak surat pengguna. Karena alasan hukum tidak tersedia: Server tidak dapat beroperasi karena menerima permintaan pembatasan hukum. ',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Header permintaan terlalu besar (Nginx): Kode internal Nginx yang mirip dengan 431 tetapi dikenalkan lebih awal dalam versi 0.9.4 (pada tanggal 21 Januari 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Header permintaan terlalu besar (Nginx): Kode internal Nginx yang mirip dengan 431 tetapi dikenalkan lebih awal dalam versi 0.9.4 (pada tanggal 21 Januari 2011). ',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Galat Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika terjadi galat sertifikat klien SSL untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  CERT_ERROR_NGINX = 'Galat Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika terjadi galat sertifikat klien SSL untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. ',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * Tanpa Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika klien tidak memberikan sertifikat untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  NO_CERT_NGINX = 'Tanpa Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika klien tidak memberikan sertifikat untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. ',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP ke HTTPS (Nginx): Kode internal Nginx yang digunakan untuk permintaan HTTP biasa yang dikirim ke port HTTPS untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP ke HTTPS (Nginx): Kode internal Nginx yang digunakan untuk permintaan HTTP biasa yang dikirim ke port HTTPS untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. ',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token kedaluwarsa/tidak valid (Esri): Dikembalikan oleh ArcGIS for Server. Kode 498 menunjukkan token yang telah kedaluwarsa atau tidak valid. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token kedaluwarsa/tidak valid (Esri): Dikembalikan oleh ArcGIS for Server. Kode 498 menunjukkan token yang telah kedaluwarsa atau tidak valid. ',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token diperlukan (Esri): Dikembalikan oleh ArcGIS for Server. Kode 499 menunjukkan bahwa token diperlukan (jika token tidak dikirimkan). 
   */
  TOKEN_REQUIRED_ESRI = 'Token diperlukan (Esri): Dikembalikan oleh ArcGIS for Server. Kode 499 menunjukkan bahwa token diperlukan (jika token tidak dikirimkan). ',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Kesalahan server internal: Status umum untuk kesalahan dalam server itu sendiri. 
   */
  INTERNAL_SERVER_ERROR = 'Kesalahan server internal: Status umum untuk kesalahan dalam server itu sendiri. ',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Tidak terimplementasi: Server tidak dapat menanggapi permintaan. Ini biasanya berarti bahwa server mungkin dapat mendukung permintaan tersebut di masa depan - jika tidak, kode status 4xx mungkin lebih tepat. 
   */
  NOT_IMPLEMENTED = 'Tidak terimplementasi: Server tidak dapat menanggapi permintaan. Ini biasanya berarti bahwa server mungkin dapat mendukung permintaan tersebut di masa depan - jika tidak, kode status 4xx mungkin lebih tepat. ',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad gateway: Server bertindak sebagai proxy dan tidak menerima respons yang dapat diterima dari server hulu. 
   */
  BAD_GATEWAY = 'Bad gateway: Server bertindak sebagai proxy dan tidak menerima respons yang dapat diterima dari server hulu. ',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Layanan tidak tersedia: Server mati dan tidak menerima permintaan. 
   */
  SERVICE_UNAVAILABLE = 'Layanan tidak tersedia: Server mati dan tidak menerima permintaan. ',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout Gateway: Server berfungsi sebagai proxy dan tidak menerima respons dari server hulu. 
   */
  GATEWAY_TIMEOUT = 'Timeout Gateway: Server berfungsi sebagai proxy dan tidak menerima respons dari server hulu. ',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versi HTTP tidak didukung: Server tidak mendukung versi protokol HTTP yang ditentukan dalam permintaan. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'Versi HTTP tidak didukung: Server tidak mendukung versi protokol HTTP yang ditentukan dalam permintaan. ',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant juga bernegosiasi: Negosiasi konten transparan untuk permintaan menghasilkan referensi siklus. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant juga bernegosiasi: Negosiasi konten transparan untuk permintaan menghasilkan referensi siklus. ',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Kekurangan penyimpanan: Pengguna atau server tidak memiliki kuota penyimpanan yang cukup untuk memenuhi permintaan. 
   */
  INSUFFICIENT_STORAGE = 'Kekurangan penyimpanan: Pengguna atau server tidak memiliki kuota penyimpanan yang cukup untuk memenuhi permintaan. ',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Terdeteksi loop: Server mendeteksi loop tak terbatas dalam permintaan. 
   */
  LOOP_DETECTED = 'Terdeteksi loop: Server mendeteksi loop tak terbatas dalam permintaan. ',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Batas Bandwidth Terlampaui (Ekstensi bw/terbatas Apache): Kode status ini tidak ditentukan dalam RFC apa pun. Cara penggunaannya tidak diketahui. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Batas Bandwidth Terlampaui (Ekstensi bw/terbatas Apache): Kode status ini tidak ditentukan dalam RFC apa pun. Cara penggunaannya tidak diketahui. ',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Tidak diperpanjang: Perluasan lebih lanjut terhadap permintaan diperlukan agar dapat dipenuhi. 
   */
  NOT_EXTENDED = 'Tidak diperpanjang: Perluasan lebih lanjut terhadap permintaan diperlukan agar dapat dipenuhi. ',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autentikasi jaringan diperlukan: Klien harus melakukan autentikasi dengan jaringan sebelum mengirimkan permintaan. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Autentikasi jaringan diperlukan: Klien harus melakukan autentikasi dengan jaringan sebelum mengirimkan permintaan. ',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Kesalahan Tidak Dikenal (Microsoft / CloudFlare): Kode status ini tidak ditentukan dalam RFC apa pun dan dikembalikan oleh beberapa layanan, misalnya server Microsoft Azure dan CloudFlare: "Kesalahan 520 pada dasarnya adalah respons 'penangkapan semua' untuk saat server asal mengembalikan sesuatu yang tidak terduga atau sesuatu yang tidak ditoleransi/diterjemahkan (pelanggaran protokol atau respons kosong)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Kesalahan Tidak Dikenal (Microsoft / CloudFlare): Kode status ini tidak ditentukan dalam RFC apa pun dan dikembalikan oleh beberapa layanan, misalnya server Microsoft Azure dan CloudFlare: "Kesalahan 520 pada dasarnya adalah respons \'penangkapan semua\' untuk saat server asal mengembalikan sesuatu yang tidak terduga atau sesuatu yang tidak ditoleransi/diterjemahkan (pelanggaran protokol atau respons kosong)." ',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Server asli menolak koneksi dari CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare): Server asli menolak koneksi dari CloudFlare. ',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Connection Timed Out (CloudFlare): CloudFlare tidak bisa melakukan negosiasi handshake TCP dengan server asal. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare): CloudFlare tidak bisa melakukan negosiasi handshake TCP dengan server asal. ',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin Tidak Dapat Diakses (CloudFlare): CloudFlare tidak dapat mencapai server asal; misalnya, jika catatan DNS untuk server asal tidak benar. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Tidak Dapat Diakses (CloudFlare): CloudFlare tidak dapat mencapai server asal; misalnya, jika catatan DNS untuk server asal tidak benar. ',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Timeout Terjadi (CloudFlare): CloudFlare dapat menyelesaikan koneksi TCP ke server asal, tetapi tidak menerima respons HTTP tepat waktu. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'Timeout Terjadi (CloudFlare): CloudFlare dapat menyelesaikan koneksi TCP ke server asal, tetapi tidak menerima respons HTTP tepat waktu. ',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Gagal (CloudFlare): CloudFlare tidak dapat melakukan negosiasi handshake SSL/TLS dengan server asal. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Gagal (CloudFlare): CloudFlare tidak dapat melakukan negosiasi handshake SSL/TLS dengan server asal. ',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Sertifikat SSL Tidak Valid (CloudFlare): CloudFlare tidak dapat memvalidasi sertifikat SSL/TLS yang disajikan oleh server asal. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Sertifikat SSL Tidak Valid (CloudFlare): CloudFlare tidak dapat memvalidasi sertifikat SSL/TLS yang disajikan oleh server asal. ',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Kesalahan Railgun (CloudFlare): Permintaan timeout atau gagal setelah koneksi WAN telah dibuat. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Kesalahan Railgun (CloudFlare): Permintaan timeout atau gagal setelah koneksi WAN telah dibuat. '
}

export enum HttpStatusDescriptionByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan. 
   */
  h100 = 'Lanjutkan: Server telah menerima header permintaan, dan klien harus melanjutkan untuk mengirim tubuh permintaan. ',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Beralih protokol: Pemohon telah meminta server untuk beralih protokol dan server mengakui bahwa itu akan melakukannya. 
   */
  h101 = 'Beralih protokol: Pemohon telah meminta server untuk beralih protokol dan server mengakui bahwa itu akan melakukannya. ',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Pengolahan: Server telah menerima dan sedang memproses permintaan, tetapi belum ada respons yang tersedia. 
   */
  h102 = 'Pengolahan: Server telah menerima dan sedang memproses permintaan, tetapi belum ada respons yang tersedia. ',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Respon standar untuk permintaan HTTP yang berhasil.
   * Berhasil: Respon standar untuk permintaan HTTP yang berhasil. 
   */
  h200 = 'OK: Respon standar untuk permintaan HTTP yang berhasil.\n\
Berhasil: Respon standar untuk permintaan HTTP yang berhasil. ',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Dibuat: Permintaan telah terpenuhi dan sumber daya baru telah dibuat. 
   */
  h201 = 'Dibuat: Permintaan telah terpenuhi dan sumber daya baru telah dibuat. ',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses. 
   */
  h202 = 'Diterima: Permintaan telah diterima tetapi belum diproses sepenuhnya. Kode ini tidak menjamin bahwa permintaan akan diproses dengan sukses. ',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informasi non-otoritatif: HTTP 1.1. Server berhasil memproses permintaan tetapi mengembalikan informasi dari sumber lain. 
   */
  h203 = 'Informasi non-otoritatif: HTTP 1.1. Server berhasil memproses permintaan tetapi mengembalikan informasi dari sumber lain. ',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Tidak ada konten: Server menerima permintaan tetapi tidak mengembalikan konten apa pun. Ini sering digunakan sebagai respons untuk permintaan DELETE. 
   */
  h204 = 'Tidak ada konten: Server menerima permintaan tetapi tidak mengembalikan konten apa pun. Ini sering digunakan sebagai respons untuk permintaan DELETE. ',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset konten: Mirip dengan respons 204 Tidak Ada Konten, tetapi respons ini mengharuskan pemohon untuk mengatur ulang tampilan dokumen. 
   */
  h205 = 'Reset konten: Mirip dengan respons 204 Tidak Ada Konten, tetapi respons ini mengharuskan pemohon untuk mengatur ulang tampilan dokumen. ',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Partial content: Server hanya memberikan sebagian konten, seperti yang diminta oleh klien melalui header range. 
   */
  h206 = 'Partial content: Server hanya memberikan sebagian konten, seperti yang diminta oleh klien melalui header range. ',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Tubuh pesan berikutnya adalah pesan XML dan dapat berisi sejumlah kode respons terpisah, tergantung pada berapa banyak permintaan anak yang dikirim. 
   */
  h207 = 'Multi-status: Tubuh pesan berikutnya adalah pesan XML dan dapat berisi sejumlah kode respons terpisah, tergantung pada berapa banyak permintaan anak yang dikirim. ',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Sudah dilaporkan: Anggota dari ikatan DAV telah dihitung sebelumnya dalam balasan sebelumnya untuk permintaan ini, dan tidak disertakan lagi. 
   */
  h208 = 'Sudah dilaporkan: Anggota dari ikatan DAV telah dihitung sebelumnya dalam balasan sebelumnya untuk permintaan ini, dan tidak disertakan lagi. ',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM digunakan: Server telah memenuhi permintaan GET untuk sumber daya, dan responsnya merupakan representasi hasil dari satu atau lebih manipulasi instance yang diterapkan pada instance saat ini. 
   */
  h226 = 'IM digunakan: Server telah memenuhi permintaan GET untuk sumber daya, dan responsnya merupakan representasi hasil dari satu atau lebih manipulasi instance yang diterapkan pada instance saat ini. ',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Pilihan ganda: Ada beberapa opsi yang mungkin diikuti oleh klien. 
   */
  h300 = 'Pilihan ganda: Ada beberapa opsi yang mungkin diikuti oleh klien. ',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Pindah permanen: Sumber daya telah dipindahkan dan semua permintaan selanjutnya harus mengacu pada URI barunya. 
   */
  h301 = 'Pindah permanen: Sumber daya telah dipindahkan dan semua permintaan selanjutnya harus mengacu pada URI barunya. ',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Ditemukan: Spesifikasi HTTP 1.0 menggambarkan status ini sebagai "Pindah Sementara", tetapi browser populer merespons status ini serupa dengan perilaku yang dimaksudkan untuk 303. Sumber daya dapat diambil dengan merujuk ke URI yang dikembalikan. 
   */
  h302 = 'Ditemukan: Spesifikasi HTTP 1.0 menggambarkan status ini sebagai "Pindah Sementara", tetapi browser populer merespons status ini serupa dengan perilaku yang dimaksudkan untuk 303. Sumber daya dapat diambil dengan merujuk ke URI yang dikembalikan. ',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Lihat lainnya: Sumber daya dapat diambil dengan mengikuti URI lain menggunakan metode GET. Ketika diterima sebagai respons untuk permintaan POST, PUT, atau DELETE, biasanya dapat diasumsikan bahwa server telah berhasil memproses permintaan tersebut dan mengarahkan klien ke titik akhir informasional. 
   */
  h303 = 'Lihat lainnya: Sumber daya dapat diambil dengan mengikuti URI lain menggunakan metode GET. Ketika diterima sebagai respons untuk permintaan POST, PUT, atau DELETE, biasanya dapat diasumsikan bahwa server telah berhasil memproses permintaan tersebut dan mengarahkan klien ke titik akhir informasional. ',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Tidak dimodifikasi: Sumber daya tidak dimodifikasi sejak versi yang ditentukan dalam header If-Modified-Since atau If-Match. Sumber daya tidak akan dikembalikan dalam badan respons. 
   */
  h304 = 'Tidak dimodifikasi: Sumber daya tidak dimodifikasi sejak versi yang ditentukan dalam header If-Modified-Since atau If-Match. Sumber daya tidak akan dikembalikan dalam badan respons. ',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Gunakan proxy: HTTP 1.1. Sumber daya hanya tersedia melalui proxy dan alamatnya diberikan dalam respons. 
   */
  h305 = 'Gunakan proxy: HTTP 1.1. Sumber daya hanya tersedia melalui proxy dan alamatnya diberikan dalam respons. ',
  /**
   * h306: 
   *
   * Empty
   * Switch proxy: Didepresiasi dalam HTTP 1.1. Digunakan untuk berarti bahwa permintaan berikutnya harus dikirim menggunakan proxy yang ditentukan. 
   */
  h306 = 'Switch proxy: Didepresiasi dalam HTTP 1.1. Digunakan untuk berarti bahwa permintaan berikutnya harus dikirim menggunakan proxy yang ditentukan. ',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Pengalihan sementara: HTTP 1.1. Permintaan harus diulang dengan URI yang diberikan dalam respons, tetapi permintaan di masa depan tetap harus memanggil URI asli. 
   */
  h307 = 'Pengalihan sementara: HTTP 1.1. Permintaan harus diulang dengan URI yang diberikan dalam respons, tetapi permintaan di masa depan tetap harus memanggil URI asli. ',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google): Kode ini digunakan dalam Proposal Permintaan HTTP yang Dapat Diatur Ulang untuk melanjutkan permintaan PUT atau POST yang terputus
   * Permanen Redirect: Permintaan dan semua permintaan di masa depan harus dikirim ulang menggunakan URI yang disediakan dalam respons. 
   */
  h308 = 'Resume Incomplete (Google): Kode ini digunakan dalam Proposal Permintaan HTTP yang Dapat Diatur Ulang untuk melanjutkan permintaan PUT atau POST yang terputus\n\
Permanen Redirect: Permintaan dan semua permintaan di masa depan harus dikirim ulang menggunakan URI yang disediakan dalam respons. ',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Permintaan salah: Permintaan tidak dapat dipenuhi karena sintaks permintaan yang tidak benar. 
   */
  h400 = 'Permintaan salah: Permintaan tidak dapat dipenuhi karena sintaks permintaan yang tidak benar. ',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Tidak Diizinkan: Pemohon tidak diizinkan mengakses sumber daya. Ini mirip dengan 403 tetapi digunakan dalam kasus ketika autentikasi diharapkan tetapi telah gagal atau tidak diberikan. 
   */
  h401 = 'Tidak Diizinkan: Pemohon tidak diizinkan mengakses sumber daya. Ini mirip dengan 403 tetapi digunakan dalam kasus ketika autentikasi diharapkan tetapi telah gagal atau tidak diberikan. ',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pembayaran diperlukan: Dipesan untuk penggunaan di masa depan. Beberapa layanan web menggunakan ini sebagai indikasi bahwa klien telah mengirim jumlah permintaan yang berlebihan. 
   */
  h402 = 'Pembayaran diperlukan: Dipesan untuk penggunaan di masa depan. Beberapa layanan web menggunakan ini sebagai indikasi bahwa klien telah mengirim jumlah permintaan yang berlebihan. ',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Dilarang: Permintaan diformat dengan benar tetapi server menolak untuk menyediakan sumber daya yang diminta. Tidak seperti 401, melakukan autentikasi tidak akan membuat perbedaan dalam respons server. 
   */
  h403 = 'Dilarang: Permintaan diformat dengan benar tetapi server menolak untuk menyediakan sumber daya yang diminta. Tidak seperti 401, melakukan autentikasi tidak akan membuat perbedaan dalam respons server. ',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Tidak ditemukan: Sumber daya tidak dapat ditemukan. Ini sering digunakan sebagai penyelesaian untuk semua URI yang tidak valid yang diminta oleh server. 
   */
  h404 = 'Tidak ditemukan: Sumber daya tidak dapat ditemukan. Ini sering digunakan sebagai penyelesaian untuk semua URI yang tidak valid yang diminta oleh server. ',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Metode tidak diizinkan: Sumber daya diminta menggunakan metode yang tidak diizinkan. Misalnya, meminta sumber daya melalui metode POST ketika sumber daya hanya mendukung metode GET. 
   */
  h405 = 'Metode tidak diizinkan: Sumber daya diminta menggunakan metode yang tidak diizinkan. Misalnya, meminta sumber daya melalui metode POST ketika sumber daya hanya mendukung metode GET. ',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Tidak dapat diterima: Sumber daya tersebut valid, tetapi tidak dapat disediakan dalam format yang ditentukan dalam header Accept dalam permintaan. 
   */
  h406 = 'Tidak dapat diterima: Sumber daya tersebut valid, tetapi tidak dapat disediakan dalam format yang ditentukan dalam header Accept dalam permintaan. ',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autentikasi proxy diperlukan: Autentikasi diperlukan dengan proxy sebelum permintaan dapat dipenuhi. 
   */
  h407 = 'Autentikasi proxy diperlukan: Autentikasi diperlukan dengan proxy sebelum permintaan dapat dipenuhi. ',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout permintaan: Server melebihi waktu tunggu untuk permintaan dari klien. Klien diizinkan untuk mengulang permintaan. 
   */
  h408 = 'Timeout permintaan: Server melebihi waktu tunggu untuk permintaan dari klien. Klien diizinkan untuk mengulang permintaan. ',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Konflik: Permintaan tidak dapat diselesaikan karena terdapat konflik pada parameter permintaan. 
   */
  h409 = 'Konflik: Permintaan tidak dapat diselesaikan karena terdapat konflik pada parameter permintaan. ',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Menghilang: Sumber daya tidak lagi tersedia di URI yang diminta dan tidak akan diberikan pengalihan. 
   */
  h410 = 'Menghilang: Sumber daya tidak lagi tersedia di URI yang diminta dan tidak akan diberikan pengalihan. ',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Panjang yang diperlukan: Permintaan tidak menentukan panjang kontennya seperti yang diminta oleh sumber daya. 
   */
  h411 = 'Panjang yang diperlukan: Permintaan tidak menentukan panjang kontennya seperti yang diminta oleh sumber daya. ',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Kondisi awal gagal: Server tidak memenuhi salah satu kondisi awal yang ditentukan oleh klien. 
   */
  h412 = 'Kondisi awal gagal: Server tidak memenuhi salah satu kondisi awal yang ditentukan oleh klien. ',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entitas permintaan terlalu besar: Isi permintaan lebih besar daripada apa yang dapat diproses oleh server. 
   */
  h413 = 'Entitas permintaan terlalu besar: Isi permintaan lebih besar daripada apa yang dapat diproses oleh server. ',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Request-URI terlalu panjang: URI yang disediakan dalam permintaan terlalu panjang untuk diproses oleh server. Ini sering digunakan ketika terlalu banyak data telah dikodekan ke dalam URI permintaan GET dan sebaiknya permintaan POST digunakan sebagai gantinya. 
   */
  h414 = 'Request-URI terlalu panjang: URI yang disediakan dalam permintaan terlalu panjang untuk diproses oleh server. Ini sering digunakan ketika terlalu banyak data telah dikodekan ke dalam URI permintaan GET dan sebaiknya permintaan POST digunakan sebagai gantinya. ',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Jenis media tidak didukung: Data yang diberikan oleh klien memiliki jenis media yang tidak didukung oleh server. 
   */
  h415 = 'Jenis media tidak didukung: Data yang diberikan oleh klien memiliki jenis media yang tidak didukung oleh server. ',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Rentang yang diminta tidak dapat dipenuhi: Klien telah meminta sebagian sumber daya tetapi server tidak dapat menyediakan bagian itu. 
   */
  h416 = 'Rentang yang diminta tidak dapat dipenuhi: Klien telah meminta sebagian sumber daya tetapi server tidak dapat menyediakan bagian itu. ',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Harapan gagal: Server tidak dapat memenuhi persyaratan bidang header permintaan Expect. 
   */
  h417 = 'Harapan gagal: Server tidak dapat memenuhi persyaratan bidang header permintaan Expect. ',
  /**
   * h418: 
   *
   * Empty
   * Saya adalah teko: Setiap upaya untuk merebus kopi dengan teko harus menghasilkan kode kesalahan "418 Saya adalah teko". Tubuh entitas yang dihasilkan BISA jadi pendek dan gemuk. 
   */
  h418 = 'Saya adalah teko: Setiap upaya untuk merebus kopi dengan teko harus menghasilkan kode kesalahan "418 Saya adalah teko". Tubuh entitas yang dihasilkan BISA jadi pendek dan gemuk. ',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Permintaan salah arah: Permintaan diarahkan ke server yang tidak dapat memberikan respons. Status ini dapat dikirim oleh server yang tidak dikonfigurasi untuk memberikan respons untuk kombinasi skema dan otorisasi yang termasuk dalam URI permintaan. 
   */
  h421 = 'Permintaan salah arah: Permintaan diarahkan ke server yang tidak dapat memberikan respons. Status ini dapat dikirim oleh server yang tidak dikonfigurasi untuk memberikan respons untuk kombinasi skema dan otorisasi yang termasuk dalam URI permintaan. ',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entitas tidak dapat diproses: Permintaan diformat dengan benar tetapi tidak dapat diproses dalam bentuk saat ini. Sering digunakan saat parameter yang ditentukan gagal dalam kesalahan validasi. 
   */
  h422 = 'Entitas tidak dapat diproses: Permintaan diformat dengan benar tetapi tidak dapat diproses dalam bentuk saat ini. Sering digunakan saat parameter yang ditentukan gagal dalam kesalahan validasi. ',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Terkunci: Sumber daya yang diminta ditemukan tetapi telah terkunci dan tidak akan dikembalikan. 
   */
  h423 = 'Terkunci: Sumber daya yang diminta ditemukan tetapi telah terkunci dan tidak akan dikembalikan. ',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Ketergantungan gagal: Permintaan gagal karena kegagalan permintaan sebelumnya. 
   */
  h424 = 'Ketergantungan gagal: Permintaan gagal karena kegagalan permintaan sebelumnya. ',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Diperlukan peningkatan: Klien harus mengulangi permintaan dengan menggunakan protokol yang telah ditingkatkan seperti TLS 1.0. 
   */
  h426 = 'Diperlukan peningkatan: Klien harus mengulangi permintaan dengan menggunakan protokol yang telah ditingkatkan seperti TLS 1.0. ',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Persyaratan prakondisi diperlukan: Server asal mengharuskan permintaan bersifat kondisional. 
   */
  h428 = 'Persyaratan prakondisi diperlukan: Server asal mengharuskan permintaan bersifat kondisional. ',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Terlalu banyak permintaan: Pengguna telah mengirim terlalu banyak permintaan dalam jumlah waktu tertentu ("pembatasan kecepatan"). 
   */
  h429 = 'Terlalu banyak permintaan: Pengguna telah mengirim terlalu banyak permintaan dalam jumlah waktu tertentu ("pembatasan kecepatan"). ',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Bidang header permintaan terlalu besar: Server tidak bersedia memproses permintaan karena bidang header-nya terlalu besar. 
   */
  h431 = 'Bidang header permintaan terlalu besar: Server tidak bersedia memproses permintaan karena bidang header-nya terlalu besar. ',
  /**
   * h440: 
   *
   * Empty
   * Timeout Login (Microsoft): Sebuah ekstensi Microsoft. Menunjukkan bahwa sesi Anda telah kedaluwarsa. 
   */
  h440 = 'Timeout Login (Microsoft): Sebuah ekstensi Microsoft. Menunjukkan bahwa sesi Anda telah kedaluwarsa. ',
  /**
   * h444: 
   *
   * Empty
   * Tidak Ada Respon (Nginx): Digunakan dalam log Nginx untuk menunjukkan bahwa server tidak mengembalikan informasi apa pun ke klien dan menutup koneksi (berguna sebagai pencegah untuk malware dalam skenario protokol transfer hiperteks). 
   */
  h444 = 'Tidak Ada Respon (Nginx): Digunakan dalam log Nginx untuk menunjukkan bahwa server tidak mengembalikan informasi apa pun ke klien dan menutup koneksi (berguna sebagai pencegah untuk malware dalam skenario protokol transfer hiperteks). ',
  /**
   * h449: 
   *
   * Empty
   * Retry With (Microsoft): Ekstensi Microsoft. Permintaan harus diulang setelah melakukan tindakan yang sesuai. 
   */
  h449 = 'Retry With (Microsoft): Ekstensi Microsoft. Permintaan harus diulang setelah melakukan tindakan yang sesuai. ',
  /**
   * h450: 
   *
   * Empty
   * Diblokir oleh Kontrol Orang Tua Windows (Microsoft): Sebuah ekstensi Microsoft. Kesalahan ini diberikan ketika Kontrol Orang Tua Windows diaktifkan dan sedang memblokir akses ke halaman web tertentu. 
   */
  h450 = 'Diblokir oleh Kontrol Orang Tua Windows (Microsoft): Sebuah ekstensi Microsoft. Kesalahan ini diberikan ketika Kontrol Orang Tua Windows diaktifkan dan sedang memblokir akses ke halaman web tertentu. ',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Digunakan dalam Exchange ActiveSync jika ada server yang lebih efisien untuk digunakan atau server tidak dapat mengakses kotak surat pengguna. Karena alasan hukum tidak tersedia: Server tidak dapat beroperasi karena menerima permintaan pembatasan hukum. 
   */
  h451 = 'Redirect (Microsoft): Digunakan dalam Exchange ActiveSync jika ada server yang lebih efisien untuk digunakan atau server tidak dapat mengakses kotak surat pengguna. Karena alasan hukum tidak tersedia: Server tidak dapat beroperasi karena menerima permintaan pembatasan hukum. ',
  /**
   * h494: 
   *
   * Empty
   * Header permintaan terlalu besar (Nginx): Kode internal Nginx yang mirip dengan 431 tetapi dikenalkan lebih awal dalam versi 0.9.4 (pada tanggal 21 Januari 2011). 
   */
  h494 = 'Header permintaan terlalu besar (Nginx): Kode internal Nginx yang mirip dengan 431 tetapi dikenalkan lebih awal dalam versi 0.9.4 (pada tanggal 21 Januari 2011). ',
  /**
   * h495: 
   *
   * Empty
   * Galat Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika terjadi galat sertifikat klien SSL untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  h495 = 'Galat Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika terjadi galat sertifikat klien SSL untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. ',
  /**
   * h496: 
   *
   * Empty
   * Tanpa Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika klien tidak memberikan sertifikat untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  h496 = 'Tanpa Sertifikat (Nginx): Kode internal Nginx yang digunakan ketika klien tidak memberikan sertifikat untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. ',
  /**
   * h497: 
   *
   * Empty
   * HTTP ke HTTPS (Nginx): Kode internal Nginx yang digunakan untuk permintaan HTTP biasa yang dikirim ke port HTTPS untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. 
   */
  h497 = 'HTTP ke HTTPS (Nginx): Kode internal Nginx yang digunakan untuk permintaan HTTP biasa yang dikirim ke port HTTPS untuk membedakannya dari 4XX dalam log dan pengalihan halaman kesalahan. ',
  /**
   * h498: 
   *
   * Empty
   * Token kedaluwarsa/tidak valid (Esri): Dikembalikan oleh ArcGIS for Server. Kode 498 menunjukkan token yang telah kedaluwarsa atau tidak valid. 
   */
  h498 = 'Token kedaluwarsa/tidak valid (Esri): Dikembalikan oleh ArcGIS for Server. Kode 498 menunjukkan token yang telah kedaluwarsa atau tidak valid. ',
  /**
   * h499: 
   *
   * Empty
   * Token diperlukan (Esri): Dikembalikan oleh ArcGIS for Server. Kode 499 menunjukkan bahwa token diperlukan (jika token tidak dikirimkan). 
   */
  h499 = 'Token diperlukan (Esri): Dikembalikan oleh ArcGIS for Server. Kode 499 menunjukkan bahwa token diperlukan (jika token tidak dikirimkan). ',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Kesalahan server internal: Status umum untuk kesalahan dalam server itu sendiri. 
   */
  h500 = 'Kesalahan server internal: Status umum untuk kesalahan dalam server itu sendiri. ',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Tidak terimplementasi: Server tidak dapat menanggapi permintaan. Ini biasanya berarti bahwa server mungkin dapat mendukung permintaan tersebut di masa depan - jika tidak, kode status 4xx mungkin lebih tepat. 
   */
  h501 = 'Tidak terimplementasi: Server tidak dapat menanggapi permintaan. Ini biasanya berarti bahwa server mungkin dapat mendukung permintaan tersebut di masa depan - jika tidak, kode status 4xx mungkin lebih tepat. ',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Bad gateway: Server bertindak sebagai proxy dan tidak menerima respons yang dapat diterima dari server hulu. 
   */
  h502 = 'Bad gateway: Server bertindak sebagai proxy dan tidak menerima respons yang dapat diterima dari server hulu. ',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Layanan tidak tersedia: Server mati dan tidak menerima permintaan. 
   */
  h503 = 'Layanan tidak tersedia: Server mati dan tidak menerima permintaan. ',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout Gateway: Server berfungsi sebagai proxy dan tidak menerima respons dari server hulu. 
   */
  h504 = 'Timeout Gateway: Server berfungsi sebagai proxy dan tidak menerima respons dari server hulu. ',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versi HTTP tidak didukung: Server tidak mendukung versi protokol HTTP yang ditentukan dalam permintaan. 
   */
  h505 = 'Versi HTTP tidak didukung: Server tidak mendukung versi protokol HTTP yang ditentukan dalam permintaan. ',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant juga bernegosiasi: Negosiasi konten transparan untuk permintaan menghasilkan referensi siklus. 
   */
  h506 = 'Variant juga bernegosiasi: Negosiasi konten transparan untuk permintaan menghasilkan referensi siklus. ',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Kekurangan penyimpanan: Pengguna atau server tidak memiliki kuota penyimpanan yang cukup untuk memenuhi permintaan. 
   */
  h507 = 'Kekurangan penyimpanan: Pengguna atau server tidak memiliki kuota penyimpanan yang cukup untuk memenuhi permintaan. ',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Terdeteksi loop: Server mendeteksi loop tak terbatas dalam permintaan. 
   */
  h508 = 'Terdeteksi loop: Server mendeteksi loop tak terbatas dalam permintaan. ',
  /**
   * h509: 
   *
   * Empty
   * Batas Bandwidth Terlampaui (Ekstensi bw/terbatas Apache): Kode status ini tidak ditentukan dalam RFC apa pun. Cara penggunaannya tidak diketahui. 
   */
  h509 = 'Batas Bandwidth Terlampaui (Ekstensi bw/terbatas Apache): Kode status ini tidak ditentukan dalam RFC apa pun. Cara penggunaannya tidak diketahui. ',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Tidak diperpanjang: Perluasan lebih lanjut terhadap permintaan diperlukan agar dapat dipenuhi. 
   */
  h510 = 'Tidak diperpanjang: Perluasan lebih lanjut terhadap permintaan diperlukan agar dapat dipenuhi. ',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autentikasi jaringan diperlukan: Klien harus melakukan autentikasi dengan jaringan sebelum mengirimkan permintaan. 
   */
  h511 = 'Autentikasi jaringan diperlukan: Klien harus melakukan autentikasi dengan jaringan sebelum mengirimkan permintaan. ',
  /**
   * h520: 
   *
   * Empty
   * Kesalahan Tidak Dikenal (Microsoft / CloudFlare): Kode status ini tidak ditentukan dalam RFC apa pun dan dikembalikan oleh beberapa layanan, misalnya server Microsoft Azure dan CloudFlare: "Kesalahan 520 pada dasarnya adalah respons 'penangkapan semua' untuk saat server asal mengembalikan sesuatu yang tidak terduga atau sesuatu yang tidak ditoleransi/diterjemahkan (pelanggaran protokol atau respons kosong)." 
   */
  h520 = 'Kesalahan Tidak Dikenal (Microsoft / CloudFlare): Kode status ini tidak ditentukan dalam RFC apa pun dan dikembalikan oleh beberapa layanan, misalnya server Microsoft Azure dan CloudFlare: "Kesalahan 520 pada dasarnya adalah respons \'penangkapan semua\' untuk saat server asal mengembalikan sesuatu yang tidak terduga atau sesuatu yang tidak ditoleransi/diterjemahkan (pelanggaran protokol atau respons kosong)." ',
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): Server asli menolak koneksi dari CloudFlare. 
   */
  h521 = 'Web Server Is Down (CloudFlare): Server asli menolak koneksi dari CloudFlare. ',
  /**
   * h522: 
   *
   * Empty
   * Connection Timed Out (CloudFlare): CloudFlare tidak bisa melakukan negosiasi handshake TCP dengan server asal. 
   */
  h522 = 'Connection Timed Out (CloudFlare): CloudFlare tidak bisa melakukan negosiasi handshake TCP dengan server asal. ',
  /**
   * h523: 
   *
   * Empty
   * Origin Tidak Dapat Diakses (CloudFlare): CloudFlare tidak dapat mencapai server asal; misalnya, jika catatan DNS untuk server asal tidak benar. 
   */
  h523 = 'Origin Tidak Dapat Diakses (CloudFlare): CloudFlare tidak dapat mencapai server asal; misalnya, jika catatan DNS untuk server asal tidak benar. ',
  /**
   * h524: 
   *
   * Empty
   * Timeout Terjadi (CloudFlare): CloudFlare dapat menyelesaikan koneksi TCP ke server asal, tetapi tidak menerima respons HTTP tepat waktu. 
   */
  h524 = 'Timeout Terjadi (CloudFlare): CloudFlare dapat menyelesaikan koneksi TCP ke server asal, tetapi tidak menerima respons HTTP tepat waktu. ',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Gagal (CloudFlare): CloudFlare tidak dapat melakukan negosiasi handshake SSL/TLS dengan server asal. 
   */
  h525 = 'SSL Handshake Gagal (CloudFlare): CloudFlare tidak dapat melakukan negosiasi handshake SSL/TLS dengan server asal. ',
  /**
   * h526: 
   *
   * Empty
   * Sertifikat SSL Tidak Valid (CloudFlare): CloudFlare tidak dapat memvalidasi sertifikat SSL/TLS yang disajikan oleh server asal. 
   */
  h526 = 'Sertifikat SSL Tidak Valid (CloudFlare): CloudFlare tidak dapat memvalidasi sertifikat SSL/TLS yang disajikan oleh server asal. ',
  /**
   * h527: 
   *
   * Empty
   * Kesalahan Railgun (CloudFlare): Permintaan timeout atau gagal setelah koneksi WAN telah dibuat. 
   */
  h527 = 'Kesalahan Railgun (CloudFlare): Permintaan timeout atau gagal setelah koneksi WAN telah dibuat. '
}
