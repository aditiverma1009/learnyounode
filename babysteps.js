const validateIP = (validatearg) => {
  if (validatearg === null || validatearg === undefined) {
    return true;
  }
  return false;
};
const summing = (arg1) => {
  let total = 0;
  if (validateIP((arg1)) === true) {
    return false;
  }
  for (let i = 2; i < arg1.length; i += 1) {
    total += Number(arg1[i]);
  }
  console.log(total);
  return total;
};
// const argue = process.argv;
// summing(argue);
module.exports = summing;
