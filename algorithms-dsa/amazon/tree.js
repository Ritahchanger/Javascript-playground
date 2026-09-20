function TreeNode(val, left =null, right = null){

    this.val = val;

    this.left = left;

    this.right = right;

}

function inorderTraversal(root){

    const result = [];

    function traverse(node){

        if(!node) return;

        traverse(node.left);

        result.push(node.val);

        traverse(node.right);

    }

    traverse(root);

    return result;

}

function preorderTraversal(root){

    const result = [];

    function traverse(node){

        if(!node) return ;

        result.push(node.val);

        traverse(node.left)

        traverse(node.right)

    }

    traverse(root);

    return result;

}

function postOrderTraversal(root){


    const result = [];

    function traverse(node){

        if(!node) return ;

        traverse(node.left)

        traverse(node.right)

        result.push(node.val)

    }

    traverse(root);


    

    return result;

}

