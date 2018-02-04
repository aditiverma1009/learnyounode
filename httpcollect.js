const bl = require('bl');
const http = require('http');
// const fs = require('fs');
// bl (Buffer List)
// response.pipe(bl(function (err, data) { /* ... */ }))
function httpcollect(arg1, callback) {
  http.get(arg1, (response) => {
    response.pipe(bl((err, data) => {
      if (err) { return callback(err); }
      const dataString = data.toString();
      console.log(dataString.length);
      // console.log(dataString);
      return callback(response.statusCode);
    }));
  });
}
// httpcollect();
module.exports = httpcollect;
