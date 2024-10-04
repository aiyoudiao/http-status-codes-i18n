/**
 * © 2024 aiyoudiao
 * 
 * このファイルは aiyoudiao によって作成され、多大な努力と知恵が込められています。
 * 
 * このファイルを自由に使用、修正、配布できますが、この著作権表示を残してください。
 * 
 * このファイルが役に立ったと思ったら、星を付けてくださいまたは私をフォローしてください ツ。
 * 
 * 連絡先：
 * - メール:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 * 
 * プログラミングを楽しんでください！覚えてください、コードは詩で、フロントエンドは芸術です ツ
 */
export enum HttpStatusText {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * 続ける：サーバはリクエストヘッダを受信しており、クライアントはリクエストボディの送信を続けるべきです。 
   */
  CONTINUE = 'Continue',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * プロトコルの切り替え：リクエスタがサーバーにプロトコルの切り替えを要求し、サーバーはそれを行うことを認めています。 
   */
  SWITCHING_PROTOCOLS = 'Switching Protocols',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * 処理中：サーバーはリクエストを受信し、処理中ですが、現在利用できる応答はありません。 
   */
  PROCESSING = 'Processing',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK ：HTTP 要求の成功に対する標準的な応答
   * 成功 ：標準的な成功した HTTP 要求の応答 
   */
  OK = 'OK',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * 作成済み：要求が完了し、新しいリソースが作成されました。 
   */
  CREATED = 'Created',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * 受け入れ済み: リクエストが受け入れられていますが、まだ処理されていません。このコードはリクエストが正常に処理されることを保証しません。 
   */
  ACCEPTED = 'Accepted',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * 非公式的情報：HTTP 1.1。サーバはリクエストを正常に処理しましたが、別のソースからの情報を返しています。 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Non-Authoritative Information',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * コンテンツなし：サーバーは要求を受け入れましたが、いかなるコンテンツも返していません。これは通常、DELETE 要求への応答として使用されます。 
   */
  NO_CONTENT = 'No Content',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * リセットコンテンツ：204 の「ノーコンテンツ」レスポンスに類似していますが、このレスポンスではリクエスターにドキュメントビューのリセットが要求されます。 
   */
  RESET_CONTENT = 'Reset Content',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * 部分的なコンテンツ：サーバーは、クライアントが Range ヘッダーを通じて要求したコンテンツの一部のみを提供します。 
   */
  PARTIAL_CONTENT = 'Partial Content',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * マルチステータス：後続のメッセージボディは XML メッセージであり、発行されたサブリクエストの数に応じて、複数の応答コードを含むことがあります。 
   */
  MULTI_STATUS = 'Multi-Status',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * すでに報告済み: DAV バインディングのメンバーはすでにこの要求に対する以前の返信で列挙されており、再度含められていません。 
   */
  ALREADY_REPORTED = 'Already Reported',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM 使用：サーバーはリソースの GET 要求を完了しており、応答は現在のインスタンスに対して 1 つ以上のインスタンス操作が適用された結果の表現です。 
   */
  IM_USED = 'IM Used',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * マルチチョイス：クライアントは複数のオプションの中から一つを選択して操作できます。 
   */
  MULTIPLE_CHOICES = 'Multiple Choices',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * 恒久的に移動：リソースが移動されており、すべての後続のリクエストはその新しい URI を参照する必要があります。 
   */
  MOVED_PERMANENTLY = 'Moved Permanently',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * 発見：HTTP 1.0 の仕様では、このステータスは「一時的に移動」と説明されていますが、一般的なブラウザはこのステータスに対して 303 の意図された動作と類似の応答をします。リソースは、返された URI を参照することで取得できます。 
   */
  FOUND = 'Found',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * 他のものを参照：リソースは GET メソッドを使用して他の URI をたどることで取得できます。POST、PUT または DELETE の要求に対する応答として受け取った場合は、通常、サーバーが要求を正常に処理し、クライアントを情報提供エンドポイントに向けていると仮定できます。 
   */
  SEE_OTHER = 'See Other',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * 修正されていません: If-Modified-Since または If-Match ヘッダで指定されたバージョン以降、リソースは修正されていません。レスポンスの本体ではリソースは返されません。 
   */
  NOT_MODIFIED = 'Not Modified',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * プロキシ使用：HTTP 1.1 。リソースはプロキシ経由でのみ利用可能で、アドレスは応答に提供されています。 
   */
  USE_PROXY = 'Use Proxy',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * スイッチプロキシ：HTTP 1.1 では廃止されています。以前は、後続のリクエストが指定されたプロキシを使用して送信されるべきであることを意味していました。 
   */
  SWITCH_PROXY = 'Switch proxy',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * 一時的なリダイレクト：HTTP 1.1。要求は、応答で提供された URI を使用してリクエストを再送信する必要がありますが、将来のリクエストは依然として元の URI を呼び出すべきです。 
   */
  TEMPORARY_REDIRECT = 'Temporary Redirect',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * レジューム未完了（Google）：このコードは、レジューム可能な HTTP リクエスト提案で中断された PUT または POST リクエストの再開に使用されます
   * 永続的リダイレクト：リクエストとすべての将来のリクエストは、応答で提供される URI を使用して再送信されるべきです。 
   */
  PERMANENT_REDIRECT = 'Permanent Redirect',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * 不良リクエスト: リクエストの構文が誤っているため、リクエストを満たすことができません。 
   */
  BAD_REQUEST = 'Bad Request',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * 未認可：リクエスターはこのリソースへのアクセス権がありません。これは 403 と類似していますが、認証が期待されているが失敗したか、提供されていない場合に使用されます。 
   */
  UNAUTHORIZED = 'Unauthorized',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * 支払いが必要：将来使用の予約。一部のウェブサービスでは、これをクライアントが過剰な数のリクエストを送信したことを示すコードとして使用します。 
   */
  PAYMENT_REQUIRED = 'Payment Required',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * 禁止：リクエストのフォーマットは正しいが、サーバーは要求されたリソースの提供を拒否しています。401 とは異なり、認証を行ってもサーバーの応答に変化はありません。 
   */
  FORBIDDEN = 'Forbidden',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * 見つからない：要求されたリソースが見つかりません。これは、サーバーで要求されたすべての無効な URI のために一般的に使用されるキャッチオールです。 
   */
  NOT_FOUND = 'Not Found',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * メソッドが許可されていません：リソースは許可されていないメソッドを使用して要求されました。たとえば、リソースが GET メソッドのみをサポートしているのに、POST メソッドを使用してリソースを要求するなどです。 
   */
  METHOD_NOT_ALLOWED = 'Method Not Allowed',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * 受け入れられません：リソースは有効ですが、リクエストの Accept ヘッダで指定された形式で提供できません。 
   */
  NOT_ACCEPTABLE = 'Not Acceptable',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * プロキシ認証が必要です：リクエストを満たす前に、プロキシに対する認証が必要です。 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Proxy Authentication Required',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * リクエストタイムアウト：サーバーはクライアントからのリクエストを待ってタイムアウトしました。クライアントはリクエストを再送信できます。 
   */
  REQUEST_TIMEOUT = 'Request Timeout',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * 紛争：HTTP のシーンにおいて、要求パラメータにおける紛争のため、要求を完了できません。 
   */
  CONFLICT = 'Conflict',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * 消え去った：リクエストされた URI でリソースはもう利用できず、リダイレクションも提供されません。 
   */
  GONE = 'Gone',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * 長さの要求：リクエストはリソースで要求されるコンテンツの長さを指定していません。 
   */
  LENGTH_REQUIRED = 'Length Required',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * 前提条件が失敗しました：サーバーはクライアントによって指定された前提条件の一つを満たしていません。 
   */
  PRECONDITION_FAILED = 'Precondition Failed',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * リクエスト エンティティが大きすぎます: リクエストの内容がサーバが処理できるものより大きいです。 
   */
  PAYLOAD_TOO_LARGE = 'Payload Too Large',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * リクエスト URI が長すぎます：リクエストで提供された URI が長すぎて、サーバーが処理できません。通常、GET リクエストの URI に過剰なデータがエンコードされている場合にこのステータスコードが使用され、代わりに POST リクエストを使用すべきです。 
   */
  URI_TOO_LONG = 'URI Too Long',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * サポートされていないメディアタイプ：クライアントが提供したデータのメディアタイプがサーバーによってサポートされていません。 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Unsupported Media Type',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * 要求された範囲が満足できません：クライアントがリソースの一部を要求していますが、サーバーはその部分を提供できません。 
   */
  RANGE_NOT_SATISFIABLE = 'Range Not Satisfiable',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * 期待が失敗しました：サーバーは Expect リクエストヘッダーフィールドの要件を満たすことができません。 
   */
  EXPECTATION_FAILED = 'Expectation Failed',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * 私はティーポットです：ティーポットでコーヒーを淹れようとするいかなる試みも、エラーコード「418 私はティーポット」を招くべきです。生成されたエンティティ本体は短くて太いかもしれません。 
   */
  I_M_A_TEAPOT = 'I\'m a Teapot',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * 誤ったリクエストの方向指定：リクエストが応答を生成できないサーバーに向けられました。この状態コードは、リクエスト URI に含まれるスキームと権限の組み合わせに対して応答を生成するように設定されていないサーバーから送信されることがあります。 
   */
  MISDIRECTED_REQUEST = 'Misdirected Request',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 処理不能なエンティティ：リクエストは正しい形式で設定されていますが、現在のフォームでは処理できません。通常、指定されたパラメータが検証エラーに合格しない場合に使用されます。 
   */
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * ロック済み：要求されたリソースは見つかりましたが、ロックされており、アクセスできません。 
   */
  LOCKED = 'Locked',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * 依存関係エラー: 前のリクエストが失敗したため、現在のリクエストも失敗しました。 
   */
  FAILED_DEPENDENCY = 'Failed Dependency',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * アップグレードが必要です：クライアントは TLS 1.0 などのアップグレードされたプロトコルを使用してリクエストを繰り返すべきです。 
   */
  UPGRADE_REQUIRED = 'Upgrade Required',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * 前提条件が必要です：オリジンサーバはリクエストが条件付きであることを要求しています。 
   */
  PRECONDITION_REQUIRED = 'Precondition Required',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * リクエストが多すぎます：ユーザーが与えられた時間内にリクエストを多すぎる数送信しました（「レート制限」） 
   */
  TOO_MANY_REQUESTS = 'Too Many Requests',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * リクエストヘッダフィールドが大きすぎます: サーバーは、ヘッダフィールドが大きすぎるため、リクエストの処理に応じることを望んでいません。 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Request Header Fields Too Large',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * ログインタイムアウト（Microsoft）：Microsoft の拡張機能です。ユーザーのセッションが期限切れになったことを示しています。 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Login Timeout (Microsoft)',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * 「ノーレスポンス（Nginx）」: Nginx のログで使用され、サーバーがクライアントに何の情報も返さず接続を閉じたことを示します（マルウェアへの抑止策として有用です）。 
   */
  NO_RESPONSE_NGINX = 'No Response (Nginx)',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * リトライ （Microsoft）：Microsoft の拡張機能です。適切なアクションを実行した後、要求を再送信する必要があります。 
   */
  RETRY_WITH_MICROSOFT = 'Retry With (Microsoft)',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Windows のペアレンタル コントロールでブロックされました (Microsoft)：Microsoft の拡張機能です。Windows のペアレンタル コントロールがオンになっており、特定のウェブページへのアクセスがブロックされた場合にこのエラーが表示されます。 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * リダイレクト (Microsoft) ：Exchange ActiveSync で使用され、より効率的なサーバーが存在するか、またはサーバーがユーザーのメールボックスにアクセスできない場合に使用されます。
   * 法的な理由により利用不可 ：サーバーは法的拘束要求を受けて操作できません。 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Unavailable For Legal Reasons',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * リクエストヘッダが大きすぎます（Nginx）：Nginx の内部コードで、431 と似ていますが、2011 年 1 月 21 日のバージョン 0.9.4 で早期に導入されました。 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Request Header Too Large (Nginx)',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * 認証エラー（Nginx）：SSL クライアント証明書エラーが発生したときに Nginx の内部コードで、ログとエラーページのリダイレクトにおいて 4XX と区別するために使用されます。 
   */
  CERT_ERROR_NGINX = 'Cert Error (Nginx)',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx)：Nginx の内部コードで、クライアントが証明書を提供しない場合に使用され、ログとエラーページのリダイレクトにおいて 4XX と区別するためです。
   * 「無証書」：クライアントが証明書を提供しない場合に使用される Nginx の内部コードで、ログ内の 4XX と区別し、エラーページのリダイレクトを行うためです。 
   */
  NO_CERT_NGINX = 'No Cert (Nginx)',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP から HTTPS（Nginx）：Nginx の内部コードで、HTTPS ポートに送信されるプレーンな HTTP リクエストに使用され、ログとエラーページのリダイレクションにおいて 4XX と区別するためのものです。 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP to HTTPS (Nginx)',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * トークンが期限切れ/無効（Esri）：ArcGIS for Server から返されます。コード 498 は期限切れまたはその他の理由で無効なトークンを示しています。 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expired/invalid (Esri)',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * トークンが必要です（Esri）：ArcGIS for Server から返されます。コード 499 はトークンが必要であることを示しており（トークンが提出されなかった場合） 
   */
  TOKEN_REQUIRED_ESRI = 'Token required (Esri)',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * サーバー内部エラー: サーバー自体の一般的なエラー状態です。 
   */
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * 実装されていません: サーバーが要求に応答できません。これは通常、サーバーが将来この要求をサポートできる可能性があることを意味します。そうでない場合は、4xx ステータスコードを使用するのがより適切です。 
   */
  NOT_IMPLEMENTED = 'Not Implemented',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * バッド ゲートウェイ: サーバーがプロキシとして機能しており、アップストリーム サーバーから受け取った応答が許容できない。 
   */
  BAD_GATEWAY = 'Bad Gateway',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * サービス利用不可：サーバーがダウンしており、リクエストを受け付けていません。 
   */
  SERVICE_UNAVAILABLE = 'Service Unavailable',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * ゲートウェイタイムアウト：サーバーがプロキシとして機能している際、上流サーバーからの応答を受信できませんでした。 
   */
  GATEWAY_TIMEOUT = 'Gateway Timeout',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP バージョンがサポートされていません：サーバーはリクエストで指定された HTTP プロトコルのバージョンをサポートしていません。 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'HTTP Version Not Supported',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant も交渉しています：要求のための透明なコンテンツ交渉は循環参照を引き起こします。 
   */
  VARIANT_ALSO_NEGOTIATES = 'Variant Also Negotiates',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * ストレージが不足しています: ユーザーまたはサーバーには、リクエストを完了するのに十分なストレージ クォータがありません。 
   */
  INSUFFICIENT_STORAGE = 'Insufficient Storage',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * ループが検出されました：サーバーはリクエストで無限ループを検出しました。 
   */
  LOOP_DETECTED = 'Loop Detected',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * 帯域幅制限超過（Apache bw/limited 拡張）：このステータスコードはいかなる RFC でも規定されておらず、その使用法は不明です。 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Bandwidth Limit Exceeded',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * 拡張されていません：要求を満たすためには、この要求をさらに拡張する必要があります。 
   */
  NOT_EXTENDED = 'Not Extended',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * ネットワーク認証が必要です：クライアントはリクエストを送信する前にネットワークで認証を受けなければなりません。 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Network Authentication Required',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * 未知のエラー（Microsoft / CloudFlare）：このステータスコードはどの RFC でも規定されておらず、特定のサービス（例えば Microsoft Azure と CloudFlare サーバー）によって返されます。「520 エラーは、基本的にはオリジンサーバーが予期せぬものや解釈できないもの（プロトコル違反や空の応答）を返したときの『万が一の』応答です。」 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web サーバーがダウンしています（CloudFlare）: オリジナルのサーバーが CloudFlare からの接続を拒否しました。 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare)',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * 接続タイムアウト（CloudFlare）：CloudFlare はオリジンサーバとの TCP ハンドシェイクを交渉できませんでした。 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Connection Timed Out (CloudFlare)',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * オリジンが到達不能（CloudFlare）: CloudFlare がオリジンサーバーに到達できません。たとえば、オリジンサーバーの DNS レコードが不正である場合。 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origin Is Unreachable (CloudFlare)',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * タイムアウトが発生しました（CloudFlare）：CloudFlare はオリジンサーバーとの TCP 接続を完了できましたが、タイムリーな HTTP 応答を受け取りませんでした。 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'A Timeout Occurred (CloudFlare)',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * SSL ハンドシェイク失敗 (CloudFlare)：CloudFlare はオリジンサーバとの SSL/TLS ハンドシェイクを完了できませんでした。 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'SSL Handshake Failed (CloudFlare)',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * 無効な SSL 証明書（CloudFlare）：CloudFlare はオリジン サーバが提示した SSL/TLS 証明書を検証できませんでした。 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Railgun エラー（CloudFlare）：WAN 接続が確立された後、リクエストがタイムアウトまたは失敗しました。 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Railgun Error (CloudFlare)'
}

