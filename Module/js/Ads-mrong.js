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
const iframes = document.querySelectorAll('iframe');
iframes.forEach(iframe => {
  iframe.remove();
});

const advd = document.getElementById('__stay_inject_parse_video_js');
			advd.remove();
const ad = document.getElementById('__stay_inject_selecte_ad_tag_js_');
			ad.remove();
const jetpacks = document.getElementById('jetpack-stats-js');
			jetpacks.remove();
const jetpack = document.getElementById('jetpack-stats-js-after');
			jetpack.remove();
const tie = document.getElementById('tie-scripts-js-extra');
			tie.remove();
const disqus_count = document.getElementById('disqus_count-js-extra');
		disqus_count.remove();
</script>`

let body = $response.body.replace(regex_head,style);

$done({body:body});
