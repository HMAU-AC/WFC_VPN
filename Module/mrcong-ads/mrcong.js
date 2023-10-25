// 替换iframes src中的链接为about:blank
var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].src = "about:blank";
}

document.addEventListener('DOMContentLoaded', function() {
    // 选择所有iframe元素
    var iframeElements = document.querySelectorAll('iframe');

    // 遍历所有选定的元素并删除它们
    for (var i = 0; i < iframeElements.length; i++) {
        iframeElements[i].remove();
        console.log("删除了 " + (i+1) + " 个iframe元素。")
    }

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
            console.log("删除了 id为 " + id + " 的script-ad元素。")
        }
    });

    var scripts = Array.from(document.getElementsByTagName('script'));
    var urlsToRemove = [
        "https://connect.facebook.net/vi_VN/sdk.js?hash=925333dad855fb0487f4308cfcb70762",
        "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&amp;version=v2.7&amp;appId=449528141898952",
        "https://dujbkoxapnf.com/lcimp?id=1989833"
    ];
    for (var i = scripts.length - 1; i >= 0; i--) {
        if (urlsToRemove.includes(scripts[i].src)) {
            scripts[i].parentNode.removeChild(scripts[i]);
            console.log( "删除了 " + (scripts.length - i) + " 个script元素。" );
        }
    }

    // 删除特定的<style>标签
    var styles = document.getElementsByTagName('style');
    for (var i = 0; i < styles.length; i++) {
        if (styles[i].type === "text/css" && styles[i].getAttribute("data-fbcssmodules") === "css:fb.css.base css:fb.css.dialog css:fb.css.iframewidget css:fb.css.customer_chat_plugin_iframe") {
            styles[i].parentNode.removeChild(styles[i]);
        }
    }

    // 删除特定的<script>标签
    var scriptstoads = document.getElementsByTagName('script');
    var scriptContent = "(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = \"//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.7&appId=449528141898952\";\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));";
    for (var i = 0; i < scriptstoads.length; i++) {
        if (scriptstoads[i].innerHTML.trim() === scriptContent) {
            scriptstoads[i].parentNode.removeChild(scriptstoads[i]);
        }
    }

    // 遍历页面上的所有元素，为每个元素创建一个克隆，然后用克隆替换原始元素
    var allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        var elementClone = allElements[i].cloneNode(true);
        allElements[i].parentNode.replaceChild(elementClone, allElements[i]);
    }
});

// 根据post-thumbnail类名（class）来允许点击的节点
document.addEventListener('click', function(event) {
    // 检查点击的元素是否具有 post-thumbnail 类名
    if (event.target.classList.contains("post-thumbnail")) {
        // 阻止默认行为（跳转到新页面）
        event.preventDefault();
        
        // 这里可以添加你自己的逻辑，比如展示其他内容或提示信息
        console.log("点击事件已禁止");
    }
});