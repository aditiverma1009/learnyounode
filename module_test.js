const tester = require('./module_original');

const dir = process.argv[2];
const ext = process.argv[3];
tester(dir, ext, (err, data) => {
  if (err) { console.log('error'); } else {
    data.forEach(file => console.log(file));
  }
});
module.exports = tester;
//
// describe('To check all possible cases', () => {
//   test('null', () => {
//     // global.console.log = jest.fn();
//     expect(tester(null, null)).toBe(false);
//   });
//   test('undefined', () => {
//     // global.console.log = jest.fn();
//     expect(tester(undefined, undefined)).toBe(false);
//   });
// });
// // describe('To check console.log activity', () => {
// //   test('checking working of console.log for file with 3 lines', () => {
// //     global.console.log = jest.fn();
// //     tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi1.txt');
// //     expect(console.log).toHaveBeenCalledWith(3);
// //   });
// //   test('checking working of console.log for empty file', () => {
// //     global.console.log = jest.fn();
// //     tester('/Users/aditiverma/Documents/GitHub/learnyounode/aditi2.txt');
// //     expect(console.log).toHaveBeenCalledWith(0);
// //   });
// // });
// describe('To check path', () => {
//   test('correctness of path', () => {
//     global.console.log = jest.fn();
//     tester('/Users/aditiverma/Documents/GitHub/learnyounode/', 'txt');
//     expect(console.log).toHaveBeenCalledWith(true);
//   });
// });
//
// describe('To check path', () => {
//   test('correctness of path', () => {
//     global.console.log = jest.fn();
//     tester('/Users/aditiverma/Documents/GitHub/learnyounode/', 'TXT');
//     expect(console.log).toHaveBeenCalledWith(true);
//   });
// });
