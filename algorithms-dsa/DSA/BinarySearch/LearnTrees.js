class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    inOrderTraversal(node = this.root){
        if(node){
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
    insert(value){
        const newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
            console.log(`Added ${value} as the root of the tree.`);
        }else{
            this.#insertHelper(this.root,newNode);
        }
    }



    #insertHelper(currentNode,newNode){
        if(newNode.value < currentNode.value){
            if(!currentNode.left){
                currentNode.left = newNode;
                console.log(`Added ${newNode.value} to the left node of the ${currentNode.value} `)
            }else{
                this.#insertHelper(currentNode.left,newNode)
            }
        }else{
            if(!currentNode.right){
                currentNode.right = newNode
                console.log(`Added ${newNode.value} to the right node of the ${currentNode.value} `)
            }else{
                this.#insertHelper(currentNode.right,newNode)
            }
        }
    }


    delete(value){

        this.root = this.#deleteHelper(this.root,value);

    }

    #deleteHelper(node,value){

        if(!node){
            return null;
        }
        if(value < node.value){
            node.left = this.#deleteHelper(node.left,value);
        }else if(value > node.value){

            node.right = this.#deleteHelper(node.right,value);

        }else{

            if(!node.left && !node.right){

                return null;

            }

            if(!node.left){
                return node.right;
            }

            if(!node.right){

                return node.left;

            }

            const minValue = this.#findMin(node.right);

            node.value = minValue

            node.right = this.#deleteHelper(node.right,minValue);

        }

        return node;

    }

    #findMin(node){

        while(node.left){

            node = node.left

        }return node.value
    }


}


const myTree = new Tree()

myTree.insert(10)
myTree.insert(5)
myTree.insert(15)
myTree.insert(3)
myTree.insert(7)
myTree.insert(8)
myTree.insert(9)
myTree.insert(10)

myTree.inOrderTraversal()