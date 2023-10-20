import os

def generate_toc(root_dir):
    toc = []
    for foldername, subfolders, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename != 'README.md':
                path = os.path.join(foldername, filename)
                toc.append(f'- [{filename}]({path})')
    return '\n'.join(toc)

if __name__ == "__main__":
    toc = generate_toc('.')
    with open('README.md', 'r') as file:
        data = file.read()
    start_marker = "<!-- START TOC -->"
    end_marker = "<!-- END TOC -->"
    start_index = data.index(start_marker) + len(start_marker)
    end_index = data.index(end_marker)
    output = data[:start_index] + '\n' + toc + '\n' + data[end_index:]
    with open('README.md', 'w') as file:
        file.write(output)