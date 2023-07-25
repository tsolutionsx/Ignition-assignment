# Function `drawRating`

## Description

The `drawRating` function is a simple utility function that generates a star rating based on the provided vote value. It takes a numerical `vote` value as input and returns a string representing the corresponding star rating. The function calculates the number of filled stars (★) and empty stars (☆) based on the vote value and formats them accordingly.

## Function Signature

```js
function drawRating(vote)
```

## Parameters

- `vote`: A numerical value representing the vote (rating) for which the star rating needs to be generated.

## Return Value

The function returns a string representing the star rating based on the vote value. It calculates the number of filled stars (★) based on the vote value divided by 20 and then rounds it up to the nearest whole number using `Math.ceil()`. The remaining stars are empty (☆), and the string is formatted accordingly.

## Example Usage

```js
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
```

The `drawRating` function is a convenient way to represent vote values visually with stars, providing a quick and intuitive rating representation.
