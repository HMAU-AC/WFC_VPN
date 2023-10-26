// 替换iframes src中的链接为about:blank
var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].src = "about:blank";
}

// 保存原始的addEventListener函数
EventTarget.prototype._originalAddEventListener = EventTarget.prototype.addEventListener;

// 覆盖addEventListener函数
EventTarget.prototype.addEventListener = function(eventName, eventHandler) {
    // 如果是点击事件，忽略它
    if (eventName === 'click') {
        console.log('Blocked adding click event listener');
        return;
    }
    // 否则，正常添加事件监听器
    this._originalAddEventListener(eventName, eventHandler);
};

// 当DOM加载完成后执行的代码
document.addEventListener('DOMContentLoaded', function() {
    // 在DOM树构建完成后，查找所有src属性等于//fvcwqkkqmuv.com/aas/r45d/vki/1892780/60981b16.js的script元素，并删除它们
    var scriptElements = document.querySelectorAll('script[src="//fvcwqkkqmuv.com/aas/r45d/vki/1892780/60981b16.js"]');

    for (var i = 0; i < scriptElements.length; i++) {
        scriptElements[i].remove();
        console.log("删除了 " + (i+1) + " 个特定的script元素。")
    }
    // 在DOM加载完成后执行，查找id为reload-button的按钮，并删除它的onclick和jsselect属性。如果按钮不存在，或者这些属性不存在，removeAttribute方法不会有任何效果，也不会抛出错误
    var button = document.getElementById('reload-button');
    if (button) {
        button.removeAttribute('onclick');
        button.removeAttribute('jsselect');
        console.log("已删除button的onclick和jsselect属性。");
    }
    // 删除所有iframe元素
    var iframeElements = document.querySelectorAll('iframe');

    // 遍历所有选定的元素并删除它们
    for (var i = 0; i < iframeElements.length; i++) {
        iframeElements[i].remove();
        console.log("删除了 " + (i+1) + " 个iframe元素。")
    }
    // 选择所有的img元素
    var images = document.querySelectorAll('img');

    // 遍历所有选定的元素并删除无用的属性
    for (var i = 0; i < images.length; i++) {
        images[i].removeAttribute('decoding');
        images[i].removeAttribute('loading');
        images[i].removeAttribute('data-attachment-id');
        images[i].removeAttribute('data-permalink');
        images[i].removeAttribute('data-orig-file');
        images[i].removeAttribute('data-orig-size');
        images[i].removeAttribute('data-comments-opened');
        images[i].removeAttribute('data-image-meta');
        images[i].removeAttribute('data-image-title');
        images[i].removeAttribute('data-image-description');
        images[i].removeAttribute('data-image-caption');
        images[i].removeAttribute('data-medium-file');
        images[i].removeAttribute('data-large-file');
    }
});

// 当所有资源加载完成后执行的代码
window.onload = function() {
    // 选择所有iframe元素
    var iframeElements = document.querySelectorAll('iframe');

    // 遍历所有选定的元素并删除它们
    for (var i = 0; i < iframeElements.length; i++) {
        iframeElements[i].remove();
        console.log("删除了 " + (i+1) + " 个iframe元素。")
    }

    // ...其他代码...
};

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