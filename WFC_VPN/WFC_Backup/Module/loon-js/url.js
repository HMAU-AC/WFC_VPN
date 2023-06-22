            //   $persistentStore.write($network.v4.primaryAddress, "DNSPod_IP");
$httpClient.get({url: "https://linkip.adguard-dns.com/linkip/5668a67e/JaneBQBFBNSRmk6qRU4iVlhZeYg46NPo7UCMKPJdRFB", timeout: 3, headers: {Connection: "close"}},function(error, response, data){
    $done({data});
});      