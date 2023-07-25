# Function `dscount`

## Description

The `dscount` function is designed to count the number of successive occurrences of two symbols in a given string, considering the symbols in a case-insensitive manner. It takes three arguments: the input string and two symbols to count. The function will return the count of successive occurrences of the two symbols in the string.

## Function Signature

```js
function dscount(str, symbol1, symbol2)
```

## Parameters

- `str`: The input string in which the successive occurrences of the two symbols will be counted.
- `symbol1`: The first symbol to search for in the string.
- `symbol2`: The second symbol to search for in the string.

## Return Value

The function will return the number of successive occurrences of the two symbols (`symbol1` and `symbol2`) in the input string (`str`).

## Tests

The function `dscount` should pass the following tests:

```js
"use strict";
try {
  test(dscount, ["ab___ab__", "a", "b"], 2);
  test(dscount, ["___cd____", "c", "d"], 1);
  test(dscount, ["de_______", "d", "e"], 1);
  test(dscount, ["12_12__12", "1", "2"], 3);
  test(dscount, ["_ba______", "a", "b"], 0);
  test(dscount, ["_a__b____", "a", "b"], 0);
  test(dscount, ["-ab-аb-ab", "a", "b"], 2);
  test(dscount, ["aAa", "a", "a"], 2);
  console.info("Congratulations! All tests passed.");
} catch (e) {
  console.error(e);
}
```

## Helper Function: `test`

The `test` function is a helper function used for testing the `dscount` function. It takes four arguments:

- `call`: The function to be tested (`dscount` in this case).
- `args`: An array containing the arguments to be passed to the function.
- `count`: The expected count of successive occurrences.
- `n`: (Optional) The context in which the function should be called (null by default).

The `test` function will execute the provided function with the given arguments and compare the result with the expected count. If the count does not match the expected value, an error will be thrown.

```js
function test(call, args, count, n) {
  let r = call.apply(n, args) === count;
  console.assert(r, `Found items count: ${count}`);
  if (!r) throw "Test failed!";
}
```

## Example Usage

```js
const result = dscount("ab___ab__", "a", "b");
console.log(result); // Output: 2
```

## Note

Ensure to have the `dscount` function correctly defined and tested before using it in other parts of the application.
