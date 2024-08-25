const fs = require('fs');
const markdownTable = require('markdown-table');

const httpStatusCodesInfosByEn = require('../http-data-sanitization/http-status-codes-infos.en.json');
const httpStatusCodesInfosByZh = require('../http-data-sanitization/http-status-codes-infos.zh.json');

console.log('Updating README.md table');

debugger;

let readmeFile = fs.readFileSync('../../README.md', { encoding: 'utf8' });

const table = markdownTable([
  ['Code', 'Text', 'Description', 'Translation', 'Comment', 'Link'],
  ...httpStatusCodesInfosByEn.map(
    (
      { statusCode, statusText, statusDescription, statusComment, rfcLink },
      i
    ) => [
      statusCode,
      statusText,
      statusDescription,
      httpStatusCodesInfosByZh[i].statusDescription,
      statusComment,
      rfcLink,
    ]
  ),
]);

debugger;
const readmeRegex = /## RFC Tables\n\n([^#]*)##/gm;
readmeFile = readmeFile.replace(readmeRegex, `## RFC Tables\n\n${table}\n\n##`);

fs.writeFile('../../README.md', readmeFile, (err) => {
  if (err) {
    console.error('Error updating README.md table', err);
    return;
  }
});

console.log('Successfully updated README.md table');
