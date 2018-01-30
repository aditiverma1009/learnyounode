// testing for sync functions
const tester = require('./httpclient');

describe('To check all invalid cases', () => {
  test('null', (done) => {
    function callback(data) {
      expect(data).toBe('error');
      done();
    }
    tester(null, callback);
    // global.console.log = jest.fn();
  });
  test('undefined', (done) => {
    function callback(data) {
      expect(data).toBe('error');
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
      expect(data).toMatch('data');
      done();
    }
    tester('http://www.oplador.com', callback);
    // global.console.log = jest.fn();
  });
});
// error test case
// pass http://www.oplador.com/404
