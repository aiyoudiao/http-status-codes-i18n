/**
 * 创建 helpers.ts 文件
 */

import {
  Writers,
  VariableDeclarationKind,
  Project,
  StructureKind,
} from 'ts-morph'; /* https://ts-morph.com/ */

export const generatedHelperFiles = (
  project: Project,
  dir: string,
  comment: string
) => {
  console.log(`Generate ${dir} helper files...`);

  const helpersFile = project.createSourceFile(
    `${dir}/helpers.ts`,
    {
      statements: [
        {
          kind: StructureKind.VariableStatement,
          isExported: true,
          declarationKind: VariableDeclarationKind.Const,
          docs: [
            {
              description:
                'Key-value mapping of HTTP status codes and HTTP status texts.',
            },
          ],
          declarations: [
            {
              name: 'statusCodeToStatusTextMap',
              type: 'Record<number, string>',
              initializer: `Object.keys(
                              HttpStatusCodeByCode
                            )
                              .filter((name) => name.includes('h'))
                              .reduce(
                                (map, cur) => ({
                                  ...map,
                                  [HttpStatusCodeByCode[cur as never]]: HttpStatusTextByCode[cur as never],
                                }),
                                {}
                              )`,
            },
          ],
        },
        {
          kind: StructureKind.VariableStatement,
          isExported: true,
          declarationKind: VariableDeclarationKind.Const,
          docs: [
            {
              description:
                'Key-value mapping of HTTP status codes and HTTP status descriptions.',
            },
          ],
          declarations: [
            {
              name: 'statusCodeToStatusDescriptionMap',
              type: 'Record<number, string>',
              initializer: `Object.keys(
                              HttpStatusCodeByCode
                            )
                              .filter((name) => name.includes('h'))
                              .reduce(
                                (map, cur) => ({
                                  ...map,
                                  [HttpStatusCodeByCode[cur as never]]: HttpStatusDescriptionByCode[cur as never],
                                }),
                                {}
                              )`,
            },
          ],
        },
        {
          kind: StructureKind.VariableStatement,
          isExported: true,
          declarationKind: VariableDeclarationKind.Const,
          docs: [
            {
              description:
                'Key-value mapping of HTTP status texts and HTTP status codes.',
            },
          ],
          declarations: [
            {
              name: 'statusTextToStatusCodeMap',
              type: 'Record<string, number>',
              initializer: `Object.keys(
                              HttpStatusTextByCode
                            )
                              .filter((name) => name.includes('h'))
                              .reduce(
                                (map, cur) => ({
                                  ...map,
                                  [HttpStatusTextByCode[cur as never]]: HttpStatusCodeByCode[cur as never],
                                }),
                                {}
                              )`,
            },
          ],
        },
        {
          kind: StructureKind.VariableStatement,
          isExported: true,
          declarationKind: VariableDeclarationKind.Const,
          docs: [
            {
              description:
                'Key-value mapping of HTTP status texts and HTTP status descriptions.',
            },
          ],
          declarations: [
            {
              name: 'statusTextToStatusDescriptionMap',
              type: 'Record<string, string>',
              initializer: `Object.keys(
                              HttpStatusTextByCode
                            )
                              .filter((name) => name.includes('h'))
                              .reduce(
                                (map, cur) => ({
                                  ...map,
                                  [HttpStatusTextByCode[cur as never]]: HttpStatusDescriptionByCode[cur as never],
                                }),
                                {}
                              )`,
            },
          ],
        },
      ],
    },
    {
      overwrite: true,
    }
  );

  helpersFile.addImportDeclaration({
    namedImports: ['HttpStatusCode', 'HttpStatusCodeByCode'],
    moduleSpecifier: './status-code',
  });

  helpersFile.addImportDeclaration({
    namedImports: ['HttpStatusText', 'HttpStatusTextByCode'],
    moduleSpecifier: './status-text',
  });

  helpersFile.addImportDeclaration({
    namedImports: ['HttpStatusDescriptionByCode'],
    moduleSpecifier: './status-description',
  });

  helpersFile.addTypeAlias({
    isExported: true,
    name: 'StatusInfo',
    type: '{ code: number, message: string, success: boolean}',
  });

  helpersFile.addFunctions([
    {
      name: 'isCodeOrTextValid',
      returnType: 'boolean',
      parameters: [
        {
          name: 'codeOrText',
          type: 'HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
        },
      ],
      statements: [
        `return codeOrText in statusCodeToStatusTextMap || codeOrText in statusTextToStatusCodeMap;`,
      ],
      isExported: true,
      docs: [
        {
          description:
            'Returns whether the provided status code or status text is valid or not.',
          tags: [
            {
              tagName: 'example',
              text: `isCodeOrTextValid(200) -> true
isCodeOrTextValid('OK') -> true
`,
            },
            {
              tagName: 'param',
              text: 'codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
            },
            {
              tagName: 'returns',
              text: 'yesOrNo: boolean',
            },
          ],
        },
      ],
    },
    {
      name: 'getStatusInfo',
      returnType: `StatusInfo`,
      parameters: [
        {
          name: 'codeOrText',
          type: 'HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
        },
      ],
      statements: [
        `
        if (!isCodeOrTextValid(codeOrText)) {
          throw new Error(\`\${codeOrText} is not a known HTTP status code or status text.\`);
        }

        const [code, message] = [
          statusTextToStatusCodeMap[codeOrText] || codeOrText as number,
          statusCodeToStatusDescriptionMap[codeOrText as number] || statusTextToStatusDescriptionMap[codeOrText]
        ]

        return {
          code,
          message,
          success: code < 400
        }`,
      ],
      isExported: true,
      docs: [
        {
          description:
            'Returns an object containing information about the provided status code or status text.',
          tags: [
            {
              tagName: 'example',
              text: `getStatusInfo(200) -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
getStatusInfo('OK') -> { code: 200, message: 'OK：The standard response for successful HTTP requests.', success: true}
`,
            },
            {
              tagName: 'param',
              text: 'codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
            },
            {
              tagName: 'returns',
              text: 'StatusInfo: { code: number, message: string, success: boolean}',
            },
          ],
        },
      ],
    },
    {
      name: 'isStatusSuccessful',
      returnType: 'boolean',
      parameters: [
        {
          name: 'codeOrText',
          type: 'HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
        },
      ],
      statements: [
        `
        try{
          return getStatusInfo(codeOrText).success;
        } catch (e) {
          return false;
        }`,
      ],
      isExported: true,
      docs: [
        {
          description:
            'Returns whether the provided status code or status text is a successful status or not.',
          tags: [
            {
              tagName: 'example',
              text: `isStatusSuccessful(200) -> true
isStatusSuccessful('OK') -> true
isStatusSuccessful(400) -> false
isStatusSuccessful('Bad request') -> false
`,
            },
            {
              tagName: 'param',
              text: 'codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
            },
            {
              tagName: 'returns',
              text: 'successful: boolean',
            },
          ],
        },
      ],
    },
    {
      name: 'getSimpleStatusMessage',
      returnType: 'string',
      parameters: [
        {
          name: 'codeOrText',
          type: 'HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
        },
      ],
      statements: [
        `const statusInfo = getStatusInfo(codeOrText)
        return \`\${statusInfo.code} \${statusInfo.message.split('：')[0]}\`;
        `,
      ],
      isExported: true,
      docs: [
        {
          description:
            'Returns a string containing the provided status code and simple message.',
          tags: [
            {
              tagName: 'example',
              text: `getSimpleStatusMessage(200) -> 200 OK
getSimpleStatusMessage('OK') -> 200 OK
`,
            },
            {
              tagName: 'param',
              text: 'codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
            },
            {
              tagName: 'returns',
              text: 'simpleStatusMessage: string',
            },
          ],
        },
      ],
    },
    {
      name: 'getStatusMessage',
      returnType: 'string',
      parameters: [
        {
          name: 'codeOrText',
          type: 'HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
        },
      ],
      statements: [
        `const statusInfo = getStatusInfo(codeOrText)
        return \`\${statusInfo.code} \${statusInfo.message}\`;
        `,
      ],
      isExported: true,
      docs: [
        {
          description:
            'Returns a string containing the provided status code and message.',
          tags: [
            {
              tagName: 'example',
              text: `getStatusMessage(200) -> 200 OK：The standard response for successful HTTP requests.
getStatusMessage('OK') -> 200 OK：The standard response for successful HTTP requests.
`,
            },
            {
              tagName: 'param',
              text: 'codeOrText: HttpStatusCode | HttpStatusCodeByCode | HttpStatusText | HttpStatusTextByCode',
            },
            {
              tagName: 'returns',
              text: 'statusMessage: string',
            },
          ],
        },
      ],
    },
    {
      name: 'getStatusCode',
      returnType: 'HttpStatusCode',
      parameters: [
        {
          name: 'text',
          type: 'HttpStatusText',
        },
      ],
      statements: [
        ` const code = statusTextToStatusCodeMap[\`\${text}\`]
          if (!code) {
            throw new Error(\`\${text} is not a known HTTP status text.\`);
          }
          return code;`,
      ],
      isExported: true,
      docs: [
        {
          description: `Returns the status code for the given http status text.
If the given http status text does not exist, undefined is returned.`,
          tags: [
            {
              tagName: 'example',
              text: `getStatusCode('OK') -> 200`,
            },
            {
              tagName: 'param',
              text: 'text: HttpStatusText',
            },
            {
              tagName: 'returns',
              text: 'statusCode: HttpStatusCode',
            },
          ],
        },
      ],
    },
    {
      name: 'getStatusText',
      returnType: 'string',
      parameters: [
        {
          name: 'code',
          type: 'HttpStatusCode',
        },
      ],
      statements: [
        ` const text = statusCodeToStatusTextMap[\`\${code}\`]
          if (!text) {
            throw new Error(\`\${code} is not a known HTTP status code.\`);
          }
          return text;`,
      ],
      isExported: true,
      docs: [
        {
          description: `Returns the status text for the given http status code.
If the given http status code does not exist, undefined is returned.`,
          tags: [
            {
              tagName: 'example',
              text: `getStatusCode('200') -> OK`,
            },
            {
              tagName: 'param',
              text: 'code: HttpStatusCode',
            },
            {
              tagName: 'returns',
              text: 'statusText: HttpStatusText',
            },
          ],
        },
      ],
    },
  ]);

  helpersFile.insertStatements(0, comment);
  helpersFile.formatText({
    ensureNewLineAtEndOfFile: true,
  });

  console.log(`Generated all helper files`);
};
