let body = $response.body;

/* 定义正则表达式常量 */
const regexPatterns = getRegexPatterns();

/* 执行替换操作 */
regexPatterns.forEach(pattern => {
    body = body.replace(pattern, '');
});

// 返回修改后的 body
$done({ body });

function getRegexPatterns() {
    return [
        // 移除 Google Analytics 代码段
        /<!-- Global site tag \(gtag\.js\) - Google Analytics -->\s*<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-CYVVX8LXNF"><\/script>\s*<script>\s*window\.dataLayer = window\.dataLayer \|\| \[];\s*function gtag\(\){dataLayer\.push\(arguments\);}\s*gtag\('js', new Date\(\)\);\s*gtag\('config', 'G-CYVVX8LXNF'\);\s*<\/script>/g,
        
        // 移除 ouo_token 代码段
        /<script type="text\/javascript">\s*var ouo_token = 'xR4hnRab';\s*var domains = \['anonfiles.com' , 'drive.google.com' , 'mediafire.com' , 'mega.nz', 'terabox.com', 'zippyshare.com', 'gofile.io', 'nephobox.com', 'momerybox.com', 'teraboxapp.com', '1024terabox.com', 'freeterabox.com'\];\s*<\/script>\s*<script src="\/\/cdn\.ouo\.io\/js\/full-page-script\.js"><\/script>/g,
        
        // 移除 Facebook SDK 代码段
        /<script>\(function\(d, s, id\) {\s*var js, fjs = d.getElementsByTagName\(s\)\[0\];\s*if \(d.getElementById\(id\)\) return;\s*js = d.createElement\(s\); js.id = id;\s*js.src = "\/\/connect.facebook.net\/vi_VN\/sdk.js#xfbml=1&version=v2.7&appId=449528141898952";\s*fjs.parentNode.insertBefore\(js, fjs\);\s*}\(document, 'script', 'facebook-jssdk'\)\);<\/script>/g,
        
        // 移除特定的 script 标签
        /<script data-cfasync="false" type="text\/javascript" src="\/\/nrs6ffl9w.com\/aas\/r45d\/vki\/1998889\/7a88135a.js" async onerror="xlwlzhd\(\)"><\/script>/g,
        
        // 移除 disqus_count-js-extra 代码段
        /<script type="text\/javascript" id="disqus_count-js-extra">\s*\/\* <!\[CDATA\[\s*\*\/\s*var countVars = \{"disqusShortname":"mr-cong"\};\s*\/\* \]\]> \*\/\s*<\/script>/g,
        
        // 移除 disqus_count-js 代码段
        /<script type="text\/javascript" src="https:\/\/misskon.com\/wp-content\/plugins\/disqus-comment-system\/public\/js\/comment_count.js" id="disqus_count-js"><\/script>/g,
        
        // 移除 tie-scripts-js-extra 代码段
        /<script type="text\/javascript" id="tie-scripts-js-extra">\s*\/\* <!\[CDATA\[\s*\*\/\s*var tie = \{"mobile_menu_active":"true","mobile_menu_top":"","lightbox_all":"","lightbox_gallery":"","woocommerce_lightbox":"","lightbox_skin":"dark","lightbox_thumb":"vertical","lightbox_arrows":"","sticky_sidebar":"1","is_singular":"","SmothScroll":"","reading_indicator":"","lang_no_results":"No Results","lang_results_found":"Results Found"\};\s*\/\* \]\]> \*\/\s*<\/script>/g,
        
        // 移除 obfuscated script 代码段
        /<script[^>]*>\s*\(function\(_0x2dbc8e,_0x433c66\)[\s\S]*?<\/script>/gs,
        
        // 移除广告 iframe 标签
        /<iframe.*?>.*?<\/iframe>/g,
        
        // 移除 Disqus 评论相关的 HTML 代码
        /<div id="disqus_thread"><\/div>/g,
        
        // 移除 Disqus 脚本
        /<script[^>]*disqus[^>]*><\/script>/g,
        
        // 移除包含 Disqus 的嵌入变量脚本
        /<script[^>]*id="disqus_embed-js-extra"[^>]*>[^<]*<\/script>/g,
        /<script[^>]*id="disqus_embed-js"[^>]*>[^<]*<\/script>/g,
        
        // 移除 Disqus 计数脚本
        /<script[^>]*id="dsq-count-scr"[^>]*>[^<]*<\/script>/g,
        
        // 移除 Pinterest 插件脚本
        /<script async defer data-pin-hover="true" data-pin-tall="true" data-pin-lang="vi" data-pin-save="true" src="\/\/assets.pinterest.com\/js\/pinit.js"><\/script>/g
    ];
}