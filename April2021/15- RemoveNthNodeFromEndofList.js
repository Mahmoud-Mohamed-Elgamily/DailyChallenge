/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const result = {};
  let start = head;
  let i = 0;
  while (head) {
    result[i] = head;
    head = head.next;
    i++;
  }
  result[i - n - 1]
    ? (result[i - n - 1].next = result[i - n + 1] ?? null)
    : (start = start.next);
  return start;
};
