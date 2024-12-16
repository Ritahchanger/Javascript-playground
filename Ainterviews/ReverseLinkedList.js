// Given a singly linked list, implement an algorithm that reverses the list in place.
class ListNode{

    constructor(val =  0){

        this.val = val;

        this.next = null;

    }

}

function reverseLinkedList(head){

    let prev = null;

    let current = head;

    while(current!==null){

        const nextNode = current.next;

        current.next = prev;

        prev = current;

        current = nextNode;

    }

    return prev;

}


const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)

node1.next = node2

node2.next = node3

let reversedHead = reverseLinkedList(node1)

while(reversedHead){

    console.log(reversedHead.val);

    reversedHead = reversedHead.next;

}

