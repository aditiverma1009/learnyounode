const http = require('http');

function httpclient(arg1, callback) {
  // const rawData = '';
  // if (arg1 === undefined || arg1 === null) {
  //   return callback('err');
  // }
  // const arg1 = process.argv[2];
  http.get(arg1, (response) => {
    response.setEncoding('utf-8');
    // console.log(dataUTF);
    // let body = [];
    // request.on('data', (chunk) => {
    // body.push(chunk);
    //  })
    return callback(response.statusCode);
  }).on('error', e => callback(e.code));
}

// httpclient();
module.exports = httpclient;
