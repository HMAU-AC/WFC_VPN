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
        links.append(f'<span class="item-label"><i class="fas fa-folder"></i>{clean_foldername}</span>')
        for filename in filenames:
            file_path = os.path.join(foldername, filename).replace("\\", "/")
            if any(ignore in file_path for ignore in ignore_files):
                continue
            file_url = f"{repo_url}/{file_path}"  # 修改了这里
            links.append(f'<a class="list" href="{file_url}">{filename}</a>')     
    return '\n'.join(links)


if __name__ == "__main__":
    repo_url = "https://www.gitt.top"  # 替换为你的仓库 URL
    links = generate_links('.', repo_url, ignore_files=['.pyc', '.git', '.gitignore', '.github', 'html.css', 'index.html', 'generate_html.py', 'README.md', 'Flie-html', '.json', '.config.json', 'Loon', 'Icon'])
    html_content = f"""
<!DOCTYPE html lang="zh-CN">
<html>
<head>
    <meta charset="utf-8">
    <title>文件目录</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            --tw-bg-opacity: 1;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }}
        .container {{
            width: 80%;
            margin: auto;
            padding: 20px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
            gap: 4px;
        }}
        .list {{
            border-radius: 5px;
            border-color: rgba(108, 152, 33, 0.79);
            color: #ffffff;
            background-color: rgba(108, 152, 33, 0.79);
            flex-shrink: 0;
            display: inline-block;
            align-items: center;
            width: fit-content;
            padding: 0px 10px;
            line-height: 28px;
            font-size: 14px;
            text-decoration: none;
        }}
        a:hover {{
            color: #008800;
        }}
        .item-label {{
            border-radius: 5px;
            border-color: #747bff;
            color: #ffffff;
            background-color: #747bff;
            flex-shrink: 0;
            font-weight:900;
            display: inline-block;
            align-items: center;
            /* width: fit-content; */
            padding: 0 20px;
            line-height: 38px;
            font-size: 14px;
            }}
    </style>
</head>
<body>
    <div class="container">
    {links}
    </div>
</body>
</html>
"""
    with open('index.html', 'w') as file:
        file.write(html_content)