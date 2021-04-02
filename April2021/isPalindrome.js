/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
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
