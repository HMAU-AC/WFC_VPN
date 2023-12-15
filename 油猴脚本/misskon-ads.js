// ==UserScript==
// @name         Ad Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block ads on the current page
// @author       misskon去广告
// @match        *://misskon.com/*
// @grant        GM_webRequest
// ==/UserScript==

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

    GM_webRequest({
        urls: [
            '*://misskon.com/wp-content/themes/mrcong/js/tie-scripts.js',
            '*://fvcwqkkqmuv.com/aas/r45d/vki/1998889/b0d67088.js',
            '*://cdn.ouo.io/js/full-page-script.js'
        ],
        onBeforeSendHeaders: function(details) {
            return {cancel: true};
        }
    });

})();