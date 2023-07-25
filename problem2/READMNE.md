# Function `improvedFunc`

## Explanation

The `improvedFunc(s, a, b)` is an enhanced version of the original function `func(s, a, b)`. It takes a string `s` and two symbols `a` and `b` as input and aims to find the last occurrences of these symbols in the string `s`. It then returns the index of the last occurrence of either symbol. If both symbols are not found in the string, it returns -1.

The improved function makes use of the `lastIndexOf()` method, which directly provides the last index of a substring in a string. This simplifies the logic and enhances readability, resulting in a more efficient implementation.

## Function Signature

```js
function improvedFunc(s, a, b)
```

## Parameters

- `s`: The input string in which the last occurrences of symbols `a` and `b` will be searched.
- `a`: The first symbol to search for in the string.
- `b`: The second symbol to search for in the string.

## Return Value

The function will return the index of the last occurrence of either symbol `a` or `b` in the input string `s`. If both symbols are not found, it will return -1.

## Example Usage

```js
const result1 = improvedFunc("abcabcabc", "a", "b");
console.log(result1); // Output: 6 (last occurrence of 'b')

const result2 = improvedFunc("hello", "l", "o");
console.log(result2); // Output: 4 (last occurrence of 'o')

const result3 = improvedFunc("banana", "z", "x");
console.log(result3); // Output: -1 (symbols 'z' and 'x' not found)
```

By using `improvedFunc`, you can find the last occurrence of symbols `a` and `b` in the given string more efficiently and with simpler code. This function is a better alternative to the original `func` for such tasks.
