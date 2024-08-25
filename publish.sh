#!/bin/bash

# 确保脚本具有执行权限
chmod +x "$0"

# 登录 npm
npm login

# 指定要发布的项目名称列表
projects=("i18n-en" "i18n-zh")

# 获取当前脚本所在目录
SCRIPT_DIR=$(cd $(dirname $0); pwd)

# 遍历指定的项目
for project in "${projects[@]}"; do
  PROJECT_DIR="$SCRIPT_DIR/packages/$project"
  PACKAGE_JSON="$PROJECT_DIR/package.json"

  # 检查 package.json 文件是否存在
  if [ -f "$PACKAGE_JSON" ]; then
    echo "Fixing package.json for $project..."
    cd "$PROJECT_DIR" || exit
    npm pkg fix
    echo "Publishing $project..."
    npm publish --access public
    cd "$SCRIPT_DIR" || exit
    echo "$project published successfully."
  else
    echo "Skipping $project: package.json not found."
  fi
done
