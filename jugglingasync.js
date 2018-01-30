const bl = require('bl');
const http = require('http');

let count = 0;
const results = [];
const printResults = () => {
  for (let i = 0; i < 3; i += 1) {
    console.log(results[i]);
  }
};
const httpGet = (index) => {
  http.get(process.argv[2 + index], (response) => {
    response.pipe(bl((err, data) => {
      if (err) { return console.error(err); }

      results[index] = data.toString;
      count += 1;
      if (count === 3) {
        printResults();
      }
      return true;
    }));
  });
};
httpGet();
module.exports = httpGet;