export enum HttpStatusTextByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * 続ける：サーバはリクエストヘッダを受信しており、クライアントはリクエストボディの送信を続けるべきです。 
   */
  h100 = 'Continue',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * プロトコルの切り替え：リクエスタがサーバーにプロトコルの切り替えを要求し、サーバーはそれを行うことを認めています。 
   */
  h101 = 'Switching Protocols',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * 処理中：サーバーはリクエストを受信し、処理中ですが、現在利用できる応答はありません。 
   */
  h102 = 'Processing',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK ：HTTP 要求の成功に対する標準的な応答
   * 成功 ：標準的な成功した HTTP 要求の応答 
   */
  h200 = 'OK',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * 作成済み：要求が完了し、新しいリソースが作成されました。 
   */
  h201 = 'Created',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * 受け入れ済み: リクエストが受け入れられていますが、まだ処理されていません。このコードはリクエストが正常に処理されることを保証しません。 
   */
  h202 = 'Accepted',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * 非公式的情報：HTTP 1.1。サーバはリクエストを正常に処理しましたが、別のソースからの情報を返しています。 
   */
  h203 = 'Non-Authoritative Information',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * コンテンツなし：サーバーは要求を受け入れましたが、いかなるコンテンツも返していません。これは通常、DELETE 要求への応答として使用されます。 
   */
  h204 = 'No Content',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * リセットコンテンツ：204 の「ノーコンテンツ」レスポンスに類似していますが、このレスポンスではリクエスターにドキュメントビューのリセットが要求されます。 
   */
  h205 = 'Reset Content',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * 部分的なコンテンツ：サーバーは、クライアントが Range ヘッダーを通じて要求したコンテンツの一部のみを提供します。 
   */
  h206 = 'Partial Content',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * マルチステータス：後続のメッセージボディは XML メッセージであり、発行されたサブリクエストの数に応じて、複数の応答コードを含むことがあります。 
   */
  h207 = 'Multi-Status',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * すでに報告済み: DAV バインディングのメンバーはすでにこの要求に対する以前の返信で列挙されており、再度含められていません。 
   */
  h208 = 'Already Reported',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM 使用：サーバーはリソースの GET 要求を完了しており、応答は現在のインスタンスに対して 1 つ以上のインスタンス操作が適用された結果の表現です。 
   */
  h226 = 'IM Used',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * マルチチョイス：クライアントは複数のオプションの中から一つを選択して操作できます。 
   */
  h300 = 'Multiple Choices',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * 恒久的に移動：リソースが移動されており、すべての後続のリクエストはその新しい URI を参照する必要があります。 
   */
  h301 = 'Moved Permanently',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * 発見：HTTP 1.0 の仕様では、このステータスは「一時的に移動」と説明されていますが、一般的なブラウザはこのステータスに対して 303 の意図された動作と類似の応答をします。リソースは、返された URI を参照することで取得できます。 
   */
  h302 = 'Found',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * 他のものを参照：リソースは GET メソッドを使用して他の URI をたどることで取得できます。POST、PUT または DELETE の要求に対する応答として受け取った場合は、通常、サーバーが要求を正常に処理し、クライアントを情報提供エンドポイントに向けていると仮定できます。 
   */
  h303 = 'See Other',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * 修正されていません: If-Modified-Since または If-Match ヘッダで指定されたバージョン以降、リソースは修正されていません。レスポンスの本体ではリソースは返されません。 
   */
  h304 = 'Not Modified',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * プロキシ使用：HTTP 1.1 。リソースはプロキシ経由でのみ利用可能で、アドレスは応答に提供されています。 
   */
  h305 = 'Use Proxy',
  /**
   * h306: 
   *
   * Empty
   * スイッチプロキシ：HTTP 1.1 では廃止されています。以前は、後続のリクエストが指定されたプロキシを使用して送信されるべきであることを意味していました。 
   */
  h306 = 'Switch proxy',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * 一時的なリダイレクト：HTTP 1.1。要求は、応答で提供された URI を使用してリクエストを再送信する必要がありますが、将来のリクエストは依然として元の URI を呼び出すべきです。 
   */
  h307 = 'Temporary Redirect',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * レジューム未完了（Google）：このコードは、レジューム可能な HTTP リクエスト提案で中断された PUT または POST リクエストの再開に使用されます
   * 永続的リダイレクト：リクエストとすべての将来のリクエストは、応答で提供される URI を使用して再送信されるべきです。 
   */
  h308 = 'Permanent Redirect',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * 不良リクエスト: リクエストの構文が誤っているため、リクエストを満たすことができません。 
   */
  h400 = 'Bad Request',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * 未認可：リクエスターはこのリソースへのアクセス権がありません。これは 403 と類似していますが、認証が期待されているが失敗したか、提供されていない場合に使用されます。 
   */
  h401 = 'Unauthorized',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * 支払いが必要：将来使用の予約。一部のウェブサービスでは、これをクライアントが過剰な数のリクエストを送信したことを示すコードとして使用します。 
   */
  h402 = 'Payment Required',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * 禁止：リクエストのフォーマットは正しいが、サーバーは要求されたリソースの提供を拒否しています。401 とは異なり、認証を行ってもサーバーの応答に変化はありません。 
   */
  h403 = 'Forbidden',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * 見つからない：要求されたリソースが見つかりません。これは、サーバーで要求されたすべての無効な URI のために一般的に使用されるキャッチオールです。 
   */
  h404 = 'Not Found',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * メソッドが許可されていません：リソースは許可されていないメソッドを使用して要求されました。たとえば、リソースが GET メソッドのみをサポートしているのに、POST メソッドを使用してリソースを要求するなどです。 
   */
  h405 = 'Method Not Allowed',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * 受け入れられません：リソースは有効ですが、リクエストの Accept ヘッダで指定された形式で提供できません。 
   */
  h406 = 'Not Acceptable',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * プロキシ認証が必要です：リクエストを満たす前に、プロキシに対する認証が必要です。 
   */
  h407 = 'Proxy Authentication Required',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * リクエストタイムアウト：サーバーはクライアントからのリクエストを待ってタイムアウトしました。クライアントはリクエストを再送信できます。 
   */
  h408 = 'Request Timeout',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * 紛争：HTTP のシーンにおいて、要求パラメータにおける紛争のため、要求を完了できません。 
   */
  h409 = 'Conflict',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * 消え去った：リクエストされた URI でリソースはもう利用できず、リダイレクションも提供されません。 
   */
  h410 = 'Gone',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * 長さの要求：リクエストはリソースで要求されるコンテンツの長さを指定していません。 
   */
  h411 = 'Length Required',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * 前提条件が失敗しました：サーバーはクライアントによって指定された前提条件の一つを満たしていません。 
   */
  h412 = 'Precondition Failed',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * リクエスト エンティティが大きすぎます: リクエストの内容がサーバが処理できるものより大きいです。 
   */
  h413 = 'Payload Too Large',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * リクエスト URI が長すぎます：リクエストで提供された URI が長すぎて、サーバーが処理できません。通常、GET リクエストの URI に過剰なデータがエンコードされている場合にこのステータスコードが使用され、代わりに POST リクエストを使用すべきです。 
   */
  h414 = 'URI Too Long',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * サポートされていないメディアタイプ：クライアントが提供したデータのメディアタイプがサーバーによってサポートされていません。 
   */
  h415 = 'Unsupported Media Type',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * 要求された範囲が満足できません：クライアントがリソースの一部を要求していますが、サーバーはその部分を提供できません。 
   */
  h416 = 'Range Not Satisfiable',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * 期待が失敗しました：サーバーは Expect リクエストヘッダーフィールドの要件を満たすことができません。 
   */
  h417 = 'Expectation Failed',
  /**
   * h418: 
   *
   * Empty
   * 私はティーポットです：ティーポットでコーヒーを淹れようとするいかなる試みも、エラーコード「418 私はティーポット」を招くべきです。生成されたエンティティ本体は短くて太いかもしれません。 
   */
  h418 = 'I\'m a Teapot',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * 誤ったリクエストの方向指定：リクエストが応答を生成できないサーバーに向けられました。この状態コードは、リクエスト URI に含まれるスキームと権限の組み合わせに対して応答を生成するように設定されていないサーバーから送信されることがあります。 
   */
  h421 = 'Misdirected Request',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * 処理不能なエンティティ：リクエストは正しい形式で設定されていますが、現在のフォームでは処理できません。通常、指定されたパラメータが検証エラーに合格しない場合に使用されます。 
   */
  h422 = 'Unprocessable Entity',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * ロック済み：要求されたリソースは見つかりましたが、ロックされており、アクセスできません。 
   */
  h423 = 'Locked',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * 依存関係エラー: 前のリクエストが失敗したため、現在のリクエストも失敗しました。 
   */
  h424 = 'Failed Dependency',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * アップグレードが必要です：クライアントは TLS 1.0 などのアップグレードされたプロトコルを使用してリクエストを繰り返すべきです。 
   */
  h426 = 'Upgrade Required',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * 前提条件が必要です：オリジンサーバはリクエストが条件付きであることを要求しています。 
   */
  h428 = 'Precondition Required',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * リクエストが多すぎます：ユーザーが与えられた時間内にリクエストを多すぎる数送信しました（「レート制限」） 
   */
  h429 = 'Too Many Requests',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * リクエストヘッダフィールドが大きすぎます: サーバーは、ヘッダフィールドが大きすぎるため、リクエストの処理に応じることを望んでいません。 
   */
  h431 = 'Request Header Fields Too Large',
  /**
   * h440: 
   *
   * Empty
   * ログインタイムアウト（Microsoft）：Microsoft の拡張機能です。ユーザーのセッションが期限切れになったことを示しています。 
   */
  h440 = 'Login Timeout (Microsoft)',
  /**
   * h444: 
   *
   * Empty
   * 「ノーレスポンス（Nginx）」: Nginx のログで使用され、サーバーがクライアントに何の情報も返さず接続を閉じたことを示します（マルウェアへの抑止策として有用です）。 
   */
  h444 = 'No Response (Nginx)',
  /**
   * h449: 
   *
   * Empty
   * リトライ （Microsoft）：Microsoft の拡張機能です。適切なアクションを実行した後、要求を再送信する必要があります。 
   */
  h449 = 'Retry With (Microsoft)',
  /**
   * h450: 
   *
   * Empty
   * Windows のペアレンタル コントロールでブロックされました (Microsoft)：Microsoft の拡張機能です。Windows のペアレンタル コントロールがオンになっており、特定のウェブページへのアクセスがブロックされた場合にこのエラーが表示されます。 
   */
  h450 = 'Blocked by Windows Parental Controls (Microsoft)',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * リダイレクト (Microsoft) ：Exchange ActiveSync で使用され、より効率的なサーバーが存在するか、またはサーバーがユーザーのメールボックスにアクセスできない場合に使用されます。
   * 法的な理由により利用不可 ：サーバーは法的拘束要求を受けて操作できません。 
   */
  h451 = 'Unavailable For Legal Reasons',
  /**
   * h494: 
   *
   * Empty
   * リクエストヘッダが大きすぎます（Nginx）：Nginx の内部コードで、431 と似ていますが、2011 年 1 月 21 日のバージョン 0.9.4 で早期に導入されました。 
   */
  h494 = 'Request Header Too Large (Nginx)',
  /**
   * h495: 
   *
   * Empty
   * 認証エラー（Nginx）：SSL クライアント証明書エラーが発生したときに Nginx の内部コードで、ログとエラーページのリダイレクトにおいて 4XX と区別するために使用されます。 
   */
  h495 = 'Cert Error (Nginx)',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx)：Nginx の内部コードで、クライアントが証明書を提供しない場合に使用され、ログとエラーページのリダイレクトにおいて 4XX と区別するためです。
   * 「無証書」：クライアントが証明書を提供しない場合に使用される Nginx の内部コードで、ログ内の 4XX と区別し、エラーページのリダイレクトを行うためです。 
   */
  h496 = 'No Cert (Nginx)',
  /**
   * h497: 
   *
   * Empty
   * HTTP から HTTPS（Nginx）：Nginx の内部コードで、HTTPS ポートに送信されるプレーンな HTTP リクエストに使用され、ログとエラーページのリダイレクションにおいて 4XX と区別するためのものです。 
   */
  h497 = 'HTTP to HTTPS (Nginx)',
  /**
   * h498: 
   *
   * Empty
   * トークンが期限切れ/無効（Esri）：ArcGIS for Server から返されます。コード 498 は期限切れまたはその他の理由で無効なトークンを示しています。 
   */
  h498 = 'Token expired/invalid (Esri)',
  /**
   * h499: 
   *
   * Empty
   * トークンが必要です（Esri）：ArcGIS for Server から返されます。コード 499 はトークンが必要であることを示しており（トークンが提出されなかった場合） 
   */
  h499 = 'Token required (Esri)',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * サーバー内部エラー: サーバー自体の一般的なエラー状態です。 
   */
  h500 = 'Internal Server Error',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * 実装されていません: サーバーが要求に応答できません。これは通常、サーバーが将来この要求をサポートできる可能性があることを意味します。そうでない場合は、4xx ステータスコードを使用するのがより適切です。 
   */
  h501 = 'Not Implemented',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * バッド ゲートウェイ: サーバーがプロキシとして機能しており、アップストリーム サーバーから受け取った応答が許容できない。 
   */
  h502 = 'Bad Gateway',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * サービス利用不可：サーバーがダウンしており、リクエストを受け付けていません。 
   */
  h503 = 'Service Unavailable',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * ゲートウェイタイムアウト：サーバーがプロキシとして機能している際、上流サーバーからの応答を受信できませんでした。 
   */
  h504 = 'Gateway Timeout',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * HTTP バージョンがサポートされていません：サーバーはリクエストで指定された HTTP プロトコルのバージョンをサポートしていません。 
   */
  h505 = 'HTTP Version Not Supported',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * Variant も交渉しています：要求のための透明なコンテンツ交渉は循環参照を引き起こします。 
   */
  h506 = 'Variant Also Negotiates',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * ストレージが不足しています: ユーザーまたはサーバーには、リクエストを完了するのに十分なストレージ クォータがありません。 
   */
  h507 = 'Insufficient Storage',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * ループが検出されました：サーバーはリクエストで無限ループを検出しました。 
   */
  h508 = 'Loop Detected',
  /**
   * h509: 
   *
   * Empty
   * 帯域幅制限超過（Apache bw/limited 拡張）：このステータスコードはいかなる RFC でも規定されておらず、その使用法は不明です。 
   */
  h509 = 'Bandwidth Limit Exceeded',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * 拡張されていません：要求を満たすためには、この要求をさらに拡張する必要があります。 
   */
  h510 = 'Not Extended',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * ネットワーク認証が必要です：クライアントはリクエストを送信する前にネットワークで認証を受けなければなりません。 
   */
  h511 = 'Network Authentication Required',
  /**
   * h520: 
   *
   * Empty
   * 未知のエラー（Microsoft / CloudFlare）：このステータスコードはどの RFC でも規定されておらず、特定のサービス（例えば Microsoft Azure と CloudFlare サーバー）によって返されます。「520 エラーは、基本的にはオリジンサーバーが予期せぬものや解釈できないもの（プロトコル違反や空の応答）を返したときの『万が一の』応答です。」 
   */
  h520 = 'Unknown Error (Microsoft / CloudFlare)',
  /**
   * h521: 
   *
   * Empty
   * Web サーバーがダウンしています（CloudFlare）: オリジナルのサーバーが CloudFlare からの接続を拒否しました。 
   */
  h521 = 'Web Server Is Down (CloudFlare)',
  /**
   * h522: 
   *
   * Empty
   * 接続タイムアウト（CloudFlare）：CloudFlare はオリジンサーバとの TCP ハンドシェイクを交渉できませんでした。 
   */
  h522 = 'Connection Timed Out (CloudFlare)',
  /**
   * h523: 
   *
   * Empty
   * オリジンが到達不能（CloudFlare）: CloudFlare がオリジンサーバーに到達できません。たとえば、オリジンサーバーの DNS レコードが不正である場合。 
   */
  h523 = 'Origin Is Unreachable (CloudFlare)',
  /**
   * h524: 
   *
   * Empty
   * タイムアウトが発生しました（CloudFlare）：CloudFlare はオリジンサーバーとの TCP 接続を完了できましたが、タイムリーな HTTP 応答を受け取りませんでした。 
   */
  h524 = 'A Timeout Occurred (CloudFlare)',
  /**
   * h525: 
   *
   * Empty
   * SSL ハンドシェイク失敗 (CloudFlare)：CloudFlare はオリジンサーバとの SSL/TLS ハンドシェイクを完了できませんでした。 
   */
  h525 = 'SSL Handshake Failed (CloudFlare)',
  /**
   * h526: 
   *
   * Empty
   * 無効な SSL 証明書（CloudFlare）：CloudFlare はオリジン サーバが提示した SSL/TLS 証明書を検証できませんでした。 
   */
  h526 = 'Invalid SSL Certificate (CloudFlare)',
  /**
   * h527: 
   *
   * Empty
   * Railgun エラー（CloudFlare）：WAN 接続が確立された後、リクエストがタイムアウトまたは失敗しました。 
   */
  h527 = 'Railgun Error (CloudFlare)'
}
