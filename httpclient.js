const http = require('http');

const validateIP = (validatearg) => {
  // console.log(validatearg, '****');
  if (validatearg === null || validatearg === undefined) {
    return true;
  }
  return false;
};

function httpclient(arg1, callback) {
  let rawData = '';
  if (validateIP(arg1) === true) {
    callback('error');
  }
  // const arg1 = process.argv[2];
  http.get(arg1, (response) => {
    response.setEncoding('utf8');
    // console.log(dataUTF);
    response.on('err', (error) => {
      console.log(error);
      callback('error');
    });

    response.on('data', (chunk) => {
      rawData = `${chunk}`;
      console.log(rawData);
      callback('data');
    });

    response.on('end', (end) => {
      callback('end');
      console.log(end);
    });
  });
}

// httpclient();
module.exports = httpclient;
