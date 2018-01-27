const tester = require('./program');

describe('To check all possible cases', () => {
  test('only uppercase', () => {
    global.console.log = jest.fn();
    tester('HELLO WORLD');
    expect(console.log).toHaveBeenCalledWith('HELLO WORLD');
  });
  test('only lowercase', () => {
    global.console.log = jest.fn();
    tester('hello world');
    expect(console.log).toHaveBeenCalledWith('hello world');
  });
  test('mixcase', () => {
    global.console.log = jest.fn();
    tester('hello WORLD');
    expect(console.log).toHaveBeenCalledWith('hello WORLD');
  });
  test('empty string', () => {
    global.console.log = jest.fn();
    tester('');
    expect(console.log).toHaveBeenCalledWith('');
  });
  test('null', () => {
    global.console.log = jest.fn();
    tester('null');
    expect(console.log).toHaveBeenCalledWith('null');
  });
  test('undefined', () => {
    global.console.log = jest.fn();
    tester('undefined');
    expect(console.log).toHaveBeenCalledWith('undefined');
  });
  test('digit', () => {
    global.console.log = jest.fn();
    tester('222');
    expect(console.log).toHaveBeenCalledWith('222');
  });
});

describe('To check typeof', () => {
  it('', () => {
    expect(typeof ('hello world')).toBe(typeof ('string'));
  });
});

describe('To check console.log', () => {
  test('checking working of console.log', () => {
    global.console.log = jest.fn();
    tester('hello world');
    expect(console.log).toHaveBeenCalledWith('hello world');
  });
});
