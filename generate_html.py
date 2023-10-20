import os

def generate_links(root_dir):
    links = []
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            path = os.path.join(foldername, filename)
            links.append(f'<a href="{path}">{filename}</a>')
    return '\n'.join(links)

if __name__ == "__main__":
    links = generate_links('.')
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