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

// 判断终端类型
var userAgent = navigator.userAgent.toLowerCase();
var isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/.test(userAgent);
var isTablet = /ipad/.test(userAgent);
var isDesktop = !isMobile && !isTablet;

// 执行相应的代码块
if (isMobile) {
    // 手机终端代码
    var divElements = document.querySelectorAll('div[style="width: 300px; height: 250px; margin: 0 auto 20px auto;"]');
    divElements.forEach(function(divElement) {
        divElement.parentNode.removeChild(divElement);
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


window.onload = function() {
if (false) {
(function(window, document) {
var adTag = '<script type="text/javascript" src="https://js.boost-next.co.jp/t/010/184/a100010184.js"></sc'+'ript>';
document.write('<div id="bcon" style="position: relative;width:0px;"></div><div id="is_w_area" style="display: none; opacity: 0; width: 100%; height: 100%; position: fixed; left: 0px; bottom: 0px; z-index: 1000000000; background-color: rgba(0, 0, 0, 0.8);text-align: center;"><div id="inview_inner" style="position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;margin: auto;height: 524px;"><div id="ad_top_area">'+adTag+'</div><span id="ad_middle_area" style="z-index: 1000000001;display: block!important;background-color: rgba(0,0,0,0.6);margin: auto;padding: 0!important;height: 24px;"><div id="close_button" style="color:#FFF; margin:0 auto; font-size:10px; line-height:22px; width:30px; height:22px; border: solid 1px #999; background-color:#000; text-align: center; cursor:default;">&times;</div></span><div id="ad_bottom_area">'+adTag+'</div></div></div><style id="inview_style"></style>');
window.addEventListener('load', function() {
var inview_area = document.getElementById('is_w_area');
var inview_inner = document.getElementById('inview_inner');
var top_area = document.getElementById('ad_top_area');
var middle_area = document.getElementById('ad_middle_area');
var bottom_area = document.getElementById('ad_bottom_area');
var inview_style = document.getElementById('inview_style');
var sc_rate = window.innerWidth / 300;var VisTime = 1000;
var iframe = inview_inner.getElementsByTagName('iframe');
for(var i=0;i<iframe.length;i++) {
if(/gn_delivery/.test(iframe[i].id)){
iframe[i].style.transform='scale('+sc_rate+')';
iframe[i].style.transformOrigin='top';
}
}
inview_style.innerText = '#is_w_area img{width:'+300*sc_rate+'px;height:'+250*sc_rate+'px;}#ad_top_area,#ad_bottom_area{width:'+300*sc_rate+'px!important;height:'+250*sc_rate+'px!important;}';
inview_inner.style.height = (250*sc_rate-250)*2+524+'px';

var Y_CHECK = function(){
fade_in();
};
document.addEventListener('scroll',Y_CHECK, false );
document.addEventListener('touchmove',Y_CHECK, false );

var fade_in = function(){
var bodyHeight=document.body.scrollHeight;
var devHeight=window.innerHeight;
var docElm = document.documentElement , docBody = document.body;
var scroll_Y = docElm.scrollTop || docBody.scrollTop;
if(bodyHeight-devHeight<=scroll_Y){
is_w_area.style.display = 'block';
var VisCount = new Date() - 0;
var OpaAct = setInterval(function() {
var ComTime = new Date() - VisCount;
if (ComTime > VisTime) {
clearInterval(OpaAct);
ComTime = VisTime;
}
inview_area.style.opacity = (ComTime / VisTime);
}, 10);
document.removeEventListener('scroll',Y_CHECK, false );
document.removeEventListener('touchmove',Y_CHECK, false );
}
};
var close_button = document.getElementById('close_button');
close_button.addEventListener('click', function() {inview_area.style.display = 'none';});
});
})(window, document);

}
};