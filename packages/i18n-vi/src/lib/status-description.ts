/**
 * © 2024 aiyoudiao
 *
 * Tệp này được tạo bởi aiyoudiao, chứa rất nhiều công sức và trí tuệ.
 *
 * Bạn có thể tự do sử dụng, sửa đổi và phân phối tệp này, nhưng vui lòng giữ lại thông báo bản quyền này.
 *
 * Nếu bạn thấy tệp này hữu ích, vui lòng cho tôi một ngôi sao hoặc theo dõi tôi ツ.
 *
 * Thông tin liên hệ:
 * - Email:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 *
 * Chúc bạn mã vui! Hãy nhớ, mã là thơ và front-end là nghệ thuật. ツ
 */
export enum HttpStatusDescription {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Tiếp tục: Máy chủ đã nhận được tiêu đề yêu cầu và khách hàng nên tiếp tục gửi thân yêu cầu. 
   */
  CONTINUE = 'Tiếp tục: Máy chủ đã nhận được tiêu đề yêu cầu và khách hàng nên tiếp tục gửi thân yêu cầu. ',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Chuyển đổi giao thức: Người yêu cầu đã yêu cầu máy chủ chuyển đổi giao thức và máy chủ xác nhận rằng nó sẽ thực hiện. 
   */
  SWITCHING_PROTOCOLS = 'Chuyển đổi giao thức: Người yêu cầu đã yêu cầu máy chủ chuyển đổi giao thức và máy chủ xác nhận rằng nó sẽ thực hiện. ',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Xử lý: Máy chủ đã nhận được yêu cầu và đang xử lý, nhưng chưa có phản hồi nào có sẵn. 
   */
  PROCESSING = 'Xử lý: Máy chủ đã nhận được yêu cầu và đang xử lý, nhưng chưa có phản hồi nào có sẵn. ',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công. 
   */
  OK = 'OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công. ',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Đã tạo: Yêu cầu đã được hoàn thành và một tài nguyên mới đã được tạo. 
   */
  CREATED = 'Đã tạo: Yêu cầu đã được hoàn thành và một tài nguyên mới đã được tạo. ',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Được chấp nhận: Yêu cầu đã được chấp nhận nhưng chưa được xử lý xong. Mã này không đảm bảo rằng yêu cầu sẽ được xử lý thành công. 
   */
  ACCEPTED = 'Được chấp nhận: Yêu cầu đã được chấp nhận nhưng chưa được xử lý xong. Mã này không đảm bảo rằng yêu cầu sẽ được xử lý thành công. ',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Thông tin không có thẩm quyền: HTTP 1.1. Máy chủ đã xử lý yêu cầu một cách thành công nhưng đang trả về thông tin từ một nguồn khác. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Thông tin không có thẩm quyền: HTTP 1.1. Máy chủ đã xử lý yêu cầu một cách thành công nhưng đang trả về thông tin từ một nguồn khác. ',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * No content: Máy chủ chấp nhận yêu cầu nhưng không trả lại bất kỳ nội dung nào. Đây thường được dùng như là phản ứng với yêu cầu DELETE. 
   */
  NO_CONTENT = 'No content: Máy chủ chấp nhận yêu cầu nhưng không trả lại bất kỳ nội dung nào. Đây thường được dùng như là phản ứng với yêu cầu DELETE. ',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Đặt lại nội dung: Tương tự như phản ứng 204 No Content, nhưng phản ứng này yêu cầu người yêu cầu đặt lại chế độ xem tài liệu. 
   */
  RESET_CONTENT = 'Đặt lại nội dung: Tương tự như phản ứng 204 No Content, nhưng phản ứng này yêu cầu người yêu cầu đặt lại chế độ xem tài liệu. ',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Nội dung một phần: Máy chủ chỉ cung cấp một phần nội dung được yêu cầu bởi khách hàng qua tiêu đề phạm vi (Range header). 
   */
  PARTIAL_CONTENT = 'Nội dung một phần: Máy chủ chỉ cung cấp một phần nội dung được yêu cầu bởi khách hàng qua tiêu đề phạm vi (Range header). ',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Thân tin nhắn phía sau là một tin nhắn XML và có thể chứa một số mã phản ứng riêng biệt, tùy thuộc vào có bao nhiêu yêu cầu con được thực hiện. 
   */
  MULTI_STATUS = 'Multi-status: Thân tin nhắn phía sau là một tin nhắn XML và có thể chứa một số mã phản ứng riêng biệt, tùy thuộc vào có bao nhiêu yêu cầu con được thực hiện. ',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Đã báo cáo: Các thành viên của liên kết DAV đã được liệt kê trong phản hồi trước cho yêu cầu này và không được bao gồm lại nữa. 
   */
  ALREADY_REPORTED = 'Đã báo cáo: Các thành viên của liên kết DAV đã được liệt kê trong phản hồi trước cho yêu cầu này và không được bao gồm lại nữa. ',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM được sử dụng: Máy chủ đã hoàn thành yêu cầu GET cho tài nguyên và phản hồi là một biểu diễn của kết quả của một hoặc nhiều thao tác đối tượng được áp dụng cho đối tượng hiện tại. 
   */
  IM_USED = 'IM được sử dụng: Máy chủ đã hoàn thành yêu cầu GET cho tài nguyên và phản hồi là một biểu diễn của kết quả của một hoặc nhiều thao tác đối tượng được áp dụng cho đối tượng hiện tại. ',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Lựa chọn nhiều: Có nhiều lựa chọn mà khách hàng có thể thực hiện theo một trong số đó. 
   */
  MULTIPLE_CHOICES = 'Lựa chọn nhiều: Có nhiều lựa chọn mà khách hàng có thể thực hiện theo một trong số đó. ',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Đã di chuyển vĩnh viễn: Tài nguyên đã được di chuyển và tất cả các yêu cầu sau này phải tham chiếu đến URI mới của nó. 
   */
  MOVED_PERMANENTLY = 'Đã di chuyển vĩnh viễn: Tài nguyên đã được di chuyển và tất cả các yêu cầu sau này phải tham chiếu đến URI mới của nó. ',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Tìm thấy: Thông số kỹ thuật của HTTP 1.0 mô tả trạng thái này là "Di chuyển tạm thời", nhưng các trình duyệt phổ biến phản ứng với trạng thái này tương tự như hành vi dự định cho 303. Tài nguyên có thể được truy xuất bằng cách tham chiếu đến URI được trả về. 
   */
  FOUND = 'Tìm thấy: Thông số kỹ thuật của HTTP 1.0 mô tả trạng thái này là "Di chuyển tạm thời", nhưng các trình duyệt phổ biến phản ứng với trạng thái này tương tự như hành vi dự định cho 303. Tài nguyên có thể được truy xuất bằng cách tham chiếu đến URI được trả về. ',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Xem các mục khác: Tài nguyên có thể được truy xuất bằng cách theo các URI khác sử dụng phương thức GET. Khi nhận được trong phản ứng với yêu cầu POST, PUT hoặc DELETE, thường có thể suy ra rằng máy chủ đã xử lý yêu cầu thành công và đang gửi khách hàng đến một điểm cuối thông tin. 
   */
  SEE_OTHER = 'Xem các mục khác: Tài nguyên có thể được truy xuất bằng cách theo các URI khác sử dụng phương thức GET. Khi nhận được trong phản ứng với yêu cầu POST, PUT hoặc DELETE, thường có thể suy ra rằng máy chủ đã xử lý yêu cầu thành công và đang gửi khách hàng đến một điểm cuối thông tin. ',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Chưa được sửa đổi: Tài nguyên chưa được sửa đổi kể từ phiên bản được chỉ định trong tiêu đề If-Modified-Since hoặc If-Match. Tài nguyên sẽ không được trả về trong nội dung phản hồi. 
   */
  NOT_MODIFIED = 'Chưa được sửa đổi: Tài nguyên chưa được sửa đổi kể từ phiên bản được chỉ định trong tiêu đề If-Modified-Since hoặc If-Match. Tài nguyên sẽ không được trả về trong nội dung phản hồi. ',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Sử dụng proxy: HTTP 1.1. Tài nguyên chỉ có sẵn qua proxy và địa chỉ được cung cấp trong phản hồi. 
   */
  USE_PROXY = 'Sử dụng proxy: HTTP 1.1. Tài nguyên chỉ có sẵn qua proxy và địa chỉ được cung cấp trong phản hồi. ',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Chuyển đổi proxy: Đã lỗi thời trong HTTP 1.1. Được dùng để có nghĩa là các yêu cầu sau đó nên được gửi bằng proxy được chỉ định. 
   */
  SWITCH_PROXY = 'Chuyển đổi proxy: Đã lỗi thời trong HTTP 1.1. Được dùng để có nghĩa là các yêu cầu sau đó nên được gửi bằng proxy được chỉ định. ',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Điều hướng tạm thời: HTTP 1.1. Yêu cầu phải được gửi lại với URI được cung cấp trong phản ứng, nhưng yêu cầu trong tương lai vẫn nên gọi URI ban đầu. 
   */
  TEMPORARY_REDIRECT = 'Điều hướng tạm thời: HTTP 1.1. Yêu cầu phải được gửi lại với URI được cung cấp trong phản ứng, nhưng yêu cầu trong tương lai vẫn nên gọi URI ban đầu. ',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Tiểu luận không hoàn chỉnh (Google): Mã này được sử dụng trong Đề xuất Yêu cầu HTTP có thể tiếp tục để tiếp tục các yêu cầu PUT hoặc POST bị hủy bỏ.
   *
   * Thường xuyên chuyển hướng: Yêu cầu và tất cả các yêu cầu trong tương lai phải được gửi lại bằng URI được cung cấp trong phản ứng. 
   */
  PERMANENT_REDIRECT = 'Tiểu luận không hoàn chỉnh (Google): Mã này được sử dụng trong Đề xuất Yêu cầu HTTP có thể tiếp tục để tiếp tục các yêu cầu PUT hoặc POST bị hủy bỏ.\n\
\n\
Thường xuyên chuyển hướng: Yêu cầu và tất cả các yêu cầu trong tương lai phải được gửi lại bằng URI được cung cấp trong phản ứng. ',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Yêu cầu sai: Yêu cầu không thể được đáp ứng do cú pháp của yêu cầu không chính xác. 
   */
  BAD_REQUEST = 'Yêu cầu sai: Yêu cầu không thể được đáp ứng do cú pháp của yêu cầu không chính xác. ',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Không được ủy quyền: Người yêu cầu không được ủy quyền truy cập tài nguyên. Điều này tương tự như 403 nhưng được sử dụng trong các trường hợp xác thực được mong đợi nhưng đã thất bại hoặc chưa được cung cấp. 
   */
  UNAUTHORIZED = 'Không được ủy quyền: Người yêu cầu không được ủy quyền truy cập tài nguyên. Điều này tương tự như 403 nhưng được sử dụng trong các trường hợp xác thực được mong đợi nhưng đã thất bại hoặc chưa được cung cấp. ',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Thanh toán được yêu cầu: Để dành cho sử dụng trong tương lai. Một số dịch vụ web sử dụng trạng thái này như là một dấu hiệu rằng khách hàng đã gửi quá nhiều yêu cầu. 
   */
  PAYMENT_REQUIRED = 'Thanh toán được yêu cầu: Để dành cho sử dụng trong tương lai. Một số dịch vụ web sử dụng trạng thái này như là một dấu hiệu rằng khách hàng đã gửi quá nhiều yêu cầu. ',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Cấm: Yêu cầu được định dạng đúng nhưng máy chủ từ chối cung cấp tài nguyên được yêu cầu. Không giống như 401, xác thực sẽ không thay đổi phản ứng của máy chủ. 
   */
  FORBIDDEN = 'Cấm: Yêu cầu được định dạng đúng nhưng máy chủ từ chối cung cấp tài nguyên được yêu cầu. Không giống như 401, xác thực sẽ không thay đổi phản ứng của máy chủ. ',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Không tìm thấy: Không thể tìm thấy tài nguyên. Điều này thường được sử dụng như là một cách giải quyết chung cho tất cả các URI không hợp lệ được yêu cầu bởi máy chủ. 
   */
  NOT_FOUND = 'Không tìm thấy: Không thể tìm thấy tài nguyên. Điều này thường được sử dụng như là một cách giải quyết chung cho tất cả các URI không hợp lệ được yêu cầu bởi máy chủ. ',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Phương pháp không được cho phép: Yêu cầu tài nguyên được thực hiện bằng cách sử dụng một phương pháp không được cho phép. Ví dụ, yêu cầu tài nguyên thông qua phương pháp POST trong khi tài nguyên chỉ hỗ trợ phương pháp GET. 
   */
  METHOD_NOT_ALLOWED = 'Phương pháp không được cho phép: Yêu cầu tài nguyên được thực hiện bằng cách sử dụng một phương pháp không được cho phép. Ví dụ, yêu cầu tài nguyên thông qua phương pháp POST trong khi tài nguyên chỉ hỗ trợ phương pháp GET. ',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Không chấp nhận: Tài nguyên là hợp lệ, nhưng không thể được cung cấp theo định dạng được chỉ định trong các tiêu đề Accept trong yêu cầu. 
   */
  NOT_ACCEPTABLE = 'Không chấp nhận: Tài nguyên là hợp lệ, nhưng không thể được cung cấp theo định dạng được chỉ định trong các tiêu đề Accept trong yêu cầu. ',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Xác thực ủy quyền proxy được yêu cầu: Xác thực đối với proxy là cần thiết trước khi yêu cầu có thể được đáp ứng. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Xác thực ủy quyền proxy được yêu cầu: Xác thực đối với proxy là cần thiết trước khi yêu cầu có thể được đáp ứng. ',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout yêu cầu: Máy chủ đã hết thời gian chờ yêu cầu từ phía khách hàng. Khách hàng được phép gửi lại yêu cầu. 
   */
  REQUEST_TIMEOUT = 'Timeout yêu cầu: Máy chủ đã hết thời gian chờ yêu cầu từ phía khách hàng. Khách hàng được phép gửi lại yêu cầu. ',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Xung đột: Yêu cầu không thể hoàn thành do xung đột trong các tham số yêu cầu. 
   */
  CONFLICT = 'Xung đột: Yêu cầu không thể hoàn thành do xung đột trong các tham số yêu cầu. ',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Đã xóa: Tài nguyên không còn có sẵn tại URI được yêu cầu và sẽ không được cung cấp chuyển hướng. 
   */
  GONE = 'Đã xóa: Tài nguyên không còn có sẵn tại URI được yêu cầu và sẽ không được cung cấp chuyển hướng. ',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Độ dài yêu cầu: Yêu cầu không chỉ định độ dài nội dung như yêu cầu của tài nguyên. 
   */
  LENGTH_REQUIRED = 'Độ dài yêu cầu: Yêu cầu không chỉ định độ dài nội dung như yêu cầu của tài nguyên. ',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Điều kiện tiền đề thất bại: Máy chủ không đáp ứng một trong những điều kiện tiền đề được chỉ định bởi khách hàng. 
   */
  PRECONDITION_FAILED = 'Điều kiện tiền đề thất bại: Máy chủ không đáp ứng một trong những điều kiện tiền đề được chỉ định bởi khách hàng. ',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Yêu cầu thực thể quá lớn: Nội dung yêu cầu lớn hơn mức có thể xử lý của máy chủ. 
   */
  PAYLOAD_TOO_LARGE = 'Yêu cầu thực thể quá lớn: Nội dung yêu cầu lớn hơn mức có thể xử lý của máy chủ. ',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Yêu cầu URI quá dài: URI được cung cấp trong yêu cầu quá dài đến mức máy chủ không thể xử lý. Đây thường được sử dụng khi có quá nhiều dữ liệu được mã hóa trong URI của yêu cầu GET và yêu cầu POST nên được sử dụng thay thế. 
   */
  URI_TOO_LONG = 'Yêu cầu URI quá dài: URI được cung cấp trong yêu cầu quá dài đến mức máy chủ không thể xử lý. Đây thường được sử dụng khi có quá nhiều dữ liệu được mã hóa trong URI của yêu cầu GET và yêu cầu POST nên được sử dụng thay thế. ',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Loại phương tiện truyền thông không được hỗ trợ: Dữ liệu được cung cấp bởi khách hàng có kiểu phương tiện truyền thông không được máy chủ hỗ trợ. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Loại phương tiện truyền thông không được hỗ trợ: Dữ liệu được cung cấp bởi khách hàng có kiểu phương tiện truyền thông không được máy chủ hỗ trợ. ',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Yêu cầu phạm vi không được thỏa mãn: Khách hàng yêu cầu một phần của tài nguyên nhưng máy chủ không thể cung cấp phần đó. 
   */
  RANGE_NOT_SATISFIABLE = 'Yêu cầu phạm vi không được thỏa mãn: Khách hàng yêu cầu một phần của tài nguyên nhưng máy chủ không thể cung cấp phần đó. ',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Điều mong đợi thất bại: Máy chủ không thể đáp ứng các yêu cầu của trường "Expect" trong tiêu đề yêu cầu. 
   */
  EXPECTATION_FAILED = 'Điều mong đợi thất bại: Máy chủ không thể đáp ứng các yêu cầu của trường "Expect" trong tiêu đề yêu cầu. ',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Tôi là ấm trà: Bất kỳ nỗ lực nào pha cà phê bằng ấm trà đều nên dẫn đến mã lỗi "418 Tôi là ấm trà". Nội dung thể hiện có thể ngắn và thô. 
   */
  I_M_A_TEAPOT = 'Tôi là ấm trà: Bất kỳ nỗ lực nào pha cà phê bằng ấm trà đều nên dẫn đến mã lỗi "418 Tôi là ấm trà". Nội dung thể hiện có thể ngắn và thô. ',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Yêu cầu sai hướng: Yêu cầu được hướng đến máy chủ không có khả năng tạo ra phản hồi. Trạng thái này có thể được gửi bởi máy chủ không được cấu hình để tạo phản hồi cho sự kết hợp của sơ đồ và thẩm quyền được bao gồm trong URI yêu cầu. 
   */
  MISDIRECTED_REQUEST = 'Yêu cầu sai hướng: Yêu cầu được hướng đến máy chủ không có khả năng tạo ra phản hồi. Trạng thái này có thể được gửi bởi máy chủ không được cấu hình để tạo phản hồi cho sự kết hợp của sơ đồ và thẩm quyền được bao gồm trong URI yêu cầu. ',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Thực thể không thể xử lý: Yêu cầu được định dạng đúng nhưng không thể được xử lý trong mẫu hiện tại. Thường được sử dụng khi các tham số được chỉ định không vượt qua lỗi xác thực. 
   */
  UNPROCESSABLE_ENTITY = 'Thực thể không thể xử lý: Yêu cầu được định dạng đúng nhưng không thể được xử lý trong mẫu hiện tại. Thường được sử dụng khi các tham số được chỉ định không vượt qua lỗi xác thực. ',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Đã khoá: Tài nguyên được yêu cầu đã được tìm thấy nhưng đã bị khoá và sẽ không được trả về. 
   */
  LOCKED = 'Đã khoá: Tài nguyên được yêu cầu đã được tìm thấy nhưng đã bị khoá và sẽ không được trả về. ',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Thất bại phụ thuộc: Yêu cầu thất bại do thất bại của yêu cầu trước đó. 
   */
  FAILED_DEPENDENCY = 'Thất bại phụ thuộc: Yêu cầu thất bại do thất bại của yêu cầu trước đó. ',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Cần nâng cấp: Khách hàng nên gửi yêu cầu lại bằng cách sử dụng giao thức được nâng cấp như TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Cần nâng cấp: Khách hàng nên gửi yêu cầu lại bằng cách sử dụng giao thức được nâng cấp như TLS 1.0. ',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Điều kiện tiên quyết được yêu cầu: Máy chủ gốc yêu cầu yêu cầu phải có điều kiện. 
   */
  PRECONDITION_REQUIRED = 'Điều kiện tiên quyết được yêu cầu: Máy chủ gốc yêu cầu yêu cầu phải có điều kiện. ',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Quá nhiều yêu cầu: Người dùng đã gửi quá nhiều yêu cầu trong khoảng thời gian được cho ("giới hạn tốc độ"). 
   */
  TOO_MANY_REQUESTS = 'Quá nhiều yêu cầu: Người dùng đã gửi quá nhiều yêu cầu trong khoảng thời gian được cho ("giới hạn tốc độ"). ',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Trường header yêu cầu quá lớn: Máy chủ không muốn xử lý yêu cầu vì trường header của nó quá lớn. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Trường header yêu cầu quá lớn: Máy chủ không muốn xử lý yêu cầu vì trường header của nó quá lớn. ',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Thời gian đăng nhập quá hạn (Microsoft): Một phần mở rộng của Microsoft. Chỉ ra rằng phiên của bạn đã hết hạn. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Thời gian đăng nhập quá hạn (Microsoft): Một phần mở rộng của Microsoft. Chỉ ra rằng phiên của bạn đã hết hạn. ',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Không có phản hồi (Nginx): Được sử dụng trong nhật ký Nginx để chỉ ra rằng máy chủ không trả về bất kỳ thông tin nào cho khách hàng và đóng kết nối (có ích như là một yếu tố ngăn chặn phần mềm độc hại). 
   */
  NO_RESPONSE_NGINX = 'Không có phản hồi (Nginx): Được sử dụng trong nhật ký Nginx để chỉ ra rằng máy chủ không trả về bất kỳ thông tin nào cho khách hàng và đóng kết nối (có ích như là một yếu tố ngăn chặn phần mềm độc hại). ',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Retry With (Microsoft): Một phần mở rộng của Microsoft. Yêu cầu phải được thử lại sau khi thực hiện hành động thích hợp.
   *
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft): Một phần mở rộng của Microsoft. Yêu cầu phải được thử lại sau khi thực hiện hành động thích hợp.\n\
',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Bị chặn bởi kiểm soát của phụ huynh Windows (Microsoft): Một tiện ích mở rộng của Microsoft. Lỗi này xuất hiện khi kiểm soát của phụ huynh Windows được bật và chặn truy cập tới trang web được chỉ định. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Bị chặn bởi kiểm soát của phụ huynh Windows (Microsoft): Một tiện ích mở rộng của Microsoft. Lỗi này xuất hiện khi kiểm soát của phụ huynh Windows được bật và chặn truy cập tới trang web được chỉ định. ',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Được sử dụng trong Exchange ActiveSync nếu có một máy chủ hiệu quả hơn để sử dụng hoặc máy chủ không thể truy cập vào hộp thư của người dùng. Do lý do pháp lý không khả dụng: Máy chủ không thể hoạt động do nhận được yêu cầu hạn chế pháp lý. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Redirect (Microsoft): Được sử dụng trong Exchange ActiveSync nếu có một máy chủ hiệu quả hơn để sử dụng hoặc máy chủ không thể truy cập vào hộp thư của người dùng. Do lý do pháp lý không khả dụng: Máy chủ không thể hoạt động do nhận được yêu cầu hạn chế pháp lý. ',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Request Header Quá Lớn (Nginx): Mã nội bộ của Nginx tương tự như 431 nhưng được giới thiệu sớm hơn trong phiên bản 0.9.4 (vào ngày 21 tháng 1 năm 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Quá Lớn (Nginx): Mã nội bộ của Nginx tương tự như 431 nhưng được giới thiệu sớm hơn trong phiên bản 0.9.4 (vào ngày 21 tháng 1 năm 2011). ',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Lỗi chứng chỉ (Nginx): Mã nội bộ của Nginx được sử dụng khi có lỗi chứng chỉ của khách hàng SSL xảy ra để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. 
   */
  CERT_ERROR_NGINX = 'Lỗi chứng chỉ (Nginx): Mã nội bộ của Nginx được sử dụng khi có lỗi chứng chỉ của khách hàng SSL xảy ra để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. ',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Mã nội bộ của Nginx được sử dụng khi máy khách không cung cấp chứng chỉ để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx): Mã nội bộ của Nginx được sử dụng khi máy khách không cung cấp chứng chỉ để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. ',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP sang HTTPS (Nginx): Mã nội bộ của Nginx được sử dụng cho các yêu cầu HTTP thuần được gửi đến cổng HTTPS để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP sang HTTPS (Nginx): Mã nội bộ của Nginx được sử dụng cho các yêu cầu HTTP thuần được gửi đến cổng HTTPS để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. ',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token đã hết hạn / không hợp lệ (Esri): Được trả về bởi ArcGIS for Server. Mã 498 cho thấy token đã hết hạn hoặc không hợp lệ. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token đã hết hạn / không hợp lệ (Esri): Được trả về bởi ArcGIS for Server. Mã 498 cho thấy token đã hết hạn hoặc không hợp lệ. ',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token được yêu cầu (Esri): Được trả về bởi ArcGIS for Server. Mã số 499 chỉ ra rằng một token được yêu cầu (nếu không có token được gửi). 
   */
  TOKEN_REQUIRED_ESRI = 'Token được yêu cầu (Esri): Được trả về bởi ArcGIS for Server. Mã số 499 chỉ ra rằng một token được yêu cầu (nếu không có token được gửi). ',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Lỗi nội bộ máy chủ: Một tình trạng chung cho lỗi trong máy chủ. 
   */
  INTERNAL_SERVER_ERROR = 'Lỗi nội bộ máy chủ: Một tình trạng chung cho lỗi trong máy chủ. ',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Chưa triển khai: Máy chủ không thể đáp ứng yêu cầu. Điều này thường ngụ ý rằng máy chủ có thể hỗ trợ yêu cầu trong tương lai - nếu không thì mã trạng thái 4xx có thể thích hợp hơn. 
   */
  NOT_IMPLEMENTED = 'Chưa triển khai: Máy chủ không thể đáp ứng yêu cầu. Điều này thường ngụ ý rằng máy chủ có thể hỗ trợ yêu cầu trong tương lai - nếu không thì mã trạng thái 4xx có thể thích hợp hơn. ',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Cổng không hợp lệ: Khi máy chủ đóng vai trò là một đại lý, không nhận được phản ứng chấp nhận được từ máy chủ phía trên. 
   */
  BAD_GATEWAY = 'Cổng không hợp lệ: Khi máy chủ đóng vai trò là một đại lý, không nhận được phản ứng chấp nhận được từ máy chủ phía trên. ',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Dịch vụ không khả dụng: Máy chủ đã tắt và không chấp nhận yêu cầu. 
   */
  SERVICE_UNAVAILABLE = 'Dịch vụ không khả dụng: Máy chủ đã tắt và không chấp nhận yêu cầu. ',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout của cổng: Máy chủ đang hoạt động như một đại lý và không nhận được phản ứng từ máy chủ thượng lưu. 
   */
  GATEWAY_TIMEOUT = 'Timeout của cổng: Máy chủ đang hoạt động như một đại lý và không nhận được phản ứng từ máy chủ thượng lưu. ',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Phiên bản HTTP không được hỗ trợ: Máy chủ không hỗ trợ phiên bản giao thức HTTP được chỉ định trong yêu cầu. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'Phiên bản HTTP không được hỗ trợ: Máy chủ không hỗ trợ phiên bản giao thức HTTP được chỉ định trong yêu cầu. ',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Biến thể cũng đang thương lượng: Thương lượng nội dung minh bạch cho yêu cầu dẫn đến một tham chiếu vòng. 
   */
  VARIANT_ALSO_NEGOTIATES = 'Biến thể cũng đang thương lượng: Thương lượng nội dung minh bạch cho yêu cầu dẫn đến một tham chiếu vòng. ',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Không đủ dung lượng lưu trữ: Người dùng hoặc máy chủ không có đủ hạn mức dung lượng lưu trữ để đáp ứng yêu cầu. 
   */
  INSUFFICIENT_STORAGE = 'Không đủ dung lượng lưu trữ: Người dùng hoặc máy chủ không có đủ hạn mức dung lượng lưu trữ để đáp ứng yêu cầu. ',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Phát hiện vòng lặp: Máy chủ phát hiện thấy vòng lặp vô hạn trong yêu cầu. 
   */
  LOOP_DETECTED = 'Phát hiện vòng lặp: Máy chủ phát hiện thấy vòng lặp vô hạn trong yêu cầu. ',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Giới hạn băng thông vượt quá (Phần mở rộng bw/limited của Apache): Mã trạng thái này không được quy định trong bất kỳ RFC nào. Cách sử dụng của nó không được biết. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Giới hạn băng thông vượt quá (Phần mở rộng bw/limited của Apache): Mã trạng thái này không được quy định trong bất kỳ RFC nào. Cách sử dụng của nó không được biết. ',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Không được mở rộng: Cần mở rộng thêm yêu cầu để có thể hoàn thành. 
   */
  NOT_EXTENDED = 'Không được mở rộng: Cần mở rộng thêm yêu cầu để có thể hoàn thành. ',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Xác thực mạng được yêu cầu: Khách hàng phải xác thực với mạng trước khi gửi yêu cầu. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Xác thực mạng được yêu cầu: Khách hàng phải xác thực với mạng trước khi gửi yêu cầu. ',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Lỗi không xác định (Microsoft / CloudFlare): Mã trạng thái này không được quy định trong bất kỳ RFC nào và được trả về bởi một số dịch vụ, ví dụ như máy chủ Microsoft Azure và CloudFlare: "Lỗi 520 về cơ bản là phản ứng 'bao quát' khi máy chủ nguồn trả về một cái gì đó bất ngờ hoặc một cái gì đó không được chấp nhận / giải thích (vi phạm giao thức hoặc phản ứng trống)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Lỗi không xác định (Microsoft / CloudFlare): Mã trạng thái này không được quy định trong bất kỳ RFC nào và được trả về bởi một số dịch vụ, ví dụ như máy chủ Microsoft Azure và CloudFlare: "Lỗi 520 về cơ bản là phản ứng \'bao quát\' khi máy chủ nguồn trả về một cái gì đó bất ngờ hoặc một cái gì đó không được chấp nhận / giải thích (vi phạm giao thức hoặc phản ứng trống)." ',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Đã Bị Lỗi (CloudFlare): Máy chủ gốc đã từ chối kết nối từ CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Đã Bị Lỗi (CloudFlare): Máy chủ gốc đã từ chối kết nối từ CloudFlare. ',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Connection Timed Out (CloudFlare): CloudFlare không thể thương lượng handshake TCP với máy chủ gốc. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare): CloudFlare không thể thương lượng handshake TCP với máy chủ gốc. ',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): CloudFlare không thể tiếp cận máy chủ gốc; chẳng hạn như, nếu bản ghi DNS của máy chủ gốc không chính xác. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare): CloudFlare không thể tiếp cận máy chủ gốc; chẳng hạn như, nếu bản ghi DNS của máy chủ gốc không chính xác. ',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Xảy ra thời gian chờ quá hạn (CloudFlare): CloudFlare có thể thực hiện kết nối TCP với máy chủ gốc, nhưng không nhận được phản hồi HTTP kịp thời. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'Xảy ra thời gian chờ quá hạn (CloudFlare): CloudFlare có thể thực hiện kết nối TCP với máy chủ gốc, nhưng không nhận được phản hồi HTTP kịp thời. ',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): CloudFlare không thể thương lượng handshake SSL/TLS với máy chủ gốc. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare): CloudFlare không thể thương lượng handshake SSL/TLS với máy chủ gốc. ',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Chứng chỉ SSL không hợp lệ (CloudFlare): CloudFlare không thể xác thực chứng chỉ SSL/TLS được máy chủ nguồn cung cấp. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Chứng chỉ SSL không hợp lệ (CloudFlare): CloudFlare không thể xác thực chứng chỉ SSL/TLS được máy chủ nguồn cung cấp. ',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Lỗi Railgun (CloudFlare): Yêu cầu đã hết thời gian chờ hoặc thất bại sau khi kết nối WAN được thiết lập. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Lỗi Railgun (CloudFlare): Yêu cầu đã hết thời gian chờ hoặc thất bại sau khi kết nối WAN được thiết lập. '
}

