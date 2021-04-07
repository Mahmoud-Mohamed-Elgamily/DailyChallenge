/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const a = (s.slice(0, s.length / 2).match(/[aeiouAEIOU]/g) || []).length;
  const b = (s.slice(s.length / 2, s.length).match(/[aeiouAEIOU]/g) || [])
    .length;
  console.log(a, b);
  return a == b;
};

console.log(halvesAreAlike('textbook'));
