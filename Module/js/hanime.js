let regex_head='<head>';
let style=`<head><style>
.mb-5.htvad.desktop.active {
    display: none !important;
}
.htvad.desktop.ntv.hidden-sm-and-down.flex.row.my-3 {
    display: none !important;
}
.user_comments {
    display: none !important;
}
.center_unit.htvad.desktop.active.smart_banner {
    display: none !important;
}
</style></head>`
let body=$response.body.replace(regex_head,style);
$done({body});