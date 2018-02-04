const tester = require('./module');

describe('To check if path exists', () => {
  test('If path exists', (done) => {
    function callback(err, data) {
      if (err) {
        return console.log(err);
      }
      expect(data).toEqual(['aditi1.txt', 'aditi2.txt', 'aditi3.TXT']);
      return done();
    }
    tester('/Users/aditiverma/Documents/GitHub/learnyounode/', 'txt', callback);
  });
  it('testing module.exports for return type', () => {
    expect(typeof tester).toBe('function');
  });
});
