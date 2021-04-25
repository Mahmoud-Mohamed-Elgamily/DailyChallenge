/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  let relationsCount = connections.reduce((res, connection) => {
    res[connection[0]]
      ? res[connection[0]].push(connection)
      : (res[connection[0]] = [connection]);
    res[connection[1]]
      ? res[connection[1]].push(connection)
      : (res[connection[1]] = [connection]);
    return res;
  }, {});

  const result = Object.values(relationsCount)
    .filter((key) => key.length == 1)
    .flat();
  return result;
};

console.log(
  criticalConnections(6, [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
    [3, 4],
    [4, 5],
    [5, 3],
  ])
); // [[1,3]]
