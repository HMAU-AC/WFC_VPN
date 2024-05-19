// 重定向到 GitHub 上的 HTML 文件
$done({
    response: {
        status: 302,
        headers: { 
            'Location': 'http://htmlpreview.github.io/?https://raw.githubusercontent.com/HMAU-AC/WFC_VPN/main/Module/JS/index.html',
            'Content-Type': 'text/html'
        }
    }
});
