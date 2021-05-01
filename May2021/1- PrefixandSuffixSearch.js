var WordFilter = function (words) {
  this.words = Object.entries(
    words.reduce((long, word, index) => {
      long[word] = index;
      return long;
    }, {})
  );
};

WordFilter.prototype.f = function (prefix, suffix) {
  prefix = `^${prefix}`;
  suffix = `${suffix}$`;
  return this.words.reduce(
    (long, [word, index]) => {
      if (
        word.match(prefix) &&
        word.match(suffix) &&
        word.length >= long.word.length
      )
        return { word, index };
      return long;
    },
    { word: '', index: -1 }
  ).index;
};
