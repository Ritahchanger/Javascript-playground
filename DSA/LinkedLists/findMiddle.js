// Use two pointer approach
function findMiddle(head){

    let slow = head;

    let fast = head;

    while(fast && fast.next){

        slow = slow.next;

        fast = fast.next.next;

    }

    return slow
}