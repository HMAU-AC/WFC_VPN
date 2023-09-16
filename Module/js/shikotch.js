let regex_head='<head>';
let style=`<head><style>
.asmr18 {
    display: none !important;
}
.pc-ads-01 {
    display: none !important;
}
.pc-ads-02 {
    display: none !important;
}
</style></head>`
let body=$response.body.replace(regex_head,style);
$done({body});