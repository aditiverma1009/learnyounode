const tester = require('./filteredls');

describe('To check all possible cases', () => {
  test('null', () => {
    // global.console.log = jest.fn();
    expect(tester(null, null)).toBe(false);
  });
  test('undefined', () => {
    // global.console.log = jest.fn();
    expect(tester(undefined, undefined)).toBe(false);
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
