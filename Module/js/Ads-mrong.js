/*
// 定义 CSS/JS
const regex = '<head>';
const replace_str = '<head>\
<link rel="stylesheet" href="https://hmau.oss-cn-shanghai.aliyuncs.com/mrcong.css" type="text/css">\
<script type="text/javascript" async="async" src="https://hmau.oss-cn-shanghai.aliyuncs.com/mrcong.js">'

// 定义响应体
const body = $response.body.replace(regex, replace_str);

$done({ body:body })

*/

let regex_head='<head>';
let style=`<head><style>\
div.item-list {display: none !important;}
div.e3lan.e3lan-in-post1 {display: none !important;}
div#text-html-widget-7 {display: none !important;}
div.share-post {display: none !important;}
iframe[src*="a-ads"] {display: none !important;}
#fb-root {display: none !important;}
div#disqus_recommendations {display: none !important;}
div#disqus_thread {display: none !important;}
div#footer-first {display: none !important;}
div.e3lan.e3lan-bottom {display: none !important;}
div.e3lan.e3lan-top {display: none !important;}
div.social-icons {display: none !important;}
div#sub-frame-error {display: none !important;}
div#text-html-widget-6 {display: none !important;}
</style>\
<script id="remove" type='text/javascript'>

var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].src = "about:blank";
}

const iframesToRemove = document.querySelectorAll('iframe');
iframesToRemove.forEach(iframe => {
    iframe.remove();
});

const ids = [
    '__stay_inject_parse_video_js',
    '__stay_inject_selecte_ad_tag_js_',
    'jetpack-stats-js',
    'jetpack-stats-js-after',
    'tie-scripts-js-extra',
    'disqus_count-js-extra'
];

ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
});
</script>`

let body = $response.body.replace(regex_head,style);

$done({body:body});
