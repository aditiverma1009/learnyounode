const fs = require('fs');

const validateIP = (validatearg) => {
  if (validatearg === null || validatearg === undefined) {
    return true;
  }
  return false;
};

const checkPathExists = path => fs.exists(path, (exists) => {
  if (exists) {
    return true;
  }
  return false;
});

const io = () => {
  const args = process.argv[2];
  if (validateIP((args)) === true) {
    return false;
  }
  const filepath = args;
  if (checkPathExists(filepath) === false) {
    return false;
  }
  fs.readFile(filepath, (err, data) => {
    if (err) { console.log('file error'); return false; }
    // console.log(typeof (data));// it is a buffer object
    const str = data.toString();
    // console.log(typeof (str));// obj converted to string
    const newstr = str.split('\n');
    console.log(newstr.length - 1);
    // console.log(data);
    return true;
  });
  // console.log('working');
  return true;
};
io();
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
