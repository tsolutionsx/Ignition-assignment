// ## 1
// Create function `dscount` that returns the number of successive symbols in
// a string, case-insensitive
// This function should pass following tests:
// ```js
// "use strict";
// try {
// test(dscount, ['ab___ab__', 'a', 'b'], 2);
// test(dscount, ['___cd____', 'c', 'd'], 1);
// test(dscount, ['de_______', 'd', 'e'], 1);
// test(dscount, ['12_12__12', '1', '2'], 3);
// test(dscount, ['_ba______', 'a', 'b'], 0);
// test(dscount, ['_a__b____', 'a', 'b'], 0);
// test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
// test(dscount, ['aAa', 'a', 'a'], 2);
// console.info("Congratulations! All tests passed.");
// } catch(e) {
// console.error(e);
// }
// function test(call, args, count, n) {
// let r = (call.apply(n, args) === count);
// console.assert(r, `Found items count: ${count}`);
// if (!r) throw "Test failed!";
// }
// ```

function dscount(str, symbol1, symbol2) {
  let count = 0;
  const pattern = new RegExp(symbol1 + symbol2, "gi");
  const matches = str.match(pattern);
  if (matches) {
    count = matches.length;
  }
  return count;
}
