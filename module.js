
const io = () => {
  const args = process.argv[2];
  if (validateIP((args)) === true) {
    return false;
  }
  const filepath = args;
  if (checkPathExists(filepath) === false) {
    return false;
  }
  fs.readdir(dirPath, (err, list) => {
    if (err) { console.log('file error'); return false; }

    const result = list.filter(file => path.extname(file).toLowerCase() === `.${fileExt}`);

    result.forEach((item) => {
      console.log(item);
    });

    return result;
  });
  console.log(true);
  return true;
};
  // console.log('working');
  return true;
};

module.exports = io;
