const tester = require('./babysteps');

describe('To check all possible cases', () => {
  test('only digits', () => {
    global.console.log = jest.fn();
    tester(['', '', '1', '2', '3']);
    expect(console.log).toHaveBeenCalledWith(6);
  });
  test('other numbers', () => {
    global.console.log = jest.fn();
    tester(['', '', '100', '200', '311']);
    expect(console.log).toHaveBeenCalledWith(611);
  });
  test('empty array', () => {
    // global.console.log = jest.fn();
    expect(tester([])).toBe(0);
  });
  test('null', () => {
    // global.console.log = jest.fn();
    expect(tester(null)).toBe(false);
  });
  test('undefined', () => {
    // global.console.log = jest.fn();
    expect(tester(undefined)).toBe(false);
  });
});

describe('To check console.log', () => {
  test('checking working of console.log', () => {
    global.console.log = jest.fn();
    tester(['', '', 2, 3, 4]);
    expect(console.log).toHaveBeenCalledWith(9);
  });
});
