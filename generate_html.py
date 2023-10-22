import os

def generate_links(root_dir, repo_url, ignore_files=None):
    if ignore_files is None:
        ignore_files = []
    links = []
    for foldername, subfolders, filenames in os.walk(root_dir):
        folder_path = foldername.replace("\\", "/")
        if any(ignore in folder_path for ignore in ignore_files):
            continue
        clean_foldername = foldername.replace(".", "").lstrip('/')
        if clean_foldername:  # 检查clean_foldername是否为空
            links.append(f'<span class="badge badge-primary folder-label">{clean_foldername}</span>')  # 修改了这里
        for filename in filenames:
            file_path = os.path.join(foldername, filename).replace("\\", "/")
            if any(ignore in file_path for ignore in ignore_files):
                continue
            if filename:  # 检查filename是否为空
                file_url = f"{repo_url}/{file_path}"  # 修改了这里
                links.append(f'<a class="list-group-item" href="{file_url}" >{filename}</a>')  # 修改了这里
    return '\n'.join(links)


if __name__ == "__main__":
    repo_url = "https://www.gitt.top"  # 替换为你的仓库 URL
    links = generate_links('.', repo_url, ignore_files=['.pyc', '.git', '.gitignore', '.github', 'html.css', 'index.html', 'generate_html.py', 'README.md', 'Flie-html', '.json', '.config.json', 'Loon', 'Icon'])
    html_content = f"""
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>文件目录</title>
    <!-- 引入Bootstrap CSS -->
    <!-- rel="preconnect"预解析DNS,还预建立TCP连接和TLS握手 -->
    <link rel="preconnect" href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <!-- 引入Font Awesome -->
    <link rel="preconnect" href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <style>
        .folder-label {{
            font-size: 1rem;
        }}
        @media (min-width: 576px) {{
            .folder-label {{
                font-size: 1.2rem;
            }}
        }}
        @media (min-width: 768px) {{
            .folder-label {{
                font-size: 1.4rem;
            }}
        }}
        @media (min-width: 992px) {{
            .folder-label {{
                font-size: 1.6rem;
            }}
        }}
        @media (min-width: 1200px) {{
            .folder-label {{
                font-size: 1.8rem;
            }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <!-- 使用Bootstrap的row和col类来创建响应式布局 -->
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <!-- 使用Bootstrap的card类来创建一个卡片 -->
                <div class="card">
                    <div class="card-body">
                        <!-- 使用Bootstrap的list-group类来创建一个列表 -->
                        <div class="list-group">
                            <!-- 在这里插入链接 -->
                            {links}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 引入jQuery -->
    <script rel="preconnect" src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- 引入Bootstrap JS -->
    <script rel="preconnect" src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
"""
    with open('index.html', 'w') as file:
        file.write(html_content)