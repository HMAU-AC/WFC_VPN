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


