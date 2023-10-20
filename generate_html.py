import os

def generate_html(root_dir):
    html = ["<ul>"]
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename != 'README.md':
                path = os.path.join(foldername, filename)
                html.append(f'<li><a href="{path}">{filename}</a></li>')
    html.append("</ul>")
    return '\n'.join(html)

if __name__ == "__main__":
    html = generate_html('.')
    with open('index.html', 'w') as file:
        file.write(html)