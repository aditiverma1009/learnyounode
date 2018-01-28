const fs = require('fs');

const validateIP = (validatearg) => {
  if (validatearg === null || validatearg === undefined) {
    return true;
  }
  return false;
};

const checkPathExists = path => fs.existsSync(path, (exists) => {
  if (exists) {
    return true;
  }
  return false;
});

const io = (args) => {
  if (validateIP((args)) === true) {
    return false;
  }
  const filepath = args;
  if (checkPathExists(filepath) === false) {
    return false;
  }
  const buf = fs.readFileSync(filepath);
  const str = buf.toString();
  const newstr = str.split('\n');
  console.log(newstr.length - 1);
  return newstr.length - 1;
};

// const argue = process.argv;
// io(argue);
// io('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
io('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
module.exports = io;
