
const tester = require('./my_first_io');

describe('To check all possible cases', () => {
  test('null', () => {
    // global.console.log = jest.fn();
    expect(tester(null)).toBe(false);
  });
  test('undefined', () => {
    // global.console.log = jest.fn();
    expect(tester(undefined)).toBe(false);
  });
});
describe('To check console.log activity', () => {
  test('checking working of console.log for file with 3 lines', () => {
    global.console.log = jest.fn();
    tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
    expect(console.log).toHaveBeenCalledWith(3);
  });
  test('checking working of console.log for empty file', () => {
    global.console.log = jest.fn();
    tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi2.txt');
    expect(console.log).toHaveBeenCalledWith(0);
  });
});
describe('To check path', () => {
  test('correctness of path', () => {
    global.console.log = jest.fn();
    tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
    expect(console.log).toHaveBeenCalledWith(3);
  });
});
describe('To check console.log', () => {
  test('Ouput should be a number', () => {
    global.console.log = jest.fn();
    expect(typeof (tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt'))).toBe('number');
  });
});
