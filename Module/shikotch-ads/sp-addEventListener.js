(function(window, document) {
    var originalAddEventListener = window.addEventListener;
    
    window.addEventListener = function() {}; // 禁用 addEventListener
    
    var adTag = '<script type="text/javascript" src="https://js.boost-next.co.jp/t/010/184/a100010184.js"></sc'+'ript>';
    document.write('<div id="bcon" style="position: relative;width:0px;"></div><div id="is_w_area" style="display: none; opacity: 0; width: 100%; height: 100%; position: fixed; left: 0px; bottom: 0px; z-index: 1000000000; background-color: rgba(0, 0, 0, 0.8);text-align: center;"><div id="inview_inner" style="position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;margin: auto;height: 524px;"><div id="ad_top_area">'+adTag+'</div><span id="ad_middle_area" style="z-index: 1000000001;display: block!important;background-color: rgba(0,0,0,0.6);margin: auto;padding: 0!important;height: 24px;"><div id="close_button" style="color:#FFF; margin:0 auto; font-size:10px; line-height:22px; width:30px; height:22px; border: solid 1px #999; background-color:#000; text-align: center; cursor:default;">&times;</div></span><div id="ad_bottom_area">'+adTag+'</div></div></div><style id="inview_style"></style>');
    
    // 其他代码...
    
    // 在这里，你可以使用 originalAddEventListener 来添加事件监听器
    originalAddEventListener.call(window, 'load', function() {
        // 你的事件处理函数
    });
    
    })(window, document);