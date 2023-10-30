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
        .folder-label {
            font-size: 1.1rem;
            text-align: center;
            line-height: 2.2;
        }
        .list-group-item {
            margin: 0;
            padding: 0.5rem;
            border-width: 1px 0 1px 1px;
            border-style: solid;
            border-color: #ddd;
        }
        .list-group-item:first-child {
            border-top-left-radius: .25rem;
            border-bottom-left-radius: .25rem;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        .d-flex {
            height: auto;
        }
        .btn-open {
            border-radius: 0;
            align-self: stretch;
            padding-top: 0;
            padding-bottom: 0;
            margin: 0;
            padding: 0.5rem;
            border-width: 1px 0 1px 0;
            border-style: solid;
            border-color: #ddd;
        }
        .btn-copy {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-top-right-radius: .25rem;
            border-bottom-right-radius: .25rem;
            align-self: stretch;
            padding-top: 0;
            padding-bottom: 0;
            margin: 0;
            padding: 0.5rem;
            border-width: 1px 1px 1px 0;
            border-style: solid;
            border-color: #ddd;
        }
        .carousel.slide.rounded {
            margin-bottom: 1rem;
        }
        .carousel-item img {
            border-radius: 10px;
        }
        
        
        .image-container {
            text-align: center;
        }
        .image-container img {
            height: auto;
            filter: blur(10px);
            transition: filter 4s;
            margin-bottom: .5rem;
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

            // 设置定时器，使图片在1秒后变为清晰
            setTimeout(function() {
                document.querySelector('.image-container img').style.filter = 'blur(0)';
            }, 1000);
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
     <div class="footertop"></div>
    <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 footer-container">
                <div class="image-container">
                    <img src="./Flie-html/img/github.webp" alt="Github">
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-8 col-lg-9 col-xl-10">
                <span class="text-muted">© 2023 爱吃素的胖子. All rights reserved.</span>
            </div>
        </div>
    </div>
</footer>
</body>
</html>
"""

    # 使用htmlmin压缩HTML内容并删除注释
    minified_html = htmlmin.minify(html_content, remove_empty_space=True, remove_comments=True)
    
    with open('index.html', 'w') as file:
        file.write(minified_html)