import os

def generate_links(root_dir, repo_url, branch_name):
    links = []
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            path = os.path.join(foldername, filename).replace("\\", "/")
            url = f"{repo_url}/blob/{branch_name}/{path}?raw=true"
            links.append(f'<a href="{url}">{filename}</a>')
    return '\n'.join(links)

if __name__ == "__main__":
    repo_url = "https://raw.githubusercontent.com/HMAU-AC/WFC_VPN/main"  # 替换为你的仓库 URL
    branch_name = "main"  # 替换为你的分支名
    links = generate_links('.', repo_url)
    html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
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
        }}
        a:hover {{
            color: #0056b3;
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