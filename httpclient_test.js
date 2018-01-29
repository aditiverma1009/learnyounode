// testing for sync functions
const tester = require('./httpclient');

describe('To check all invalid cases', () => {
  test('null', (done) => {
    function callback(data) {
      expect(data).toBe(false);
      done();
    }
    tester(null, callback);
    // global.console.log = jest.fn();
  });
  test('undefined', (done) => {
    function callback(data) {
      expect(data).toBe(false);
      done();
    }
    tester(undefined, callback);
    // global.console.log = jest.fn();
  });
});
// not working with url - but printing website response
describe('To check all possible cases', () => {
  test('testing url', (done) => {
    function callback(data) {
      expect(data).toBe(false);
      done();
    }
    tester('http://www.oplador.com', callback);
    // global.console.log = jest.fn();
  });
});
// describe('To check console.log activity', () => {
//   test('checking working of console.log for file with 3 lines', () => {
//     global.console.log = jest.fn();
//     tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
//     expect(console.log).toHaveBeenCalledWith(3);
//   });
//   test('checking working of console.log for empty file', () => {
//     global.console.log = jest.fn();
//     tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi2.txt');
//     expect(console.log).toHaveBeenCalledWith(0);
//   });
// });

//
//
// describe('To check path', () => {
//   test('correctness of path', () => {
//     global.console.log = jest.fn();
//     tester('/Users/aditiverma/Documents/GitHub/learnyounode/', 'TXT');
//     expect(console.log).toHaveBeenCalledWith(true);
//   });
// });
