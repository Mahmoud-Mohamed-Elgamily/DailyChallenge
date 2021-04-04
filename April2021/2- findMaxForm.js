/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const getSubsets = (strs) => {
  return strs.reduce(
    (subsets, value) => {
      return subsets.concat(subsets.map((set) => value + ',' + set));
    },
    ['']
  );
};

const get01 = (concatinated) => {
  return concatinated.map((subset) => {
    const zeros = (subset.match(/0/g) || []).length;
    const ones = (subset.match(/1/g) || []).length;
    return [zeros, ones];
  });
};

const getResultIndex = (zerosAndOnes, zeros, ones) => {
  return zerosAndOnes.flatMap((value, index) =>
    value[0] <= zeros && value[1] <= ones ? index : []
  );
};

const getResult = (concatinated, resultIndexs) => {
  return resultIndexs.reduce((max, index) => {
    return concatinated[index].split(',').length - 1 > max
      ? concatinated[index].split(',').length - 1
      : max;
  }, 0);
};

const findMaxForm = (strs, zeros, ones) => {
  strs = strs.filter(
    (str) =>
      (str.match(/0/g) || []).length <= zeros &&
      (str.match(/1/g) || []).length <= ones
  );
  const concatinated = getSubsets(strs);
  const zerosAndOnes = get01(concatinated);
  const resultIndexs = getResultIndex(zerosAndOnes, zeros, ones);
  console.log(concatinated, zerosAndOnes, resultIndexs);
  return getResult(concatinated, resultIndexs);
};

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3));
