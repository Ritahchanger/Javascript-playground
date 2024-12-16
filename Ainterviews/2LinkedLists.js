class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

function printLinkedList(head){
    let current = head;
    while(current!==null){
        console.log(current.value);
        current = current.next;
    }
}

function appendToLinkedList(head,value){    
    const newNode = new Node(value);

    if(head === null){
        return newNode;
    }

    let current = head

    while(current.next!==null){

        current = current.next;

    }

    current.next = newNode;

    return head;

}

appendToLinkedList(head,40)

appendToLinkedList(head,40)
