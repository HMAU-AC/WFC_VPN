//let headers = $response.headers;
//headers['X-Frame-Options'] = "deny";
//headers['Content-Security-Policy'] = "frame-ancestors 'self'";
let regex_head='<head>';
let style=`<head><style>
.share-post, iframe[src*="a-ads"], #fb-root, .gfycatresponsive, .e3lan.e3lan-bottom, .e3lan.e3lan-top, .social-icons, div#sub-frame-error {
display: none !important;
}
</style>`

let body=$response.body.replace(regex_head,style);

$done({body});


