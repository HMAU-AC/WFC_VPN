// 你可以使用油猴脚本（Tampermonkey）来去除广告，以下是一个简单的示例：

// ==UserScript==
// @name         Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block ads on the current page
// @author       misskon去广告
// @match        *://misskon.com/*
// @grant        none
// ==/UserScript==

// 你的油猴脚本中的代码存在一些问题，应该使用 CSS 选择器来选择元素并隐藏广告。以下是修正后的写法：

(function() {
    'use strict';
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        div.item-list, 
        div.e3lan.e3lan-in-post1, 
        div#text-html-widget-7, 
        div.share-post, 
        iframe[src*="a-ads"], 
        #fb-root, 
        div#disqus_recommendations, 
        div#disqus_thread, 
        div#footer-first, 
        div.e3lan.e3lan-bottom, 
        div.e3lan.e3lan-top, 
        div.social-icons, 
        div#sub-frame-error, 
        div#text-html-widget-6, 
        div#inview_inner {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
    window.stop();
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src === 'https://misskon.com/wp-content/themes/mrcong/js/tie-scripts.js') {
            scripts[i].parentNode.removeChild(scripts[i]);
        }
    }
})();