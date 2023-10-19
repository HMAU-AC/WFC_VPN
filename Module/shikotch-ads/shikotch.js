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

document.addEventListener('DOMContentLoaded', function() {
    var scripts = document.getElementsByTagName('script');
    var regex = /https:\/\/[A-Za-z0-9]+\.boost-next\.co\.jp\/.*/;
    for (var i = scripts.length - 1; i >= 0; i--) {
        if (regex.test(scripts[i].src)) {
            scripts[i].parentNode.removeChild(scripts[i]);
            console.log("删除了 " + i + " 个div元素。")
        }
    }
});

// 判断终端类型
var userAgent = navigator.userAgent.toLowerCase();
var isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/.test(userAgent);
var isTablet = /ipad/.test(userAgent);
var isDesktop = !isMobile && !isTablet;

// 执行相应的代码块
if (isMobile) {
    // 手机终端代码
window.onload = function() {
function removeDivElements(selector) {
    var divElements = document.querySelectorAll(selector);
    var count = 0;
    divElements.forEach(function(divElement) {
        divElement.parentNode.removeChild(divElement);
        count++;
    });
        console.log("删除了 " + count + " 个div元素。");
} // removeDivElements结束
removeDivElements('div[style="width: 300px; height: 250px; margin: 0 auto 20px auto;"]');
removeDivElements('div[style="width: 300px; height: 250px; margin: 0 auto;"]');
removeDivElements('div[style="width: 300px; height: 250px; margin: 10px auto 15px auto;"]');
};

// 网页内容加载之前删除所有<div class="pc-ads-01">元素及其所有子元素，你可以在DOMContentLoaded事件处理器中执行此操作
document.addEventListener('DOMContentLoaded', function() {
    // 选择所有class为'pc-ads-01'的元素
    var adElements1 = document.querySelectorAll('.sp-ads-01');
    var adElements2 = document.querySelectorAll('.sp-ads-02');
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
// 在页面加载完成之前执行删除直接使用脚本语句的script标签的操作（DOM内容构建完成后）
document.addEventListener('DOMContentLoaded', function() {
        var scriptTags = document.getElementsByTagName('script');
        var count = 0;
        for (var i = scriptTags.length - 1; i >= 0; i--) {
            var scriptContent = scriptTags[i].textContent.trim();
            if (scriptContent !== "") {
                scriptTags[i].parentNode.removeChild(scriptTags[i]);
                count++;
            }
        }
        console.log("删除了 " + count + " 个直接使用脚本语句的script标签。");
        
 });

} else if (isTablet) {
    // 平板终端代码

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


} else if (isDesktop) {
    // 电脑终端代码

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

window.onload = function() {
    var scripts = document.getElementsByTagName('script');
    var regex = /https:\/\/[A-Za-z0-9]+\.boost-next\.co\.jp\/.*/;
    for (var i = scripts.length - 1; i >= 0; i--) {
        if (regex.test(scripts[i].src)) {
            scripts[i].parentNode.removeChild(scripts[i]);
            console.log('window.onload jp')
        }
    }
};

}
// 判断终端结束

