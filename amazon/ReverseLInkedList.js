class Node{

    constructor(val,next = null){

        this.val = val;

        this.next = next;

    }

}


class ListNode{

    constructor(){

        this.head = null;

    }

    reverseList(){

        let prev = null;
        
        let current = head;

        while(current !== null){

            let temp = current.next;

            current.next = prev;

            prev = current;

            current = temp


        }


        return prev;


    }


}