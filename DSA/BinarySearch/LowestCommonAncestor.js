class TreeNode{

    constructor(value){

        this.value = value;

        this.left = null;

        this.right = null;

    }

}

let parent = new TreeNode(3)

parent.left = new TreeNode(5)

parent.right = new TreeNode(1)


function findLCA(root,p,q){

    if(!root || root === p || root === q ){
        return root;
    }

    let left = findLCA(root.left,p,q);

    let right = findLCA(root.right,p,q);

    if(left && right) return root;

    return left || right;

}