/*
// 定义 CSS/JS
const regex = '<head>';
const replace_str = '<head>\
<link rel="stylesheet" href="https://hmau.oss-cn-shanghai.aliyuncs.com/mrcong.css" type="text/css">\
<script type="text/javascript" async="async" src="https://hmau.oss-cn-shanghai.aliyuncs.com/mrcong.js">'

// 定义响应体
const body = $response.body.replace(regex, replace_str);

$done({ body:body })

*/

let headers = $response.headers;
headers['X-Frame-Options'] = "deny";
headers['Content-Security-Policy'] = "frame-ancestors 'none'";

let regex_head='<head>';
let style=`<head><style>
div.item-list {display: none !important;}
div.e3lan.e3lan-in-post1 {display: none !important;}
div#text-html-widget-7 {display: none !important;}
div.share-post {display: none !important;}
iframe[src*="a-ads"] {display: none !important;}
#fb-root {display: none !important;}
div.e3lan.e3lan-bottom {display: none !important;}
div.e3lan.e3lan-top {display: none !important;}
div.social-icons {display: none !important;}
div#sub-frame-error {display: none !important;}
div#text-html-widget-6 {display: none !important;}
</style>\
<script id="remove" type='text/javascript'>
  // 使用document.getElementsByTagName方法获取到所有的iframe标签，并将其存储在一个NodeList中
  const iframes = document.getElementsByTagName('iframe');
  // 将NodeList转换为数组，并遍历删除每个iframe标签
  Array.from(iframes).forEach((iframe) => {
    iframe.remove();
  };
    
</script>\    
<script id="remove" type='text/javascript'>    
    
  const disqus_count = document.getElementById('disqus_count-js-extra');
  disqus_count.remove();
</script>\    
<script id="remove" type='text/javascript'>

  const tie = document.getElementById('tie-scripts-js-extra');
  tie.remove();
</script>\    
<script id="remove" type='text/javascript'>

  const jetpack = document.getElementById('jetpack-stats-js-after');
  jetpack.remove();
</script>\    
<script id="remove" type='text/javascript'>

  const jetpacks = document.getElementById('jetpack-stats-js');
  jetpacks.remove();
</script>\    
<script id="remove" type='text/javascript'>
/* 
    // 删除所有没有id的 scripts
{
  var scripts = document.querySelectorAll('script:not([id])');
  scripts.forEach(function(script) {
  script.remove();
  });
    }
    
*/ 

// 删除所有a标签中的about:blank
</script>\    
<script id="remove" type='text/javascript'>
  // 获取所有标签
const tabs = document.querySelectorAll('a');

  // 遍历每个标签
tabs.forEach(tab => {
  // 检查标签的URL是否为"about:blank"
  if (tab.href === 'about:blank') {
  // 删除标签
    tab.remove();
  }
}
</script>\    

<script id="remove" type='text/javascript'>
// 删除所有span标签中的about:blank    

// 获取所有的<span>标签
const spans = document.querySelectorAll('span');

  // 遍历每个<span>标签
spans.forEach(span => {
  // 删除<span>标签
  span.remove();
}

    </script>\    
<script id="remove" type='text/javascript'>
      const ad = document.getElementById('__stay_inject_selecte_ad_tag_js_');
      ad.remove();
    };
    
</script>\

<script id="removevd" type='text/javascript'>
const advd = document.getElementById('__stay_inject_parse_video_js');
      advd.remove();
</script>\
<script id="remove" type='text/javascript'>
    
// 删除所有img标签中的about:blank

// 获取所有img标签
const images = document.querySelectorAll('img');

// 遍历每个img标签
images.forEach(image => {
  // 检查img标签的src属性是否为"about:blank"
  if (image.src === 'about:blank') {
  // 删除img标签
    image.remove();
  }
};
</script>\    

`

let scriptb =`<script id="removemrcong" type='text/javascript'>
var scripts = document.querySelectorAll('script:not([id])');
  scripts.forEach(function(script) {
  script.remove();
  };
</script></body>`

let body=$response.body.replace(regex_head,style,scriptb);

$done({headers, body:body});
