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
            links.append(f'<li class="list-group-item active" aria-current="true">{clean_foldername}</li>')  # 修改了这里
        for filename in filenames:
            file_path = os.path.join(foldername, filename).replace("\\", "/")
            if any(ignore in file_path for ignore in ignore_files):
                continue
            if filename:  # 检查filename是否为空 检查
                file_url = f"{repo_url}/{file_path}"  # 修改了这里
                links.append(f'<li class="list-group-item d-flex justify-content-between align-items-center">{filename}<span class="rounded-pill" onclick="window.open(\'{file_url}\', \'_blank\')"><i class="fas fa-external-link-alt"></i></span>')  # 保留待用<span class="rounded-pill bt-copy" data-clipboard-text="{file_url}"><i class="fas fa-copy"></i></span></li>
    return '\n'.join(links)


if __name__ == "__main__":
    repo_url = "https://www.gitt.top"  # 替换为你的仓库 URL
    links = generate_links('.', repo_url, ignore_files=['.pyc', '.git', '.DS_Store', '.gitignore', '.github', 'html.css', 'index.html', 'generate_html.py', 'README.md', 'Flie-html', '.json', '.config.json', 'Loon', 'Icon'])
    html_content = f"""
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>文件目录</title>
    <link rel="shortcut icon" id="favicon" href="./Flie-html/img/dd_blur.png">
    <!-- 引入Bootstrap CSS -->
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
    <!-- 引入Font Awesome -->
    <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <style>

    </style>
</head>
<body>
    <div class="container">
         <!-- 添加提示文字 -->
         <div class="alert alert-warning" role="alert">
            青山不改，绿水长流，有缘江湖再见。
        </div>
        <!-- 使用Bootstrap的row和col类来创建响应式布局 -->
        <div class="row">
            <div class="col">
                <!-- 使用Bootstrap的card类来创建一个卡片 -->
                        <!-- 使用Bootstrap的list-group类来创建一个列表 -->
                        <ul class="list-group">
                            {links}
                        </ul>
            </div>
        </div>
    </div> 

    <!-- 引入Bootstrap JavaScript -->
    <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <div class="row">
            <div class="col">
                <footer class="text-center" style="padding: 1.75rem 1.25rem;">
                    <span class="text-muted">© 2023 爱吃素的胖子. All rights reserved.</span>
                </footer>
            </div>
        </div>
</body>
</html>
"""
with open('index.html', 'w') as file:
    file.write(html_content)