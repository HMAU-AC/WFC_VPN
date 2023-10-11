// 定义 CSS/JS
const regex = '<head>';
const replace_str = '<head>\
<link rel="stylesheet" href="https://hmau.oss-cn-shanghai.aliyuncs.com/mrcong.css" type="text/css">\
<script type="text/javascript" async="async" src="https://hmau.oss-cn-shanghai.aliyuncs.com/mrcong.js">'

// 定义响应体
const body = $response.body.replace(regex, replace_str);

$done({ body:body })

