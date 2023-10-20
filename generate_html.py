import os

def generate_links(root_dir, repo_url, branch_name, ignore_files=None):
    if ignore_files is None:
        ignore_files = []
    links = []
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            path = os.path.join(foldername, filename).replace("\\", "/")
            if any(ignore in path for ignore in ignore_files):
                continue
            url = f"{repo_url}/WFC_VPN/{branch_name}/{path}"
            links.append(f'<a href="{url}">{filename}</a>')
    return '\n'.join(links)

if __name__ == "__main__":
    repo_url = "https://raw.githubusercontent.com/HMAU-AC"  # 替换为你的仓库 URL
    branch_name = "main"  # 替换为你的分支名
    links = generate_links('.', repo_url, branch_name, ignore_files=['.pyc', '.git', '.gitignore', '.github', 'html.css', 'index.html', 'generate_html.py', 'README.md'])
    html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <title>文件目录</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }}
        .container {{
            width: 80%;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        }}
        a {{
            color: #333;
            text-decoration: none;
            display: block;
            position: relative;
            padding-left: 25px;
        }}
        a:hover {{
            color: #0056b3;
        }}
        a:hover::before {{
            content: "🔗 打开链接";
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