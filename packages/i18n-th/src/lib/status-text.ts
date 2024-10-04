/**
* © 2024 aiyoudiao
*
* ไฟล์นี้ถูกสร้างโดย aiyoudiao ซึ่งประกอบด้วยงานหนักและความฉลาดเป็นจำนวนมาก
*
* คุณสามารถใช้ แก้ไข และแจกจ่ายไฟล์นี้ได้ฟรี แต่โปรดเก็บบันทึกประกาศลิสบัตรลิขสิทธิ์นี้
*
* หากคุณพบว่าไฟล์นี้เป็นประโยชน์ โปรดให้ฉันดาวหรือติดตามฉัน ツ
*
* ข้อมูลการติดต่อ:
* - อีเมล์:,newdiao@163.com,
* - GitHub:,https://github.com/aiyoudiao,
*
* สนุกกับการเขียนโปรแกรม! จำไว้ว่า โค้ดคือกวี และด้านหน้าคือศิลปะ ツ
*/
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * ดำเนินต่อ: เซิร์ฟเวอร์ได้รับหัวข้อคำขอแล้วและลูกค้าควรดำเนินการส่งร่างของคำขอต่อไป 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * การสลับโปรโทคอล: ผู้ร้องขอได้ขอให้เซิร์ฟเวอร์สลับโปรโทคอล และเซิร์ฟเวอร์ยืนยันว่าจะทำเช่นนั้น 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * ดำเนินการ: เซิร์ฟเวอร์ได้รับและกำลังดำเนินการคำขอ แต่ยังไม่มีการตอบสนองที่พร้อมใช้งาน
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * สร้างแล้ว: คำขอได้รับการดำเนินการสำเร็จและทรัพยากรใหม่ได้ถูกสร้าง 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * ยอมรับ: คำขอได้รับการยอมรับแต่ยังไม่ได้ดำเนินการเสร็จสิ้น โค้ดนี้ไม่ได้การันตีว่าคำขอจะดำเนินการสำเร็จ 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * ข้อมูลที่ไม่มีอำนาจ: HTTP 1.1. เซิร์ฟเวอร์ประมวลผลคำขอได้สำเร็จแต่กำลังส่งกลับข้อมูลจากแหล่งอื่น
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * ไม่มีเนื้อหา: เซิร์ฟเวอร์ได้รับคำขอ แต่ไม่ได้ส่งเนื้อหาใดๆ กลับมา นี่มักถูกใช้เป็นการตอบสนองของคำขอ DELETE 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * รีเซ็ตเนื้อหา: คล้ายกับการตอบสนอง 204 ไม่มีเนื้อหา แต่ตอบสนองนี้ต้องการให้ผู้ร้องขอรีเซ็ตมุมมองของเอกสาร 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * ส่วนเนื้อหาบางส่วน: เซิร์ฟเวอร์ให้เพียงส่วนของเนื้อหาที่ถูกขอโดยลูกค้าผ่านหัวข้อช่วง (Range header) 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * สถานะหลาย: ร่างข้อความที่ตามมานี้เป็นข้อความ XML และอาจมีรหัสการตอบสนองหลายตัว ขึ้นอยู่กับว่ามีการส่งคำร้องย่อยจำนวนเท่าใด 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * ได้รายงานแล้ว: สมาชิกของการผูกมัด DAV ได้รับการระบุไว้ในคำตอบก่อนหน้านี้สำหรับคำขอครั้งนี้ และจะไม่รวมซ้ำอีก 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM ใช้: เซิร์ฟเวอร์ได้ดำเนินการตามคำขอ GET สำหรับทรัพยากร และการตอบสนองเป็นการแสดงผลของผลที่ได้จากการดำเนินการแบบตัวอย่างหนึ่งหรือหลายตัวที่นำไปใช้กับตัวอย่างปัจจุบัน 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * หลายทางเลือก: ผู้ใช้สามารถเลือกหนึ่งในหลายตัวเลือกที่มีเพื่อดำเนินการในสถานการณ์โปรโตคอลการถ่ายโอนไฮเปอร์เท็กซ์ 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * ถูกย้ายถาวร: ทรัพยากรถูกย้ายและการร้องขอทั้งหมดในภายหลังควรอ้างถึง URI ใหม่ของมัน 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * พบว่า: รPECIFICATION ของ HTTP 1.0 อธิบายสถานะนี้เป็น "ย้ายชั่วคราว" แต่เบราว์เซอร์ที่เป็นที่นิยมตอบสนองต่อสถานะนี้คล้ายกับพฤติกรรมที่หมายถึง 303 สามารถดึงทรัพยากรได้โดยอ้างถึง URI ที่ถูกส่งกลับมา 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * ดูผู้อื่น: ทรัพยากรสามารถดึงได้โดยการติดตาม URI อื่นโดยใช้วิธี GET เมื่อรับในคำตอบต่อคำขอ POST, PUT หรือ DELETE สามารถถือได้โดยปกติว่าเซิร์ฟเวอร์ประมวลคำขอสำเร็จและกำลังส่งลูกค้าไปยังจุดสิ้นสุดข้อมูลเชิงให้ข้อมูล 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * ไม่ได้แก้ไข: ตั้งแต่เวอร์ชันที่ระบุในหัวข้อ If-Modified-Since หรือ If-Match รายการทรัพยากรไม่ได้ถูกแก้ไข รายการทรัพยากรจะไม่ถูกส่งกลับในร่างของการตอบสนอง 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * ใช้พร็อกซี่: HTTP 1.1. ทรัพยากรสามารถเข้าถึงได้ผ่านพร็อกซี่เท่านั้น และที่อยู่ถูกให้ไว้ในการตอบสนอง 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Switch proxy: ถูกเลิกใช้ใน HTTP 1.1. ใช้หมายถึงคำขอถัดไปควรส่งโดยใช้ proxy ที่ระบุ 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * การเปลี่ยนเส้นทางชั่วคราว: HTTP 1.1 ผู้ร้องขอควรส่งซ้ำด้วย URI ที่ให้ไว้ในการตอบสนอง แต่การร้องขอในอนาคตควรเรียก URI เดิม 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google) : โค้ดนี้ถูกใช้ในข้อเสนอ Resumable HTTP Requests เพื่อเริ่มใหม่คำขอ PUT หรือ POST ที่ถูกหยุดกะทันหัน
   * การเปลี่ยนเส้นทางถาวร : คำขอและคำขอต่อไปในอนาคตทั้งหมดควรถูกส่งใหม่โดยใช้ URI ที่ให้มาในการตอบสนอง 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * คำร้องผิดพลาด: ไม่สามารถตอบสนองคำร้องได้เนื่องจากไวยากรณ์ของคำร้องไม่ถูกต้อง 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * ไม่ได้รับอนุญาต: ผู้ร้องขอไม่ได้รับอนุญาตให้เข้าถึงทรัพยากร นี่คล้ายกับ 403 แต่ใช้ในกรณีที่การยืนยันตัวตนคาดหวัง แต่ล้มเหลวหรือไม่ได้ให้ 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * การชำระเงินจำเป็น: เหลือไว้สำหรับใช้ในอนาคต บางบริการเว็บใช้สถานะนี้เป็นสัญญาณว่าลูกค้าส่งคำขอจำนวนมากเกินไป 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * ห้าม: คำขอถูกจัดรูปแบบถูกต้อง แต่เซิร์ฟเวอร์ปฏิเสธที่จะให้ทรัพยากรที่ร้องขอ ไม่เหมือนกับ 401 การตรวจสอบสิทธิ์จะไม่ทำให้การตอบสนองของเซิร์ฟเวอร์แตกต่าง 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * ไม่พบ:ทรัพยากรไม่สามารถพบได้ นี่มักถูกใช้เป็นทั้งหมดสำหรับการร้องขอ URI ไม่ถูกต้องทั้งหมดที่ถูกร้องขอจากเซิร์ฟเวอร์ 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * วิธีการไม่ได้รับอนุญาต: การร้องขอทรัพยากรด้วยวิธีการที่ไม่ได้รับอนุญาต ตัวอย่างเช่น การร้องขอทรัพยากรด้วยวิธีการ POST เมื่อทรัพยากรสนับสนุนเพียงวิธีการ GET 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * ไม่สามารถยอมรับ: แหล่งทรัพยากรเป็นถูกต้อง แต่ไม่สามารถให้ในรูปแบบที่ระบุไว้ใน заголовง Accept ในคำขอ 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * การรับรองตัวตนของพร็อกซีเป็นสิ่งจำเป็น: การรับรองตัวตนของพร็อกซีเป็นสิ่งจำเป็นก่อนที่คำขอจะได้รับการดำเนินการ 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * หมดเวลารอคำขอ: เซิร์ฟเวอร์หมดเวลารอคำขอจากไคลเอนต์ ผู้ใช้ไคลเอนต์สามารถส่งคำขอใหม่ได้ 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * ความขัดแย้ง: การร้องขอไม่สามารถดำเนินการเสร็จสมบูรณ์ เนื่องจากมีความขัดแย้งในพารามิเตอร์การร้องขอ 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * หายไป: แหล่งทรัพยากรไม่พร้อมใช้งานอีกต่อไปที่ URI ที่ถูกร้องขอและไม่มีการเปลี่ยนเส้นทางที่ให้มา 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * ความยาวที่ต้องการ: คำขอไม่ได้ระบุความยาวของเนื้อหาเช่นที่กำหนดไว้ตามทรัพยากร 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * เงื่อนไขล่วงหน้าล้มเหลว: เซิร์ฟเวอร์ไม่ตรงตามเงื่อนไขล่วงหน้าหนึ่งข้อที่ระบุโดยไคลเอ็นต์ 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * ร่างข้อมูลของคำขอใหญ่เกินไป: เนื้อหาของคำขอมากกว่าที่เซิร์ฟเวอร์สามารถประมวลผลได้ 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI ของคำขอยาวเกินไป: URI ที่ให้ไว้ในคำขอตัวนี้ยาวเกินไปสำหรับเซิร์ฟเวอร์ในการประมวลผล นี่มักใช้เมื่อมีข้อมูลมากเกินไปถูกเข้ารหัสใน URI ของคำขอ GET และควรใช้คำขอ POST แทน 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * ประเภทสื่อไม่ได้รับการสนับสนุน: ผู้ใช้งานลูกค้าให้ข้อมูลในประเภทสื่อที่เซิร์ฟเวอร์ไม่สนับสนุน 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * ช่วงการร้องขอไม่เป็นที่พอใจ: ผู้ใช้งานได้ขอส่วนหนึ่งของทรัพยากร แต่เซิร์ฟเวอร์ไม่สามารถให้ส่วนดังกล่าวได้ 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * ความคาดหวังล้มเหลว: เซิร์ฟเวอร์ไม่สามารถตอบสนองความต้องการของฟิลด์หัวข้อคำขอ Expect 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * ฉันคือหม้อชา: การพยายามชงกาแฟด้วยหม้อชาใด ๆ ควรทำให้เกิดรหัสข้อผิดพลาด "418 ฉันคือหม้อชา" เนื้อหาตัว实อาจจะสั้นและแข็ง 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * คำขอผิดทิศทาง: คำขอถูกส่งไปยังเซิร์ฟเวอร์ที่ไม่สามารถให้การตอบสนองได้ สถานะนี้อาจถูกส่งโดยเซิร์ฟเวอร์ที่ไม่ได้กำหนดการให้การตอบสนองสำหรับโครงสร้างและผู้มีอำนาจที่ถูกระบุไว้ใน URI ของคำขอ 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 实体内處理不了：請求格式正確，但在當前表單中無法處理。通常在指定的參數未通過驗證錯誤時使用。 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * ล็อค: บริการที่ร้องขอพบแล้ว แต่ถูกล็อคและไม่สามารถเข้าถึงได้ 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * ความล้มเหลวของการพึ่งพา: คำขอถูกปฏิเสธเนื่องจากความล้มเหลวของคำขอก่อนหน้า 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * การปรับรุ่นจำเป็น: ผู้ใช้งานเชื่อมต่อควรส่งคำขอใหม่โดยใช้โปรโตคอลที่ปรับรุ่นใหม่ เช่น TLS 1.0 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * เงื่อนไขล่วงหน้าจำเป็น: เซิร์ฟเวอร์ต้นฉบับต้องการให้คำขอเป็นแบบมีเงื่อนไข 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * คำขอมากเกินไป: ผู้ใช้ส่งคำขอจำนวนมากเกินไปในช่วงเวลาที่กำหนด ("การจำกัดอัตรา") 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * ฟิลด์หัวข้อคำขอใหญ่เกินไป: เซิร์ฟเวอร์ไม่ต้องการประมวลผลคำขอเนื่องจากฟิลด์หัวข้อของมันใหญ่เกินไป 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Timeout เข้าสู่ระบบ (Microsoft) : การขยายของ Microsoft แสดงว่าการเซสชั่นของคุณหมดเวลา 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * ไม่ตอบสนอง (Nginx) : ใช้ในบันทึกของ Nginx เพื่อระบุว่าเซิร์ฟเวอร์ไม่ได้ส่งข้อมูลใด ๆ ให้กับไคลเอนต์และปิดการเชื่อมต่อ (เป็นประโยชน์เป็นเครื่องยับยั้งสำหรับมัลแวร์) 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry With (Microsoft) : การขยายของ Microsoft การร้องขอควรถูกทำซ้ำหลังจากดำเนินการที่ถูกต้อง
   *
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * ถูกบล็อกโดย Windows Parental Controls (Microsoft): เป็นการขยายของ Microsoft ความผิดพลาดนี้เกิดขึ้นเมื่อ Windows Parental Controls เปิดใช้งานและปิดกั้นการเข้าถึงหน้าเว็บที่ระบุ 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): ถูกใช้ใน Exchange ActiveSync เมื่อใดก็ตามที่มีเซิร์ฟเวอร์ที่มีประสิทธิภาพมากกว่าที่จะใช้ หรือเซิร์ฟเวอร์ไม่สามารถเข้าถึงกล่องจดหมายของผู้ใช้
   * เนื่องจากเหตุผลทางกฎหมายไม่สามารถใช้งานได้: เซิร์ฟเวอร์ไม่สามารถดำเนินการเนื่องจากได้รับการร้องขอจากกฎหมาย
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Header ของคำขอใหญ่เกินไป (Nginx): รหัสภายในของ Nginx คล้ายกับ 431 แต่ถูกนำมาใช้ก่อนในรุ่น 0.9.4 (ในวันที่ 21 มกราคม ค.ศ. 2011)
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * ผิดพลาดของใบรับรอง (Nginx) : รหัสภายในของ Nginx ที่ใช้เมื่อมาพบผิดพลาดของใบรับรองของลูกค้า SSL เพื่อแยกจาก 4XX ในบันทึกและการเปลี่ยนเส้นทางของหน้าใด้ผิดพลาด 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx) : รหัสภายในของ Nginx ที่ใช้เมื่อลูกค้าไม่ได้ให้ใบรับรอง เพื่อแยกจาก 4XX ใน日誌และเปลี่ยนเส้นทางไปยังหน้าความผิดพลาด
   * ไม่มีใบรับรอง: รหัสภายในของ Nginx ที่ใช้เมื่อลูกค้าไม่ได้ให้ใบรับรอง เพื่อแยกจาก 4XX ใน日誌และเปลี่ยนเส้นทางไปยังหน้าความผิดพลาด 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP ไปยัง HTTPS (Nginx) : โค้ดภายในของ Nginx ที่ใช้สำหรับคำขอ HTTP แบบธรรมดาที่ถูกส่งไปยังพอร์ต HTTPS เพื่อแยกจาก 4XX ในบันทึกและการเปลี่ยนย้ายหน้าแบบผิดพลาด  
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * โทเค็นหมดอายุ/ไม่ถูกต้อง (Esri) : ส่งกลับโดย ArcGIS for Server คำรหัส 498 ระบุว่า โทเค็นหมดอายุหรือไม่ถูกต้อง 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * ความจำเป็นของโทเคน: คืนค่าโดย ArcGIS for Server. รหัส 499 บ่งบอกว่าต้องการโทเคน (หากไม่ได้ส่งโทเคน) 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * ข้อผิดพลาดภายในเซิร์ฟเวอร์: สถานะทั่วไปสำหรับข้อผิดพลาดในเซิร์ฟเวอร์ของตัวเอง 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * ไม่ได้ดำเนินการ: เซิร์ฟเวอร์ไม่สามารถตอบสนองคำร้องขอได้ ซึ่งโดยปกติหมายความว่า เซิร์ฟเวอร์อาจสนับสนุนคำร้องขอนี้ในอนาคต มิฉะนั้น สถานะ 4xx อาจเหมาะสมกว่า 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * ประตูเข้าไม่ถูกต้อง: เซิร์ฟเวอร์ทำหน้าที่เป็นพร็อกซี่และไม่ได้รับการตอบสนองที่ยอมรับได้จากเซิร์ฟเวอร์ด้านบน 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * บริการไม่สามารถใช้งานได้: เซิร์ฟเวอร์ปิดและไม่รับคำขอ 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * เวลาเกทเวย์หมดเวลา: เซิร์ฟเวอร์ทำหน้าที่เป็นพร็อกซีและไม่ได้รับการตอบสนองจากเซิร์ฟเวอร์ด้านบน 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * รุ่น HTTP ไม่ได้รับการสนับสนุน: เซิร์ฟเวอร์ไม่สนับสนุนรุ่นของโปรโตคอล HTTP ที่ระบุในคำขอ 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant ก็กำลังเจรจาเช่นกัน: การเจรจาเนื้อหาที่โปร่งใสสำหรับผลลัพธ์ของคำขอทำให้เกิดการอ้างถึงแบบวนซ้ำ 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * การจัดเก็บไม่เพียงพอ: ผู้ใช้หรือเซิร์ฟเวอร์ไม่มีโควต้าจัดเก็บที่เพียงพอเพื่อตอบสนองคำขอ 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * ตรวจพบวัฏจักร: เซิร์ฟเวอร์ตรวจพบวัฏจักรไม่มีที่สิ้นสุดในคำขอ 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Limit บรอดแบนด์เกิน (Apache bw/limited extension) : รหัสสถานะนี้ไม่ได้ระบุไว้ใน RFC ใด ๆ การใช้งานของมันเป็นที่ไม่รู้ 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * ไม่ได้ขยาย: การขยายคำขอเพิ่มเติมเป็นสิ่งจำเป็นเพื่อให้การดำเนินการสำเร็จ 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * การรับรองของเครือข่ายจำเป็น: ผู้ใช้งานลูกค้าต้องได้รับการรับรองจากเครือข่ายก่อนที่จะส่งคำร้อง
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * ความผิดพลาดที่ไม่รู้จัก (Microsoft/CloudFlare): รหัสสถานะนี้ไม่ได้ระบุใน RFC ใดเลย และถูกส่งกลับโดยบริการบางอย่าง เช่น เซิร์ฟเวอร์ของ Microsoft Azure และ CloudFlare: "ความผิดพลาด 520 นั้นเป็นการตอบสนองแบบ "ครอบคลุมทุกกรณี" สำหรับเมื่อเซิร์ฟเวอร์ต้นทางส่งสิ่งที่ไม่คาดคิดหรือสิ่งที่ไม่ได้รับการยอมรับ/ตีความ (การละเมิดโปรโตคอลหรือการตอบสนองว่างเปล่า)" 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * เซิร์ฟเวอร์เว็บล่ม (CloudFlare): เซิร์ฟเวอร์ต้นฉบับปฏิเสธการเชื่อมต่อจาก CloudFlare 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Timeout เชื่อมต่อ (CloudFlare): CloudFlare ไม่สามารถเจรจาปฏิบัติการถือมือ TCP กับเซิร์ฟเวอร์ต้นฉบับ 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare) : CloudFlare ไม่สามารถเข้าถึงเซิร์ฟเวอร์ต้นทางได้; ตัวอย่างเช่น ถ้าบันทึก DNS สำหรับเซิร์ฟเวอร์ต้นทางไม่ถูกต้อง 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * เกิดการหมดเวลา (CloudFlare) : CloudFlare สามารถสร้างการเชื่อมต่อ TCP กับเซิร์ฟเวอร์ต้นฉบับได้ แต่ไม่ได้รับการตอบสนอง HTTP ในเวลาที่เหมาะสม 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare) : CloudFlare ไม่สามารถเจรจา SSL/TLS handshake กับเซิร์ฟเวอร์ต้นแบบได้ 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * ใบรับรอง SSL ไม่ถูกต้อง (CloudFlare): CloudFlare ไม่สามารถยืนยันใบรับรอง SSL/TLS ที่เซิร์ฟเวอร์ต้นทางนำเสนอได้ 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun ผิดพลาด (CloudFlare) : คำขอหมดเวลาหรือล้มเหลวหลังจากการเชื่อมต่อ WAN ได้ถูกสร้างขึ้น 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * ดำเนินต่อ: เซิร์ฟเวอร์ได้รับหัวข้อคำขอแล้วและลูกค้าควรดำเนินการส่งร่างของคำขอต่อไป 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * การสลับโปรโทคอล: ผู้ร้องขอได้ขอให้เซิร์ฟเวอร์สลับโปรโทคอล และเซิร์ฟเวอร์ยืนยันว่าจะทำเช่นนั้น 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * ดำเนินการ: เซิร์ฟเวอร์ได้รับและกำลังดำเนินการคำขอ แต่ยังไม่มีการตอบสนองที่พร้อมใช้งาน
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * โอเค: การตอบสนองมาตรฐานสำหรับคำขอ HTTP สำเร็จ 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * สร้างแล้ว: คำขอได้รับการดำเนินการสำเร็จและทรัพยากรใหม่ได้ถูกสร้าง 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * ยอมรับ: คำขอได้รับการยอมรับแต่ยังไม่ได้ดำเนินการเสร็จสิ้น โค้ดนี้ไม่ได้การันตีว่าคำขอจะดำเนินการสำเร็จ 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * ข้อมูลที่ไม่มีอำนาจ: HTTP 1.1. เซิร์ฟเวอร์ประมวลผลคำขอได้สำเร็จแต่กำลังส่งกลับข้อมูลจากแหล่งอื่น
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * ไม่มีเนื้อหา: เซิร์ฟเวอร์ได้รับคำขอ แต่ไม่ได้ส่งเนื้อหาใดๆ กลับมา นี่มักถูกใช้เป็นการตอบสนองของคำขอ DELETE 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * รีเซ็ตเนื้อหา: คล้ายกับการตอบสนอง 204 ไม่มีเนื้อหา แต่ตอบสนองนี้ต้องการให้ผู้ร้องขอรีเซ็ตมุมมองของเอกสาร 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * ส่วนเนื้อหาบางส่วน: เซิร์ฟเวอร์ให้เพียงส่วนของเนื้อหาที่ถูกขอโดยลูกค้าผ่านหัวข้อช่วง (Range header) 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * สถานะหลาย: ร่างข้อความที่ตามมานี้เป็นข้อความ XML และอาจมีรหัสการตอบสนองหลายตัว ขึ้นอยู่กับว่ามีการส่งคำร้องย่อยจำนวนเท่าใด 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * ได้รายงานแล้ว: สมาชิกของการผูกมัด DAV ได้รับการระบุไว้ในคำตอบก่อนหน้านี้สำหรับคำขอครั้งนี้ และจะไม่รวมซ้ำอีก 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM ใช้: เซิร์ฟเวอร์ได้ดำเนินการตามคำขอ GET สำหรับทรัพยากร และการตอบสนองเป็นการแสดงผลของผลที่ได้จากการดำเนินการแบบตัวอย่างหนึ่งหรือหลายตัวที่นำไปใช้กับตัวอย่างปัจจุบัน 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * หลายทางเลือก: ผู้ใช้สามารถเลือกหนึ่งในหลายตัวเลือกที่มีเพื่อดำเนินการในสถานการณ์โปรโตคอลการถ่ายโอนไฮเปอร์เท็กซ์ 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * ถูกย้ายถาวร: ทรัพยากรถูกย้ายและการร้องขอทั้งหมดในภายหลังควรอ้างถึง URI ใหม่ของมัน 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * พบว่า: รPECIFICATION ของ HTTP 1.0 อธิบายสถานะนี้เป็น "ย้ายชั่วคราว" แต่เบราว์เซอร์ที่เป็นที่นิยมตอบสนองต่อสถานะนี้คล้ายกับพฤติกรรมที่หมายถึง 303 สามารถดึงทรัพยากรได้โดยอ้างถึง URI ที่ถูกส่งกลับมา 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * ดูผู้อื่น: ทรัพยากรสามารถดึงได้โดยการติดตาม URI อื่นโดยใช้วิธี GET เมื่อรับในคำตอบต่อคำขอ POST, PUT หรือ DELETE สามารถถือได้โดยปกติว่าเซิร์ฟเวอร์ประมวลคำขอสำเร็จและกำลังส่งลูกค้าไปยังจุดสิ้นสุดข้อมูลเชิงให้ข้อมูล 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * ไม่ได้แก้ไข: ตั้งแต่เวอร์ชันที่ระบุในหัวข้อ If-Modified-Since หรือ If-Match รายการทรัพยากรไม่ได้ถูกแก้ไข รายการทรัพยากรจะไม่ถูกส่งกลับในร่างของการตอบสนอง 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * ใช้พร็อกซี่: HTTP 1.1. ทรัพยากรสามารถเข้าถึงได้ผ่านพร็อกซี่เท่านั้น และที่อยู่ถูกให้ไว้ในการตอบสนอง 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * Switch proxy: ถูกเลิกใช้ใน HTTP 1.1. ใช้หมายถึงคำขอถัดไปควรส่งโดยใช้ proxy ที่ระบุ 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * การเปลี่ยนเส้นทางชั่วคราว: HTTP 1.1 ผู้ร้องขอควรส่งซ้ำด้วย URI ที่ให้ไว้ในการตอบสนอง แต่การร้องขอในอนาคตควรเรียก URI เดิม 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resume Incomplete (Google) : โค้ดนี้ถูกใช้ในข้อเสนอ Resumable HTTP Requests เพื่อเริ่มใหม่คำขอ PUT หรือ POST ที่ถูกหยุดกะทันหัน
   * การเปลี่ยนเส้นทางถาวร : คำขอและคำขอต่อไปในอนาคตทั้งหมดควรถูกส่งใหม่โดยใช้ URI ที่ให้มาในการตอบสนอง 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * คำร้องผิดพลาด: ไม่สามารถตอบสนองคำร้องได้เนื่องจากไวยากรณ์ของคำร้องไม่ถูกต้อง 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * ไม่ได้รับอนุญาต: ผู้ร้องขอไม่ได้รับอนุญาตให้เข้าถึงทรัพยากร นี่คล้ายกับ 403 แต่ใช้ในกรณีที่การยืนยันตัวตนคาดหวัง แต่ล้มเหลวหรือไม่ได้ให้ 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * การชำระเงินจำเป็น: เหลือไว้สำหรับใช้ในอนาคต บางบริการเว็บใช้สถานะนี้เป็นสัญญาณว่าลูกค้าส่งคำขอจำนวนมากเกินไป 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * ห้าม: คำขอถูกจัดรูปแบบถูกต้อง แต่เซิร์ฟเวอร์ปฏิเสธที่จะให้ทรัพยากรที่ร้องขอ ไม่เหมือนกับ 401 การตรวจสอบสิทธิ์จะไม่ทำให้การตอบสนองของเซิร์ฟเวอร์แตกต่าง 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * ไม่พบ:ทรัพยากรไม่สามารถพบได้ นี่มักถูกใช้เป็นทั้งหมดสำหรับการร้องขอ URI ไม่ถูกต้องทั้งหมดที่ถูกร้องขอจากเซิร์ฟเวอร์ 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * วิธีการไม่ได้รับอนุญาต: การร้องขอทรัพยากรด้วยวิธีการที่ไม่ได้รับอนุญาต ตัวอย่างเช่น การร้องขอทรัพยากรด้วยวิธีการ POST เมื่อทรัพยากรสนับสนุนเพียงวิธีการ GET 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * ไม่สามารถยอมรับ: แหล่งทรัพยากรเป็นถูกต้อง แต่ไม่สามารถให้ในรูปแบบที่ระบุไว้ใน заголовง Accept ในคำขอ 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * การรับรองตัวตนของพร็อกซีเป็นสิ่งจำเป็น: การรับรองตัวตนของพร็อกซีเป็นสิ่งจำเป็นก่อนที่คำขอจะได้รับการดำเนินการ 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * หมดเวลารอคำขอ: เซิร์ฟเวอร์หมดเวลารอคำขอจากไคลเอนต์ ผู้ใช้ไคลเอนต์สามารถส่งคำขอใหม่ได้ 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * ความขัดแย้ง: การร้องขอไม่สามารถดำเนินการเสร็จสมบูรณ์ เนื่องจากมีความขัดแย้งในพารามิเตอร์การร้องขอ 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * หายไป: แหล่งทรัพยากรไม่พร้อมใช้งานอีกต่อไปที่ URI ที่ถูกร้องขอและไม่มีการเปลี่ยนเส้นทางที่ให้มา 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * ความยาวที่ต้องการ: คำขอไม่ได้ระบุความยาวของเนื้อหาเช่นที่กำหนดไว้ตามทรัพยากร 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * เงื่อนไขล่วงหน้าล้มเหลว: เซิร์ฟเวอร์ไม่ตรงตามเงื่อนไขล่วงหน้าหนึ่งข้อที่ระบุโดยไคลเอ็นต์ 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * ร่างข้อมูลของคำขอใหญ่เกินไป: เนื้อหาของคำขอมากกว่าที่เซิร์ฟเวอร์สามารถประมวลผลได้ 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI ของคำขอยาวเกินไป: URI ที่ให้ไว้ในคำขอตัวนี้ยาวเกินไปสำหรับเซิร์ฟเวอร์ในการประมวลผล นี่มักใช้เมื่อมีข้อมูลมากเกินไปถูกเข้ารหัสใน URI ของคำขอ GET และควรใช้คำขอ POST แทน 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * ประเภทสื่อไม่ได้รับการสนับสนุน: ผู้ใช้งานลูกค้าให้ข้อมูลในประเภทสื่อที่เซิร์ฟเวอร์ไม่สนับสนุน 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * ช่วงการร้องขอไม่เป็นที่พอใจ: ผู้ใช้งานได้ขอส่วนหนึ่งของทรัพยากร แต่เซิร์ฟเวอร์ไม่สามารถให้ส่วนดังกล่าวได้ 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * ความคาดหวังล้มเหลว: เซิร์ฟเวอร์ไม่สามารถตอบสนองความต้องการของฟิลด์หัวข้อคำขอ Expect 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * ฉันคือหม้อชา: การพยายามชงกาแฟด้วยหม้อชาใด ๆ ควรทำให้เกิดรหัสข้อผิดพลาด "418 ฉันคือหม้อชา" เนื้อหาตัว实อาจจะสั้นและแข็ง 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * คำขอผิดทิศทาง: คำขอถูกส่งไปยังเซิร์ฟเวอร์ที่ไม่สามารถให้การตอบสนองได้ สถานะนี้อาจถูกส่งโดยเซิร์ฟเวอร์ที่ไม่ได้กำหนดการให้การตอบสนองสำหรับโครงสร้างและผู้มีอำนาจที่ถูกระบุไว้ใน URI ของคำขอ 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 实体内處理不了：請求格式正確，但在當前表單中無法處理。通常在指定的參數未通過驗證錯誤時使用。 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * ล็อค: บริการที่ร้องขอพบแล้ว แต่ถูกล็อคและไม่สามารถเข้าถึงได้ 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * ความล้มเหลวของการพึ่งพา: คำขอถูกปฏิเสธเนื่องจากความล้มเหลวของคำขอก่อนหน้า 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * การปรับรุ่นจำเป็น: ผู้ใช้งานเชื่อมต่อควรส่งคำขอใหม่โดยใช้โปรโตคอลที่ปรับรุ่นใหม่ เช่น TLS 1.0 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * เงื่อนไขล่วงหน้าจำเป็น: เซิร์ฟเวอร์ต้นฉบับต้องการให้คำขอเป็นแบบมีเงื่อนไข 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * คำขอมากเกินไป: ผู้ใช้ส่งคำขอจำนวนมากเกินไปในช่วงเวลาที่กำหนด ("การจำกัดอัตรา") 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * ฟิลด์หัวข้อคำขอใหญ่เกินไป: เซิร์ฟเวอร์ไม่ต้องการประมวลผลคำขอเนื่องจากฟิลด์หัวข้อของมันใหญ่เกินไป 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * Timeout เข้าสู่ระบบ (Microsoft) : การขยายของ Microsoft แสดงว่าการเซสชั่นของคุณหมดเวลา 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * ไม่ตอบสนอง (Nginx) : ใช้ในบันทึกของ Nginx เพื่อระบุว่าเซิร์ฟเวอร์ไม่ได้ส่งข้อมูลใด ๆ ให้กับไคลเอนต์และปิดการเชื่อมต่อ (เป็นประโยชน์เป็นเครื่องยับยั้งสำหรับมัลแวร์) 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * Retry With (Microsoft) : การขยายของ Microsoft การร้องขอควรถูกทำซ้ำหลังจากดำเนินการที่ถูกต้อง
   *
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * ถูกบล็อกโดย Windows Parental Controls (Microsoft): เป็นการขยายของ Microsoft ความผิดพลาดนี้เกิดขึ้นเมื่อ Windows Parental Controls เปิดใช้งานและปิดกั้นการเข้าถึงหน้าเว็บที่ระบุ 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): ถูกใช้ใน Exchange ActiveSync เมื่อใดก็ตามที่มีเซิร์ฟเวอร์ที่มีประสิทธิภาพมากกว่าที่จะใช้ หรือเซิร์ฟเวอร์ไม่สามารถเข้าถึงกล่องจดหมายของผู้ใช้
   * เนื่องจากเหตุผลทางกฎหมายไม่สามารถใช้งานได้: เซิร์ฟเวอร์ไม่สามารถดำเนินการเนื่องจากได้รับการร้องขอจากกฎหมาย
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * Header ของคำขอใหญ่เกินไป (Nginx): รหัสภายในของ Nginx คล้ายกับ 431 แต่ถูกนำมาใช้ก่อนในรุ่น 0.9.4 (ในวันที่ 21 มกราคม ค.ศ. 2011)
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * ผิดพลาดของใบรับรอง (Nginx) : รหัสภายในของ Nginx ที่ใช้เมื่อมาพบผิดพลาดของใบรับรองของลูกค้า SSL เพื่อแยกจาก 4XX ในบันทึกและการเปลี่ยนเส้นทางของหน้าใด้ผิดพลาด 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx) : รหัสภายในของ Nginx ที่ใช้เมื่อลูกค้าไม่ได้ให้ใบรับรอง เพื่อแยกจาก 4XX ใน日誌และเปลี่ยนเส้นทางไปยังหน้าความผิดพลาด
   * ไม่มีใบรับรอง: รหัสภายในของ Nginx ที่ใช้เมื่อลูกค้าไม่ได้ให้ใบรับรอง เพื่อแยกจาก 4XX ใน日誌และเปลี่ยนเส้นทางไปยังหน้าความผิดพลาด 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP ไปยัง HTTPS (Nginx) : โค้ดภายในของ Nginx ที่ใช้สำหรับคำขอ HTTP แบบธรรมดาที่ถูกส่งไปยังพอร์ต HTTPS เพื่อแยกจาก 4XX ในบันทึกและการเปลี่ยนย้ายหน้าแบบผิดพลาด  
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * โทเค็นหมดอายุ/ไม่ถูกต้อง (Esri) : ส่งกลับโดย ArcGIS for Server คำรหัส 498 ระบุว่า โทเค็นหมดอายุหรือไม่ถูกต้อง 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * ความจำเป็นของโทเคน: คืนค่าโดย ArcGIS for Server. รหัส 499 บ่งบอกว่าต้องการโทเคน (หากไม่ได้ส่งโทเคน) 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * ข้อผิดพลาดภายในเซิร์ฟเวอร์: สถานะทั่วไปสำหรับข้อผิดพลาดในเซิร์ฟเวอร์ของตัวเอง 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * ไม่ได้ดำเนินการ: เซิร์ฟเวอร์ไม่สามารถตอบสนองคำร้องขอได้ ซึ่งโดยปกติหมายความว่า เซิร์ฟเวอร์อาจสนับสนุนคำร้องขอนี้ในอนาคต มิฉะนั้น สถานะ 4xx อาจเหมาะสมกว่า 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * ประตูเข้าไม่ถูกต้อง: เซิร์ฟเวอร์ทำหน้าที่เป็นพร็อกซี่และไม่ได้รับการตอบสนองที่ยอมรับได้จากเซิร์ฟเวอร์ด้านบน 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * บริการไม่สามารถใช้งานได้: เซิร์ฟเวอร์ปิดและไม่รับคำขอ 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * เวลาเกทเวย์หมดเวลา: เซิร์ฟเวอร์ทำหน้าที่เป็นพร็อกซีและไม่ได้รับการตอบสนองจากเซิร์ฟเวอร์ด้านบน 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * รุ่น HTTP ไม่ได้รับการสนับสนุน: เซิร์ฟเวอร์ไม่สนับสนุนรุ่นของโปรโตคอล HTTP ที่ระบุในคำขอ 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant ก็กำลังเจรจาเช่นกัน: การเจรจาเนื้อหาที่โปร่งใสสำหรับผลลัพธ์ของคำขอทำให้เกิดการอ้างถึงแบบวนซ้ำ 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * การจัดเก็บไม่เพียงพอ: ผู้ใช้หรือเซิร์ฟเวอร์ไม่มีโควต้าจัดเก็บที่เพียงพอเพื่อตอบสนองคำขอ 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * ตรวจพบวัฏจักร: เซิร์ฟเวอร์ตรวจพบวัฏจักรไม่มีที่สิ้นสุดในคำขอ 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * Limit บรอดแบนด์เกิน (Apache bw/limited extension) : รหัสสถานะนี้ไม่ได้ระบุไว้ใน RFC ใด ๆ การใช้งานของมันเป็นที่ไม่รู้ 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * ไม่ได้ขยาย: การขยายคำขอเพิ่มเติมเป็นสิ่งจำเป็นเพื่อให้การดำเนินการสำเร็จ 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * การรับรองของเครือข่ายจำเป็น: ผู้ใช้งานลูกค้าต้องได้รับการรับรองจากเครือข่ายก่อนที่จะส่งคำร้อง
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * ความผิดพลาดที่ไม่รู้จัก (Microsoft/CloudFlare): รหัสสถานะนี้ไม่ได้ระบุใน RFC ใดเลย และถูกส่งกลับโดยบริการบางอย่าง เช่น เซิร์ฟเวอร์ของ Microsoft Azure และ CloudFlare: "ความผิดพลาด 520 นั้นเป็นการตอบสนองแบบ "ครอบคลุมทุกกรณี" สำหรับเมื่อเซิร์ฟเวอร์ต้นทางส่งสิ่งที่ไม่คาดคิดหรือสิ่งที่ไม่ได้รับการยอมรับ/ตีความ (การละเมิดโปรโตคอลหรือการตอบสนองว่างเปล่า)" 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * เซิร์ฟเวอร์เว็บล่ม (CloudFlare): เซิร์ฟเวอร์ต้นฉบับปฏิเสธการเชื่อมต่อจาก CloudFlare 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * Timeout เชื่อมต่อ (CloudFlare): CloudFlare ไม่สามารถเจรจาปฏิบัติการถือมือ TCP กับเซิร์ฟเวอร์ต้นฉบับ 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare) : CloudFlare ไม่สามารถเข้าถึงเซิร์ฟเวอร์ต้นทางได้; ตัวอย่างเช่น ถ้าบันทึก DNS สำหรับเซิร์ฟเวอร์ต้นทางไม่ถูกต้อง 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * เกิดการหมดเวลา (CloudFlare) : CloudFlare สามารถสร้างการเชื่อมต่อ TCP กับเซิร์ฟเวอร์ต้นฉบับได้ แต่ไม่ได้รับการตอบสนอง HTTP ในเวลาที่เหมาะสม 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare) : CloudFlare ไม่สามารถเจรจา SSL/TLS handshake กับเซิร์ฟเวอร์ต้นแบบได้ 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * ใบรับรอง SSL ไม่ถูกต้อง (CloudFlare): CloudFlare ไม่สามารถยืนยันใบรับรอง SSL/TLS ที่เซิร์ฟเวอร์ต้นทางนำเสนอได้ 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Railgun ผิดพลาด (CloudFlare) : คำขอหมดเวลาหรือล้มเหลวหลังจากการเชื่อมต่อ WAN ได้ถูกสร้างขึ้น 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
