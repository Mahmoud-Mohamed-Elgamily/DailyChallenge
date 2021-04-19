/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let less = [];
  let xHead;
  let prev;
  while (head?.val) {
    if (head.val < x || !xHead) {
      less.push(head);
      if (xHead) prev.next = head.next;
    }
    if (head.val == x) xHead = head;
    prev = head;
    head = head.next;
  }

  less = less.map((i) => {
    i.next = null;
    return i;
  });

  let result = less.shift();
  let next = result;
  for (const head of less) {
    next.next = head;
    next = head;
  }
  next.next = xHead;

  return result;
};
