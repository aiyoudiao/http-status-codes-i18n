import {
  Writers,
  VariableDeclarationKind,
  Project,
  StructureKind,
  EnumMemberStructure,
  OptionalKind,
  QuoteKind,
  IndentationText,
  NewLineKind,
} from 'ts-morph'; /* https://ts-morph.com/ */
import { constantCase } from 'change-case';

import httpStatusCodesInfosByEn from '../http-data-sanitization/http-status-codes-infos.en.json';
import httpStatusCodesInfosByZh from '../http-data-sanitization/http-status-codes-infos.zh.json';

interface HttpStatusCodeInfo {
  statusCode: string;
  statusText: string;
  statusDescription: string;
  statusComment: string;
  rfcLink: string;
}

const generateStatusTextMembers = (
  httpStatusCodesInfos: HttpStatusCodeInfo[]
): OptionalKind<EnumMemberStructure>[] =>
  httpStatusCodesInfos
    .map(
      (
        { statusCode, statusText, statusDescription, statusComment, rfcLink },
        i
      ) => {
        return [
          {
            name: constantCase(statusText),
            value: statusText,
            docs: [
              `${statusCode}: ${statusComment}\n${rfcLink}\n${statusDescription}`,
            ],
          },
        ];
      }
    )
    .flat();

const generateStatusCodeMembers = (
  httpStatusCodesInfos: HttpStatusCodeInfo[]
): OptionalKind<EnumMemberStructure>[] =>
  httpStatusCodesInfos
    .map(
      (
        { statusCode, statusText, statusDescription, statusComment, rfcLink },
        i
      ) => {
        return [
          {
            name: constantCase(statusText),
            value: Number(statusCode),
            docs: [
              `${constantCase(
                statusText
              )}: ${statusComment}\n${rfcLink}\n${statusDescription}`,
            ],
          },
        ];
      }
    )
    .flat();

const generateStatusDescriptionMembers = (
  httpStatusCodesInfos: HttpStatusCodeInfo[]
): OptionalKind<EnumMemberStructure>[] =>
  httpStatusCodesInfos
    .map(
      (
        { statusCode, statusText, statusDescription, statusComment, rfcLink },
        i
      ) => {
        return [
          {
            name: constantCase(statusText),
            value: statusDescription,
            docs: [
              `${constantCase(
                statusText
              )}: ${statusComment}\n${rfcLink}\n${statusDescription}`,
            ],
          },
        ];
      }
    )
    .flat();

const generatedMemberFiles = (
  project: Project,
  httpStatusCodesInfos: HttpStatusCodeInfo[],
  dir: string,
  comment: string
) => {
  console.log(`Generate ${dir} member files...`);

  const statusTextMembers = generateStatusTextMembers(httpStatusCodesInfos);
  const statusCodeMembers = generateStatusCodeMembers(httpStatusCodesInfos);
  const statusDescriptionMembers =
    generateStatusDescriptionMembers(httpStatusCodesInfos);

  const statusTextFile = project.createSourceFile(
    `${dir}/status-text.ts`,
    {
      statements: [
        {
          kind: StructureKind.Enum,
          name: 'HttpStatusText',
          isExported: true,
          members: statusTextMembers,
        },
      ],
    },
    {
      overwrite: true,
    }
  );
  const statusCodeFile = project.createSourceFile(
    `${dir}/status-code.ts`,
    {
      statements: [
        {
          kind: StructureKind.Enum,
          name: 'HttpStatusCode',
          isExported: true,
          members: statusCodeMembers,
        },
      ],
    },
    {
      overwrite: true,
    }
  );
  const statusDescriptionFile = project.createSourceFile(
    `${dir}/status-description.ts`,
    {
      statements: [
        {
          kind: StructureKind.Enum,
          name: 'HttpStatusDescription',
          isExported: true,
          members: statusDescriptionMembers,
        },
      ],
    },
    {
      overwrite: true,
    }
  );

  [statusTextFile, statusCodeFile, statusDescriptionFile].forEach(
    (sourceFile) => {
      sourceFile.insertStatements(0, comment);
      sourceFile.formatText({
        ensureNewLineAtEndOfFile: true,
      });
    }
  );

  console.log(`Generated all member files`);
};

// ----------------------------------------------------------------

const statusCodeToStatusText = (httpStatusCodesInfos: HttpStatusCodeInfo[]) =>
  Object.fromEntries(
    httpStatusCodesInfos.reduce(
      (
        map: Map<number, string>,
        { statusCode, statusText, statusDescription, statusComment, rfcLink }
      ) => {
        map.set(Number(statusCode), JSON.stringify(statusText));
        return map;
      },
      new Map()
    )
  );

const statusCodeToStatusDescription = (
  httpStatusCodesInfos: HttpStatusCodeInfo[]
) =>
  Object.fromEntries(
    httpStatusCodesInfos.reduce(
      (
        map: Map<number, string>,
        { statusCode, statusText, statusDescription, statusComment, rfcLink }
      ) => {
        map.set(Number(statusCode), `${JSON.stringify(statusDescription)}`);
        return map;
      },
      new Map()
    )
  );

