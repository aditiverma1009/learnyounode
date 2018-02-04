
const tester = require('./async_io.js');

describe('To check all possible cases', () => {
  test('null', () => {
    expect(tester(null)).toBe(false);
  });
  test('undefined', () => {
    expect(tester(undefined)).toBe(false);
  });
});
// can't check console.log as the function read file is async
// console is not called
describe('To check if path exists', () => {
  test('If path exists', (done) => {
    function callback(data) {
      expect(data).toBe(3);
      done();
    }
    tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt', callback);
  });
  test('If the data is a number', (done) => {
    function callback(data) {
      expect(typeof (data)).toBe(typeof (1));
      done();
    }
    tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt', callback);
  });

  // test('If path does not exists', () => {
  //   expect(tester('/Users/aditiverma/Documents/GitHub/learnyounode/adi.txt')).toBe(false);
  // });
  // NOT BEING ABLE TO CHECK FOR INCORRECT PATH -HELP
});
