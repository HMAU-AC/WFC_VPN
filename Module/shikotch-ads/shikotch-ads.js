// 定义 CSS/JS
const regex = '<head>';
const replace_str = '<head>\
<link rel="stylesheet" href="https://www.gitt.top/Module/shikotch-ads/shikotch.css" type="text/css">\
<script>
var scripts = document.getElementsByTagName('script');
var regex = /https:\/\/js\.boost-next\.co\.jp\/.*/;

for (var i = scripts.length - 1; i >= 0; i--) {
    if (regex.test(scripts[i].src)) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }
}
</script>'

// 定义响应体
const body = $response.body.replace(regex, replace_str);

$done({ body:body })

// <script type="text/javascript" async="async" src="https://www.gitt.top/Module/shikotch-ads/shikotch.js">