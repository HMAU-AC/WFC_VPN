let regex_head='<head>';
let Style='<head><style>.e3lan.e3lan-top,.text-html-box,.share-post,.social-icons,footer#theme-footer,.top-nav,#theme-footer,div#text-html-widget-6,#footer-widget-area,iframe,#sub-frame-error,.e3lan.e3lan-top,div#calendar_wrap,.footer-widget-top{display: none!important;clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px)!important;}</style>';
//let Style='<head><link rel="stylesheet" href="https://achmau.oss-cn-shanghai.aliyuncs.com/WFC_Backup/Module/loon-js/mrcong.css">';
//let regex_body='</body>';
//let JavaScript='<script async="async" src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';
//let body=$response.body.replace(regex_head,Style).replace(regex_body,JavaScript);$done({body});
let body=$response.body.replace(regex_head,Style);$done({body});

//const write= $persistentStore.write(regex_head,Style, "mrcong_ads");
//let read = $persistentStore.read("mrcong_ads");
//$done({ read });
