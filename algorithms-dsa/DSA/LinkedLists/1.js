class Node{

    constructor(val){
        this.value = val;
        this.next = null
    }

}

class LinkedList{

    constructor(){

        this.head = null
    }

    append(value){

        const newNode = new Node(value);

        if(this.head === null){

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

        console.log(result.join("   ->   "));

    }

}

const myList = new LinkedList();

myList.append(90)
myList.append(80)
myList.append(70)
myList.append(60)
myList.append(50)
myList.append(50)
myList.append(50)
myList.append(50)

myList.printList()