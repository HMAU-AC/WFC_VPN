import os

def generate_links(root_dir, repo_url, branch_name, ignore_files=None):
    if ignore_files is None:
        ignore_files = []
    links = []
    for foldername, subfolders, filenames in os.walk(root_dir):
        folder_path = foldername.replace("\\", "/")
        if any(ignore in folder_path for ignore in ignore_files):
            continue
        clean_foldername = foldername.replace(".", "").lstrip('/')
        links.append(f'<span class="item-label">{clean_foldername}</span>')
        for filename in filenames:
            file_path = os.path.join(foldername, filename).replace("\\", "/")
            if any(ignore in file_path for ignore in ignore_files):
                continue
            file_url = f"{repo_url}/WFC_VPN/{branch_name}/{file_path}"
            links.append(f'<li><a href="{file_url}">{filename}</a></li>')     
    return '\n'.join(links)


if __name__ == "__main__":
    repo_url = "https://raw.githubusercontent.com/HMAU-AC"  # 替换为你的仓库 URL
    branch_name = "main"  # 替换为你的分支名
    links = generate_links('.', repo_url, branch_name, ignore_files=['.pyc', '.git', '.gitignore', '.github', 'html.css', 'index.html', 'generate_html.py', 'README.md', 'Flie-html'])
    html_content = f"""
<!DOCTYPE html lang="zh-CN">
<html>
<head>
    <meta charset="utf-8">
    <title>文件目录</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            --tw-bg-opacity: 1;
            background-color: rgb(7 10 15/var(--tw-bg-opacity));
            background-image: url(https://www.gitt.top/Flie-html/100x100.png);
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
        a {{
            color:hsla(0, 0%, 100%, .48);
            text-decoration: none;
            display: inline-block;
            position: relative;
            transition: all 0.3s ease;
        }}
        a:hover {{
            box-shadow: 0 0 4px rgba(211,211,211,0.5);
            background: #9d9d9da0;
        }}
        .item-label {{
            background: rgba(135, 32, 32, 0.5);
            display: inline-block;
            align-items: center;
            min-width: 3ch;
            }}
        li {{
            display: inline-block;
            align-items: center;
            flex: 0 99999 auto;
            padding: 4px 4px 4px 25px;
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