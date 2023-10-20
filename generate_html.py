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
        links.append(f'<h2>{clean_foldername}</h2>')
        for filename in filenames:
            file_path = os.path.join(foldername, filename).replace("\\", "/")
            if any(ignore in file_path for ignore in ignore_files):
                continue
            file_url = f"{repo_url}/WFC_VPN/{branch_name}/{file_path}"
            links.append(f'<p><a href="{file_url}">{filename}</a></p>')
    return '\n'.join(links)

if __name__ == "__main__":
    repo_url = "https://raw.githubusercontent.com/HMAU-AC"  # 替换为你的仓库 URL
    branch_name = "main"  # 替换为你的分支名
    links = generate_links('.', repo_url, branch_name, ignore_files=['.pyc', '.git', '.gitignore', '.github', 'html.css', 'index.html', 'generate_html.py', 'README.md'])
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
            
        }}
        .container {{
            width: 80%;
            margin: auto;
            padding: 20px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        }}
        a {{
            --tw-text-opacity: 1;
            color:rgb(255 255 255/var(--tw-text-opacity))
            text-decoration: none;
            display: block;
            position: relative;
            padding-left: 25px;
        }}
        a:hover {{
            --tw-text-opacity: 1;
            color:rgb(255 255 255/var(--tw-text-opacity))
        }}
        a:hover::before {{
            content: "打开链接";
            position: absolute;
            left: 0;
            top: 0;
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