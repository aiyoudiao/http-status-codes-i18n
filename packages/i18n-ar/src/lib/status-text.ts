/**
 * © 2024 aiyoudiao
 *
 * تم إنشاء هذا الملف بواسطة aiyoudiao ويتضمن الكثير من الجهد والعمل والحصافة.
 *
 * يمكنك استخدام وتعديل وتوزيع هذا الملف بحرية، لكن يرجى الاحتفاظ ببيان حقوق النشر هذا.
 *
 * إذا وجدت هذا الملف مفيدًا، يرجى إعطائي نجمة أو تابعوني ツ.
 *
 * معلومات الاتصال:
 * - البريد الإلكتروني: ,newdiao@163.com,
 * - GitHub: ,https://github.com/aiyoudiao,
 *
 * سعيد الترميز! تذكر، الشفرة هي الشعر، والواجهة الأمامية هي الفن. ツ
 */
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * استمرار: لقد تلقى الخادم رؤوس الطلبات، ويجب على العميل أن يواصل إرسال جسم الطلب. 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * تبديل البروتوكولات: طلب الطالب من الخادم تبديل البروتوكولات وأكد الخادم أنه سيفعل ذلك. 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * معالجة: تلقى الخادم الطلب ويقوم بمعالجته حالياً، ولكن لا يوجد رد متاح حتى الآن. 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة." 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * تم إنشاء: تم الوفاء بالطلب وتم إنشاء مصدر جديد. 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * مقبولة: تم قبول الطلب ولكن لم يتم معالجته بعد. هذا الرمز لا يضمن معالجة الطلب بنجاح. 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * معلومات غير ذات الصلاحية: HTTP 1.1. نجحت الخادم في معالجة الطلب ولكن تعيد معلومات من مصدر آخر. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * لا محتوى: قبل الخادم الطلب لكن لا يرجع أي محتوى. يستخدم هذا غالبا كاستجابة لطلب DELETE. 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * إعادة ضبط المحتوى: يشبه استجابة 204 بدون محتوى، ولكن هذه الاستجابة تتطلب من الطالب إعادة ضبط عرض المستند. 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * محتوى جزئي: يقدم الخادم جزءًا فقط من المحتوى، كما طلب العميل عبر رأس المدى (Range header). 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * مضاعف الوضع: إن جسم الرسالة التالي هو رسالة XML ويستطيع أن يحتوي على عدد من رموز الاستجابة المنفصلة، اعتمادًا على عدد الطلبات الفرعية المقدمة. 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * تم الإبلاغ مسبقاً: تم تعداد أعضاء الربط DAV بالفعل في رد سابق على هذا الطلب، ولا يتم تضمينها مرة أخرى. 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * استخدمت IM: لقد حقق الخادم طلب GET للموارد، والرد يمثل نتيجة تطبيق واحد أو أكثر من عمليات التلاعب بالحالة على الحالة الحالية. 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * الاختيارات المتعددة: هناك عدة خيارات يمكن للعميل اختيار أحدها للعمل. 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * انتقل إلى الأبد: تم نقل المورد وتجب الإشارة إلى URI الجديد الخاص به في جميع الطلبات اللاحقة. 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * وجد: أوضحت مواصفات HTTP 1.0 هذا الوضع على أنه "نقل مؤقت"، لكن المتصفحات الشائعة تستجيب لهذا الوضع مماثلة للسلوك المقصود لـ 303. يمكن الحصول على الموارد من خلال الرجوع إلى URI الذي تم إرجاعه. 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * انظر الآخر: يمكن استرداد الموارد عن طريق اتباع URI آخر باستخدام طريقة GET. عندما يتم تلقيها ردًا على طلب POST أو PUT أو DELETE، يمكن افتراضًا عادة أن الخادم قد قام بمعالجة الطلب بنجاح ويوجه العميل إلى نقطة معلومات. 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * لم يتم تعديل: لم يتم تعديل الموارد منذ الإصدار المحدد في رؤوس If-Modified-Since أو If-Match. لن يتم إرجاع الموارد في جسم الاستجابة. 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * استخدام البروكسي: HTTP 1.1. لا يتوفر المورد إلا من خلال البروكسي ويتم توفير العنوان في الرد. 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * تبديل الوكيل: تم إهماله في HTTP 1.1. وكان يستخدم ليعني أن الطلبات اللاحقة يجب أن يتم إرسالها باستخدام الوكيل المحدد. 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * تحويل مؤقت: HTTP 1.1. يجب تكرار الطلب باستخدام URI المقدم في الاستجابة، لكن الطلبات المستقبلية يجب أن تستدعي URI الأصلي. 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * استئناف غير مكتمل (Google): هذا الرمز يستخدم في اقتراح طلبات HTTP قابلة للاستئناف لاستئناف الطلبات PUT أو POST الملغاة.
   * إعادة التوجيه الدائم: يجب إرسال الطلبات وجميع الطلبات المستقبلية باستخدام URI المقدم في الاستجابة. 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * طلب خاطئ: لم يتم الوفاء بالطلب بسبب بناء جملة الطلب الخاطئة. 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * غير مصرح به: الطالب غير مصرح له بالوصول إلى المورد. هذا يشبه 403 لكن يستخدم في الحالات التي يتوقع فيها المصادقة لكنها فشلت أو لم يتم تقديمها. 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * الدفع مطلوب: محجوز للاستخدام في المستقبل. بعض الخدمات الإلكترونية تستخدم هذا باعتباره إشارة إلى أن العميل قد أرسل عددًا كبيرًا جدًا من الطلبات. 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * ممنوع: تم صياغة الطلب بشكل صحيح ولكن الخادم يرفض تقديم الموارد المطلوبة. على عكس 401، لن يحدث التأكيد على الهوية أي فرق في استجابة الخادم. 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * لم يتم العثور عليه: لم يتم العثور على الموارد. يستخدم هذا في كثير من الأحيان كاستجابة عامة لجميع طلبات URI غير صالحة المطلوبة من الخادم. 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * غير مسموح بالطريقة: تم طلب المورد باستخدام طريقة غير مسموح بها. على سبيل المثال، طلب مورد باستخدام طريقة POST عندما يدعم المورد فقط طريقة GET. 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * غير مقبول: المصدر صالح، لكن لا يمكن تقديمه بالتنسيق المحدد في رؤوس قبول الطلب. 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * يتطلب مصادقة الوكيل: قبل تلبية الطلبات، يجب إجراء مصادقة على الوكيل. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * انقطاع الطلب: تجاوز الخادم الوقت المحدد في انتظار طلب من العميل. ويُسمح للعميل بإعادة إرسال الطلب. 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * صراع: لا يمكن إكمال الطلب بسبب صراع في معايير الطلب. 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * ذهب: المصدر غير متوفر الآن عند URI المطلوبة ولن يتم تقديم إعادة توجيه. 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * مطلوب طول: لم يحدد الطلب طول محتواه كما هو مطلوب من المورد. 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * شرط مسبق فشل: الخادم لا يفي بشرط مسبق واحد محدد من قبل العميل. 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * طلب كيان كبير جدًا: محتوى الطلب أكبر مما يستطيع الخادم معالجته. 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * طلب URI طويل جدًا: URI المقدم في الطلب طويل جدًا بحيث لا يمكن معالجته من قبل الخادم. ويستخدم هذا في كثير من الأحيان عندما يتم ترميز الكثير من البيانات في URI لطلب GET ويجب استخدام طلب POST بدلاً من ذلك. 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * نوع الوسائط غير المدعوم: البيانات التي قدمها العميل تتضمن نوع الوسائط غير المدعوم من قبل الخادم. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * نطاق الطلب غير قابل للرضى: طلب العميل جزءًا من الموارد لكن الخادم لا يستطيع توفير ذلك الجزء. 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * فشل التوقع: لا يمكن للخادم تلبية متطلبات حقل رأس الطلب "Expect". 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * أنا إبريق الشاي: يجب أن يؤدي أي محاولة لصنع القهوة باستخدام إبريق الشاي إلى رمز الخطأ "418 أنا إبريق الشاي". وقد يكون جسم الكيان الناتج قصيرًا وسمينًا. 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * طلب غير صحيح التوجيه: الطلب وجه إلى خادم غير قادر على إنتاج رد. يمكن إرسال هذا الرمز الحالة بواسطة خادم لم يتم تهيئته لإنتاج ردود للمجموعة المكونة من المخطط والسلطة المضمنة في URI الطلب. 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * كيان غير قابل للمعالجة: الطلب تمت صياغته بشكل صحيح ولكن لا يمكن معالجته في الشكل الحالي. ويُستخدم غالبًا عندما تفشل المعلمات المحددة في أخطاء التحقق. 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * مغلق: تم العثور على المورد المطلوب ولكن تم قفله ولن يتم إرجاعه. 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * فشل الاعتماد: فشلت الطلب الحالي بسبب فشل الطلب السابق. 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * مطلوب الترقية: يجب على العميل إعادة الطلب باستخدام بروتوكول محدث مثل TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * شرط مسبق مطلوب: يتطلب الخادم الأصلي أن يكون الطلب مشروطًا. 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * عدد الطلبات كبير جدًا: لقد أرسل المستخدم عددًا كبيرًا جدًا من الطلبات في فترة زمنية معينة ("الحد من المعدل"). 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * حقول رأس الطلب كبيرة جدًا: không يرغب الخادم في معالجة الطلب لأن حقول رأسه كبيرة جدًا. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * وقت تسجيل الدخول تجاوز (ميكروسوفت): تمديد ميكروسوفت. يشير إلى أن جلستك قد انتهت. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * عدم الرد (Nginx): يستخدم في سجلات Nginx للإشارة إلى أن الخادم لم يرسل أي معلومات إلى العميل وأغلق الاتصال (مفيد كردع للبرامج الضارة). 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * إعادة المحاولة مع (ميكروسوفت) : امتداد من ميكروسوفت. يجب إعادة إرسال الطلب بعد تنفيذ الإجراء المناسب. 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * محظور بواسطة عناصر التحكم الأبوية لويندوز (ميكروسوفت): امتداد لمايكروسوفت. يتم إعطاء هذا الخطأ عندما يتم تشغيل عناصر التحكم الأبوية لويندوز ويتم حجب الوصول إلى الصفحة الإلكترونية المحددة. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * "Redirect (Microsoft)": يستخدم في Exchange ActiveSync إذا كانت هناك إما خادم أكثر كفاءة للاستخدام أو إذا لم يتمكن الخادم من الوصول إلى صندوق البريد الخاص بالمستخدم. "غير قابل للاستخدام لأسباب قانونية": الخادم غير قادر على التشغيل بسبب تلقي طلبات مقيدة قانونيا. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * رأس الطلب كبير جدًا (Nginx): الرمز الداخلي لـ Nginx مشابه إلى 431 لكن تم تقديمه في وقت سابق في الإصدار 0.9.4 (في 21 يناير 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * خطأ الشهادة (Nginx): رمز داخلي Nginx المستخدم عند حدوث خطأ في شهادة العميل SSL لتمييزه عن 4XX في سجل الصفحة وإعادة توجيه صفحة الخطأ. 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * لا شهادة (Nginx): رمز داخلي في Nginx يستخدم عندما لا يقدم العميل شهادة لتمييزها عن 4XX في سجل وتوجيه صفحة الخطأ. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP إلى HTTPS (Nginx) : الرمز الداخلي لـ Nginx المستخدم لطلبات HTTP الصافية المرسلة إلى منفذ HTTPS لتمييزها عن 4XX في السجل وإعادة توجيه صفحة الخطأ. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * انتهى صلاحية الرمز المميز / غير صالح ( Esri ): يعاد بواسطة ArcGIS for Server. يشير الرمز 498 إلى أن الرمز المميز انتهى صلاحيته أو غير صالح. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * يتطلب الرمز (Esri): يتم إرجاعه بواسطة ArcGIS for Server. يشير الرمز 499 إلى أن الرمز مطلوب (إذا لم يتم تقديم الرمز). 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * خطأ داخلي في الخادم: حالة عامة لخطأ في الخادم نفسه. 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * لم يتم تنفيذ: لا يستطيع الخادم الرد على الطلب. هذا يشير عادة إلى أن الخادم قد يكون قادرًا على دعم الطلب في المستقبل - وإلا، قد يكون رمز الحالة 4xx أكثر ملائمة. 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * بوابة سيئة: عند قيام الخادم بدور الوكيل، لم يتلق ردًا مقبولًا من الخادم العلوي. 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * غير متاح الخدمة: الخادم معطّل وغير يقبل الطلبات. 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * انقطاع البوابة: عند عمل الخادم كوكيل، لم يتلق ردًا من الخادم العلوي. 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * نسخة HTTP غير مدعومة: لا يدعم الخادم نسخة بروتوكول HTTP المحددة في الطلب. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * التبديل يتفاوض أيضًا: مفاوضات المحتوى الشفاف للطلب تؤدي إلى إحالة دائرية. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * عدم كفاية التخزين: لا يملك المستخدم أو الخادم حصة تخزين كافية لتنفيذ الطلب. 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * تم الكشف عن حلقة: كشف الخادم عن حلقة لانهائية في الطلب. 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * تجاوز حد عرض النطاق (ملحق Apachebw/limited) : لم يتم تحديد رمز الحالة هذا في أي RFCs. واستخدامها غير معروف. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * غير موسعة: يتطلب تمديدات إضافية للطلب لكي يتم الوفاء به. 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * تحتاج المصادقة الشبكية: يجب على العميل المصادقة مع الشبكة قبل إرسال الطلبات. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * خطأ غير معروف (Microsoft / CloudFlare): رمز الحالة هذا لم يحدد في أي RFC ويتم إرجاعه من قبل بعض الخدمات، مثل خوادم Microsoft Azure و CloudFlare: "إن خطأ 520 هو في الأساس استجابة "شاملة" عندما يعود الخادم الأصلي شيئًا غير متوقعًا أو شيئًا غير مسموحًا به / مفسرًا (انتهاك البروتوكول أو الرد الفارغ)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * خادم الويب معطَّل (CloudFlare): رفض الخادم الأصلي الاتصال من CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * انقطاع الاتصال الزمني (CloudFlare): لم تتمكن CloudFlare من إجراء مصافحة يدوية لـ TCP مع الخادم الأصلي. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * غير قابل للوصول إلى المصدر (CloudFlare): لم يستطع CloudFlare الوصول إلى الخادم المصدر؛ على سبيل المثال، إذا كانت سجلات DNS للخادم المصدر غير صحيحة. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * حدث وقت الانقطاع (CloudFlare): تمكن CloudFlare من إقامة اتصال TCP مع الخادم الأصلي، لكن لم يستلم الرد HTTP في الوقت المناسب. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * فشلت عملية مصافحة SSL (CloudFlare): لم يتمكن CloudFlare من إتمام عملية مصافحة SSL/TLS مع الخادم الأصلي. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * شهادة SSL غير صالحة (CloudFlare): لم تستطع CloudFlare التحقق من الشهادة SSL/TLS التي قدمها الخادم الأصلي. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * خطأ Railgun (CloudFlare): انتهت مهلة الطلب أو فشل بعد أن تم تأسيس اتصال WAN. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * استمرار: لقد تلقى الخادم رؤوس الطلبات، ويجب على العميل أن يواصل إرسال جسم الطلب. 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * تبديل البروتوكولات: طلب الطالب من الخادم تبديل البروتوكولات وأكد الخادم أنه سيفعل ذلك. 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * معالجة: تلقى الخادم الطلب ويقوم بمعالجته حالياً، ولكن لا يوجد رد متاح حتى الآن. 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * "OK: الاستجابة القياسية لطلبات HTTP الناجحة."  ,"نجاح: الاستجابة القياسية للطلبات HTTP الناجحة." 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * تم إنشاء: تم الوفاء بالطلب وتم إنشاء مصدر جديد. 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * مقبولة: تم قبول الطلب ولكن لم يتم معالجته بعد. هذا الرمز لا يضمن معالجة الطلب بنجاح. 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * معلومات غير ذات الصلاحية: HTTP 1.1. نجحت الخادم في معالجة الطلب ولكن تعيد معلومات من مصدر آخر. 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * لا محتوى: قبل الخادم الطلب لكن لا يرجع أي محتوى. يستخدم هذا غالبا كاستجابة لطلب DELETE. 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * إعادة ضبط المحتوى: يشبه استجابة 204 بدون محتوى، ولكن هذه الاستجابة تتطلب من الطالب إعادة ضبط عرض المستند. 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * محتوى جزئي: يقدم الخادم جزءًا فقط من المحتوى، كما طلب العميل عبر رأس المدى (Range header). 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * مضاعف الوضع: إن جسم الرسالة التالي هو رسالة XML ويستطيع أن يحتوي على عدد من رموز الاستجابة المنفصلة، اعتمادًا على عدد الطلبات الفرعية المقدمة. 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * تم الإبلاغ مسبقاً: تم تعداد أعضاء الربط DAV بالفعل في رد سابق على هذا الطلب، ولا يتم تضمينها مرة أخرى. 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * استخدمت IM: لقد حقق الخادم طلب GET للموارد، والرد يمثل نتيجة تطبيق واحد أو أكثر من عمليات التلاعب بالحالة على الحالة الحالية. 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * الاختيارات المتعددة: هناك عدة خيارات يمكن للعميل اختيار أحدها للعمل. 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * انتقل إلى الأبد: تم نقل المورد وتجب الإشارة إلى URI الجديد الخاص به في جميع الطلبات اللاحقة. 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * وجد: أوضحت مواصفات HTTP 1.0 هذا الوضع على أنه "نقل مؤقت"، لكن المتصفحات الشائعة تستجيب لهذا الوضع مماثلة للسلوك المقصود لـ 303. يمكن الحصول على الموارد من خلال الرجوع إلى URI الذي تم إرجاعه. 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * انظر الآخر: يمكن استرداد الموارد عن طريق اتباع URI آخر باستخدام طريقة GET. عندما يتم تلقيها ردًا على طلب POST أو PUT أو DELETE، يمكن افتراضًا عادة أن الخادم قد قام بمعالجة الطلب بنجاح ويوجه العميل إلى نقطة معلومات. 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * لم يتم تعديل: لم يتم تعديل الموارد منذ الإصدار المحدد في رؤوس If-Modified-Since أو If-Match. لن يتم إرجاع الموارد في جسم الاستجابة. 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * استخدام البروكسي: HTTP 1.1. لا يتوفر المورد إلا من خلال البروكسي ويتم توفير العنوان في الرد. 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * تبديل الوكيل: تم إهماله في HTTP 1.1. وكان يستخدم ليعني أن الطلبات اللاحقة يجب أن يتم إرسالها باستخدام الوكيل المحدد. 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * تحويل مؤقت: HTTP 1.1. يجب تكرار الطلب باستخدام URI المقدم في الاستجابة، لكن الطلبات المستقبلية يجب أن تستدعي URI الأصلي. 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * استئناف غير مكتمل (Google): هذا الرمز يستخدم في اقتراح طلبات HTTP قابلة للاستئناف لاستئناف الطلبات PUT أو POST الملغاة.
   * إعادة التوجيه الدائم: يجب إرسال الطلبات وجميع الطلبات المستقبلية باستخدام URI المقدم في الاستجابة. 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * طلب خاطئ: لم يتم الوفاء بالطلب بسبب بناء جملة الطلب الخاطئة. 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * غير مصرح به: الطالب غير مصرح له بالوصول إلى المورد. هذا يشبه 403 لكن يستخدم في الحالات التي يتوقع فيها المصادقة لكنها فشلت أو لم يتم تقديمها. 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * الدفع مطلوب: محجوز للاستخدام في المستقبل. بعض الخدمات الإلكترونية تستخدم هذا باعتباره إشارة إلى أن العميل قد أرسل عددًا كبيرًا جدًا من الطلبات. 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * ممنوع: تم صياغة الطلب بشكل صحيح ولكن الخادم يرفض تقديم الموارد المطلوبة. على عكس 401، لن يحدث التأكيد على الهوية أي فرق في استجابة الخادم. 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * لم يتم العثور عليه: لم يتم العثور على الموارد. يستخدم هذا في كثير من الأحيان كاستجابة عامة لجميع طلبات URI غير صالحة المطلوبة من الخادم. 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * غير مسموح بالطريقة: تم طلب المورد باستخدام طريقة غير مسموح بها. على سبيل المثال، طلب مورد باستخدام طريقة POST عندما يدعم المورد فقط طريقة GET. 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * غير مقبول: المصدر صالح، لكن لا يمكن تقديمه بالتنسيق المحدد في رؤوس قبول الطلب. 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * يتطلب مصادقة الوكيل: قبل تلبية الطلبات، يجب إجراء مصادقة على الوكيل. 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * انقطاع الطلب: تجاوز الخادم الوقت المحدد في انتظار طلب من العميل. ويُسمح للعميل بإعادة إرسال الطلب. 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * صراع: لا يمكن إكمال الطلب بسبب صراع في معايير الطلب. 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * ذهب: المصدر غير متوفر الآن عند URI المطلوبة ولن يتم تقديم إعادة توجيه. 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * مطلوب طول: لم يحدد الطلب طول محتواه كما هو مطلوب من المورد. 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * شرط مسبق فشل: الخادم لا يفي بشرط مسبق واحد محدد من قبل العميل. 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * طلب كيان كبير جدًا: محتوى الطلب أكبر مما يستطيع الخادم معالجته. 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * طلب URI طويل جدًا: URI المقدم في الطلب طويل جدًا بحيث لا يمكن معالجته من قبل الخادم. ويستخدم هذا في كثير من الأحيان عندما يتم ترميز الكثير من البيانات في URI لطلب GET ويجب استخدام طلب POST بدلاً من ذلك. 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * نوع الوسائط غير المدعوم: البيانات التي قدمها العميل تتضمن نوع الوسائط غير المدعوم من قبل الخادم. 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * نطاق الطلب غير قابل للرضى: طلب العميل جزءًا من الموارد لكن الخادم لا يستطيع توفير ذلك الجزء. 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * فشل التوقع: لا يمكن للخادم تلبية متطلبات حقل رأس الطلب "Expect". 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * أنا إبريق الشاي: يجب أن يؤدي أي محاولة لصنع القهوة باستخدام إبريق الشاي إلى رمز الخطأ "418 أنا إبريق الشاي". وقد يكون جسم الكيان الناتج قصيرًا وسمينًا. 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * طلب غير صحيح التوجيه: الطلب وجه إلى خادم غير قادر على إنتاج رد. يمكن إرسال هذا الرمز الحالة بواسطة خادم لم يتم تهيئته لإنتاج ردود للمجموعة المكونة من المخطط والسلطة المضمنة في URI الطلب. 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * كيان غير قابل للمعالجة: الطلب تمت صياغته بشكل صحيح ولكن لا يمكن معالجته في الشكل الحالي. ويُستخدم غالبًا عندما تفشل المعلمات المحددة في أخطاء التحقق. 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * مغلق: تم العثور على المورد المطلوب ولكن تم قفله ولن يتم إرجاعه. 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * فشل الاعتماد: فشلت الطلب الحالي بسبب فشل الطلب السابق. 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * مطلوب الترقية: يجب على العميل إعادة الطلب باستخدام بروتوكول محدث مثل TLS 1.0. 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * شرط مسبق مطلوب: يتطلب الخادم الأصلي أن يكون الطلب مشروطًا. 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * عدد الطلبات كبير جدًا: لقد أرسل المستخدم عددًا كبيرًا جدًا من الطلبات في فترة زمنية معينة ("الحد من المعدل"). 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * حقول رأس الطلب كبيرة جدًا: không يرغب الخادم في معالجة الطلب لأن حقول رأسه كبيرة جدًا. 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * وقت تسجيل الدخول تجاوز (ميكروسوفت): تمديد ميكروسوفت. يشير إلى أن جلستك قد انتهت. 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * عدم الرد (Nginx): يستخدم في سجلات Nginx للإشارة إلى أن الخادم لم يرسل أي معلومات إلى العميل وأغلق الاتصال (مفيد كردع للبرامج الضارة). 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * إعادة المحاولة مع (ميكروسوفت) : امتداد من ميكروسوفت. يجب إعادة إرسال الطلب بعد تنفيذ الإجراء المناسب. 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * محظور بواسطة عناصر التحكم الأبوية لويندوز (ميكروسوفت): امتداد لمايكروسوفت. يتم إعطاء هذا الخطأ عندما يتم تشغيل عناصر التحكم الأبوية لويندوز ويتم حجب الوصول إلى الصفحة الإلكترونية المحددة. 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * "Redirect (Microsoft)": يستخدم في Exchange ActiveSync إذا كانت هناك إما خادم أكثر كفاءة للاستخدام أو إذا لم يتمكن الخادم من الوصول إلى صندوق البريد الخاص بالمستخدم. "غير قابل للاستخدام لأسباب قانونية": الخادم غير قادر على التشغيل بسبب تلقي طلبات مقيدة قانونيا. 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * رأس الطلب كبير جدًا (Nginx): الرمز الداخلي لـ Nginx مشابه إلى 431 لكن تم تقديمه في وقت سابق في الإصدار 0.9.4 (في 21 يناير 2011). 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * خطأ الشهادة (Nginx): رمز داخلي Nginx المستخدم عند حدوث خطأ في شهادة العميل SSL لتمييزه عن 4XX في سجل الصفحة وإعادة توجيه صفحة الخطأ. 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * لا شهادة (Nginx): رمز داخلي في Nginx يستخدم عندما لا يقدم العميل شهادة لتمييزها عن 4XX في سجل وتوجيه صفحة الخطأ. 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP إلى HTTPS (Nginx) : الرمز الداخلي لـ Nginx المستخدم لطلبات HTTP الصافية المرسلة إلى منفذ HTTPS لتمييزها عن 4XX في السجل وإعادة توجيه صفحة الخطأ. 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * انتهى صلاحية الرمز المميز / غير صالح ( Esri ): يعاد بواسطة ArcGIS for Server. يشير الرمز 498 إلى أن الرمز المميز انتهى صلاحيته أو غير صالح. 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * يتطلب الرمز (Esri): يتم إرجاعه بواسطة ArcGIS for Server. يشير الرمز 499 إلى أن الرمز مطلوب (إذا لم يتم تقديم الرمز). 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * خطأ داخلي في الخادم: حالة عامة لخطأ في الخادم نفسه. 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * لم يتم تنفيذ: لا يستطيع الخادم الرد على الطلب. هذا يشير عادة إلى أن الخادم قد يكون قادرًا على دعم الطلب في المستقبل - وإلا، قد يكون رمز الحالة 4xx أكثر ملائمة. 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * بوابة سيئة: عند قيام الخادم بدور الوكيل، لم يتلق ردًا مقبولًا من الخادم العلوي. 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * غير متاح الخدمة: الخادم معطّل وغير يقبل الطلبات. 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * انقطاع البوابة: عند عمل الخادم كوكيل، لم يتلق ردًا من الخادم العلوي. 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * نسخة HTTP غير مدعومة: لا يدعم الخادم نسخة بروتوكول HTTP المحددة في الطلب. 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * التبديل يتفاوض أيضًا: مفاوضات المحتوى الشفاف للطلب تؤدي إلى إحالة دائرية. 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * عدم كفاية التخزين: لا يملك المستخدم أو الخادم حصة تخزين كافية لتنفيذ الطلب. 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * تم الكشف عن حلقة: كشف الخادم عن حلقة لانهائية في الطلب. 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * تجاوز حد عرض النطاق (ملحق Apachebw/limited) : لم يتم تحديد رمز الحالة هذا في أي RFCs. واستخدامها غير معروف. 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * غير موسعة: يتطلب تمديدات إضافية للطلب لكي يتم الوفاء به. 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * تحتاج المصادقة الشبكية: يجب على العميل المصادقة مع الشبكة قبل إرسال الطلبات. 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * خطأ غير معروف (Microsoft / CloudFlare): رمز الحالة هذا لم يحدد في أي RFC ويتم إرجاعه من قبل بعض الخدمات، مثل خوادم Microsoft Azure و CloudFlare: "إن خطأ 520 هو في الأساس استجابة "شاملة" عندما يعود الخادم الأصلي شيئًا غير متوقعًا أو شيئًا غير مسموحًا به / مفسرًا (انتهاك البروتوكول أو الرد الفارغ)." 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * خادم الويب معطَّل (CloudFlare): رفض الخادم الأصلي الاتصال من CloudFlare. 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * انقطاع الاتصال الزمني (CloudFlare): لم تتمكن CloudFlare من إجراء مصافحة يدوية لـ TCP مع الخادم الأصلي. 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * غير قابل للوصول إلى المصدر (CloudFlare): لم يستطع CloudFlare الوصول إلى الخادم المصدر؛ على سبيل المثال، إذا كانت سجلات DNS للخادم المصدر غير صحيحة. 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * حدث وقت الانقطاع (CloudFlare): تمكن CloudFlare من إقامة اتصال TCP مع الخادم الأصلي، لكن لم يستلم الرد HTTP في الوقت المناسب. 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * فشلت عملية مصافحة SSL (CloudFlare): لم يتمكن CloudFlare من إتمام عملية مصافحة SSL/TLS مع الخادم الأصلي. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * شهادة SSL غير صالحة (CloudFlare): لم تستطع CloudFlare التحقق من الشهادة SSL/TLS التي قدمها الخادم الأصلي. 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * خطأ Railgun (CloudFlare): انتهت مهلة الطلب أو فشل بعد أن تم تأسيس اتصال WAN. 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
