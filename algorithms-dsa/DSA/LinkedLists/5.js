class Node{

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

        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;

        while(current.next!==null){

            current = current.next;

        }

        current.next = newNode;

    }

    traverse(){

        let current = this.head;

        const result = []

        while(current!==null){

            result.push(current.value);

            current = current.next;

        }

        console.log(result.join("->"))

    }



    prepend(value){

        const newNode = new Node(value);

        newNode.next = this.head;

        this.head = newNode;

    }

    delete(data){

        if(!this.head) return;

        if(this.head.data === data){
            this.head = this.head.next
            return;
        }
        let current = this.head;

        while(current.next && current.next.data !== data){

            current = current.next;

        }

        if(current.next){

            current.next = current.next.next

            return;
        }

    }

}

const list = new LinkedList();

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
list.append(80)
list.append(90)
list.append(100)

list.prepend(20)
list.prepend(30)
list.prepend(40)

console.log(list)

list.traverse();