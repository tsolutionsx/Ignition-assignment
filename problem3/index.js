function drawRating(vote) {
  const stars = Math.ceil(vote / 20);
  return "★".repeat(stars) + "☆".repeat(5 - stars);
}

console.log(drawRating(0));   // ★☆☆☆☆
console.log(drawRating(1));   // ★☆☆☆☆
console.log(drawRating(50));  // ★★★☆☆
console.log(drawRating(99));  // ★★★★★
