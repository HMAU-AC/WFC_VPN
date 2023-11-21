// 定义 CSS/JS
const regex = '<body>';
const replace_str = '<body>\
console.log("屏蔽了");'

// 定义响应体
const body = $response.body.replace(regex,replace_str);

$done({ body: body })
