let regex_head='<head>';
let style=`<head><style>
.share-post, iframe {
display: none !important;
}
</style></head>`
let body=$response.body.replace(regex_head,style);
$done({body});