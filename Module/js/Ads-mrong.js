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
// 替换iframes scr""中的链接为about:blank
var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].src = "about:blank";
}

// 删除网页中所有的iframe标签
const iframesToRemove = document.querySelectorAll('iframe');
iframesToRemove.forEach(iframe => {
    iframe.remove();
});

// 根据scripts中的ID来删除scripts标签
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

// 根据scripts中的scr“”中的链接来定位删除scripts标签
var scripts = document.getElementsByTagName('script');
var urlsToRemove = [
    "https://connect.facebook.net/vi_VN/sdk.js?hash=925333dad855fb0487f4308cfcb70762",
    "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&amp;version=v2.7&amp;appId=449528141898952",
	"https://dujbkoxapnf.com/lcimp?id=1989833",
	""
];
for (var i = 0; i < scripts.length; i++) {
    if (urlsToRemove.includes(scripts[i].src)) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }
}

// 要删除特定的<style>标签,你可以使用JavaScript的DOM操作。你可以通过type和data-fbcssmodules属性找到特定的<style>标签，然后删除它
// 这段代码会在页面加载完成后，找到所有的<style>元素,检查它们的type和data-fbcssmodules属性是否与给定的值匹配,如果匹配,则从它们的父节点中删除它们。
var styles = document.getElementsByTagName('style');
    for (var i = 0; i < styles.length; i++) {
        if (styles[i].type === "text/css" && styles[i].getAttribute("data-fbcssmodules") === "css:fb.css.base css:fb.css.dialog css:fb.css.iframewidget css:fb.css.customer_chat_plugin_iframe") {
            styles[i].parentNode.removeChild(styles[i]);
        }
    }
// 要删除特定的<script>标签，你需要找到一个可以唯一标识该标签的属性或特征。在你给出的例子中，这个<script>标签的内容是唯一的。你可以遍历所有的<script>标签，然后检查它们的innerHTML是否与给定的字符串匹配。如果匹配，就删除它
// 这段代码会在页面加载完成后，找到所有的<script>元素，检查它们的innerHTML是否与给定的字符串匹配，如果匹配，则从它们的父节点中删除它们。注意，我们使用trim()方法来删除字符串两端的空白字符，以确保匹配的准确性
var scriptstoads = document.getElementsByTagName('script');
var scriptContent = "(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = \"//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7&appId=449528141898952\";\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));";
for (var i = 0; i < scriptstoads.length; i++) {
    if (scriptstoads[i].innerHTML.trim() === scriptContent) {
        scriptstoads[i].parentNode.removeChild(scriptstoads[i]);
    }
}

</script>`

let body = $response.body.replace(regex_head,style);

$done({body:body});

