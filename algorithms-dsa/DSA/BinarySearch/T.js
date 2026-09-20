class BinaryTreeNode{

    constructor(value){

        this.value = value;

        this.left = null;

        this.right = null;

    }

}

const root = new BinaryTreeNode(10);

root.left = new BinaryTreeNode(5);

root.left.left = new BinaryTreeNode(9)

root.left.right = new BinaryTreeNode(12)

root.right = new BinaryTreeNode(8);

root.right.left = new BinaryTreeNode(13)

root.right.right = new BinaryTreeNode(13)

function inOrder(node){

    if(!node) return;

    inOrder(node.left);

    console.log(node.value);

    inOrder(node.right)

}