const statusTextToStatusCode = (httpStatusCodesInfos: HttpStatusCodeInfo[]) =>
  Object.fromEntries(
    httpStatusCodesInfos.reduce(
      (
        map: Map<string, number>,
        { statusCode, statusText, statusDescription, statusComment, rfcLink }
      ) => {
        map.set(JSON.stringify(statusText), Number(statusCode));
        return map;
      },
      new Map()
    )
  );

const statusTextToStatusDescription = (
  httpStatusCodesInfos: HttpStatusCodeInfo[]
) =>
  Object.fromEntries(
    httpStatusCodesInfos.reduce(
      (
        map: Map<string, string>,
        { statusCode, statusText, statusDescription, statusComment, rfcLink }
      ) => {
        map.set(`"${statusText}"`, `${JSON.stringify(statusDescription)}`);
        return map;
      },
      new Map()
    )
  );

const generatedHelperFiles = (
  project: Project,
  httpStatusCodesInfos: HttpStatusCodeInfo[],
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
              initializer: Writers.object(
                statusCodeToStatusText(httpStatusCodesInfos)
              ),
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
              initializer: Writers.object(
                statusCodeToStatusDescription(httpStatusCodesInfos)
              ),
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
              initializer: Writers.object(
                statusTextToStatusCode(httpStatusCodesInfos)
              ),
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
              initializer: Writers.object(
                statusTextToStatusDescription(httpStatusCodesInfos)
              ),
            },
          ],
        },
      ],
    },
    {
      overwrite: true,
    }
  );

  helpersFile.addTypeAlias({
    isExported: true,
    name: 'HTTPStatusCode',
    type: 'keyof typeof statusCodeToStatusTextMap',
  });
  helpersFile.addTypeAlias({
    isExported: true,
    name: 'HTTPStatusText',
    type: 'keyof typeof statusTextToStatusCodeMap',
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
          type: 'HTTPStatusCode | HTTPStatusText',
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
              text: 'codeOrText: HTTPStatusCode | HTTPStatusText',
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
          type: 'HTTPStatusCode | HTTPStatusText',
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
              text: 'codeOrText: HTTPStatusCode | HTTPStatusText',
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
          type: 'HTTPStatusCode | HTTPStatusText',
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
              text: 'codeOrText: HTTPStatusCode | HTTPStatusText',
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
      name: 'getStatusMessage',
      returnType: 'string',
      parameters: [
        {
          name: 'codeOrText',
          type: 'HTTPStatusCode | HTTPStatusText',
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
              text: 'codeOrText: HTTPStatusCode | HTTPStatusText',
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
      returnType: 'HTTPStatusCode',
      parameters: [
        {
          name: 'text',
          type: 'HTTPStatusText',
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
              text: 'text: HTTPStatusText',
            },
            {
              tagName: 'returns',
              text: 'statusCode: HTTPStatusCode',
            },
          ],
        },
      ],
    },
    {
      name: 'getStatusText',
      returnType: 'HTTPStatusText',
      parameters: [
        {
          name: 'code',
          type: 'HTTPStatusCode',
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
              text: 'code: HTTPStatusCode',
            },
            {
              tagName: 'returns',
              text: 'statusText: HTTPStatusText',
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

// ----------------------------------------------------------------

const main = async () => {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      newLineKind: NewLineKind.LineFeed,
      quoteKind: QuoteKind.Single,
      usePrefixAndSuffixTextForRename: false,
      useTrailingCommas: true,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
    },
  });

  const commentByEn = `/**
 * © 2024 aiyoudiao
 *
 * This file was created by aiyoudiao, containing a lot of hard work and wisdom.
 *
 * You are free to use, modify, and distribute this file, but please keep this copyright notice.
 *
 * If you find this file helpful, please give me a star or follow me ツ.
 *
 * Contact:
 * - Email: newdiao@163.com
 * - GitHub: https://github.com/aiyoudiao
 *
 * Happy coding! Remember, code is poetry, and front-end is art. ツ
 */

`;

  const commentByZh = `/**
* © 2024 aiyoudiao
*
* 这个文件由 aiyoudiao 创建，包含了大量的辛勤工作和智慧。
*
* 您可以自由使用、修改和分发这个文件，但请保留此版权声明。
*
* 如果您觉得这个文件对您有帮助，请给我一个星星或关注我 ツ。
*
* 联系方式：
* - 邮箱: newdiao@163.com
* - GitHub: https://github.com/aiyoudiao
*
* 祝你编程愉快！记住，代码是诗歌，前端是艺术。 ツ
*/

`;

  generatedMemberFiles(
    project,
    httpStatusCodesInfosByEn,
    '../../packages/i18n-en/src/lib',
    commentByEn
  );

  generatedHelperFiles(
    project,
    httpStatusCodesInfosByEn,
    '../../packages/i18n-en/src/lib',
    commentByEn
  );

  generatedMemberFiles(
    project,
    httpStatusCodesInfosByZh,
    '../../packages/i18n-zh/src/lib',
    commentByZh
  );

  generatedHelperFiles(
    project,
    httpStatusCodesInfosByZh,
    '../../packages/i18n-zh/src/lib',
    commentByZh
  );

  await project.save();
};

main();
