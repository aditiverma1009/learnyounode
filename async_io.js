const fs = require('fs');

const validateIP = (validatearg) => {
  if (validatearg === null || validatearg === undefined) {
    return true;
  }
  return false;
};

// const checkPathExists = path => fs.exists(path, (exists) => {
//   if (exists) {
//     return true;
//   }
//   return false;
// });

const io = (args, callback) => {
  if (validateIP((args)) === true) {
    return false;
  }
  // if (checkPathExists(args)) {
  //   return true;
  // }
  let solution = 0;
  fs.readFile(args, (err, data) => {
    if (err) { return false; }
    const str = data.toString();
    const newstr = str.split('\n');
    solution = newstr.length - 1;
    callback(solution);
    return true;
  });
  return true;
};

// const argue = process.argv;
// io(argue);
// io('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
// io('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
module.exports = io;

// given solution
// var fs = require('fs')
//    var file = process.argv[2]
//
//    fs.readFile(file, function (err, contents) {
//      if (err) {
//        return console.log(err)
//      }
//      // fs.readFile(file, 'utf8', callback) can also be used
//      var lines = contents.toString().split('\n').length - 1
//      console.log(lines)
//    })
