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


// window.onload会在所有的图片、样式表和其他资源都加载完成后触发
window.onload = function() {
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
}
