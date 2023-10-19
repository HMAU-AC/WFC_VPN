// 替换iframes scr""中的链接为about:blank
var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].src = "about:blank";
}

// DOMContentLoaded会在DOM树构建完成后就触发，不需要等待其他资源加载完成
document.addEventListener('DOMContentLoaded', function() {
const iframesToRemove = document.querySelectorAll('iframe');
iframesToRemove.forEach(iframe => {
    iframe.remove();
    });
});

// 删除网页中所有的iframe标签
const iframesToRemove = document.querySelectorAll('iframe');
iframesToRemove.forEach(iframe => {
    iframe.remove();
});


// 这段代码会遍历页面上的所有元素，为每个元素创建一个克隆，然后用克隆替换原始元素。由于克隆不会复制事件监听器，所以这将删除所有的事件监听器
// 实际的广告可能使用更复杂的方法来触发，例如使用setTimeout或setInterval，或者动态添加事件监听器。要处理这些情况，你可能需要更复杂的解决方案，例如使用浏览器扩展或者网络代理来拦截和修改JavaScript代码
// 下面的并不一定管用
var allElements = document.getElementsByTagName('*');
for (var i = 0; i < allElements.length; i++) {
    var elementClone = allElements[i].cloneNode(true);
    allElements[i].parentNode.replaceChild(elementClone, allElements[i]);
}


