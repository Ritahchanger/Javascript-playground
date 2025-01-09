class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return null;
        }
        this.#insertRecursively(this.root, newNode);
    }
    #insertRecursively(current,newNode){
        if(newNode.value < current.value){
            if(!current.left){
                current.left = newNode
            }else{
                this.#insertRecursively(current.left,newNode)
            }
        }else{
            if(!current.right){
                current.right = newNode
            }else{
                this.#insertRecursively(current.right,newNode)
            }
        }
    }


    inOrderTraversal(node=this.root){

        if(node){
            this.inOrderTraversal(node.left)
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }

    }

    preOrderTraversal(node=this.root){

        if(node){
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }

    }

    postOrderTraversal(node = this.root){

        if(node){

            this.postOrderTraversal(node.left)
            this.postOrderTraversal(node.right)
            console.log(node.value)
        }

    }

    search(value,node = this.root){

        if(!node) return false;

        if(value === node.value ) return true;

        if(value < node.value){
            return this.search(value,node.left)
        }else{
            return this.search(value,node.right)
        }

    }

}
