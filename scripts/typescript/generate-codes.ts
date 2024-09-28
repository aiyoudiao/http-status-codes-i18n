import {
  Project,
  QuoteKind,
  IndentationText,
  NewLineKind,
} from 'ts-morph'; /* https://ts-morph.com/ */

import httpStatusCodesInfosByEn from '../http-data-sanitization/http-status-codes-infos.en.json';
import httpStatusCodesInfosByZh from '../http-data-sanitization/http-status-codes-infos.zh.json';
import { generatedHelperFiles } from './generate/helpers';
import { generatedMemberFiles } from './generate/status';

// ----------------------------------------------------------------

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

  generatedHelperFiles(project, '../../packages/i18n-en/src/lib', commentByEn);

  generatedMemberFiles(
    project,
    httpStatusCodesInfosByZh,
    '../../packages/i18n-zh/src/lib',
    commentByZh
  );

  generatedHelperFiles(project, '../../packages/i18n-zh/src/lib', commentByZh);

  await project.save();
};

main();
