import os
import re
import time

# 遍历指定的根目录及其子目录
for root, dirs, files in os.walk('Module'):
    for file in files:
        # 如果文件的扩展名为 .sgmodule
        if file.endswith('.sgmodule'):
            sgmodule_path = os.path.join(root, file)
            plugin_path = os.path.join(root, file.replace('.sgmodule', '.plugin'))

            # 如果 .plugin 文件不存在，或者 .sgmodule 文件的修改时间晚于 .plugin 文件
            if not os.path.exists(plugin_path) or os.path.getmtime(sgmodule_path) > os.path.getmtime(plugin_path):
                # 读取 .sgmodule 文件的内容
                with open(sgmodule_path, 'r') as f:
                    content = f.read()

                # 使用正则表达式进行替换
                content = re.sub(r'\[Header Rewrite\]', '[Rewrite]', content)
                content = re.sub(r'hostname = %APPEND%', 'hostname = ', content)
                content = re.sub(r'(\w+) = type=http-response,pattern=(\^https\?:\\\/\\\/\w+\\.com\\(\$|\\\/\\$\\)),requires-body=(\d),max-size=1048576,timeout=(\d+),script-path=(https://www.gitt.top/Module/\w+/\w+-ads.js)',
                                 r'http-response \2 script-path=\5, requires-body=\3, timeout=\4, tag=\1', content)

                # 将修改后的内容保存到 .plugin 文件中
                with open(plugin_path, 'w') as f:
                    f.write(content)