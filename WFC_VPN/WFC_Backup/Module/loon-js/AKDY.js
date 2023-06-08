let regex_head='<head>';
let Style='<head><style>.stui-pannel_hd,.stui-pannel-box.clearfix,.stui-pannel.stui-pannel-bg.hidden-sm.hidden-xs.clearfix,.stui-foot.clearfix,img#tj,{display: none!important;clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px)!important;}</style>';
let d_body='<body>';
let d_Style='<body><div style="position: fixed;top: 60px;right:0;z-index:999;width:250px;display:none">';
//let Style='<head><link rel="stylesheet" href="https://achmau.oss-cn-shanghai.aliyuncs.com/WFC_Backup/Module/loon-js/mrcong.css">';
//let regex_body='</body>';
//let JavaScript='<script async="async" src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';
//let body=$response.body.replace(regex_head,Style).replace(regex_body,JavaScript);$done({body});
let body=$response.body.replace(regex_head,Style,d_body,d_Style);$done({body});

//const write= $persistentStore.write(regex_head,Style, "mrcong_ads");
//let read = $persistentStore.read("mrcong_ads");
//$done({ read });
