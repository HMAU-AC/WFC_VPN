let regex_head='<head>';
let Style='<head><style>.stui-pannel_hd,.stui-pannel-box.clearfix,.stui-pannel.stui-pannel-bg.hidden-sm.hidden-xs.clearfix,.stui-foot.clearfix,img#tj,{display: none!important;clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px)!important;}</style>';

let body=$response.body.replace(regex_head,Style);$done({body});

//const write= $persistentStore.write(regex_head,Style, "mrcong_ads");
//let read = $persistentStore.read("mrcong_ads");
//$done({ read });
