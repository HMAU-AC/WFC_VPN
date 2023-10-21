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
            links.append(f'<span class="item-label"><i class="fas fa-folder"></i>{clean_foldername}</span>')
        for filename in filenames:
            file_path = os.path.join(foldername, filename).replace("\\", "/")
            if any(ignore in file_path for ignore in ignore_files):
                continue
            if filename:  # 检查filename是否为空
                file_url = f"{repo_url}/{file_path}"  # 修改了这里
                links.append(f'<a class="list" href="{file_url}" ><i class="fas fa-sticky-note"></i>{filename}</a>')     
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
            font-family: Arial, sans-serif, -apple--apple--apple-system-body;
            margin: 0;
            padding: 0;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background: #eeeeee;
        }}
        .container {{
            width: 80%;
            margin: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
        }}
        .list {{
            border-radius: 5px;
            border-color: #f6f6f7;
            color: rgba(60, 60, 67, 0.75);
            background-color: #f6f6f7;
            flex-shrink: 0;
            display: inline-block;
            align-items: center;
            padding: 0px 10px;
            line-height: 31px;
            font-size: 14px;
            font-weight:500;
            text-decoration: none;
            margin: 4px 0;
        }}
        .list:hover::before {{
            margin-right: 6px;
            transition: all 0.9s cubic-bezier(0.38, -0.27, 1, 0.37);
        }}

        .list:hover::after {{
            content: "🔗 打开链接";
            margin-left: 6px;
            transition: all 0.9s cubic-bezier(0.38, -0.27, 1, 0.37);
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
            margin: 5px 0;
            /* width: fit-content; */
            padding: 0 10px;
            line-height: 38px;
            font-size: 18px;
            }}
        .fas.fa-sticky-note, .fas.fa-folder {{
            margin: 0 6px 0 0;
            }}
        @media screen and (max-width: 768px) {{
            .container {{
            width: 100%; /* 在小屏幕上设置宽度为100% */
            padding: 10px; /* 在小屏幕上减少内边距 */
            }}
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