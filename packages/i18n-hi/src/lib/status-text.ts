/**
* © 2024 aiyoudiao
*
* यह फ़ाइल aiyoudiao द्वारा बनाई गई है, जिसमें बहुत सारी मेहनत और ज्ञान शामिल है।
*
* आप इस फ़ाइल का उपयोग, संशोधन और वितरण करने के लिए स्वतंत्र हैं, लेकिन कृपया इस कॉपीराइट घोषणा को रखें।
*
* यदि आप इस फ़ाइल को आपके लिए मददगार पाते हैं, तो कृपया मुझे एक सितारा दें या मुझे फॉलो करें ツ।
*
* संपर्क सूत्र:
* - ईमेल:,newdiao@163.com,
* - GitHub:,https://github.com/aiyoudiao,
*
* आपको कोडिंग में मस्ती हो! याद रखें, कोड कविता है और फ्रंट-एंड कला है। ツ
*/
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * जारी रखें: सर्वर ने रिक्वेस्ट हेडर्स प्राप्त किए हैं, और क्लाइंट को रिक्वेस्ट बॉडी भेजना जारी रखें। 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * स्विचिंग प्रोटोकॉल्स: प्राप्तकर्ता ने सर्वर को प्रोटोकॉल स्विच करने के लिए कहा है और सर्वर मान्यता देता है कि वह ऐसा करेगा। 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * संसाधन : सर्वर ने अनुरोध प्राप्त किया है और उसे संसाधन कर रहा है, लेकिन अभी कोई प्रतिक्रिया उपलब्ध नहीं है। 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया। 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * निर्मित: अनुरोध पूरा हो गया है और एक नया संसाधन बना दिया गया है। 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * स्वीकृति: प्राप्ति का अनुरोध स्वीकृति हो गई है लेकिन अभी तक संसाधित नहीं हुआ है। यह कोड यह सुनिश्चित नहीं करता है कि अनुरोध सफलतापूर्वक संसाधित हो सकें। 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * गैर-मान्यता प्राप्त सूचना: HTTP 1.1। सर्वर ने अनुरोध को सफलतापूर्वक संसाधित किया लेकिन कुछ अन्य स्रोत से सूचना लौटा रहा है। 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * कोई सामग्री नहीं: सर्वर ने अनुरोध स्वीकार किया लेकिन कोई सामग्री वापस नहीं दे रहा है। यह अक्सर एक DELETE अनुरोध के प्रतिक्रिया के रूप में प्रयुक्त होता है। 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * रीसेट कंटेंट: 204 कोई कंटेंट प्रतिक्रिया के समान है, लेकिन यह प्रतिक्रिया अनुरोधकर्ता को दस्तावेज़ दृष्टि को रीसेट करने की आवश्यकता करती है। 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * भागीय सामग्री: सर्वर केवल उस भाग की सामग्री प्रदान करता है जो क्लाइंट द्वारा रेंज हेडर के माध्यम से अनुरोधित की गई है। 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * मल्टी-स्टेटस: निम्नलिखित मैसेज बॉडी एक XML मैसेज है और कई प्रतिक्रिया कोड्स सम्मिलित हो सकें, यह निर्भर करता है कि कितने सब-अनुरोध जारी किए गए। 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * पहले से सूचीबद्ध किया गया है: DAV बाइंडिंग के सदस्य पहले इस अनुरोध के उत्तर में पहले से सूचीबद्ध किए गए हैं और फिर से सम्मिलित नहीं किए जा रहे हैं। 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM उपयोग: सर्वर ने संसाधन के लिए GET अनुरोध पूरा করा है और प्रतिक्रिया वर्तमान उदाहरण में एक या अधिक उदाहरण संचालन को लागू करने का परिणाम का प्रतिनिधित्व है। 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * बहुविकल्प: ग्राहक कई विकल्पों में से एक का चयन कर सकें जो संचालन किया जा सकें। 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * स्थायी रूप से स्थानांतरित: संसाधन स्थानांतरित हो चुका है और सभी आगे के अनुरोधों को इसकी नई URI को संदर्भित करना चाहिए। 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * मिला: HTTP 1.0 के प्रास्क्रिप्शन ने इस स्थिति को "संक्षेपम में स्थानांतरित" के रूप में वर्णित किया, लेकिन लोकप्रिय ब्राउज़र इस स्थिति का प्रतिक्रिया 303 के कार्यान्वयन के समान है। संसाधन को वापसी किया गया URI को संदर्भित करके प्राप्त किया जा सकता है। 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * देखें अन्य: संसाधन को GET विधि का उपयोग करके अन्य URI के माध्यम से प्राप्त किया जा सकें। जब POST, PUT या DELETE प्रतिक्रिया में प्राप्त हो, तो आमतौर पर माना जा सकता है कि सर्वर ने अनुरोध को सफलतापूर्वक प्रसंस्कृत किया है और क्लाइंट को एक सूचनात्मक अंतिम बिंदु की ओर भेज रहा है। 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * गैर संशोधित: संसाधन को If-Modified-Since या If-Match हेडर्स में निर्दिष्ट संस्करण से अब तक संशोधित नहीं किया गया है। प्रतिक्रिया शरीर में संसाधन वापस नहीं आएगा। 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * प्रॉक्सी का उपयोग करें: HTTP 1.1। संसाधन केवल प्रॉक्सी के माध्यम से उपलब्ध है और पता प्रतिक्रिया में प्रदान किया जाता है। 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * स्विच प्रॉक्सी: HTTP 1.1 में अवमान्यित। पहले इसका मतलब था कि अगली अनुरोधों को निर्दिष्ट प्रॉक्सी का उपयोग करके भेजा जाना चाहिए। 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * संक्षिप्त प्रतिवर्ती: HTTP 1.1. अनुरोध को प्रतिक्रिया में प्रदान की गई URI के साथ दोहराया जाना चाहिए, लेकिन भविष्य के अनुरोधों को अभी भी मूल URI को कॉल करना चाहिए। 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * रेज्यूम इनकम्पलीट (गूगल) : यह कोड रेज्यूमेबल HTTP रिक्वेस्ट प्रोपोजल में इस्तेमाल किया जाता है ताकि रद्द किए गए PUT या POST रिक्वेस्ट्स को रेज्यूम किया जा सकें
   * स्थायी रीडायरेक्ट : रिक्वेस्ट और सभी भविष्य के रिक्वेस्ट्स को जवाब में प्रदान किए गए URI का उपयोग करके पुनः भेजा जाना चाहिए 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * गलत अनुरोध: अनुरोध की व्याकरण गलत होने के कारण अनुरोध पूरा नहीं किया जा सका। 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * अनधिकृत: प्रतीक्षुक को संसाधन तक पहुंचने का अधिकार नहीं है। यह 403 के समान है लेकिन उन स्थितियों में उपयोग किया जाता है जहां प्रमाणीकरण अपेक्षित है लेकिन विफल हो गया है या प्रदान नहीं किया गया है। 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * भुगतान आवश्यक: भविष्य के उपयोग के लिए आरक्षित। कुछ वेब सेवाएँ इसे एक संकेत के रूप में उपयोग करती हैं कि क्लाइंट ने अत्यधिक संख्या में अनुरोध भेजे हैं। 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * निषिद्ध: प्रारंभिक मांग सही रूप से स्वरूपित की गई, लेकिन सर्वर द्वारा अनुरोधित संसाधन प्रदान करने से इनकार किया गया। 401 के विपरीत, प्रमाणीकरण सर्वर की प्रतिक्रिया में कोई अंतर नहीं करेगा। 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * नहीं मिला: अनुरोधित संसाधन नहीं मिला। यह अक्सर सर्वर द्वारा मांगे गए सभी अमान्य URIs के लिए एक सामान्य कैच-ऑल के रूप में उपयोग किया जाता है। 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * विधि भी नहीं अनुमति दी गई: संसाधन के अनुरोध में एक विधि का उपयोग किया गया जो अनुमति नहीं है। उदाहरण के लिए, संसाधन को GET विधि के मात्र समर्पण करते हुए POST विधि का उपयोग करके संसाधन का अनुरोध करना। 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * अन्वेषणीय नहीं: संसाधन मान्य है, लेकिन अनुरोध में Accept हेडर्स में निर्दिष्ट प्रारूप में प्रदान नहीं किया जा सका। 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * प्रॉक्सी प्रमाणीकरण आवश्यक: प्रतिक्रियाओं को पूरा करने से पहले प्रॉक्सी के साथ प्रमाणीकरण आवश्यक है। 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * अनुरोध समय सीमा पार: सर्वर ने क्लाइंट के अनुरोध का इंतजार करते हुए समय सीमा पार कर दिया। क्लाइंट को अनुरोध पुनः भेजने की अनुमति है। 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * संघर्ष: क्योंकि अनुरोध पैरामीटरों में संघर्ष के कारण, अनुरोध पूरा नहीं किया जा सका। 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * गोन: रिसोर्स अब रिक्वेस्टेड यूआरआई में उपलब्ध नहीं है और कोई रेडिरेक्शन नहीं दिया जाएगा। 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * लंबाई आवश्यकता: प्रणाली के मुताबिक अनुरोध ने अपनी सामग्री की लंबाई निर्दिष्ट नहीं की। 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * पूर्वकंडीशन गलत हो गई: सर्वर क्लाइंट द्वारा निर्दिष्ट की गई एक पूर्वकंडीशन को पूरा नहीं करता है। 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * अनुरोध संस्था बहुत बड़ी है: अनुरोध की सामग्री उससे अधिक है जो सर्वर संभाल सकें। 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * अनुरोध-URI बहुत लंबा है: अनुरोध में प्रदान किया गया URI सेवर के लिए प्रसंस्करण के लिए बहुत लंबा है। यह अक्सर इस स्थिति में प्रयोग किया जाता है जब GET अनुरोध के URI में बहुत अधिक डेटा को कूटीकरण किया जाता है और POST अनुरोध का उपयोग किया जाना चाहिए। 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * अनुप्रयुक्त मीडिया प्रकार: क्लाइंट ने एक मीडिया प्रकार के साथ डेटा प्रदान किया जो सर्वर द्वारा समर्थित नहीं है। 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * अनुरोधित सीमा संतोषजनक नहीं है: क्लाइंट संसाधन के एक हिस्से की मांग की है, लेकिन सर्वर उस हिस्से को प्रदान नहीं कर सकता। 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   *  अपेक्षा विफल हो गई: सर्वर अपेक्षा अनुरोध-हेडर फ़ील्ड की आवश्यकताओं को पूरा नहीं कर सका। 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * मैं एक चायपोट हूं: किसी भी प्रयास कि चायपोट के साथ कॉफ़ी पानी उबाला जाए, उससे त्रुटि कोड "418 मैं एक चायपोट" प्राप्त होना चाहिए। पैदा होने वाला संस्थान का शरीर संभवतः छोटा और मोटा हो सकें। 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * गलत दिशा दिया गया अनुरोध: अनुरोध को एक सर्वर के पास सीमित किया गया है जो प्रतिक्रिया प्रदान करने में सक्षम नहीं है। यह एक सर्वर द्वारा भेजा जा सकता है जो अनुरोध URI में शामिल सीमा और अधिकार के संयोजन के लिए प्रतिक्रिया प्रदान करने के लिए समायोजित नहीं किया गया है। 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * अनुप्रबंध्य या संस्था: प्रारूपण सही था, लेकिन वर्तमान रूप में संसाधित नहीं किया जा सका। प्रायः निर्दिष्ट पैरामीटर सत्यापन त्रुटियों को पारित नहीं किया जाता होने के दौरान उपयोग किया जाता है। 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * लॉक्ड: दी अनुरोधित संसाधन पाई गई लेकिन लॉक्ड हो गई है और वापस नहीं दी जाएगी। 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * निर्भरता विफलता: पिछले अनुरोध की विफलता के कारण वर्तमान अनुरोध भी विफल हो गया। 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * निम्नानुसार अपग्रेड की आवश्यकता है: क्लाइंट को अपग्रेडेड प्रोटोकॉल जैसे TLS 1.0 का उपयोग करते हुए अनुरोध दोबारा करना चाहिए। 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * पूर्व शर्त आवश्यक है: स्रोत सर्वर का मांग है कि अनुरोध सीमित हो। 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * अत्यधिक अनुरोधें: उपयोगकर्ता दिए गए समय में बहुत से अनुरोध भेजा है ("रेट लिमिटिंग") 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * अनुरोध का हेडर फील्ड बहुत बड़ा है: सर्वर अनुरोध को संसाधित करने के लिए इच्छुक नहीं है क्योंकि इसके हेडर फील्ड बहुत बड़े हैं। 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * लॉगिन टाइमआउट (माइक्रोसॉफ्ट) : एक माइक्रोसॉफ्ट एक्सटेंशन। संकेत देता है कि आपका सेशन समाप्त हो गया। 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * नोई प्रतिक्रिया (Nginx) : Nginx लॉग्स में इस्तेमाल किया जाता है ताकि इंगित किया जा सकें कि सर्वर ने क्लाइंट को कोई सूचना वापस नहीं दी है और कनेक्शन बंद कर दिया है (मैलवेयर के लिए एक प्रतिरोध के रूप में उपयोगी) 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * रिट्री विद (माइक्रोसॉफ्ट) : एक माइक्रोसॉफ्ट एक्सटेंशन। अनुरोध को पुनः भेजा जाना चाहिए कि उचित क्रिया को पूरा करने के बाद। 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Windows पैरेंटल कंट्रोल्स (माइक्रोसॉफ्ट) द्वारा ब्लॉक किया गया: माइक्रोसॉफ्ट एक्सटेंशन। यह त्रुटि दी जाती है जब Windows पैरेंटल कंट्रोल्स चालू होते हैं और दिए गए वेब पेज के प्रवेश को रोक रहे हैं। 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * रीडिरेक्ट (माइक्रोसॉफ्ट): यदि या तो एक अधिक कुशल सर्वर उपयोग करना हो सकें या सर्वर उपयोगकर्ताओं के मेलबॉक्स तक पहुँचने में सक्षम न हो, तो एक्सचेंज एक्टिवसिंक में उपयोग किया जाता है।
   * कानूनी कारणों से अनुपलब्ध: सर्वर को कानूनी प्रतिबंध अनुरोध प्राप्त होने के कारण संचालन नहीं कर सका। 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * "Request Header Too Large (Nginx): Nginx के आंतरिक कोड, 431 के समान है लेकिन यह 0.9.4 संस्करण (21 जनवरी 2011 में) में पहले से अमल में लाया गया।" 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * सत्यापन त्रुटि (Nginx): Nginx के आंतरिक कोड जो SSL क्लाइंट प्रमाण पत्र त्रुटि के समय उपयोग किया जाता है ताकि इसे लॉग और त्रुटि पृष्ठ प्रत्युत्पादन में 4XX से अलग किया जा सकें। 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * नो सेर्ट (निग्नक्स) : निग्नक्स का आंतरिक कोड, जब क्लाइंट से प्रमाणपत्र प्रदान नहीं किया गया हो, ताकि इसे लॉग में 4XX से अलग करने और एक त्रुटि पृष्ठ पुनर्निर्देशित करने के लिए। 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP से HTTPS (Nginx) : Nginx का आंतरिक कोड जिसका उपयोग सादे HTTP अनुरोधों के लिए किया जाता है जो HTTPS पोर्ट को भेजे जाते हैं और इसे लॉग में 4XX से अलग करने के लिए और एक त्रुटि पृष्ठ की पुनर्निर्देशण करने के लिए। 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * टोकन समाप्त हो गया/अनुचित (एसआरआई): ArcGIS for Server द्वारा वापस दिया गया। 498 कोड का अर्थ है कि टोकन समाप्त हो गया या अन्यथा अनुचित है। 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * टोकन आवश्यक (ईसरी) : ArcGIS for Server द्वारा वापस लौटाया गया। 499 का कोड इंगित करता है कि एक टोकन आवश्यक है (यदि कोई टोकन सबमिट नहीं किया गया)। 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * इंटरनल सर्वर एरर: एक सामान्य स्टेटस के लिए सर्वर स्वयं में एक त्रुटि। 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * निष्पादित नहीं किया: सर्वर का प्रतिक्रिया नहीं दे सका अनुरोध के लिए। यह आमतौर पर संकेत करता है कि सर्वर संभवतः इस अनुरोध का समर्पण कर सकें भविष्य में - अन्यथा 4xx स्थिति कोड अधिक उपयुक्त हो सकें। 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * गलत गेटवे: सर्वर एक प्रॉक्सी के रूप में कार्य कर रहा है और ऊपरी सर्वर से एक स्वीकार्य प्रतिक्रिया प्राप्त नहीं की है। 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * सेवा अनुपलब्ध: सERVER बंद है और अनुरोधों को स्वीकार नहीं कर रहा है। 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * गेटवे टाइमआउट: सेवर एक प्रॉक्सी के रूप में कार्य कर रहा है और ऊपरी सेवर से प्रतिक्रिया प्राप्त नहीं की गई। 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP संस्करण समर्थित नहीं: सर्वर, अनुरोध में निर्दिष्ट HTTP प्रोटोकॉल संस्करण का समर्थन नहीं करता है। 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * वेरिएंट भी सौदा करता है: रिक्वेस्ट के लिए ट्रांसपेरेंट कंटेंट नेगोशिएशन एक चक्रीय संदर्भ का कारण बनता है। 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * अपर्याप्त स्टोरेज: यूजर या सर्वर के पास रिक्वेस्ट को पूरा करने के लिए पर्याप्त स्टोरेज कोटा नहीं है। 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * लूप पाए गए: सेवर ने अनुरोध में एक अनंत लूप का पता लगाया। 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * बैंडविड्थ लिमिट एक्सीडेड (एपाचे bw/लिमिटेड एक्सटेंशन) : यह स्टेटस कोड किसी भी RFC में निर्दिष्ट नहीं है। इसका उपयोग अज्ञात है। 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * नहीं विस्तारित: इस अनुरोध को पूरा करने के लिए इसका और विस्तार करना आवश्यक है। 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * नेटवर्क प्रमाणीकरण आवश्यक: क्लाइंट को अनुरोध भेजने से पहले नेटवर्क के साथ प्रमाणीकरण करना आवश्यक है। 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * अज्ञात त्रुटि (माइक्रोसॉफ्ट / क्लाउडफ्लेयर): यह स्थिति कोड कोई RFC में निर्दिष्ट नहीं है और कुछ सेवाओं, उदाहरण के लिए माइक्रोसॉफ्ट आज़ेर और क्लाउडफ्लेयर सर्वर्स द्वारा वापस दिया जाता है: "520 त्रुटि अनिवार्यतः एक 'सभी को समेटे' प्रतिक्रिया है जब मूल सर्वर कुछ अप्रत्याशित या कुछ जो सहना/व्याख्या नहीं हो सका (प्रोटोकॉल उल्लंघन या खाली प्रतिक्रिया)।" 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server से डाउन हो गया (CloudFlare): मूल सर्वर ने CloudFlare से कनेक्शन को अस्वीकार किया। 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * कनेक्शन टाइम आउट (क्लाउडफ्लेयर): क्लाउडफ्लेयर को मूल सर्वर के साथ TCP हैंडशेक का समझौता नहीं हो सका। 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * स्रोत अपरिचित (CloudFlare): CloudFlare स्रोत से से सर्वर तक पहुंचना सका नहीं; उदाहरण के लिए, यदि स्रोत सर्वर के DNS रिकॉर्ड गलत हैं। 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * एक टाइमआउट हुआ (क्लाउडफ्लेयर) : क्लाउडफ्लेयर मूल सर्वर से TCP कनेक्शन पूरा कर सका, लेकिन समय सीमा के अनुसार HTTP प्रतिक्रिया प्राप्त नहीं की। 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): CloudFlare को मूल सर्वर के साथ SSL/TLS handshake करने में समझौता नहीं हो सका। 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * अवैध SSL प्रमाणपत्र (CloudFlare) : CloudFlare में मूल सर्वर द्वारा प्रस्तुत SSL/TLS प्रमाणपत्र को सत्यापित नहीं किया जा सका। 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun भूल (CloudFlare): WAN संबंध स्थापित करने के बाद, अनुरोध समय सीमा पार कर गई या विफल हो गई। 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * जारी रखें: सर्वर ने रिक्वेस्ट हेडर्स प्राप्त किए हैं, और क्लाइंट को रिक्वेस्ट बॉडी भेजना जारी रखें। 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * स्विचिंग प्रोटोकॉल्स: प्राप्तकर्ता ने सर्वर को प्रोटोकॉल स्विच करने के लिए कहा है और सर्वर मान्यता देता है कि वह ऐसा करेगा। 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * संसाधन : सर्वर ने अनुरोध प्राप्त किया है और उसे संसाधन कर रहा है, लेकिन अभी कोई प्रतिक्रिया उपलब्ध नहीं है। 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * सफल: सुविधाजनक HTTP अनुरोधों के लिए मानक प्रतिक्रिया। 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * निर्मित: अनुरोध पूरा हो गया है और एक नया संसाधन बना दिया गया है। 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * स्वीकृति: प्राप्ति का अनुरोध स्वीकृति हो गई है लेकिन अभी तक संसाधित नहीं हुआ है। यह कोड यह सुनिश्चित नहीं करता है कि अनुरोध सफलतापूर्वक संसाधित हो सकें। 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * गैर-मान्यता प्राप्त सूचना: HTTP 1.1। सर्वर ने अनुरोध को सफलतापूर्वक संसाधित किया लेकिन कुछ अन्य स्रोत से सूचना लौटा रहा है। 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * कोई सामग्री नहीं: सर्वर ने अनुरोध स्वीकार किया लेकिन कोई सामग्री वापस नहीं दे रहा है। यह अक्सर एक DELETE अनुरोध के प्रतिक्रिया के रूप में प्रयुक्त होता है। 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * रीसेट कंटेंट: 204 कोई कंटेंट प्रतिक्रिया के समान है, लेकिन यह प्रतिक्रिया अनुरोधकर्ता को दस्तावेज़ दृष्टि को रीसेट करने की आवश्यकता करती है। 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * भागीय सामग्री: सर्वर केवल उस भाग की सामग्री प्रदान करता है जो क्लाइंट द्वारा रेंज हेडर के माध्यम से अनुरोधित की गई है। 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * मल्टी-स्टेटस: निम्नलिखित मैसेज बॉडी एक XML मैसेज है और कई प्रतिक्रिया कोड्स सम्मिलित हो सकें, यह निर्भर करता है कि कितने सब-अनुरोध जारी किए गए। 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * पहले से सूचीबद्ध किया गया है: DAV बाइंडिंग के सदस्य पहले इस अनुरोध के उत्तर में पहले से सूचीबद्ध किए गए हैं और फिर से सम्मिलित नहीं किए जा रहे हैं। 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM उपयोग: सर्वर ने संसाधन के लिए GET अनुरोध पूरा করा है और प्रतिक्रिया वर्तमान उदाहरण में एक या अधिक उदाहरण संचालन को लागू करने का परिणाम का प्रतिनिधित्व है। 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * बहुविकल्प: ग्राहक कई विकल्पों में से एक का चयन कर सकें जो संचालन किया जा सकें। 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * स्थायी रूप से स्थानांतरित: संसाधन स्थानांतरित हो चुका है और सभी आगे के अनुरोधों को इसकी नई URI को संदर्भित करना चाहिए। 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * मिला: HTTP 1.0 के प्रास्क्रिप्शन ने इस स्थिति को "संक्षेपम में स्थानांतरित" के रूप में वर्णित किया, लेकिन लोकप्रिय ब्राउज़र इस स्थिति का प्रतिक्रिया 303 के कार्यान्वयन के समान है। संसाधन को वापसी किया गया URI को संदर्भित करके प्राप्त किया जा सकता है। 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * देखें अन्य: संसाधन को GET विधि का उपयोग करके अन्य URI के माध्यम से प्राप्त किया जा सकें। जब POST, PUT या DELETE प्रतिक्रिया में प्राप्त हो, तो आमतौर पर माना जा सकता है कि सर्वर ने अनुरोध को सफलतापूर्वक प्रसंस्कृत किया है और क्लाइंट को एक सूचनात्मक अंतिम बिंदु की ओर भेज रहा है। 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * गैर संशोधित: संसाधन को If-Modified-Since या If-Match हेडर्स में निर्दिष्ट संस्करण से अब तक संशोधित नहीं किया गया है। प्रतिक्रिया शरीर में संसाधन वापस नहीं आएगा। 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * प्रॉक्सी का उपयोग करें: HTTP 1.1। संसाधन केवल प्रॉक्सी के माध्यम से उपलब्ध है और पता प्रतिक्रिया में प्रदान किया जाता है। 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * स्विच प्रॉक्सी: HTTP 1.1 में अवमान्यित। पहले इसका मतलब था कि अगली अनुरोधों को निर्दिष्ट प्रॉक्सी का उपयोग करके भेजा जाना चाहिए। 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * संक्षिप्त प्रतिवर्ती: HTTP 1.1. अनुरोध को प्रतिक्रिया में प्रदान की गई URI के साथ दोहराया जाना चाहिए, लेकिन भविष्य के अनुरोधों को अभी भी मूल URI को कॉल करना चाहिए। 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * रेज्यूम इनकम्पलीट (गूगल) : यह कोड रेज्यूमेबल HTTP रिक्वेस्ट प्रोपोजल में इस्तेमाल किया जाता है ताकि रद्द किए गए PUT या POST रिक्वेस्ट्स को रेज्यूम किया जा सकें
   * स्थायी रीडायरेक्ट : रिक्वेस्ट और सभी भविष्य के रिक्वेस्ट्स को जवाब में प्रदान किए गए URI का उपयोग करके पुनः भेजा जाना चाहिए 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * गलत अनुरोध: अनुरोध की व्याकरण गलत होने के कारण अनुरोध पूरा नहीं किया जा सका। 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * अनधिकृत: प्रतीक्षुक को संसाधन तक पहुंचने का अधिकार नहीं है। यह 403 के समान है लेकिन उन स्थितियों में उपयोग किया जाता है जहां प्रमाणीकरण अपेक्षित है लेकिन विफल हो गया है या प्रदान नहीं किया गया है। 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * भुगतान आवश्यक: भविष्य के उपयोग के लिए आरक्षित। कुछ वेब सेवाएँ इसे एक संकेत के रूप में उपयोग करती हैं कि क्लाइंट ने अत्यधिक संख्या में अनुरोध भेजे हैं। 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * निषिद्ध: प्रारंभिक मांग सही रूप से स्वरूपित की गई, लेकिन सर्वर द्वारा अनुरोधित संसाधन प्रदान करने से इनकार किया गया। 401 के विपरीत, प्रमाणीकरण सर्वर की प्रतिक्रिया में कोई अंतर नहीं करेगा। 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * नहीं मिला: अनुरोधित संसाधन नहीं मिला। यह अक्सर सर्वर द्वारा मांगे गए सभी अमान्य URIs के लिए एक सामान्य कैच-ऑल के रूप में उपयोग किया जाता है। 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * विधि भी नहीं अनुमति दी गई: संसाधन के अनुरोध में एक विधि का उपयोग किया गया जो अनुमति नहीं है। उदाहरण के लिए, संसाधन को GET विधि के मात्र समर्पण करते हुए POST विधि का उपयोग करके संसाधन का अनुरोध करना। 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * अन्वेषणीय नहीं: संसाधन मान्य है, लेकिन अनुरोध में Accept हेडर्स में निर्दिष्ट प्रारूप में प्रदान नहीं किया जा सका। 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * प्रॉक्सी प्रमाणीकरण आवश्यक: प्रतिक्रियाओं को पूरा करने से पहले प्रॉक्सी के साथ प्रमाणीकरण आवश्यक है। 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * अनुरोध समय सीमा पार: सर्वर ने क्लाइंट के अनुरोध का इंतजार करते हुए समय सीमा पार कर दिया। क्लाइंट को अनुरोध पुनः भेजने की अनुमति है। 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * संघर्ष: क्योंकि अनुरोध पैरामीटरों में संघर्ष के कारण, अनुरोध पूरा नहीं किया जा सका। 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * गोन: रिसोर्स अब रिक्वेस्टेड यूआरआई में उपलब्ध नहीं है और कोई रेडिरेक्शन नहीं दिया जाएगा। 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * लंबाई आवश्यकता: प्रणाली के मुताबिक अनुरोध ने अपनी सामग्री की लंबाई निर्दिष्ट नहीं की। 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * पूर्वकंडीशन गलत हो गई: सर्वर क्लाइंट द्वारा निर्दिष्ट की गई एक पूर्वकंडीशन को पूरा नहीं करता है। 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * अनुरोध संस्था बहुत बड़ी है: अनुरोध की सामग्री उससे अधिक है जो सर्वर संभाल सकें। 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * अनुरोध-URI बहुत लंबा है: अनुरोध में प्रदान किया गया URI सेवर के लिए प्रसंस्करण के लिए बहुत लंबा है। यह अक्सर इस स्थिति में प्रयोग किया जाता है जब GET अनुरोध के URI में बहुत अधिक डेटा को कूटीकरण किया जाता है और POST अनुरोध का उपयोग किया जाना चाहिए। 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * अनुप्रयुक्त मीडिया प्रकार: क्लाइंट ने एक मीडिया प्रकार के साथ डेटा प्रदान किया जो सर्वर द्वारा समर्थित नहीं है। 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * अनुरोधित सीमा संतोषजनक नहीं है: क्लाइंट संसाधन के एक हिस्से की मांग की है, लेकिन सर्वर उस हिस्से को प्रदान नहीं कर सकता। 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   *  अपेक्षा विफल हो गई: सर्वर अपेक्षा अनुरोध-हेडर फ़ील्ड की आवश्यकताओं को पूरा नहीं कर सका। 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * मैं एक चायपोट हूं: किसी भी प्रयास कि चायपोट के साथ कॉफ़ी पानी उबाला जाए, उससे त्रुटि कोड "418 मैं एक चायपोट" प्राप्त होना चाहिए। पैदा होने वाला संस्थान का शरीर संभवतः छोटा और मोटा हो सकें। 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * गलत दिशा दिया गया अनुरोध: अनुरोध को एक सर्वर के पास सीमित किया गया है जो प्रतिक्रिया प्रदान करने में सक्षम नहीं है। यह एक सर्वर द्वारा भेजा जा सकता है जो अनुरोध URI में शामिल सीमा और अधिकार के संयोजन के लिए प्रतिक्रिया प्रदान करने के लिए समायोजित नहीं किया गया है। 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * अनुप्रबंध्य या संस्था: प्रारूपण सही था, लेकिन वर्तमान रूप में संसाधित नहीं किया जा सका। प्रायः निर्दिष्ट पैरामीटर सत्यापन त्रुटियों को पारित नहीं किया जाता होने के दौरान उपयोग किया जाता है। 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * लॉक्ड: दी अनुरोधित संसाधन पाई गई लेकिन लॉक्ड हो गई है और वापस नहीं दी जाएगी। 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * निर्भरता विफलता: पिछले अनुरोध की विफलता के कारण वर्तमान अनुरोध भी विफल हो गया। 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * निम्नानुसार अपग्रेड की आवश्यकता है: क्लाइंट को अपग्रेडेड प्रोटोकॉल जैसे TLS 1.0 का उपयोग करते हुए अनुरोध दोबारा करना चाहिए। 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * पूर्व शर्त आवश्यक है: स्रोत सर्वर का मांग है कि अनुरोध सीमित हो। 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * अत्यधिक अनुरोधें: उपयोगकर्ता दिए गए समय में बहुत से अनुरोध भेजा है ("रेट लिमिटिंग") 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * अनुरोध का हेडर फील्ड बहुत बड़ा है: सर्वर अनुरोध को संसाधित करने के लिए इच्छुक नहीं है क्योंकि इसके हेडर फील्ड बहुत बड़े हैं। 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * लॉगिन टाइमआउट (माइक्रोसॉफ्ट) : एक माइक्रोसॉफ्ट एक्सटेंशन। संकेत देता है कि आपका सेशन समाप्त हो गया। 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * नोई प्रतिक्रिया (Nginx) : Nginx लॉग्स में इस्तेमाल किया जाता है ताकि इंगित किया जा सकें कि सर्वर ने क्लाइंट को कोई सूचना वापस नहीं दी है और कनेक्शन बंद कर दिया है (मैलवेयर के लिए एक प्रतिरोध के रूप में उपयोगी) 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * रिट्री विद (माइक्रोसॉफ्ट) : एक माइक्रोसॉफ्ट एक्सटेंशन। अनुरोध को पुनः भेजा जाना चाहिए कि उचित क्रिया को पूरा करने के बाद। 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * Windows पैरेंटल कंट्रोल्स (माइक्रोसॉफ्ट) द्वारा ब्लॉक किया गया: माइक्रोसॉफ्ट एक्सटेंशन। यह त्रुटि दी जाती है जब Windows पैरेंटल कंट्रोल्स चालू होते हैं और दिए गए वेब पेज के प्रवेश को रोक रहे हैं। 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * रीडिरेक्ट (माइक्रोसॉफ्ट): यदि या तो एक अधिक कुशल सर्वर उपयोग करना हो सकें या सर्वर उपयोगकर्ताओं के मेलबॉक्स तक पहुँचने में सक्षम न हो, तो एक्सचेंज एक्टिवसिंक में उपयोग किया जाता है।
   * कानूनी कारणों से अनुपलब्ध: सर्वर को कानूनी प्रतिबंध अनुरोध प्राप्त होने के कारण संचालन नहीं कर सका। 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * "Request Header Too Large (Nginx): Nginx के आंतरिक कोड, 431 के समान है लेकिन यह 0.9.4 संस्करण (21 जनवरी 2011 में) में पहले से अमल में लाया गया।" 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * सत्यापन त्रुटि (Nginx): Nginx के आंतरिक कोड जो SSL क्लाइंट प्रमाण पत्र त्रुटि के समय उपयोग किया जाता है ताकि इसे लॉग और त्रुटि पृष्ठ प्रत्युत्पादन में 4XX से अलग किया जा सकें। 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * नो सेर्ट (निग्नक्स) : निग्नक्स का आंतरिक कोड, जब क्लाइंट से प्रमाणपत्र प्रदान नहीं किया गया हो, ताकि इसे लॉग में 4XX से अलग करने और एक त्रुटि पृष्ठ पुनर्निर्देशित करने के लिए। 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP से HTTPS (Nginx) : Nginx का आंतरिक कोड जिसका उपयोग सादे HTTP अनुरोधों के लिए किया जाता है जो HTTPS पोर्ट को भेजे जाते हैं और इसे लॉग में 4XX से अलग करने के लिए और एक त्रुटि पृष्ठ की पुनर्निर्देशण करने के लिए। 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * टोकन समाप्त हो गया/अनुचित (एसआरआई): ArcGIS for Server द्वारा वापस दिया गया। 498 कोड का अर्थ है कि टोकन समाप्त हो गया या अन्यथा अनुचित है। 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * टोकन आवश्यक (ईसरी) : ArcGIS for Server द्वारा वापस लौटाया गया। 499 का कोड इंगित करता है कि एक टोकन आवश्यक है (यदि कोई टोकन सबमिट नहीं किया गया)। 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * इंटरनल सर्वर एरर: एक सामान्य स्टेटस के लिए सर्वर स्वयं में एक त्रुटि। 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * निष्पादित नहीं किया: सर्वर का प्रतिक्रिया नहीं दे सका अनुरोध के लिए। यह आमतौर पर संकेत करता है कि सर्वर संभवतः इस अनुरोध का समर्पण कर सकें भविष्य में - अन्यथा 4xx स्थिति कोड अधिक उपयुक्त हो सकें। 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * गलत गेटवे: सर्वर एक प्रॉक्सी के रूप में कार्य कर रहा है और ऊपरी सर्वर से एक स्वीकार्य प्रतिक्रिया प्राप्त नहीं की है। 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * सेवा अनुपलब्ध: सERVER बंद है और अनुरोधों को स्वीकार नहीं कर रहा है। 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * गेटवे टाइमआउट: सेवर एक प्रॉक्सी के रूप में कार्य कर रहा है और ऊपरी सेवर से प्रतिक्रिया प्राप्त नहीं की गई। 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP संस्करण समर्थित नहीं: सर्वर, अनुरोध में निर्दिष्ट HTTP प्रोटोकॉल संस्करण का समर्थन नहीं करता है। 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * वेरिएंट भी सौदा करता है: रिक्वेस्ट के लिए ट्रांसपेरेंट कंटेंट नेगोशिएशन एक चक्रीय संदर्भ का कारण बनता है। 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * अपर्याप्त स्टोरेज: यूजर या सर्वर के पास रिक्वेस्ट को पूरा करने के लिए पर्याप्त स्टोरेज कोटा नहीं है। 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * लूप पाए गए: सेवर ने अनुरोध में एक अनंत लूप का पता लगाया। 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * बैंडविड्थ लिमिट एक्सीडेड (एपाचे bw/लिमिटेड एक्सटेंशन) : यह स्टेटस कोड किसी भी RFC में निर्दिष्ट नहीं है। इसका उपयोग अज्ञात है। 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * नहीं विस्तारित: इस अनुरोध को पूरा करने के लिए इसका और विस्तार करना आवश्यक है। 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * नेटवर्क प्रमाणीकरण आवश्यक: क्लाइंट को अनुरोध भेजने से पहले नेटवर्क के साथ प्रमाणीकरण करना आवश्यक है। 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * अज्ञात त्रुटि (माइक्रोसॉफ्ट / क्लाउडफ्लेयर): यह स्थिति कोड कोई RFC में निर्दिष्ट नहीं है और कुछ सेवाओं, उदाहरण के लिए माइक्रोसॉफ्ट आज़ेर और क्लाउडफ्लेयर सर्वर्स द्वारा वापस दिया जाता है: "520 त्रुटि अनिवार्यतः एक 'सभी को समेटे' प्रतिक्रिया है जब मूल सर्वर कुछ अप्रत्याशित या कुछ जो सहना/व्याख्या नहीं हो सका (प्रोटोकॉल उल्लंघन या खाली प्रतिक्रिया)।" 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web Server से डाउन हो गया (CloudFlare): मूल सर्वर ने CloudFlare से कनेक्शन को अस्वीकार किया। 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * कनेक्शन टाइम आउट (क्लाउडफ्लेयर): क्लाउडफ्लेयर को मूल सर्वर के साथ TCP हैंडशेक का समझौता नहीं हो सका। 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * स्रोत अपरिचित (CloudFlare): CloudFlare स्रोत से से सर्वर तक पहुंचना सका नहीं; उदाहरण के लिए, यदि स्रोत सर्वर के DNS रिकॉर्ड गलत हैं। 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * एक टाइमआउट हुआ (क्लाउडफ्लेयर) : क्लाउडफ्लेयर मूल सर्वर से TCP कनेक्शन पूरा कर सका, लेकिन समय सीमा के अनुसार HTTP प्रतिक्रिया प्राप्त नहीं की। 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): CloudFlare को मूल सर्वर के साथ SSL/TLS handshake करने में समझौता नहीं हो सका। 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * अवैध SSL प्रमाणपत्र (CloudFlare) : CloudFlare में मूल सर्वर द्वारा प्रस्तुत SSL/TLS प्रमाणपत्र को सत्यापित नहीं किया जा सका। 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Railgun भूल (CloudFlare): WAN संबंध स्थापित करने के बाद, अनुरोध समय सीमा पार कर गई या विफल हो गई। 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
