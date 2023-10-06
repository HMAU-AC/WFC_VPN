function hrefAttribute_set() {
    var href = document.querySelectorAll("a");
    var i;
    if (href.length > 0) {
        for (i = 0; i < href.length; i++) {
            href[i].target = "_self";
        }
    }
};
var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
  var iframe = iframes[i];
  iframe.parentNode.removeChild(iframe);
}
