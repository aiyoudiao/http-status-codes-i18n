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
export enum HttpStatusDescription {
  /**
   * CONTINUE: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação. 
   */
  CONTINUE = 'Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação. ',
  /**
   * SWITCHING_PROTOCOLS: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Mudança de protocolos: O solicitante pediu ao servidor para mudar de protocolos e o servidor confirmou que fará isso. 
   */
  SWITCHING_PROTOCOLS = 'Mudança de protocolos: O solicitante pediu ao servidor para mudar de protocolos e o servidor confirmou que fará isso. ',
  /**
   * PROCESSING: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Processamento: O servidor recebeu e está processando a solicitação, mas ainda não há resposta disponível. 
   */
  PROCESSING = 'Processamento: O servidor recebeu e está processando a solicitação, mas ainda não há resposta disponível. ',
  /**
   * OK: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: A resposta padrão para solicitações HTTP bem-sucedidas. 
   */
  OK = 'OK: A resposta padrão para solicitações HTTP bem-sucedidas. ',
  /**
   * CREATED: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Criado: A solicitação foi cumprida e um novo recurso foi criado. 
   */
  CREATED = 'Criado: A solicitação foi cumprida e um novo recurso foi criado. ',
  /**
   * ACCEPTED: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso. 
   */
  ACCEPTED = 'Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso. ',
  /**
   * NON_AUTHORITATIVE_INFORMATION: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informação não autoritativa: HTTP 1.1. O servidor processou com sucesso o pedido, mas está retornando informações de outra fonte. 
   */
  NON_AUTHORITATIVE_INFORMATION = 'Informação não autoritativa: HTTP 1.1. O servidor processou com sucesso o pedido, mas está retornando informações de outra fonte. ',
  /**
   * NO_CONTENT: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Sem conteúdo: O servidor aceitou o pedido, mas não está retornando nenhum conteúdo. Isso é frequentemente usado como resposta a um pedido DELETE. 
   */
  NO_CONTENT = 'Sem conteúdo: O servidor aceitou o pedido, mas não está retornando nenhum conteúdo. Isso é frequentemente usado como resposta a um pedido DELETE. ',
  /**
   * RESET_CONTENT: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset de conteúdo: Semelhante a uma resposta 204 Sem Conteúdo, mas esta resposta exige que o solicitante reinicie a visualização do documento. 
   */
  RESET_CONTENT = 'Reset de conteúdo: Semelhante a uma resposta 204 Sem Conteúdo, mas esta resposta exige que o solicitante reinicie a visualização do documento. ',
  /**
   * PARTIAL_CONTENT: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Conteúdo parcial: O servidor fornece apenas uma parte do conteúdo, conforme solicitado pelo cliente através do cabeçalho Range. 
   */
  PARTIAL_CONTENT = 'Conteúdo parcial: O servidor fornece apenas uma parte do conteúdo, conforme solicitado pelo cliente através do cabeçalho Range. ',
  /**
   * MULTI_STATUS: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: O corpo da mensagem que se segue é uma mensagem XML e pode conter vários códigos de resposta separados, dependendo de quantas sub-solicitações foram feitas. 
   */
  MULTI_STATUS = 'Multi-status: O corpo da mensagem que se segue é uma mensagem XML e pode conter vários códigos de resposta separados, dependendo de quantas sub-solicitações foram feitas. ',
  /**
   * ALREADY_REPORTED: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Já relatado: Os membros de uma vinculação DAV já foram enumerados em uma resposta anterior a este pedido e não estão sendo incluídos novamente. 
   */
  ALREADY_REPORTED = 'Já relatado: Os membros de uma vinculação DAV já foram enumerados em uma resposta anterior a este pedido e não estão sendo incluídos novamente. ',
  /**
   * IM_USED: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM uso: O servidor cumpriu um pedido GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual. 
   */
  IM_USED = 'IM uso: O servidor cumpriu um pedido GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual. ',
  /**
   * MULTIPLE_CHOICES: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Opções múltiplas: Há múltiplas opções que o cliente pode seguir em um cenário de protocolo de transferência de hipertexto. 
   */
  MULTIPLE_CHOICES = 'Opções múltiplas: Há múltiplas opções que o cliente pode seguir em um cenário de protocolo de transferência de hipertexto. ',
  /**
   * MOVED_PERMANENTLY: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Movido permanentemente: O recurso foi movido e todas as solicitações subsequentes devem referenciar seu novo URI. 
   */
  MOVED_PERMANENTLY = 'Movido permanentemente: O recurso foi movido e todas as solicitações subsequentes devem referenciar seu novo URI. ',
  /**
   * FOUND: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Encontrado: A especificação HTTP 1.0 descreveu este status como "Movido Temporariamente", mas os navegadores populares respondem a este status de forma semelhante ao comportamento pretendido para 303. O recurso pode ser recuperado referenciando o URI retornado. 
   */
  FOUND = 'Encontrado: A especificação HTTP 1.0 descreveu este status como "Movido Temporariamente", mas os navegadores populares respondem a este status de forma semelhante ao comportamento pretendido para 303. O recurso pode ser recuperado referenciando o URI retornado. ',
  /**
   * SEE_OTHER: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Veja outros: O recurso pode ser recuperado seguindo outros URI usando o método GET. Quando recebido em resposta a um pedido POST, PUT ou DELETE, normalmente pode-se assumir que o servidor processou o pedido com sucesso e está enviando o cliente a um ponto final informacional. 
   */
  SEE_OTHER = 'Veja outros: O recurso pode ser recuperado seguindo outros URI usando o método GET. Quando recebido em resposta a um pedido POST, PUT ou DELETE, normalmente pode-se assumir que o servidor processou o pedido com sucesso e está enviando o cliente a um ponto final informacional. ',
  /**
   * NOT_MODIFIED: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Não modificado: O recurso não foi modificado desde a versão especificada nos cabeçalhos If-Modified-Since ou If-Match. O recurso não será retornado no corpo da resposta. 
   */
  NOT_MODIFIED = 'Não modificado: O recurso não foi modificado desde a versão especificada nos cabeçalhos If-Modified-Since ou If-Match. O recurso não será retornado no corpo da resposta. ',
  /**
   * USE_PROXY: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Use proxy: HTTP 1.1. O recurso só está disponível através de um proxy e o endereço é fornecido na resposta 
   */
  USE_PROXY = 'Use proxy: HTTP 1.1. O recurso só está disponível através de um proxy e o endereço é fornecido na resposta ',
  /**
   * SWITCH_PROXY: 
   *
   * Empty
   * Trocar proxy: Obsoleto no HTTP 1.1. Usado para indicar que as solicitações subsequentes devem ser enviadas usando o proxy especificado. 
   */
  SWITCH_PROXY = 'Trocar proxy: Obsoleto no HTTP 1.1. Usado para indicar que as solicitações subsequentes devem ser enviadas usando o proxy especificado. ',
  /**
   * TEMPORARY_REDIRECT: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirecionamento temporário: HTTP 1.1. A solicitação deve ser repetida com a URI fornecida na resposta, mas as solicitações futuras ainda devem chamar a URI original. 
   */
  TEMPORARY_REDIRECT = 'Redirecionamento temporário: HTTP 1.1. A solicitação deve ser repetida com a URI fornecida na resposta, mas as solicitações futuras ainda devem chamar a URI original. ',
  /**
   * PERMANENT_REDIRECT: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resumo Incompleto (Google): Este código é utilizado na Proposta de Solicitações HTTP Resumíveis para retomar solicitações PUT ou POST abortadas. Redirecionamento permanente: A solicitação e todas as solicitações futuras devem ser reenviadas utilizando o URI fornecido na resposta. 
   */
  PERMANENT_REDIRECT = 'Resumo Incompleto (Google): Este código é utilizado na Proposta de Solicitações HTTP Resumíveis para retomar solicitações PUT ou POST abortadas. Redirecionamento permanente: A solicitação e todas as solicitações futuras devem ser reenviadas utilizando o URI fornecido na resposta. ',
  /**
   * BAD_REQUEST: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Pedido ruim: A solicitação não pôde ser atendida devido à sintaxe incorreta da solicitação. 
   */
  BAD_REQUEST = 'Pedido ruim: A solicitação não pôde ser atendida devido à sintaxe incorreta da solicitação. ',
  /**
   * UNAUTHORIZED: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Não autorizado: O solicitante não está autorizado a acessar o recurso. Isso é semelhante ao 403, mas é usado em casos em que a autenticação é esperada, mas falhou ou não foi fornecida. 
   */
  UNAUTHORIZED = 'Não autorizado: O solicitante não está autorizado a acessar o recurso. Isso é semelhante ao 403, mas é usado em casos em que a autenticação é esperada, mas falhou ou não foi fornecida. ',
  /**
   * PAYMENT_REQUIRED: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pagamento exigido: Reservado para uso futuro. Alguns serviços web usam este código como uma indicação de que o cliente enviou um número excessivo de solicitações. 
   */
  PAYMENT_REQUIRED = 'Pagamento exigido: Reservado para uso futuro. Alguns serviços web usam este código como uma indicação de que o cliente enviou um número excessivo de solicitações. ',
  /**
   * FORBIDDEN: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Proibido: A solicitação estava formatada corretamente, mas o servidor está se recusando a fornecer o recurso solicitado. Diferente do 401, a autenticação não fará diferença na resposta do servidor. 
   */
  FORBIDDEN = 'Proibido: A solicitação estava formatada corretamente, mas o servidor está se recusando a fornecer o recurso solicitado. Diferente do 401, a autenticação não fará diferença na resposta do servidor. ',
  /**
   * NOT_FOUND: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Não encontrado: O recurso não pôde ser encontrado. Isso é frequentemente usado como um coletivo para todos os URIs inválidos solicitados pelo servidor. 
   */
  NOT_FOUND = 'Não encontrado: O recurso não pôde ser encontrado. Isso é frequentemente usado como um coletivo para todos os URIs inválidos solicitados pelo servidor. ',
  /**
   * METHOD_NOT_ALLOWED: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Método não permitido: O recurso foi solicitado utilizando um método que não é permitido. Por exemplo, solicitar um recurso através de um método POST quando o recurso apenas suporta o método GET. 
   */
  METHOD_NOT_ALLOWED = 'Método não permitido: O recurso foi solicitado utilizando um método que não é permitido. Por exemplo, solicitar um recurso através de um método POST quando o recurso apenas suporta o método GET. ',
  /**
   * NOT_ACCEPTABLE: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Não aceitável: O recurso é válido, mas não pode ser fornecido no formato especificado nos cabeçalhos Accept na solicitação. 
   */
  NOT_ACCEPTABLE = 'Não aceitável: O recurso é válido, mas não pode ser fornecido no formato especificado nos cabeçalhos Accept na solicitação. ',
  /**
   * PROXY_AUTHENTICATION_REQUIRED: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticação de proxy exigida: A autenticação é exigida com o proxy antes que as solicitações possam ser atendidas. 
   */
  PROXY_AUTHENTICATION_REQUIRED = 'Autenticação de proxy exigida: A autenticação é exigida com o proxy antes que as solicitações possam ser atendidas. ',
  /**
   * REQUEST_TIMEOUT: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de solicitação: O servidor atingiu o tempo limite aguardando uma solicitação do cliente. O cliente tem permissão para repetir a solicitação. 
   */
  REQUEST_TIMEOUT = 'Timeout de solicitação: O servidor atingiu o tempo limite aguardando uma solicitação do cliente. O cliente tem permissão para repetir a solicitação. ',
  /**
   * CONFLICT: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflito: A solicitação não pode ser concluída devido a um conflito nos parâmetros da solicitação. 
   */
  CONFLICT = 'Conflito: A solicitação não pode ser concluída devido a um conflito nos parâmetros da solicitação. ',
  /**
   * GONE: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Sumido: O recurso não está mais disponível na URI solicitada e nenhum redirecionamento será fornecido. 
   */
  GONE = 'Sumido: O recurso não está mais disponível na URI solicitada e nenhum redirecionamento será fornecido. ',
  /**
   * LENGTH_REQUIRED: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Comprimento exigido: A solicitação não especificou o comprimento do seu conteúdo conforme exigido pelo recurso. 
   */
  LENGTH_REQUIRED = 'Comprimento exigido: A solicitação não especificou o comprimento do seu conteúdo conforme exigido pelo recurso. ',
  /**
   * PRECONDITION_FAILED: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Pré-condição falhou: O servidor não atende a uma das pré-condições especificadas pelo cliente. 
   */
  PRECONDITION_FAILED = 'Pré-condição falhou: O servidor não atende a uma das pré-condições especificadas pelo cliente. ',
  /**
   * PAYLOAD_TOO_LARGE: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entidade de solicitação muito grande: O conteúdo da solicitação é maior do que o que o servidor é capaz de processar. 
   */
  PAYLOAD_TOO_LARGE = 'Entidade de solicitação muito grande: O conteúdo da solicitação é maior do que o que o servidor é capaz de processar. ',
  /**
   * URI_TOO_LONG: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de solicitação muito longo: O URI fornecido na solicitação é muito longo para ser processado pelo servidor. Isso é frequentemente usado quando muitos dados foram codificados no URI de uma solicitação GET e uma solicitação POST deve ser usada em seu lugar. 
   */
  URI_TOO_LONG = 'URI de solicitação muito longo: O URI fornecido na solicitação é muito longo para ser processado pelo servidor. Isso é frequentemente usado quando muitos dados foram codificados no URI de uma solicitação GET e uma solicitação POST deve ser usada em seu lugar. ',
  /**
   * UNSUPPORTED_MEDIA_TYPE: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo de mídia não suportado: Os dados fornecidos pelo cliente têm um tipo de mídia que o servidor não suporta. 
   */
  UNSUPPORTED_MEDIA_TYPE = 'Tipo de mídia não suportado: Os dados fornecidos pelo cliente têm um tipo de mídia que o servidor não suporta. ',
  /**
   * RANGE_NOT_SATISFIABLE: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Faixa solicitada insatisfatória: O cliente solicitou uma parte do recurso, mas o servidor não pode fornecer essa parte. 
   */
  RANGE_NOT_SATISFIABLE = 'Faixa solicitada insatisfatória: O cliente solicitou uma parte do recurso, mas o servidor não pode fornecer essa parte. ',
  /**
   * EXPECTATION_FAILED: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Falha de expectativa: O servidor não pode atender aos requisitos do campo de cabeçalho de solicitação Expect. 
   */
  EXPECTATION_FAILED = 'Falha de expectativa: O servidor não pode atender aos requisitos do campo de cabeçalho de solicitação Expect. ',
  /**
   * I_M_A_TEAPOT: 
   *
   * Empty
   * Sou uma chaleira: Qualquer tentativa de preparar café com uma chaleira deve resultar no código de erro "418 Sou uma chaleira". O corpo da entidade resultante PODE ser curto e robusto. 
   */
  I_M_A_TEAPOT = 'Sou uma chaleira: Qualquer tentativa de preparar café com uma chaleira deve resultar no código de erro "418 Sou uma chaleira". O corpo da entidade resultante PODE ser curto e robusto. ',
  /**
   * MISDIRECTED_REQUEST: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Pedido mal direcionado: O pedido foi direcionado para um servidor que não é capaz de produzir uma resposta. Este pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema e autoridade que estão incluídas no URI do pedido. 
   */
  MISDIRECTED_REQUEST = 'Pedido mal direcionado: O pedido foi direcionado para um servidor que não é capaz de produzir uma resposta. Este pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema e autoridade que estão incluídas no URI do pedido. ',
  /**
   * UNPROCESSABLE_ENTITY: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entidade não processável: A solicitação estava formatada corretamente, mas não pode ser processada na sua forma atual. Usada frequentemente quando os parâmetros especificados não passam nos erros de validação. 
   */
  UNPROCESSABLE_ENTITY = 'Entidade não processável: A solicitação estava formatada corretamente, mas não pode ser processada na sua forma atual. Usada frequentemente quando os parâmetros especificados não passam nos erros de validação. ',
  /**
   * LOCKED: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloqueado: O recurso solicitado foi encontrado, mas está bloqueado e não será retornado. 
   */
  LOCKED = 'Bloqueado: O recurso solicitado foi encontrado, mas está bloqueado e não será retornado. ',
  /**
   * FAILED_DEPENDENCY: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Falha de dependência: A solicitação falhou devido à falha de uma solicitação anterior. 
   */
  FAILED_DEPENDENCY = 'Falha de dependência: A solicitação falhou devido à falha de uma solicitação anterior. ',
  /**
   * UPGRADE_REQUIRED: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Atualização necessária: O cliente deve repetir a solicitação utilizando um protocolo atualizado, como o TLS 1.0. 
   */
  UPGRADE_REQUIRED = 'Atualização necessária: O cliente deve repetir a solicitação utilizando um protocolo atualizado, como o TLS 1.0. ',
  /**
   * PRECONDITION_REQUIRED: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Pré-condição exigida: O servidor de origem requer que a solicitação seja condicional. 
   */
  PRECONDITION_REQUIRED = 'Pré-condição exigida: O servidor de origem requer que a solicitação seja condicional. ',
  /**
   * TOO_MANY_REQUESTS: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Muitas solicitações: O usuário enviou muitas solicitações em um determinado período de tempo ("limitação de taxa"). 
   */
  TOO_MANY_REQUESTS = 'Muitas solicitações: O usuário enviou muitas solicitações em um determinado período de tempo ("limitação de taxa"). ',
  /**
   * REQUEST_HEADER_FIELDS_TOO_LARGE: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campos de cabeçalho da solicitação muito grandes: O servidor não está disposto a processar a solicitação porque seus campos de cabeçalho são muito grandes. 
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 'Campos de cabeçalho da solicitação muito grandes: O servidor não está disposto a processar a solicitação porque seus campos de cabeçalho são muito grandes. ',
  /**
   * LOGIN_TIMEOUT_MICROSOFT: 
   *
   * Empty
   * Tempo limite de login (Microsoft): Uma extensão da Microsoft. Indica que a sua sessão expirou. 
   */
  LOGIN_TIMEOUT_MICROSOFT = 'Tempo limite de login (Microsoft): Uma extensão da Microsoft. Indica que a sua sessão expirou. ',
  /**
   * NO_RESPONSE_NGINX: 
   *
   * Empty
   * Sem resposta (Nginx): Usado nos logs do Nginx para indicar que o servidor não retornou nenhuma informação ao cliente e fechou a conexão (útil como um impedimento para malware em cenários de protocolo de transferência de hipertexto). 
   */
  NO_RESPONSE_NGINX = 'Sem resposta (Nginx): Usado nos logs do Nginx para indicar que o servidor não retornou nenhuma informação ao cliente e fechou a conexão (útil como um impedimento para malware em cenários de protocolo de transferência de hipertexto). ',
  /**
   * RETRY_WITH_MICROSOFT: 
   *
   * Empty
   * Tente Novamente Com (Microsoft): Uma extensão da Microsoft. A solicitação deve ser reenviada após realizar a ação apropriada. 
   */
  RETRY_WITH_MICROSOFT = 'Tente Novamente Com (Microsoft): Uma extensão da Microsoft. A solicitação deve ser reenviada após realizar a ação apropriada. ',
  /**
   * BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT: 
   *
   * Empty
   * Bloqueado pelo Controle Parental do Windows (Microsoft): uma extensão da Microsoft. Este erro é dado quando o Controle Parental do Windows está ativado e bloqueando o acesso à página da web especificada. 
   */
  BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS_MICROSOFT = 'Bloqueado pelo Controle Parental do Windows (Microsoft): uma extensão da Microsoft. Este erro é dado quando o Controle Parental do Windows está ativado e bloqueando o acesso à página da web especificada. ',
  /**
   * UNAVAILABLE_FOR_LEGAL_REASONS: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirecionamento (Microsoft): Utilizado no Exchange ActiveSync se existe um servidor mais eficiente a ser usado ou se o servidor não puder acessar a caixa de correio dos usuários. 
   */
  UNAVAILABLE_FOR_LEGAL_REASONS = 'Redirecionamento (Microsoft): Utilizado no Exchange ActiveSync se existe um servidor mais eficiente a ser usado ou se o servidor não puder acessar a caixa de correio dos usuários. ',
  /**
   * REQUEST_HEADER_TOO_LARGE_NGINX: 
   *
   * Empty
   * Cabeçalho da solicitação muito grande (Nginx): Código interno do Nginx, semelhante a 431, mas introduzido em uma versão anterior em 0.9.4 (em 21 de janeiro de 2011). 
   */
  REQUEST_HEADER_TOO_LARGE_NGINX = 'Cabeçalho da solicitação muito grande (Nginx): Código interno do Nginx, semelhante a 431, mas introduzido em uma versão anterior em 0.9.4 (em 21 de janeiro de 2011). ',
  /**
   * CERT_ERROR_NGINX: 
   *
   * Empty
   * Erro de Certificado (Nginx): Código interno do Nginx utilizado quando ocorreu um erro de certificado do cliente SSL para distingui-lo dos 4XX em um log e redirecionamento da página de erro. 
   */
  CERT_ERROR_NGINX = 'Erro de Certificado (Nginx): Código interno do Nginx utilizado quando ocorreu um erro de certificado do cliente SSL para distingui-lo dos 4XX em um log e redirecionamento da página de erro. ',
  /**
   * NO_CERT_NGINX: 
   *
   * Empty
   * No Cert (Nginx): Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro.  Sem certificado: Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro. 
   */
  NO_CERT_NGINX = 'No Cert (Nginx): Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro.  Sem certificado: Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro. ',
  /**
   * HTTP_TO_HTTPS_NGINX: 
   *
   * Empty
   * HTTP para HTTPS (Nginx): Código interno do Nginx utilizado para as solicitações HTTP puras enviadas para a porta HTTPS para distingui-lo dos 4XX em um log e uma redireção da página de erro. 
   */
  HTTP_TO_HTTPS_NGINX = 'HTTP para HTTPS (Nginx): Código interno do Nginx utilizado para as solicitações HTTP puras enviadas para a porta HTTPS para distingui-lo dos 4XX em um log e uma redireção da página de erro. ',
  /**
   * TOKEN_EXPIRED_INVALID_ESRI: 
   *
   * Empty
   * Token expirado/inválido (Esri): Retornado pelo ArcGIS for Server. Um código 498 indica um token expirado ou inválido de outra forma. 
   */
  TOKEN_EXPIRED_INVALID_ESRI = 'Token expirado/inválido (Esri): Retornado pelo ArcGIS for Server. Um código 498 indica um token expirado ou inválido de outra forma. ',
  /**
   * TOKEN_REQUIRED_ESRI: 
   *
   * Empty
   * Token necessário (Esri): Retornado pelo ArcGIS for Server. Um código 499 indica que um token é necessário (se nenhum token foi enviado). 
   */
  TOKEN_REQUIRED_ESRI = 'Token necessário (Esri): Retornado pelo ArcGIS for Server. Um código 499 indica que um token é necessário (se nenhum token foi enviado). ',
  /**
   * INTERNAL_SERVER_ERROR: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Erro interno do servidor: Um status genérico para um erro no próprio servidor. 
   */
  INTERNAL_SERVER_ERROR = 'Erro interno do servidor: Um status genérico para um erro no próprio servidor. ',
  /**
   * NOT_IMPLEMENTED: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Não implementado: O servidor não pode responder à solicitação. Normalmente isso implica que o servidor possa possivelmente suportar a solicitação no futuro - caso contrário, um código de status 4xx pode ser mais apropriado. 
   */
  NOT_IMPLEMENTED = 'Não implementado: O servidor não pode responder à solicitação. Normalmente isso implica que o servidor possa possivelmente suportar a solicitação no futuro - caso contrário, um código de status 4xx pode ser mais apropriado. ',
  /**
   * BAD_GATEWAY: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Portão ruim: O servidor está atuando como um proxy e não recebeu uma resposta aceitável do servidor ascendente. 
   */
  BAD_GATEWAY = 'Portão ruim: O servidor está atuando como um proxy e não recebeu uma resposta aceitável do servidor ascendente. ',
  /**
   * SERVICE_UNAVAILABLE: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Serviço indisponível: O servidor está fora do ar e não está aceitando solicitações. 
   */
  SERVICE_UNAVAILABLE = 'Serviço indisponível: O servidor está fora do ar e não está aceitando solicitações. ',
  /**
   * GATEWAY_TIMEOUT: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout do Gateway: O servidor está atuando como um proxy e não recebeu uma resposta do servidor upstream. 
   */
  GATEWAY_TIMEOUT = 'Timeout do Gateway: O servidor está atuando como um proxy e não recebeu uma resposta do servidor upstream. ',
  /**
   * HTTP_VERSION_NOT_SUPPORTED: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versão HTTP não suportada: O servidor não suporta a versão do protocolo HTTP especificada na solicitação. 
   */
  HTTP_VERSION_NOT_SUPPORTED = 'Versão HTTP não suportada: O servidor não suporta a versão do protocolo HTTP especificada na solicitação. ',
  /**
   * VARIANT_ALSO_NEGOTIATES: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * A Variant também negocia: A negociação de conteúdo transparente para a solicitação resulta em uma referência circular. 
   */
  VARIANT_ALSO_NEGOTIATES = 'A Variant também negocia: A negociação de conteúdo transparente para a solicitação resulta em uma referência circular. ',
  /**
   * INSUFFICIENT_STORAGE: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuficiência de armazenamento: O usuário ou servidor não possui quota de armazenamento suficiente para atender à solicitação. 
   */
  INSUFFICIENT_STORAGE = 'Insuficiência de armazenamento: O usuário ou servidor não possui quota de armazenamento suficiente para atender à solicitação. ',
  /**
   * LOOP_DETECTED: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Detectado loop: O servidor detectou um loop infinito na solicitação. 
   */
  LOOP_DETECTED = 'Detectado loop: O servidor detectou um loop infinito na solicitação. ',
  /**
   * BANDWIDTH_LIMIT_EXCEEDED: 
   *
   * Empty
   * Limite de largura de banda excedido (extensão bw/limitada do Apache): Este código de status não é especificado em nenhum RFC. Seu uso é desconhecido. 
   */
  BANDWIDTH_LIMIT_EXCEEDED = 'Limite de largura de banda excedido (extensão bw/limitada do Apache): Este código de status não é especificado em nenhum RFC. Seu uso é desconhecido. ',
  /**
   * NOT_EXTENDED: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Não estendido: São necessárias mais extensões ao pedido para que seja cumprido. 
   */
  NOT_EXTENDED = 'Não estendido: São necessárias mais extensões ao pedido para que seja cumprido. ',
  /**
   * NETWORK_AUTHENTICATION_REQUIRED: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticação de rede exigida: O cliente deve autenticar-se na rede antes de enviar solicitações. 
   */
  NETWORK_AUTHENTICATION_REQUIRED = 'Autenticação de rede exigida: O cliente deve autenticar-se na rede antes de enviar solicitações. ',
  /**
   * UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE: 
   *
   * Empty
   * Erro Desconhecido (Microsoft / CloudFlare): Este código de status não é especificado em nenhum RFC e é retornado por certos serviços, por exemplo, servidores Microsoft Azure e CloudFlare: "O erro 520 é essencialmente uma resposta 'coringa' quando o servidor de origem retorna algo inesperado ou algo que não é tolerado/interpretado (violação de protocolo ou resposta vazia)." 
   */
  UNKNOWN_ERROR_MICROSOFT_CLOUD_FLARE = 'Erro Desconhecido (Microsoft / CloudFlare): Este código de status não é especificado em nenhum RFC e é retornado por certos serviços, por exemplo, servidores Microsoft Azure e CloudFlare: "O erro 520 é essencialmente uma resposta \'coringa\' quando o servidor de origem retorna algo inesperado ou algo que não é tolerado/interpretado (violação de protocolo ou resposta vazia)." ',
  /**
   * WEB_SERVER_IS_DOWN_CLOUD_FLARE: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): O servidor original recusou a conexão da CloudFlare. 
   */
  WEB_SERVER_IS_DOWN_CLOUD_FLARE = 'Web Server Is Down (CloudFlare): O servidor original recusou a conexão da CloudFlare. ',
  /**
   * CONNECTION_TIMED_OUT_CLOUD_FLARE: 
   *
   * Empty
   * Tempo limite de conexão (CloudFlare): CloudFlare não conseguiu negociar um handshake TCP com o servidor de origem. 
   */
  CONNECTION_TIMED_OUT_CLOUD_FLARE = 'Tempo limite de conexão (CloudFlare): CloudFlare não conseguiu negociar um handshake TCP com o servidor de origem. ',
  /**
   * ORIGIN_IS_UNREACHABLE_CLOUD_FLARE: 
   *
   * Empty
   * Origem Inatingível (CloudFlare): CloudFlare não pôde atingir o servidor de origem; por exemplo, se os registros DNS do servidor de origem estiverem incorretos. 
   */
  ORIGIN_IS_UNREACHABLE_CLOUD_FLARE = 'Origem Inatingível (CloudFlare): CloudFlare não pôde atingir o servidor de origem; por exemplo, se os registros DNS do servidor de origem estiverem incorretos. ',
  /**
   * A_TIMEOUT_OCCURRED_CLOUD_FLARE: 
   *
   * Empty
   * Ocorreu um tempo limite (CloudFlare): CloudFlare conseguiu estabelecer uma conexão TCP com o servidor de origem, mas não recebeu uma resposta HTTP oportuna. 
   */
  A_TIMEOUT_OCCURRED_CLOUD_FLARE = 'Ocorreu um tempo limite (CloudFlare): CloudFlare conseguiu estabelecer uma conexão TCP com o servidor de origem, mas não recebeu uma resposta HTTP oportuna. ',
  /**
   * SSL_HANDSHAKE_FAILED_CLOUD_FLARE: 
   *
   * Empty
   * Falha na negociação de SSL Handshake (CloudFlare): CloudFlare não conseguiu negociar um handshake SSL/TLS com o servidor de origem. 
   */
  SSL_HANDSHAKE_FAILED_CLOUD_FLARE = 'Falha na negociação de SSL Handshake (CloudFlare): CloudFlare não conseguiu negociar um handshake SSL/TLS com o servidor de origem. ',
  /**
   * INVALID_SSL_CERTIFICATE_CLOUD_FLARE: 
   *
   * Empty
   * Certificado SSL Inválido (CloudFlare): CloudFlare não pôde validar o certificado SSL/TLS que o servidor de origem apresentou. 
   */
  INVALID_SSL_CERTIFICATE_CLOUD_FLARE = 'Certificado SSL Inválido (CloudFlare): CloudFlare não pôde validar o certificado SSL/TLS que o servidor de origem apresentou. ',
  /**
   * RAILGUN_ERROR_CLOUD_FLARE: 
   *
   * Empty
   * Erro Railgun (CloudFlare): A solicitação expirou ou falhou após a conexão WAN ter sido estabelecida. 
   */
  RAILGUN_ERROR_CLOUD_FLARE = 'Erro Railgun (CloudFlare): A solicitação expirou ou falhou após a conexão WAN ter sido estabelecida. '
}

