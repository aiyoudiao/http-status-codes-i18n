const fs = require('fs');
const markdownTable = require('markdown-table');
const { constantCase } = require('change-case');

const httpStatusCodesInfosByEn = require('../http-data-sanitization/http-status-codes-infos.en.json');
const httpStatusCodesInfosByZh = require('../http-data-sanitization/http-status-codes-infos.zh.json');

const updateReadmeRfcTable = (filePath) => {
  console.log(`Updating ${filePath} table`);
  let readmeFile = fs.readFileSync(filePath, { encoding: 'utf8' });

  const table = markdownTable([
    ['Code', 'Text', 'Enum', 'Description', 'Translation', 'Comment', 'Link'],
    ...httpStatusCodesInfosByEn.map(
      (
        { statusCode, statusText, statusDescription, statusComment, rfcLink },
        i
      ) => [
        statusCode,
        statusText,
        constantCase(statusText),
        statusDescription,
        httpStatusCodesInfosByZh[i].statusDescription,
        statusComment,
        rfcLink,
      ]
    ),
  ]);

  const readmeRegex = /## 📋 RFC Tables([\w\W]+)## 📖 References/gm;
  readmeFile = readmeFile.replace(
    readmeRegex,
    `## 📋 RFC Tables\n\n${table}\n\n## 📖 References`
  );

  fs.writeFile(filePath, readmeFile, (err) => {
    if (err) {
      console.error(`Error updating ${filePath} table`, err);
      return;
    }
  });

  console.log(`Successfully updated ${filePath} table`);
};

updateReadmeRfcTable('../../README.md');
updateReadmeRfcTable('../../packages/i18n-en/README.md');
updateReadmeRfcTable('../../packages/i18n-en/README.md');
