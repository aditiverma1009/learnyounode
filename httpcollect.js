const bl = require('bl');
const http = require('http');
// const fs = require('fs');


const validateIP = (validatearg) => {
  // console.log(validatearg, '****');
  if (validatearg === null || validatearg === undefined) {
    return true;
  }
  return false;
};

function httpcollect(arg1, callback) {
  if (validateIP(arg1) === true) {
    callback(false);
    // console.log('error');
  }
  http.get(arg1, (response) => {
    response.pipe(bl((err, data) => {
      if (err) { return console.error(err); }
      const dataString = data.toString();
      console.log(dataString.length);
      console.log(dataString);
      return true;
    }));
    callback(true);
  });
}
// httpcollect();
module.exports = httpcollect;
