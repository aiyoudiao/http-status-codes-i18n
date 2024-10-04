/**
 * © 2024 aiyoudiao
 *
 * Este arquivo foi criado por aiyoudiao, contendo muito trabalho árduo e sabedoria.
 *
 * Você é livre para usar, modificar e distribuir este arquivo, mas por favor mantenha este aviso de direitos autorais.
 *
 * Se você achar este arquivo útil, por favor me dê uma estrela ou siga-me ツ.
 *
 * Contato:
 * - E-mail:,newdiao@163.com,
 * - GitHub:,https://github.com/aiyoudiao,
 *
 * Feliz codificação! Lembre-se, código é poesia e front-end é arte. ツ
 */
export enum HttpStatusCode {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação. 
   */
  CONTINUE = 100,
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Mudança de protocolos: O solicitante pediu ao servidor para mudar de protocolos e o servidor confirmou que fará isso. 
   */
  SWITCHING_PROTOCOLS = 101,
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Processamento: O servidor recebeu e está processando a solicitação, mas ainda não há resposta disponível. 
   */
  PROCESSING = 102,
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: A resposta padrão para solicitações HTTP bem-sucedidas. 
   */
  OK = 200,
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Criado: A solicitação foi cumprida e um novo recurso foi criado. 
   */
  CREATED = 201,
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso. 
   */
  ACCEPTED = 202,
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informação não autoritativa: HTTP 1.1. O servidor processou com sucesso o pedido, mas está retornando informações de outra fonte. 
   */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Sem conteúdo: O servidor aceitou o pedido, mas não está retornando nenhum conteúdo. Isso é frequentemente usado como resposta a um pedido DELETE. 
   */
  NO_CONTENT = 204,
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset de conteúdo: Semelhante a uma resposta 204 Sem Conteúdo, mas esta resposta exige que o solicitante reinicie a visualização do documento. 
   */
  RESET_CONTENT = 205,
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Conteúdo parcial: O servidor fornece apenas uma parte do conteúdo, conforme solicitado pelo cliente através do cabeçalho Range. 
   */
  PARTIAL_CONTENT = 206,
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: O corpo da mensagem que se segue é uma mensagem XML e pode conter vários códigos de resposta separados, dependendo de quantas sub-solicitações foram feitas. 
   */
  MULTI_STATUS = 207,
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Já relatado: Os membros de uma vinculação DAV já foram enumerados em uma resposta anterior a este pedido e não estão sendo incluídos novamente. 
   */
  ALREADY_REPORTED = 208,
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM uso: O servidor cumpriu um pedido GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual. 
   */
  IM_USED = 226,
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Opções múltiplas: Há múltiplas opções que o cliente pode seguir em um cenário de protocolo de transferência de hipertexto. 
   */
  MULTIPLE_CHOICES = 300,
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Movido permanentemente: O recurso foi movido e todas as solicitações subsequentes devem referenciar seu novo URI. 
   */
  MOVED_PERMANENTLY = 301,
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Encontrado: A especificação HTTP 1.0 descreveu este status como "Movido Temporariamente", mas os navegadores populares respondem a este status de forma semelhante ao comportamento pretendido para 303. O recurso pode ser recuperado referenciando o URI retornado. 
   */
  FOUND = 302,
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Veja outros: O recurso pode ser recuperado seguindo outros URI usando o método GET. Quando recebido em resposta a um pedido POST, PUT ou DELETE, normalmente pode-se assumir que o servidor processou o pedido com sucesso e está enviando o cliente a um ponto final informacional. 
   */
  SEE_OTHER = 303,
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Não modificado: O recurso não foi modificado desde a versão especificada nos cabeçalhos If-Modified-Since ou If-Match. O recurso não será retornado no corpo da resposta. 
   */
  NOT_MODIFIED = 304,
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Use proxy: HTTP 1.1. O recurso só está disponível através de um proxy e o endereço é fornecido na resposta 
   */
  USE_PROXY = 305,
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Trocar proxy: Obsoleto no HTTP 1.1. Usado para indicar que as solicitações subsequentes devem ser enviadas usando o proxy especificado. 
   */
  SWITCH_PROXY = 306,
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirecionamento temporário: HTTP 1.1. A solicitação deve ser repetida com a URI fornecida na resposta, mas as solicitações futuras ainda devem chamar a URI original. 
   */
  TEMPORARY_REDIRECT = 307,
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resumo Incompleto (Google): Este código é utilizado na Proposta de Solicitações HTTP Resumíveis para retomar solicitações PUT ou POST abortadas. Redirecionamento permanente: A solicitação e todas as solicitações futuras devem ser reenviadas utilizando o URI fornecido na resposta. 
   */
  PERMANENT_REDIRECT = 308,
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Pedido ruim: A solicitação não pôde ser atendida devido à sintaxe incorreta da solicitação. 
   */
  BAD_REQUEST = 400,
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Não autorizado: O solicitante não está autorizado a acessar o recurso. Isso é semelhante ao 403, mas é usado em casos em que a autenticação é esperada, mas falhou ou não foi fornecida. 
   */
  UNAUTHORIZED = 401,
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pagamento exigido: Reservado para uso futuro. Alguns serviços web usam este código como uma indicação de que o cliente enviou um número excessivo de solicitações. 
   */
  PAYMENT_REQUIRED = 402,
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Proibido: A solicitação estava formatada corretamente, mas o servidor está se recusando a fornecer o recurso solicitado. Diferente do 401, a autenticação não fará diferença na resposta do servidor. 
   */
  FORBIDDEN = 403,
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Não encontrado: O recurso não pôde ser encontrado. Isso é frequentemente usado como um coletivo para todos os URIs inválidos solicitados pelo servidor. 
   */
  NOT_FOUND = 404,
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Método não permitido: O recurso foi solicitado utilizando um método que não é permitido. Por exemplo, solicitar um recurso através de um método POST quando o recurso apenas suporta o método GET. 
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Não aceitável: O recurso é válido, mas não pode ser fornecido no formato especificado nos cabeçalhos Accept na solicitação. 
   */
  NOT_ACCEPTABLE = 406,
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticação de proxy exigida: A autenticação é exigida com o proxy antes que as solicitações possam ser atendidas. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de solicitação: O servidor atingiu o tempo limite aguardando uma solicitação do cliente. O cliente tem permissão para repetir a solicitação. 
   */
  REQUEST_TIMEOUT = 408,
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflito: A solicitação não pode ser concluída devido a um conflito nos parâmetros da solicitação. 
   */
  CONFLICT = 409,
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Sumido: O recurso não está mais disponível na URI solicitada e nenhum redirecionamento será fornecido. 
   */
  GONE = 410,
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Comprimento exigido: A solicitação não especificou o comprimento do seu conteúdo conforme exigido pelo recurso. 
   */
  LENGTH_REQUIRED = 411,
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Pré-condição falhou: O servidor não atende a uma das pré-condições especificadas pelo cliente. 
   */
  PRECONDITION_FAILED = 412,
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entidade de solicitação muito grande: O conteúdo da solicitação é maior do que o que o servidor é capaz de processar. 
   */
  PAYLOAD_TOO_LARGE = 413,
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de solicitação muito longo: O URI fornecido na solicitação é muito longo para ser processado pelo servidor. Isso é frequentemente usado quando muitos dados foram codificados no URI de uma solicitação GET e uma solicitação POST deve ser usada em seu lugar. 
   */
  URI_TOO_LONG = 414,
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo de mídia não suportado: Os dados fornecidos pelo cliente têm um tipo de mídia que o servidor não suporta. 
   */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Faixa solicitada insatisfatória: O cliente solicitou uma parte do recurso, mas o servidor não pode fornecer essa parte. 
   */
  RANGE_NOT_SATISFIABLE = 416,
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Falha de expectativa: O servidor não pode atender aos requisitos do campo de cabeçalho de solicitação Expect. 
   */
  EXPECTATION_FAILED = 417,
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Sou uma chaleira: Qualquer tentativa de preparar café com uma chaleira deve resultar no código de erro "418 Sou uma chaleira". O corpo da entidade resultante PODE ser curto e robusto. 
   */
  I_M_A_TEAPOT = 418,
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Pedido mal direcionado: O pedido foi direcionado para um servidor que não é capaz de produzir uma resposta. Este pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema e autoridade que estão incluídas no URI do pedido. 
   */
  MISDIRECTED_REQUEST = 421,
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entidade não processável: A solicitação estava formatada corretamente, mas não pode ser processada na sua forma atual. Usada frequentemente quando os parâmetros especificados não passam nos erros de validação. 
   */
  UNPROCESSABLE_ENTITY = 422,
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloqueado: O recurso solicitado foi encontrado, mas está bloqueado e não será retornado. 
   */
  LOCKED = 423,
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Falha de dependência: A solicitação falhou devido à falha de uma solicitação anterior. 
   */
  FAILED_DEPENDENCY = 424,
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Atualização necessária: O cliente deve repetir a solicitação utilizando um protocolo atualizado, como o TLS 1.0. 
   */
  UPGRADE_REQUIRED = 426,
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Pré-condição exigida: O servidor de origem requer que a solicitação seja condicional. 
   */
  PRECONDITION_REQUIRED = 428,
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Muitas solicitações: O usuário enviou muitas solicitações em um determinado período de tempo ("limitação de taxa"). 
   */
  TOO_MANY_REQUESTS = 429,
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campos de cabeçalho da solicitação muito grandes: O servidor não está disposto a processar a solicitação porque seus campos de cabeçalho são muito grandes. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Tempo limite de login (Microsoft): Uma extensão da Microsoft. Indica que a sua sessão expirou. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 440,
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Sem resposta (Nginx): Usado nos logs do Nginx para indicar que o servidor não retornou nenhuma informação ao cliente e fechou a conexão (útil como um impedimento para malware em cenários de protocolo de transferência de hipertexto). 
   */
  NO_RESPONSE_NGINX = 444,
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Tente Novamente Com (Microsoft): Uma extensão da Microsoft. A solicitação deve ser reenviada após realizar a ação apropriada. 
   */
  RETRY_WITH_MICROSOFT = 449,
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Bloqueado pelo Controle Parental do Windows (Microsoft): uma extensão da Microsoft. Este erro é dado quando o Controle Parental do Windows está ativado e bloqueando o acesso à página da web especificada. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 450,
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirecionamento (Microsoft): Utilizado no Exchange ActiveSync se existe um servidor mais eficiente a ser usado ou se o servidor não puder acessar a caixa de correio dos usuários. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Cabeçalho da solicitação muito grande (Nginx): Código interno do Nginx, semelhante a 431, mas introduzido em uma versão anterior em 0.9.4 (em 21 de janeiro de 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 494,
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Erro de Certificado (Nginx): Código interno do Nginx utilizado quando ocorreu um erro de certificado do cliente SSL para distingui-lo dos 4XX em um log e redirecionamento da página de erro. 
   */
  CERT_ERROR_NGINX = 495,
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro.  Sem certificado: Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro. 
   */
  NO_CERT_NGINX = 496,
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP para HTTPS (Nginx): Código interno do Nginx utilizado para as solicitações HTTP puras enviadas para a porta HTTPS para distingui-lo dos 4XX em um log e uma redireção da página de erro. 
   */
  HTTP_TO_HTTPS_NGINX = 497,
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token expirado/inválido (Esri): Retornado pelo ArcGIS for Server. Um código 498 indica um token expirado ou inválido de outra forma. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 498,
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token necessário (Esri): Retornado pelo ArcGIS for Server. Um código 499 indica que um token é necessário (se nenhum token foi enviado). 
   */
  TOKEN_REQUIRED_ESRI = 499,
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Erro interno do servidor: Um status genérico para um erro no próprio servidor. 
   */
  INTERNAL_SERVER_ERROR = 500,
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Não implementado: O servidor não pode responder à solicitação. Normalmente isso implica que o servidor possa possivelmente suportar a solicitação no futuro - caso contrário, um código de status 4xx pode ser mais apropriado. 
   */
  NOT_IMPLEMENTED = 501,
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Portão ruim: O servidor está atuando como um proxy e não recebeu uma resposta aceitável do servidor ascendente. 
   */
  BAD_GATEWAY = 502,
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Serviço indisponível: O servidor está fora do ar e não está aceitando solicitações. 
   */
  SERVICE_UNAVAILABLE = 503,
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout do Gateway: O servidor está atuando como um proxy e não recebeu uma resposta do servidor upstream. 
   */
  GATEWAY_TIMEOUT = 504,
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versão HTTP não suportada: O servidor não suporta a versão do protocolo HTTP especificada na solicitação. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * A Variant também negocia: A negociação de conteúdo transparente para a solicitação resulta em uma referência circular. 
   */
  VARIANT_ALSO_NEGOTIATES = 506,
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuficiência de armazenamento: O usuário ou servidor não possui quota de armazenamento suficiente para atender à solicitação. 
   */
  INSUFFICIENT_STORAGE = 507,
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Detectado loop: O servidor detectou um loop infinito na solicitação. 
   */
  LOOP_DETECTED = 508,
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Limite de largura de banda excedido (extensão bw/limitada do Apache): Este código de status não é especificado em nenhum RFC. Seu uso é desconhecido. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Não estendido: São necessárias mais extensões ao pedido para que seja cumprido. 
   */
  NOT_EXTENDED = 510,
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticação de rede exigida: O cliente deve autenticar-se na rede antes de enviar solicitações. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 511,
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Erro Desconhecido (Microsoft / CloudFlare): Este código de status não é especificado em nenhum RFC e é retornado por certos serviços, por exemplo, servidores Microsoft Azure e CloudFlare: "O erro 520 é essencialmente uma resposta 'coringa' quando o servidor de origem retorna algo inesperado ou algo que não é tolerado/interpretado (violação de protocolo ou resposta vazia)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 520,
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): O servidor original recusou a conexão da CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 521,
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Tempo limite de conexão (CloudFlare): CloudFlare não conseguiu negociar um handshake TCP com o servidor de origem. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 522,
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origem Inatingível (CloudFlare): CloudFlare não pôde atingir o servidor de origem; por exemplo, se os registros DNS do servidor de origem estiverem incorretos. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 523,
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Ocorreu um tempo limite (CloudFlare): CloudFlare conseguiu estabelecer uma conexão TCP com o servidor de origem, mas não recebeu uma resposta HTTP oportuna. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 524,
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * Falha na negociação de SSL Handshake (CloudFlare): CloudFlare não conseguiu negociar um handshake SSL/TLS com o servidor de origem. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 525,
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Certificado SSL Inválido (CloudFlare): CloudFlare não pôde validar o certificado SSL/TLS que o servidor de origem apresentou. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 526,
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Erro Railgun (CloudFlare): A solicitação expirou ou falhou após a conexão WAN ter sido estabelecida. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 527
}

