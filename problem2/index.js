function improvedFunc(s, a, b) {
  const aIndex = s.lastIndexOf(a);
  const bIndex = s.lastIndexOf(b);

  return Math.max(aIndex, bIndex);
}
