//Finding the height of a binary tree

// Solution: Use recursion to compute the height, the height of a tree is the maximum depth from the root to any leaf

function findHeight(root){

    if(!root){
        return 0;
    }

    return 1 * Math.max(findHeight(root.left), findHeight(root.right));

}


// Time complexity 0(n) Each node is visited once:

// Space complexity 0(h) Each recursion stack uses memory proportional to the height of the tree, where h is the height