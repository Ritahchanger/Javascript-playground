// Use 3 pointers: prev, current, next
function reverseLinkedList(linkedlist){

    let prev = null;

    let current = linkedlist;

    while(current!==null){

        let nextNode = current.next;

        current.next = prev;

        prev = current;

        current = nextNode

    }

    return prev;

}


