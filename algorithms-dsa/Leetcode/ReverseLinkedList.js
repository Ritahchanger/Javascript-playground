
// Given a singly linked list, implement an algorithm that reverses the list in place.
class Node{

    constructor(value){

        this.value = value;

        this.next = null;

    }

}

function reverseLinkedList(head){

    let prev = null;

    let current = head;

    while(current!==null){

        let next = current.next;

        current.next = prev;

        prev = current;

        current = next;

    }

    return prev;

}

let head = new Node(1)

head.next = new Node(2);

head.next.next = new Node(3);

let reversedHead = reverseLinkedList(head);

console.log(reversedHead);