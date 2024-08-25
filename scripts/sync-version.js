const fs = require('fs');
const path = require('path');

// 根目录的 package.json 文件路径
const rootPackageJsonPath = path.resolve(__dirname, '../', 'package.json');

// 需要同步的键
const keysToSync = [
  'version',
  'description',
  'author',
  'license',
  'repository',
  'bugs',
  'homepage',
];

// 读取根目录的 package.json 文件
const rootPackageJson = JSON.parse(
  fs.readFileSync(rootPackageJsonPath, 'utf-8')
);

// 获取 packages 目录下的所有子目录
const packagesDir = path.resolve(__dirname, '../', 'packages');
const packageDirs = fs
  .readdirSync(packagesDir)
  .filter((dir) => fs.statSync(path.join(packagesDir, dir)).isDirectory());

packageDirs.forEach((dir) => {
  const packageJsonPath = path.join(packagesDir, dir, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

    // 同步指定的键和值
    keysToSync.forEach((key) => {
      if (rootPackageJson[key]) {
        packageJson[key] = rootPackageJson[key];
      }
    });

    // 写回更新后的 package.json 文件
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      'utf-8'
    );
    console.log(`Updated ${packageJsonPath}`);
  }
});
