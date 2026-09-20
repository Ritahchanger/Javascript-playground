class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null
    }

    append(data){

        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }else{
            let current = this.head;
            while(current.next!==null){
                current = current.next;
            }
            current.next = newNode;
        }

    }

    prepend(data){

        const newNode = new Node(data);
        
        newNode.next = this.head;

        this.head = newNode;


    }

    find(data){

        let current = this.head;

        while(current!==null){

            if( current.data === data ) return current;

            current = current.next;

        }

        return null;

    }

    delete(data){

        if(!this.head) return;

        if(this.head.data === data){

            this.head = this.head.next;

            return

        }

        let current = this.head;

        while(current.next && current.next.data !== data){

            current = current.next;

        }
        if(current.next){

            current.next = current.next.next

        }

    }

    traverse(){
        let current = this.head
        const result = []

        while(current!==null){
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join("->"))
    }

}

const list = new LinkedList();

list.prepend(30)

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)

console.log(list.find(50))

list.traverse()