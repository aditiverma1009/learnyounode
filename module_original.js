// for verification
const moduleImported = require('./module');

const dir = process.argv[2];
const filterStr = process.argv[3];
moduleImported(dir, filterStr, (err, list) => {
  if (err) {
    return console.error('There was an error:', err);
  }

  list.forEach((file) => {
    console.log(file);
  });
  return true;
});


// entire under fn ...err list thingy
// is THE callback fn which is being completely passed as callback
// to module.js where it acts as callback fn


/* moduleImported() is used to call our module function.
Dir, filterStr, and a callback function are passed as arguments.
The callback receives list as an argument.
Inside of the callback function, we are looping through list with the forEach() method.
We are passing a callback function to the forEach() method.
The callback accepts file as an argument,
and logs file to the console with the console.log()method. */
