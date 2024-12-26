class ListNode{
    constructor(value){
        this.val = value;
        this.next = null
    }
}
function mergeTwoList(l1,l2){

    const dummy = new ListNode(0)

    let current = dummy;

    while(l1 !==null && l2 !==null){

        if( l1.val < l2.val ){

            current.next = l1;

            l1 = l1.next;

        }else{

            current.next = l2;

            l2 = l2.next;

        }

        current = current.next;

    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;

}