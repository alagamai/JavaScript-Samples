const https = require('https');

//let req = new XMLHttpRequest();

let req = https.get('https://restcountries.com/v3.1/name/germany');
//let req = fetch('https://restcountries.com/v3.1/name/germany');
console.log(req);
