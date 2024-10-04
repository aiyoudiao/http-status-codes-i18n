import {
  Project,
  QuoteKind,
  IndentationText,
  NewLineKind,
} from 'ts-morph'; /* https://ts-morph.com/ */

import { generatedHelperFiles } from './generate/helpers';
import { generatedMemberFiles, HttpStatusCodeInfo } from './generate/status';
import configJSON from '../configs/config.json';

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

  configJSON.forEach(
    ({ generateCodeConfig: { name, path: pathName, comments, data } }) => {
      generatedMemberFiles(
        project,
        data as unknown as HttpStatusCodeInfo[],
        pathName,
        comments
      );

      generatedHelperFiles(project, pathName, comments);
    }
  );

  await project.save();
};

main();
