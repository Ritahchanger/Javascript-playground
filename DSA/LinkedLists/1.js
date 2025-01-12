class Node{

    constructor(data){

        this.data = data;

        this.next = null;

    }

}

class LinkedList{

    constructor(){

        this.head = null;

    }

    traverse(){

        let current = this.head;

        while(current!==null){

            console.log(current.data);

            current = current.next;

        }

    }

}


class ListNode{

    constructor(value){
        this.value = value;
        this.next = null
    }

}
let head = new ListNode(1)

head.next = new ListNode(2)

head.next.next = new ListNode(3)

console.log(head)

function reverseLinkedList(head){

    let prev = null;

    let current = head;

    while(current!==null){

        let nextKid = current.next;

        current.next = prev;

        prev = current;

        current = nextKid

    }

    return prev;

}