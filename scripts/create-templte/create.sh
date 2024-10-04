#!/bin/bash

# 判断是否传递了参数
if [ -n "$1" ]; then
    script="index.$1.js"
else
    script="index.js"
fi

# 执行相应的脚本
node $script

# 检查脚本执行是否成功
if [ $? -eq 0 ]; then
    echo "脚本执行成功！"
else
    echo "脚本执行失败。"
    exit 1
fi
