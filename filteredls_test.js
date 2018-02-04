const tester = require('./filteredls');

describe('To check invalid path', () => {
  test('null', (done) => {
    function callback(data) {
    // global.console.log = jest.fn();
      expect(data).toEqual([]);
      done();
    }
    tester('ioio/', 'txt', callback);
  });
  test('testing with invalid extension', (done) => {
    function callback(data) {
    // global.console.log = jest.fn();
      expect(data).toEqual([]);
      done();
    }
    tester('./', 'blah', callback);
  });
});
describe('To check if path exists', () => {
  test('If path exists', (done) => {
    function callback(data) {
      expect(data).toEqual(['aditi1.txt', 'aditi2.txt', 'aditi3.TXT']);
      done();
    }
    tester('/Users/aditiverma/Documents/GitHub/learnyounode/', 'txt', callback);
  });
  test('If the data is a number', (done) => {
    function callback(data) {
      expect(typeof (data)).toBe(typeof ([]));
      done();
    }
    tester('/Users/aditiverma/Documents/GitHub/learnyounode/', 'txt', callback);
  });
  // NOT BEING ABLE TO CHECK FOR INCORRECT PATH -HELP
});