export enum HttpStatusCodeByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação. 
   */
  h100 = 100,
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Mudança de protocolos: O solicitante pediu ao servidor para mudar de protocolos e o servidor confirmou que fará isso. 
   */
  h101 = 101,
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Processamento: O servidor recebeu e está processando a solicitação, mas ainda não há resposta disponível. 
   */
  h102 = 102,
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: A resposta padrão para solicitações HTTP bem-sucedidas. 
   */
  h200 = 200,
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Criado: A solicitação foi cumprida e um novo recurso foi criado. 
   */
  h201 = 201,
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso. 
   */
  h202 = 202,
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informação não autoritativa: HTTP 1.1. O servidor processou com sucesso o pedido, mas está retornando informações de outra fonte. 
   */
  h203 = 203,
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Sem conteúdo: O servidor aceitou o pedido, mas não está retornando nenhum conteúdo. Isso é frequentemente usado como resposta a um pedido DELETE. 
   */
  h204 = 204,
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset de conteúdo: Semelhante a uma resposta 204 Sem Conteúdo, mas esta resposta exige que o solicitante reinicie a visualização do documento. 
   */
  h205 = 205,
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Conteúdo parcial: O servidor fornece apenas uma parte do conteúdo, conforme solicitado pelo cliente através do cabeçalho Range. 
   */
  h206 = 206,
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: O corpo da mensagem que se segue é uma mensagem XML e pode conter vários códigos de resposta separados, dependendo de quantas sub-solicitações foram feitas. 
   */
  h207 = 207,
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Já relatado: Os membros de uma vinculação DAV já foram enumerados em uma resposta anterior a este pedido e não estão sendo incluídos novamente. 
   */
  h208 = 208,
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM uso: O servidor cumpriu um pedido GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual. 
   */
  h226 = 226,
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Opções múltiplas: Há múltiplas opções que o cliente pode seguir em um cenário de protocolo de transferência de hipertexto. 
   */
  h300 = 300,
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Movido permanentemente: O recurso foi movido e todas as solicitações subsequentes devem referenciar seu novo URI. 
   */
  h301 = 301,
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Encontrado: A especificação HTTP 1.0 descreveu este status como "Movido Temporariamente", mas os navegadores populares respondem a este status de forma semelhante ao comportamento pretendido para 303. O recurso pode ser recuperado referenciando o URI retornado. 
   */
  h302 = 302,
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Veja outros: O recurso pode ser recuperado seguindo outros URI usando o método GET. Quando recebido em resposta a um pedido POST, PUT ou DELETE, normalmente pode-se assumir que o servidor processou o pedido com sucesso e está enviando o cliente a um ponto final informacional. 
   */
  h303 = 303,
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Não modificado: O recurso não foi modificado desde a versão especificada nos cabeçalhos If-Modified-Since ou If-Match. O recurso não será retornado no corpo da resposta. 
   */
  h304 = 304,
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Use proxy: HTTP 1.1. O recurso só está disponível através de um proxy e o endereço é fornecido na resposta 
   */
  h305 = 305,
  /**
   * h306: 
   *
   * Empty
   * Trocar proxy: Obsoleto no HTTP 1.1. Usado para indicar que as solicitações subsequentes devem ser enviadas usando o proxy especificado. 
   */
  h306 = 306,
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirecionamento temporário: HTTP 1.1. A solicitação deve ser repetida com a URI fornecida na resposta, mas as solicitações futuras ainda devem chamar a URI original. 
   */
  h307 = 307,
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resumo Incompleto (Google): Este código é utilizado na Proposta de Solicitações HTTP Resumíveis para retomar solicitações PUT ou POST abortadas. Redirecionamento permanente: A solicitação e todas as solicitações futuras devem ser reenviadas utilizando o URI fornecido na resposta. 
   */
  h308 = 308,
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Pedido ruim: A solicitação não pôde ser atendida devido à sintaxe incorreta da solicitação. 
   */
  h400 = 400,
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Não autorizado: O solicitante não está autorizado a acessar o recurso. Isso é semelhante ao 403, mas é usado em casos em que a autenticação é esperada, mas falhou ou não foi fornecida. 
   */
  h401 = 401,
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pagamento exigido: Reservado para uso futuro. Alguns serviços web usam este código como uma indicação de que o cliente enviou um número excessivo de solicitações. 
   */
  h402 = 402,
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Proibido: A solicitação estava formatada corretamente, mas o servidor está se recusando a fornecer o recurso solicitado. Diferente do 401, a autenticação não fará diferença na resposta do servidor. 
   */
  h403 = 403,
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Não encontrado: O recurso não pôde ser encontrado. Isso é frequentemente usado como um coletivo para todos os URIs inválidos solicitados pelo servidor. 
   */
  h404 = 404,
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Método não permitido: O recurso foi solicitado utilizando um método que não é permitido. Por exemplo, solicitar um recurso através de um método POST quando o recurso apenas suporta o método GET. 
   */
  h405 = 405,
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Não aceitável: O recurso é válido, mas não pode ser fornecido no formato especificado nos cabeçalhos Accept na solicitação. 
   */
  h406 = 406,
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticação de proxy exigida: A autenticação é exigida com o proxy antes que as solicitações possam ser atendidas. 
   */
  h407 = 407,
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de solicitação: O servidor atingiu o tempo limite aguardando uma solicitação do cliente. O cliente tem permissão para repetir a solicitação. 
   */
  h408 = 408,
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflito: A solicitação não pode ser concluída devido a um conflito nos parâmetros da solicitação. 
   */
  h409 = 409,
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Sumido: O recurso não está mais disponível na URI solicitada e nenhum redirecionamento será fornecido. 
   */
  h410 = 410,
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Comprimento exigido: A solicitação não especificou o comprimento do seu conteúdo conforme exigido pelo recurso. 
   */
  h411 = 411,
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Pré-condição falhou: O servidor não atende a uma das pré-condições especificadas pelo cliente. 
   */
  h412 = 412,
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entidade de solicitação muito grande: O conteúdo da solicitação é maior do que o que o servidor é capaz de processar. 
   */
  h413 = 413,
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de solicitação muito longo: O URI fornecido na solicitação é muito longo para ser processado pelo servidor. Isso é frequentemente usado quando muitos dados foram codificados no URI de uma solicitação GET e uma solicitação POST deve ser usada em seu lugar. 
   */
  h414 = 414,
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo de mídia não suportado: Os dados fornecidos pelo cliente têm um tipo de mídia que o servidor não suporta. 
   */
  h415 = 415,
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Faixa solicitada insatisfatória: O cliente solicitou uma parte do recurso, mas o servidor não pode fornecer essa parte. 
   */
  h416 = 416,
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Falha de expectativa: O servidor não pode atender aos requisitos do campo de cabeçalho de solicitação Expect. 
   */
  h417 = 417,
  /**
   * h418: 
   *
   * Empty
   * Sou uma chaleira: Qualquer tentativa de preparar café com uma chaleira deve resultar no código de erro "418 Sou uma chaleira". O corpo da entidade resultante PODE ser curto e robusto. 
   */
  h418 = 418,
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Pedido mal direcionado: O pedido foi direcionado para um servidor que não é capaz de produzir uma resposta. Este pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema e autoridade que estão incluídas no URI do pedido. 
   */
  h421 = 421,
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entidade não processável: A solicitação estava formatada corretamente, mas não pode ser processada na sua forma atual. Usada frequentemente quando os parâmetros especificados não passam nos erros de validação. 
   */
  h422 = 422,
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloqueado: O recurso solicitado foi encontrado, mas está bloqueado e não será retornado. 
   */
  h423 = 423,
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Falha de dependência: A solicitação falhou devido à falha de uma solicitação anterior. 
   */
  h424 = 424,
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Atualização necessária: O cliente deve repetir a solicitação utilizando um protocolo atualizado, como o TLS 1.0. 
   */
  h426 = 426,
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Pré-condição exigida: O servidor de origem requer que a solicitação seja condicional. 
   */
  h428 = 428,
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Muitas solicitações: O usuário enviou muitas solicitações em um determinado período de tempo ("limitação de taxa"). 
   */
  h429 = 429,
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campos de cabeçalho da solicitação muito grandes: O servidor não está disposto a processar a solicitação porque seus campos de cabeçalho são muito grandes. 
   */
  h431 = 431,
  /**
   * h440: 
   *
   * Empty
   * Tempo limite de login (Microsoft): Uma extensão da Microsoft. Indica que a sua sessão expirou. 
   */
  h440 = 440,
  /**
   * h444: 
   *
   * Empty
   * Sem resposta (Nginx): Usado nos logs do Nginx para indicar que o servidor não retornou nenhuma informação ao cliente e fechou a conexão (útil como um impedimento para malware em cenários de protocolo de transferência de hipertexto). 
   */
  h444 = 444,
  /**
   * h449: 
   *
   * Empty
   * Tente Novamente Com (Microsoft): Uma extensão da Microsoft. A solicitação deve ser reenviada após realizar a ação apropriada. 
   */
  h449 = 449,
  /**
   * h450: 
   *
   * Empty
   * Bloqueado pelo Controle Parental do Windows (Microsoft): uma extensão da Microsoft. Este erro é dado quando o Controle Parental do Windows está ativado e bloqueando o acesso à página da web especificada. 
   */
  h450 = 450,
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirecionamento (Microsoft): Utilizado no Exchange ActiveSync se existe um servidor mais eficiente a ser usado ou se o servidor não puder acessar a caixa de correio dos usuários. 
   */
  h451 = 451,
  /**
   * h494: 
   *
   * Empty
   * Cabeçalho da solicitação muito grande (Nginx): Código interno do Nginx, semelhante a 431, mas introduzido em uma versão anterior em 0.9.4 (em 21 de janeiro de 2011). 
   */
  h494 = 494,
  /**
   * h495: 
   *
   * Empty
   * Erro de Certificado (Nginx): Código interno do Nginx utilizado quando ocorreu um erro de certificado do cliente SSL para distingui-lo dos 4XX em um log e redirecionamento da página de erro. 
   */
  h495 = 495,
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro.  Sem certificado: Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro. 
   */
  h496 = 496,
  /**
   * h497: 
   *
   * Empty
   * HTTP para HTTPS (Nginx): Código interno do Nginx utilizado para as solicitações HTTP puras enviadas para a porta HTTPS para distingui-lo dos 4XX em um log e uma redireção da página de erro. 
   */
  h497 = 497,
  /**
   * h498: 
   *
   * Empty
   * Token expirado/inválido (Esri): Retornado pelo ArcGIS for Server. Um código 498 indica um token expirado ou inválido de outra forma. 
   */
  h498 = 498,
  /**
   * h499: 
   *
   * Empty
   * Token necessário (Esri): Retornado pelo ArcGIS for Server. Um código 499 indica que um token é necessário (se nenhum token foi enviado). 
   */
  h499 = 499,
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Erro interno do servidor: Um status genérico para um erro no próprio servidor. 
   */
  h500 = 500,
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Não implementado: O servidor não pode responder à solicitação. Normalmente isso implica que o servidor possa possivelmente suportar a solicitação no futuro - caso contrário, um código de status 4xx pode ser mais apropriado. 
   */
  h501 = 501,
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Portão ruim: O servidor está atuando como um proxy e não recebeu uma resposta aceitável do servidor ascendente. 
   */
  h502 = 502,
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Serviço indisponível: O servidor está fora do ar e não está aceitando solicitações. 
   */
  h503 = 503,
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout do Gateway: O servidor está atuando como um proxy e não recebeu uma resposta do servidor upstream. 
   */
  h504 = 504,
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versão HTTP não suportada: O servidor não suporta a versão do protocolo HTTP especificada na solicitação. 
   */
  h505 = 505,
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * A Variant também negocia: A negociação de conteúdo transparente para a solicitação resulta em uma referência circular. 
   */
  h506 = 506,
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuficiência de armazenamento: O usuário ou servidor não possui quota de armazenamento suficiente para atender à solicitação. 
   */
  h507 = 507,
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Detectado loop: O servidor detectou um loop infinito na solicitação. 
   */
  h508 = 508,
  /**
   * h509: 
   *
   * Empty
   * Limite de largura de banda excedido (extensão bw/limitada do Apache): Este código de status não é especificado em nenhum RFC. Seu uso é desconhecido. 
   */
  h509 = 509,
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Não estendido: São necessárias mais extensões ao pedido para que seja cumprido. 
   */
  h510 = 510,
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticação de rede exigida: O cliente deve autenticar-se na rede antes de enviar solicitações. 
   */
  h511 = 511,
  /**
   * h520: 
   *
   * Empty
   * Erro Desconhecido (Microsoft / CloudFlare): Este código de status não é especificado em nenhum RFC e é retornado por certos serviços, por exemplo, servidores Microsoft Azure e CloudFlare: "O erro 520 é essencialmente uma resposta 'coringa' quando o servidor de origem retorna algo inesperado ou algo que não é tolerado/interpretado (violação de protocolo ou resposta vazia)." 
   */
  h520 = 520,
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): O servidor original recusou a conexão da CloudFlare. 
   */
  h521 = 521,
  /**
   * h522: 
   *
   * Empty
   * Tempo limite de conexão (CloudFlare): CloudFlare não conseguiu negociar um handshake TCP com o servidor de origem. 
   */
  h522 = 522,
  /**
   * h523: 
   *
   * Empty
   * Origem Inatingível (CloudFlare): CloudFlare não pôde atingir o servidor de origem; por exemplo, se os registros DNS do servidor de origem estiverem incorretos. 
   */
  h523 = 523,
  /**
   * h524: 
   *
   * Empty
   * Ocorreu um tempo limite (CloudFlare): CloudFlare conseguiu estabelecer uma conexão TCP com o servidor de origem, mas não recebeu uma resposta HTTP oportuna. 
   */
  h524 = 524,
  /**
   * h525: 
   *
   * Empty
   * Falha na negociação de SSL Handshake (CloudFlare): CloudFlare não conseguiu negociar um handshake SSL/TLS com o servidor de origem. 
   */
  h525 = 525,
  /**
   * h526: 
   *
   * Empty
   * Certificado SSL Inválido (CloudFlare): CloudFlare não pôde validar o certificado SSL/TLS que o servidor de origem apresentou. 
   */
  h526 = 526,
  /**
   * h527: 
   *
   * Empty
   * Erro Railgun (CloudFlare): A solicitação expirou ou falhou após a conexão WAN ter sido estabelecida. 
   */
  h527 = 527
}
