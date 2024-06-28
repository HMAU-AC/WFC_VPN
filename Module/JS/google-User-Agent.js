// your-script.js
let modifiedHeaders = $request.headers;
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (Linux; Android 10; Mobile; rv:89.0) Gecko/89.0 Firefox/89.0';

$done({headers: modifiedHeaders});
