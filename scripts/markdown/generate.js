const fs = require('fs');
const markdownTable = require('markdown-table');
const { constantCase } = require('change-case');
const json = require('../configs/config.json');

const httpStatusCodesInfosByEn = require('../http-data-sanitization/http-status-codes-infos.en.json');
const httpStatusCodesInfosByZh = require('../http-data-sanitization/http-status-codes-infos.zh.json');

const generateAllREADME = () => {
  json.forEach(({ generateReadmeConfig: { targetFileName, readmeList } }) => {
    console.log(`Generating ${targetFileName}`);
    fs.writeFile(targetFileName, readmeList.join('\n\n\n'), (err) => {
      if (err) {
        console.error(`Error generating ${targetFileName}`, err);
        return;
      }
    });
    console.log(`Generated ${targetFileName}`);
  });
};

// 更新 API 那里的表格
const updateReadmeApiTable = () => {
  // API｜描述
  json.forEach(
    ({
      generateReadmeConfig: { targetFileName },
      generateCodeConfig: { name },
    }) => {
      console.log(`Reading ${targetFileName} table`);
      let readmeFile = fs.readFileSync(targetFileName, { encoding: 'utf8' });
      const {
        HttpStatusCode,
        HttpStatusCodeByCode,
        HttpStatusText,
        HttpStatusTextByCode,
        HttpStatusDescription,
        HttpStatusDescriptionByCode,
        isCodeOrTextValid,
        getStatusInfo,
        isStatusSuccessful,
        getSimpleStatusMessage,
        getStatusMessage,
        getStatusCode,
        getStatusText,
      } = require(`../../dist/packages/i18n-${name}`);

      const table = markdownTable([
        ['API', 'Result'],
        ...[
          ['HttpStatusCode.ACCEPTED', HttpStatusCode.ACCEPTED],
          ['HttpStatusCodeByCode.h100', HttpStatusCodeByCode.h100],
          ['HttpStatusText.OK', HttpStatusText.OK],
          ['HttpStatusTextByCode.h200', HttpStatusTextByCode.h200],
          ['HttpStatusDescription.ACCEPTED', HttpStatusDescription.ACCEPTED],
          [
            'HttpStatusDescriptionByCode.h200',
            HttpStatusDescriptionByCode.h200,
          ],

          ['isCodeOrTextValid(200)', isCodeOrTextValid(200)],
          ["isCodeOrTextValid('OK')", isCodeOrTextValid('OK')],
          [
            'isCodeOrTextValid(HttpStatusCodeByCode.h100)',
            isCodeOrTextValid(HttpStatusCodeByCode.h100),
          ],
          [
            'isCodeOrTextValid(HttpStatusCode.ACCEPTED)',
            isCodeOrTextValid(HttpStatusCode.ACCEPTED),
          ],
          [
            'isCodeOrTextValid(HttpStatusText.OK)',
            isCodeOrTextValid(HttpStatusText.OK),
          ],
          [
            'isCodeOrTextValid(HttpStatusTextByCode.h200)',
            isCodeOrTextValid(HttpStatusTextByCode.h200),
          ],

          ['getStatusInfo(200)', JSON.stringify(getStatusInfo(200))],
          ["getStatusInfo('OK')", JSON.stringify(getStatusInfo('OK'))],
          [
            'getStatusInfo(HttpStatusCodeByCode.h100)',
            JSON.stringify(getStatusInfo(HttpStatusCodeByCode.h100)),
          ],
          [
            'getStatusInfo(HttpStatusCode.ACCEPTED)',
            JSON.stringify(getStatusInfo(HttpStatusCode.ACCEPTED)),
          ],
          [
            'getStatusInfo(HttpStatusText.OK)',
            JSON.stringify(getStatusInfo(HttpStatusText.OK)),
          ],
          [
            'getStatusInfo(HttpStatusTextByCode.h200)',
            JSON.stringify(getStatusInfo(HttpStatusTextByCode.h200)),
          ],

          ['isStatusSuccessful(200)', isStatusSuccessful(200)],
          ["isStatusSuccessful('OK')", isStatusSuccessful('OK')],
          [
            'isStatusSuccessful(HttpStatusCodeByCode.h100)',
            isStatusSuccessful(HttpStatusCodeByCode.h100),
          ],
          [
            'isStatusSuccessful(HttpStatusCode.ACCEPTED)',
            isStatusSuccessful(HttpStatusCode.ACCEPTED),
          ],
          [
            'isStatusSuccessful(HttpStatusText.OK)',
            isStatusSuccessful(HttpStatusText.OK),
          ],
          [
            'isStatusSuccessful(HttpStatusTextByCode.h200)',
            isStatusSuccessful(HttpStatusTextByCode.h200),
          ],

          ['getSimpleStatusMessage(200)', getSimpleStatusMessage(200)],
          ["getSimpleStatusMessage('OK')", getSimpleStatusMessage('OK')],
          [
            'getSimpleStatusMessage(HttpStatusCodeByCode.h100)',
            getSimpleStatusMessage(HttpStatusCodeByCode.h100),
          ],
          [
            'getSimpleStatusMessage(HttpStatusCode.ACCEPTED)',
            getSimpleStatusMessage(HttpStatusCode.ACCEPTED),
          ],
          [
            'getSimpleStatusMessage(HttpStatusText.OK)',
            getSimpleStatusMessage(HttpStatusText.OK),
          ],
          [
            'getSimpleStatusMessage(HttpStatusTextByCode.h200)',
            getSimpleStatusMessage(HttpStatusTextByCode.h200),
          ],

          ['getStatusMessage(200)', getStatusMessage(200)],
          ["getStatusMessage('OK')", getStatusMessage('OK')],
          [
            'getStatusMessage(HttpStatusCodeByCode.h100)',
            getStatusMessage(HttpStatusCodeByCode.h100),
          ],
          [
            'getStatusMessage(HttpStatusCode.ACCEPTED)',
            getStatusMessage(HttpStatusCode.ACCEPTED),
          ],
          [
            'getStatusMessage(HttpStatusText.OK)',
            getStatusMessage(HttpStatusText.OK),
          ],
          [
            'getStatusMessage(HttpStatusTextByCode.h200)',
            getStatusMessage(HttpStatusTextByCode.h200),
          ],

          ["getStatusCode('OK')", getStatusCode('OK')],
          [
            'getStatusCode(HttpStatusText.OK)',
            getStatusCode(HttpStatusText.OK),
          ],
          [
            'getStatusCode(HttpStatusTextByCode.h200)',
            getStatusCode(HttpStatusTextByCode.h200),
          ],

          ['getStatusText(200)', getStatusText(200)],
          [
            'getStatusText(HttpStatusCodeByCode.h100)',
            getStatusText(HttpStatusCodeByCode.h100),
          ],
          [
            'getStatusText(HttpStatusCode.ACCEPTED)',
            getStatusText(HttpStatusCode.ACCEPTED),
          ],
        ],
      ]);

      const readmeRegex = /API｜描述/gm;
      readmeFile = readmeFile.replace(readmeRegex, table);

      fs.writeFile(targetFileName, readmeFile, (err) => {
        if (err) {
          console.error(`Error updating ${targetFileName} table`, err);
          return;
        }
      });

      console.log(`Successfully updated ${targetFileName} table`);
    }
  );
};

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

// updateReadmeRfcTable('../../README.md');
// updateReadmeRfcTable('../../packages/i18n-en/README.md');
// updateReadmeRfcTable('../../packages/i18n-en/README.md');

// generateAllREADME();
updateReadmeApiTable();
