const fs = require('fs');
const path = require('path');

const io = (dirPath, fileExt, callback) => {
  fs.readdir(dirPath, (err, list) => {
    if (err) { return callback(err); }
    const result = list.filter(file => path.extname(file).toLowerCase() === `.${fileExt}`);
    return callback(null, result);
  });
};
module.exports = io;
// here err,list fn is idiomatic fn -it closes acrounf io fn
/* The callback function must be called using the idiomatic node(err, data)
 convention. This convention stipulates that unless there's an error, the
 first argument passed to the callback will be null, and the second will be
 your data. In this exercise, the data will be your filtered list of files,
 as an Array. If you receive an error, e.g. from your call to
 fs.readdir(), the callback must be called with the error, and only the
 error, as the first argument. */
