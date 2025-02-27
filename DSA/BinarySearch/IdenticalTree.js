// How do you check if two trees are identical?


// Solution use, recursion to compare the nodes of both tree


function areIdentical(tree1,tree2){

    if(!tree1 && !tree2) return true;

    if(!tree1 || !tree2) return false;

    return (

        tree1.val === tree2.val && areIdentical(tree1.left) && areIdentical(tree1.right, tree2.right)

    );

}


// Time complexity 0(n) every node is compared


// Space complexity 0(h) due to recursion stack!