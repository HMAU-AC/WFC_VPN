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
    links = generate_links('.', repo_url, branch_name)
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <body>
    {links}
    </body>
    </html>
    """
    with open('index.html', 'w') as file:
        file.write(html_content)