// testing for sync functions
const tester = require('./httpclient');

describe('To check all valid cases', () => {
  test('with a valid url', (done) => {
    const callback = (data) => {
      expect(data).toBe(200);
      done();
    };
    tester('http://www.oplador.com', callback);
  });
  test('with a invalid url', (done) => {
    const callback = (data) => {
      expect(data).toBe('ENOTFOUND');
      done();
    };
    tester('http://www.oplaaador.com', callback);
  });
});
