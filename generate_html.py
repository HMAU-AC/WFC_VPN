import os
import htmlmin
import csscompressor
import jsmin

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
            links.append(f'<span class="badge badge-primary folder-label mb-3">{clean_foldername}</span>')  # 修改了这里
        for filename in filenames:
            file_path = os.path.join(foldername, filename).replace("\\", "/")
            if any(ignore in file_path for ignore in ignore_files):
                continue
            if filename:  # 检查filename是否为空 检查
                file_url = f"{repo_url}/{file_path}"  # 修改了这里
                links.append(f'<div class="d-flex justify-content-between align-items-center mb-3"><a class="list-group-item flex-grow-1" href="javascript:void(0)" >{filename}</a><button class="btn btn-primary btn-open" onclick="window.open(\'{file_url}\', \'_blank\')"><i class="fas fa-external-link-alt"></i></button><button class="btn btn-success btn-copy" data-clipboard-text="{file_url}"><i class="fas fa-copy"></i></button></div>')  # 修改了这里
    return '\n'.join(links)


if __name__ == "__main__":
    repo_url = "https://www.gitt.top"  # 替换为你的仓库 URL
    links = generate_links('.', repo_url, ignore_files=['.pyc', '.git', '.gitignore', '.github', 'html.css', 'index.html', '.py', 'README.md', 'Flie-html', '.json', '.config.json', 'Loon', 'Icon'])
    # CSS和JavaScript内容
    css_content = """
    :root {
        --primary-color: rgb(0 31 63 / 60%);
        --success-color: rgba(40, 167, 69, 0.6);
        --light-color: rgba(248, 249, 250, 0.6);
        --border-color: rgb(62 71 79 / 16%);
    }
    body {
            background-color: rgb(89, 93, 98);
            background-image: url('./Flie-html/img/pattern.svg');
            background-repeat: no-repeat;
            background-size: cover;
    }
    .top-img.text-center {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: .4rem;
        background: var(--light-color);
        margin-top: .5rem;
        margin-bottom: .5rem;
        border-radius: .25rem;
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
    }

    .card {
        background-color: rgb(255 255 255 / 60%);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        ;
    }
    .folder-label {
        font-size: 1.1rem;
        text-align: center;
        line-height: 2.2;
        background-color: var(--primary-color);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
    }
    .list-group-item {
        margin: 0;
        padding: 0.5rem;
        border: 1px solid var(--border-color);
        background-color: rgb(255 255 255 / 0%);
    }
    .list-group-item:first-child {
        border-radius: .25rem 0 0 .25rem;
    }
    .btn-open, .btn-copy {
        border-radius: 0;
        align-self: stretch;
        padding: 0.5rem;
        margin: 0;
        border: 1px solid var(--border-color);
    }
    .btn-open {
        border-width: 1px 0;
        background-color: var(--primary-color);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
    }
    .btn-copy {
        border-width: 1px 1px 1px 0;
        border-radius: 0 .25rem .25rem 0;
        background-color: var(--success-color);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
    }
    .carousel.slide.rounded {
        margin-bottom: 1rem;
    }
    .carousel-item img, .image-container img {
        border-radius: 10px;
        height: auto;
    }
    .image-container img {
        filter: blur(40px);
        transition: filter 4s;
        margin-bottom: .5rem;
    }
    footer {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 1.25rem;
        background: var(--light-color);
        margin-top: .5rem;
        border-radius: .25rem;
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
    }
"""


    js_content = """
        document.addEventListener('DOMContentLoaded', (event) => {
            // 初始化Clipboard.js
            var clipboard = new ClipboardJS('.btn-copy');
            // 添加复制成功的回调函数
            clipboard.on('success', function(e) {
                console.log('复制成功!');
                e.clearSelection();
            });
            // 添加复制失败的回调函数
            clipboard.on('error', function(e) {
                console.log('复制失败');
            });
        });
    """
   # 使用csscompressor和jsmin压缩CSS和JavaScript内容
    # minified_css/minified_js要放在html_content = f"""之前才行
    minified_css = csscompressor.compress(css_content)
    minified_js = jsmin.jsmin(js_content)

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
        {minified_css}
    </style>
</head>
<body>
    <div class="container">
        <!-- 使用Bootstrap的row和col类来创建响应式布局 -->
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <!-- 添加一张首页大图 -->
                    <div class="top-img text-center">
                        <img src="./Flie-html/img/tg1.jpg" class="img-fluid" alt="Top Image">
                    </div>
                <!-- 使用Bootstrap的card类来创建一个卡片 -->
                <div class="card">
                    <div class="card-body">
                        <!-- 使用Bootstrap的list-group类来创建一个列表 -->
                        <div class="list-group">
                            {links}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 添加新的row来包含footer -->
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <footer class="text-center">
                    <span class="text-muted">© 2023 爱吃素的胖子. All rights reserved.</span>
                </footer>
            </div>
        </div>
    </div>
    <!-- 其他的HTML代码... -->
    <!-- 引入jQuery -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- 引入Bootstrap JavaScript -->
    <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <!-- 引入Clipboard.js -->
    <script src="https://cdn.bootcdn.net/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
    
    <script>
        {minified_js}
    </script>

</body>
</html>
"""

    # 使用htmlmin压缩HTML内容并删除注释
    minified_html = htmlmin.minify(html_content, remove_empty_space=True, remove_comments=True)
    
    with open('index.html', 'w') as file:
        file.write(minified_html)