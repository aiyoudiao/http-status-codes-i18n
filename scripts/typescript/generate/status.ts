/**
 * 创建 以下 文件
 * status-code.ts
 * status-text.ts
 * status-description.ts
 */

import {
  Project,
  StructureKind,
  EnumMemberStructure,
  OptionalKind,
} from 'ts-morph'; /* https://ts-morph.com/ */
import { constantCase } from 'change-case';

export interface HttpStatusCodeInfo {
  statusCode: string;
  statusText: string;
  statusDescription: string;
  statusComment: string;
  rfcLink: string;
}

type EnumType = 'constant' | 'code';

const generateStatusTextMembers = (
  httpStatusCodesInfos: HttpStatusCodeInfo[],
  enumType: EnumType = 'constant'
): OptionalKind<EnumMemberStructure>[] =>
  httpStatusCodesInfos
    .map(
      (
        { statusCode, statusText, statusDescription, statusComment, rfcLink },
        i
      ) => {
        const name =
          enumType === 'code' ? `h${statusCode}` : constantCase(statusText);
        return [
          {
            name,
            value: statusText,
            docs: [
              `${name}: ${statusComment}\n${rfcLink}\n${statusDescription}`,
            ],
          },
        ];
      }
    )
    .flat();

const generateStatusCodeMembers = (
  httpStatusCodesInfos: HttpStatusCodeInfo[],
  enumType: EnumType = 'constant'
): OptionalKind<EnumMemberStructure>[] =>
  httpStatusCodesInfos
    .map(
      (
        { statusCode, statusText, statusDescription, statusComment, rfcLink },
        i
      ) => {
        const name =
          enumType === 'code' ? `h${statusCode}` : constantCase(statusText);
        return [
          {
            name,
            value: Number(statusCode),
            docs: [
              `${name}: ${statusComment}\n${rfcLink}\n${statusDescription}`,
            ],
          },
        ];
      }
    )
    .flat();

const generateStatusDescriptionMembers = (
  httpStatusCodesInfos: HttpStatusCodeInfo[],
  enumType: EnumType = 'constant'
): OptionalKind<EnumMemberStructure>[] =>
  httpStatusCodesInfos
    .map(
      (
        { statusCode, statusText, statusDescription, statusComment, rfcLink },
        i
      ) => {
        const name =
          enumType === 'code' ? `h${statusCode}` : constantCase(statusText);
        return [
          {
            name,
            value: statusDescription,
            docs: [
              `${name}: ${statusComment}\n${rfcLink}\n${statusDescription}`,
            ],
          },
        ];
      }
    )
    .flat();

export const generatedMemberFiles = (
  project: Project,
  httpStatusCodesInfos: HttpStatusCodeInfo[],
  dir: string,
  comment: string
) => {
  console.log(`Generate ${dir} member files...`);

  const statusTextFile = project.createSourceFile(
    `${dir}/status-text.ts`,
    {
      statements: [
        {
          kind: StructureKind.Enum,
          name: 'HttpStatusText',
          isExported: true,
          members: generateStatusTextMembers(httpStatusCodesInfos),
        },
        {
          kind: StructureKind.Enum,
          name: 'HttpStatusTextByCode',
          isExported: true,
          members: generateStatusTextMembers(httpStatusCodesInfos, 'code'),
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
          members: generateStatusCodeMembers(httpStatusCodesInfos),
        },
        {
          kind: StructureKind.Enum,
          name: 'HttpStatusCodeByCode',
          isExported: true,
          members: generateStatusCodeMembers(httpStatusCodesInfos, 'code'),
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
          members: generateStatusDescriptionMembers(httpStatusCodesInfos),
        },
        {
          kind: StructureKind.Enum,
          name: 'HttpStatusDescriptionByCode',
          isExported: true,
          members: generateStatusDescriptionMembers(
            httpStatusCodesInfos,
            'code'
          ),
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
