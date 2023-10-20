import os

def generate_links(root_dir, repo_url):
    links = []
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            path = os.path.join(foldername, filename)
            url = os.path.join(repo_url, path)
            links.append(f'<a href="{url}">{filename}</a>')
    return '\n'.join(links)

if __name__ == "__main__":
    repo_url = "https://raw.githubusercontent.com/HMAU-AC/WFC_VPN/main"  # 替换为你的仓库 URL
    links = generate_links(repo_url)
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