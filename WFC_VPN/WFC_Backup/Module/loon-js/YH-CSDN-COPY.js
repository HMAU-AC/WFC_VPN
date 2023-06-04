let ele = '<head>';
let eleReplace = '<head><script type="text/javascript"async="async"src="https://greasyfork.org/scripts/438252-csdn%E5%8D%9A%E5%AE%A2%E6%8F%92%E4%BB%B6/code/CSDN%E5%8D%9A%E5%AE%A2%E6%8F%92%E4%BB%B6.user.js"</script>'
let body = $response.body
    .replace(ele, eleReplace)
$done({ body });
