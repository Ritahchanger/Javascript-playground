//Check if a linkedList has a cycle and remove it
class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
function detectCycle(head){

    let slow = head;

    let fast = head;

    while(fast && fast.next){

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

const head = new ListNode(1);

head.next = new ListNode(2);

head.next.next = new ListNode(3)

head.next.next.next = head.next


console.log(head)

console.log(detectCycle(head))



// function to detect a cycle in a linked list

function hasCycle(head){

    
    let slow = head;

    
    let fast = head;

    
    while(fast  && fast.next ){

        
        slow = slow.next;


        fast = fast.next.next;


        if(slow === fast){

            return true;

        };

    }

    return false

}

console.log(hasCycle(head))