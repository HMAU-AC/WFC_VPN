// 替换iframes scr""中的链接为about:blank
var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].src = "about:blank";
}

// DOMContentLoaded会在DOM树构建完成后就触发，不需要等待其他资源加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 选择所有iframe元素
    var iframeElements = document.querySelectorAll('iframe');

    // 遍历所有选定的元素并删除它们
    for (var i = 0; i < iframeElements.length; i++) {
        iframeElements[i].remove();
    }
});


// 创建一个观察器实例
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // 选择所有iframe元素
        var iframeElements = document.querySelectorAll('iframe');

        // 遍历所有选定的元素并删除它们
        for (var i = 0; i < iframeElements.length; i++) {
            iframeElements[i].remove();
        }
    });    
});
// 配置观察器：观察子节点和后代的变化
var config = { childList: true, subtree: true };
// 传入目标节点和观察选项
observer.observe(document.body, config);



// 删除网页中所有的iframe标签
const iframesToRemove = document.querySelectorAll('iframe');
iframesToRemove.forEach(iframe => {
    iframe.remove();
});

// 网页内容加载之前删除所有<div class="pc-ads-01">元素及其所有子元素，你可以在DOMContentLoaded事件处理器中执行此操作
document.addEventListener('DOMContentLoaded', function() {
    // 选择所有class为'pc-ads-01'的元素
    var adElements1 = document.querySelectorAll('.pc-ads-01');
    var adElements2 = document.querySelectorAll('.pc-ads-02');
    var adElements3 = document.querySelectorAll('.asmr18');

    // 遍历所有选定的元素并删除它们
    for (var i = 0; i < adElements1.length; i++) {
        adElements1[i].remove();
    }

    for (var i = 0; i < adElements2.length; i++) {
        adElements2[i].remove();
    }

    for (var i = 0; i < adElements3.length; i++) {
        adElements3[i].remove();
    }
});

// 这段代码将创建一个MutationObserver实例，该实例将监听document.body及其所有子节点和后代的变化。每当DOM发生变化时，它都会选择所有<div class="pc-ads-01">元素并删除它们
// 创建一个观察器实例
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // 选择所有class为'pc-ads-01'的元素
        var adElements1 = document.querySelectorAll('.pc-ads-01');
        var adElements2 = document.querySelectorAll('.pc-ads-02');
        var adElements3 = document.querySelectorAll('.asmr18');

        // 遍历所有选定的元素并删除它们
        for (var i = 0; i < adElements1.length; i++) {
            adElements1[i].remove();
        }

        for (var i = 0; i < adElements2.length; i++) {
            adElements2[i].remove();
        }

        for (var i = 0; i < adElements3.length; i++) {
            adElements3[i].remove();
        }
    });    
});
// 配置观察器：观察子节点和后代的变化
var config = { childList: true, subtree: true };
// 传入目标节点和观察选项
observer.observe(document.body, config);


// 根据scripts中的scr“”中的链接来循环定位删除scripts标签
// 由于在循环过程中删除元素可能会导致索引问题，你可能需要从后向前遍历<script>标签
document.addEventListener('DOMContentLoaded', function() {
    var scripts = document.getElementsByTagName('script');
    var regex = /https:\/\/[A-Za-z0-9]+\.boost-next\.co\.jp\/.*/;
    for (var i = scripts.length - 1; i >= 0; i--) {
        if (regex.test(scripts[i].src)) {
            scripts[i].parentNode.removeChild(scripts[i]);
        }
    }
});

window.onload = function() {
    var scripts = document.getElementsByTagName('script');
    var regex = /https:\/\/[A-Za-z0-9]+\.boost-next\.co\.jp\/.*/;
    for (var i = scripts.length - 1; i >= 0; i--) {
        if (regex.test(scripts[i].src)) {
            scripts[i].parentNode.removeChild(scripts[i]);
        }
    }
};

var divElements = document.querySelectorAll('div[style="width: 300px; height: 250px; margin: 0 auto 20px auto;"]');
divElements.forEach(function(divElement) {
    divElement.parentNode.removeChild(divElement);
});