const tester = require('./httpcollect');

describe('To check all invalid cases', () => {
  test('null', (done) => {
    function callback(data) {
      expect(data).toBe(false);
      done();
    }
    tester(null, callback);
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
    // global.console.log = jest.fn();
    // tester('http://www.oplador.com', callback);
    // expect(console.log).toHaveBeenCalledWith(true);

    function callback(data) {
      expect(data).toBe(true);
      done();
    }
    tester('http://www.oplador.com', callback);
    // global.console.log = jest.fn();
  });
});
