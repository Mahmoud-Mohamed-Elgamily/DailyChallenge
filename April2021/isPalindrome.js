const isPalindrome = function (head) {
  let result = '';
  while (head) {
    result += head.val;
    head = head.next;
  }
  const length = result.length - 1;
  let returnValue = true;
  for (let i = 0; i < result.length / 2; i++) {
    if (result[i] != result[length - i]) returnValue = false;
  }

  return returnValue;
};
