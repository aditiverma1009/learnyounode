const fs = require('fs');
const path = require('path');
// const mod = require('./module.js');

const io = (arg1, arg2, callback) => {
  const dirPath = arg1;
  const fileExt = arg2;
  // console.log(fileExt, '###');

  fs.readdir(dirPath, (err, list) => {
    if (err) {
      return callback(err);
    }

    const result = list.filter(file => path.extname(file).toLowerCase() === `.${fileExt}`);
    return callback(null, result);
  });
};

// io('/Users/aditiverma/Documents/GitHub/learnyounode/', 'txt');
// io();
module.exports = io;

// for verifying
// const io = () => {
//   const dirPath = process.argv[2];
//   const fileExt = process.argv[3];
//   //console.log(fileExt, '###');
//   if (validateIP(dirPath) === true) {
//     return false;
//   }
//   if (checkPathExists(dirPath) === false) {
//     return false;
//   }
//   // list is array of filename
//   fs.readdir(dirPath, (err, list) => {
//     if (err) { console.log('file error'); return false; }
//     const result = list.filter(file => path.extname(file) === `.${fileExt}`);
//     result.forEach((item) => {
//       console.log(item);
//     });
//     return result;
//   });
//   return true;
// };
// io();
// const argue = process.argv;
// io(argue);
// io('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
