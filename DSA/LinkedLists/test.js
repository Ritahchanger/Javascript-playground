class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
            return this.head;
        }
        let current = this.head;

        while(current.next !== null){
            current = current.next;
        }

        current.next = newNode;

        return this.head;

    }

    printList(){
        let current = this.head;
        const result = [];
        while(current){
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join("  ->  "))
    }

}
function findMiddle(head){
    let slow = head;
    let fast = head;
    while(fast!==null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


function detectCycle(head){

    let slow = head;

    let fast = head;

    while(fast !==null && fast.next !== null){

        slow = slow.next;

        fast = fast.next.next;

        if(slow === fast){

            removeCycle(slow,head);

            return true;

        }

    }

    return false;

}

function removeCycle(loopNode,head){

    let ptr1 = head;

    let ptr2 = loopNode;

    while(ptr1.next !== ptr2.next){

        ptr1 = ptr1.next;

        ptr2 = ptr2.next;

    }

    ptr2.next = null;

}
