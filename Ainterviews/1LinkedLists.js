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