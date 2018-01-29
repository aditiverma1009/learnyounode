const http = require('http');

function httpclient() {
  const arg1 = process.argv[2];
  http.get(arg1, (response) => {
    console.log(response.setEncoding('utf8'));
    response.on('data', data => data.forEach(instance => console.log(`${instance}\n`)));
    // console.log(data);
    response.on('error', (error) => {
    // console.log(error);
    });
    response.on('end', (end) => {
    // console.log(end);
    });
  });
}
module.exports = httpclient;
