// Use 3 pointers: prev, current, next
function reverseLinkedList(head){
    
    let prev = null;

    let current = head;

    while(current!==null){

        let nextNode = current.next;

        current.next = prev;

        prev = current;

        current = nextNode;

    }

    return prev;

}