#!/bin/bash

# 执行 TypeScript 脚本
node index.js

# 检查脚本执行是否成功
if [ $? -eq 0 ]; then
    echo "脚本执行成功！"
else
    echo "脚本执行失败。"
    exit 1
fi
