
## 🌐 @http-status-codes/i18n-ja


### @http-status-codes/i18n-ja とは何ですか？ 


それは 21 種類の国の言語の HTTP ステータスコードメッセージに関する情報を提供しています📜。HTTP ステータスコードに関する事項を処理する必要があるとき、試してみてください。非常に簡単です。 


**🚀 サポート：**
[x] HttpStatusText 列挙型は、英語の定数および h{ステータスコードの数値}の方式でステータスコードに対応する理由フレーズを取得できます。たとえば `HttpStatusText.OK` または `HttpStatusText.h200` です。
[x] HttpStatusDescription 列挙型は、英語の定数および h{ステータスコードの数値}の方式でステータスコードに対応する詳細な説明を取得できます。たとえば `HttpStatusDescription.OK` または `HttpStatusDescription.h200` です。
[x] HttpStatusCode 列挙型は、英語の定数および h{ステータスコードの数値}の方式でステータスコードに対応する数値を取得できます。たとえば `HttpStatusCode.OK` または `HttpStatusCode.h200` です。
[x] `isCodeOrTextValid` を通じて、ステータスコード、ステータスコードの理由フレーズが有効かどうかを検証できます。たとえば `isCodeOrTextValid(200)` または `isCodeOrTextValid('OK')` はどちらも true です。
[x] `getStatusInfo` を通じて、指定されたステータスコードまたはステータスコードの理由フレーズに対応する完全な情報、たとえばステータスコード、理由フレーズ、詳細な説明、成功かどうかなどの情報を取得できます。
[x] `isStatusSuccessful` を通じ


なぜそれをするのか？ 


http-status-codes ライブラリ自体は国際化（i18n）🌍をサポートしておらず、私のプロジェクトではサポートが必要です。GPT にどのようなライブラリが私のニーズを満たすことができるかを尋ねましたが、GPT はでたらめを言って、@http-status-codes/i18n というものがあると教えてくれましたが、結局このいわゆる @http-status-codes/i18n は見つかりませんでした。そこで私はこれを作りました～ 


### 💉 参考インスピレーション 


- https://github.com/nodejs/node/blob/main/lib/_http_server.js
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#1xx_informational_response
- https://kapeli.com/cheat_sheets/HTTP_Status_Codes.docset/Contents/Resources/Documents/index
- https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1 


### 🚀 技術選択 


1. 「nx」を使って迅速に開発し、nx の足場を使ってプロジェクトエンジニアリングを迅速に生成したいです
2. 「ts-morph」を使ってコードを生成したいです
3. 「飛書/多維テーブル/フィールドショートカット」を使って AI 翻訳を行いたいです
4.  XLSX から JSON に変換し、翻訳したテーブルを使って JSON の設定を生成したいです
5.  JSON から Project に変換し、JSON の設定を使って多言語のプロジェクトを生成したいです 


### 🔥 利点 


✂️ 軽量級： ES6、TS をサポート、拡張性が良く、互換性が良く、マルチパッケージ対応、必要に応じて使用できます。

、、、

⚡ 強力：多国語言をサポート、最多 21 カ国をサポート、依存パッケージは様々なリソース形式「'cjs', 'esm', 'es', 'amd', 'iife', 'umd','system'」をサポート、複数回の圧縮、圧縮効果が良いです。

、、、

⚙️ ️シンプル：細粒度の API と粗粒度の API があり、使いやすいです。 


### 📚 素早く使用 


ただ以下のいずれかのコマンドを実行するだけで正常にインストールできます。具体的なインストールコマンドは現在のプロジェクト内の依存環境によりますが、デフォルトで npm を使用します。 



```bash
npm install @http-status-codes/i18n-ja
yarn add @http-status-codes/i18n-ja
pnpm i @http-status-codes/i18n-ja
```


```javascript
import {
  getSimpleStatusMessage,
  getStatusMessage,
  getStatusText,
} from "@http-status-codes/i18n-ja";

getStatusText(HttpStatusCode.OK) // OK
getSimpleStatusMessage(HttpStatusCode.OK) // 200 OK
getStatusMessage(HttpStatusCode.OK) // 200 OK: 成功した HTTP リクエストの標準的な応答。
``` 


###  機能リスト 



