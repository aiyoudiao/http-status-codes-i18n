
## 🌐 @http-status-codes/i18n-pt


### @http-status-codes/i18n-pt 是什么? 


Ele fornece informações relacionadas às mensagens do código de status HTTP em 21 idiomas nacionais 📜. Quando você precisar lidar com questões relacionadas ao código de status HTTP, pode experimentá-lo. É muito simples. 


**🚀 Suporte: **
,[x] Enum HttpStatusText, suporta a obtenção da frase de motivo correspondente ao código de status por meio de constantes em inglês e h{número do código de status}. Por exemplo, `HttpStatusText.OK` ou `HttpStatusText.h200`.
,[x] Enum HttpStatusDescription, suporta a obtenção da descrição detalhada correspondente ao código de status por meio de constantes em inglês e h{número do código de status}. Por exemplo, `HttpStatusDescription.OK` ou `HttpStatusDescription.h200`.
,[x] Enum HttpStatusCode, suporta a obtenção do valor numérico correspondente ao código de status por meio de constantes em inglês e h{número do código de status}. Por exemplo, `HttpStatusCode.OK` ou `HttpStatusCode.h200`.
,[x] Suporta a verificação da validade do código de status e da frase de motivo do código de status por meio de `isCodeOrTextValid`. Por exemplo, `isCodeOrTextValid(200)` ou `isCodeOrTextValid('OK')`, ambos são verdadeiros.
,[x] Suporta a obtenção das informações completas correspondentes ao código de status especificado ou à frase de motivo do código de status por meio de `getStatusInfo`, como código de status, frase de motivo, descrição detalhada e se é bem-sucedido, etc.
,[x] Suporta a obtenção diretamente se o código de status atual é normal por meio de `isStatusSuccessful`.
,[x] Suporta a obtenção da mensagem simples do código de status por meio do método `getSimpleStatusMessage`, como `200 OK`.
,[x] Suporta a obtenção da mensagem simples do código de status especificado por meio do método `getStatusMessage`, como `200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.`
,[x] Suporta a obtenção da mensagem simples do código de status especificado por meio do método `getStatusCode`, como `getStatusCode('OK') -> 200`.
,[x] Suporta a obtenção da frase de motivo do código de status especificado por meio do método `getStatusText`, como `getStatusText(20


### ⚔️ Por que fazer isso? 


A biblioteca http-status-codes em si não suporta internacionalização (i18n) 🌍, e meu projeto precisa suportar. Perguntei ao GPT quais bibliotecas poderiam atender às minhas necessidades, ele falou besteira, me disse que havia um @http-status-codes/i18n, mas finalmente não encontrei esse suposto @http-status-codes/i18n, então eu o fiz ~ 


### 💉  Inspiração de referência 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 Seleção de Tecnologia 


1. Eu quero desenvolver rapidamente com `nx` e, então, usar o andaime do nx para gerar rapidamente o projeto de engenharia
, 2. Eu quero gerar código com `ts-morph`
, 3. Eu quero usar `Feishu / Tabela Multidimensional / Atalhos de Campo` para fazer a tradução AI
, 4. Eu quero converter XLSX para JSON, e então usar a tabela traduzida para gerar a configuração JSON
, 5. Eu quero converter JSON para Projeto e, então, usar a configuração JSON para gerar o projeto multilíngue 


### 🔥 Vantagens 


✂️ Leve: ES6, TS, boa extensibilidade, boa compatibilidade, suporte a múltiplos pacotes, uso sob demanda. 

⚡ Forte: Suporte a múltiplas línguas, suporta até 21 países, pacotes de dependência suportam vários formatos de recursos `'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'`, compressão múltipla, bom efeito de compressão. 

⚙️ Simples: Há APIs de granularidade fina e de granularidade grossa, é muito conveniente de usar. 


### 📚 Uso rápido 


Apenas é necessário executar qualquer um dos seguintes comandos para instalar normalmente. O comando de instalação específico depende do ambiente de dependência do seu projeto atual. Use o npm por padrão. 



```bash
npm install @http-status-codes/i18n-pt
yarn add @http-status-codes/i18n-pt
pnpm i @http-status-codes/i18n-pt
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-pt";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.
``` 


### ⚡ Lista de funções 



| API                                               | Result                                                                                                                                                                          |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                                                                                             |
| HttpStatusCodeByCode.h100                         | 100                                                                                                                                                                             |
| HttpStatusText.OK                                 | OK                                                                                                                                                                              |
| HttpStatusTextByCode.h200                         | OK                                                                                                                                                                              |
| HttpStatusDescription.ACCEPTED                    | Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso.                                          |
| HttpStatusDescriptionByCode.h200                  | OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                     |
| isCodeOrTextValid(200)                            | true                                                                                                                                                                            |
| isCodeOrTextValid('OK')                           | true                                                                                                                                                                            |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                                                                                            |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                                                                                            |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                                                                                            |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                                                                                            |
| getStatusInfo(200)                                | {"code":200,"message":"OK: A resposta padrão para solicitações HTTP bem-sucedidas. ","success":true}                                                                            |
| getStatusInfo('OK')                               | {"code":200,"message":"OK: A resposta padrão para solicitações HTTP bem-sucedidas. ","success":true}                                                                            |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação. ","success":true}          |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso. ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK: A resposta padrão para solicitações HTTP bem-sucedidas. ","success":true}                                                                            |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK: A resposta padrão para solicitações HTTP bem-sucedidas. ","success":true}                                                                            |
| isStatusSuccessful(200)                           | true                                                                                                                                                                            |
| isStatusSuccessful('OK')                          | true                                                                                                                                                                            |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                                                                                            |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                                                                                            |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                                                                                            |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                                                                                            |
| getSimpleStatusMessage(200)                       | 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                 |
| getSimpleStatusMessage('OK')                      | 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                 |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação.                                               |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso.                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                 |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                 |
| getStatusMessage(200)                             | 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                 |
| getStatusMessage('OK')                            | 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                 |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 Continue: O servidor recebeu os cabeçalhos da solicitação e que o cliente deve prosseguir para enviar o corpo da solicitação.                                               |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 Aceito: A solicitação foi aceita, mas ainda não foi processada. Este código não garante que a solicitação seja processada com sucesso.                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                 |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK: A resposta padrão para solicitações HTTP bem-sucedidas.                                                                                                                 |
| getStatusCode('OK')                               | 200                                                                                                                                                                             |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                                                                                             |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                                                                                             |
| getStatusText(200)                                | OK                                                                                                                                                                              |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                                                                                        |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                                                                                        |


### ✨ Apresentação do efeito 


Gostaria de ter uma página de exibição simples que possa mostrar as informações do código de status atual e as descrições detalhadas correspondentes, de modo que seja conveniente para os usuários consultarem. \
, Atualmente, podemos primeiro verificar o código:, https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 Todos os Pacotes 
| Title | Description | Source Code | Package Name |
| ------- | -------------------- | ----------- | -------------------------- |
| zh | Chinese | packages/i18n-zh | [@http-status-codes/i18n-zh](https://www.npmjs.com/package/@http-status-codes/i18n-zh) |
| en | English | packages/i18n-en | [@http-status-codes/i18n-en](https://www.npmjs.com/package/@http-status-codes/i18n-en) |
| ja | Japanese | packages/i18n-ja | [@http-status-codes/i18n-ja](https://www.npmjs.com/package/@http-status-codes/i18n-ja) |
| th | Thai | packages/i18n-th | [@http-status-codes/i18n-th](https://www.npmjs.com/package/@http-status-codes/i18n-th) |
| hi | Hindi | packages/i18n-hi | [@http-status-codes/i18n-hi](https://www.npmjs.com/package/@http-status-codes/i18n-hi) |
| id | Indonesian | packages/i18n-id | [@http-status-codes/i18n-id](https://www.npmjs.com/package/@http-status-codes/i18n-id) |
| zh-Hant | Traditional Chinese | packages/i18n-zh-Hant | [@http-status-codes/i18n-zh-Hant](https://www.npmjs.com/package/@http-status-codes/i18n-zh-Hant) |
| fr | French | packages/i18n-fr | [@http-status-codes/i18n-fr](https://www.npmjs.com/package/@http-status-codes/i18n-fr) |
| es | Spanish | packages/i18n-es | [@http-status-codes/i18n-es](https://www.npmjs.com/package/@http-status-codes/i18n-es) |
| pt | Portuguese | packages/i18n-pt | [@http-status-codes/i18n-pt](https://www.npmjs.com/package/@http-status-codes/i18n-pt) |
| ko      | Korean                 | packages/i18n-ko | [@http-status-codes/i18n-ko](https://www.npmjs.com/package/@http-status-codes/i18n-ko) |
| vi      | Vietnamese               | packages/i18n-vi | [@http-status-codes/i18n-vi](https://www.npmjs.com/package/@http-status-codes/i18n-vi) |
| ru      | Russian                 | packages/i18n-ru | [@http-status-codes/i18n-ru](https://www.npmjs.com/package/@http-status-codes/i18n-ru) |
| de      | German                 | packages/i18n-de | [@http-status-codes/i18n-de](https://www.npmjs.com/package/@http-status-codes/i18n-de) |
| it      | Italian             | packages/i18n-it | [@http-status-codes/i18n-it](https://www.npmjs.com/package/@http-status-codes/i18n-it) |
| ar      | Arabic             | packages/i18n-ar | [@http-status-codes/i18n-ar](https://www.npmjs.com/package/@http-status-codes/i18n-ar) |
| pl      | Polish               | packages/i18n-pl | [@http-status-codes/i18n-pl](https://www.npmjs.com/package/@http-status-codes/i18n-pl) |
| tl      | Tagalog (Filipino) | packages/i18n-tl | [@http-status-codes/i18n-tl](https://www.npmjs.com/package/@http-status-codes/i18n-tl) |
| ms      | Malay              | packages/i18n-ms | [@http-status-codes/i18n-ms](https://www.npmjs.com/package/@http-status-codes/i18n-ms) |
| tr      | Turkish             | packages/i18n-tr | [@http-status-codes/i18n-tr](https://www.npmjs.com/package/@http-status-codes/i18n-tr) |
| hu      | Hungarian             | packages/i18n-hu | [@http-status-codes/i18n-hu](https://www.npmjs.com/package/@http-status-codes/i18n-hu) |
