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

        if(this.head === null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }

    display(){
        let current = this.head;
        let elements = [];
        while(current !== null){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join('->'));
    }
    find(data){
        let current = this.head;
        while(current!==null){
            if(current.data === data) return current;
            current = current.next;
        }
        return null
    }

}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.display()