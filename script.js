var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");


var settings = { //used to configure an AJAX request to the CoinGecko API;
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr ",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response) { //makes an AJAX request to a remote server using the settings defined in the settings object and then specifies what to do when the request is successfully completed
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    doge.innerHTML = response.dogecoin.inr;
});