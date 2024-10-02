const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // 用于美化日志输出

// 初始化日志记录器
let logEntries = [];
// 忽略的目录或文件
const ignoring = ['node_modules'];
// 模板和目标路径列表
const templateTargetList = [
  {
    templateDirectory: '../../packages/i18n-en', // 模板目录
    targetDirectory: '../../packages/i18n-ja', // 目标目录
  },
];

// 搜索和替换列表
const searchReplaceList = [
  { searchStr: 'i18n-en', replaceStr: 'i18n-ja' },
  { searchStr: 'i18nEn', replaceStr: 'i18nJa' },
];

// 生成模版项目
templateTargetList.forEach(({ templateDirectory, targetDirectory }) => {
  generateProjectFromTemplate(
    templateDirectory,
    targetDirectory,
    searchReplaceList
  );
});

/**
 * 复制文件或目录
 * @param {string} source 源路径
 * @param {string} destination 目标路径
 * @param {Array} searchReplaceList 一个列表，包含多组 需要替换的字符串以及替换后的字符串
 */
function copyFileOrDirectory(source, destination, searchReplaceList) {
  fs.stat(source, (err, stats) => {
    if (err) {
      logEntries.push(`Error: ${err.message}`);
      return;
    }

    if (stats.isDirectory()) {
      // 如果是目录，则先创建目标目录
      fs.mkdir(destination, { recursive: true }, (mkdirErr) => {
        if (mkdirErr) {
          logEntries.push(
            `Error creating directory: ${destination} - ${mkdirErr.message}`
          );
          return;
        }

        fs.readdir(source, (readErr, files) => {
          if (readErr) {
            logEntries.push(
              `Error reading directory: ${source} - ${readErr.message}`
            );
            return;
          }

          files.forEach((file) => {
            const from = path.join(source, file);
            const to = path.join(destination, file);

            // 忽略特定目录
            if (ignoring.includes(file)) {
              console.log(chalk.gray(`Ignoring directory: ${from}`));
              return;
            }

            copyFileOrDirectory(from, to, searchReplaceList);
          });
        });
      });
    } else {
      // 如果是文件，则直接复制
      fs.readFile(source, 'utf8', (readErr, data) => {
        if (readErr) {
          logEntries.push(`Error reading file: ${source} - ${readErr.message}`);
          return;
        }

        let newData = data;
        searchReplaceList.forEach(({ searchStr, replaceStr }) => {
          newData = newData.replace(new RegExp(searchStr, 'g'), replaceStr);
        });

        fs.writeFile(destination, newData, 'utf8', (writeErr) => {
          if (writeErr) {
            logEntries.push(
              `Error writing file: ${destination} - ${writeErr.message}`
            );
            return;
          }

          console.log(chalk.green(`Copied file: ${source} -> ${destination}`));
        });
      });
    }
  });
}

/**
 * 从模板目录复制文件到目标目录
 * @param {string} templateDir 模板目录
 * @param {string} targetDir 目标目录
 * @param {Array} searchReplaceList 一个列表，包含多组 需要替换的字符串以及替换后的字符串
 */
function generateProjectFromTemplate(
  templateDir,
  targetDir,
  searchReplaceList
) {
  console.log(chalk.blue(`Generating project from template...`));

  try {
    copyFileOrDirectory(templateDir, targetDir, searchReplaceList);

    console.log(chalk.blue(`Project generated successfully at ${targetDir}`));
  } catch (error) {
    logEntries.push(`Error: ${error.message}`);
  }

  if (logEntries.length > 0) {
    console.log(chalk.red(`Some errors occurred during the process:`));
    logEntries.forEach((entry) => console.log(chalk.red(entry)));

    // 将错误日志写入文件
    fs.writeFile(
      path.join(process.cwd(), 'errors.log'),
      logEntries.join('\n'),
      (err) => {
        if (err) {
          console.error(chalk.red(`Failed to write error log: ${err.message}`));
        } else {
          console.log(
            chalk.yellow(`Error log written to current directory: errors.log`)
          );
        }
      }
    );
  }
}
