let regex_head='<head>';
let Style='<head><style>.pc-ads-01,.pc-ads-02,.pc-ads-03,.asmr18,.asmr18_img,.sp-ads-01,.sp-ads-02,.sp-ads-03{display: none!important;clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px)!important;}</style>';
//let Style='<head><link rel="stylesheet" href="https://achmau.oss-cn-shanghai.aliyuncs.com/WFC_Backup/Module/loon-js/mrcong.css">';
//let regex_body='</body>';
//let JavaScript='<script async="async" src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';
//let body=$response.body.replace(regex_head,Style).replace(regex_body,JavaScript);$done({body});
let body=$response.body.replace(regex_head,Style);$done({body});


