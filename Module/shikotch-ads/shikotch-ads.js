// 定义 CSS/JS
const regex = '<head>';
const replace_str = '<head>\
<link rel="stylesheet" href="https://www.gitt.top/Module/shikotch-ads/shikotch.css" type="text/css">\
<script type="text/javascript" async="async" src="https://www.gitt.top/Module/shikotch-ads/shikotch.js"></script>'
// 定义响应体
const body = $response.body.replace(regex, replace_str);

$done({ body:body })