| API                                               | Result                                                                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| HttpStatusCode.ACCEPTED                           | 202                                                                                                           |
| HttpStatusCodeByCode.h100                         | 100                                                                                                           |
| HttpStatusText.OK                                 | OK                                                                                                            |
| HttpStatusTextByCode.h200                         | OK                                                                                                            |
| HttpStatusDescription.ACCEPTED                    | 受け入れ済み: リクエストが受け入れられていますが、まだ処理されていません。このコードはリクエストが正常に処理されることを保証しません。                                          |
| HttpStatusDescriptionByCode.h200                  | OK ：HTTP 要求の成功に対する標準的な応答
成功 ：標準的な成功した HTTP 要求の応答                                                              |
| isCodeOrTextValid(200)                            | true                                                                                                          |
| isCodeOrTextValid('OK')                           | true                                                                                                          |
| isCodeOrTextValid(HttpStatusCodeByCode.h100)      | true                                                                                                          |
| isCodeOrTextValid(HttpStatusCode.ACCEPTED)        | true                                                                                                          |
| isCodeOrTextValid(HttpStatusText.OK)              | true                                                                                                          |
| isCodeOrTextValid(HttpStatusTextByCode.h200)      | true                                                                                                          |
| getStatusInfo(200)                                | {"code":200,"message":"OK ：HTTP 要求の成功に対する標準的な応答\n成功 ：標準的な成功した HTTP 要求の応答 ","success":true}                    |
| getStatusInfo('OK')                               | {"code":200,"message":"OK ：HTTP 要求の成功に対する標準的な応答\n成功 ：標準的な成功した HTTP 要求の応答 ","success":true}                    |
| getStatusInfo(HttpStatusCodeByCode.h100)          | {"code":100,"message":"続ける：サーバはリクエストヘッダを受信しており、クライアントはリクエストボディの送信を続けるべきです。 ","success":true}                  |
| getStatusInfo(HttpStatusCode.ACCEPTED)            | {"code":202,"message":"受け入れ済み: リクエストが受け入れられていますが、まだ処理されていません。このコードはリクエストが正常に処理されることを保証しません。 ","success":true} |
| getStatusInfo(HttpStatusText.OK)                  | {"code":200,"message":"OK ：HTTP 要求の成功に対する標準的な応答\n成功 ：標準的な成功した HTTP 要求の応答 ","success":true}                    |
| getStatusInfo(HttpStatusTextByCode.h200)          | {"code":200,"message":"OK ：HTTP 要求の成功に対する標準的な応答\n成功 ：標準的な成功した HTTP 要求の応答 ","success":true}                    |
| isStatusSuccessful(200)                           | true                                                                                                          |
| isStatusSuccessful('OK')                          | true                                                                                                          |
| isStatusSuccessful(HttpStatusCodeByCode.h100)     | true                                                                                                          |
| isStatusSuccessful(HttpStatusCode.ACCEPTED)       | true                                                                                                          |
| isStatusSuccessful(HttpStatusText.OK)             | true                                                                                                          |
| isStatusSuccessful(HttpStatusTextByCode.h200)     | true                                                                                                          |
| getSimpleStatusMessage(200)                       | 200 OK                                                                                                        |
| getSimpleStatusMessage('OK')                      | 200 OK                                                                                                        |
| getSimpleStatusMessage(HttpStatusCodeByCode.h100) | 100 続ける                                                                                                       |
| getSimpleStatusMessage(HttpStatusCode.ACCEPTED)   | 202 受け入れ済み: リクエストが受け入れられていますが、まだ処理されていません。このコードはリクエストが正常に処理されることを保証しません。                                      |
| getSimpleStatusMessage(HttpStatusText.OK)         | 200 OK                                                                                                        |
| getSimpleStatusMessage(HttpStatusTextByCode.h200) | 200 OK                                                                                                        |
| getStatusMessage(200)                             | 200 OK ：HTTP 要求の成功に対する標準的な応答
成功 ：標準的な成功した HTTP 要求の応答                                                          |
| getStatusMessage('OK')                            | 200 OK ：HTTP 要求の成功に対する標準的な応答
成功 ：標準的な成功した HTTP 要求の応答                                                          |
| getStatusMessage(HttpStatusCodeByCode.h100)       | 100 続ける：サーバはリクエストヘッダを受信しており、クライアントはリクエストボディの送信を続けるべきです。                                                       |
| getStatusMessage(HttpStatusCode.ACCEPTED)         | 202 受け入れ済み: リクエストが受け入れられていますが、まだ処理されていません。このコードはリクエストが正常に処理されることを保証しません。                                      |
| getStatusMessage(HttpStatusText.OK)               | 200 OK ：HTTP 要求の成功に対する標準的な応答
成功 ：標準的な成功した HTTP 要求の応答                                                          |
| getStatusMessage(HttpStatusTextByCode.h200)       | 200 OK ：HTTP 要求の成功に対する標準的な応答
成功 ：標準的な成功した HTTP 要求の応答                                                          |
| getStatusCode('OK')                               | 200                                                                                                           |
| getStatusCode(HttpStatusText.OK)                  | 200                                                                                                           |
| getStatusCode(HttpStatusTextByCode.h200)          | 200                                                                                                           |
| getStatusText(200)                                | OK                                                                                                            |
| getStatusText(HttpStatusCodeByCode.h100)          | Continue                                                                                                      |
| getStatusText(HttpStatusCode.ACCEPTED)            | Accepted                                                                                                      |


### ✨ 効果展示 


現在の状態コード情報とそれに対応する詳細な説明を表示できるシンプルな表示ページが欲しいです。これにより、ユーザーが確認しやすくなります。\
、現在はコードを確認できます：、https://github1s.com/aiyoudiao/http-status-codes-i18n/blob/HEAD/packages/i18n-en/src/lib/helpers.ts 


### 📦 All Packages 


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
