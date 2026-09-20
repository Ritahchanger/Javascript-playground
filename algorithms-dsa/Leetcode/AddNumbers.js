// 2. Add Two Numbers (Linked List)
// Problem: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
  
    while (l1 !== null || l2 !== null || carry !== 0) {
      const x = l1 ? l1.val : 0;
      const y = l2 ? l2.val : 0;
      const sum = x + y + carry;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
  
    return dummyHead.next;
  }
  