export enum HttpStatusDescriptionByCode {
  /**
   * h100: RFC 7231 6.2.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1
   * Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação. 
   */
  h100 = 'Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação. ',
  /**
   * h101: RFC 7231 6.2.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2
   * Mudança de protocolos: O solicitante pediu ao servidor para mudar de protocolos e o servidor confirmou que fará isso. 
   */
  h101 = 'Mudança de protocolos: O solicitante pediu ao servidor para mudar de protocolos e o servidor confirmou que fará isso. ',
  /**
   * h102: RFC 2518 10.1 (obsoleted by RFC 4918)
   * https://datatracker.ietf.org/doc/html/rfc2518#section-10.1
   * Processamento: O servidor recebeu e está processando a solicitação, mas ainda não há resposta disponível. 
   */
  h102 = 'Processamento: O servidor recebeu e está processando a solicitação, mas ainda não há resposta disponível. ',
  /**
   * h200: RFC 7231 6.3.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1
   * OK: A resposta padrão para solicitações HTTP bem-sucedidas. 
   */
  h200 = 'OK: A resposta padrão para solicitações HTTP bem-sucedidas. ',
  /**
   * h201: RFC 7231 6.3.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2
   * Criado: A solicitação foi cumprida e um novo recurso foi criado. 
   */
  h201 = 'Criado: A solicitação foi cumprida e um novo recurso foi criado. ',
  /**
   * h202: RFC 7231 6.3.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3
   * Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso. 
   */
  h202 = 'Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso. ',
  /**
   * h203: RFC 7231 6.3.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4
   * Informação não autoritativa: HTTP 1.1. O servidor processou com sucesso o pedido, mas está retornando informações de outra fonte. 
   */
  h203 = 'Informação não autoritativa: HTTP 1.1. O servidor processou com sucesso o pedido, mas está retornando informações de outra fonte. ',
  /**
   * h204: RFC 7231 6.3.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5
   * Sem conteúdo: O servidor aceitou o pedido, mas não está retornando nenhum conteúdo. Isso é frequentemente usado como resposta a um pedido DELETE. 
   */
  h204 = 'Sem conteúdo: O servidor aceitou o pedido, mas não está retornando nenhum conteúdo. Isso é frequentemente usado como resposta a um pedido DELETE. ',
  /**
   * h205: RFC 7231 6.3.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6
   * Reset de conteúdo: Semelhante a uma resposta 204 Sem Conteúdo, mas esta resposta exige que o solicitante reinicie a visualização do documento. 
   */
  h205 = 'Reset de conteúdo: Semelhante a uma resposta 204 Sem Conteúdo, mas esta resposta exige que o solicitante reinicie a visualização do documento. ',
  /**
   * h206: RFC 7233 4.1
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.1
   * Conteúdo parcial: O servidor fornece apenas uma parte do conteúdo, conforme solicitado pelo cliente através do cabeçalho Range. 
   */
  h206 = 'Conteúdo parcial: O servidor fornece apenas uma parte do conteúdo, conforme solicitado pelo cliente através do cabeçalho Range. ',
  /**
   * h207: RFC 4918 11.1
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.1
   * Multi-status: O corpo da mensagem que se segue é uma mensagem XML e pode conter vários códigos de resposta separados, dependendo de quantas sub-solicitações foram feitas. 
   */
  h207 = 'Multi-status: O corpo da mensagem que se segue é uma mensagem XML e pode conter vários códigos de resposta separados, dependendo de quantas sub-solicitações foram feitas. ',
  /**
   * h208: RFC 5842 7.1
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
   * Já relatado: Os membros de uma vinculação DAV já foram enumerados em uma resposta anterior a este pedido e não estão sendo incluídos novamente. 
   */
  h208 = 'Já relatado: Os membros de uma vinculação DAV já foram enumerados em uma resposta anterior a este pedido e não estão sendo incluídos novamente. ',
  /**
   * h226: RFC 3229 10.4.1
   * https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1
   * IM uso: O servidor cumpriu um pedido GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual. 
   */
  h226 = 'IM uso: O servidor cumpriu um pedido GET para o recurso e a resposta é uma representação do resultado de uma ou mais manipulações de instância aplicadas à instância atual. ',
  /**
   * h300: RFC 7231 6.4.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1
   * Opções múltiplas: Há múltiplas opções que o cliente pode seguir em um cenário de protocolo de transferência de hipertexto. 
   */
  h300 = 'Opções múltiplas: Há múltiplas opções que o cliente pode seguir em um cenário de protocolo de transferência de hipertexto. ',
  /**
   * h301: RFC 7231 6.4.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2
   * Movido permanentemente: O recurso foi movido e todas as solicitações subsequentes devem referenciar seu novo URI. 
   */
  h301 = 'Movido permanentemente: O recurso foi movido e todas as solicitações subsequentes devem referenciar seu novo URI. ',
  /**
   * h302: RFC 7231 6.4.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3
   * Encontrado: A especificação HTTP 1.0 descreveu este status como "Movido Temporariamente", mas os navegadores populares respondem a este status de forma semelhante ao comportamento pretendido para 303. O recurso pode ser recuperado referenciando o URI retornado. 
   */
  h302 = 'Encontrado: A especificação HTTP 1.0 descreveu este status como "Movido Temporariamente", mas os navegadores populares respondem a este status de forma semelhante ao comportamento pretendido para 303. O recurso pode ser recuperado referenciando o URI retornado. ',
  /**
   * h303: RFC 7231 6.4.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4
   * Veja outros: O recurso pode ser recuperado seguindo outros URI usando o método GET. Quando recebido em resposta a um pedido POST, PUT ou DELETE, normalmente pode-se assumir que o servidor processou o pedido com sucesso e está enviando o cliente a um ponto final informacional. 
   */
  h303 = 'Veja outros: O recurso pode ser recuperado seguindo outros URI usando o método GET. Quando recebido em resposta a um pedido POST, PUT ou DELETE, normalmente pode-se assumir que o servidor processou o pedido com sucesso e está enviando o cliente a um ponto final informacional. ',
  /**
   * h304: RFC 7232 4.1
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.1
   * Não modificado: O recurso não foi modificado desde a versão especificada nos cabeçalhos If-Modified-Since ou If-Match. O recurso não será retornado no corpo da resposta. 
   */
  h304 = 'Não modificado: O recurso não foi modificado desde a versão especificada nos cabeçalhos If-Modified-Since ou If-Match. O recurso não será retornado no corpo da resposta. ',
  /**
   * h305: RFC 7231 6.4.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5
   * Use proxy: HTTP 1.1. O recurso só está disponível através de um proxy e o endereço é fornecido na resposta 
   */
  h305 = 'Use proxy: HTTP 1.1. O recurso só está disponível através de um proxy e o endereço é fornecido na resposta ',
  /**
   * h306: 
   *
   * Empty
   * Trocar proxy: Obsoleto no HTTP 1.1. Usado para indicar que as solicitações subsequentes devem ser enviadas usando o proxy especificado. 
   */
  h306 = 'Trocar proxy: Obsoleto no HTTP 1.1. Usado para indicar que as solicitações subsequentes devem ser enviadas usando o proxy especificado. ',
  /**
   * h307: RFC 7231 6.4.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7
   * Redirecionamento temporário: HTTP 1.1. A solicitação deve ser repetida com a URI fornecida na resposta, mas as solicitações futuras ainda devem chamar a URI original. 
   */
  h307 = 'Redirecionamento temporário: HTTP 1.1. A solicitação deve ser repetida com a URI fornecida na resposta, mas as solicitações futuras ainda devem chamar a URI original. ',
  /**
   * h308: RFC 7238 3
   * https://datatracker.ietf.org/doc/html/rfc7238#section-3
   * Resumo Incompleto (Google): Este código é utilizado na Proposta de Solicitações HTTP Resumíveis para retomar solicitações PUT ou POST abortadas. Redirecionamento permanente: A solicitação e todas as solicitações futuras devem ser reenviadas utilizando o URI fornecido na resposta. 
   */
  h308 = 'Resumo Incompleto (Google): Este código é utilizado na Proposta de Solicitações HTTP Resumíveis para retomar solicitações PUT ou POST abortadas. Redirecionamento permanente: A solicitação e todas as solicitações futuras devem ser reenviadas utilizando o URI fornecido na resposta. ',
  /**
   * h400: RFC 7231 6.5.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1
   * Pedido ruim: A solicitação não pôde ser atendida devido à sintaxe incorreta da solicitação. 
   */
  h400 = 'Pedido ruim: A solicitação não pôde ser atendida devido à sintaxe incorreta da solicitação. ',
  /**
   * h401: RFC 7235 3.1
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.1
   * Não autorizado: O solicitante não está autorizado a acessar o recurso. Isso é semelhante ao 403, mas é usado em casos em que a autenticação é esperada, mas falhou ou não foi fornecida. 
   */
  h401 = 'Não autorizado: O solicitante não está autorizado a acessar o recurso. Isso é semelhante ao 403, mas é usado em casos em que a autenticação é esperada, mas falhou ou não foi fornecida. ',
  /**
   * h402: RFC 7231 6.5.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2
   * Pagamento exigido: Reservado para uso futuro. Alguns serviços web usam este código como uma indicação de que o cliente enviou um número excessivo de solicitações. 
   */
  h402 = 'Pagamento exigido: Reservado para uso futuro. Alguns serviços web usam este código como uma indicação de que o cliente enviou um número excessivo de solicitações. ',
  /**
   * h403: RFC 7231 6.5.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3
   * Proibido: A solicitação estava formatada corretamente, mas o servidor está se recusando a fornecer o recurso solicitado. Diferente do 401, a autenticação não fará diferença na resposta do servidor. 
   */
  h403 = 'Proibido: A solicitação estava formatada corretamente, mas o servidor está se recusando a fornecer o recurso solicitado. Diferente do 401, a autenticação não fará diferença na resposta do servidor. ',
  /**
   * h404: RFC 7231 6.5.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4
   * Não encontrado: O recurso não pôde ser encontrado. Isso é frequentemente usado como um coletivo para todos os URIs inválidos solicitados pelo servidor. 
   */
  h404 = 'Não encontrado: O recurso não pôde ser encontrado. Isso é frequentemente usado como um coletivo para todos os URIs inválidos solicitados pelo servidor. ',
  /**
   * h405: RFC 7231 6.5.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5
   * Método não permitido: O recurso foi solicitado utilizando um método que não é permitido. Por exemplo, solicitar um recurso através de um método POST quando o recurso apenas suporta o método GET. 
   */
  h405 = 'Método não permitido: O recurso foi solicitado utilizando um método que não é permitido. Por exemplo, solicitar um recurso através de um método POST quando o recurso apenas suporta o método GET. ',
  /**
   * h406: RFC 7231 6.5.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6
   * Não aceitável: O recurso é válido, mas não pode ser fornecido no formato especificado nos cabeçalhos Accept na solicitação. 
   */
  h406 = 'Não aceitável: O recurso é válido, mas não pode ser fornecido no formato especificado nos cabeçalhos Accept na solicitação. ',
  /**
   * h407: RFC 7235 3.2
   * https://datatracker.ietf.org/doc/html/rfc7235#section-3.2
   * Autenticação de proxy exigida: A autenticação é exigida com o proxy antes que as solicitações possam ser atendidas. 
   */
  h407 = 'Autenticação de proxy exigida: A autenticação é exigida com o proxy antes que as solicitações possam ser atendidas. ',
  /**
   * h408: RFC 7231 6.5.7
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7
   * Timeout de solicitação: O servidor atingiu o tempo limite aguardando uma solicitação do cliente. O cliente tem permissão para repetir a solicitação. 
   */
  h408 = 'Timeout de solicitação: O servidor atingiu o tempo limite aguardando uma solicitação do cliente. O cliente tem permissão para repetir a solicitação. ',
  /**
   * h409: RFC 7231 6.5.8
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8
   * Conflito: A solicitação não pode ser concluída devido a um conflito nos parâmetros da solicitação. 
   */
  h409 = 'Conflito: A solicitação não pode ser concluída devido a um conflito nos parâmetros da solicitação. ',
  /**
   * h410: RFC 7231 6.5.9
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9
   * Sumido: O recurso não está mais disponível na URI solicitada e nenhum redirecionamento será fornecido. 
   */
  h410 = 'Sumido: O recurso não está mais disponível na URI solicitada e nenhum redirecionamento será fornecido. ',
  /**
   * h411: RFC 7231 6.5.10
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10
   * Comprimento exigido: A solicitação não especificou o comprimento do seu conteúdo conforme exigido pelo recurso. 
   */
  h411 = 'Comprimento exigido: A solicitação não especificou o comprimento do seu conteúdo conforme exigido pelo recurso. ',
  /**
   * h412: RFC 7232 4.2
   * https://datatracker.ietf.org/doc/html/rfc7232#section-4.2
   * Pré-condição falhou: O servidor não atende a uma das pré-condições especificadas pelo cliente. 
   */
  h412 = 'Pré-condição falhou: O servidor não atende a uma das pré-condições especificadas pelo cliente. ',
  /**
   * h413: RFC 7231 6.5.11
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11
   * Entidade de solicitação muito grande: O conteúdo da solicitação é maior do que o que o servidor é capaz de processar. 
   */
  h413 = 'Entidade de solicitação muito grande: O conteúdo da solicitação é maior do que o que o servidor é capaz de processar. ',
  /**
   * h414: RFC 7231 6.5.12
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12
   * URI de solicitação muito longo: O URI fornecido na solicitação é muito longo para ser processado pelo servidor. Isso é frequentemente usado quando muitos dados foram codificados no URI de uma solicitação GET e uma solicitação POST deve ser usada em seu lugar. 
   */
  h414 = 'URI de solicitação muito longo: O URI fornecido na solicitação é muito longo para ser processado pelo servidor. Isso é frequentemente usado quando muitos dados foram codificados no URI de uma solicitação GET e uma solicitação POST deve ser usada em seu lugar. ',
  /**
   * h415: RFC 7231 6.5.13
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13
   * Tipo de mídia não suportado: Os dados fornecidos pelo cliente têm um tipo de mídia que o servidor não suporta. 
   */
  h415 = 'Tipo de mídia não suportado: Os dados fornecidos pelo cliente têm um tipo de mídia que o servidor não suporta. ',
  /**
   * h416: RFC 7233 4.4
   * https://datatracker.ietf.org/doc/html/rfc7233#section-4.4
   * Faixa solicitada insatisfatória: O cliente solicitou uma parte do recurso, mas o servidor não pode fornecer essa parte. 
   */
  h416 = 'Faixa solicitada insatisfatória: O cliente solicitou uma parte do recurso, mas o servidor não pode fornecer essa parte. ',
  /**
   * h417: RFC 7231 6.5.14
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14
   * Falha de expectativa: O servidor não pode atender aos requisitos do campo de cabeçalho de solicitação Expect. 
   */
  h417 = 'Falha de expectativa: O servidor não pode atender aos requisitos do campo de cabeçalho de solicitação Expect. ',
  /**
   * h418: 
   *
   * Empty
   * Sou uma chaleira: Qualquer tentativa de preparar café com uma chaleira deve resultar no código de erro "418 Sou uma chaleira". O corpo da entidade resultante PODE ser curto e robusto. 
   */
  h418 = 'Sou uma chaleira: Qualquer tentativa de preparar café com uma chaleira deve resultar no código de erro "418 Sou uma chaleira". O corpo da entidade resultante PODE ser curto e robusto. ',
  /**
   * h421: RFC 7540 9.1.2
   * https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
   * Pedido mal direcionado: O pedido foi direcionado para um servidor que não é capaz de produzir uma resposta. Este pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema e autoridade que estão incluídas no URI do pedido. 
   */
  h421 = 'Pedido mal direcionado: O pedido foi direcionado para um servidor que não é capaz de produzir uma resposta. Este pode ser enviado por um servidor que não está configurado para produzir respostas para a combinação de esquema e autoridade que estão incluídas no URI do pedido. ',
  /**
   * h422: RFC 4918 11.2
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.2
   * Entidade não processável: A solicitação estava formatada corretamente, mas não pode ser processada na sua forma atual. Usada frequentemente quando os parâmetros especificados não passam nos erros de validação. 
   */
  h422 = 'Entidade não processável: A solicitação estava formatada corretamente, mas não pode ser processada na sua forma atual. Usada frequentemente quando os parâmetros especificados não passam nos erros de validação. ',
  /**
   * h423: RFC 4918 11.3
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.3
   * Bloqueado: O recurso solicitado foi encontrado, mas está bloqueado e não será retornado. 
   */
  h423 = 'Bloqueado: O recurso solicitado foi encontrado, mas está bloqueado e não será retornado. ',
  /**
   * h424: RFC 4918 11.4
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.4
   * Falha de dependência: A solicitação falhou devido à falha de uma solicitação anterior. 
   */
  h424 = 'Falha de dependência: A solicitação falhou devido à falha de uma solicitação anterior. ',
  /**
   * h426: RFC 2817 and RFC 7231 6.5.15
   * https://datatracker.ietf.org/doc/html/rfc2817
   * Atualização necessária: O cliente deve repetir a solicitação utilizando um protocolo atualizado, como o TLS 1.0. 
   */
  h426 = 'Atualização necessária: O cliente deve repetir a solicitação utilizando um protocolo atualizado, como o TLS 1.0. ',
  /**
   * h428: RFC 6585 3
   * https://datatracker.ietf.org/doc/html/rfc6585#section-3
   * Pré-condição exigida: O servidor de origem requer que a solicitação seja condicional. 
   */
  h428 = 'Pré-condição exigida: O servidor de origem requer que a solicitação seja condicional. ',
  /**
   * h429: RFC 6585 4
   * https://datatracker.ietf.org/doc/html/rfc6585#section-4
   * Muitas solicitações: O usuário enviou muitas solicitações em um determinado período de tempo ("limitação de taxa"). 
   */
  h429 = 'Muitas solicitações: O usuário enviou muitas solicitações em um determinado período de tempo ("limitação de taxa"). ',
  /**
   * h431: RFC 6585 5
   * https://datatracker.ietf.org/doc/html/rfc6585#section-5
   * Campos de cabeçalho da solicitação muito grandes: O servidor não está disposto a processar a solicitação porque seus campos de cabeçalho são muito grandes. 
   */
  h431 = 'Campos de cabeçalho da solicitação muito grandes: O servidor não está disposto a processar a solicitação porque seus campos de cabeçalho são muito grandes. ',
  /**
   * h440: 
   *
   * Empty
   * Tempo limite de login (Microsoft): Uma extensão da Microsoft. Indica que a sua sessão expirou. 
   */
  h440 = 'Tempo limite de login (Microsoft): Uma extensão da Microsoft. Indica que a sua sessão expirou. ',
  /**
   * h444: 
   *
   * Empty
   * Sem resposta (Nginx): Usado nos logs do Nginx para indicar que o servidor não retornou nenhuma informação ao cliente e fechou a conexão (útil como um impedimento para malware em cenários de protocolo de transferência de hipertexto). 
   */
  h444 = 'Sem resposta (Nginx): Usado nos logs do Nginx para indicar que o servidor não retornou nenhuma informação ao cliente e fechou a conexão (útil como um impedimento para malware em cenários de protocolo de transferência de hipertexto). ',
  /**
   * h449: 
   *
   * Empty
   * Tente Novamente Com (Microsoft): Uma extensão da Microsoft. A solicitação deve ser reenviada após realizar a ação apropriada. 
   */
  h449 = 'Tente Novamente Com (Microsoft): Uma extensão da Microsoft. A solicitação deve ser reenviada após realizar a ação apropriada. ',
  /**
   * h450: 
   *
   * Empty
   * Bloqueado pelo Controle Parental do Windows (Microsoft): uma extensão da Microsoft. Este erro é dado quando o Controle Parental do Windows está ativado e bloqueando o acesso à página da web especificada. 
   */
  h450 = 'Bloqueado pelo Controle Parental do Windows (Microsoft): uma extensão da Microsoft. Este erro é dado quando o Controle Parental do Windows está ativado e bloqueando o acesso à página da web especificada. ',
  /**
   * h451: RFC 7725 3
   * https://datatracker.ietf.org/doc/html/rfc7725#section-3
   * Redirecionamento (Microsoft): Utilizado no Exchange ActiveSync se existe um servidor mais eficiente a ser usado ou se o servidor não puder acessar a caixa de correio dos usuários. 
   */
  h451 = 'Redirecionamento (Microsoft): Utilizado no Exchange ActiveSync se existe um servidor mais eficiente a ser usado ou se o servidor não puder acessar a caixa de correio dos usuários. ',
  /**
   * h494: 
   *
   * Empty
   * Cabeçalho da solicitação muito grande (Nginx): Código interno do Nginx, semelhante a 431, mas introduzido em uma versão anterior em 0.9.4 (em 21 de janeiro de 2011). 
   */
  h494 = 'Cabeçalho da solicitação muito grande (Nginx): Código interno do Nginx, semelhante a 431, mas introduzido em uma versão anterior em 0.9.4 (em 21 de janeiro de 2011). ',
  /**
   * h495: 
   *
   * Empty
   * Erro de Certificado (Nginx): Código interno do Nginx utilizado quando ocorreu um erro de certificado do cliente SSL para distingui-lo dos 4XX em um log e redirecionamento da página de erro. 
   */
  h495 = 'Erro de Certificado (Nginx): Código interno do Nginx utilizado quando ocorreu um erro de certificado do cliente SSL para distingui-lo dos 4XX em um log e redirecionamento da página de erro. ',
  /**
   * h496: 
   *
   * Empty
   * No Cert (Nginx): Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro.  Sem certificado: Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro. 
   */
  h496 = 'No Cert (Nginx): Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro.  Sem certificado: Código interno do Nginx usado quando o cliente não forneceu o certificado para distingui-lo dos 4XX em um registro e redirecionamento da página de erro. ',
  /**
   * h497: 
   *
   * Empty
   * HTTP para HTTPS (Nginx): Código interno do Nginx utilizado para as solicitações HTTP puras enviadas para a porta HTTPS para distingui-lo dos 4XX em um log e uma redireção da página de erro. 
   */
  h497 = 'HTTP para HTTPS (Nginx): Código interno do Nginx utilizado para as solicitações HTTP puras enviadas para a porta HTTPS para distingui-lo dos 4XX em um log e uma redireção da página de erro. ',
  /**
   * h498: 
   *
   * Empty
   * Token expirado/inválido (Esri): Retornado pelo ArcGIS for Server. Um código 498 indica um token expirado ou inválido de outra forma. 
   */
  h498 = 'Token expirado/inválido (Esri): Retornado pelo ArcGIS for Server. Um código 498 indica um token expirado ou inválido de outra forma. ',
  /**
   * h499: 
   *
   * Empty
   * Token necessário (Esri): Retornado pelo ArcGIS for Server. Um código 499 indica que um token é necessário (se nenhum token foi enviado). 
   */
  h499 = 'Token necessário (Esri): Retornado pelo ArcGIS for Server. Um código 499 indica que um token é necessário (se nenhum token foi enviado). ',
  /**
   * h500: RFC 7231 6.6.1
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1
   * Erro interno do servidor: Um status genérico para um erro no próprio servidor. 
   */
  h500 = 'Erro interno do servidor: Um status genérico para um erro no próprio servidor. ',
  /**
   * h501: RFC 7231 6.6.2
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2
   * Não implementado: O servidor não pode responder à solicitação. Normalmente isso implica que o servidor possa possivelmente suportar a solicitação no futuro - caso contrário, um código de status 4xx pode ser mais apropriado. 
   */
  h501 = 'Não implementado: O servidor não pode responder à solicitação. Normalmente isso implica que o servidor possa possivelmente suportar a solicitação no futuro - caso contrário, um código de status 4xx pode ser mais apropriado. ',
  /**
   * h502: RFC 7231 6.6.3
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3
   * Portão ruim: O servidor está atuando como um proxy e não recebeu uma resposta aceitável do servidor ascendente. 
   */
  h502 = 'Portão ruim: O servidor está atuando como um proxy e não recebeu uma resposta aceitável do servidor ascendente. ',
  /**
   * h503: RFC 7231 6.6.4
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4
   * Serviço indisponível: O servidor está fora do ar e não está aceitando solicitações. 
   */
  h503 = 'Serviço indisponível: O servidor está fora do ar e não está aceitando solicitações. ',
  /**
   * h504: RFC 7231 6.6.5
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5
   * Timeout do Gateway: O servidor está atuando como um proxy e não recebeu uma resposta do servidor upstream. 
   */
  h504 = 'Timeout do Gateway: O servidor está atuando como um proxy e não recebeu uma resposta do servidor upstream. ',
  /**
   * h505: RFC 7231 6.6.6
   * https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6
   * Versão HTTP não suportada: O servidor não suporta a versão do protocolo HTTP especificada na solicitação. 
   */
  h505 = 'Versão HTTP não suportada: O servidor não suporta a versão do protocolo HTTP especificada na solicitação. ',
  /**
   * h506: RFC 2295 8.1
   * https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
   * A Variant também negocia: A negociação de conteúdo transparente para a solicitação resulta em uma referência circular. 
   */
  h506 = 'A Variant também negocia: A negociação de conteúdo transparente para a solicitação resulta em uma referência circular. ',
  /**
   * h507: RFC 4918 11.5
   * https://datatracker.ietf.org/doc/html/rfc4918#section-11.5
   * Insuficiência de armazenamento: O usuário ou servidor não possui quota de armazenamento suficiente para atender à solicitação. 
   */
  h507 = 'Insuficiência de armazenamento: O usuário ou servidor não possui quota de armazenamento suficiente para atender à solicitação. ',
  /**
   * h508: RFC 5842 7.2
   * https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
   * Detectado loop: O servidor detectou um loop infinito na solicitação. 
   */
  h508 = 'Detectado loop: O servidor detectou um loop infinito na solicitação. ',
  /**
   * h509: 
   *
   * Empty
   * Limite de largura de banda excedido (extensão bw/limitada do Apache): Este código de status não é especificado em nenhum RFC. Seu uso é desconhecido. 
   */
  h509 = 'Limite de largura de banda excedido (extensão bw/limitada do Apache): Este código de status não é especificado em nenhum RFC. Seu uso é desconhecido. ',
  /**
   * h510: RFC 2774 7
   * https://datatracker.ietf.org/doc/html/rfc2774#section-7
   * Não estendido: São necessárias mais extensões ao pedido para que seja cumprido. 
   */
  h510 = 'Não estendido: São necessárias mais extensões ao pedido para que seja cumprido. ',
  /**
   * h511: RFC 6585 6
   * https://datatracker.ietf.org/doc/html/rfc6585#section-6
   * Autenticação de rede exigida: O cliente deve autenticar-se na rede antes de enviar solicitações. 
   */
  h511 = 'Autenticação de rede exigida: O cliente deve autenticar-se na rede antes de enviar solicitações. ',
  /**
   * h520: 
   *
   * Empty
   * Erro Desconhecido (Microsoft / CloudFlare): Este código de status não é especificado em nenhum RFC e é retornado por certos serviços, por exemplo, servidores Microsoft Azure e CloudFlare: "O erro 520 é essencialmente uma resposta 'coringa' quando o servidor de origem retorna algo inesperado ou algo que não é tolerado/interpretado (violação de protocolo ou resposta vazia)." 
   */
  h520 = 'Erro Desconhecido (Microsoft / CloudFlare): Este código de status não é especificado em nenhum RFC e é retornado por certos serviços, por exemplo, servidores Microsoft Azure e CloudFlare: "O erro 520 é essencialmente uma resposta \'coringa\' quando o servidor de origem retorna algo inesperado ou algo que não é tolerado/interpretado (violação de protocolo ou resposta vazia)." ',
  /**
   * h521: 
   *
   * Empty
   * Web Server Is Down (CloudFlare): O servidor original recusou a conexão da CloudFlare. 
   */
  h521 = 'Web Server Is Down (CloudFlare): O servidor original recusou a conexão da CloudFlare. ',
  /**
   * h522: 
   *
   * Empty
   * Tempo limite de conexão (CloudFlare): CloudFlare não conseguiu negociar um handshake TCP com o servidor de origem. 
   */
  h522 = 'Tempo limite de conexão (CloudFlare): CloudFlare não conseguiu negociar um handshake TCP com o servidor de origem. ',
  /**
   * h523: 
   *
   * Empty
   * Origem Inatingível (CloudFlare): CloudFlare não pôde atingir o servidor de origem; por exemplo, se os registros DNS do servidor de origem estiverem incorretos. 
   */
  h523 = 'Origem Inatingível (CloudFlare): CloudFlare não pôde atingir o servidor de origem; por exemplo, se os registros DNS do servidor de origem estiverem incorretos. ',
  /**
   * h524: 
   *
   * Empty
   * Ocorreu um tempo limite (CloudFlare): CloudFlare conseguiu estabelecer uma conexão TCP com o servidor de origem, mas não recebeu uma resposta HTTP oportuna. 
   */
  h524 = 'Ocorreu um tempo limite (CloudFlare): CloudFlare conseguiu estabelecer uma conexão TCP com o servidor de origem, mas não recebeu uma resposta HTTP oportuna. ',
  /**
   * h525: 
   *
   * Empty
   * Falha na negociação de SSL Handshake (CloudFlare): CloudFlare não conseguiu negociar um handshake SSL/TLS com o servidor de origem. 
   */
  h525 = 'Falha na negociação de SSL Handshake (CloudFlare): CloudFlare não conseguiu negociar um handshake SSL/TLS com o servidor de origem. ',
  /**
   * h526: 
   *
   * Empty
   * Certificado SSL Inválido (CloudFlare): CloudFlare não pôde validar o certificado SSL/TLS que o servidor de origem apresentou. 
   */
  h526 = 'Certificado SSL Inválido (CloudFlare): CloudFlare não pôde validar o certificado SSL/TLS que o servidor de origem apresentou. ',
  /**
   * h527: 
   *
   * Empty
   * Erro Railgun (CloudFlare): A solicitação expirou ou falhou após a conexão WAN ter sido estabelecida. 
   */
  h527 = 'Erro Railgun (CloudFlare): A solicitação expirou ou falhou após a conexão WAN ter sido estabelecida. '
}