export enum HttpStatusDescriptionByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Tiếp tục: Máy chủ đã nhận được tiêu đề yêu cầu và khách hàng nên tiếp tục gửi thân yêu cầu. 
   */
  h100 = 'Tiếp tục: Máy chủ đã nhận được tiêu đề yêu cầu và khách hàng nên tiếp tục gửi thân yêu cầu. ',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Chuyển đổi giao thức: Người yêu cầu đã yêu cầu máy chủ chuyển đổi giao thức và máy chủ xác nhận rằng nó sẽ thực hiện. 
   */
  h101 = 'Chuyển đổi giao thức: Người yêu cầu đã yêu cầu máy chủ chuyển đổi giao thức và máy chủ xác nhận rằng nó sẽ thực hiện. ',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Xử lý: Máy chủ đã nhận được yêu cầu và đang xử lý, nhưng chưa có phản hồi nào có sẵn. 
   */
  h102 = 'Xử lý: Máy chủ đã nhận được yêu cầu và đang xử lý, nhưng chưa có phản hồi nào có sẵn. ',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công. 
   */
  h200 = 'OK: Phản ứng chuẩn cho các yêu cầu HTTP thành công.  Thành công: Phản ứng chuẩn của yêu cầu HTTP thành công. ',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Đã tạo: Yêu cầu đã được hoàn thành và một tài nguyên mới đã được tạo. 
   */
  h201 = 'Đã tạo: Yêu cầu đã được hoàn thành và một tài nguyên mới đã được tạo. ',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Được chấp nhận: Yêu cầu đã được chấp nhận nhưng chưa được xử lý xong. Mã này không đảm bảo rằng yêu cầu sẽ được xử lý thành công. 
   */
  h202 = 'Được chấp nhận: Yêu cầu đã được chấp nhận nhưng chưa được xử lý xong. Mã này không đảm bảo rằng yêu cầu sẽ được xử lý thành công. ',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Thông tin không có thẩm quyền: HTTP 1.1. Máy chủ đã xử lý yêu cầu một cách thành công nhưng đang trả về thông tin từ một nguồn khác. 
   */
  h203 = 'Thông tin không có thẩm quyền: HTTP 1.1. Máy chủ đã xử lý yêu cầu một cách thành công nhưng đang trả về thông tin từ một nguồn khác. ',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * No content: Máy chủ chấp nhận yêu cầu nhưng không trả lại bất kỳ nội dung nào. Đây thường được dùng như là phản ứng với yêu cầu DELETE. 
   */
  h204 = 'No content: Máy chủ chấp nhận yêu cầu nhưng không trả lại bất kỳ nội dung nào. Đây thường được dùng như là phản ứng với yêu cầu DELETE. ',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Đặt lại nội dung: Tương tự như phản ứng 204 No Content, nhưng phản ứng này yêu cầu người yêu cầu đặt lại chế độ xem tài liệu. 
   */
  h205 = 'Đặt lại nội dung: Tương tự như phản ứng 204 No Content, nhưng phản ứng này yêu cầu người yêu cầu đặt lại chế độ xem tài liệu. ',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Nội dung một phần: Máy chủ chỉ cung cấp một phần nội dung được yêu cầu bởi khách hàng qua tiêu đề phạm vi (Range header). 
   */
  h206 = 'Nội dung một phần: Máy chủ chỉ cung cấp một phần nội dung được yêu cầu bởi khách hàng qua tiêu đề phạm vi (Range header). ',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: Thân tin nhắn phía sau là một tin nhắn XML và có thể chứa một số mã phản ứng riêng biệt, tùy thuộc vào có bao nhiêu yêu cầu con được thực hiện. 
   */
  h207 = 'Multi-status: Thân tin nhắn phía sau là một tin nhắn XML và có thể chứa một số mã phản ứng riêng biệt, tùy thuộc vào có bao nhiêu yêu cầu con được thực hiện. ',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Đã báo cáo: Các thành viên của liên kết DAV đã được liệt kê trong phản hồi trước cho yêu cầu này và không được bao gồm lại nữa. 
   */
  h208 = 'Đã báo cáo: Các thành viên của liên kết DAV đã được liệt kê trong phản hồi trước cho yêu cầu này và không được bao gồm lại nữa. ',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM được sử dụng: Máy chủ đã hoàn thành yêu cầu GET cho tài nguyên và phản hồi là một biểu diễn của kết quả của một hoặc nhiều thao tác đối tượng được áp dụng cho đối tượng hiện tại. 
   */
  h226 = 'IM được sử dụng: Máy chủ đã hoàn thành yêu cầu GET cho tài nguyên và phản hồi là một biểu diễn của kết quả của một hoặc nhiều thao tác đối tượng được áp dụng cho đối tượng hiện tại. ',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Lựa chọn nhiều: Có nhiều lựa chọn mà khách hàng có thể thực hiện theo một trong số đó. 
   */
  h300 = 'Lựa chọn nhiều: Có nhiều lựa chọn mà khách hàng có thể thực hiện theo một trong số đó. ',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Đã di chuyển vĩnh viễn: Tài nguyên đã được di chuyển và tất cả các yêu cầu sau này phải tham chiếu đến URI mới của nó. 
   */
  h301 = 'Đã di chuyển vĩnh viễn: Tài nguyên đã được di chuyển và tất cả các yêu cầu sau này phải tham chiếu đến URI mới của nó. ',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Tìm thấy: Thông số kỹ thuật của HTTP 1.0 mô tả trạng thái này là "Di chuyển tạm thời", nhưng các trình duyệt phổ biến phản ứng với trạng thái này tương tự như hành vi dự định cho 303. Tài nguyên có thể được truy xuất bằng cách tham chiếu đến URI được trả về. 
   */
  h302 = 'Tìm thấy: Thông số kỹ thuật của HTTP 1.0 mô tả trạng thái này là "Di chuyển tạm thời", nhưng các trình duyệt phổ biến phản ứng với trạng thái này tương tự như hành vi dự định cho 303. Tài nguyên có thể được truy xuất bằng cách tham chiếu đến URI được trả về. ',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Xem các mục khác: Tài nguyên có thể được truy xuất bằng cách theo các URI khác sử dụng phương thức GET. Khi nhận được trong phản ứng với yêu cầu POST, PUT hoặc DELETE, thường có thể suy ra rằng máy chủ đã xử lý yêu cầu thành công và đang gửi khách hàng đến một điểm cuối thông tin. 
   */
  h303 = 'Xem các mục khác: Tài nguyên có thể được truy xuất bằng cách theo các URI khác sử dụng phương thức GET. Khi nhận được trong phản ứng với yêu cầu POST, PUT hoặc DELETE, thường có thể suy ra rằng máy chủ đã xử lý yêu cầu thành công và đang gửi khách hàng đến một điểm cuối thông tin. ',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Chưa được sửa đổi: Tài nguyên chưa được sửa đổi kể từ phiên bản được chỉ định trong tiêu đề If-Modified-Since hoặc If-Match. Tài nguyên sẽ không được trả về trong nội dung phản hồi. 
   */
  h304 = 'Chưa được sửa đổi: Tài nguyên chưa được sửa đổi kể từ phiên bản được chỉ định trong tiêu đề If-Modified-Since hoặc If-Match. Tài nguyên sẽ không được trả về trong nội dung phản hồi. ',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Sử dụng proxy: HTTP 1.1. Tài nguyên chỉ có sẵn qua proxy và địa chỉ được cung cấp trong phản hồi. 
   */
  h305 = 'Sử dụng proxy: HTTP 1.1. Tài nguyên chỉ có sẵn qua proxy và địa chỉ được cung cấp trong phản hồi. ',
  /**
   * h306: 
   *
   * Empty
   * Chuyển đổi proxy: Đã lỗi thời trong HTTP 1.1. Được dùng để có nghĩa là các yêu cầu sau đó nên được gửi bằng proxy được chỉ định. 
   */
  h306 = 'Chuyển đổi proxy: Đã lỗi thời trong HTTP 1.1. Được dùng để có nghĩa là các yêu cầu sau đó nên được gửi bằng proxy được chỉ định. ',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Điều hướng tạm thời: HTTP 1.1. Yêu cầu phải được gửi lại với URI được cung cấp trong phản ứng, nhưng yêu cầu trong tương lai vẫn nên gọi URI ban đầu. 
   */
  h307 = 'Điều hướng tạm thời: HTTP 1.1. Yêu cầu phải được gửi lại với URI được cung cấp trong phản ứng, nhưng yêu cầu trong tương lai vẫn nên gọi URI ban đầu. ',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Tiểu luận không hoàn chỉnh (Google): Mã này được sử dụng trong Đề xuất Yêu cầu HTTP có thể tiếp tục để tiếp tục các yêu cầu PUT hoặc POST bị hủy bỏ.
   *
   * Thường xuyên chuyển hướng: Yêu cầu và tất cả các yêu cầu trong tương lai phải được gửi lại bằng URI được cung cấp trong phản ứng. 
   */
  h308 = 'Tiểu luận không hoàn chỉnh (Google): Mã này được sử dụng trong Đề xuất Yêu cầu HTTP có thể tiếp tục để tiếp tục các yêu cầu PUT hoặc POST bị hủy bỏ.\n\
\n\
Thường xuyên chuyển hướng: Yêu cầu và tất cả các yêu cầu trong tương lai phải được gửi lại bằng URI được cung cấp trong phản ứng. ',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Yêu cầu sai: Yêu cầu không thể được đáp ứng do cú pháp của yêu cầu không chính xác. 
   */
  h400 = 'Yêu cầu sai: Yêu cầu không thể được đáp ứng do cú pháp của yêu cầu không chính xác. ',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Không được ủy quyền: Người yêu cầu không được ủy quyền truy cập tài nguyên. Điều này tương tự như 403 nhưng được sử dụng trong các trường hợp xác thực được mong đợi nhưng đã thất bại hoặc chưa được cung cấp. 
   */
  h401 = 'Không được ủy quyền: Người yêu cầu không được ủy quyền truy cập tài nguyên. Điều này tương tự như 403 nhưng được sử dụng trong các trường hợp xác thực được mong đợi nhưng đã thất bại hoặc chưa được cung cấp. ',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Thanh toán được yêu cầu: Để dành cho sử dụng trong tương lai. Một số dịch vụ web sử dụng trạng thái này như là một dấu hiệu rằng khách hàng đã gửi quá nhiều yêu cầu. 
   */
  h402 = 'Thanh toán được yêu cầu: Để dành cho sử dụng trong tương lai. Một số dịch vụ web sử dụng trạng thái này như là một dấu hiệu rằng khách hàng đã gửi quá nhiều yêu cầu. ',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Cấm: Yêu cầu được định dạng đúng nhưng máy chủ từ chối cung cấp tài nguyên được yêu cầu. Không giống như 401, xác thực sẽ không thay đổi phản ứng của máy chủ. 
   */
  h403 = 'Cấm: Yêu cầu được định dạng đúng nhưng máy chủ từ chối cung cấp tài nguyên được yêu cầu. Không giống như 401, xác thực sẽ không thay đổi phản ứng của máy chủ. ',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Không tìm thấy: Không thể tìm thấy tài nguyên. Điều này thường được sử dụng như là một cách giải quyết chung cho tất cả các URI không hợp lệ được yêu cầu bởi máy chủ. 
   */
  h404 = 'Không tìm thấy: Không thể tìm thấy tài nguyên. Điều này thường được sử dụng như là một cách giải quyết chung cho tất cả các URI không hợp lệ được yêu cầu bởi máy chủ. ',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Phương pháp không được cho phép: Yêu cầu tài nguyên được thực hiện bằng cách sử dụng một phương pháp không được cho phép. Ví dụ, yêu cầu tài nguyên thông qua phương pháp POST trong khi tài nguyên chỉ hỗ trợ phương pháp GET. 
   */
  h405 = 'Phương pháp không được cho phép: Yêu cầu tài nguyên được thực hiện bằng cách sử dụng một phương pháp không được cho phép. Ví dụ, yêu cầu tài nguyên thông qua phương pháp POST trong khi tài nguyên chỉ hỗ trợ phương pháp GET. ',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Không chấp nhận: Tài nguyên là hợp lệ, nhưng không thể được cung cấp theo định dạng được chỉ định trong các tiêu đề Accept trong yêu cầu. 
   */
  h406 = 'Không chấp nhận: Tài nguyên là hợp lệ, nhưng không thể được cung cấp theo định dạng được chỉ định trong các tiêu đề Accept trong yêu cầu. ',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Xác thực ủy quyền proxy được yêu cầu: Xác thực đối với proxy là cần thiết trước khi yêu cầu có thể được đáp ứng. 
   */
  h407 = 'Xác thực ủy quyền proxy được yêu cầu: Xác thực đối với proxy là cần thiết trước khi yêu cầu có thể được đáp ứng. ',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout yêu cầu: Máy chủ đã hết thời gian chờ yêu cầu từ phía khách hàng. Khách hàng được phép gửi lại yêu cầu. 
   */
  h408 = 'Timeout yêu cầu: Máy chủ đã hết thời gian chờ yêu cầu từ phía khách hàng. Khách hàng được phép gửi lại yêu cầu. ',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Xung đột: Yêu cầu không thể hoàn thành do xung đột trong các tham số yêu cầu. 
   */
  h409 = 'Xung đột: Yêu cầu không thể hoàn thành do xung đột trong các tham số yêu cầu. ',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Đã xóa: Tài nguyên không còn có sẵn tại URI được yêu cầu và sẽ không được cung cấp chuyển hướng. 
   */
  h410 = 'Đã xóa: Tài nguyên không còn có sẵn tại URI được yêu cầu và sẽ không được cung cấp chuyển hướng. ',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Độ dài yêu cầu: Yêu cầu không chỉ định độ dài nội dung như yêu cầu của tài nguyên. 
   */
  h411 = 'Độ dài yêu cầu: Yêu cầu không chỉ định độ dài nội dung như yêu cầu của tài nguyên. ',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Điều kiện tiền đề thất bại: Máy chủ không đáp ứng một trong những điều kiện tiền đề được chỉ định bởi khách hàng. 
   */
  h412 = 'Điều kiện tiền đề thất bại: Máy chủ không đáp ứng một trong những điều kiện tiền đề được chỉ định bởi khách hàng. ',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Yêu cầu thực thể quá lớn: Nội dung yêu cầu lớn hơn mức có thể xử lý của máy chủ. 
   */
  h413 = 'Yêu cầu thực thể quá lớn: Nội dung yêu cầu lớn hơn mức có thể xử lý của máy chủ. ',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * Yêu cầu URI quá dài: URI được cung cấp trong yêu cầu quá dài đến mức máy chủ không thể xử lý. Đây thường được sử dụng khi có quá nhiều dữ liệu được mã hóa trong URI của yêu cầu GET và yêu cầu POST nên được sử dụng thay thế. 
   */
  h414 = 'Yêu cầu URI quá dài: URI được cung cấp trong yêu cầu quá dài đến mức máy chủ không thể xử lý. Đây thường được sử dụng khi có quá nhiều dữ liệu được mã hóa trong URI của yêu cầu GET và yêu cầu POST nên được sử dụng thay thế. ',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Loại phương tiện truyền thông không được hỗ trợ: Dữ liệu được cung cấp bởi khách hàng có kiểu phương tiện truyền thông không được máy chủ hỗ trợ. 
   */
  h415 = 'Loại phương tiện truyền thông không được hỗ trợ: Dữ liệu được cung cấp bởi khách hàng có kiểu phương tiện truyền thông không được máy chủ hỗ trợ. ',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Yêu cầu phạm vi không được thỏa mãn: Khách hàng yêu cầu một phần của tài nguyên nhưng máy chủ không thể cung cấp phần đó. 
   */
  h416 = 'Yêu cầu phạm vi không được thỏa mãn: Khách hàng yêu cầu một phần của tài nguyên nhưng máy chủ không thể cung cấp phần đó. ',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Điều mong đợi thất bại: Máy chủ không thể đáp ứng các yêu cầu của trường "Expect" trong tiêu đề yêu cầu. 
   */
  h417 = 'Điều mong đợi thất bại: Máy chủ không thể đáp ứng các yêu cầu của trường "Expect" trong tiêu đề yêu cầu. ',
  /**
   * h418: 
   *
   * Empty
   * Tôi là ấm trà: Bất kỳ nỗ lực nào pha cà phê bằng ấm trà đều nên dẫn đến mã lỗi "418 Tôi là ấm trà". Nội dung thể hiện có thể ngắn và thô. 
   */
  h418 = 'Tôi là ấm trà: Bất kỳ nỗ lực nào pha cà phê bằng ấm trà đều nên dẫn đến mã lỗi "418 Tôi là ấm trà". Nội dung thể hiện có thể ngắn và thô. ',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Yêu cầu sai hướng: Yêu cầu được hướng đến máy chủ không có khả năng tạo ra phản hồi. Trạng thái này có thể được gửi bởi máy chủ không được cấu hình để tạo phản hồi cho sự kết hợp của sơ đồ và thẩm quyền được bao gồm trong URI yêu cầu. 
   */
  h421 = 'Yêu cầu sai hướng: Yêu cầu được hướng đến máy chủ không có khả năng tạo ra phản hồi. Trạng thái này có thể được gửi bởi máy chủ không được cấu hình để tạo phản hồi cho sự kết hợp của sơ đồ và thẩm quyền được bao gồm trong URI yêu cầu. ',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Thực thể không thể xử lý: Yêu cầu được định dạng đúng nhưng không thể được xử lý trong mẫu hiện tại. Thường được sử dụng khi các tham số được chỉ định không vượt qua lỗi xác thực. 
   */
  h422 = 'Thực thể không thể xử lý: Yêu cầu được định dạng đúng nhưng không thể được xử lý trong mẫu hiện tại. Thường được sử dụng khi các tham số được chỉ định không vượt qua lỗi xác thực. ',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Đã khoá: Tài nguyên được yêu cầu đã được tìm thấy nhưng đã bị khoá và sẽ không được trả về. 
   */
  h423 = 'Đã khoá: Tài nguyên được yêu cầu đã được tìm thấy nhưng đã bị khoá và sẽ không được trả về. ',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Thất bại phụ thuộc: Yêu cầu thất bại do thất bại của yêu cầu trước đó. 
   */
  h424 = 'Thất bại phụ thuộc: Yêu cầu thất bại do thất bại của yêu cầu trước đó. ',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Cần nâng cấp: Khách hàng nên gửi yêu cầu lại bằng cách sử dụng giao thức được nâng cấp như TLS 1.0. 
   */
  h426 = 'Cần nâng cấp: Khách hàng nên gửi yêu cầu lại bằng cách sử dụng giao thức được nâng cấp như TLS 1.0. ',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Điều kiện tiên quyết được yêu cầu: Máy chủ gốc yêu cầu yêu cầu phải có điều kiện. 
   */
  h428 = 'Điều kiện tiên quyết được yêu cầu: Máy chủ gốc yêu cầu yêu cầu phải có điều kiện. ',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Quá nhiều yêu cầu: Người dùng đã gửi quá nhiều yêu cầu trong khoảng thời gian được cho ("giới hạn tốc độ"). 
   */
  h429 = 'Quá nhiều yêu cầu: Người dùng đã gửi quá nhiều yêu cầu trong khoảng thời gian được cho ("giới hạn tốc độ"). ',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Trường header yêu cầu quá lớn: Máy chủ không muốn xử lý yêu cầu vì trường header của nó quá lớn. 
   */
  h431 = 'Trường header yêu cầu quá lớn: Máy chủ không muốn xử lý yêu cầu vì trường header của nó quá lớn. ',
  /**
   * h440: 
   *
   * Empty
   * Thời gian đăng nhập quá hạn (Microsoft): Một phần mở rộng của Microsoft. Chỉ ra rằng phiên của bạn đã hết hạn. 
   */
  h440 = 'Thời gian đăng nhập quá hạn (Microsoft): Một phần mở rộng của Microsoft. Chỉ ra rằng phiên của bạn đã hết hạn. ',
  /**
   * h444: 
   *
   * Empty
   * Không có phản hồi (Nginx): Được sử dụng trong nhật ký Nginx để chỉ ra rằng máy chủ không trả về bất kỳ thông tin nào cho khách hàng và đóng kết nối (có ích như là một yếu tố ngăn chặn phần mềm độc hại). 
   */
  h444 = 'Không có phản hồi (Nginx): Được sử dụng trong nhật ký Nginx để chỉ ra rằng máy chủ không trả về bất kỳ thông tin nào cho khách hàng và đóng kết nối (có ích như là một yếu tố ngăn chặn phần mềm độc hại). ',
  /**
   * h449: 
   *
   * Empty
   * Retry With (Microsoft): Một phần mở rộng của Microsoft. Yêu cầu phải được thử lại sau khi thực hiện hành động thích hợp.
   *
   */
  h449 = 'Retry With (Microsoft): Một phần mở rộng của Microsoft. Yêu cầu phải được thử lại sau khi thực hiện hành động thích hợp.\n\
',
  /**
   * h450: 
   *
   * Empty
   * Bị chặn bởi kiểm soát của phụ huynh Windows (Microsoft): Một tiện ích mở rộng của Microsoft. Lỗi này xuất hiện khi kiểm soát của phụ huynh Windows được bật và chặn truy cập tới trang web được chỉ định. 
   */
  h450 = 'Bị chặn bởi kiểm soát của phụ huynh Windows (Microsoft): Một tiện ích mở rộng của Microsoft. Lỗi này xuất hiện khi kiểm soát của phụ huynh Windows được bật và chặn truy cập tới trang web được chỉ định. ',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirect (Microsoft): Được sử dụng trong Exchange ActiveSync nếu có một máy chủ hiệu quả hơn để sử dụng hoặc máy chủ không thể truy cập vào hộp thư của người dùng. Do lý do pháp lý không khả dụng: Máy chủ không thể hoạt động do nhận được yêu cầu hạn chế pháp lý. 
   */
  h451 = 'Redirect (Microsoft): Được sử dụng trong Exchange ActiveSync nếu có một máy chủ hiệu quả hơn để sử dụng hoặc máy chủ không thể truy cập vào hộp thư của người dùng. Do lý do pháp lý không khả dụng: Máy chủ không thể hoạt động do nhận được yêu cầu hạn chế pháp lý. ',
  /**
   * h494: 
   *
   * Empty
   * Request Header Quá Lớn (Nginx): Mã nội bộ của Nginx tương tự như 431 nhưng được giới thiệu sớm hơn trong phiên bản 0.9.4 (vào ngày 21 tháng 1 năm 2011). 
   */
  h494 = 'Request Header Quá Lớn (Nginx): Mã nội bộ của Nginx tương tự như 431 nhưng được giới thiệu sớm hơn trong phiên bản 0.9.4 (vào ngày 21 tháng 1 năm 2011). ',
  /**
   * h495: 
   *
   * Empty
   * Lỗi chứng chỉ (Nginx): Mã nội bộ của Nginx được sử dụng khi có lỗi chứng chỉ của khách hàng SSL xảy ra để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. 
   */
  h495 = 'Lỗi chứng chỉ (Nginx): Mã nội bộ của Nginx được sử dụng khi có lỗi chứng chỉ của khách hàng SSL xảy ra để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. ',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Mã nội bộ của Nginx được sử dụng khi máy khách không cung cấp chứng chỉ để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. 
   */
  h496 = 'No Cert (Nginx): Mã nội bộ của Nginx được sử dụng khi máy khách không cung cấp chứng chỉ để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. ',
  /**
   * h497: 
   *
   * Empty
   * HTTP sang HTTPS (Nginx): Mã nội bộ của Nginx được sử dụng cho các yêu cầu HTTP thuần được gửi đến cổng HTTPS để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. 
   */
  h497 = 'HTTP sang HTTPS (Nginx): Mã nội bộ của Nginx được sử dụng cho các yêu cầu HTTP thuần được gửi đến cổng HTTPS để phân biệt nó với 4XX trong nhật ký và chuyển hướng trang lỗi. ',
  /**
   * h498: 
   *
   * Empty
   * Token đã hết hạn / không hợp lệ (Esri): Được trả về bởi ArcGIS for Server. Mã 498 cho thấy token đã hết hạn hoặc không hợp lệ. 
   */
  h498 = 'Token đã hết hạn / không hợp lệ (Esri): Được trả về bởi ArcGIS for Server. Mã 498 cho thấy token đã hết hạn hoặc không hợp lệ. ',
  /**
   * h499: 
   *
   * Empty
   * Token được yêu cầu (Esri): Được trả về bởi ArcGIS for Server. Mã số 499 chỉ ra rằng một token được yêu cầu (nếu không có token được gửi). 
   */
  h499 = 'Token được yêu cầu (Esri): Được trả về bởi ArcGIS for Server. Mã số 499 chỉ ra rằng một token được yêu cầu (nếu không có token được gửi). ',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Lỗi nội bộ máy chủ: Một tình trạng chung cho lỗi trong máy chủ. 
   */
  h500 = 'Lỗi nội bộ máy chủ: Một tình trạng chung cho lỗi trong máy chủ. ',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Chưa triển khai: Máy chủ không thể đáp ứng yêu cầu. Điều này thường ngụ ý rằng máy chủ có thể hỗ trợ yêu cầu trong tương lai - nếu không thì mã trạng thái 4xx có thể thích hợp hơn. 
   */
  h501 = 'Chưa triển khai: Máy chủ không thể đáp ứng yêu cầu. Điều này thường ngụ ý rằng máy chủ có thể hỗ trợ yêu cầu trong tương lai - nếu không thì mã trạng thái 4xx có thể thích hợp hơn. ',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Cổng không hợp lệ: Khi máy chủ đóng vai trò là một đại lý, không nhận được phản ứng chấp nhận được từ máy chủ phía trên. 
   */
  h502 = 'Cổng không hợp lệ: Khi máy chủ đóng vai trò là một đại lý, không nhận được phản ứng chấp nhận được từ máy chủ phía trên. ',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Dịch vụ không khả dụng: Máy chủ đã tắt và không chấp nhận yêu cầu. 
   */
  h503 = 'Dịch vụ không khả dụng: Máy chủ đã tắt và không chấp nhận yêu cầu. ',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout của cổng: Máy chủ đang hoạt động như một đại lý và không nhận được phản ứng từ máy chủ thượng lưu. 
   */
  h504 = 'Timeout của cổng: Máy chủ đang hoạt động như một đại lý và không nhận được phản ứng từ máy chủ thượng lưu. ',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Phiên bản HTTP không được hỗ trợ: Máy chủ không hỗ trợ phiên bản giao thức HTTP được chỉ định trong yêu cầu. 
   */
  h505 = 'Phiên bản HTTP không được hỗ trợ: Máy chủ không hỗ trợ phiên bản giao thức HTTP được chỉ định trong yêu cầu. ',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Biến thể cũng đang thương lượng: Thương lượng nội dung minh bạch cho yêu cầu dẫn đến một tham chiếu vòng. 
   */
  h506 = 'Biến thể cũng đang thương lượng: Thương lượng nội dung minh bạch cho yêu cầu dẫn đến một tham chiếu vòng. ',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Không đủ dung lượng lưu trữ: Người dùng hoặc máy chủ không có đủ hạn mức dung lượng lưu trữ để đáp ứng yêu cầu. 
   */
  h507 = 'Không đủ dung lượng lưu trữ: Người dùng hoặc máy chủ không có đủ hạn mức dung lượng lưu trữ để đáp ứng yêu cầu. ',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Phát hiện vòng lặp: Máy chủ phát hiện thấy vòng lặp vô hạn trong yêu cầu. 
   */
  h508 = 'Phát hiện vòng lặp: Máy chủ phát hiện thấy vòng lặp vô hạn trong yêu cầu. ',
  /**
   * h509: 
   *
   * Empty
   * Giới hạn băng thông vượt quá (Phần mở rộng bw/limited của Apache): Mã trạng thái này không được quy định trong bất kỳ RFC nào. Cách sử dụng của nó không được biết. 
   */
  h509 = 'Giới hạn băng thông vượt quá (Phần mở rộng bw/limited của Apache): Mã trạng thái này không được quy định trong bất kỳ RFC nào. Cách sử dụng của nó không được biết. ',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Không được mở rộng: Cần mở rộng thêm yêu cầu để có thể hoàn thành. 
   */
  h510 = 'Không được mở rộng: Cần mở rộng thêm yêu cầu để có thể hoàn thành. ',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Xác thực mạng được yêu cầu: Khách hàng phải xác thực với mạng trước khi gửi yêu cầu. 
   */
  h511 = 'Xác thực mạng được yêu cầu: Khách hàng phải xác thực với mạng trước khi gửi yêu cầu. ',
  /**
   * h520: 
   *
   * Empty
   * Lỗi không xác định (Microsoft / CloudFlare): Mã trạng thái này không được quy định trong bất kỳ RFC nào và được trả về bởi một số dịch vụ, ví dụ như máy chủ Microsoft Azure và CloudFlare: "Lỗi 520 về cơ bản là phản ứng 'bao quát' khi máy chủ nguồn trả về một cái gì đó bất ngờ hoặc một cái gì đó không được chấp nhận / giải thích (vi phạm giao thức hoặc phản ứng trống)." 
   */
  h520 = 'Lỗi không xác định (Microsoft / CloudFlare): Mã trạng thái này không được quy định trong bất kỳ RFC nào và được trả về bởi một số dịch vụ, ví dụ như máy chủ Microsoft Azure và CloudFlare: "Lỗi 520 về cơ bản là phản ứng \'bao quát\' khi máy chủ nguồn trả về một cái gì đó bất ngờ hoặc một cái gì đó không được chấp nhận / giải thích (vi phạm giao thức hoặc phản ứng trống)." ',
  /**
   * h521: 
   *
   * Empty
   * Web Server Đã Bị Lỗi (CloudFlare): Máy chủ gốc đã từ chối kết nối từ CloudFlare. 
   */
  h521 = 'Web Server Đã Bị Lỗi (CloudFlare): Máy chủ gốc đã từ chối kết nối từ CloudFlare. ',
  /**
   * h522: 
   *
   * Empty
   * Connection Timed Out (CloudFlare): CloudFlare không thể thương lượng handshake TCP với máy chủ gốc. 
   */
  h522 = 'Connection Timed Out (CloudFlare): CloudFlare không thể thương lượng handshake TCP với máy chủ gốc. ',
  /**
   * h523: 
   *
   * Empty
   * Origin Is Unreachable (CloudFlare): CloudFlare không thể tiếp cận máy chủ gốc; chẳng hạn như, nếu bản ghi DNS của máy chủ gốc không chính xác. 
   */
  h523 = 'Origin Is Unreachable (CloudFlare): CloudFlare không thể tiếp cận máy chủ gốc; chẳng hạn như, nếu bản ghi DNS của máy chủ gốc không chính xác. ',
  /**
   * h524: 
   *
   * Empty
   * Xảy ra thời gian chờ quá hạn (CloudFlare): CloudFlare có thể thực hiện kết nối TCP với máy chủ gốc, nhưng không nhận được phản hồi HTTP kịp thời. 
   */
  h524 = 'Xảy ra thời gian chờ quá hạn (CloudFlare): CloudFlare có thể thực hiện kết nối TCP với máy chủ gốc, nhưng không nhận được phản hồi HTTP kịp thời. ',
  /**
   * h525: 
   *
   * Empty
   * SSL Handshake Failed (CloudFlare): CloudFlare không thể thương lượng handshake SSL/TLS với máy chủ gốc. 
   */
  h525 = 'SSL Handshake Failed (CloudFlare): CloudFlare không thể thương lượng handshake SSL/TLS với máy chủ gốc. ',
  /**
   * h526: 
   *
   * Empty
   * Chứng chỉ SSL không hợp lệ (CloudFlare): CloudFlare không thể xác thực chứng chỉ SSL/TLS được máy chủ nguồn cung cấp. 
   */
  h526 = 'Chứng chỉ SSL không hợp lệ (CloudFlare): CloudFlare không thể xác thực chứng chỉ SSL/TLS được máy chủ nguồn cung cấp. ',
  /**
   * h527: 
   *
   * Empty
   * Lỗi Railgun (CloudFlare): Yêu cầu đã hết thời gian chờ hoặc thất bại sau khi kết nối WAN được thiết lập. 
   */
  h527 = 'Lỗi Railgun (CloudFlare): Yêu cầu đã hết thời gian chờ hoặc thất bại sau khi kết nối WAN được thiết lập. '
}
